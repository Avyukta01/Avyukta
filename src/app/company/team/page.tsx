
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Linkedin, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years in tech, driving innovation and strategic growth.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "ceo portrait business"
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    bio: "Expert in AI and scalable architectures, leading our cutting-edge development.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "cto portrait tech"
  },
  {
    name: "Aisha Khan",
    role: "VP of Product",
    bio: "Passionate about creating user-centric products that solve real-world problems.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "product manager portrait"
  },
  {
    name: "David Lee",
    role: "Lead Software Engineer",
    bio: "Full-stack maestro dedicated to building robust and efficient software solutions.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "software engineer portrait"
  },
  {
    name: "Sophia Miller",
    role: "Head of Design",
    bio: "Creative force behind our intuitive and beautiful user experiences.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "designer portrait creative"
  },
  {
    name: "Ben Carter",
    role: "Marketing Director",
    bio: "Strategist connecting our innovative solutions with businesses worldwide.",
    image: "https://placehold.co/300x300.png",
    linkedin: "#",
    aiHint: "marketing director portrait"
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Users className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Meet Our Innovators
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              The passionate minds driving Innovatech forward. We are a collective of thinkers, creators, and problem-solvers dedicated to excellence.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Leadership & Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={member.name} 
                  className={`flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}
                >
                  <CardHeader className="items-center pt-8">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-secondary shadow-md mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={member.aiHint}
                      />
                    </div>
                    <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow px-6 pb-6">
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="justify-center pb-8">
                    <Link href={member.linkedin} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn Profile`}>
                        <Button variant="outline" size="icon" className="hover:bg-accent/10">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </Button>
                      </a>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Want to Join Our Talented Team?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              We're always looking for passionate individuals to contribute to our mission. Explore exciting career opportunities and grow with us.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/company/careers">View Open Positions</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
