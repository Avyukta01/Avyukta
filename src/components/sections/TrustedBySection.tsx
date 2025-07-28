
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { name: "Zoho", src: "/logos/Zoho.png", hint: "Zoho logo" },
  { name: "Genesys", src: "/logos/Genesys.png", hint: "Genesys logo" },
  { name: "Bitrix24", src: "/logos/Bitrix24.png", hint: "Bitrix24 logo" },
  // { name: "OpenVox", src: "/logos/openvox.png", hint: "OpenVox logo" },
  // { name: "Sennheiser", src: "/logos/sennnheiser.png", hint: "Sennheiser logo" },
  // { name: "WorldPhone", src: "/logos/worldhpone.png", hint: "WorldPhone logo" },
  // { name: "Yealink", src: "/logos/yealink.png", hint: "Yealink logo" },
  // { name: "NextCall", src: "/logos/nextcall.png", hint: "NextCall logo" },
];

const TrustedBySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToLogo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const logos = container.querySelectorAll('.logo-item');
      if (logos[index]) {
        const logo = logos[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const logoLeft = logo.offsetLeft;
        const logoWidth = logo.offsetWidth;
        
        // Calculate scroll position to center the logo
        const scrollPosition = logoLeft - (containerWidth / 2) + (logoWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const nextLogo = () => {
    const newIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToLogo(newIndex);
  };

  const prevLogo = () => {
    const newIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToLogo(newIndex);
  };

  // Scroll to current logo when currentIndex changes
  useEffect(() => {
    scrollToLogo(currentIndex);
  }, [currentIndex]);

  return (
    <section className="section-padding bg-background" >
      
      
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground/80 mb-9">
          Our Channel Partner
        </h2>
        
        <div className="flex items-center w-full mx-auto">
          {/* Left Navigation Button */}
          <button
            onClick={prevLogo}
            className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg mx-2 flex-shrink-0 z-10"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
          </button>
          
          {/* Logos Container */}
          <div className="relative flex-1 overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
              <div className="flex gap-8 md:gap-12 justify-center items-center min-w-max px-4">
                {logos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className={`logo-item inline-block align-middle bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-105 ${
                      index === currentIndex ? 'ring-2 ring-accent/50 shadow-lg' : ''
                    }`}
                    style={{ width: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title={logo.name}
                    onClick={() => {
                      setCurrentIndex(index);
                      scrollToLogo(index);
                    }}
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
          </div>
          
          {/* Right Navigation Button */}
          <button
            onClick={nextLogo}
            className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg mx-2 flex-shrink-0 z-10"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToLogo(index);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
