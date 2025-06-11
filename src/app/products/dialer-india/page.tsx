"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  PhoneCall, Users, ShieldCheck, Mic, BarChartHorizontalBig, Settings, Zap, GitMerge, Database, FilePieChart, 
  Keyboard, PhoneForwarded, PhoneIncoming, PhoneOutgoing, MessageSquare, CheckCircle, Clock, ListChecks, TrendingUp, Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const dialerFeatures = [
  {
    title: "Comprehensive Call Handling",
    description: "Experience ultimate flexibility with support for Inbound, Outbound, and Blended call flows. Utilize agent-controlled, broadcast, and highly efficient predictive dialing modes to optimize every customer interaction and campaign performance.",
    icon: PhoneCall,
    secondaryIcon: GitMerge,
  },
  {
    title: "Compliance & Call Recording",
    description: "Ensure full compliance with stringent USA, UK, and Canada call regulations. Our platform offers integrated, high-quality call recording for quality assurance and dispute resolution, alongside seamless three-way calling capabilities.",
    icon: ShieldCheck,
    secondaryIcon: Mic,
  },
  {
    title: "Advanced Dialing Features",
    description: "Boost agent efficiency and call center performance with features like Scheduled Call-backs (Agent-Only/Anyone options), customizable IVRs (Interactive Voice Responses), dedicated Voicemail boxes, and FTC-compliant Answering Machine Detection.",
    icon: Clock,
    secondaryIcon: Settings,
  },
  {
    title: "Reporting & Analytics",
    description: "Gain deep, actionable insights into your call center operations with comprehensive reports. Access detailed Call Detail Records (CDRs) and leverage over 20 customizable reports, including intuitive Pie/Bar graph-based analytics for quick data visualization and decision-making.",
    icon: BarChartHorizontalBig,
    secondaryIcon: FilePieChart,
  },
  {
    title: "Scalability & User Management",
    description: "Our fully on-demand service is designed for ultimate scalability, supporting multi-tenant and multi-user environments. Easily scale your operations from a few agents to hundreds of seats, ensuring consistent performance even during peak call volumes.",
    icon: Users,
    secondaryIcon: TrendingUp,
  },
  {
    title: "Agent Efficiency Tools",
    description: "Empower your agents with tools designed for maximum efficiency. Utilize customizable HotKeys for faster call disposition, define optimal agent wrap-up times, create custom call dispositions, and enable secure remote agent login for flexible work environments.",
    icon: Keyboard,
    secondaryIcon: Zap,
  },
  {
    title: "Campaign & Lead Management",
    description: "Effectively manage multiple outbound and inbound campaigns simultaneously. Organize and segment lead-lists, automate recycling of specified status calls, and apply custom TimeZone restrictions to ensure compliant and effective outreach.",
    icon: ListChecks,
    secondaryIcon: Briefcase,
  },
  {
    title: "CRM & API Integration",
    description: "Seamlessly integrate DialerIndia with popular CRMs like Zoho, SugarCRM, Salesforce, and your in-house CRMs via robust API capabilities. Enhance data flow and automate workflows, with added support for SMS/Email OTP verification for secure access.",
    icon: Database,
  },
  {
    title: "Enhanced Call Control",
    description: "Maintain full control over your calls with advanced features such as transferring calls with complete customer data, parking calls with custom music-on-hold, automatically sending dropped calls to voicemail, and managing Caller ID (where compliance permits).",
    icon: PhoneForwarded,
  },
  {
    title: "ACD & Blended Operations",
    description: "Function as a highly efficient Automatic Call Distributor (ACD) for inbound, fronter, and closer calls. Enable agents to seamlessly handle both inbound and outbound calls within a single session, maximizing productivity and ensuring optimal resource utilization.",
    icon: GitMerge, // Or Users for agent focus
  },
];

const dialerBenefits = [
  "Increased Agent Productivity with automated dialing and efficient tools.",
  "Improved Call Connection Rates through predictive and progressive dialing.",
  "Enhanced Customer Experience with personalized interactions and reduced wait times.",
  "Better Campaign Management & ROI with detailed tracking and reporting.",
  "Ensure Compliance with industry regulations and call recording.",
  "Scalable Solution that grows with your call center needs.",
];

const useCases = [
    { name: "Telemarketing & Sales", description: "Run high-volume outbound campaigns, manage leads, and track sales performance.", image: "https://placehold.co/400x300.png", aiHint: "sales team callcenter" },
    { name: "Customer Support Centers", description: "Handle inbound inquiries efficiently with ACD, IVR, and call recording for quality assurance.", image: "https://placehold.co/400x300.png", aiHint: "customer support headset" },
    { name: "Lead Generation & Nurturing", description: "Systematically contact and qualify leads, schedule follow-ups, and integrate with CRM.", image: "https://placehold.co/400x300.png", aiHint: "lead generation graph" },
    { name: "Surveys & Market Research", description: "Conduct automated or agent-assisted surveys and gather valuable market insights.", image: "https://placehold.co/400x300.png", aiHint: "market research chart" },
];


export default function DialerIndiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <PhoneOutgoing className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              DialerIndia: Advanced Call Center Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Empower your call center operations with our robust, scalable, and feature-rich dialing platform, designed for maximum efficiency and compliance.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=DialerIndia_Demo_Request">Request a Demo</Link>
            </Button>
          </div>
        </section>

        {/* What is DialerIndia? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="DialerIndia Dashboard Interface"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="call center dashboard"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Introducing DialerIndia</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                DialerIndia by Avyukta is a comprehensive call center software solution engineered to optimize your outbound, inbound, and blended calling operations. It combines powerful dialing capabilities with advanced agent management, CRM integrations, and detailed reporting to drive productivity and enhance customer engagement.
              </p>
              <p className="text-muted-foreground text-lg">
                Whether you're running telemarketing campaigns, providing customer support, or conducting surveys, DialerIndia offers the flexibility and features to meet your unique business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Core Features of DialerIndia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dialerFeatures.map((feature, index) => (
                <Card key={feature.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <feature.icon className="h-8 w-8 text-accent mr-2" />
                      {feature.secondaryIcon && <feature.secondaryIcon className="h-8 w-8 text-accent/70 mr-3" />}
                      <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{feature.description}</CardDescription>
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
              Key Benefits for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dialerBenefits.map((benefit, index) => (
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
              Ideal For Various Call Center Operations
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
            <MessageSquare className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Supercharge Your Call Center?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how DialerIndia can optimize your calling campaigns and boost agent performance.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=DialerIndia_Inquiry&product=DialerIndia">Contact Our Dialer Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    