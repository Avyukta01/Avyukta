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
  { name: "Client 1", logo: "/clients logo/1.png", alt: "Client 1 Logo" },
  { name: "Client 2", logo: "/clients logo/2.png", alt: "Client 2 Logo" },
  { name: "Client 3", logo: "/clients logo/3.png", alt: "Client 3 Logo" },
  { name: "Client 4", logo: "/clients logo/4.png", alt: "Client 4 Logo" },
  { name: "Client 5", logo: "/clients logo/5.png", alt: "Client 5 Logo" },
  { name: "Client 6", logo: "/clients logo/6.png", alt: "Client 6 Logo" },
  { name: "Client 7", logo: "/clients logo/7.png", alt: "Client 7 Logo" },
  { name: "Client 8", logo: "/clients logo/8.png", alt: "Client 8 Logo" },
  { name: "Client 9", logo: "/clients logo/9.png", alt: "Client 9 Logo" },
  { name: "Client 10", logo: "/clients logo/10.png", alt: "Client 10 Logo" },
  { name: "Client 11", logo: "/clients logo/11.png", alt: "Client 11 Logo" },
];

export default function OurValuedClientsPage() {
  return (
    <section className=" bg-background overflow-hidden">
      <div className="container-max">
        {/* Clients Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 mt-12">
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
                  className="object-cover"
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