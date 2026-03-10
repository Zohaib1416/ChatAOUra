import { Link } from 'react-router-dom';
import { Zap, Users, BookOpen, Award, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 md:pt-32">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-3 md:mb-4">About ChatAOUra</h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Empowering AOU students with instant, intelligent answers
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-[#012e58] to-[#1a4b7a] text-white rounded-lg p-6 md:p-8 lg:p-12 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            ChatAOUra is dedicated to transforming the student experience at Arab Open University by providing instant access to accurate, relevant information. We believe every student deserves quick answers without unnecessary waiting or complex navigation.
          </p>
          <p className="text-base md:text-lg">
            Our AI-powered assistant handles everything from admission inquiries to course details, examination guidelines, and student resources—all available 24/7 in a seamless, conversational interface.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-t-4 border-[#012e58] hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Zap size={24} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Instant Answers</h3>
            <p className="text-sm md:text-base text-gray-600">
              Get immediate responses to your questions about AOU programs and services.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-t-4 border-[#012e58] hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Users size={24} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Student-Focused</h3>
            <p className="text-sm md:text-base text-gray-600">
              Built specifically for students, by understanding their unique needs and concerns.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-t-4 border-[#012e58] hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <BookOpen size={24} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Comprehensive Info</h3>
            <p className="text-sm md:text-base text-gray-600">
              Access to extensive university information, courses, programs, and resources.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-t-4 border-[#012e58] hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Award size={24} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Reliable</h3>
            <p className="text-sm md:text-base text-gray-600">
              Consistently accurate information powered by advanced AI technology.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#012e58] mb-6 md:mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-[#012e58] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Sign Up or Login</h3>
              <p className="text-sm md:text-base text-gray-600">
                Create an account or log in to your existing ChatAOUra account securely.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#012e58] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Ask Your Question</h3>
              <p className="text-sm md:text-base text-gray-600">
                Simply type your question about AOU programs, courses, or services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#012e58] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Instant Answer</h3>
              <p className="text-gray-600">
                Receive accurate, relevant information instantly from our AI assistant.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center mb-8">
          <h2 className="text-3xl font-bold text-[#012e58] mb-4">Ready to Experience ChatAOUra?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start getting instant answers to all your AOU questions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-[#012e58] text-white font-semibold rounded-lg hover:bg-[#1a4b7a] transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-[#012e58] text-[#012e58] font-semibold rounded-lg hover:bg-[#012e58] hover:text-white transition-colors"
            >
              Try as Visitor
            </Link>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#012e58] text-[#012e58] font-semibold rounded-lg hover:bg-[#012e58] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
