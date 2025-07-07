"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  Users, Target, Bell, MessageSquare, DollarSign, Filter, Mail, Briefcase, ShieldCheck, SlidersHorizontal, LogIn, LogOut, CalendarPlus, UserCheck, MailCheck, BarChart3, MapPin, AlertTriangle, Volume2, EyeOff, Zap, TrendingUp, Settings2, Activity, PieChart, CheckCircle, Info, ArrowRight, GitMerge, CalendarDays, UserPlus, Building2, Ticket, Chrome, Tag
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const crmFeatures = [
  {
    title: "Lead Management",
    description: "Capture, track, and nurture leads from multiple sources with intelligent scoring and automated follow-ups to maximize conversion rates.",
    icon: UserPlus,
  },
  {
    title: "Account Management",
    description: "Centralize customer account information with comprehensive profiles, interaction history, and relationship mapping for better customer insights.",
    icon: Building2,
  },
  {
    title: "Ticketing System",
    description: "Streamline customer support with organized ticket management, priority tracking, and automated resolution workflows for enhanced service delivery.",
    icon: Ticket,
  },
  {
    title: "Google Integration",
    description: "Seamlessly connect with Google Workspace for calendar sync, email integration, and document management to boost productivity and collaboration.",
    icon: Chrome,
  },
  {
    title: "Customer Label Style",
    description: "Organize and categorize customers with customizable labels and tags for efficient segmentation and personalized communication strategies.",
    icon: Tag,
  },
];

const crmBenefits = [
  "Streamline and Automate Sales Processes",
  "Enhance Customer Engagement and Satisfaction",
  "Improve Lead Conversion Rates",
  "Gain 360-Degree View of Customer Interactions",
  "Boost Team Productivity and Collaboration",
  "Make Data-Driven Decisions with Advanced Reporting",
  "Ensure Secure and Efficient Task Management",
  "Scalable Solution to Grow with Your Business",
];

const useCases = [
    { name: "Sales Force Automation", description: "Managing leads, opportunities, and sales pipelines effectively.", image: "https://placehold.co/400x300.png", aiHint: "sales team graph" },
    { name: "Customer Service Management", description: "Tracking support tickets, managing customer inquiries, and ensuring timely resolution.", image: "https://placehold.co/400x300.png", aiHint: "customer support team" },
    { name: "Marketing Campaign Tracking", description: "Monitoring campaign performance and attributing leads to marketing efforts.", image: "https://placehold.co/400x300.png", aiHint: "marketing analytics chart" },
    { name: "Employee & Task Management", description: "Organizing internal tasks, tracking employee performance and attendance.", image: "https://placehold.co/400x300.png", aiHint: "team task board" },
];


export default function CRMPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Users className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Avyukta CRM: Unify Your Customer Relationships
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              A comprehensive CRM solution to streamline sales, manage leads, automate tasks, and provide deep insights for unparalleled customer engagement and business growth.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                Request a Demo
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What is Avyukta CRM? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Avyukta CRM Dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="crm dashboard interface"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Avyukta CRM</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Avyukta CRM is an all-in-one Customer Relationship Management platform meticulously engineered to empower your business. It centralizes customer data, automates critical workflows, and provides powerful tools for sales, marketing, and service teams to collaborate effectively and build lasting customer loyalty.
              </p>
              <p className="text-muted-foreground text-lg">
                From advanced lead management and sales automation to comprehensive reporting and employee productivity tools, our CRM is designed for scalability and customizability to fit your unique operational needs.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Core Features of Avyukta CRM
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 sd:grid-cols-3 sd:grid-cols-5 gap-6 max-w-6xl mx-75">
              {crmFeatures.map((feature, index) => (
                <Card key={feature.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px]`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <feature.icon className="h-7 w-7 text-accent mr-3 flex-shrink-0" />
                      <CardTitle className="text-base font-semibold text-primary leading-tight">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <CardDescription className="text-sm leading-relaxed line-clamp-4">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Unlock Powerful Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {crmBenefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Versatile Applications for Your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.name} className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                   <div className="relative h-48 w-full">
                    <Image
                        src={useCase.image}
                        alt={useCase.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={useCase.aiHint}
                    />
                    </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Revolutionize Your Customer Management?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how Avyukta CRM can transform your sales, service, and marketing efforts.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=CRM_Inquiry&product=AvyuktaCRM">Contact Our CRM Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    