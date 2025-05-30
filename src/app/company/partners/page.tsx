
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Share2, Handshake, Award, Users, Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const technologyPartners = [
  {
    name: "TechNova Solutions",
    description: "Collaborating on next-generation AI-driven analytics platforms to provide deeper business insights.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "tech company logo"
  },
  {
    name: "CloudPioneers Inc.",
    description: "Strategic alliance for robust and scalable cloud infrastructure, ensuring high availability and performance.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "cloud services logo"
  },
  {
    name: "CyberSecure Ltd.",
    description: "Partnering to integrate advanced cybersecurity measures into our software solutions, protecting client data.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "cybersecurity logo"
  },
];

const industryAffiliations = [
  {
    name: "Global Tech Innovators Alliance",
    description: "Member of a leading alliance fostering collaboration and setting industry standards in technology.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "alliance logo"
  },
  {
    name: "AI Ethics & Governance Council",
    description: "Committed to responsible AI development through our participation in this vital council.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "ethics council logo"
  },
  {
    name: "Sustainable Tech Initiative",
    description: "Proud affiliate promoting environmentally conscious technology solutions and practices.",
    logo: "https://placehold.co/150x70.png",
    aiHint: "sustainability logo"
  },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Share2 className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Our Valued Partners & Affiliations
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Building a stronger future together through strategic collaborations and industry engagement.
            </p>
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
                <Briefcase className="h-10 w-10 text-primary mx-auto mb-3 animate-fade-in-up"/>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-100">
                    Our Technology Partners
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up animation-delay-200">
                    We collaborate with leading technology providers to deliver innovative and robust solutions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyPartners.map((partner, index) => (
                <Card key={partner.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 300}`}>
                  <CardHeader className="items-center text-center">
                    <Image src={partner.logo} alt={`${partner.name} Logo`} width={120} height={60} className="mb-4 h-14 object-contain" data-ai-hint={partner.aiHint} />
                    <CardTitle className="text-xl text-primary">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Affiliations Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <div className="text-center mb-12">
                <Award className="h-10 w-10 text-primary mx-auto mb-3 animate-fade-in-up"/>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-100">
                    Industry Affiliations & Memberships
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up animation-delay-200">
                    Our commitment to excellence and industry best practices is reflected in our affiliations.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryAffiliations.map((affiliation, index) => (
                <Card key={affiliation.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 300}`}>
                  <CardHeader className="items-center text-center">
                     <Image src={affiliation.logo} alt={`${affiliation.name} Logo`} width={120} height={60} className="mb-4 h-14 object-contain" data-ai-hint={affiliation.aiHint} />
                    <CardTitle className="text-xl text-primary">{affiliation.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{affiliation.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Handshake className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Interested in Partnering with Voxaiomni?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              We are always looking for synergistic partnerships to drive innovation and create mutual value. Let's explore how we can collaborate.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=PartnershipInquiry">Connect With Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
