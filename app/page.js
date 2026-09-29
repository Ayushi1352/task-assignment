import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08101E] text-slate-100 selection:bg-[#C59139] selection:text-white">
      <Navbar />

      <Hero />

      <FeatureCards />

      <AboutSection />

      <PracticeAreas />

      <ProcessSection />

      <TeamSection />

      <StatsSection />

      <TestimonialsSection />

      <BlogSection />

      <Footer />
    </main>
  );
}
