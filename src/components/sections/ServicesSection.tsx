import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SERVICES } from '../../data/content';
import { ServiceItem } from '../../types';
import { ServiceDetailModal } from '../modals/ServiceDetailModal';
import { 
  Building2, 
  Crown, 
  Calendar, 
  Music, 
  UtensilsCrossed, 
  MapPin, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-amber-600" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-amber-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-amber-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Zero Filters */}
        <SectionHeading
          badge="Our Full Services"
          title="Complete Turnkey Event"
          highlight="Management & Production"
          subtitle="From corporate foundation days and executive conferences to grand weddings and milestone birthday parties, our team handles every aspect from concept to execution."
        />

        {/* 6 Comprehensive Services in a Clean Pure White Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-2xl bg-white border border-rangoli-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-amber-400 flex flex-col justify-between"
            >
              <div>
                {/* Service Image with Top Rounded Corner */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-rangoli-bg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-rangoli-border text-xs font-mono font-bold text-amber-600">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Subtitle on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs font-medium text-amber-300 uppercase tracking-wider">
                      {service.subtitle.split('&')[0]}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal group-hover:text-amber-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key feature pills */}
                  <div className="space-y-1.5 mb-2">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <p key={fIdx} className="text-xs text-charcoal-muted flex items-start gap-1.5 font-light">
                        <span className="text-amber-500 font-bold">•</span>
                        <span className="line-clamp-1">{feat}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 py-3.5 bg-rangoli-bg/70 border-t border-rangoli-border flex items-center justify-between text-xs text-amber-600 font-semibold uppercase tracking-wider">
                <span>View Full Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
