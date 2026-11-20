import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { FEATURED_EVENTS } from '../../data/content';
import { FeaturedEvent } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { EventDetailModal } from '../modals/EventDetailModal';

export const FeaturedEventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<FeaturedEvent | null>(null);

  return (
    <section id="featured" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading highlighting Corporate, Weddings & Celebrations */}
        <SectionHeading
          badge="Featured Portfolios"
          title="Corporate, Weddings &"
          highlight="Celebrations We've Produced"
          subtitle="Explore recent corporate foundation days, royal weddings, milestone birthday galas, and live concerts produced across India."
        />

        {/* Asymmetric Grid with Pure White cards and subtle golden borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {FEATURED_EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-rangoli-border bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-rangoli-border text-charcoal text-xs font-semibold">
                    {event.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title on image bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-medium mb-1">
                    {event.client}
                  </p>
                  <h3 className="font-heading text-2xl font-normal text-white leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta on pure white background */}
              <div className="p-5 bg-white border-t border-rangoli-border flex items-center justify-between text-xs text-charcoal-muted">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};
