"use client";

import * as React from "react";
import Link from "next/link";
import {
  MoreHorizontal,
  X,
  ChevronDown,
  Newspaper,
  FileText,
  ScrollText,
  Megaphone,
  CalendarClock,
  HelpCircle,
  BookOpen,
  Mail,
  Briefcase,
  Users,
  Award,
  DollarSign,
  Building,
  Handshake,
  Globe,
  Smartphone,
  BrainCircuit,
  Code2,
  Blocks,
  CloudCog,
  GitMerge,
  Lightbulb,
  Layers3,
  ArrowRight,
  Sparkles,
  DownloadCloud,
  PhoneCall,
  MessageCircle,
  MessageSquare,
  Phone,
  GraduationCap
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LucideIcon } from "lucide-react";
import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import { cn } from "@/lib/utils";

interface NavSubLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface NavServiceCategory {
  title: string;
  icon: LucideIcon;
  href: string;
  subServices?: { label: string; href: string }[];
  description?: string;
}

interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
  desktopSubLinks?: NavSubLink[];
  desktopServiceCategories?: NavServiceCategory[];
  description?: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI" },
  {
    href: "/services",
    label: "Services",
    desktopServiceCategories: [
      {
        title: "Web Development",
        icon: Globe,
        href: "/services/web-development",
        subServices: [
          { label: "Website Development", href: "/services/web-development/website-development" },
          { label: "Web App Development", href: "/services/web-development/web-app-development" },
          { label: "E-Commerce Development", href: "/services/web-development/e-commerce-development" },
          { label: "Frontend Development", href: "/services/web-development/frontend-development" },
        ],
      },
      {
        title: "Mobile Apps",
        icon: Smartphone,
        href: "/services/mobile-apps",
        subServices: [
          { label: "Android App Development", href: "/services/mobile-apps/android-app-development" },
          { label: "iOS App Development", href: "/services/mobile-apps/ios-app-development" },
          { label: "Cross-Platform App Development", href: "/services/mobile-apps/cross-platform-app-development" },
          { label: "Progressive Web Apps (PWA)", href: "/services/mobile-apps/pwa-development" },
        ],
      },
      {
        title: "Software Development",
        icon: Layers3,
        href: "/services/software-development",
        subServices: [
          { label: "Custom Software Development", href: "/services/software-development/custom-software-development" },
          { label: "Enterprise Software Development", href: "/services/software-development/enterprise-software-development" },
          { label: "SaaS Product Development", href: "/services/software-development/saas-product-development" },
          { label: "ERP & CRM Solutions", href: "/services/software-development/erp-crm-solutions" },
        ],
      },
      {
        title: "AI Solutions",
        icon: BrainCircuit,
        href: "/services/ai-solutions",
        subServices: [
          { label: "AI Consulting", href: "/services/ai-solutions/ai-consulting" },
          { label: "AI Agent Development", href: "/services/ai-solutions/ai-agent-development" },
          { label: "AI Chatbot Development", href: "/services/ai-solutions/ai-chatbot-development" },
          { label: "Adaptive AI Systems", href: "/services/ai-solutions/adaptive-ai-systems" },
        ],
      },
      {
        title: "Cloud Solutions",
        icon: CloudCog,
        href: "/services/cloud-solutions",
        subServices: [
          { label: "Cloud Migration", href: "/services/cloud-solutions/cloud-migration" },
          { label: "Infrastructure as Code (IaC)", href: "/services/cloud-solutions/iac" },
          { label: "CI/CD Pipelines", href: "/services/cloud-solutions/cicd-pipelines" },
          { label: "Containerization & Orchestration", href: "/services/cloud-solutions/containerization-orchestration" },
        ]
      },
      {
        title: "DevOps & CI/CD",
        icon: GitMerge,
        href: "/services/devops-cicd",
        subServices: [
          { label: "CI/CD Pipeline Setup", href: "/services/devops-cicd/cicd-pipeline-setup" },
          { label: "Containerization (Docker, Kubernetes)", href: "/services/devops-cicd/containerization" },
          { label: "Infrastructure Automation", href: "/services/devops-cicd/infrastructure-automation" },
          { label: "Monitoring & Logging", href: "/services/devops-cicd/monitoring-logging" },
        ],
      },
      {
        title: "Blockchain Development",
        icon: Blocks,
        href: "/services/blockchain-development",
        subServices: [
          { label: "ICO Development", href: "/services/blockchain-development/ico-development" },
          { label: "Smart Contract Development", href: "/services/blockchain-development/smart-contract-development" },
          { label: "Wallet Development", href: "/services/blockchain-development/wallet-development" },
          { label: "NFT Development", href: "/services/blockchain-development/nft-development" },
        ],
      },
      {
        title: "GSM Gateway",
        icon: Phone,
        href: "/services/gsm-gateway",
        description: "Seamless GSM-to-VoIP integration for enterprises, call centers, and telecom operators."
      },
      {
        title: "IT Consulting",
        icon: Lightbulb,
        href: "/services/it-consulting",
        subServices: [
          { label: "Digital Transformation Strategy", href: "/services/it-consulting/digital-transformation" },
          { label: "Technology Stack Advisory", href: "/services/it-consulting/tech-stack-advisory" },
          { label: "IT Architecture Planning", href: "/services/it-consulting/it-architecture-planning" },
          { label: "Cybersecurity Consulting", href: "/services/it-consulting/cybersecurity-consulting" },
        ],
      },
    ],
  },
  {
    href: "/products",
    label: "Products",
    desktopServiceCategories: [
      { title: "CRM Master", icon: Users, href: "/products/crm", description: "A comprehensive CRM solution for lead, sales, and task management." },
      { title: "DialerIndia", icon: PhoneCall, href: "/products/dialer-india", description: "Advanced dialing solutions with call recording and analytics." },
      { icon: MessageCircle, href: "/products/aichatbotpro", title: "WhatsApp AI Chatbot", description: "Automate customer interactions with our intelligent AI chatbot." },
      { icon: PhoneCall, href: "/products/aivoicecaller", title: "AI Voice Caller", description: "Transform voice communications with our AI Voice Caller." },
      // Add My School App
      { icon: GraduationCap, href: "/products/my-school-app", title: "My School App", description: "A complete digital platform for schools, students, and parents." },
      { icon: Globe, href: "/products/olx-replica", title: "OLX Replica", description: "A robust classified ads marketplace platform inspired by OLX." },
    ],
  },
  {
    href: "/company",
    label: "Company",
    desktopServiceCategories: [
      { title: "About Us", icon: Building, href: "/about", description: "Learn about our journey, mission, and values." },
      { title: "Pricing", icon: DollarSign, href: "/company/pricing", description: "Explore flexible plans and transparent costs." },
      { title: "Consulting", icon: Award, href: "/company/consulting", description: "Get expert advice and strategic guidance." },
      { title: "Contact Us", icon: Mail, href: "/contact", description: "Reach out for inquiries or support." },
      { title: "Careers", icon: Briefcase, href: "/company/careers", description: "Discover opportunities to join our team." },
      { title: "Our Team", icon: Users, href: "/company/team", description: "Meet the dedicated professionals behind Avyukta." },
      { title: "Why Choose Us", icon: Sparkles, href: "/company/why-choose-us", description: "Understand our differentiators and client success." },
      { title: "Partners & Affiliations", icon: Handshake, href: "/company/partners", description: "Explore our strategic alliances and partners." },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    desktopServiceCategories: [
      { title: "Blog", icon: Newspaper, href: "/blog", description: "Read our latest articles and industry insights." },
      { title: "Case Studies", icon: FileText, href: "/resources/case-studies", description: "View real-world success stories and project impacts." },
      { title: "Whitepapers & Reports", icon: ScrollText, href: "/resources/whitepapers-reports", description: "Access in-depth research and expert analysis." },
      { title: "News & Announcements", icon: Megaphone, href: "/resources/news-announcements", description: "Stay updated with company news and press releases." },
      { title: "Webinars & Events", icon: CalendarClock, href: "/resources/webinars-events", description: "Join our online sessions and discover upcoming events." },
      { title: "Download Brochures", icon: DownloadCloud, href: "/resources/brochures", description: "Download service details and company profiles." },
      { title: "Help Center / FAQs", icon: HelpCircle, href: "/faq", description: "Find answers to common questions and support articles." },
      { title: "Tutorials & How-tos", icon: BookOpen, href: "/resources/tutorials", description: "Explore step-by-step guides and product tips." },
      { title: "Newsletter Signup", icon: Mail, href: "/resources/newsletter", description: "Subscribe for exclusive content and updates." },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = React.useState<NavServiceCategory | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container-max flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <React.Fragment key={link.href}>
              {link.desktopServiceCategories && link.desktopServiceCategories.length > 0 ? (
                <DropdownMenu onOpenChange={(open) => {
                  if (!open) {
                    setActiveServiceCategory(null);
                  }
                }}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-1">
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-full md:w-[700px] p-4 bg-card/70 backdrop-blur-md rounded-lg shadow-xl border border-primary/20 flex flex-col md:flex-row"
                    onMouseLeave={() => setActiveServiceCategory(null)}
                  >
                    {/* Left Pane: Main Service Categories */}
                    <div className="flex flex-col w-full md:w-1/2 pr-4 overflow-y-auto max-h-[300px] border-r border-border/50">
                      {link.desktopServiceCategories.map((category) => (
                        <React.Fragment key={category.title}>
                          <Link
                            href={category.href}
                            className={cn(
                              "flex items-center space-x-3 p-3 rounded-lg transition-all duration-200",
                              "hover:bg-primary/20 hover:backdrop-blur-md group",
                              activeServiceCategory?.title === category.title
                                ? "bg-primary/20 backdrop-blur-md text-primary"
                                : "text-foreground/80"
                            )}
                            onMouseEnter={() => setActiveServiceCategory(category)}
                          >
                            <category.icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
                            <span className="font-medium text-lg">{category.title}</span>
                          </Link>
                          {isMobileMenuOpen && category.subServices && (
                            <ul className="ml-6 mt-2 space-y-1">
                              {category.subServices.map((subService) => (
                                <li key={subService.href}>
                                  <Link
                                    href={subService.href}
                                    className="block p-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                  >
                                    {subService.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    {/* Right Pane: Sub-services (only for desktop and when a category is active) */}
                    {activeServiceCategory && activeServiceCategory.subServices && ( // Render only if sub-services exist
                      <div className="hidden md:flex flex-col w-full md:w-1/2 pl-4 overflow-y-auto max-h-[300px]">
                        <h3 className="text-xl font-semibold text-primary mb-4 border-b border-border/50 pb-2">
                          {activeServiceCategory.title}
                        </h3>
                        <ScrollArea className="h-full pr-4">
                          <div className="grid grid-cols-1 gap-2">
                            {activeServiceCategory.subServices.map((subService) => (
                              <Link
                                key={subService.href}
                                href={subService.href}
                                className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group relative overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {subService.icon && <subService.icon className="h-5 w-5 text-accent mr-2 flex-shrink-0 group-hover:text-primary transition-colors relative z-10" />}
                                <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors relative z-10">{subService.label}</span>
                                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 relative z-10" />
                              </Link>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    )}
                    {activeServiceCategory && activeServiceCategory.description && !activeServiceCategory.subServices && (
                        <div className="hidden md:flex flex-col w-full md:w-1/2 pl-4 overflow-y-auto max-h-[300px] justify-center items-center text-center">
                            <activeServiceCategory.icon className="h-12 w-12 text-accent mb-4" />
                            <p className="text-muted-foreground max-w-sm">{activeServiceCategory.description}</p>
                            <Button asChild variant="link" className="mt-4 text-accent hover:underline">
                                <Link href={activeServiceCategory.href}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="hidden md:flex items-center ml-auto">
            <QuoteFormSheet>
              <Button className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 flex items-center">
                <Phone className="h-4 w-4 mr-2" /> Talk to Us
              </Button>
            </QuoteFormSheet>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <MoreHorizontal className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left">
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
                <Logo />
              </SheetHeader>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.desktopServiceCategories ? (
                        <>
                          <Button variant="ghost" className="w-full justify-start text-lg px-0 py-2">
                            {link.label}
                          </Button>
                          <div className="ml-4 flex flex-col space-y-2">
                            {link.desktopServiceCategories.map((category) => (
                              <div key={category.href}>
                                <Link href={category.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-base font-medium text-foreground hover:text-primary transition-colors">
                                  {category.title}
                                </Link>
                                {category.subServices && category.subServices.length > 0 && (
                                  <div className="ml-4 flex flex-col space-y-1">
                                    {category.subServices.map((subService) => (
                                      <Link key={subService.href} href={subService.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {subService.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-4">
                    <QuoteFormSheet>
                      <Button variant="outline" className="w-full">
                        Schedule a Demo
                      </Button>
                    </QuoteFormSheet>
                    <QuoteFormSheet>
                      <Button className="w-full flex items-center justify-center p-2 rounded-md hover:bg-muted transition-colors">
                        <Phone className="h-5 w-5 mr-2" /> Talk to Us
                      </Button>
                    </QuoteFormSheet>
                  </div>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
