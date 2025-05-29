
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, TrendingUp, Target, Users, Heart, Sparkles, CheckSquare, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const whyWorkHereItems = [
  {
    title: "Innovative Culture",
    icon: Lightbulb,
    description: "Be part of a forward-thinking environment where your ideas can flourish and contribute to cutting-edge solutions.",
  },
  {
    title: "Growth & Development",
    icon: TrendingUp,
    description: "We invest in our team's growth with continuous learning opportunities, mentorship, and career advancement paths.",
  },
  {
    title: "Impactful Work",
    icon: Target,
    description: "Contribute to projects that make a real difference for our clients and the industries we serve.",
  },
  {
    title: "Collaborative Team",
    icon: Users,
    description: "Join a diverse and supportive team that values collaboration, respect, and shared success.",
  },
];

const coreValues = [
  { name: "Innovation", icon: Sparkles, description: "Pioneering new ideas and technologies." },
  { name: "Excellence", icon: Award, description: "Striving for the highest quality in everything we do." },
  { name: "Collaboration", icon: Users, description: "Working together to achieve common goals." },
  { name: "Integrity", icon: ShieldCheck, description: "Operating with honesty and strong moral principles." },
];


export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Briefcase className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Shape the Future with Innovatech
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Explore exciting career opportunities and grow with a team passionate about innovation and excellence.
            </p>
          </div>
        </section>

        {/* Why Build Your Career Here? Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Why Build Your Career Here?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyWorkHereItems.map((item, index) => (
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

        {/* Our Core Values Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={value.name} className={`flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <value.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-primary mb-1">{value.name}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Life at Innovatech Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left animation-delay-100">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team working collaboratively in a modern office"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="team collaboration office"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-primary mb-6">Life at Innovatech</h2>
              <p className="text-muted-foreground mb-4">
                We foster a vibrant and inclusive workplace where creativity thrives. Our team enjoys a balance of challenging projects, continuous learning, and a supportive community.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><CheckSquare className="h-5 w-5 text-accent mr-2" /> Flexible work arrangements</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 text-accent mr-2" /> Regular team-building events</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 text-accent mr-2" /> Health and wellness programs</li>
                <li className="flex items-center"><CheckSquare className="h-5 w-5 text-accent mr-2" /> Opportunities for professional growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <Search className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              While we may not have specific roles listed at this moment, we are always on the lookout for passionate and talented individuals. If you believe your skills and aspirations align with our vision, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=CareerInquiry&message=I'm interested in career opportunities at Innovatech.">Submit Your Resume</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Heart className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Join a team that's shaping the future of technology. We're excited to learn about your ambitions.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact">Get in Touch with HR</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    