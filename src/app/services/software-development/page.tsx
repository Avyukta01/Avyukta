"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, SlidersHorizontal, Layers3, Server, Database, CheckCircle, MessageSquare, GitBranchPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const expertiseAreas = [
  {
    title: "Custom Enterprise Solutions",
    icon: Layers3,
    description: "Developing large-scale, robust software tailored to complex business processes and organizational needs, focusing on scalability and integration.",
    details: ["ERP & CRM Customization", "Supply Chain Management Systems", "Business Process Automation", "Legacy System Modernization"]
  },
  {
    title: "SaaS Product Development",
    icon: SlidersHorizontal,
    description: "Building innovative Software-as-a-Service products from concept to launch, with multi-tenancy, subscription management, and scalable cloud architectures.",
    details: ["MVP Development", "Full-Cycle Product Engineering", "API Design & Integration", "Scalable Cloud Deployment"]
  },
  {
    title: "API Development & Integration",
    icon: GitBranchPlus,
    description: "Designing and developing secure, reliable, and well-documented APIs (RESTful, GraphQL) to connect diverse systems and enable seamless data exchange.",
    details: ["Third-Party API Integration", "Microservices Architecture", "API Security Best Practices", "Real-time Data Sync"]
  },
  {
    title: "Database Design & Optimization",
    icon: Database,
    description: "Architecting efficient database schemas, optimizing query performance, and ensuring data integrity for both relational and NoSQL databases.",
    details: ["Data Modeling", "Performance Tuning", "Data Migration & ETL", "Database Security"]
  }
];

const techStack = ["Java", "Python", ".NET", "Node.js", "React", "Angular", "Vue.js", "Spring Boot", "Django", "SQL", "NoSQL", "Docker", "Kubernetes"];

const developmentProcess = [
  { step: "01", title: "Requirement Analysis", description: "Deep dive into your business needs, goals, and technical requirements." },
  { step: "02", title: "Architecture & Design", description: "Planning a robust and scalable software architecture and user-centric design." },
  { step: "03", title: "Agile Development", description: "Iterative development sprints with continuous feedback and quality assurance." },
  { step: "04", title: "Rigorous Testing", description: "Comprehensive testing including unit, integration, performance, and security testing." },
  { step: "05", title: "Deployment & Integration", description: "Smooth deployment to your chosen environment and seamless integration with existing systems." },
  { step: "06", title: "Ongoing Support & Evolution", description: "Providing maintenance, updates, and feature enhancements post-launch." },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Code2 className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Custom Software Development Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Building tailored, high-performance software that drives efficiency, innovation, and growth for your business.
            </p>
          </div>
        </section>

        {/* Our Software Development Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Software Development Expertise
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

        {/* Technologies We Master Section */}
        <section className="section-padding bg-secondary pt-24">
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

        {/* Our Development Lifecycle Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Software Development Lifecycle
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
              Ready to Build Your Next Software Solution?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project requirements and how our software development expertise can bring your vision to life.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=SoftwareDevelopmentInquiry">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
