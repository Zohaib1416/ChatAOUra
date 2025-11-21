import { useState, useRef, useEffect } from 'react';
import { sendMessage, getChatById } from '../services/chatService';

// Helper function to format bot messages
const formatBotMessage = (content) => {
  // Split content into lines
  const lines = content.split('\n');
  
  return lines.map((line, index) => {
    // Check if line is a header (starts with ###)
    if (line.trim().startsWith('###')) {
      return (
        <h3 key={index} className="font-bold text-base mt-3 mb-2 text-[#012e58]">
          {line.replace(/^###\s*/, '')}
        </h3>
      );
    }
    
    // Check if line is a subheader (starts with **)
    if (line.trim().match(/^\*\*.*\*\*:?$/)) {
      return (
        <h4 key={index} className="font-semibold text-sm mt-2 mb-1">
          {line.replace(/\*\*/g, '')}
        </h4>
      );
    }
    
    // Check if line is a numbered list item
    if (line.trim().match(/^\d+\.\s+/)) {
      return (
        <div key={index} className="ml-4 my-1">
          <span className="font-medium">{line.match(/^\d+\./)[0]}</span>
          <span className="ml-2">{line.replace(/^\d+\.\s+/, '')}</span>
        </div>
      );
    }
    
    // Check if line is a bullet point
    if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
      return (
        <div key={index} className="ml-4 my-1 flex">
          <span className="mr-2">•</span>
          <span className="flex-1">{line.replace(/^[-•]\s+/, '')}</span>
        </div>
      );
    }
    
    // Check for bold text within the line
    const hasBold = line.includes('**');
    if (hasBold) {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={index} className="my-1">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
            }
            return <span key={i}>{part}</span>;
          })}
        </p>
      );
    }
    
    // Regular paragraph
    if (line.trim()) {
      return <p key={index} className="my-1">{line}</p>;
    }
    
    // Empty line for spacing
    return <div key={index} className="h-2" />;
  });
};

const Chat = ({ currentChatId, onChatCreated, isVisitor = false }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm ChatAOUra, your AI assistant for Arab Open University Bahrain. How can I help you today?",
      timestamp: new Date(),
      isComplete: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [chatId, setChatId] = useState(currentChatId);
  const messagesEndRef = useRef(null);
  const streamingIntervalRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup streaming interval on unmount
  useEffect(() => {
    return () => {
      if (streamingIntervalRef.current) {
        clearInterval(streamingIntervalRef.current);
      }
    };
  }, []);

  // Load chat when currentChatId changes
  useEffect(() => {
    if (currentChatId) {
      loadChat(currentChatId);
    } else {
      // Reset to new chat
      setMessages([
        {
          id: 1,
          type: 'bot',
          content: "Hello! I'm ChatAOUra, your AI assistant for Arab Open University Bahrain. How can I help you today?",
          timestamp: new Date(),
          isComplete: true
        }
      ]);
      setConversationHistory([]);
      setChatId(null);
    }
  }, [currentChatId]);

  const loadChat = async (id) => {
    try {
      const result = await getChatById(id);
      if (result.success) {
        const chat = result.data;
        
        // Convert messages to display format
        const displayMessages = [
          {
            id: 0,
            type: 'bot',
            content: "Hello! I'm ChatAOUra, your AI assistant for Arab Open University Bahrain. How can I help you today?",
            timestamp: new Date(chat.createdAt),
            isComplete: true
          },
          ...chat.messages.map((msg, index) => ({
            id: index + 1,
            type: msg.role === 'user' ? 'user' : 'bot',
            content: msg.content,
            timestamp: new Date(msg.timestamp),
            isComplete: true
          }))
        ];
        
        setMessages(displayMessages);
        setConversationHistory(chat.conversationHistory || []);
        setChatId(id);
      }
    } catch (error) {
      console.error('Error loading chat:', error);
    }
  };

  const handleSuggestedQuestion = async (question) => {
    if (isTyping) return;
    
    // Set the input value and trigger send
    setInputValue(question);
    
    // Send the message immediately
    await sendMessageContent(question);
  };

  const animateBotResponse = (messageId, fullContent, newChatId, newTitle) => {
    let currentIndex = 0;
    const charsPerInterval = 3; // Characters to add per interval for faster animation
    
    // Clear any existing interval
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
    }

    streamingIntervalRef.current = setInterval(() => {
      currentIndex += charsPerInterval;
      
      if (currentIndex >= fullContent.length) {
        // Animation complete
        clearInterval(streamingIntervalRef.current);
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, content: fullContent, isComplete: true }
              : msg
          )
        );
        
        // Update chat ID if this is a new chat
        if (!chatId && newChatId) {
          setChatId(newChatId);
          if (onChatCreated) {
            onChatCreated(newChatId, newTitle);
          }
        }
      } else {
        // Update partial content
        const partialContent = fullContent.substring(0, currentIndex);
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, content: partialContent, isComplete: false }
              : msg
          )
        );
      }
    }, 20); // 20ms interval for smooth animation
  };

  const sendMessageContent = async (messageContent) => {
    if (!messageContent.trim() || isTyping) return;

    const userMessageContent = messageContent.trim();

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userMessageContent,
      timestamp: new Date(),
      isComplete: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Call the backend API (visitors pass null for chatId to prevent DB storage)
      const response = await sendMessage(userMessageContent, conversationHistory, isVisitor ? null : chatId);

      if (response.success) {
        // Hide typing indicator before showing message
        setIsTyping(false);
        
        // Add bot response with empty content initially
        const botMessageId = Date.now() + 1;
        const botMessage = {
          id: botMessageId,
          type: 'bot',
          content: '',
          timestamp: new Date(),
          isComplete: false
        };
        setMessages(prev => [...prev, botMessage]);
        
        // Update conversation history for context
        setConversationHistory(response.data.conversationHistory || []);
        
        // Start animated typing effect
        animateBotResponse(
          botMessageId, 
          response.data.message,
          isVisitor ? null : response.data.chatId,
          response.data.title
        );
      } else {
        // Handle error
        const errorMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: `Sorry, I encountered an error: ${response.error}. Please try again.`,
          timestamp: new Date(),
          isComplete: true
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: "Sorry, I'm having trouble connecting to the server. Please make sure the backend is running and try again.",
        timestamp: new Date(),
        isComplete: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await sendMessageContent(inputValue);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 1 ? (
          // Welcome screen when no conversation started
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 bg-[#012e58] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#012e58] mb-2">Welcome to ChatAOUra</h2>
              <p className="text-gray-600 max-w-md">
                Start a conversation with our AI assistant. Ask questions, get help, or just chat!
              </p>
              {isVisitor && (
                <p className="text-sm text-amber-600 mt-2">
                  💡 You're in visitor mode. Chats won't be saved. Sign up to save your history!
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
              <div 
                onClick={() => handleSuggestedQuestion("When is a student placed on the 'expected to graduate students' list?")}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#012e58] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-[#012e58] mb-2">🎓 Expected to Graduate</h3>
                <p className="text-sm text-gray-600">When is a student placed on the 'expected to graduate students' list?</p>
              </div>
              <div 
                onClick={() => handleSuggestedQuestion("When is a student placed on the warned list?")}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#012e58] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-[#012e58] mb-2">⚠️ Warned List</h3>
                <p className="text-sm text-gray-600">When is a student placed on the warned list?</p>
              </div>
              <div 
                onClick={() => handleSuggestedQuestion("What are the steps to check my academic advisor?")}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#012e58] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-[#012e58] mb-2">👨‍🏫 Academic Advisor</h3>
                <p className="text-sm text-gray-600">What are the steps to check my academic advisor?</p>
              </div>
              <div 
                onClick={() => handleSuggestedQuestion("How can I calculate my GPA?")}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#012e58] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-[#012e58] mb-2">📊 GPA Calculation</h3>
                <p className="text-sm text-gray-600">How can I calculate my GPA?</p>
              </div>
            </div>
          </div>
        ) : (
          // Chat messages
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-[#012e58] ml-3' 
                      : 'bg-gray-200 mr-3'
                  }`}>
                    {message.type === 'user' ? (
                      <span className="text-white text-sm font-medium">U</span>
                    ) : (
                      <svg className="w-4 h-4 text-[#012e58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Message Content */}
                  <div className={`p-4 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#012e58] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.type === 'bot' ? formatBotMessage(message.content) : message.content}
                      {/* Show cursor for incomplete bot messages */}
                      {message.type === 'bot' && !message.isComplete && (
                        <span className="inline-block w-1 h-4 bg-[#012e58] ml-1 animate-pulse"></span>
                      )}
                    </div>
                    <span className={`text-xs mt-2 block ${
                      message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#012e58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012e58] focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-[#012e58] hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            ChatAOUra can make mistakes. Consider checking important information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Chat;