
"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link"; 

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground section-padding min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://placehold.co/1920x1080.png"
          data-ai-hint="technology business"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/%E7%85%99%E7%AA%81%E3%81%8B%E3%82%89%E7%85%99%E3%81%8B%E3%82%99%E5%A4%9A%E3%81%8F%E5%87%BA%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      <div className="container-max relative z-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          Powering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Innovatech delivers cutting-edge solutions in AI, web, and mobile development to elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
          <AnimatedButton
            size="lg"
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </AnimatedButton>
          <Link href="/contact" passHref>
            <AnimatedButton
              asChild 
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <span> 
                Talk to Us 24/7 <Phone className="ml-2 h-5 w-5" />
              </span>
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
