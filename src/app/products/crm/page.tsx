"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  Users, Target, Bell, MessageSquare, DollarSign, Filter, Mail, Briefcase, ShieldCheck, SlidersHorizontal, LogIn, LogOut, CalendarPlus, UserCheck, MailCheck, BarChart3, MapPin, AlertTriangle, Volume2, EyeOff, Zap, TrendingUp, Settings2, Activity, PieChart, CheckCircle, Info, ArrowRight, GitMerge, CalendarDays
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const crmFeatures = [
  {
    title: "Omni-channel Single Sign-On with Live Location",
    description: "Experience secure and seamless access across all CRM platforms, enhanced with real-time live location tracking for your field sales and service teams. This ensures accurate attendance, optimized route planning, and enhanced visibility of on-ground operations.",
    icon: LogIn,
    secondaryIcon: MapPin,
  },
  {
    title: "Target Work Stats with Priorities & Escalations",
    description: "Efficiently track daily, weekly, and monthly sales targets for individual team members and departments. Our system allows you to set task priorities, receive automated escalation alerts for missed deadlines or critical issues, and gain actionable insights into team performance.",
    icon: Target,
    secondaryIcon: AlertTriangle,
  },
  {
    title: "Voice-Based Notifications for All CRM Events",
    description: "Stay instantly updated with critical CRM activities through intelligent voice notifications. Receive real-time voice alerts for new leads, pending tasks, meeting reminders, sales closures, and important customer interactions, ensuring no critical update is missed.",
    icon: Bell,
    secondaryIcon: Volume2,
  },
  {
    title: "Omni Channelled Unified Communication",
    description: "Centralize all your customer interactions across various channels, including email, chat, social media, and calls, into one unified platform. This provides your team with a complete 360-degree view of every customer, enabling personalized and consistent communication.",
    icon: MessageSquare,
    secondaryIcon: GitMerge,
  },
  {
    title: "Sales CRM",
    description: "Empower your sales team with comprehensive tools to manage the entire sales pipeline, from lead inception to deal closure. Track opportunities, manage quotes, forecast sales, and analyze performance with intuitive dashboards to boost productivity and revenue.",
    icon: DollarSign,
    secondaryIcon: TrendingUp,
  },
  {
    title: "Lead Management",
    description: "Effectively capture, track, nurture, and qualify leads from various sources. Our robust lead management system helps you segment leads, automate follow-ups, assign scores, and ensure that your sales team focuses on the most promising prospects, maximizing conversion rates.",
    icon: Filter,
    secondaryIcon: Users,
  },
  {
    title: "Google Modules and Emails Integrations",
    description: "Seamlessly integrate your CRM with Google Workspace modules like Calendar, Drive, and Gmail. Sync contacts, schedule meetings directly from CRM, and manage email communications within the platform, enhancing collaboration and streamlining workflows.",
    icon: Mail,
  },
  {
    title: "Attendance, Leave, Task, Salary, Incentive Management",
    description: "A complete HR solution integrated within your CRM. Manage employee attendance (with live location), track leave requests, allocate and monitor tasks, process salaries, and calculate incentives all from a single dashboard, simplifying HR operations.",
    icon: Briefcase,
    secondaryIcon: CalendarDays,
  },
  {
    title: "Secure Employee Task Allocation & Management",
    description: "Assign and manage employee tasks securely with advanced privacy features, including customer details masking. Ensure sensitive client information is protected while providing teams with clear task assignments, progress tracking, and performance monitoring.",
    icon: ShieldCheck,
    secondaryIcon: EyeOff,
  },
  {
    title: "Custom Client Stages",
    description: "Tailor your sales and customer pipelines by defining and customizing client stages to precisely match your unique business processes. This flexibility allows for a highly personalized customer journey and accurate progress tracking.",
    icon: SlidersHorizontal,
    secondaryIcon: Settings2,
  },
  {
    title: "Auto Triggers for Personal and Complete Logout",
    description: "Automate actions and enhance security with configurable triggers. Set up personal reminders for tasks, meetings, or follow-ups. Implement automatic complete logout for idle users after a defined period, ensuring data security and compliance.",
    icon: Zap,
    secondaryIcon: LogOut,
  },
  {
    title: "Events & Meetings Management",
    description: "Efficiently schedule, manage, and track all your business events and customer meetings directly within the CRM. Send automated invitations, track RSVPs, manage agendas, and log meeting notes for a complete record of interactions.",
    icon: CalendarPlus,
  },
  {
    title: "Client CRM Login",
    description: "Provide a dedicated, secure portal for your clients to log in. Through this portal, clients can view their project status, access shared documents, submit support tickets, and interact with your team, enhancing transparency and engagement.",
    icon: UserCheck,
  },
  {
    title: "Daily Emails for Logins/Logouts & Task Summaries",
    description: "Receive automated daily email reports providing a comprehensive overview of user activity. This includes detailed summaries of logins and logouts, completed and pending tasks, and team occupancy rates, offering quick insights into daily operations.",
    icon: MailCheck,
    secondaryIcon: Activity,
  },
  {
    title: "25+ Detailed Reporting Modules",
    description: "Gain deep, actionable insights into your sales, marketing, and customer service performance with over 25 comprehensive reporting modules. Customize reports, visualize data with advanced charts, and identify key trends to make informed business decisions.",
    icon: BarChart3,
    secondaryIcon: PieChart,
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmFeatures.map((feature, index) => (
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

    