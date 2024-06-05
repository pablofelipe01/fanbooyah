'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from "@/app/thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 border-b border-gray-300 dark:border-gray-700 shadow-md z-50 backdrop-blur-md">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <img 
              src="/images/image1.png" 
              alt="MyApp Logo" 
              className="h-14 w-30 object-cover"
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="focus:outline-none"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <ConnectButton 
          client={client} 
          chain={chain} 
          theme={"dark"}
          connectModal={{ size: "compact" }}
        />
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 p-4 shadow-md z-40">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Menu</h2>
            <button 
              className="focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link href="/" legacyBehavior>
            <a className="block text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-2">Home</a>
          </Link>
        </div>
      )}
    </nav>
  );
};
