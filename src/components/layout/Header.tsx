
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
  subServices: string[]; // Can be key features, descriptions, or related sub-items
}

interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
  desktopSubLinks?: NavSubLink[]; // Will be phased out for Company & Resources if using multi-column
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
    href: "/products",
    label: "Products",
    desktopServiceCategories: [
      {
        title: "AIChatBotPro",
        icon: Bot,
        href: "/products/aichatbotpro",
        subServices: [
          "Natural Language Understanding",
          "Multi-Platform Integration",
          "24/7 Customer Support",
          "Lead Generation Tools",
        ],
      },
      {
        title: "AI Voice Caller",
        icon: PhoneCall,
        href: "/products/aivoicecaller",
        subServices: [
          "Intelligent Outbound Campaigns",
          "Conversational IVR",
          "Real-time Voice Analytics",
          "CRM Integration",
        ],
      },
      {
        title: "CRM",
        icon: Users,
        href: "/products/crm",
        subServices: [
          "Contact & Lead Management",
          "Sales Pipeline Tracking",
          "Task & Deal Automation",
          "Reporting & Analytics",
        ],
      },
      {
        title: "DialerIndia",
        icon: PhoneCall,
        href: "/products/dialer-india",
        subServices: [
          "Automated & Predictive Dialing",
          "Call Recording & Monitoring",
          "Real-time Call Analytics",
          "Lead Management System",
        ],
      },
    ],
  },
  {
    href: "/company",
    label: "Company",
    desktopServiceCategories: [
      { title: "About Us", icon: Building, href: "/about", subServices: ["Our mission & vision", "Company journey", "Core values"] },
      { title: "Pricing", icon: DollarSign, href: "/company/pricing", subServices: ["Flexible plans", "Transparent costs", "Custom quotes"] },
      { title: "Consulting", icon: Award, href: "/company/consulting", subServices: ["Expert advice", "Strategic guidance", "Industry insights"] },
      { title: "Contact Us", icon: Mail, href: "/contact", subServices: ["Get in touch", "Support channels", "Office locations"] },
      { title: "Careers", icon: Briefcase, href: "/company/careers", subServices: ["Join our team", "Open positions", "Company culture"] },
      { title: "Our Team", icon: Users, href: "/company/team", subServices: ["Meet the experts", "Leadership profiles", "Our innovators"] },
      { title: "Why Choose Us", icon: Sparkles, href: "/company/why-choose-us", subServices: ["Our differentiators", "Client success stories", "Commitment to quality"] },
      { title: "Partners & Affiliations", icon: Handshake, href: "/company/partners", subServices: ["Strategic alliances", "Technology partners", "Industry memberships"] },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    desktopServiceCategories: [
      { title: "Blog", icon: Newspaper, href: "/blog", subServices: ["Latest articles", "Industry insights", "Tech trends"] },
      { title: "Case Studies", icon: FileText, href: "/resources/case-studies", subServices: ["Success stories", "Real-world impact", "Client projects"] },
      { title: "Whitepapers & Reports", icon: ScrollText, href: "/resources/whitepapers-reports", subServices: ["In-depth research", "Expert analysis", "Market reports"] },
      { title: "News & Announcements", icon: Megaphone, href: "/resources/news-announcements", subServices: ["Company updates", "Press releases", "Product launches"] },
      { title: "Webinars & Events", icon: CalendarClock, href: "/resources/webinars-events", subServices: ["Online sessions", "Upcoming conferences", "Event recordings"] },
      { title: "Download Brochures", icon: DownloadCloud, href: "/resources/brochures", subServices: ["Service details", "Company profiles", "Product sheets"] },
      { title: "Help Center / FAQs", icon: HelpCircle, href: "/faq", subServices: ["Common questions", "Support articles", "Troubleshooting"] },
      { title: "Tutorials & How-tos", icon: BookOpen, href: "/resources/tutorials", subServices: ["Step-by-step guides", "Product tips", "Developer resources"] },
      { title: "Newsletter Signup", icon: Mail, href: "/resources/newsletter", subServices: ["Stay informed", "Exclusive content", "Updates"] },
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
            (link.desktopServiceCategories) ? ( // Unified check for multi-column dropdowns
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
                    link.label === "Services"
                      ? "md:w-auto md:min-w-[60rem] lg:min-w-[70rem] xl:min-w-[80rem] p-6" // Services (up to 4 cols)
                      : link.label === "Products"
                        ? "md:w-auto md:min-w-[45rem] p-6" // Products (2 cols)
                        : link.label === "Company"
                          ? "md:w-auto md:min-w-[40rem] p-6" // Company (2 cols)
                          : link.label === "Resources"
                            ? "md:w-auto md:min-w-[60rem] p-6" // Resources (3 cols)
                            : "w-60" // Fallback (should not be hit if logic is correct)
                  }
                  align="start"
                >
                  {link.desktopServiceCategories && (
                    <div className={`grid grid-cols-1 ${
                      link.label === 'Services' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                      : link.label === 'Products' ? 'md:grid-cols-2'
                      : link.label === 'Company' ? 'md:grid-cols-2'
                      : link.label === 'Resources' ? 'md:grid-cols-3'
                      : 'md:grid-cols-1' // Fallback
                    } gap-x-8 gap-y-6`}>
                      {link.desktopServiceCategories.map((category) => (
                        <div key={category.title} className="flex flex-col space-y-2">
                          <Link href={category.href} passHref legacyBehavior>
                            <a className="group inline-flex items-center space-x-2">
                              <category.icon className="h-5 w-5 text-accent group-hover:text-accent/80 transition-colors" />
                              <h3 className="text-md font-semibold text-accent group-hover:text-accent/80 transition-colors">{category.title}</h3>
                            </a>
                          </Link>
                          {category.subServices && category.subServices.length > 0 && (
                            <ul className="space-y-1.5">
                              {category.subServices.slice(0, 3).map((subService) => ( // Show up to 3 key points
                                <li key={subService}>
                                  <span className="text-sm text-popover-foreground/80 hover:text-popover-foreground cursor-default">
                                    {subService}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <Link href={category.href} passHref legacyBehavior>
                            <a className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors mt-2">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                   {/* Fallback for old desktopSubLinks structure if any NavLink still uses it (should be removed for Company/Resources) */}
                  {link.desktopSubLinks && !link.desktopServiceCategories && (
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

    