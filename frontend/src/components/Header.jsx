import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import chatbotLogo from '../assets/chatbotLogo.jpeg';
import LoginDialog from './ui/LoginDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isIntegrationsDropdownOpen, setIsIntegrationsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={chatbotLogo} 
                alt="ChatAOUra Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-[#012e58]">ChatAOUra</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Product Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#012e58] transition-colors"
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                  onMouseLeave={() => setIsProductDropdownOpen(false)}
                >
                  <span>Product</span>
                  <ChevronDown size={16} />
                </button>
                {isProductDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">LiveChat</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">HelpDesk</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">KnowledgeBase</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">OpenWidget</a>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="text-gray-700 hover:text-[#012e58] transition-colors">
                Pricing
              </Link>

              {/* Integrations Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#012e58] transition-colors"
                  onMouseEnter={() => setIsIntegrationsDropdownOpen(true)}
                  onMouseLeave={() => setIsIntegrationsDropdownOpen(false)}
                >
                  <span>Integrations</span>
                  <ChevronDown size={16} />
                </button>
                {isIntegrationsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsIntegrationsDropdownOpen(true)}
                    onMouseLeave={() => setIsIntegrationsDropdownOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Slack Integration</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Teams Integration</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Email Integration</a>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#012e58] transition-colors"
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  <span>Resources</span>
                  <ChevronDown size={16} />
                </button>
                {isResourcesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                    onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Documentation</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Tutorials</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Blog</a>
                  </div>
                )}
              </div>
            </nav>

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
                <a href="#" className="text-gray-700 hover:text-[#012e58] transition-colors">Product</a>
                <a href="#" className="text-gray-700 hover:text-[#012e58] transition-colors">Pricing</a>
                <a href="#" className="text-gray-700 hover:text-[#012e58] transition-colors">Integrations</a>
                <a href="#" className="text-gray-700 hover:text-[#012e58] transition-colors">Resources</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <button 
                    onClick={handleLoginClick}
                    className="px-4 py-2 text-center text-[#012e58] border border-[#012e58] rounded-lg hover:bg-[#012e58] hover:text-white transition-colors"
                  >
                    Log In
                  </button>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 text-center bg-[#012e58] text-white rounded-lg hover:bg-[#1a4b7a] transition-colors"
                  >
                    Sign up free
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