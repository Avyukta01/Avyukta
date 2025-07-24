"use client";

import Image from "next/image";

const awards = [
  { src: "/awardslogo/enterprenuer.png", alt: "Entrepreneur Award" },
  { src: "/awardslogo/globel.png", alt: "Clutch Global Award" },
  { src: "/awardslogo/champion.png", alt: "Clutch Champion Award" },
  { src: "/awardslogo/topapp.png", alt: "Top App Development Award" },
];

const AwardsSection = () => (
  <section className="py-4">
    <div className="container-max flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 py-2">
        {awards.map((award, idx) => (
          <Image
            key={idx}
            src={award.src}
            alt={award.alt}
            width={140}
            height={90}
            className="object-contain rounded-lg"
            style={{ width: 140, height: 90 }}
          />
        ))}
      </div>
      <div className="text-center mt-3">
        <span className="text-base md:text-lg font-semibold text-primary-foreground/90 px-4 py-1 rounded bg-white/10 backdrop-blur-md shadow">
          18+ Years of Excellence & Recognition
        </span>
      </div>
    </div>
  </section>
);

export default AwardsSection; 