import React, { useEffect } from 'react';
import { initLenis } from './utils/animations';
import { CustomCursor } from './components/common/CustomCursor';
import { RangoliPageFrame } from './components/common/IndianPatterns';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { EventCategoriesSection } from './components/sections/EventCategoriesSection';
import { FeaturedEventsSection } from './components/sections/FeaturedEventsSection';
import { CateringSection } from './components/sections/CateringSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { GallerySection } from './components/sections/GallerySection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';

export const App: React.FC = () => {
  useEffect(() => {
    const lenis = initLenis();
    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-charcoal selection:bg-amber-100 selection:text-charcoal overflow-x-hidden font-sans">
      {/* Subtle Henna Rangoli Watermarks on Canvas Borders */}
      <RangoliPageFrame />

      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* 10 Content Sections on Pure White Background */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EventCategoriesSection />
        <FeaturedEventsSection />
        <CateringSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer on Pure White */}
      <FooterSection />
    </div>
  );
};

export default App;
