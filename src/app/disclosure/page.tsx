// src/app/disclosure/page.tsx
import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Disclosure = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Disclosure</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-semibold mt-6">General Disclosure</h2>
          <p className="mt-4">
            True Social Token is not a financial advisor, nor do we provide financial advice, investment advice, or any other advisory services. The content and services provided by True Social Token are for informational and entertainment purposes only and should not be considered as professional financial advice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">No Financial Institution</h2>
          <p className="mt-4">
            True Social Token is not a bank, broker, or any other type of financial institution. We do not hold, manage, or invest funds on behalf of users. All transactions conducted on the True Social Token platform are directly between users and content creators, and True Social Token does not participate in or take responsibility for the outcomes of these transactions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Investment Relationships</h2>
          <p className="mt-4">
            All investment relationships facilitated through the True Social Token platform are solely between the investors and the content creators. True Social Token does not endorse, recommend, or guarantee any investment opportunities or the performance of any content creators.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
          <p className="mt-4">
            By using the True Social Token platform, you agree to release True Social Token from any and all liability, claims, damages, or expenses arising from or related to your use of the platform. True Social Token is not responsible for any losses or damages incurred as a result of investments made through the platform, including but not limited to, financial losses, loss of data, or reputational harm.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">No Guarantees</h2>
          <p className="mt-4">
            True Social Token, makes no guarantees regarding the accuracy, completeness, or timeliness of the information provided on the platform. All content and services are provided "as is" without warranty of any kind, either express or implied.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">User Responsibility</h2>
          <p className="mt-4">
            Users are solely responsible for conducting their own research and due diligence before making any investment decisions. True Social Token encourages users to seek the advice of a qualified financial advisor before making any investment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Changes to This Disclosure</h2>
          <p className="mt-4">
            True Social Token reserves the right to modify this disclosure at any time. Any changes will be posted on this page and will take effect immediately upon posting. It is the responsibility of users to review this disclosure periodically for updates.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p className="mt-4">
            If you have any questions or concerns about this disclosure, please contact us at pablo@toksol.io.
          </p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Disclosure;
