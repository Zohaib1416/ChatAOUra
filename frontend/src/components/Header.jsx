import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import chatbotLogo from '../assets/chatbotLogo.jpeg';
import LoginDialog from './ui/LoginDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={chatbotLogo} 
                alt="ChatAOUra Logo" 
                className="w-12 h-16 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold text-[#012e58]">ChatAOUra</span>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleLoginClick}
                className="px-4 py-2 text-[#012e58] hover:text-[#1a4b7a] transition-colors border border-[#012e58] rounded-lg hover:bg-[#012e58] hover:text-white"
              >
                Login
              </button>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-[#012e58] text-white rounded-lg hover:bg-[#1a4b7a] transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#012e58] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-[#012e58] transition-colors">Home</Link>
                <a href="#about" className="text-gray-700 hover:text-[#012e58] transition-colors">About AOU</a>
                <a href="#features" className="text-gray-700 hover:text-[#012e58] transition-colors">Features</a>
                <a href="#contact" className="text-gray-700 hover:text-[#012e58] transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <button 
                    onClick={handleLoginClick}
                    className="px-4 py-2 text-center text-[#012e58] border border-[#012e58] rounded-lg hover:bg-[#012e58] hover:text-white transition-colors"
                  >
                    Login
                  </button>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 text-center bg-[#012e58] text-white rounded-lg hover:bg-[#1a4b7a] transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Dialog */}
      <LoginDialog 
        isOpen={isLoginDialogOpen} 
        onClose={() => setIsLoginDialogOpen(false)} 
      />
    </>
  );
};

export default Header;