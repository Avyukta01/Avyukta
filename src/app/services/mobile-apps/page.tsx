"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Smartphone, Apple, Bot, Code2, Rocket, Users, Target, Shield, CheckCircle, ArrowRight, Lightbulb, TrendingUp, Zap, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const services = [
  {
    title: "Android App Development",
    icon: Bot,
    description: "Crafting high-performance and feature-rich Android applications tailored to your business needs, ensuring seamless user experiences across devices.",
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/mobile-apps/android-app-development",
    keyFeatures: [
      "Custom Android App Development",
      "Android UI/UX Design",
      "App Migration & Upgrades",
      "Android Wearables & IoT Apps",
    ]
  },
  {
    title: "iOS App Development",
    icon: Apple,
    description: "Building intuitive and elegant iOS applications that stand out on the Apple App Store, focusing on performance, security, and user engagement.",
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/mobile-apps/ios-app-development",
    keyFeatures: [
      "Native iOS App Development (Swift/Objective-C)",
      "iPad App Development",
      "iOS UI/UX Design",
      "App Store Optimization (ASO)",
    ]
  },
  {
    title: "Cross-Platform App Development",
    icon: Code2,
    description: "Developing versatile applications that run seamlessly on both iOS and Android platforms, saving time and resources without compromising on quality.",
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/mobile-apps/cross-platform-app-development",
    keyFeatures: [
      "React Native Development",
      "Flutter Development",
      "Xamarin Development",
      "Code Reusability & Efficiency",
    ]
  },
  {
    title: "Progressive Web Apps (PWAs)",
    icon: Rocket,
    description: "Delivering web applications that offer a native app-like experience with offline capabilities, push notifications, and fast loading times.",
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/mobile-apps/pwa-development",
    keyFeatures: [
      "Offline Functionality",
      "Push Notifications",
      "Home Screen Installability",
      "Responsive Design",
    ]
  },
];

const benefits = [
  "Reach a wider audience across various devices.",
  "Enhance user engagement with intuitive and high-performing apps.",
  "Boost brand loyalty and customer satisfaction.",
  "Streamline business operations with custom mobile solutions.",
  "Gain a competitive edge with innovative mobile technology.",
  "Ensure robust security and data protection."
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Our developers are masters of their craft, staying updated with the latest mobile technologies and trends.",
    icon: Users,
  },
  {
    title: "User-Centric Design",
    description: "We prioritize intuitive UI/UX to ensure your app is not just functional, but also a joy to use.",
    icon: Target,
  },
  {
    title: "Robust Security",
    description: "Implementing industry-leading security protocols to protect your app and user data.",
    icon: Shield,
  },
  {
    title: "Timely Delivery",
    description: "Committed to delivering projects on schedule without compromising on quality.",
    icon: CalendarClock,
  },
  {
    title: "Post-Launch Support",
    description: "Providing ongoing maintenance, updates, and support to ensure your app remains in peak condition.",
    icon: CheckCircle,
  },
  {
    title: "Scalable Solutions",
    description: "Building apps that can grow with your business, adapting to future demands and expanding user bases.",
    icon: TrendingUp,
  },
];

export default function MobileAppsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Smartphone className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Mobile App Development: Bring Your Ideas to Life
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Transforming innovative concepts into powerful, engaging mobile applications that captivate users and drive business growth on any platform.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Request a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Service Offerings Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Mobile App Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    {service.icon && <service.icon className="absolute top-4 left-4 h-10 w-10 text-accent bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-md" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mb-4">{service.description}</CardDescription>
                    <h3 className="text-lg font-semibold text-primary mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {service.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-accent">
                      <Link href={service.learnMoreLink}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-title-glow-primary">
              Benefits of Partnering with Avyukta for Mobile Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90 text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Why Choose Avyukta for Your Mobile App?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={item.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <item.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
            </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-title-glow-primary">
              Ready to Build Your Next Mobile Masterpiece?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's turn your vision into a high-performing mobile application. Contact us for a detailed proposal.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get Your Free Quote
            </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

