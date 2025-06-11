"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, Code2, Layers3, ShoppingCart, LayoutTemplate, Users, Shield, Rocket, CheckCircle, Lightbulb, TrendingUp, ArrowRight, Settings, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Website Development",
    description: "Building highly responsive, visually appealing, and SEO-optimized websites from scratch, ensuring an engaging user experience.",
    icon: LayoutTemplate,
    learnMoreLink: "/services/web-development/website-development",
  },
  {
    title: "Web Application Development",
    description: "Developing robust, scalable, and dynamic web applications tailored to your specific business processes and user interactions.",
    icon: Code2,
    learnMoreLink: "/services/web-development/web-app-development",
  },
  {
    title: "E-Commerce Development",
    description: "Creating secure, user-friendly, and high-converting online stores that drive sales and provide seamless shopping experiences.",
    icon: ShoppingCart,
    learnMoreLink: "/services/web-development/e-commerce-development",
  },
  {
    title: "Frontend Development",
    description: "Crafting intuitive and visually appealing user interfaces (UI) using modern frameworks like React, Next.js, and Vue.js.",
    icon: Layers3,
    learnMoreLink: "/services/web-development/frontend-development",
  },
  {
    title: "Backend & API Development",
    description: "Building powerful, secure, and scalable server-side logic and APIs using Node.js, Python, or Ruby on Rails.",
    icon: Settings,
    learnMoreLink: "/services/web-development/backend-api-development", // Assuming this exists or will be created
  },
  {
    title: "CMS Development",
    description: "Implementing flexible and easy-to-manage Content Management Systems like WordPress, headless CMS, or custom solutions.",
    icon: Users, // Represents content creators/users
    learnMoreLink: "/services/web-development/cms-development", // Assuming this exists or will be created
  },
];

const benefits = [
  "Establish a strong online presence and brand identity.",
  "Enhance user engagement and deliver seamless digital experiences.",
  "Streamline business operations with custom web applications.",
  "Improve SEO and discoverability to attract more organic traffic.",
  "Ensure robust security and data protection for your web platforms.",
  "Achieve scalability to support future growth and increased user loads."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your vision, target audience, and business objectives to define the project scope.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Creating intuitive and engaging designs, focusing on user experience and visual appeal.",
  },
  {
    step: "03",
    title: "Development & Coding",
    description: "Building your web solution with clean, efficient code and agile methodologies, ensuring scalability and performance.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Rigorous testing across various browsers and devices to guarantee a bug-free and high-performance application.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Seamless deployment to your chosen hosting environment, ensuring a smooth and successful launch.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    description: "Providing ongoing maintenance, updates, and optimization to keep your web solution robust and secure.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Globe className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Web Development: Building Your Digital Foundation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Crafting innovative and robust web solutions that elevate your online presence and drive tangible business results.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Request a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Service Offerings Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt={area.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    {area.icon && <area.icon className="absolute top-4 left-4 h-10 w-10 text-accent bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-md" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80">{area.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-accent">
                      <Link href={area.learnMoreLink}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-title-glow-primary">
              Benefits of Partnering with Avyukta for Web Development
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
              Our Web Development Process
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
              Ready to Build Your Powerful Web Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and create a cutting-edge web solution that drives your business forward.
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
