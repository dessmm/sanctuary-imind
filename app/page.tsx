import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function Home() {
  return (
    <main className="bg-background relative overflow-x-hidden">
      {/* Ambient floating background */}
      <FloatingShapes />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BookingSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
