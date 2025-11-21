import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get authentication token from localStorage
const getAuthToken = () => {
  // Token is stored separately, not in the user object
  const token = localStorage.getItem('token');
  return token;
};

// Send a chat message and get AI response
export const sendMessage = async (message, conversationHistory = [], chatId = null) => {
  try {
    const token = getAuthToken();
    
    // Prepare headers - only include Authorization if token exists (for logged-in users)
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await axios.post(`${API_URL}/chat`, {
      message,
      conversationHistory,
      chatId
    }, {
      headers
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Chat service error:', error);
    return {
      success: false,
      error: error.response?.data?.error || 'Failed to send message',
      details: error.response?.data?.details || error.message
    };
  }
};

// Get all chat history for the logged-in user
export const getChatHistory = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${API_URL}/chat/history`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return {
      success: true,
      data: response.data.chats
    };
  } catch (error) {
    console.error('Get chat history error:', error);
    return {
      success: false,
      error: error.response?.data?.error || 'Failed to fetch chat history',
      details: error.response?.data?.details || error.message
    };
  }
};

// Get a specific chat by ID
export const getChatById = async (chatId) => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${API_URL}/chat/${chatId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return {
      success: true,
      data: response.data.chat
    };
  } catch (error) {
    console.error('Get chat error:', error);
    return {
      success: false,
      error: error.response?.data?.error || 'Failed to fetch chat',
      details: error.response?.data?.details || error.message
    };
  }
};

// Delete a chat
export const deleteChat = async (chatId) => {
  try {
    const token = getAuthToken();
    const response = await axios.delete(`${API_URL}/chat/${chatId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Delete chat error:', error);
    return {
      success: false,
      error: error.response?.data?.error || 'Failed to delete chat',
      details: error.response?.data?.details || error.message
    };
  }
};

// Export for convenience
export default {
  sendMessage,
  getChatHistory,
  getChatById,
  deleteChat
};
