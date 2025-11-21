const { continueConversation, startConversation } = require('../config/openai');
const { getRelevantData, formatDataForPrompt } = require('../utils/dataLoader');
const ChatHistory = require('../models/chatHistoryModel');

// Enhanced system prompt with university data
const createEnhancedSystemPrompt = (relevantData) => {
  return `You are ChatAOUra, an AI assistant for the Arab Open University (AOU) in Bahrain. You are knowledgeable, friendly, and helpful.

Your responsibilities:
1. Answer questions about AOU Bahrain accurately using the provided university data
2. Provide clear, step-by-step guidance for processes like admissions, registration, and examinations
3. If you don't have specific information, politely acknowledge this and suggest contacting the university directly
4. Maintain a professional yet approachable tone
5. Be concise but thorough in your responses

IMPORTANT RULES:
- Only provide information that exists in the university data provided below
- Do NOT fabricate or guess information
- If asked about information not in the data, say: "I don't have that specific information. Please contact the university's [relevant department] for accurate details."
- Always cite specific programs, courses, fees, or requirements accurately from the data

==== UNIVERSITY DATA ====
${formatDataForPrompt(relevantData)}
==== END OF UNIVERSITY DATA ====

Use this data to answer questions accurately. Format your responses in a clear, readable manner.`;
};

// Handle chat messages
const handleChat = async (req, res) => {
  try {
    const { message, conversationHistory, chatId } = req.body;
    const userId = req.user?._id; // Get from auth middleware

    console.log('=== Chat Request ===');
    console.log('User ID:', userId);
    console.log('Chat ID:', chatId);
    console.log('User object:', req.user);
    console.log('===================');

    // Validate input
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a non-empty string'
      });
    }

    // Get relevant data based on the user's question
    const relevantData = getRelevantData(message);
    
    // Create enhanced system prompt with relevant data
    const enhancedSystemPrompt = createEnhancedSystemPrompt(relevantData);

    let response;

    // If conversation history exists, continue the conversation
    if (conversationHistory && Array.isArray(conversationHistory) && conversationHistory.length > 0) {
      // Replace the system prompt with enhanced one containing relevant data
      const updatedHistory = conversationHistory.map(msg => {
        if (msg.role === 'system') {
          return { role: 'system', content: enhancedSystemPrompt };
        }
        return msg;
      });

      response = await continueConversation(updatedHistory, message, {
        model: 'gpt-4.1',
        temperature: 0.7,
        max_tokens: 1500
      });
    } else {
      // Start a new conversation with enhanced system prompt
      const messages = [
        { role: 'system', content: enhancedSystemPrompt },
        { role: 'user', content: message }
      ];

      response = await continueConversation([], message, {
        model: 'gpt-4.1',
        temperature: 0.7,
        max_tokens: 1500
      });
    }

    // Check if the response was successful
    if (!response.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to generate response from AI',
        details: response.error
      });
    }

    // Save or update chat history in database
    let chat;
    const newConversationHistory = [
      ...(conversationHistory || []),
      { role: 'user', content: message },
      { role: 'assistant', content: response.message }
    ];

    if (chatId && userId) {
      // Update existing chat
      console.log('Updating existing chat:', chatId);
      chat = await ChatHistory.findOneAndUpdate(
        { _id: chatId, userId: userId },
        {
          $push: {
            messages: [
              { role: 'user', content: message, timestamp: new Date() },
              { role: 'assistant', content: response.message, timestamp: new Date() }
            ]
          },
          $set: {
            conversationHistory: newConversationHistory,
            lastMessageAt: new Date()
          }
        },
        { new: true }
      );
      console.log('Chat updated:', chat ? 'success' : 'failed');
    } else if (userId) {
      // Create new chat session
      console.log('Creating new chat for user:', userId);
      chat = new ChatHistory({
        userId: userId,
        messages: [
          { role: 'user', content: message, timestamp: new Date() },
          { role: 'assistant', content: response.message, timestamp: new Date() }
        ],
        conversationHistory: newConversationHistory,
        lastMessageAt: new Date()
      });
      
      // Generate title from first message
      chat.generateTitle();
      await chat.save();
      console.log('New chat created with ID:', chat._id);
    } else {
      console.log('No userId found, skipping database save');
    }

    // Return the response
    return res.status(200).json({
      success: true,
      message: response.message,
      usage: response.usage,
      conversationHistory: newConversationHistory,
      chatId: chat?._id,
      title: chat?.title
    });

  } catch (error) {
    console.error('Chat Controller Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
};

// Get all chat history for a user
const getChatHistory = async (req, res) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const chats = await ChatHistory.find({ userId: userId })
      .sort({ lastMessageAt: -1 })
      .select('_id title lastMessageAt createdAt')
      .limit(50);

    return res.status(200).json({
      success: true,
      chats: chats
    });

  } catch (error) {
    console.error('Get Chat History Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch chat history',
      details: error.message
    });
  }
};

// Get a specific chat by ID
const getChatById = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const chat = await ChatHistory.findOne({ _id: chatId, userId: userId });

    if (!chat) {
      return res.status(404).json({
        success: false,
        error: 'Chat not found'
      });
    }

    return res.status(200).json({
      success: true,
      chat: chat
    });

  } catch (error) {
    console.error('Get Chat Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch chat',
      details: error.message
    });
  }
};

// Delete a chat
const deleteChat = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const chat = await ChatHistory.findOneAndDelete({ _id: chatId, userId: userId });

    if (!chat) {
      return res.status(404).json({
        success: false,
        error: 'Chat not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Chat deleted successfully'
    });

  } catch (error) {
    console.error('Delete Chat Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete chat',
      details: error.message
    });
  }
};

// Handle streaming chat (for future implementation)
const handleStreamChat = async (req, res) => {
  // TODO: Implement streaming responses for better UX
  res.status(501).json({
    success: false,
    error: 'Streaming not yet implemented'
  });
};

module.exports = {
  handleChat,
  handleStreamChat,
  getChatHistory,
  getChatById,
  deleteChat
};
