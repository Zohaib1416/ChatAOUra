import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 md:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-2">Cookie Policy</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Last updated: March 2026</p>

        <div className="space-y-6 md:space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">1. What Are Cookies?</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, mobile phone) when you visit our website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the site operators and third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">2. What Cookies Do We Use?</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-2">Essential Cookies:</h3>
            <p className="text-sm md:text-base leading-relaxed">
              These cookies are necessary to provide you with the services available through our website and to enable you to use its features. Without these cookies, the services you have asked for cannot be provided.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-2">Performance Cookies:</h3>
            <p className="text-sm md:text-base leading-relaxed">
              These cookies collect information about how you use our website, for example, which pages you visit most often and if you get any error messages from web pages. These cookies do not collect information that identifies you personally. All information collected is aggregated and therefore anonymous.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-2">Functional Cookies:</h3>
            <p className="text-sm md:text-base leading-relaxed">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our pages.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-2">Targeting Cookies:</h3>
            <p className="text-sm md:text-base leading-relaxed">
              These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">3. How We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>To recognize your computer or device when you visit the website</li>
              <li>To remember your preferences and settings</li>
              <li>To understand how users interact with our website</li>
              <li>To improve our services based on user behavior</li>
              <li>To authenticate your identity</li>
              <li>To remember login information</li>
              <li>To provide security features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">4. Third-Party Cookies</h2>
            <p>
              We may allow third parties to place cookies on your device. These include analytics providers and advertising networks. These third parties may use cookies to track and target your interests to display advertising relevant to you on other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">5. How Long Are Cookies Stored?</h2>
            <p>
              Cookies have different lifetimes. Some expire at the end of your browser session while others persist for a set period. You can view the expiration dates of cookies set on your device through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">6. How to Control Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. Most web browsers accept cookies by default, but you can usually modify your browser settings to decline cookies if you prefer. However, restricting cookies may impact the functionality and user experience of our website.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Browser Control:</h3>
            <p>
              You can typically control and manage cookies through your browser settings. For more information on how to manage cookies, visit:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#012e58] hover:underline">www.aboutcookies.org</a></li>
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#012e58] hover:underline">www.allaboutcookies.org</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">7. Do Not Track</h2>
            <p>
              Some browsers include a "Do Not Track" feature. Our website does not currently respond to Do Not Track signals due to the lack of industry standards. However, you can use other tools to control cookie usage as described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">8. Cookie Policy Updates</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in applicable laws and our use of cookies. Any updates will be posted on this page with an updated effective date. Your continued use of our website following the posting of any modifications will constitute your acceptance of the modified policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">9. Contact Us</h2>
            <p>
              If you have questions or concerns about our cookie practices, please contact us at:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>Email: registration@aou.org.bh</li>
              <li>Website: ChatAOUra.com</li>
            </ul>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
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

export default CookiePolicy;
