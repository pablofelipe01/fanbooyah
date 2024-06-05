'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Tutorials = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-24"> {/* Adjusted padding top */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Videos & Tutorials</h1>
        <div className="flex justify-center">
          <video
            controls
            className="w-full max-w-3xl rounded-lg shadow-lg"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Tutorials;
