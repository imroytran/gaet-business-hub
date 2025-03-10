
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import BusinessSection from '../components/home/BusinessSection';
import PerformanceSection from '../components/home/PerformanceSection';
import NewsSection from '../components/home/NewsSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Update page title
    document.title = 'GAET - Tổng Công Ty Đa Ngành';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <PerformanceSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
