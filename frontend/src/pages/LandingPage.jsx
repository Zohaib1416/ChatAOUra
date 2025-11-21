import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { MessageCircle, Clock, Users, BookOpen, GraduationCap, Award, Globe, Zap } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission for sign up
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#012e58] leading-tight mb-6">
              ChatBot for AOU
            </h1>
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-8">
              Talk smart, stay ahead —<br />
              with ChatAOUra
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700">
                One chat, all your student affairs sorted.
              </p>
              <p className="text-lg text-gray-700">
                No queues. No wait. Just answers.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                Ask it. Solve it. ChatAOUra's got you.
              </p>
            </div>

            <p className="text-lg text-gray-700 font-medium mb-8">
              Guiding your AOU journey, the smart way.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/chat"
                className="px-8 py-4 bg-[#012e58] text-white font-semibold rounded-lg hover:bg-[#1a4b7a] transition-all duration-200 transform hover:scale-105 text-center flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Try as Visitor</span>
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 border-2 border-[#012e58] text-[#012e58] font-semibold rounded-lg hover:bg-[#012e58] hover:text-white transition-all duration-200 transform hover:scale-105 text-center"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Main Chat Bubbles */}
              <div className="flex items-center space-x-4">
                {/* Chat Bubble 1 */}
                <div className="bg-[#012e58] p-6 rounded-full flex items-center justify-center relative">
                  <GraduationCap size={40} className="text-white" />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                    <Award size={16} className="text-[#012e58]" />
                  </div>
                </div>

                {/* Chat Bubble 2 */}
                <div className="bg-gray-300 p-6 rounded-full flex items-center justify-center relative">
                  <MessageCircle size={40} className="text-[#012e58]" />
                  <div className="absolute -bottom-2 -left-2 bg-green-400 rounded-full p-1">
                    <Zap size={16} className="text-white" />
                  </div>
                </div>

                {/* Chat Bubble 3 */}
                <div className="bg-[#012e58] p-6 rounded-full flex items-center justify-center relative">
                  <BookOpen size={40} className="text-white" />
                  <div className="absolute -top-2 -left-2 bg-blue-400 rounded-full p-1">
                    <Globe size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 left-8 animate-bounce">
                <div className="bg-yellow-200 p-2 rounded-lg">
                  <Users size={20} className="text-[#012e58]" />
                </div>
              </div>

              <div className="absolute -bottom-8 right-8 animate-pulse">
                <div className="bg-green-200 p-2 rounded-lg">
                  <Clock size={20} className="text-[#012e58]" />
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="bg-blue-200 p-2 rounded-lg">
                  <MessageCircle size={20} className="text-[#012e58]" />
                </div>
              </div>

              <div className="absolute top-1/4 -left-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="bg-purple-200 p-2 rounded-lg">
                  <GraduationCap size={20} className="text-[#012e58]" />
                </div>
              </div>

              {/* Question marks and exclamation points */}
              <div className="absolute -top-4 right-4 text-2xl text-[#012e58] animate-bounce">?</div>
              <div className="absolute -bottom-4 left-4 text-2xl text-[#012e58] animate-bounce" style={{ animationDelay: '0.7s' }}>!</div>
              <div className="absolute top-1/4 right-1/4 text-xl text-gray-400 animate-pulse">+</div>
              <div className="absolute bottom-1/4 left-1/4 text-xl text-gray-400 animate-pulse" style={{ animationDelay: '1.2s' }}>*</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;