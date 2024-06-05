'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Blog = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
          <div className="mt-8">
            <iframe 
              src="https://widgets.sociablekit.com/medium-publication-feed/iframe/25421462" 
              frameBorder="0" 
              width="100%" 
              height="1000"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
