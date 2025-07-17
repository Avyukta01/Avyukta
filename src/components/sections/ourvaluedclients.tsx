"use client";

import React from "react";
import Image from "next/image";



const styles = {
  section: {
    paddingBottom: '0px !important',
  }
 
}
// Placeholder data for clients
const clients = [
  { name: "Shriram Finance", logo: "/clients logo/shriramlogo.png", alt: "Shriram Finance Logo" },
  { name: "Askmebazzar", logo: "/clients logo/askmebazzarlog.png", alt: "Askmebazzar Logo" },
  { name: "Indian Oil", logo: "/clients logo/indianlogo.jpeg", alt: "Indian Oil Logo" },
  { name: "BSNL", logo: "/clients logo/bsnllogo.png", alt: "BSNL Logo" },
  { name: "Aadhaar", logo: "/clients logo/aadhaarlogo.png", alt: "Aadhaar Logo" },
  { name: "HP", logo: "/clients logo/hplogo.png", alt: "HP Logo" },
  { name: "Bharat Gas", logo: "/clients logo/bharatlogo.png", alt: "Bharat Gas Logo" },
  { name: "Videocon", logo: "/clients logo/videoconlogo.jpeg", alt: "Videocon Logo" },
  { name: "MTS", logo: "/clients logo/mtslogo.png", alt: "MTS Logo" },
  { name: "DARCL", logo: "/clients logo/darcllogo.jpeg", alt: "DARCL Logo" },
];

export default function OurValuedClientsPage() {
  return (
    <section className=" bg-background overflow-hidden">
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
        .animate-scroll-x {
          animation: scroll-x 15s linear infinite;
        }
      `}</style>
    </section>
  );
} 