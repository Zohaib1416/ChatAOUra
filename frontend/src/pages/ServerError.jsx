import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServerError = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4 py-8 md:py-12 pt-16 md:pt-20">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="bg-orange-100 p-5 md:p-6 rounded-full">
              <AlertTriangle size={40} className="md:w-12 md:h-12 text-orange-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#012e58] mb-3 md:mb-4">500</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">Server Error</h2>
          
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Oops! Something went wrong on our end. Our team has been notified. Please try again later.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-[#012e58] text-white rounded-lg hover:bg-[#1a4b7a] transition-colors text-sm md:text-base"
            >
              <RefreshCw size={18} className="md:w-5 md:h-5" />
              <span>Try Again</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 border-2 border-[#012e58] text-[#012e58] rounded-lg hover:bg-[#012e58] hover:text-white transition-colors text-sm md:text-base"
            >
              <ArrowLeft size={18} className="md:w-5 md:h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServerError;
