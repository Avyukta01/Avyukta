
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react"; // Imported Quote icon

const testimonialsData = [
  {
    quote: "Dialer CRM for my recruiting consultancy as committed by Avyukta has enabled me to attain ROI within 3 months of complete deployment with all voice recordings, transparency, staff performance analysis, structured reporting and 600% better output with same resources.",
    name: "Mr. J K Sarolia",
    role: "Managing Director",
    company: "Mumbai Job Junction",
  },
  {
    quote: "The AI-powered analytics from Voxaiomni helped us understand our customer behavior deeply, leading to a 25% increase in sales in just one quarter. Their team's support was exceptional throughout the process.",
    name: "Ms. Priya Sharma",
    role: "Marketing Head",
    company: "Bangalore Retail Co.",
  },
  {
    quote: "Voxaiomni's custom software solution streamlined our complex logistics operations. We've seen a significant reduction in errors and improved delivery times. Truly a game-changer for our supply chain.",
    name: "Mr. Arjun Reddy",
    role: "Operations Chief",
    company: "Delhi Logistics Ltd.",
  },
  {
    quote: "Their web development team delivered a world-class e-commerce platform that is both robust and user-friendly. Our online revenue has tripled since the launch. Highly recommend Voxaiomni for digital transformation!",
    name: "Mrs. Ananya Deshpande",
    role: "Founder & CEO",
    company: "PuneCrafts Online",
  },
  {
    quote: "Working with Voxaiomni on our cloud migration was a seamless experience. Their expertise ensured minimal downtime and optimized our infrastructure for better performance and cost savings.",
    name: "Mr. Vikram Singh",
    role: "IT Director",
    company: "Hyderabad Tech Solutions",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (testimonialsData.length <= 1) return;

    const cycleDuration = 6000; // Increased duration for readability
    const transitionDuration = 500;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        setIsTransitioning(false);
      }, transitionDuration);
    }, cycleDuration + transitionDuration);

    return () => clearInterval(timer);
  }, []);

  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  const testimonial = testimonialsData[currentIndex];

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
        <div className="flex justify-center items-center min-h-[280px] md:min-h-[320px]">
          {testimonial && (
            <Card
              key={testimonial.name} 
              className={`
                w-full max-w-2xl 
                bg-background text-foreground shadow-xl 
                transition-opacity duration-500 ease-in-out
                flex flex-col rounded-lg
                ${isTransitioning ? 'opacity-0' : 'opacity-100'}
              `}
            >
              <CardContent className="pt-10 pb-4 text-center relative flex-grow flex flex-col justify-center">
                <Quote className="absolute top-4 left-4 md:left-6 h-10 w-10 md:h-12 md:w-12 text-muted-foreground/20 transform -translate-x-1 -translate-y-1" />
                <p className="text-md md:text-lg text-foreground/80 leading-relaxed mx-auto max-w-xl px-4 md:px-8">
                  {testimonial.quote}
                </p>
                <Quote className="absolute bottom-2 right-4 md:right-6 h-10 w-10 md:h-12 md:w-12 text-muted-foreground/20 transform translate-x-1 translate-y-1 rotate-180" />
              </CardContent>
              <div className="text-center pt-2 pb-8 px-6">
                <p className="text-lg font-bold text-destructive mt-4">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, <span className="font-medium text-destructive">{testimonial.company}</span>
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
