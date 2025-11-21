import { useState, useEffect } from 'react';
import { getChatHistory, deleteChat } from '../services/chatService';
import ConfirmModal from './ui/ConfirmModal';

const ChatHistory = ({ isCollapsed, onToggle, user, onLogout, onSelectChat, onNewChat, activeChatId }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [chatToDelete, setChatToDelete] = useState(null);

  // Format timestamp to relative time
  const formatTimestamp = (date) => {
    const now = new Date();
    const chatDate = new Date(date);
    const diffInSeconds = Math.floor((now - chatDate) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return chatDate.toLocaleDateString();
  };

  // Fetch chat history on component mount
  useEffect(() => {
    if (!isCollapsed && user) {
      fetchChatHistory();
    }
  }, [isCollapsed, user]);

  const fetchChatHistory = async () => {
    setLoading(true);
    try {
      const result = await getChatHistory();
      if (result.success) {
        setChats(result.data);
      } else {
        console.error('Failed to fetch chat history:', result.error);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (chatId, e) => {
    e.stopPropagation();
    setChatToDelete(chatId);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!chatToDelete) return;
    
    const result = await deleteChat(chatToDelete);
    if (result.success) {
      setChats(chats.filter(chat => chat._id !== chatToDelete));
      if (activeChatId === chatToDelete) {
        onNewChat();
      }
      setDeleteModalOpen(false);
      setChatToDelete(null);
    } else {
      alert('Failed to delete chat: ' + result.error);
      setDeleteModalOpen(false);
      setChatToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setChatToDelete(null);
  };

  const handleNewChat = () => {
    onNewChat();
  };

  if (isCollapsed) return null;

  return (
    <div className="h-full flex flex-col text-white">
      {/* Header */}
      <div className="p-4 border-b border-blue-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chat History</h2>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-blue-700 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button 
          onClick={handleNewChat}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>New Chat</span>
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-2 pb-2">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : chats.length === 0 ? (
          <div className="text-center py-8 text-blue-200 text-sm">
            No chat history yet. Start a new conversation!
          </div>
        ) : (
          <div className="space-y-1 pb-4">
            {chats.map((chat) => (
              <div
                key={chat._id}
                onClick={() => onSelectChat(chat._id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors group ${
                  activeChatId === chat._id
                    ? 'bg-blue-700 text-white' 
                    : 'hover:bg-blue-700/50 text-blue-100'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{chat.title || 'New Chat'}</h3>
                    <p className="text-xs opacity-70 mt-1">{formatTimestamp(chat.lastMessageAt)}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                    <button 
                      onClick={(e) => handleDeleteClick(chat._id, e)}
                      className="p-1 hover:bg-blue-600 rounded"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-blue-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="p-2 hover:bg-blue-700 rounded transition-colors"
            title="Logout"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Delete Chat?"
        message="Are you sure you want to delete this chat? This action cannot be undone."
      />
    </div>
  );
};

export default ChatHistory;