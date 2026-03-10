import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 md:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-2">Privacy Policy</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Last updated: March 2026</p>

        <div className="space-y-6 md:space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">1. Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed">
              ChatAOUra ("we," "us," or "our") operates the ChatAOUra website and associated services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">2. Information Collection and Use</h2>
            <p className="text-sm md:text-base leading-relaxed mb-3">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li><strong>Personal Data:</strong> Email address, First name, Last name, Phone number</li>
              <li><strong>Usage Data:</strong> Browser type, Browser version, Pages visited, Time and duration of visits, Referrer pages</li>
              <li><strong>Communication Data:</strong> Messages and conversations within ChatAOUra</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">3. Use of Data</h2>
            <p className="text-sm md:text-base leading-relaxed mb-3">ChatAOUra uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">5. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent users' personally identifiable information to others. We may share generic aggregated demographic information not linked to any personally identifiable information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">6. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>Email: registration@aou.org.bh</li>
              <li>Website: ChatAOUra.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">9. Your Privacy Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at the email address provided above. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">10. Data Retention</h2>
            <p>
              ChatAOUra will retain your Personal Data only for as long as necessary to provide our Service to you. You can request deletion of your account and associated data at any time by contacting us.
            </p>
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

export default PrivacyPolicy;
