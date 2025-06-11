"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Rocket, Lightbulb, TrendingUp, Users, CheckCircle, ArrowRight, Cog } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const digitalTransformationServices = [
  {
    title: "Digital Strategy & Roadmap",
    description: "Defining a clear vision and a step-by-step plan for your digital transformation journey.",
    icon: Rocket,
    features: [
      "Current State Assessment",
      "Future State Visioning",
      "Technology Roadmap Development",
      "KPI & Success Metrics Definition"
    ]
  },
  {
    title: "Process Automation & Optimization",
    description: "Automating key business processes to increase efficiency and reduce operational costs.",
    icon: Cog,
    features: [
      "Robotic Process Automation (RPA)",
      "Workflow Automation",
      "Business Process Re-engineering",
      "Intelligent Automation"
    ]
  },
  {
    title: "Customer Experience Transformation",
    description: "Enhancing customer interactions through digital channels and personalized experiences.",
    icon: Users,
    features: [
      "Customer Journey Mapping",
      "Personalized Digital Engagements",
      "Omnichannel Strategy",
      "Feedback & Analytics Integration"
    ]
  },
  {
    title: "Cloud Adoption & Modernization",
    description: "Leveraging cloud technologies for scalability, flexibility, and innovation.",
    icon: Lightbulb,
    features: [
      "Cloud Strategy Development",
      "Cloud Migration Services",
      "Cloud-Native Application Development",
      "Hybrid Cloud Solutions"
    ]
  }
];

const benefits = [
  "Increased operational efficiency and productivity.",
  "Enhanced customer experiences and satisfaction.",
  "Improved data-driven decision-making.",
  "Greater agility and adaptability to market changes.",
  "Reduced costs through automation and optimized processes.",
  "New revenue streams and business model innovation."
];

const transformationProcess = [
  {
    step: "01",
    title: "Assess & Strategize",
    description: "In-depth analysis of your current digital maturity and strategic planning."
  },
  {
    step: "02",
    title: "Design & Innovate",
    description: "Designing innovative digital solutions and processes tailored to your needs."
  },
  {
    step: "03",
    title: "Implement & Integrate",
    description: "Developing and integrating new technologies and systems."
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Continuous optimization of digital processes and scaling solutions for growth."
  },
  {
    step: "05",
    title: "Change Management & Training",
    description: "Ensuring smooth adoption and empowering your team with new digital skills."
  },
  {
    step: "06",
    title: "Measure & Evolve",
    description: "Monitoring performance, gathering feedback, and evolving your digital strategy."
  }
];

export default function DigitalTransformationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Rocket className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Digital Transformation Strategy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Guiding your business through a seamless digital evolution to foster innovation, efficiency, and growth.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Start Your Transformation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Digital Transformation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {digitalTransformationServices.map((service, index) => (
                <Card key={service.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Benefits of Digital Transformation
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

        {/* Transformation Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Digital Transformation Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {transformationProcess.map((item, index) => (
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
              Ready to Embrace Digital Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's build a future-proof digital strategy for your business.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Schedule a Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 