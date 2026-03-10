import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#012e58] text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">ChatAOUra</h3>
              <p className="text-xs md:text-sm text-gray-300">
                Your AI-powered assistant for all things AOU. Getting answers has never been easier.
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-3 md:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 md:space-x-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                <a href="mailto:registration@aou.org.bh" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  registration@aou.org.bh
                </a>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                <a href="tel:17407077" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                  17407077
                </a>
              </li>
              <li className="flex items-start space-x-2 md:space-x-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                <div className="text-gray-300 text-xs md:text-sm">
                  <p>Street 3220</p>
                  <p>(Building 890, Block 732), A'ali</p>
                  <a href="https://share.google/0pHiO98YU3DbjgwI3" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline text-xs">
                    View on Map
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 md:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 text-center md:text-left">
          <p>&copy; {currentYear} ChatAOUra. All rights reserved.</p>
          <p>Made with ❤️ for AOU Students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
