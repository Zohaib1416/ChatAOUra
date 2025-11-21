import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, Users, BookOpen, MessageCircle } from 'lucide-react';
import chatbotLogo from '../assets/chatbotLogo.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

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
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await register(formData.email, formData.password);
      
      if (result.success) {
        navigate('/home');
      } else {
        setErrors({ general: result.message });
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - University Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#012e58] text-white relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#012e58] via-[#1a4b7a] to-[#012e58]"></div>
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center p-8 lg:p-12 text-center w-full">
          {/* Logo and main heading */}
          <div className="mb-12">
            <div className="mb-8 flex justify-center">
              <img 
                src={chatbotLogo} 
                alt="ChatAOUra Logo" 
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl shadow-2xl border-4 border-white/20 object-cover"
              />
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Join<br />
              <span className="text-blue-200">ChatAOUra</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-md mx-auto">
              Arab Open University's Premier Chat Platform
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="space-y-6 max-w-sm lg:max-w-md w-full">
            <div className="flex items-start space-x-4 text-left">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Connect with Peers</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Build lasting connections with fellow students across the university
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 text-left">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Academic Excellence</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Share knowledge, collaborate on projects, and grow together
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 text-left">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">University Community</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Be part of the vibrant AOU family worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-md w-full space-y-6">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src={chatbotLogo} 
              alt="ChatAOUra Logo" 
              className="w-20 h-20 mx-auto mb-4 rounded-xl shadow-lg object-cover"
            />
            <h2 className="text-3xl font-bold text-[#012e58]">ChatAOUra</h2>
            <p className="text-gray-600 mt-2">Arab Open University</p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Join the AOU community</p>
            </div>

            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#012e58] focus:border-transparent transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-300 bg-white hover:border-gray-400 focus:border-[#012e58]'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#012e58] focus:border-transparent transition-all duration-200 ${
                      errors.password
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-300 bg-white hover:border-gray-400 focus:border-[#012e58]'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-lg transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#012e58] focus:border-transparent transition-all duration-200 ${
                      errors.confirmPassword
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-300 bg-white hover:border-gray-400 focus:border-[#012e58]'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-lg transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#012e58] hover:bg-[#1a4b7a] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-[#012e58] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-[#012e58] hover:text-[#1a4b7a] font-semibold transition-colors hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;