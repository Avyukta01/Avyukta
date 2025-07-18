"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Send, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background/30 backdrop-blur-lg border-t border-primary/20 text-secondary-foreground section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="text-primary mb-4" />
            <p className="text-sm text-muted-foreground">
              Avyukta: Itf'y your business with revolution IT solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
                <li><Link href="/services/ideation-design" className="hover:text-primary transition-colors text-sm">Ideation & Design</Link></li>
                <li><Link href="/services/mobile-apps" className="hover:text-primary transition-colors text-sm">Mobile App Development</Link></li>
                <li><Link href="/services/web-development" className="hover:text-primary transition-colors text-sm">Web Development</Link></li>
                <li><Link href="/services/software-development" className="hover:text-primary transition-colors text-sm">Software Development</Link></li>
                <li><Link href="/services/ai-solutions" className="hover:text-primary transition-colors text-sm">AI & ML Solutions</Link></li>
                <li><Link href="/services/blockchain-development" className="hover:text-primary transition-colors text-sm">Blockchain Development</Link></li>
                <li><Link href="/services/cloud-solutions" className="hover:text-primary transition-colors text-sm">Cloud Solutions</Link></li>
                <li><Link href="/services/devops-cicd" className="hover:text-primary transition-colors text-sm">DevOps & CI/CD</Link></li>
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
              <li><Link href="/resources/brochures" className="hover:text-primary transition-colors text-sm">Download Brochures</Link></li>
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
                    <Button type="submit" variant="neon" size="icon" aria-label="Subscribe">
                    <Send className="h-4 w-4" />
                    </Button>
                </div>
                </form>
                <div className="mt-6">
                <h4 className="text-md font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/Avyuktaintellicalldialer" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
                    <Link href="https://x.com/i/flow/login?redirect_after_login=%2Favyukta_ecall" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
                    <Link href="https://www.linkedin.com/company/avyukta-intellicall1/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                    <Link href="https://www.youtube.com/channel/UCAsFNU9xLxzQYixHDnronAw/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></Link>
                    <Link href="https://www.instagram.com/avyukta_intellicall/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
                </div>
                </div>
            </div>
        </div>
        
        {/* Full-width white line, edge-to-edge */}
        <div className="border-t border-white w-screen absolute left-0 right-0" style={{margin: 0, padding: 0}} />
        <div className="pt-8 text-center text-sm text-muted-foreground relative z-10">
          {currentYear ? (
            <p>&copy; {currentYear} Avyukta. All rights reserved.</p>
          ) : (
            <p>&copy; Avyukta. All rights reserved.</p> 
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
