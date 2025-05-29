
"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Send, MailOpen } from "lucide-react"; // Added MailOpen for consistency
import Logo from "@/components/ui/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="text-primary mb-4" />
            <p className="text-sm text-muted-foreground">
              Innovating the future with cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/company/careers" className="hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/resources/whitepapers-reports" className="hover:text-primary transition-colors text-sm">Whitepapers & Reports</Link></li>
              <li><Link href="/resources/news-announcements" className="hover:text-primary transition-colors text-sm">News & Announcements</Link></li>
              <li><Link href="/resources/webinars-events" className="hover:text-primary transition-colors text-sm">Webinars & Events</Link></li>
              <li><Link href="/resources/tutorials" className="hover:text-primary transition-colors text-sm">Tutorials & How-tos</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/resources/newsletter" className="hover:text-primary transition-colors text-sm">Newsletter Signup</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get the latest updates and offers.
            </p>
            <form className="flex space-x-2">
              <div>
                <Input type="email" placeholder="Enter your email" className="bg-background text-foreground" />
              </div>
              <div>
                <Button type="submit" variant="default" size="icon" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
                <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {currentYear ? (
            <p>&copy; {currentYear} Innovatech. All rights reserved.</p>
          ) : (
            <p>&copy; Innovatech. All rights reserved.</p> 
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
