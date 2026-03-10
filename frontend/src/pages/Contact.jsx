import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full pt-24 md:pt-32">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-3 md:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full w-fit mx-auto mb-3 md:mb-4">
              <Mail size={28} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-sm md:text-base text-gray-600">
              <a href="mailto:registration@aou.org.bh" className="text-[#012e58] hover:underline">
                registration@aou.org.bh
              </a>
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full w-fit mx-auto mb-3 md:mb-4">
              <Phone size={28} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-sm md:text-base text-gray-600">
              <a href="tel:17407077" className="text-[#012e58] hover:underline">
                17407077
              </a>
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full w-fit mx-auto mb-3 md:mb-4">
              <MapPin size={28} className="text-[#012e58]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-sm md:text-base text-gray-600">
              Street 3220<br />
              (Building 890, Block 732)<br />
              A'ali
            </p>
            <a href="https://share.google/0pHiO98YU3DbjgwI3" target="_blank" rel="noopener noreferrer" className="text-[#012e58] hover:underline text-xs md:text-sm mt-3 inline-block">
              View on Map
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#012e58] mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
                <p className="font-semibold mb-2">✓ Message Sent Successfully!</p>
                <p className="text-sm">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012e58] ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012e58] ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012e58] ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs md:text-sm mt-1\">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-3 md:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012e58] resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1\">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#012e58] text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-[#1a4b7a] transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-start lg:justify-center space-y-4 md:space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#012e58] mb-2 md:mb-4">Get in Touch</h3>
              <p className="text-sm md:text-base text-gray-600">
                Whether you have feedback, suggestions, or encounter any issues with ChatAOUra, we're here to help. Our support team is available to assist you.
              </p>
            </div>

            <div className="bg-[#012e58] text-white p-4 md:p-6 rounded-lg">
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Quick Response</h4>
              <p className="mb-3 md:mb-4 text-sm md:text-base">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>✓ Professional Support Team</li>
                <li>✓ Fast Response Time</li>
                <li>✓ Comprehensive Assistance</li>
                <li>✓ Student-Focused Solutions</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">FAQ</h4>
              <p className="text-gray-600 text-xs md:text-sm">
                Can't find what you're looking for? Check our frequently asked questions section for quick answers.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 border-2 border-[#012e58] text-[#012e58] font-semibold rounded-lg hover:bg-[#012e58] hover:text-white transition-colors text-sm md:text-base"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
