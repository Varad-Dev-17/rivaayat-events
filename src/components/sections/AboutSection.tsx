import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToSection } from '../../utils/animations';
import { BRAND } from '../../data/content';
import { Sparkles, ArrowRight, Building2, Crown, Calendar } from 'lucide-react';
import { RangoliCornerMotif } from '../common/IndianPatterns';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const statElements = statsRef.current?.querySelectorAll<HTMLElement>('.stat-number');
      if (statElements) {
        statElements.forEach((el) => {
          const targetValue = parseFloat(el.getAttribute('data-value') || '0');
          const isDecimal = targetValue % 1 !== 0;

          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: targetValue,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 85%',
                once: true,
              },
              snap: { innerText: isDecimal ? 0.1 : 1 },
              onUpdate: function () {
                const current = parseFloat(el.innerText);
                el.innerText = isDecimal ? current.toFixed(1) : Math.round(current).toString();
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Decorative Henna Watermark */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 opacity-10 pointer-events-none text-amber-500">
        <RangoliCornerMotif size={320} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About 2-Column Asymmetric Layout on Pure White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          
          {/* Left: Asymmetric Multi-Event Image Composition */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-rangoli-border shadow-xl aspect-[4/5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="RIVAAYAT Event Celebrations"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl border border-rangoli-border shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-charcoal">
                    14+ Years of Excellence
                  </p>
                  <p className="text-[11px] text-charcoal-muted font-light">
                    Over 650 Successful Events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative covering ALL EVENTS */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">
              About Our Atelier
            </span>

            {/* H2 Title matching font sizes guide (28-36px, bolder weight) */}
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal font-semibold mb-6 leading-tight">
              {BRAND.fullName}
            </h2>

            {/* Body Text matching font size guide (16-18px, 1.5-1.7 line height, 50-75ch) */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light mb-4 max-w-[65ch]">
              Founded in 2012, <strong>RIVAAYAT</strong> is India’s premier turnkey event management company. We produce memorable experiences that blend traditional Indian hospitality with flawless modern execution.
            </p>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light mb-8 max-w-[65ch]">
              From corporate foundation days and annual office parties with ceremonial Diya Prajwalan, to royal weddings, milestone birthday bashes, and live musical concerts — we handle all stagecraft, AV production, catering, and hospitality under one roof.
            </p>

            {/* Event Disciplines Check-Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Corporate Events</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <Crown className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Grand Weddings</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Birthday Parties</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-charcoal">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Live Concerts</span>
              </div>
            </div>

            {/* Action button: 'Contact us' */}
            <div>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-rangoli"
              >
                <span>Connect With Our Planners</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Statistics Bar (Pure White with warm golden border, no dark cards) */}
        <div
          ref={statsRef}
          className="rounded-2xl bg-rangoli-bg border border-rangoli-border p-8 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-rangoli-border">
            {BRAND.stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center ${i > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-amber-600 mb-1 flex items-baseline">
                  <span className="stat-number" data-value={stat.value}>
                    0
                  </span>
                  <span className="text-amber-500 ml-0.5">{stat.suffix}</span>
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                  {stat.label}
                </p>
                <p className="text-xs text-charcoal-muted font-light mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
