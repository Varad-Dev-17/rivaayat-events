import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/content';
import { GalleryItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Galas & Corporate',
    'Weddings',
    'Sangeet & Mehendi',
    'Dining & Banquets',
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentLightboxItem: GalleryItem | null =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Visual Archive"
          title="Moments of Prestige &"
          highlight="Celebration Captured"
          subtitle="Explore photographs from our recent corporate foundation days, royal weddings, milestone birthday parties, and live musical productions."
        />

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'bg-white text-charcoal border-rangoli-border hover:border-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white border border-rangoli-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom indicator hover badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-4 h-4 text-amber-600" />
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Location at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-heading text-lg font-normal mb-1">
                    {item.title}
                  </h4>
                  <p className="flex items-center gap-1.5 text-xs text-white/80 font-light">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[70vh]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-lg">
              <h3 className="font-heading text-2xl text-white mb-1">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs text-white/80 flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                {currentLightboxItem.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
