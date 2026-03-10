import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is ChatAOUra?',
      answer: 'ChatAOUra is an AI-powered chatbot assistant designed specifically for Arab Open University (AOU) students. It provides instant answers to questions about programs, courses, admission requirements, examination guidelines, and other student services available 24/7.',
    },
    {
      id: 2,
      question: 'Do I need to create an account to use ChatAOUra?',
      answer: 'You can try ChatAOUra as a visitor without creating an account. However, creating an account allows you to save your chat history, get personalized responses, and access additional features. Registration is free and takes just a few minutes.',
    },
    {
      id: 3,
      question: 'How accurate is the information provided by ChatAOUra?',
      answer: 'ChatAOUra is trained on official AOU data and resources to provide accurate information. However, for critical decisions, we recommend verifying information with official AOU sources or contacting the university directly.',
    },
    {
      id: 4,
      question: 'Is my data secure and private?',
      answer: 'Yes, we take your privacy seriously. All your personal data is encrypted and stored securely. We do not share your information with third parties. Please refer to our Privacy Policy for more details about how we handle your data.',
    },
    {
      id: 5,
      question: 'What types of questions can ChatAOUra answer?',
      answer: 'ChatAOUra can answer questions about: Admission requirements and procedures, Course details and curriculum, Academic calendar and schedules, Examination guidelines and rules, Finance and fee information, Campus facilities and services, Faculty members and departments, and general student resources.',
    },
    {
      id: 6,
      question: 'How do I reset my password?',
      answer: 'On the login page, click on "Forgot Password?" and enter your registered email address. You will receive an email with instructions to reset your password. If you don\'t receive the email, check your spam folder or contact support.',
    },
    {
      id: 7,
      question: 'Can I delete my account?',
      answer: 'Yes, you can request account deletion by contacting our support team at registration@aou.org.bh. Your account and associated data will be permanently deleted within 30 days.',
    },
    {
      id: 8,
      question: 'What should I do if ChatAOUra doesn\'t answer my question?',
      answer: 'If you need an answer that ChatAOUra doesn\'t provide, try rephrasing your question or break it into smaller questions. If the issue persists, contact our support team at registration@aou.org.bh or use the Contact Us page to report the issue.',
    },
    {
      id: 9,
      question: 'Is ChatAOUra available on mobile devices?',
      answer: 'Yes! ChatAOUra is fully responsive and works on smartphones, tablets, and computers. You can access it through any modern web browser on your device.',
    },
    {
      id: 10,
      question: 'How can I provide feedback or suggest improvements?',
      answer: 'We value your feedback! You can contact us through the Contact Us page, email registration@aou.org.bh, or use the feedback feature within ChatAOUra. We regularly review user feedback to improve our service.',
    },
    {
      id: 11,
      question: 'Is there a cost to use ChatAOUra?',
      answer: 'ChatAOUra is completely free for all AOU students. There are no hidden fees or premium versions. Simply register and start using it.',
    },
    {
      id: 12,
      question: 'How often is the information updated?',
      answer: 'We regularly update our database with the latest information from AOU to ensure accuracy. Major updates are made at the beginning of each semester and whenever significant changes occur.',
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full pt-24 md:pt-32">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-3 md:mb-4">Frequently Asked Questions</h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Find answers to common questions about ChatAOUra and using our service.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors\"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedId === faq.id ? (
                    <ChevronUp size={20} className="text-[#012e58]" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </div>
              </button>

              {/* Expanded Answer */}
              {expandedId === faq.id && (
                <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-[#012e58] text-white rounded-lg p-6 md:p-8 lg:p-12 text-center mt-8 md:mt-12 mb-8">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#012e58] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
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

export default FAQ;
