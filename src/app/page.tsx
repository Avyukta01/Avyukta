import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedAISection from "@/components/sections/FeaturedAISection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import VideoSection from "@/components/sections/VideoSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProductHighlightsSection from "@/components/sections/ProductHighlightsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ClientsAndAffiliatesSection from "@/components/sections/ClientsAndAffiliatesSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductHighlightsSection className="pt-8 pb-12" />
        <FeaturedAISection />
        <ExpertiseSection />
        <VideoSection />
        <TechStackSection />
        <BlogSection />
        <ClientsAndAffiliatesSection />
        <TestimonialsSection />
        <TrustedBySection />
      </main>
      <Footer />
    </div>
  );
}
