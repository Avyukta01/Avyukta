"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground section-padding min-h-[70vh] flex items-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Abstract technology background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="technology business"
        priority
      />
      <div className="container-max relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Powering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Innovatech delivers cutting-edge solutions in AI, web, and mobile development to elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300">
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300">
            Talk to Us 24/7 <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
