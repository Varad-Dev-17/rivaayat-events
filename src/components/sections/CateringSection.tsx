import React, { useState } from 'react';
import { CATERING_CATEGORIES } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { scrollToSection } from '../../utils/animations';
import { Utensils, Sparkles, ChefHat, ArrowRight } from 'lucide-react';

export const CateringSection: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState(CATERING_CATEGORIES[0].id);
  const currentMenu = CATERING_CATEGORIES.find((c) => c.id === activeMenuId) || CATERING_CATEGORIES[0];

  return (
    <section id="catering" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Catering & Royal Banquets"
          title="Exceptional Culinary"
          highlight="Experiences & Feasts"
          subtitle="Delight your guests with exquisite traditional and contemporary cuisines curated by master chefs."
        />

        {/* 4 Menu Selector Buttons on White background */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {CATERING_CATEGORIES.map((menu) => {
            const isSelected = menu.id === activeMenuId;
            return (
              <button
                key={menu.id}
                onClick={() => setActiveMenuId(menu.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white text-charcoal border-rangoli-border hover:border-amber-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <ChefHat className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-amber-500'}`} />
                  <span className={`text-[10px] uppercase font-mono tracking-wider ${isSelected ? 'text-white/80' : 'text-charcoal-muted'}`}>
                    {menu.specialtyTag}
                  </span>
                </div>
                <h4 className={`font-heading text-base font-semibold leading-snug ${isSelected ? 'text-white' : 'text-charcoal'}`}>
                  {menu.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Catering Showcase Card on Pure White */}
        <div className="rounded-3xl bg-white border border-rangoli-border shadow-md overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-rangoli-border shadow-sm">
                <img
                  src={currentMenu.image}
                  alt={currentMenu.title}
                  className="w-full h-full object-cover"
                  key={currentMenu.id}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-rangoli-border text-xs text-charcoal font-medium">
                  <span className="text-amber-600 font-semibold block mb-0.5">{currentMenu.serviceStyle}</span>
                  <span>{currentMenu.heritage}</span>
                </div>
              </div>
            </div>

            {/* Menu Narrative & Signature Dishes */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold mb-1">
                Culinary Heritage
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-semibold mb-3">
                {currentMenu.title}
              </h3>

              <p className="text-base text-charcoal-muted leading-relaxed font-light mb-6">
                {currentMenu.description}
              </p>

              {/* Signature Dishes List */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-3 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-500" />
                  Signature Tasting Highlights:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMenu.signatureDishes.map((dish, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-amber-50/50 border border-amber-200/60 flex items-start gap-2.5 text-xs font-medium text-charcoal"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-rangoli"
                >
                  <span>Inquire for Catering</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
