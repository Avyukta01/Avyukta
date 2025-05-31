
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { DownloadCloud, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const brochures = [
  {
    title: "Company Overview Brochure",
    description: "Get a comprehensive overview of Voxaiomni, our mission, services, and success stories.",
    image: "https://placehold.co/600x400.png",
    aiHint: "brochure cover design",
    downloadLink: "/brochure/avyukta_brochur.pdf",
    suggestedFilename: "Voxaiomni_Company_Overview.pdf", // Or use "avyukta_brochur.pdf" if preferred
  },
  {
    title: "AI Solutions Brochure",
    description: "Explore our cutting-edge AI and Machine Learning solutions tailored for various industries.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ai technology brochure",
    downloadLink: "/placeholder/ai-solutions-brochure.pdf", 
    suggestedFilename: "Voxaiomni_AI_Solutions_Brochure.pdf",
  },
  {
    title: "Web Development Services Brochure",
    description: "Discover our web development capabilities, from custom applications to e-commerce platforms.",
    image: "https://placehold.co/600x400.png",
    aiHint: "web design brochure",
    downloadLink: "/placeholder/web-development-brochure.pdf", 
    suggestedFilename: "Voxaiomni_Web_Development_Brochure.pdf",
  },
];

export default function BrochuresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <DownloadCloud className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Download Our Brochures
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Access detailed information about our services, solutions, and company profile.
            </p>
          </div>
        </section>

        {/* Brochures Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brochures.map((brochure, index) => (
                <Card 
                  key={brochure.title} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={brochure.image}
                      alt={brochure.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={brochure.aiHint}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{brochure.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{brochure.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary transition-colors w-full md:w-auto">
                      <a 
                        href={brochure.downloadLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download={brochure.suggestedFilename} // Added download attribute
                      >
                        Download PDF <DownloadCloud className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {brochures.length === 0 && (
              <p className="text-center text-muted-foreground animate-fade-in-up animation-delay-300">
                No brochures available at the moment. Please check back soon!
              </p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Looking for Specific Information?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              If you can't find what you're looking for or need more details, please don't hesitate to contact us.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
