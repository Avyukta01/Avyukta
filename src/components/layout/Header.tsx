
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
  Sun,
  Moon,
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
  Bot, 
  PhoneCall 
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LucideIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet";

interface NavSubLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface NavServiceCategory {
  title: string;
  icon: LucideIcon;
  href: string; 
  subServices: string[];
}

interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
  desktopSubLinks?: NavSubLink[];
  desktopServiceCategories?: NavServiceCategory[]; 
}


const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI" },
  {
    href: "/services",
    label: "Services",
    desktopServiceCategories: [
      {
        title: "Ideation & Design",
        icon: Lightbulb,
        href: "/services/ideation-design",
        subServices: ["UI/UX Design", "Product Roadmap", "Design Thinking Workshops", "User Research & Personas"],
      },
      {
        title: "Mobile App Development",
        icon: Smartphone,
        href: "/services/mobile-apps",
        subServices: ["Android App Development", "iOS App Development", "Cross-Platform App Development", "Progressive Web Apps (PWA)"],
      },
      {
        title: "Web Development",
        icon: Globe,
        href: "/services/web-development",
        subServices: ["Website Development", "Web App Development", "E-Commerce Development", "Frontend Development"],
      },
      {
        title: "Software Development",
        icon: Layers3,
        href: "/services/software-development",
        subServices: ["Custom Software Development", "Enterprise Software Development", "SaaS Product Development", "ERP & CRM Solutions"],
      },
      {
        title: "AI Development",
        icon: BrainCircuit,
        href: "/services/ai-solutions",
        subServices: ["AI Consulting", "AI Agent Development", "AI Chatbot Development", "Adaptive AI Systems"],
      },
      {
        title: "Blockchain Development",
        icon: Blocks,
        href: "/services/blockchain-development",
        subServices: ["ICO Development", "Smart Contract Development", "Wallet Development", "NFT Development"],
      },
      {
        title: "Cloud & DevOps Services",
        icon: CloudCog,
        href: "/services/devops-cicd", 
        subServices: ["Cloud Migration", "Infrastructure as Code (IaC)", "CI/CD Pipelines", "Containerization & Orchestration"],
      },
      {
        title: "Tech Consultancy",
        icon: Users, 
        href: "/company/consulting", 
        subServices: ["Digital Transformation Strategy", "Technology Stack Advisory", "IT Architecture Planning", "Cybersecurity Consulting"],
      },
    ],
  },
  {
    href: "/products", // Main link for products overview (can be created later)
    label: "Products",
    desktopSubLinks: [
      { href: "/products/aichatbotpro", label: "AIChatBotPro", icon: Bot },
      { href: "/products/aivoicecaller", label: "AI Voice Caller", icon: PhoneCall },
      { href: "/products/crm", label: "CRM", icon: Users },
      { href: "/products/dialer-india", label: "DialerIndia", icon: PhoneCall },
    ],
  },
  {
    href: "/company",
    label: "Company",
    desktopSubLinks: [
      { href: "/about", label: "About Us", icon: Building },
      { href: "/company/pricing", label: "Pricing", icon: DollarSign },
      { href: "/company/consulting", label: "Consulting", icon: Award }, 
      { href: "/contact", label: "Contact Us", icon: Mail },
      { href: "/company/careers", label: "Careers", icon: Briefcase },
      { href: "/company/team", label: "Our Team", icon: Users },
      { href: "/company/why-choose-us", label: "Why Choose Us", icon: Sparkles },
      { href: "/company/partners", label: "Partners & Affiliations", icon: Handshake },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    desktopSubLinks: [
      { href: "/blog", label: "Blog", icon: Newspaper },
      { href: "/resources/case-studies", label: "Case Studies", icon: FileText },
      { href: "/resources/whitepapers-reports", label: "Whitepapers & Reports", icon: ScrollText },
      { href: "/resources/news-announcements", label: "News & Announcements", icon: Megaphone },
      { href: "/resources/webinars-events", label: "Webinars & Events", icon: CalendarClock },
      { href: "/resources/brochures", label: "Download Brochures", icon: DownloadCloud },
      { href: "/faq", label: "Help Center / FAQs", icon: HelpCircle },
      { href: "/resources/tutorials", label: "Tutorials & How-tos", icon: BookOpen },
      { href: "/resources/newsletter", label: "Newsletter Signup", icon: Mail },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-max flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) =>
            link.desktopServiceCategories ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-foreground/80 hover:text-primary focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-primary px-1 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="md:w-auto md:min-w-[60rem] lg:min-w-[70rem] xl:min-w-[80rem] p-6" 
                  align="start"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">
                    {link.desktopServiceCategories.map((category) => (
                      <div key={category.title} className="flex flex-col space-y-2">
                        <Link href={category.href} passHref legacyBehavior>
                          <a className="group inline-flex items-center space-x-2">
                            <category.icon className="h-5 w-5 text-accent group-hover:text-accent/80 transition-colors" />
                            <h3 className="text-md font-semibold text-accent group-hover:text-accent/80 transition-colors">{category.title}</h3>
                          </a>
                        </Link>
                        <ul className="space-y-1.5">
                          {category.subServices.map((subService) => (
                            <li key={subService}>
                              <span className="text-sm text-popover-foreground/80 hover:text-popover-foreground cursor-default">
                                {subService}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Link href={category.href} passHref legacyBehavior>
                          <a className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors mt-2">
                            See All <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : link.desktopSubLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-foreground/80 hover:text-primary focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-primary px-1 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className={
                    link.label === "Company" ? "md:w-auto md:min-w-[32rem] p-6" 
                    : link.label === "Products" ? "w-60" // Standard width for Products
                    : "w-60" // Default for Resources, etc.
                  } 
                  align="start"
                >
                  {link.label === "Company" ? (
                     <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {link.desktopSubLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.href} asChild className="p-0">
                          <Link href={subLink.href} className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10 focus:bg-accent/10 transition-colors">
                            {subLink.icon && <subLink.icon className="h-5 w-5 text-accent flex-shrink-0" />}
                            <span className="text-sm text-popover-foreground hover:text-primary">{subLink.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ) : ( // For Products and Resources
                    link.desktopSubLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.href} asChild>
                        <Link href={subLink.href} className="w-full flex items-center">
                          {subLink.icon && <subLink.icon className="mr-2 h-4 w-4 opacity-70 flex-shrink-0" />}
                          {subLink.label}
                        </Link>
                      </DropdownMenuItem>
                    ))
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary focus-visible:text-primary focus-visible:outline-none transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <QuoteFormSheet>
            <AnimatedButton className="bg-accent text-accent-foreground hover:bg-accent/90">
              Talk to Us
            </AnimatedButton>
          </QuoteFormSheet>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                     <React.Fragment key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </React.Fragment>
                  ))}
                </nav>
                <QuoteFormSheet>
                  <AnimatedButton className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Talk to Us
                  </AnimatedButton>
                </QuoteFormSheet>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
