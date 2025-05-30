
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react"; // Imported Quote icon

const testimonialsData = [
  {
    quote: "Dialer CRM for my recruiting consultancy as committed by Voxaiomni has enabled me to attain ROI within 3 months of complete deployment with all voice recordings, transparency, staff performance analysis, structured reporting and 600% better output with same resources.",
    name: "Mr. J K Sarolia",
    role: "Managing Director",
    company: "Mumbai Job Junction",
  },
  {
    quote: "The AI-powered analytics platform developed by Voxaiomni gave us a deep understanding of our customer behavior across Bangalore. This led to a 25% increase in targeted sales and improved our inventory management significantly within just one quarter.",
    name: "Ms. Priya Sharma",
    role: "Head of Marketing",
    company: "Bangalore Retail Co.",
  },
  {
    quote: "Voxaiomni's custom logistics software streamlined our complex supply chain operations across North India. We've seen a remarkable reduction in dispatch errors by 15% and faster delivery times, which has been a game-changer for our efficiency.",
    name: "Mr. Arjun Reddy",
    role: "Chief Operations Officer",
    company: "Delhi Logistics Ltd.",
  },
  {
    quote: "Their web development team delivered a world-class e-commerce platform that is robust, secure, and user-friendly. Our online revenue from handcrafted goods has nearly tripled since the launch, reaching customers across India and even internationally. Highly recommend Voxaiomni!",
    name: "Mrs. Ananya Deshpande",
    role: "Founder & CEO",
    company: "PuneCrafts Online",
  },
  {
    quote: "Working with Voxaiomni on our cloud migration to AWS was a seamless experience. Their expertise ensured minimal downtime and they've optimized our infrastructure for better performance and a 20% reduction in monthly cloud hosting costs for our Hyderabad office.",
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

    const cycleDuration = 6000; 
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
        <div className="flex justify-center items-center min-h-[280px] md:min-h-[320px] overflow-hidden">
          {testimonial && (
            <Card
              key={testimonial.name + currentIndex} // Added currentIndex to key to ensure re-render on change
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
