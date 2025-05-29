
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Lightbulb, Heart, TrendingUp, CheckCircle, Award, Rocket, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const keyDifferentiators = [
  {
    title: "Expert Team",
    icon: Users,
    description: "Our seasoned professionals bring deep industry knowledge and technical expertise to every project, ensuring top-quality delivery.",
  },
  {
    title: "Innovative Solutions",
    icon: Lightbulb,
    description: "We leverage cutting-edge technologies and creative thinking to develop solutions that are not just effective but also future-ready.",
  },
  {
    title: "Client-Centric Approach",
    icon: Heart,
    description: "Your success is our priority. We collaborate closely with you, understanding your unique needs to deliver tailored results.",
  },
  {
    title: "Proven Results",
    icon: TrendingUp,
    description: "We have a track record of delivering measurable outcomes, helping businesses achieve significant growth and efficiency.",
  },
];

const ourCommitmentPoints = [
    { text: "Unwavering Commitment to Quality", icon: Award },
    { text: "Transparent Communication & Processes", icon: MessageSquareQuote },
    { text: "Continuous Learning & Adaptation", icon: Sparkles },
    { text: "Building Long-Term Partnerships", icon: CheckCircle },
];


export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Sparkles className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Why Partner with Innovatech?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Discover the Innovatech difference: Where expertise meets innovation to drive your success.
            </p>
          </div>
        </section>

        {/* Key Differentiators Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Core Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyDifferentiators.map((item, index) => (
                <Card key={item.title} className={`flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader className="items-center">
                    <item.icon className="h-12 w-12 text-accent mb-3" />
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
             <div className="animate-fade-in-left animation-delay-100">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Team collaborating on a project"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="teamwork project planning"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment to You</h2>
              <p className="text-muted-foreground mb-6">
                At Innovatech, we are dedicated to more than just delivering projects. We build lasting partnerships founded on trust, transparency, and a shared vision for success.
              </p>
              <ul className="space-y-4">
                {ourCommitmentPoints.map((point) => (
                  <li key={point.text} className="flex items-start">
                    <point.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Client Success Snippet Section */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
              Real Impact, Real Results
            </h2>
            <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-2xl animate-fade-in-up animation-delay-200">
              <MessageSquareQuote className="h-12 w-12 text-accent mx-auto mb-4" />
              <blockquote className="text-xl italic text-muted-foreground mb-6">
                "Choosing Innovatech was a game-changer for our digital strategy. Their team not only delivered a world-class product but also provided invaluable insights that helped us grow our market share by 25% in just one year."
              </blockquote>
              <p className="font-semibold text-primary">- Sarah L., CEO of NextGen Solutions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Rocket className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss how Innovatech's expertise can help you achieve your strategic objectives and unlock new opportunities.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?source=why-choose-us">Start Your Project With Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
