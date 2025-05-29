"use client";

import { Lightbulb, Smartphone, Globe, Code2, BrainCircuit, ArrowRightCircle } from "lucide-react";
import ExpandableCard from "@/components/ui/ExpandableCard";
import { Button } from "@/components/ui/button";

const expertiseData = [
  {
    title: "Ideation & Design",
    icon: Lightbulb,
    description: "Crafting user-centric designs that captivate and convert.",
    details: "Our design process involves deep research, wireframing, prototyping, and user testing to ensure intuitive and engaging digital experiences. We focus on UI/UX best practices to create products that are not only beautiful but also highly functional."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Building high-performance native and cross-platform mobile apps.",
    details: "We develop robust mobile applications for iOS and Android platforms, leveraging technologies like Swift, Kotlin, React Native, and Flutter. Our apps are scalable, secure, and optimized for performance."
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Developing responsive and scalable web solutions for modern businesses.",
    details: "From complex web applications to e-commerce platforms and corporate websites, we build solutions using modern frameworks like Next.js, React, Angular, and Node.js. We ensure optimal performance, security, and SEO-friendliness."
  },
  {
    title: "Software Development",
    icon: Code2,
    description: "Custom software tailored to your unique business requirements.",
    details: "Our team specializes in creating bespoke software solutions, including enterprise systems, SaaS products, and APIs. We follow agile methodologies to deliver high-quality software that aligns with your business goals."
  },
  {
    title: "AI Development",
    icon: BrainCircuit,
    description: "Leveraging artificial intelligence to unlock new possibilities.",
    details: "We provide AI-powered solutions including machine learning models, natural language processing, computer vision, and predictive analytics. Our AI expertise helps businesses automate processes, gain insights, and innovate."
  },
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide a wide range of services to help your business thrive in the digital landscape. Explore our core competencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseData.map((item) => (
            <ExpandableCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              description={item.description}
            >
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </ExpandableCard>
          ))}
           <ExpandableCard
            title="Explore All Services"
            icon={ArrowRightCircle}
            description="Discover the full spectrum of our capabilities."
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            defaultOpen={false}
          >
            <p className="text-sm text-primary-foreground/80 mb-4">
              We offer a comprehensive suite of services beyond these core areas. Contact us to discuss your specific needs and how we can help you achieve your goals.
            </p>
            <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View All Services
            </Button>
          </ExpandableCard>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
