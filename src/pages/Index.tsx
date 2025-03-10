
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import BusinessSection from '../components/home/BusinessSection';
import PerformanceSection from '../components/home/PerformanceSection';
import PartnerSection from '../components/home/PartnerSection';
import NewsSection from '../components/home/NewsSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/layout/Footer';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { language } = useTheme();

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Update page title based on language
    document.title = language === 'vi' ? 'GAET - Tổng Công Ty Đa Ngành' : 'GAET - Multisector Corporation';
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-hidden dark:bg-gray-900">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <PerformanceSection />
        <PartnerSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
