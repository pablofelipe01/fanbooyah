// components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';
import { FaGlobe, FaLock, FaUserShield } from 'react-icons/fa';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowBanner(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <FaGlobe className="text-blue-400 text-2xl mr-3" />
        <div>
          <p className="font-bold">Welcome to the Future of the Internet, WEB3!</p>
          <p className="text-sm">
            <FaLock className="inline text-green-400 text-xl mr-1" /> We DON'T use cookies, and we don’t collect, use, or sell your information. 
            Everything happening in this DApp is of public record on the blockchain.
          </p>
        </div>
      </div>
      <button
        onClick={handleClose}
        className="bg-green-600 text-white py-2 px-4 rounded-lg ml-4 hover:bg-green-500 transition"
      >
        <FaUserShield className="inline mr-2" /> Got It
      </button>
    </div>
  );
};

export default CookieConsent;
