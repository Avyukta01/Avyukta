"use client";

import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone } from "lucide-react";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section className="relative text-primary-foreground section-padding min-h-[70vh] flex items-center overflow-hidden particle-background-hero">
      {/* The particle-background-hero class will apply the ::before pseudo-element for the particle effect */}
      <div className="container-max relative z-20 text-center">
        <p className="text-base md:text-lg font-semibold text-primary mb-4 animate-fade-in-up">
          <span className="relative inline-block">
            Your Trusted Partner in IT Solutions
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 origin-left animate-underline-grow" />
          </span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
          <Typewriter
            options={{
              strings: ["Accelerate", "Innovate", "Transform"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "inline-block",
              cursorClassName: "text-accent",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).start();
            }}
          />
          <span className="ml-2">Your Business with Avyukta</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Leverage cutting-edge technology and expert insights to achieve unparalleled growth and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              variant="neon"
              pulseAnimation
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </QuoteFormSheet>
          <AnimatedButton
            size="lg"
            variant="neon"
            pulseAnimation
          >
            Talk To Us 24*7
            <Phone className="ml-2 h-5 w-5 animate-pulse" /> 
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
