"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function ProductHighlightsSection({ className }: { className?: string }) {
  return (
    <section className={`bg-gradient-to-b from-background to-background/80 ${className || ''}`}>
      <div className="container max-w-6xl mx-auto px-4">
           <h2 className="jsx-7e3ffb6c76ff136f text-3xl md:text-4xl font-bold text-white text-center" >
            Discover our innovative solutions designed to transform your business operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto pt-6
">
          {/* CRM Card */}
          <Card className="group relative overflow-hidden bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="p-1 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                
                  <h3 className="text-xl md:text-2xl mt-2 text-muted-foreground font-normal">
                    Avyukta CRM Solutions
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
                <h3 className="text-xl md:text-2xl mt-2 text-muted-foreground font-normal">
                    DialerIndia
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
      
    </section>
  );
} 