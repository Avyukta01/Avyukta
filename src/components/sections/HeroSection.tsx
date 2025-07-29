"use client";

import { QuoteFormSheet } from "@/components/forms/QuoteFormSheet";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowRight, Phone, Briefcase, Package, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import Typewriter from 'typewriter-effect';
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const styles = {
  section: {
    paddingBottom: '0px !important',
  }
}

// Custom styles for scrollbar hiding
const scrollbarStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Communication services data
const communicationServices = [
  {
    title: "SMS",
    icon: "📱",
    description: "Bulk SMS Services",
    link: "/products/sms",
    details: [
      "Transactional SMS - Instantly deliver OTPs, alerts, and notifications.",
      "Promotional SMS - Promote your offers, deals, and campaigns to your target audience.",
      "WhatsApp Business Messaging - Verified WhatsApp API for richer conversations.",
      "Bulk SMS Gateway - Send thousands of messages in one click with high delivery rates.",
      "DND & Non-DND Delivery - Smart filtering for compliance and maximum reach."
    ]
  },
  {
    title: "Voice",
    icon: "📞",
    description: "Voice Calling Solutions",
    link: "/products/voice",
    details: [
      "AI Voice Caller - Intelligent outbound dialing with conversation analytics.",
      "Interactive Voice Response (IVR) - Automated call routing and self-service options.",
      "Voice Broadcasting - Send voice messages to thousands simultaneously.",
      "Call Recording & Analytics - Monitor call quality and performance metrics.",
      "CRM Integration - Seamless integration with customer databases."
    ]
  },
  {
    title: "WhatsApp",
    icon: "💬",
    description: "WhatsApp Business API",
    link: "/products/aichatbotpro",
    details: [
      "WhatsApp Business API - Official API for business messaging.",
      "Template Messages - Pre-approved message templates for marketing.",
      "Media Sharing - Send images, documents, and videos.",
      "Chatbot Integration - AI-powered automated responses.",
      "Message Analytics - Track delivery, read receipts, and engagement."
    ]
  },
  {
    title: "International SMS",
    icon: "🌍",
    description: "Global SMS Services",
    link: "/products/international-sms",
    details: [
      "Global Coverage - Send SMS to 200+ countries worldwide.",
      "Local Number Support - Use local numbers for better delivery rates.",
      "Multi-Language Support - Send messages in various languages.",
      "Delivery Reports - Real-time delivery status tracking.",
      "Compliance Management - Adhere to international SMS regulations."
    ]
  },
  {
    title: "ILDO SMS",
    icon: "📨",
    description: "International Long Distance",
    link: "/products/ildo-sms",
    details: [
      "Long Distance SMS - Cost-effective international messaging.",
      "Bulk International Sending - Send to multiple countries simultaneously.",
      "Route Optimization - Choose the best routes for delivery.",
      "Delivery Time Optimization - Schedule messages for optimal delivery.",
      "Cost Management - Transparent pricing and volume discounts."
    ]
  },
  {
    title: "Training Bot",
    icon: "🤖",
    description: "AI Training Solutions",
    link: "/products/training-bot",
    details: [
      "Custom Training Bots - Tailored AI solutions for your business.",
      "Interactive Learning - Engaging training experiences.",
      "Progress Tracking - Monitor training completion and performance.",
      "Multi-Platform Support - Works across web, mobile, and messaging.",
      "Analytics Dashboard - Detailed insights into training effectiveness."
    ]
  },
  {
    title: "AI Caller",
    icon: "🎯",
    description: "Intelligent Calling System",
    link: "/products/aivoicecaller",
    details: [
      "Intelligent Dialing - AI-powered call scheduling and routing.",
      "Conversation Analytics - Real-time sentiment and intent analysis.",
      "Automated Follow-ups - Smart reminder and follow-up systems.",
      "Voice Recognition - Natural language processing for call handling.",
      "Performance Optimization - Continuous learning and improvement."
    ]
  },
  {
    title: "School App",
    icon: "🏫",
    description: "Educational Platform",
    link: "/products/my-school-app",
    details: [
      "Student Management - Complete student information and records.",
      "Attendance Tracking - Automated attendance monitoring.",
      "Communication Hub - Direct messaging between teachers and parents.",
      "Assignment Management - Digital assignment submission and grading.",
      "Performance Analytics - Student progress tracking and reporting."
    ]
  },
  {
    title: "MyGate",
    icon: "🏠",
    description: "Society Management",
    link: "/products/mygate",
    details: [
      "Visitor Management - Digital visitor entry and exit tracking.",
      "Security Integration - Connect with CCTV and security systems.",
      "Resident Directory - Complete society resident database.",
      "Maintenance Requests - Digital complaint and request system.",
      "Payment Integration - Society maintenance fee collection."
    ]
  },
  {
    title: "ChatBot",
    icon: "💭",
    description: "Conversational AI",
    link: "/products/aichatbotpro",
    details: [
      "Natural Language Processing - Understand and respond to user queries.",
      "Multi-Platform Support - Works on website, mobile apps, and messaging.",
      "Custom Training - Train on your specific business data.",
      "Integration APIs - Connect with CRM, databases, and other systems.",
      "Analytics Dashboard - Monitor conversations and user satisfaction."
    ]
  },
  {
    title: "CRM",
    icon: "📊",
    description: "Customer Relationship",
    link: "/products/crm",
    details: [
      "Lead Management - Track and manage potential customers.",
      "Sales Pipeline - Visualize and optimize your sales process.",
      "Customer Database - Centralized customer information storage.",
      "Communication History - Complete interaction tracking.",
      "Reporting & Analytics - Business intelligence and insights."
    ]
  },
  {
    title: "Dialer",
    icon: "☎️",
    description: "Call Management",
    link: "/products/dialer-india",
    details: [
      "Predictive Dialing - Automatically dial numbers for agents.",
      "Call Recording - Record and store all conversations.",
      "Performance Analytics - Monitor agent productivity and call quality.",
      "Campaign Management - Organize and track calling campaigns.",
      "CRM Integration - Seamless integration with customer databases."
    ]
  },
  {
    title: "DND",
    icon: "🚫",
    description: "Do Not Disturb",
    link: "/services/dnd",
    details: [
      "DND Filtering - Automatically filter out DND numbers.",
      "Compliance Management - Ensure regulatory compliance.",
      "Smart Routing - Route calls based on DND status.",
      "Reporting Tools - Detailed DND analytics and reports.",
      "Integration APIs - Connect with existing systems."
    ]
  },
  {
    title: "Telephony",
    icon: "📞",
    description: "Voice Solutions",
    link: "/services/telephony",
    details: [
      "VoIP Solutions - Internet-based calling systems.",
      "Call Center Software - Complete call center management.",
      "Voice Analytics - Advanced call analysis and insights.",
      "SIP Trunking - Scalable voice infrastructure.",
      "Emergency Services - Reliable emergency calling systems."
    ]
  },
  {
    title: "Omnichannel",
    icon: "🔄",
    description: "Multi-Channel Platform",
    link: "/products/omnichannel",
    details: [
      "Unified Communication - Single platform for all channels.",
      "Channel Integration - Connect SMS, WhatsApp, email, and voice.",
      "Customer Journey Tracking - Monitor interactions across channels.",
      "Automated Workflows - Smart routing and response systems.",
      "Analytics Dashboard - Comprehensive multi-channel insights."
    ]
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showDetails, setShowDetails] = useState(true); // Set to true by default
  const [selectedService, setSelectedService] = useState<any>(communicationServices[0]); // Set first service by default
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToService = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const buttons = container.querySelectorAll('button');
      if (buttons[index]) {
        const button = buttons[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        
        // Calculate scroll position to center the button
        const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const nextSlide = () => {
    const newIndex = currentIndex === communicationServices.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToService(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? communicationServices.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToService(newIndex);
  };

  const handleServiceClick = (index: number) => {
    console.log('Service clicked:', index, communicationServices[index]);
    setCurrentIndex(index);
    scrollToService(index);
    
    // Update selected service and show details
    setSelectedService(communicationServices[index]);
    setShowDetails(true);
  };

  // Scroll to current service when currentIndex changes
  useEffect(() => {
    scrollToService(currentIndex);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      } else if (event.key >= '1' && event.key <= '9') {
        event.preventDefault();
        const index = parseInt(event.key) - 1;
        if (index < communicationServices.length) {
          handleServiceClick(index);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
    <section className="relative text-primary-foreground py-4 min-h-[60vh] flex items-center overflow-hidden particle-background-hero">
      {/* The particle-background-hero class will apply the ::before pseudo-element for the particle effect */}
      <div className="container-max relative z-20 text-center">
      
        <p className="text-base md:text-lg font-semibold text-primary mb-4 animate-fade-in-up">
          <span className="relative inline-block">
            Your Trusted Partner in IT Solutions
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 origin-left animate-underline-grow" />
          </span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
          <Typewriter
            options={{
              strings: ["Accelerate", "Innovate", "Transform"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "inline-block",
              cursorClassName: "text-accent",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).start();
            }}
          />
          <span className="ml-2">Your Business with Avyukta</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Leverage cutting-edge technology and expert insights to achieve unparalleled growth and efficiency.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
          <QuoteFormSheet>
            <AnimatedButton
              size="lg"
              pulseAnimation
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 border border-gray-300 hover:border-gray-400"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5 text-black" />
            </AnimatedButton>
          </QuoteFormSheet>
          <ScheduleDemoSheet>
            <AnimatedButton
              size="lg"
              pulseAnimation
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 border border-gray-300 hover:border-gray-400"
            >
              Talk To Us 24*7
              <Phone className="ml-2 h-5 w-5 animate-pulse text-black" /> 
            </AnimatedButton>
          </ScheduleDemoSheet>
        </div>

        {/* Communication Services Section */}
        <div className="mt-8 md:mt-12 animate-fade-in-up animation-delay-400">
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/30 shadow-2xl">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Our Communication Solutions
                </h3>
                <p className="text-primary-foreground/70 text-sm md:text-base lg:text-lg">
                  Choose the perfect communication channel for your business
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Service Cards Row */}
                <div className="flex items-center w-full mx-auto">
                  {/* Left Navigation Button */}
                  <button
                    onClick={prevSlide}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg mx-2 flex-shrink-0 z-10"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                  {/* Services Container */}
                  <div className="relative flex-1 overflow-hidden">
                    <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
                      <div className="flex gap-3 md:gap-4 lg:gap-5 pb-2 min-w-max px-2">
                        {communicationServices.map((service, index) => (
                          <button
                            key={index}
                            className={`group relative px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm lg:text-base transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 flex-shrink-0 overflow-hidden min-w-[100px] md:min-w-[120px] lg:min-w-[140px] ${
                              index === currentIndex
                                ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-xl shadow-accent/25 border-2 border-accent/50' 
                                : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm'
                            }`}
                            onClick={() => handleServiceClick(index)}
                            onMouseEnter={() => {
                              const button = document.querySelector(`[data-service="${index}"]`);
                              if (button) {
                                button.classList.add('ring-2', 'ring-accent/30');
                              }
                            }}
                            onMouseLeave={() => {
                              const button = document.querySelector(`[data-service="${index}"]`);
                              if (button) {
                                button.classList.remove('ring-2', 'ring-accent/30');
                              }
                            }}
                            data-service={index}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="flex items-center justify-center gap-1 md:gap-2 whitespace-nowrap relative z-10">
                              <span className="text-sm md:text-lg transform group-hover:scale-110 transition-transform duration-200">{service.icon}</span>
                              <span className="group-hover:text-accent transition-colors duration-200">{service.title}</span>
                            </div>
                            
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                              {service.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Right Navigation Button */}
                  <button
                    onClick={nextSlide}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg mx-2 flex-shrink-0 z-10"
                  >
                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1 md:gap-2">
                  {communicationServices.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-accent' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Service Details Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in-up">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{selectedService?.icon}</span>
                      <h4 className="text-xl md:text-2xl font-bold text-white">{selectedService?.title}</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {selectedService?.details.map((detail: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white text-sm md:text-base">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
