
"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone } from "lucide-react";

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
          poster="https://placehold.co/1920x1080.png" // Optional: poster image
          data-ai-hint="technology business" // Keep hint for potential future image fallback
        >
          {/* Replace with your video source */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/煙突から煙が多く出ています。.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Darker overlay for better text contrast on video */}
      </div>
      <div className="container-max relative z-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Powering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Innovatech delivers cutting-edge solutions in AI, web, and mobile development to elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <AnimatedButton 
            size="lg" 
            variant="default" 
            pulseAnimation
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </AnimatedButton>
          <AnimatedButton 
            size="lg" 
            variant="outline" 
            pulseAnimation
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Talk to Us 24/7 <Phone className="ml-2 h-5 w-5" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
