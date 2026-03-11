"use client";

import { useScrollAnimation } from "@/components/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import OrdersSection from "@/components/OrdersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <OrdersSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
