
"use client";

import * as React from "react";
import Link from "next/link";
import { MoreHorizontal, X, ChevronDown } from "lucide-react";
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

const navLinks = [
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
  { href: "/products", label: "Products" },
  {
    href: "/company", // Main link for mobile and fallback, e.g., an overview page
    label: "Company",
    desktopSubLinks: [
      { href: "/company/about", label: "About Us" },
      { href: "/company/pricing", label: "Pricing" },
      { href: "/company/consulting", label: "Consulting" },
      { href: "/contact", label: "Contact Us" }, // Assuming /contact is the main contact page
      { href: "/company/careers", label: "Career" },
      { href: "/company/team", label: "Our Team" },
      { href: "/company/why-choose-us", label: "Why Choose Us" },
      { href: "/company/partners", label: "Partners & Affiliations" },
    ],
  },
  { href: "/resources", label: "Resources" },
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
                      <Link href={subLink.href} className="w-full">
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
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href} // Mobile nav uses the primary href
                        className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
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
