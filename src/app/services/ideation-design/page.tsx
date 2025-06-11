"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb, Puzzle, Palette, Users, Search, Edit3, MessageSquare, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const designProcessSteps = [
  {
    title: "Discovery & Research",
    icon: Search,
    description: "We start by deeply understanding your business goals, target audience, and market landscape through comprehensive research and stakeholder interviews.",
  },
  {
    title: "Strategy & Ideation",
    icon: Lightbulb,
    description: "Collaborative workshops and brainstorming sessions to define the core product strategy, value proposition, and innovative feature sets.",
  },
  {
    title: "Wireframing & Prototyping",
    icon: Edit3,
    description: "Creating low-fidelity wireframes and interactive prototypes to map out user flows, information architecture, and core functionalities.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Crafting visually stunning, intuitive, and accessible user interfaces that align with your brand identity and enhance user engagement.",
  },
  {
    title: "User Testing & Iteration",
    icon: Users,
    description: "Conducting usability testing with real users to gather feedback and iteratively refine designs for optimal user experience.",
  },
];

const toolsWeUse = ["Figma", "Adobe XD", "Sketch", "Miro", "UserTesting.com", "Hotjar"];

export default function IdeationDesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Strategic Ideation & User-Centric Design
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Transforming innovative ideas into impactful digital products through meticulous research, creative design, and user-focused strategies.
            </p>
          </div>
        </section>

        {/* Our Design Philosophy Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Design Philosophy</h2>
              <p className="text-muted-foreground mb-4">
                At Avyukta, we believe that great design is born from a deep understanding of user needs and business objectives. Our philosophy centers on empathy, collaboration, and iteration. We strive to create digital experiences that are not only aesthetically pleasing but also intuitive, accessible, and effective in solving real-world problems.
              </p>
              <p className="text-muted-foreground">
                We champion a human-centered approach, ensuring that every design decision is validated by user insights and contributes to a seamless and delightful user journey.
              </p>
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team collaborating on design"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="design team meeting"
              />
            </div>
          </div>
        </section>

        {/* The Design Process Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Ideation & Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcessSteps.map((step, index) => (
                <Card key={step.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <step.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools We Use Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Tools & Technologies We Utilize
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {toolsWeUse.map((tool) => (
                <span key={tool} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Have an Idea? Let's Shape It Together!
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our ideation and design experts are ready to help you refine your vision and create a product that stands out.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=DesignInquiry">Discuss Your Idea</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
