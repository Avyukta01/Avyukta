"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, Info } from "lucide-react";
import Image from "next/image";

export default function GSMGatewayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Phone className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GSM Gateway Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Empower your business communications with reliable, scalable, and cost-effective GSM Gateway integration. Seamlessly connect GSM networks with VoIP, PBX, and enterprise telephony systems.
            </p>
          </div>
        </section>

        {/* What is GSM Gateway? */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="GSM Gateway Device"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="gsm gateway device"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">What is a GSM Gateway?</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                A GSM Gateway is a hardware device or solution that bridges traditional GSM mobile networks with modern VoIP or PBX systems. It enables organizations to make and receive calls or SMS via GSM SIM cards, offering flexibility, redundancy, and significant cost savings—especially for outbound and international communications.
              </p>
              <ul className="list-disc pl-5 text-foreground/90 space-y-2">
                <li>Integrates seamlessly with existing telephony infrastructure</li>
                <li>Supports multi-SIM, multi-channel, and scalable deployments</li>
                <li>Ideal for areas with limited wired connectivity or as a backup solution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose Our GSM Gateway Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Reduce call costs with least cost routing (LCR) and local SIM usage",
                "Enhance connectivity in remote, rural, or mobile environments",
                "Easy integration with VoIP, PBX, and SIP-based systems",
                "Reliable backup for business continuity and disaster recovery",
                "Flexible deployment: on-premises, remote, or hybrid",
                "Comprehensive support for voice, SMS, and data applications"
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Ideal Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Call Centers",
                  desc: "Optimize outbound and inbound call costs, ensure high availability, and support remote agent operations.",
                  img: "https://placehold.co/400x300.png"
                },
                {
                  title: "Enterprises & SMEs",
                  desc: "Integrate GSM connectivity for branch offices, mobile teams, or as a backup for critical communications.",
                  img: "https://placehold.co/400x300.png"
                },
                {
                  title: "Telecom Operators",
                  desc: "Expand network reach, offer value-added services, and enable rural or last-mile connectivity.",
                  img: "https://placehold.co/400x300.png"
                },
                {
                  title: "Emergency & Remote Sites",
                  desc: "Ensure reliable voice and SMS communications in disaster recovery, construction, or remote field operations.",
                  img: "https://placehold.co/400x300.png"
                }
              ].map((useCase, idx) => (
                <Card key={useCase.title} className="flex flex-col overflow-hidden shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src={useCase.img}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Modernize Your Communications?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss how our GSM Gateway solutions can empower your business with reliable, scalable, and cost-effective connectivity.
            </p>
            <a href="/contact?subject=GSMGateway_Inquiry&product=GSMGateway">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all">
                Get a Free Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 