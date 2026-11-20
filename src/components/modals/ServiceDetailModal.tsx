import React from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { scrollToSection } from '../../utils/animations';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-charcoal shadow-2xl border border-rangoli-border flex flex-col">
        {/* Cover image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
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
              Luxury Service
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Body content on Pure White */}
        <div className="p-6 sm:p-8 bg-white">
          <p className="text-base text-charcoal-muted leading-relaxed font-light mb-6">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Service Scope
              </h4>
              <ul className="space-y-2.5">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-muted font-light">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 flex items-center gap-1.5">
                <ArrowRight className="w-4 h-4 text-amber-500" />
                What's Included
              </h4>
              <div className="space-y-2">
                {service.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-200/60 text-xs font-medium text-charcoal flex items-center justify-between"
                  >
                    <span>{deliv}</span>
                    <span className="text-[10px] text-amber-700 font-bold">INCLUDED</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-rangoli-border">
            <p className="text-xs text-charcoal-muted text-center sm:text-left">
              Tailored to your specific celebration requirements.
            </p>
            <button
              onClick={() => {
                onClose();
                scrollToSection('contact');
              }}
              className="btn-rangoli"
            >
              <span>Inquire for This Service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
