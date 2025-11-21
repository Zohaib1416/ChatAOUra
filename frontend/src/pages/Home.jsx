import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ChatHistory from '../components/ChatHistory';
import Chat from '../components/Chat';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [refreshHistory, setRefreshHistory] = useState(0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId);
  };

  const handleNewChat = () => {
    setCurrentChatId(null);
  };

  const handleChatCreated = (chatId, title) => {
    setCurrentChatId(chatId);
    // Trigger refresh of chat history
    setRefreshHistory(prev => prev + 1);
  };

  return (
    <div className="home-container flex h-screen bg-gray-50">
      {/* Sidebar - Chat History */}
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-0' : 'w-80'} bg-[#012e58]`}>
        <ChatHistory 
          isCollapsed={isSidebarCollapsed} 
          onToggle={toggleSidebar}
          user={user}
          onLogout={handleLogout}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          activeChatId={currentChatId}
          key={refreshHistory}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          {isSidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-[#012e58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <h1 className="text-xl font-semibold text-[#012e58]">ChatAOUra</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Hello, {user?.email}</span>
          </div>
        </header>

        {/* Chat Component */}
        <div className="flex-1 overflow-hidden">
          <Chat 
            currentChatId={currentChatId}
            onChatCreated={handleChatCreated}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;