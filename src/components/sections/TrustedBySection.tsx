
"use client";

import Image from "next/image";

const logos = [
  { name: "Zoho", src: "/logos/Zoho.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/Genesys.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/Bitrix24.png", hint: "Bitrix24 logo" },
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground/80 mb-12">
          Our Channel Partner
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-y-12 gap-x-24 md:gap-x-40">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="grayscale hover:grayscale-0 transition-all duration-300"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                width={200} 
                height={80}
                style={{ objectFit: 'contain' }}
                data-ai-hint={logo.hint}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
