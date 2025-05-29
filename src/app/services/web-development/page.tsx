
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, Code2, ShoppingCart, Layers3, Smartphone, Server, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const expertiseAreas = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Crafting responsive, high-performance, and user-friendly interfaces with modern JavaScript frameworks like Next.js and React. We focus on exceptional UI/UX and accessibility.",
    details: ["Single Page Applications (SPAs)", "Progressive Web Apps (PWAs)", "Interactive User Interfaces", "Cross-browser Compatibility"]
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Building robust, scalable, and secure server-side logic and APIs using technologies like Node.js, Python, and various database solutions.",
    details: ["RESTful & GraphQL APIs", "Microservices Architecture", "Database Design & Optimization", "Serverless Functions"]
  },
  {
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    description: "Developing feature-rich online stores and e-commerce platforms tailored to your business needs, integrated with secure payment gateways and inventory management.",
    details: ["Custom Shopping Cart Development", "Payment Gateway Integration", "Product Catalog Management", "Subscription Platforms"]
  },
  {
    title: "Custom Web Applications",
    icon: Layers3,
    description: "Designing and developing bespoke web applications to solve unique business challenges, from complex dashboards to enterprise-grade platforms.",
    details: ["SaaS Product Development", "Enterprise Portals", "Data Visualization Tools", "Workflow Automation Systems"]
  }
];

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "Firebase", "Google Cloud", "AWS", "Docker"];

const developmentProcess = [
  { step: "01", title: "Discovery & Planning", description: "Understanding your vision, goals, and requirements through detailed consultation." },
  { step: "02", title: "UI/UX Design", description: "Creating intuitive and engaging designs, wireframes, and prototypes." },
  { step: "03", title: "Development", description: "Building your web solution using agile methodologies and best coding practices." },
  { step: "04", title: "Testing & QA", description: "Ensuring quality through rigorous testing for functionality, performance, and security." },
  { step: "05", title: "Deployment & Launch", description: "Seamlessly deploying your application to the live environment." },
  { step: "06", title: "Support & Maintenance", description: "Providing ongoing support and updates to keep your solution running smoothly." },
];

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Expert Web Development Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Building powerful, scalable, and engaging web solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Our Web Development Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Web Development Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Includes:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {area.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Technologies We Master
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {techStack.map((tech) => (
                <span key={tech} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Development Process
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
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Build Your Next Web Solution?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project requirements and how our web development expertise can bring your vision to life.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=WebDevelopmentInquiry">Get a Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
