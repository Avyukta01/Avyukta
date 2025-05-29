import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import FeaturedAISection from "@/components/sections/FeaturedAISection";
import TechStackSection from "@/components/sections/TechStackSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustedBySection />
        <ExpertiseSection />
        <VideoSection />
        <FeaturedAISection />
        <TechStackSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
