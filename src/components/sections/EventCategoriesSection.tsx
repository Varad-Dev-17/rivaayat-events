import React from 'react';
import { EVENT_CATEGORIES } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { scrollToSection } from '../../utils/animations';
import { Check, ArrowRight, Building2, Crown, Calendar, Music } from 'lucide-react';

export const EventCategoriesSection: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'corporate-events':
        return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'weddings-ceremonies':
        return <Crown className="w-5 h-5 text-amber-600" />;
      case 'birthday-parties':
        return <Calendar className="w-5 h-5 text-amber-600" />;
      case 'concerts-cultural':
        return <Music className="w-5 h-5 text-amber-600" />;
      default:
        return <Crown className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="categories" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Event Disciplines"
          title="Events We Produce for"
          highlight="Every Occasion"
          subtitle="From enterprise corporate foundation days to royal weddings and milestone birthdays, we deliver excellence across every celebration format."
        />

        {/* 4 Cards in a Clean 2x2 Grid (No filters, all visible immediately!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl bg-white border border-rangoli-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Category Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-rangoli-bg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Top Stats Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-rangoli-border text-xs font-semibold text-charcoal shadow-sm">
                      {category.stats}
                    </span>
                  </div>

                  {/* Category Title on Image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                      {category.tagline}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light mb-6">
                    {category.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Signature Inclusions:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs font-medium text-charcoal"
                        >
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-rangoli justify-center"
                >
                  <span>Inquire for {category.name.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
