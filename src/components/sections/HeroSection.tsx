"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet"; 
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section className="relative text-primary-foreground section-padding min-h-[70vh] flex items-center overflow-hidden particle-background-hero">
      {/* The particle-background-hero class will apply the ::before pseudo-element for the particle effect */}
      <div className="container-max relative z-20 text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up h-[120px] md:h-[150px] text-title-glow-primary"> {/* Added fixed height for stability and neon glow class */}
          <Typewriter
            options={{
              strings: [
                "Powering Your Digital Transformation",
                "Innovating with AI & Web Solutions",
                "Your Partner in Tech Excellence"
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-title-glow-primary",
              cursorClassName: "text-accent" // Style cursor
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Avyukta: Itf'y your business with revolution IT solutions in AI, web, and mobile development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              variant="neon"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </QuoteFormSheet>
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              variant="neon" 
              pulseAnimation // Enable pulse animation with white glow
            >
              Talk To Us 24*7
              <Phone className="ml-2 h-5 w-5 animate-pulse" /> 
            </AnimatedButton>
          </QuoteFormSheet>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
