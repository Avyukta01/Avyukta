"use client";

import React from "react";
import Image from "next/image";

// Placeholder data for clients and affiliates
const clients = [
  { name: "Shriram Finance", logo: "/clientslogo/shriramlogo.jpeg", alt: "Shriram Finance Logo" },
  { name: "Askmebazzar", logo: "/clientslogo/askmebazzarlog.png", alt: "Askmebazzar Logo" },
  { name: "Indian Oil", logo: "/clientslogo/indianlogo.jpeg", alt: "Indian Oil Logo" },
  { name: "BSNL", logo: "/clientslogo/bsnllogo.png", alt: "BSNL Logo" },
  { name: "Aadhaar", logo: "/clientslogo/aadhaarlogo.png", alt: "Aadhaar Logo" },
  { name: "HP", logo: "/clientslogo/hplogo.png", alt: "HP Logo" },
  { name: "Bharat Gas", logo: "/clientslogo/bharatlogo.jpeg", alt: "Bharat Gas Logo" },
  { name: "Videocon", logo: "/clientslogo/videoconlogo.jpeg", alt: "Videocon Logo" },
  { name: "MTS", logo: "/clientslogo/mtslogo.png", alt: "MTS Logo" },
  { name: "DARCL", logo: "/clientslogo/darcllogo.jpeg", alt: "DARCL Logo" },
];

const affiliates = [
  { name: "Sangoma", logo: "/affilaitlogo/sangomalogo.jpeg", alt: "Sangoma Logo" },
  { name: "Dinstar", logo: "/affilaitlogo/dinstar.png", alt: "Dinstar Logo" },
  { name: "Vivacom", logo: "/affilaitlogo/vivacomlogo.png", alt: "Vivacom Logo" },
  { name: "Airtel", logo: "/affilaitlogo/airtellogo.png", alt: "Airtel Logo" },
];

const ClientsAndAffiliatesSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-max">
        {/* Clients Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Valued Clients
        </h2>
        <div className="relative w-full overflow-hidden mb-16">
          <div className="flex animate-scroll-x will-change-transform">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8 rounded-lg overflow-hidden bg-white p-2 shadow-lg flex items-center justify-center" style={{ width: '150px', height: '80px' }}>
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={150}
                  height={300}
                  className="grayscale hover:grayscale-0 transition-all duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Affiliates Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Strategic Affiliates
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-x-reverse will-change-transform">
            {[...affiliates, ...affiliates].map((affiliate, index) => (
              <div key={index} className="flex-shrink-0 mx-8 rounded-lg overflow-hidden bg-white p-2 shadow-lg flex items-center justify-center" style={{ width: '150px', height: '80px' }}>
                <Image
                  src={affiliate.logo}
                  alt={affiliate.alt}
                  width={150}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-x-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 15s linear infinite;
        }
        .animate-scroll-x-reverse {
          animation: scroll-x-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsAndAffiliatesSection; 