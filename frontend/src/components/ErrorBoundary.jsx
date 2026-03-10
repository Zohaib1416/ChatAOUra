import { Component } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRefresh = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="bg-red-100 p-6 rounded-full">
                <AlertCircle size={48} className="text-red-600" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-[#012e58] mb-4">Oops!</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Something Went Wrong
            </h2>

            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. An unexpected error has occurred. Please try refreshing the page or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="my-6 text-left bg-gray-100 p-4 rounded text-sm max-h-48 overflow-y-auto">
                <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="whitespace-pre-wrap break-words text-red-700">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="whitespace-pre-wrap break-words text-gray-700 mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRefresh}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#012e58] text-white font-semibold rounded-lg hover:bg-[#1a4b7a] transition-colors"
              >
                <RefreshCw size={20} />
                <span>Try Again</span>
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#012e58] text-[#012e58] font-semibold rounded-lg hover:bg-[#012e58] hover:text-white transition-colors"
              >
                <span>Go to Home</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
