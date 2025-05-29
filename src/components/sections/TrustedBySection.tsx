import Image from "next/image";

const logos = [
  { name: "Company A", src: "https://placehold.co/150x60.png", hint: "corporate logo" },
  { name: "Company B", src: "https://placehold.co/150x60.png", hint: "tech company" },
  { name: "Company C", src: "https://placehold.co/150x60.png", hint: "startup logo" },
  { name: "Company D", src: "https://placehold.co/150x60.png", hint: "enterprise solution" },
  { name: "Company E", src: "https://placehold.co/150x60.png", hint: "global firm" },
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
