import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 md:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#012e58] mb-2">Terms of Service</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Last updated: March 2026</p>

        <div className="space-y-6 md:space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">1. Acceptance of Terms</h2>
            <p className="text-sm md:text-base leading-relaxed">
              By accessing and using ChatAOUra ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">2. Use License</h2>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on ChatAOUra for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
              <li>Modify the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use the Service in any way that infringes upon the rights of others or in any way is illegal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">3. Disclaimer</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The materials on ChatAOUra are provided on an 'as is' basis. ChatAOUra makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#012e58] mb-3 md:mb-4">4. Limitations</h2>
            <p className="text-sm md:text-base leading-relaxed">
              In no event shall ChatAOUra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ChatAOUra, even if ChatAOUra or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on ChatAOUra could include technical, typographical, or photographic errors. ChatAOUra does not warrant that any of the materials on its Service are accurate, complete, or current. ChatAOUra may make changes to the materials contained on its Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">6. Links</h2>
            <p>
              ChatAOUra has not reviewed all of the sites linked to its Service and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ChatAOUra of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">7. Modifications</h2>
            <p>
              ChatAOUra may revise these terms of service for its Service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Arab Open University, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">9. User Account Responsibilities</h2>
            <p>
              If you create an account on ChatAOUra, you are responsible for maintaining the confidentiality of your password and account information. You agree to accept responsibility for all activities that occur under your account or password. You must notify ChatAOUra immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#012e58] mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at registration@aou.org.bh
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

export default TermsOfService;
