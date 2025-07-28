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
    name: "Bitrix24",
    description: "A leading collaboration and CRM platform, Bitrix24 empowers our clients with advanced tools for communication, project management, and sales automation—all in one secure cloud ecosystem.",
    logo: "/logos/Bitrix24.png",
    aiHint: "Bitrix24 official logo"
  },
  {
    name: "OpenVox",
    description: "OpenVox is a global provider of VoIP gateways and telephony solutions. Our partnership enables seamless, scalable, and reliable voice communications for businesses of all sizes.",
    logo: "/logos/openvox.png",
    aiHint: "OpenVox official logo"
  },
  {
    name: "Yealink",
    description: "Yealink is a world-renowned manufacturer of IP phones and unified communication devices. Together, we deliver high-quality, integrated voice and video solutions for modern enterprises.",
    logo: "/logos/yealink.png",
    aiHint: "Yealink official logo"
  },
];

const industryAffiliations = [
  {
    name: "Sangoma",
    description: "Sangoma is a global leader in unified communications and VoIP solutions, supporting our mission to deliver reliable and innovative connectivity for businesses.",
    logo: "/affilaitlogo/sangomalogo.jpeg",
    aiHint: "Sangoma official logo"
  },
  {
    name: "Dinstar",
    description: "Dinstar provides advanced VoIP gateways and communication hardware, helping us enable seamless integration and scalable telephony for our clients.",
    logo: "/affilaitlogo/dinstar.png",
    aiHint: "Dinstar official logo"
  },
  {
    name: "Vivacom",
    description: "Vivacom is a leading telecommunications provider, recognized for its commitment to quality and innovation in the communications industry.",
    logo: "/affilaitlogo/vivacomlogo.png",
    aiHint: "Vivacom official logo"
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
                <Card key={partner.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 300} rounded-xl`}>
                  <CardHeader className="items-center text-center">
                    <Image src={partner.logo} alt={`${partner.name} Logo`} width={160} height={70} className="mb-4 w-[160px] h-[70px] object-cover rounded-lg mx-auto" data-ai-hint={partner.aiHint} />
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
                <Card key={affiliation.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 300} rounded-xl`}>
                  <CardHeader className="items-center text-center">
                     <Image src={affiliation.logo} alt={`${affiliation.name} Logo`} width={160} height={70} className="mb-4 w-[160px] h-[70px] object-cover rounded-lg mx-auto" data-ai-hint={affiliation.aiHint} />
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
              Interested in Partnering with Avyukta?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              We are always looking for synergistic partnerships to drive innovation and create mutual value. Let's explore how we can collaborate.
            </p>
            <Button asChild size="lg" variant="default" className="bg-white text-black border border-gray-300 hover:bg-gray-200 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=PartnershipInquiry">Connect With Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
