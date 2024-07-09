'use client';

import React, { useState, useEffect } from 'react';
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent"; // Ensure this is the correct path and import style
import { ConnectButton } from "@/app/thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client"; 
import { useActiveAccount } from 'thirdweb/react';
import { stakingData } from '../../utils/data';
import dynamic from 'next/dynamic';
import { FaWallet, FaUser, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';

const Staking = dynamic(() => import('../../components/Staking'), { ssr: false });

const Home = () => {
  const [isStakingVisible, setIsStakingVisible] = useState(false);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const account = useActiveAccount();

  useEffect(() => {
    if (account) {
      setIsStakingVisible(true);
    } else {
      setIsStakingVisible(false);
    }
  }, [account]);

  const handleConnectClick = () => {
    const connectButton = document.querySelector('.connect-button');
    if (connectButton) {
      (connectButton as HTMLElement).click();
    }
  };

  const handleCreatorClick = () => {
    setIsIframeVisible(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow">
        {!isStakingVisible && (
          <header className="relative h-screen flex flex-col items-center justify-center text-center">
         
            <div className="w-64 h-48 mx-auto mb-8">
              <Image 
                src="/images/6.png" 
                alt="Promotional Image" 
                width={256} 
                height={192} 
                className="object-cover"
              />
            </div>
            <br />
           
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <ConnectButton 
                client={client} 
                chain={chain} 
                theme={"dark"}
                connectButton={{ label: "Connect" }}
                connectModal={{ 
                  size: "compact", 
                  showThirdwebBranding: false, 
                  titleIcon:
                  "https://tokensolutions.mypinata.cloud/ipfs/QmXi1W85dMuWJfBxGQGnWbpTerK6nuy8iWY766jads9kBM",
                }}
              />
             
              {/* <button 
                onClick={() => window.open('https://discord.gg/NmgrKvMJ', '_blank')} 
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition flex items-center justify-center space-x-2"
              >
                <FaDiscord className="text-xl" />
                <span>Join our community</span>
              </button> */}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              By connecting or creating a wallet, you are accepting the <a href="/terms" className="text-blue-400 hover:underline">terms and conditions</a> of this website and its applications.
            </p>
          </header>
        )}
        {isStakingVisible && (
          <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stakingData.map((staking) => (
               // @ts-ignore
              <Staking key={staking.id} data={staking} />
            ))}
          </section>
        )}
        {isIframeVisible && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 p-5 rounded-lg z-50 w-11/12 h-[90vh] max-w-5xl overflow-hidden shadow-lg">
            <iframe
              src="https://wabvdze4ske.typeform.com/to/EIYtv9E8"
              className="w-full h-full border-none"
            ></iframe>
            <button
              onClick={() => setIsIframeVisible(false)}
              className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
            >
              Close
            </button>
          </div>
        )}
      <Footer />
      <CookieConsent /> {/* Include the CookieConsent component here */}
      </main>
    </div>
  );
};

export default Home;
