import React from 'react';
import { X, MapPin, Calendar, Users, Sparkles, Check } from 'lucide-react';
import { FeaturedEvent } from '../../types';
import { scrollToSection } from '../../utils/animations';

interface EventDetailModalProps {
  event: FeaturedEvent | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-charcoal shadow-2xl border border-rangoli-border flex flex-col">
        {/* Cover image banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-charcoal hover:bg-white transition-all shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1 block">
              {event.category} • {event.client}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold mb-2">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/90 font-light">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                {event.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-300" />
                {event.guestCount}
              </span>
            </div>
          </div>
        </div>

        {/* Content on Pure White */}
        <div className="p-6 sm:p-8 bg-white">
          <h4 className="font-heading text-xl text-charcoal font-semibold mb-2">
            The Celebration Story
          </h4>
          <p className="text-base text-charcoal-muted leading-relaxed font-light mb-6">
            {event.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center my-6">
            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-rangoli-border shadow-sm">
              <img
                src={event.secondaryImage}
                alt={`${event.title} detail`}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h5 className="font-heading text-lg font-semibold text-charcoal mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Event Highlights
              </h5>
              <ul className="space-y-2.5">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-muted font-light">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {event.testimonialQuote && (
            <div className="my-6 p-5 rounded-xl bg-amber-50/60 border border-amber-200/80">
              <p className="font-heading italic text-base sm:text-lg text-charcoal mb-1">
                "{event.testimonialQuote}"
              </p>
              <span className="text-xs font-semibold text-amber-700 block">
                — {event.client}
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-rangoli-border">
            <p className="text-xs text-charcoal-muted">
              Interested in a celebration like this?
            </p>
            <button
              onClick={() => {
                onClose();
                scrollToSection('contact');
              }}
              className="btn-rangoli"
            >
              <span>Inquire for Similar Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
