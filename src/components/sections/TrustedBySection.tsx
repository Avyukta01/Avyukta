
import Image from "next/image";

const logos = [
  { name: "Zoho", src: "/logos/zoho-logo.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/genesys-logo.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/bitrix24-logo.png", hint: "Bitrix24 logo" },
  { name: "TechCorp", src: "https://placehold.co/150x60.png", hint: "TechCorp client" }, 
  { name: "InnovateX", src: "https://placehold.co/150x60.png", hint: "InnovateX client" },
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
                data-ai-hint={logo.hint.toLowerCase().replace(' logo', '').replace(' client', '').replace(' generic', '')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
