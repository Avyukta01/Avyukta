"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  Users, Target, Bell, MessageSquare, DollarSign, Filter, Mail, Briefcase, ShieldCheck, SlidersHorizontal, LogIn, LogOut, CalendarPlus, UserCheck, MailCheck, BarChart3, MapPin, AlertTriangle, Volume2, EyeOff, Zap, TrendingUp, Settings2, Activity, PieChart, CheckCircle, Info, ArrowRight, GitMerge, CalendarDays, UserPlus, Building2, Ticket, Chrome, Tag, ChevronLeft, ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

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

const crmImages = [
  "/leadmanagement/lead1.png",
  "/leadmanagement/lead.png",
  // Add more images as needed
];

const leadManagementFeatures = [
  "Automated lead capture from multiple sources",
  "Intelligent lead scoring and prioritization",
  "Seamless follow-up reminders and notifications",
  "Customizable lead pipelines and stages",
  "Detailed analytics and conversion tracking",
  "Integration with email, phone, and chat",
];

function LeadManagementCarousel() {
  const [current, setCurrent] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);

  // Manual navigation only, no auto-slide
  const prevImage = () => setCurrent((prev) => (prev - 1 + crmImages.length) % crmImages.length);
  const nextImage = () => setCurrent((prev) => (prev + 1) % crmImages.length);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={crmImages[current]}
          alt={`Lead Management ${current + 1}`}
          className="object-contain w-full h-full transition-all duration-700"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      {/* SEO-friendly Title and Description */}
      <h3 className="text-lg font-bold mb-2 text-primary">Advanced Lead Management</h3>
      <p className="mb-4 text-muted-foreground">
        Empower your sales team with intelligent lead management. Capture, nurture, and convert leads efficiently with automated workflows, real-time analytics, and seamless integrations. Maximize your conversion rates and grow your business with Avyukta CRM.
      </p>
      {/* Features List */}
      <ul className="list-disc pl-5 mb-2 text-sm text-foreground">
        {leadManagementFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      {/* Details */}
      <div className="text-xs text-muted-foreground mb-4">
        <strong>Details:</strong> Our Lead Management module is designed for modern businesses seeking to optimize their sales funnel. With customizable pipelines, automated follow-ups, and insightful reporting, you can ensure no opportunity is missed and every lead is nurtured to success.
      </div>
      {/* Additional Content */}
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">Why Choose Our Lead Management?</h4>
      <ul className="list-disc pl-5 mb-4 text-sm text-foreground">
        <li>Boosts sales productivity and efficiency</li>
        <li>Reduces manual data entry and errors</li>
        <li>Improves lead response time and engagement</li>
        <li>Provides actionable insights for better decision-making</li>
        <li>Seamlessly integrates with your existing tools</li>
        <li>Highly secure and scalable for growing businesses</li>
      </ul>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">How It Works</h4>
      <ol className="list-decimal pl-5 mb-4 text-sm text-foreground">
        <li><strong>Lead Capture:</strong> Automatically gather leads from web forms, emails, calls, and social media.</li>
        <li><strong>Lead Scoring:</strong> Assign scores based on engagement, source, and fit to prioritize follow-up.</li>
        <li><strong>Pipeline Management:</strong> Move leads through customizable stages for clear visibility.</li>
        <li><strong>Automated Follow-ups:</strong> Set reminders and send personalized messages to nurture leads.</li>
        <li><strong>Conversion & Reporting:</strong> Track conversions and analyze performance with real-time dashboards.</li>
      </ol>
      <div className="mt-6 p-4 bg-primary/10 rounded text-center">
        <span className="block text-base font-semibold text-primary mb-2">Ready to Supercharge Your Sales?</span>
        <span className="text-sm text-muted-foreground">Contact our CRM experts today and discover how Avyukta Lead Management can transform your business growth.</span>
      </div>
      {/* CTA Button for Schedule a Demo */}
      <div className="w-full flex justify-center mt-6">
        <ScheduleDemoSheet open={demoOpen} onOpenChange={setDemoOpen}>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
            onClick={() => setDemoOpen(true)}
          >
            Schedule a Demo
          </Button>
        </ScheduleDemoSheet>
      </div>
    </div>
  );
}

function AccountManagementCarousel() {
  const [current, setCurrent] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);
  const accountImages = [
    "/account/add.png",
    "/account/add1.png",
    
    // Add more images as needed
  ];
  const accountFeatures = [
    "Centralized customer account information",
    "Comprehensive profiles and interaction history",
    "Relationship mapping for better insights",
    "Custom fields and segmentation",
    "Secure document and contract storage",
    "Automated account updates and notifications",
  ];
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={accountImages[current]}
          alt={`Account Management ${current + 1}`}
          className="object-contain w-full h-full transition-all duration-700"
        />
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + accountImages.length) % accountImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % accountImages.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <h3 className="text-lg font-bold mb-2 text-primary">Comprehensive Account Management</h3>
      <p className="mb-4 text-muted-foreground">
        Manage all your customer accounts in one place. Avyukta CRM provides a 360-degree view of every client, enabling your team to build stronger relationships, track every interaction, and deliver personalized service that drives loyalty and growth.
      </p>
      <ul className="list-disc pl-5 mb-2 text-sm text-foreground">
        {accountFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground mb-4">
        <strong>Details:</strong> Our Account Management module empowers your business to organize, segment, and nurture customer accounts with ease. From detailed profiles to secure document storage and automated updates, you have everything you need to deliver exceptional customer experiences.
      </div>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">Why Choose Our Account Management?</h4>
      <ul className="list-disc pl-5 mb-4 text-sm text-foreground">
        <li>Improves customer retention and satisfaction</li>
        <li>Enables personalized communication and offers</li>
        <li>Streamlines account updates and compliance</li>
        <li>Enhances team collaboration and transparency</li>
        <li>Supports scalable growth and data security</li>
      </ul>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">How It Works</h4>
      <ol className="list-decimal pl-5 mb-4 text-sm text-foreground">
        <li><strong>Account Creation:</strong> Add new accounts with detailed information and custom fields.</li>
        <li><strong>Profile Enrichment:</strong> Attach documents, notes, and track all interactions.</li>
        <li><strong>Segmentation:</strong> Group accounts by type, industry, or custom tags for targeted actions.</li>
        <li><strong>Relationship Mapping:</strong> Visualize connections and key contacts within each account.</li>
        <li><strong>Reporting:</strong> Monitor account health, activity, and opportunities for upsell or renewal.</li>
      </ol>
      <div className="mt-6 p-4 bg-primary/10 rounded text-center">
        <span className="block text-base font-semibold text-primary mb-2">Ready to Elevate Your Account Management?</span>
        <span className="text-sm text-muted-foreground">Contact our CRM experts today and discover how Avyukta Account Management can help you build lasting customer relationships.</span>
      </div>
      <div className="w-full flex justify-center mt-6">
        <ScheduleDemoSheet open={demoOpen} onOpenChange={setDemoOpen}>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
          >
            Schedule a Demo
          </Button>
        </ScheduleDemoSheet>
      </div>
    </div>
  );
}

function TicketingSystemCarousel() {
  const [current, setCurrent] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);
  const ticketingImages = [
    "/ticket/ticket1.png",
    "/ticket/ticket2.png",
    "/ticket/ticket3.png",
    // Add more images as needed
  ];
  const ticketingFeatures = [
    "Organized ticket management and tracking",
    "Priority assignment and escalation workflows",
    "Automated notifications and reminders",
    "Customizable ticket categories and statuses",
    "Comprehensive reporting and analytics",
    "Integration with email, chat, and phone support",
  ];
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={ticketingImages[current]}
          alt={`Ticketing System ${current + 1}`}
          className="object-contain w-full h-full transition-all duration-700"
        />
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + ticketingImages.length) % ticketingImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % ticketingImages.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <h3 className="text-lg font-bold mb-2 text-primary">Efficient Ticketing System</h3>
      <p className="mb-4 text-muted-foreground">
        Streamline your customer support with our advanced ticketing system. Manage, prioritize, and resolve customer issues efficiently, ensuring high satisfaction and quick turnaround times for every request.
      </p>
      <ul className="list-disc pl-5 mb-2 text-sm text-foreground">
        {ticketingFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground mb-4">
        <strong>Details:</strong> Our Ticketing System module is designed to help your support team stay organized, respond faster, and deliver exceptional service. With automation, analytics, and seamless integrations, you can resolve issues before they impact your business.
      </div>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">Why Choose Our Ticketing System?</h4>
      <ul className="list-disc pl-5 mb-4 text-sm text-foreground">
        <li>Improves response and resolution times</li>
        <li>Reduces manual workload with automation</li>
        <li>Enhances customer satisfaction and loyalty</li>
        <li>Provides actionable insights for continuous improvement</li>
        <li>Supports multi-channel support and collaboration</li>
      </ul>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">How It Works</h4>
      <ol className="list-decimal pl-5 mb-4 text-sm text-foreground">
        <li><strong>Ticket Creation:</strong> Customers submit issues via web, email, or phone.</li>
        <li><strong>Automatic Assignment:</strong> Tickets are routed to the right team or agent based on rules.</li>
        <li><strong>Prioritization:</strong> Urgent issues are flagged and escalated automatically.</li>
        <li><strong>Resolution:</strong> Agents collaborate, update status, and resolve tickets efficiently.</li>
        <li><strong>Feedback & Reporting:</strong> Customers provide feedback and managers analyze performance.</li>
      </ol>
      <div className="mt-6 p-4 bg-primary/10 rounded text-center">
        <span className="block text-base font-semibold text-primary mb-2">Ready to Transform Your Support?</span>
        <span className="text-sm text-muted-foreground">Contact our CRM experts today and discover how Avyukta Ticketing System can elevate your customer service.</span>
      </div>
      <div className="w-full flex justify-center mt-6">
        <ScheduleDemoSheet open={demoOpen} onOpenChange={setDemoOpen}>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
          >
            Schedule a Demo
          </Button>
        </ScheduleDemoSheet>
      </div>
    </div>
  );
}

function GoogleIntegrationCarousel() {
  const [current, setCurrent] = useState(0);
  const googleImages = [
    "/google/go1.png",
    "/google/go2.png",
    // Add more images as needed
  ];
  const googleFeatures = [
    "Seamless Google Workspace integration",
    "Calendar sync for meetings and reminders",
    "Gmail and Drive connectivity",
    "Automated contact and lead import",
    "Document management and sharing",
    "Real-time collaboration tools",
  ];
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={googleImages[current]}
          alt={`Google Integration ${current + 1}`}
          className="object-contain w-full h-full transition-all duration-700"
        />
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + googleImages.length) % googleImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % googleImages.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <h3 className="text-lg font-bold mb-2 text-primary">Powerful Google Integration</h3>
      <p className="mb-4 text-muted-foreground">
        Connect your CRM with Google Workspace for a unified workflow. Sync calendars, manage emails, and collaborate on documents directly within Avyukta CRM to boost productivity and streamline your business operations.
      </p>
      <ul className="list-disc pl-5 mb-2 text-sm text-foreground">
        {googleFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground mb-4">
        <strong>Details:</strong> Our Google Integration module ensures your team stays connected and efficient. With real-time sync and secure access to all your Google tools, you can manage your business from anywhere, anytime.
      </div>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">Why Choose Our Google Integration?</h4>
      <ul className="list-disc pl-5 mb-4 text-sm text-foreground">
        <li>Eliminates data silos and manual entry</li>
        <li>Improves scheduling and communication</li>
        <li>Enables real-time document collaboration</li>
        <li>Boosts productivity with automation</li>
        <li>Ensures data security and compliance</li>
      </ul>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">How It Works</h4>
      <ol className="list-decimal pl-5 mb-4 text-sm text-foreground">
        <li><strong>Connect:</strong> Authorize your Google Workspace account in Avyukta CRM.</li>
        <li><strong>Sync:</strong> Automatically import contacts, events, and emails.</li>
        <li><strong>Collaborate:</strong> Share and edit documents with your team in real time.</li>
        <li><strong>Automate:</strong> Set up workflows for reminders, follow-ups, and document sharing.</li>
        <li><strong>Analyze:</strong> Track engagement and productivity with integrated reports.</li>
      </ol>
      <div className="mt-6 p-4 bg-primary/10 rounded text-center">
        <span className="block text-base font-semibold text-primary mb-2">Ready to Supercharge Your Workflow?</span>
        <span className="text-sm text-muted-foreground">Contact our CRM experts today and discover how Avyukta Google Integration can streamline your business.</span>
      </div>
      <div className="w-full flex justify-center mt-6">
        <ScheduleDemoSheet>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
          >
            Schedule a Demo
          </Button>
        </ScheduleDemoSheet>
      </div>
    </div>
  );
}

function CustomerLabelStyleCarousel() {
  const [current, setCurrent] = useState(0);
  const labelImages = [
    "/customer/1.png",
    "/customer/2.png",
    // Add more images as needed
  ];
  const labelFeatures = [
    "Customizable customer labels and tags",
    "Efficient segmentation for targeted campaigns",
    "Color-coded and icon-based labels",
    "Bulk label assignment and management",
    "Advanced filtering and search",
    "Seamless integration with CRM workflows",
  ];
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={labelImages[current]}
          alt={`Customer Label Style ${current + 1}`}
          className="object-contain w-full h-full transition-all duration-700"
        />
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + labelImages.length) % labelImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % labelImages.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <h3 className="text-lg font-bold mb-2 text-primary">Flexible Customer Labeling</h3>
      <p className="mb-4 text-muted-foreground">
        Organize and segment your customers with powerful, customizable labels. Avyukta CRM lets you create, assign, and manage labels for efficient targeting, communication, and workflow automation.
      </p>
      <ul className="list-disc pl-5 mb-2 text-sm text-foreground">
        {labelFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground mb-4">
        <strong>Details:</strong> Our Customer Label Style module empowers your team to quickly identify, group, and act on customer segments. Use color, icons, and custom tags to streamline your marketing and support efforts.
      </div>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">Why Choose Our Customer Label Style?</h4>
      <ul className="list-disc pl-5 mb-4 text-sm text-foreground">
        <li>Enables hyper-targeted marketing and support</li>
        <li>Reduces manual sorting and errors</li>
        <li>Improves team collaboration and visibility</li>
        <li>Supports unlimited custom labels and tags</li>
        <li>Boosts productivity with advanced filtering</li>
      </ul>
      <h4 className="text-base font-semibold mt-4 mb-2 text-primary">How It Works</h4>
      <ol className="list-decimal pl-5 mb-4 text-sm text-foreground">
        <li><strong>Create:</strong> Design custom labels with colors, icons, and names.</li>
        <li><strong>Assign:</strong> Apply labels to customers individually or in bulk.</li>
        <li><strong>Segment:</strong> Filter and group customers for campaigns or workflows.</li>
        <li><strong>Automate:</strong> Trigger actions based on label changes or combinations.</li>
        <li><strong>Analyze:</strong> Track label usage and campaign effectiveness.</li>
      </ol>
      <div className="mt-6 p-4 bg-primary/10 rounded text-center">
        <span className="block text-base font-semibold text-primary mb-2">Ready to Organize Your Customers?</span>
        <span className="text-sm text-muted-foreground">Contact our CRM experts today and discover how Avyukta Customer Label Style can help you segment and serve your customers better.</span>
      </div>
      <div className="w-full flex justify-center mt-6">
        <ScheduleDemoSheet>
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
          >
            Schedule a Demo
          </Button>
        </ScheduleDemoSheet>
      </div>
    </div>
  );
}


export default function CRMPage() {
  const [leadSheetOpen, setLeadSheetOpen] = useState(false);
  const [accountSheetOpen, setAccountSheetOpen] = useState(false);
  const [ticketingSheetOpen, setTicketingSheetOpen] = useState(false);
  const [googleSheetOpen, setGoogleSheetOpen] = useState(false);
  const [labelSheetOpen, setLabelSheetOpen] = useState(false);
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
              <Button
                size="lg"
                variant="default"
                className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition border border-black"
              >
                Schedule a Demo
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
                feature.title === "Lead Management" ? (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px] cursor-pointer`}
                    onClick={() => { setLeadSheetOpen(true); setAccountSheetOpen(false); setTicketingSheetOpen(false); setGoogleSheetOpen(false); setLabelSheetOpen(false); }}
                  >
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
                ) : feature.title === "Account Management" ? (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px] cursor-pointer`}
                    onClick={() => { setAccountSheetOpen(true); setLeadSheetOpen(false); setTicketingSheetOpen(false); setGoogleSheetOpen(false); setLabelSheetOpen(false); }}
                  >
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
                ) : feature.title === "Ticketing System" ? (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px] cursor-pointer`}
                    onClick={() => { setTicketingSheetOpen(true); setLeadSheetOpen(false); setAccountSheetOpen(false); setGoogleSheetOpen(false); setLabelSheetOpen(false); }}
                  >
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
                ) : feature.title === "Google Integration" ? (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px] cursor-pointer`}
                    onClick={() => { setGoogleSheetOpen(true); setLeadSheetOpen(false); setAccountSheetOpen(false); setTicketingSheetOpen(false); setLabelSheetOpen(false); }}
                  >
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
                ) : feature.title === "Customer Label Style" ? (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px] cursor-pointer`}
                    onClick={() => { setLabelSheetOpen(true); setLeadSheetOpen(false); setAccountSheetOpen(false); setTicketingSheetOpen(false); setGoogleSheetOpen(false); }}
                  >
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
                ) : (
                  <Card
                    key={feature.title}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} p-4 m-2 min-h-[180px]`}
                  >
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
                )
              ))}
            </div>
          </div>
          {/* Lead Management Sidebar Sheet */}
          <Sheet open={leadSheetOpen} onOpenChange={setLeadSheetOpen}>
            <SheetContent side="right" className="overflow-y-auto max-h-screen p-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              <LeadManagementCarousel />
            </SheetContent>
          </Sheet>
          {/* Account Management Sidebar Sheet */}
          <Sheet open={accountSheetOpen} onOpenChange={setAccountSheetOpen}>
            <SheetContent side="right" className="overflow-y-auto max-h-screen p-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              <AccountManagementCarousel />
            </SheetContent>
          </Sheet>
          {/* Ticketing System Sidebar Sheet */}
          <Sheet open={ticketingSheetOpen} onOpenChange={setTicketingSheetOpen}>
            <SheetContent side="right" className="overflow-y-auto max-h-screen p-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              <TicketingSystemCarousel />
            </SheetContent>
          </Sheet>
          {/* Google Integration Sidebar Sheet */}
          <Sheet open={googleSheetOpen} onOpenChange={setGoogleSheetOpen}>
            <SheetContent side="right" className="overflow-y-auto max-h-screen p-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              <GoogleIntegrationCarousel />
            </SheetContent>
          </Sheet>
          {/* Customer Label Style Sidebar Sheet */}
          <Sheet open={labelSheetOpen} onOpenChange={setLabelSheetOpen}>
            <SheetContent side="right" className="overflow-y-auto max-h-screen p-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              <CustomerLabelStyleCarousel />
            </SheetContent>
          </Sheet>
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
            <ScheduleDemoSheet>
              <Button size="lg" variant="default" className="bg-white text-black border border-black hover:bg-gray-100 animate-fade-in-up animation-delay-300">
                Contact Our CRM Experts
            </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    