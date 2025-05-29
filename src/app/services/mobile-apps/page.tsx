
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Smartphone, Apple, ShieldAlert, Puzzle, Palette, ShoppingBag, Briefcase, Users2, Wrench, MessageSquare, CheckCircle } from "lucide-react"; // ShieldAlert for Android-like icon
import Link from "next/link";
import Image from "next/image";

const expertiseAreas = [
  {
    title: "Native iOS Development",
    icon: Apple,
    description: "Building high-performance, feature-rich, and intuitive applications for the Apple ecosystem using Swift and the latest iOS SDKs.",
    details: ["iPhone & iPad Apps", "watchOS Apps", "App Store Submission", "Performance Optimization"]
  },
  {
    title: "Native Android Development",
    icon: ShieldAlert, // Using ShieldAlert as a generic representation, as there's no direct Android logo
    description: "Crafting robust, scalable, and user-friendly Android applications using Kotlin and Java, tailored for a diverse range of devices.",
    details: ["Android Phone & Tablet Apps", "Wear OS Apps", "Google Play Store Deployment", "Material Design Implementation"]
  },
  {
    title: "Cross-Platform Development",
    icon: Puzzle,
    description: "Developing versatile applications that run seamlessly on both iOS and Android from a single codebase, using frameworks like React Native and Flutter.",
    details: ["Code Reusability", "Faster Time-to-Market", "Consistent UI/UX", "Reduced Development Costs"]
  },
  {
    title: "Mobile UI/UX Design",
    icon: Palette,
    description: "Designing beautiful, intuitive, and engaging mobile interfaces that provide an exceptional user experience and drive user adoption.",
    details: ["User Research & Personas", "Wireframing & Prototyping", "Interaction Design", "Usability Testing"]
  }
];

const appTypes = [
  { name: "E-commerce & Retail", icon: ShoppingBag, description: "Engaging shopping experiences with secure payments." },
  { name: "Enterprise Mobility", icon: Briefcase, description: "Streamlining business processes for on-the-go teams." },
  { name: "Social Networking", icon: Users2, description: "Connecting users with feature-rich community platforms." },
  { name: "Utility & Productivity", icon: Wrench, description: "Tools that simplify tasks and boost efficiency." },
];

const techStack = ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS Amplify", "REST APIs", "GraphQL", "SQLite", "CoreData"];

const developmentProcess = [
  { step: "01", title: "Discovery & Ideation", description: "Understanding your app's vision, target audience, and core features." },
  { step: "02", title: "UI/UX Design", description: "Creating stunning and intuitive designs focused on user experience." },
  { step: "03", title: "Development", description: "Building your app with clean code, agile practices, and robust architecture." },
  { step: "04", title: "Testing & QA", description: "Ensuring a bug-free, high-performance app through rigorous testing." },
  { step: "05", title: "Deployment & Launch", description: "Managing app store submissions and a smooth launch." },
  { step: "06", title: "Support & Evolution", description: "Providing ongoing maintenance, updates, and feature enhancements." },
];

export default function MobileAppsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Smartphone className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Innovative Mobile App Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Transforming your ideas into powerful and engaging mobile experiences that captivate users.
            </p>
          </div>
        </section>

        {/* Our Mobile App Development Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Mobile App Development Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Focus Areas:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {area.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Apps We Build Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Types of Mobile Apps We Build
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {appTypes.map((appType, index) => (
                <Card key={appType.name} className={`text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <appType.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">{appType.name}</h3>
                  <p className="text-sm text-muted-foreground">{appType.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technologies We Use Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Technologies We Excel In
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {techStack.map((tech) => (
                <span key={tech} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Our App Development Lifecycle Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our App Development Lifecycle
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProcess.map((item, index) => (
                <div key={item.step} className={`p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-accent mr-4">{item.step}</span>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Have an App Idea? Let's Build It Together!
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our team is ready to help you navigate the app development journey from concept to launch and beyond.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=MobileAppInquiry">Discuss Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

