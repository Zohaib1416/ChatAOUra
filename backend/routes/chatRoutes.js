const express = require('express');
const { 
  handleChat, 
  handleStreamChat, 
  getChatHistory, 
  getChatById, 
  deleteChat 
} = require('../controllers/chatController');
const { authenticateToken } = require('../middlewares/middleware');

const router = express.Router();

// Middleware to optionally authenticate (doesn't block if no token)
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token) {
      const jwt = require('jsonwebtoken');
      const User = require('../models/userModel');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select('-password');
      if (user) {
        req.user = user;
      }
    }
    next();
  } catch (error) {
    // Continue without user if token is invalid
    next();
  }
};

// Chat endpoint - handles user messages and returns AI responses (optional auth)
// POST /api/chat
router.post('/', optionalAuth, handleChat);

// Get all chat history for logged-in user (requires auth)
// GET /api/chat/history
router.get('/history', authenticateToken, getChatHistory);

// Get specific chat by ID (requires auth)
// GET /api/chat/:chatId
router.get('/:chatId', authenticateToken, getChatById);

// Delete a chat (requires auth)
// DELETE /api/chat/:chatId
router.delete('/:chatId', authenticateToken, deleteChat);

// Streaming chat endpoint (for future implementation)
// POST /api/chat/stream
router.post('/stream', optionalAuth, handleStreamChat);

module.exports = router;
