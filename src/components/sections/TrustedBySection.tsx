
"use client";

import Image from "next/image";

const logos = [
  { name: "Zoho", src: "/logos/Zoho.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/Genesys.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/Bitrix24.png", hint: "Bitrix24 logo" },
  
 
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-background" >
      
      
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground/80 mb-9">
          Our Channel Partner
        </h2>
        <div className="flex justify-center items-center gap-12" style={{marginTop: '0px'}}>
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="inline-block align-middle"
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
