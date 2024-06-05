// src/app/privacy/page.tsx
import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Privacy = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Privacy Policy for True Social Token NFT Subscription Service</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <p>Effective Date: October 4, 2023</p>
          <p>Welcome to True Social Token! True Social Token is a platform dedicated to connecting collectors with unique NFTs through a subscription model. "True Social Token," "we," "us," and "our" refer to TOKSOL.IO, this platform, and the services offered by us, including our website, mobile applications, and other digital services. This Privacy Policy is part of our Terms of Use and describes how we collect, use, and share information.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Information You Provide to True Social Token</h2>
          <p>This is information that you provide directly to us through various means such as account creation, subscription purchases, and direct communications. The types of information we typically collect include:</p>
          <ul className="list-disc ml-6">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment information (processed via secure third-party payment services)</li>
            <li>Wallet address for NFT transactions</li>
            <li>Username and password</li>
            <li>Country and state/province of residence</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6">Automatically Collected Information</h2>
          <p>When you interact with our Services, we automatically collect certain information about your device and your usage of our services, including:</p>
          <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Device and connection information</li>
            <li>Location data (derived from IP address)</li>
            <li>Browser type and settings</li>
            <li>Information about your activity on our Services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
          <p>We use the information we collect to provide and manage your subscription and transactions, improve and personalize our Services, communicate with you about your account and updates to our services, conduct analytics and performance monitoring, and comply with legal obligations.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Sharing Your Information</h2>
          <p>We share information with service providers who help us provide our Services, such as payment processors and cloud hosting services. If required by law, we may also disclose your information to authorities or in legal proceedings.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Your Rights and Choices</h2>
          <p>You have certain rights regarding the information we hold about you. You can access, correct, or delete your personal information, change your account settings, and opt out of certain data processing activities.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Changes to This Privacy Policy</h2>
          <p>We may update this policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website or through other communication channels.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>If you have any questions about this privacy policy, our practices, or your dealings with our services, please contact us at pablo@toksol.io.</p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Privacy;
