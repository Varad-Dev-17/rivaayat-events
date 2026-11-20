import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted by Enterprises,"
          highlight="Couples & Families"
          subtitle="Real reviews from corporate leaders, wedding couples, and families whose celebrations we brought to life."
        />

        {/* Testimonial Card on Pure White */}
        <div className="rounded-3xl bg-white border border-rangoli-border shadow-md overflow-hidden p-6 sm:p-10 lg:p-12 relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Couple Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-rangoli-border shadow-sm">
                <img
                  src={current.eventImage}
                  alt={current.eventTitle}
                  className="w-full h-full object-cover"
                  key={current.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shrink-0">
                    <img
                      src={current.avatar}
                      alt={current.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">
                      {current.clientName}
                    </p>
                    <p className="text-[10px] text-amber-200 uppercase tracking-wider">
                      {current.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Testimonial Quote */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs font-semibold text-amber-600 ml-2">
                    5.0 / 5.0 RATING
                  </span>
                </div>

                {/* Event Title */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700">
                    {current.eventTitle}
                  </span>
                  <span className="text-xs text-charcoal-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {current.location}
                  </span>
                </div>

                {/* Quote (Serif, 20-24px, 1.5 line-height) */}
                <div className="relative mb-5">
                  <Quote className="w-8 h-8 text-amber-200 absolute -top-3 -left-3 -z-0" />
                  <p className="font-heading italic text-xl sm:text-2xl text-charcoal leading-relaxed relative z-10">
                    "{current.quote}"
                  </p>
                </div>

                <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-6">
                  {current.story}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-rangoli-border">
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2 transition-all rounded-full ${
                        idx === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-amber-200 hover:bg-amber-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous Testimonial"
                    className="p-2 rounded-lg border border-rangoli-border hover:border-amber-400 text-charcoal transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next Testimonial"
                    className="p-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
