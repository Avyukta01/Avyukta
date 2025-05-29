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
  Handshake 
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

interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon; 
  desktopSubLinks?: NavLink[];
}


const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ai", label: "AI" },
  {
    href: "/services",
    label: "Services",
    desktopSubLinks: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/mobile-apps", label: "Mobile Apps" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    desktopSubLinks: [
      { href: "/products/crm", label: "CRM" },
      { href: "/products/dialer", label: "Dialer" },
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
      { href: "/company/why-choose-us", label: "Why Choose Us", icon: Award }, 
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
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.desktopSubLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-transparent data-[state=open]:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  {link.desktopSubLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href} className="w-full flex items-center">
                        {subLink.icon && <subLink.icon className="mr-2 h-4 w-4 opacity-70 flex-shrink-0" />}
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden md:block">
          <AnimatedButton pulseAnimation className="bg-accent text-accent-foreground hover:bg-accent/90">
            Talk to Us
          </AnimatedButton>
        </div>
        <div className="md:hidden">
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
                <AnimatedButton pulseAnimation className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Talk to Us
                </AnimatedButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
