import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { BRAND } from '../../data/content';
import { scrollToSection } from '../../utils/animations';
import { RangoliCornerMotif } from './IndianPatterns';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'All Events', target: 'categories' },
    { name: 'Portfolios', target: 'featured' },
    { name: 'Royal Banquets', target: 'catering' },
    { name: 'Process', target: 'process' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Testimonials', target: 'testimonials' },
  ];

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'border-b border-rangoli-border shadow-sm py-3'
            : 'border-b border-rangoli-border/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo: RIVAAYAT */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="relative flex items-center justify-center">
                <RangoliCornerMotif size={34} className="text-amber-500 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                  {BRAND.name}
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase font-semibold text-amber-600 -mt-1">
                  Events & Production
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-sm font-medium text-charcoal hover:text-amber-600 transition-colors relative py-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Action Button: Plan Your Event */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-rangoli text-sm"
              >
                <span>Plan Your Event</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal hover:text-amber-600 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu on pure white background */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative h-full flex flex-col justify-between p-8 pt-24 bg-white">
          <div className="flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-2">
              Menu Directory
            </span>
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left font-heading text-2xl text-charcoal hover:text-amber-600 transition-colors py-2 flex items-center justify-between border-b border-rangoli-border/70"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-amber-500" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-rangoli-border flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-charcoal-muted text-sm">
              <PhoneCall className="w-4 h-4 text-amber-500" />
              <span>{BRAND.phone}</span>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full btn-rangoli justify-center"
            >
              <span>Connect With Planners</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
