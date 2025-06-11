"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Layers3, Palette, LayoutDashboard, Zap, CheckCircle, Users, ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Responsive UI/UX Development",
    description: "Crafting visually stunning and highly intuitive user interfaces that adapt seamlessly to any device and screen size.",
    icon: Palette,
  },
  {
    title: "Modern JavaScript Frameworks",
    description: "Expertise in building dynamic and interactive web applications using leading frameworks like React, Next.js, and Vue.js.",
    icon: Code2,
  },
  {
    title: "Single Page Applications (SPAs)",
    description: "Developing fast, fluid, and engaging SPAs that provide a seamless user experience similar to native desktop applications.",
    icon: LayoutDashboard,
  },
  {
    title: "Performance Optimization",
    description: "Optimizing frontend code for lightning-fast loading times, smooth animations, and efficient resource utilization to enhance user satisfaction.",
    icon: Zap,
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensuring your web application functions flawlessly across all major web browsers and platforms, providing a consistent user experience.",
    icon: CheckCircle,
  },
  {
    title: "Accessibility (A11y) Implementation",
    description: "Building web interfaces that are accessible to all users, including those with disabilities, by adhering to WCAG guidelines.",
    icon: Users,
  },
];

const benefits = [
  "Deliver exceptional user experiences that keep visitors engaged and coming back.",
  "Boost conversion rates with intuitive, visually appealing, and high-performing interfaces.",
  "Ensure brand consistency and a professional image across all digital touchpoints.",
  "Achieve faster loading times and seamless interactions, reducing bounce rates.",
  "Improve search engine rankings through optimized and crawlable frontend structures.",
  "Future-proof your web application with scalable and maintainable codebases.",
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your project goals, target audience, and functional requirements to lay a strong foundation.",
  },
  {
    step: "02",
    title: "Wireframing & Prototyping",
    description: "Creating detailed wireframes and interactive prototypes to visualize the user flow and interface before development begins.",
  },
  {
    step: "03",
    title: "Design & Asset Creation",
    description: "Translating prototypes into pixel-perfect designs, creating all necessary visual assets and ensuring brand consistency.",
  },
  {
    step: "04",
    title: "Development & Integration",
    description: "Writing clean, modular, and high-performance frontend code using modern frameworks, integrating with backend APIs.",
  },
  {
    step: "05",
    title: "Testing & QA",
    description: "Rigorous testing for functionality, responsiveness, cross-browser compatibility, and performance across various devices.",
  },
  {
    step: "06",
    title: "Deployment & Optimization",
    description: "Deploying the frontend to your chosen hosting, and ongoing optimization for speed, SEO, and user experience.",
  },
];

export default function FrontendDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Layers3 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Frontend Development: Crafting Engaging Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Building intuitive, responsive, and high-performance user interfaces that captivate your audience and drive meaningful interactions.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Request a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Frontend Development Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-title-glow-primary">
              Benefits of a Professional Frontend
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90 text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Frontend Development Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProcess.map((item, index) => (
                <div key={item.step} className={`p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-accent mr-4">{item.step}</span>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-title-glow-primary">
              Ready to Create an Exceptional User Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and build a stunning frontend that captivates your audience.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get Your Free Quote
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 