// Load environment variables first
require('dotenv').config();

const OpenAI = require('openai');
const { systemPrompt } = require('./prompts');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to make a chat completion call
const createChatCompletion = async (messages, options = {}) => {
  try {
    const completion = await openai.chat.completions.create({
      model: options.model || 'gpt-3.5-turbo',
      messages: messages,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 1000,
      top_p: options.top_p || 1,
      frequency_penalty: options.frequency_penalty || 0,
      presence_penalty: options.presence_penalty || 0,
      ...options
    });

    return {
      success: true,
      data: completion,
      message: completion.choices[0].message.content,
      usage: completion.usage
    };
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

// Function to make a simple text completion with system prompt
const generateResponse = async (prompt, options = {}) => {
  const messages = [
    {
      role: 'system',
      content: systemPrompt
    },
    {
      role: 'user',
      content: prompt
    }
  ];

  return await createChatCompletion(messages, options);
};

// Function to continue a conversation with system prompt
const continueConversation = async (conversationHistory, newMessage, options = {}) => {
  // Ensure system prompt is always first if not already present
  const hasSystemPrompt = conversationHistory.some(msg => msg.role === 'system');
  
  const messages = [
    ...(hasSystemPrompt ? [] : [{ role: 'system', content: systemPrompt }]),
    ...conversationHistory,
    {
      role: 'user',
      content: newMessage
    }
  ];

  return await createChatCompletion(messages, options);
};

// Function to start a new conversation with system prompt
const startConversation = async (userMessage, options = {}) => {
  const messages = [
    {
      role: 'system',
      content: systemPrompt
    },
    {
      role: 'user',
      content: userMessage
    }
  ];

  return await createChatCompletion(messages, options);
};

module.exports = {
  openai,
  createChatCompletion,
  generateResponse,
  continueConversation,
  startConversation,
  systemPrompt
};