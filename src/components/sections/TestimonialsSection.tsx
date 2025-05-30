
"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Voxaiomni transformed our online presence. Their team is professional, skilled, and delivered beyond our expectations!",
    name: "Jane Doe",
    title: "CEO, TechSolutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    stars: 5,
    aiHint: "professional portrait"
  },
  {
    quote: "The AI chatbot developed by Voxaiomni has significantly improved our customer service efficiency. Highly recommended.",
    name: "John Smith",
    title: "COO, GlobalMart",
    avatar: "https://placehold.co/100x100.png",
    stars: 5,
    aiHint: "business person"
  },
  {
    quote: "Exceptional web development services. Our new website is fast, responsive, and looks fantastic.",
    name: "Alice Brown",
    title: "Marketing Director, CreativeCo",
    avatar: "https://placehold.co/100x100.png",
    stars: 4,
    aiHint: "marketing professional"
  },
  {
    quote: "Their expertise in mobile app development is top-notch. The app they built for us is a huge success.",
    name: "Robert Green",
    title: "Founder, AppStart",
    avatar: "https://placehold.co/100x100.png",
    stars: 5,
    aiHint: "startup founder"
  },
  // Adding a few more unique testimonials for variety
  {
    quote: "Voxaiomni's AI solutions provided deep insights that were previously unavailable to us. A game changer!",
    name: "Maria Garcia",
    title: "Data Scientist, FutureAI Corp",
    avatar: "https://placehold.co/100x100.png",
    stars: 5,
    aiHint: "data scientist"
  },
  {
    quote: "The project management and communication from Voxaiomni were excellent throughout the development lifecycle.",
    name: "David Lee",
    title: "CTO, Innovate Ltd.", // Keep "Innovate Ltd." if it's a client name, change if it refers to the old company name
    avatar: "https://placehold.co/100x100.png",
    stars: 4,
    aiHint: "tech executive"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const cycleDuration = 5000; 
    const transitionDuration = 500;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, transitionDuration);
    }, cycleDuration + transitionDuration);

    return () => clearInterval(timer);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const testimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear directly from businesses that have partnered with Voxaiomni to achieve their goals.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-[320px]">
          {testimonial && (
            <Card
              key={testimonial.name} 
              className={`
                w-full max-w-lg md:max-w-xl 
                min-h-[280px] 
                bg-background text-foreground shadow-xl 
                transition-opacity duration-500 ease-in-out
                flex flex-col 
                ${isTransitioning ? 'opacity-0' : 'opacity-100'}
              `}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-primary shrink-0">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center pt-2">
                <div>
                  <div className="flex mb-3">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-base text-foreground/90 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
