
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Award, FileText, Lightbulb, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "AI-Powered Efficiency for FinTech Corp",
    client: "FinTech Corp",
    summary: "Implemented an AI-driven automation solution that reduced processing time by 40% and improved data accuracy for a leading financial services company.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/case-studies/fintech-ai-automation", // Placeholder slug
    aiHint: "finance technology ai",
    icon: TrendingUp,
  },
  {
    title: "Mobile App Transformation for RetailGiant",
    client: "RetailGiant",
    summary: "Revamped RetailGiant's mobile commerce app, resulting in a 25% increase in user engagement and a 15% uplift in mobile sales.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/case-studies/retail-mobile-app", // Placeholder slug
    aiHint: "retail mobile shopping",
    icon: Lightbulb,
  },
  {
    title: "Scalable Web Platform for HealthStart",
    client: "HealthStart",
    summary: "Developed a secure and scalable web platform for a healthcare startup, enabling them to onboard thousands of users and manage patient data efficiently.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/case-studies/health-web-platform", // Placeholder slug
    aiHint: "healthcare technology platform",
    icon: Target,
  },
  {
    title: "Cloud Migration Strategy for Enterprise Solutions",
    client: "Enterprise Solutions Ltd.",
    summary: "Successfully migrated legacy infrastructure to a modern cloud environment, enhancing scalability and reducing operational costs by 30%.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/case-studies/cloud-migration-enterprise",
    aiHint: "cloud data server",
    icon: TrendingUp,
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Award className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Voxaiomni Success Stories
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how we've helped businesses like yours achieve remarkable results through technology and innovation.
            </p>
          </div>
        </section>

        {/* Case Studies Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={study.slug} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <Link href={study.slug} className="block">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={study.aiHint}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                       {study.icon && <study.icon className="absolute top-4 right-4 h-10 w-10 text-white/80 bg-black/30 p-2 rounded-lg" />}
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={study.slug} className="block">
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{study.title}</CardTitle>
                    </Link>
                    <CardDescription className="text-sm font-medium text-muted-foreground">Client: {study.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80">{study.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary transition-colors w-full md:w-auto">
                      <Link href={study.slug}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* Placeholder for pagination or "Load More" if needed */}
            {/* 
            <div className="mt-12 text-center">
              <Button variant="outline">Load More Case Studies</Button>
            </div> 
            */}
          </div>
        </section>

         {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Let's discuss how Voxaiomni can help you achieve your business goals and overcome challenges with our tailored solutions.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=ProjectInquiry">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
