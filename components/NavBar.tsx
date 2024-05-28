"use client";

import React from 'react';
import { ConnectButton } from "@/app/thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client"; 
// Adjust the import path as necessary

export const NavBar = () => {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "rgba(248, 248, 248, 0.8)", // Transparent background
      borderBottom: "1px solid #e7e7e7",
      zIndex: 1000,
      backdropFilter: "blur(10px)", // Optional: adds a blur effect behind the navbar
    }}>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <img 
          src="images/image1.png" 
          alt="MyApp Logo" 
          style={{ 
            height: "40px", 
            borderRadius: "10px" // Rounded corners
          }} 
        />
        <h2 className="navbar-title" style={{
          marginLeft: "15px", // Add space between the image and the text
          padding: "5px 15px",
          border: "2px solid #333", // Darker border color
          borderRadius: "10px", // Rounded corners
          backgroundColor: "#f5f5f5", // Light gray background color
          color: "#333", // Dark text color
          fontWeight: "bold", // Make the text bold
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Optional: Adds a subtle shadow
        }}>Acuarelas</h2>
      </div>
      <ConnectButton 
        client={client} 
        chain={chain} 
        theme={"dark"}
        connectModal={{ size: "compact" }}
      />
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-title {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};
