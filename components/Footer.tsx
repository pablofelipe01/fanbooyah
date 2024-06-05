'use client';

import React from 'react';
import { FaInstagram, FaTwitter, FaTiktok, FaLinkedin, FaRegEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 justify-center mb-4">
          <a href="https://www.linkedin.com/company/truesocialtoken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/pablofelipe01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/tokensolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaTiktok className="w-6 h-6" />
          </a>
          <a href="mailto:pablo@toksol.io" className="text-gray-400 hover:text-green-500 transition-colors">
            <FaRegEnvelope className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-center">
          <a href="/about" className="hover:text-green-500 transition-colors">About</a>
          <a href="/team" className="hover:text-green-500 transition-colors">Team</a>
          <a href="/tutorials" className="hover:text-green-500 transition-colors">Tutorials</a>
          <a href="/technology" className="hover:text-green-500 transition-colors">Technology</a>
          <a href="/blog" className="hover:text-green-500 transition-colors">Blog</a>
          <a href="/disclosure" className="hover:text-green-500 transition-colors">Disclosure</a>
          <a href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</a>
          <a href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</a>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} True Social Token. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
