
"use client";

import Image from "next/image";

const logos = [
  { name: "Zoho", src: "/logos/Zoho.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/Genesys.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/Bitrix24.png", hint: "Bitrix24 logo" },
  { name: "OpenVox", src: "/logos/openvox.png", hint: "OpenVox logo" },
  { name: "Sennheiser", src: "/logos/sennnheiser.png", hint: "Sennheiser logo" },
  { name: "WorldPhone", src: "/logos/worldhpone.png", hint: "WorldPhone logo" },
  { name: "Yealink", src: "/logos/yealink.png", hint: "Yealink logo" },
  { name: "NextCall", src: "/logos/nextcall.png", hint: "NextCall logo" },
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-background" >
      
      
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground/80 mb-9">
          Our Channel Partner
        </h2>
        <div className="flex justify-center items-center gap-12 flex-wrap" style={{marginTop: '0px'}}>
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="inline-block align-middle bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              style={{ width: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                width={160}
                height={80}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
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
