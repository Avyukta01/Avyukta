
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react"; 
import Image from "next/image"; 

const testimonialsData = [
  {
    quote: "Voxaiomni's Dialer CRM delivered ROI in 3 months with 600% better output and full transparency. Highly effective for our recruiting consultancy.",
    name: "Mr. J K Sarolia",
    role: "Managing Director",
    company: "Mumbai Job Junction",
    image: "https://placehold.co/100x100.png",
    aiHint: "male director portrait",
    stars: 5,
  },
  {
    quote: "Their AI analytics platform boosted sales by 25% and improved inventory management. Deep customer insights achieved for our Bangalore stores!",
    name: "Ms. Priya Sharma",
    role: "Head of Marketing",
    company: "Bangalore Retail Co.",
    image: "https://placehold.co/100x100.png",
    aiHint: "female marketing head",
    stars: 5,
  },
  {
    quote: "Custom logistics software streamlined our North India operations, cut dispatch errors by 15%, and sped up deliveries. A real game-changer for efficiency.",
    name: "Mr. Arjun Reddy",
    role: "Chief Operations Officer",
    company: "Delhi Logistics Ltd.",
    image: "https://placehold.co/100x100.png",
    aiHint: "male COO portrait",
    stars: 4,
  },
  {
    quote: "A world-class e-commerce platform from Voxaiomni tripled our online revenue. Robust, secure, user-friendly, and perfect for our handcrafted goods.",
    name: "Mrs. Ananya Deshpande",
    role: "Founder & CEO",
    company: "PuneCrafts Online",
    image: "https://placehold.co/100x100.png",
    aiHint: "female founder portrait",
    stars: 5,
  },
  {
    quote: "Seamless AWS cloud migration by Voxaiomni. Minimal downtime, better performance, and 20% cost reduction for our Hyderabad tech office.",
    name: "Mr. Vikram Singh",
    role: "IT Director",
    company: "Hyderabad Tech Solutions",
    image: "https://placehold.co/100x100.png",
    aiHint: "male IT director",
    stars: 4,
  }
];

const TestimonialsSection = () => {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  // Duplicate testimonials for seamless marquee effect
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

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
        <div className="marquee">
          <div className="marquee-content marquee-content-hover">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`} 
                className="inline-block w-[300px] md:w-[350px] bg-background text-foreground shadow-lg flex-shrink-0 mx-3 my-3"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                      <AvatarFallback>{testimonial.name.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-md font-semibold text-primary">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
