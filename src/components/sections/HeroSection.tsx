
"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet"; 

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground section-padding min-h-[70vh] flex items-center overflow-hidden particle-background-hero">
      {/* The particle-background-hero class will apply the ::before pseudo-element for the particle effect */}
      <div className="container-max relative z-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          Powering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Voxaiomni: Itf'y your business with revolution IT solutions in AI, web, and mobile development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </QuoteFormSheet>
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              className="w-full sm:w-auto border border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300 px-6" // Added px-6 for better spacing with longer text
            >
              Talk To Us 24*7
              <Phone className="animate-pulse" /> {/* Icon size will be handled by AnimatedButton's default SVG styling */}
            </AnimatedButton>
          </QuoteFormSheet>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
