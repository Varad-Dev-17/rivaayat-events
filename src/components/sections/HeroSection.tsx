import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, Crown, Calendar, Music, Sparkles } from 'lucide-react';
import { scrollToSection } from '../../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on full-width background image
      if (mainImageRef.current) {
        gsap.to(mainImageRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Smooth subtle fade-in of hero text
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 28,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-white">
      {/* Full-Width Cinematic Hero */}
      <section
        id="hero"
        ref={heroRef}
        className="relative w-full min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen flex flex-col justify-end pt-28 pb-14 sm:pb-20 overflow-hidden"
      >
        {/* Full-Width Background Image with Parallax */}
        <div
          ref={mainImageRef}
          className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1599318011235-904154a09c36?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="RIVAAYAT Luxury Indian Event Management"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Clean Hero Presentation - Zero Dark Overlays or Shadows */}

        {/* Top Badges (Inside Max-Width Container) */}
        <div className="absolute top-24 sm:top-28 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-charcoal border border-rangoli-border text-xs font-semibold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Full-Service Event Management & Production
            </span>

            <span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-charcoal border border-rangoli-border text-xs font-semibold shadow-md">
              850+ Events • 28 Cities Across India
            </span>
          </div>
        </div>

        {/* Hero Content aligned to max-w-7xl with shadow ONLY on text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={contentRef} className="max-w-2xl relative">
            {/* Localized soft ambient shadow strictly behind the text area */}
            <div 
              className="absolute -inset-6 sm:-inset-8 -z-10 rounded-3xl pointer-events-none opacity-80"
              style={{
                background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 80%)',
                filter: 'blur(12px)',
              }}
            />

            <span 
              className="text-xs uppercase tracking-wider text-amber-300 font-bold block mb-2.5"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 8px rgba(0, 0, 0, 0.9)',
              }}
            >
              Corporate Foundation Days • Weddings • Birthday Parties • Concerts
            </span>

            <h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.12] mb-3"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 16px rgba(0, 0, 0, 0.9), 0 8px 32px rgba(0, 0, 0, 0.85)',
              }}
            >
              Crafting Extraordinary Events Across India
            </h1>

            <p 
              className="text-base sm:text-lg text-white font-medium leading-relaxed mb-7 font-sans max-w-[55ch]"
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.85)',
              }}
            >
              Turnkey event management and production. We handle stage design, lighting, concert audio, gourmet catering, and guest hospitality from concept to seamless execution.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-rangoli shadow-xl"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/60 shadow-xl transition-all"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Focused Event Pillars on Pure White Background (Instantly clear to every visitor) */}
      <div className="relative bg-white border-b border-rangoli-border py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <div
              onClick={() => scrollToSection('services')}
              className="cursor-pointer p-4 sm:p-5 rounded-2xl bg-white border border-rangoli-border hover:border-amber-400 hover:shadow-lg transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading text-sm sm:text-base font-semibold text-charcoal leading-tight group-hover:text-amber-600 transition-colors">
                  Corporate Events
                </p>
                <p className="text-xs text-charcoal-muted font-light mt-0.5">
                  Foundation days & galas
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection('services')}
              className="cursor-pointer p-4 sm:p-5 rounded-2xl bg-white border border-rangoli-border hover:border-amber-400 hover:shadow-lg transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading text-sm sm:text-base font-semibold text-charcoal leading-tight group-hover:text-amber-600 transition-colors">
                  Royal Weddings
                </p>
                <p className="text-xs text-charcoal-muted font-light mt-0.5">
                  Vedic rituals & mandaps
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection('services')}
              className="cursor-pointer p-4 sm:p-5 rounded-2xl bg-white border border-rangoli-border hover:border-amber-400 hover:shadow-lg transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading text-sm sm:text-base font-semibold text-charcoal leading-tight group-hover:text-amber-600 transition-colors">
                  Birthday Parties
                </p>
                <p className="text-xs text-charcoal-muted font-light mt-0.5">
                  Milestones & jubilees
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection('services')}
              className="cursor-pointer p-4 sm:p-5 rounded-2xl bg-white border border-rangoli-border hover:border-amber-400 hover:shadow-lg transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading text-sm sm:text-base font-semibold text-charcoal leading-tight group-hover:text-amber-600 transition-colors">
                  Live Shows
                </p>
                <p className="text-xs text-charcoal-muted font-light mt-0.5">
                  Concerts & Sangeet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
