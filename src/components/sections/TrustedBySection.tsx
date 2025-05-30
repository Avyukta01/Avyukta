// src/components/sections/TrustedBySection.tsx
"use client";

import Image from "next/image";

const logos = [
  { name: "Zoho", src: "/logos/ZohoLogo.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/Genesyslogo.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/Bitrix24logo.png", hint: "Bitrix24 logo" },
  { name: "TechCorp", src: "/logos/techcorp-logo.png", hint: "TechCorp logo" }, // Placeholder, ensure this file exists if used or replace
  { name: "InnovateX", src: "/logos/innovatex-logo.png", hint: "InnovateX logo" }, // Placeholder, ensure this file exists if used or replace
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground/80 mb-12">
          Trusted by Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300" title={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                objectFit="contain"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;