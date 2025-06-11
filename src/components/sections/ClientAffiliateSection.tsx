"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const clientLogos = [
  { src: "/companylogo/voxaiomni_logo.png", alt: "Voxai Omni" },
  { src: "/companylogo/voxaiomni_logonew.png", alt: "Voxai Omni New" },
  { src: "/companylogo/omnilogo.png", alt: "Omni" },
  { src: "/companylogo/VOX.png", alt: "VOX" },
  { src: "/companylogo/voxaiomni_logo.png", alt: "Voxai Omni" }, // Duplicates for scroll effect
  { src: "/companylogo/voxaiomni_logonew.png", alt: "Voxai Omni New" },
];

const affiliateLogos = [
  { src: "/companylogo/omnilogo.png", alt: "Affiliate Omni" },
  { src: "/companylogo/VOX.png", alt: "Affiliate VOX" },
  { src: "/companylogo/voxaiomni_logo.png", alt: "Affiliate Voxai Omni" },
  { src: "/companylogo/voxaiomni_logonew.png", alt: "Affiliate Voxai Omni New" },
  { src: "/companylogo/omnilogo.png", alt: "Affiliate Omni" }, // Duplicates for scroll effect
  { src: "/companylogo/VOX.png", alt: "Affiliate VOX" },
];

export default function ClientAffiliateSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 h-[700px]"> {/* Overall section height */}
          {/* Clients Section */}
          <Card className="flex-1 flex flex-col bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Our Esteemed Clients
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-foreground/5 rounded-lg shadow-sm hover:bg-foreground/10 transition-colors">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Affiliates Section */}
          <Card className="flex-1 flex flex-col bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Our Strategic Affiliates
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                  {affiliateLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-foreground/5 rounded-lg shadow-sm hover:bg-foreground/10 transition-colors">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 