import React from 'react';
import { BRAND } from '../../data/content';
import { RangoliCornerMotif, RoyalDivider } from '../common/IndianPatterns';
import { scrollToSection } from '../../utils/animations';
import { ArrowUp, PhoneCall, Mail, Heart, Building2, Crown, Calendar, Sparkles } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-white text-charcoal pt-16 pb-10 border-t border-rangoli-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Directory Columns on Pure White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          
          {/* Column 1: Brand & Bio (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <RangoliCornerMotif size={36} className="text-amber-500" />
                <div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    {BRAND.name}
                  </h3>
                  <p className="text-[10px] tracking-widest uppercase font-semibold text-amber-600 -mt-0.5">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-6 pr-6">
                Turnkey event management and production across India. Specializing in corporate foundation days, annual office parties, royal weddings, milestone birthday galas, and live concerts.
              </p>
            </div>

            <div className="space-y-2 text-xs text-charcoal-muted">
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
                <span>{BRAND.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{BRAND.email}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h5 className="font-heading text-base font-semibold text-charcoal mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-charcoal-muted font-light">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-600 transition-colors">
                  About Atelier
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-amber-600 transition-colors">
                  Services Offered
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="hover:text-amber-600 transition-colors">
                  Event Disciplines
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('featured')} className="hover:text-amber-600 transition-colors">
                  Featured Portfolios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('catering')} className="hover:text-amber-600 transition-colors">
                  Bespoke Banquets
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-amber-600 transition-colors">
                  5-Stage Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-600 transition-colors">
                  Visual Archive
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-600 transition-colors">
                  Patron Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: All Event Disciplines (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h5 className="font-heading text-base font-semibold text-charcoal mb-3">
              Event Disciplines
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-muted font-light">
              <span>Corporate Foundation Days</span>
              <span>Office Annual Parties</span>
              <span>Diya Prajwalan Ceremonies</span>
              <span>Executive Summits</span>
              <span>Royal Vedic Weddings</span>
              <span>Milestone Birthday Parties</span>
              <span>50th & 60th Jubilees</span>
              <span>Live Music Concerts</span>
              <span>Banquet & Chaat Catering</span>
              <span>Venue Logistics & Setup</span>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-rangoli-bg border border-rangoli-border">
              <p className="text-xs font-semibold text-charcoal mb-1">Planning an upcoming event?</p>
              <p className="text-xs text-charcoal-muted mb-2 font-light">Connect directly with our senior event directors in Hyderabad & Mumbai.</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-xs font-semibold text-amber-600 hover:underline"
              >
                Inquire with RIVAAYAT →
              </button>
            </div>
          </div>

        </div>

        <RoyalDivider className="my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted font-light pt-2">
          <p>
            © {new Date().getFullYear()} {BRAND.fullName}. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            Crafted for unforgettable celebrations across India <Heart className="w-3 h-3 text-amber-500 fill-amber-500 inline" />
          </p>

          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-1.5 text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
