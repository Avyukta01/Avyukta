"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Briefcase, TrendingUp, Users, Award, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const consultingServices = [
  {
    title: "Digital Strategy Consulting",
    icon: Brain,
    description: "Develop a roadmap for digital transformation, aligning technology with your business objectives for sustainable growth.",
    details: [
      "Market Analysis & Opportunity Identification",
      "Digital Product Strategy & Roadmapping",
      "Technology Stack Modernization",
      "Change Management & Adoption",
    ],
  },
  {
    title: "Technology Advisory",
    icon: Briefcase,
    description: "Leverage our expertise to make informed technology decisions, optimize your IT infrastructure, and enhance operational efficiency.",
    details: [
      "Cloud Strategy & Migration",
      "Cybersecurity & Risk Management",
      "Software Architecture Review",
      "IT Performance Optimization",
    ],
  },
  {
    title: "AI & ML Consulting",
    icon: TrendingUp,
    description: "Unlock the power of Artificial Intelligence and Machine Learning to gain insights, automate processes, and create innovative solutions.",
    details: [
      "AI Use Case Identification & Prioritization",
      "Custom AI Model Development",
      "Data Strategy for AI",
      "AI Ethics & Governance Frameworks",
    ],
  },
];

const whyChooseUsPoints = [
  {
    title: "Expert Guidance",
    description: "Our team of seasoned consultants brings deep industry knowledge and technical expertise.",
    icon: Users,
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Our strategies are customized to your unique needs.",
    icon: CheckCircle,
  },
  {
    title: "Measurable Results",
    description: "We focus on delivering tangible outcomes that drive growth and improve your bottom line.",
    icon: Award,
  },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Briefcase className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Expert Consulting to Elevate Your Business
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Partner with Avyukta to navigate complexity, unlock opportunities, and achieve strategic excellence.
            </p>
          </div>
        </section>

        {/* Our Consulting Approach Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Consulting Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Discovery", "Strategy", "Implementation", "Optimization"].map((step, index) => (
                <div key={step} className={`p-6 bg-card rounded-lg shadow-lg text-center animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mx-auto mb-4 font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {
                      step === "Discovery" ? "We start by understanding your business, challenges, and goals through in-depth analysis and workshops." :
                      step === "Strategy" ? "We develop a tailored strategic plan with clear objectives and actionable initiatives." :
                      step === "Implementation" ? "Our experts guide you through the execution phase, ensuring seamless integration and adoption." :
                      "We continuously monitor performance, providing insights for ongoing improvement and sustained success."
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Consulting Areas Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Key Consulting Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <Card key={service.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader className="items-center text-center">
                    <service.icon className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                     <ul className="space-y-2 text-sm text-muted-foreground text-left list-disc list-inside">
                      {service.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner with Avyukta Consulting? */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Why Partner with Avyukta Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUsPoints.map((point, index) => (
                <div key={point.title} className={`flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <point.icon className="h-12 w-12 text-accent mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2">{point.title}</h4>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Spotlight Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Client success visual"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="business meeting success"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h3 className="text-2xl font-semibold text-primary mb-4">Client Success Spotlight</h3>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                "Avyukta's consulting team provided invaluable insights that transformed our approach to AI. Their strategic guidance led to a 30% increase in operational efficiency within six months."
              </blockquote>
              <p className="font-semibold text-primary">- Alex Chen, CTO at FutureForward Corp</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageCircle className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your challenges and how our consulting services can help you achieve your strategic goals.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?service=consulting">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
