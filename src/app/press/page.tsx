'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Press = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40">
        <div className=" p-8 rounded-lg text-white">
          
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Press;
