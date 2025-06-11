"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function ProductHighlightsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Our Products
          </h1>
          <h2 className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our innovative solutions designed to transform your business operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* CRM Card */}
          <Card className="group relative overflow-hidden bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="p-1 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    CRM Master
                  </h2>
                  <h3 className="text-xl md:text-2xl mt-2 text-muted-foreground font-normal">
                    CRM Solutions
                  </h3>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Streamline your customer relationships and boost sales with our comprehensive CRM solution.
              </p>
              <div className="flex justify-start">
                <Link href="/products/crm">
                  <Button 
                    variant="outline" 
                    className="group/btn relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-md"
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Dialer Card */}
          <Card className="group relative overflow-hidden bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="p-1 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <PhoneCall className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    DialerIndia
                  </h2>
                  <h3 className="text-lg mt-1 text-muted-foreground">
                    Advanced Call Center Solution
                  </h3>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground text-lg mb-8">
                Enhance your communication efficiency with our advanced dialer system.
              </p>
              <div className="flex justify-start">
                <Link href="/products/dialer-india">
                  <Button 
                    variant="outline" 
                    className="group/btn relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-md"
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 