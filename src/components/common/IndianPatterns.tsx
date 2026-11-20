import React from 'react';

// Delicate Henna / Rangoli Watermark for Corners & Backgrounds (like Image 1)
export const RangoliCornerMotif: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-40 h-40 text-amber-500", 
  size = 160 
}) => {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.8" />
      
      {/* 8 Floral Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path 
            d="M50 14 C54 24, 58 34, 50 40 C42 34, 46 24, 50 14 Z" 
            fill="currentColor" 
            fillOpacity="0.12" 
            stroke="currentColor" 
            strokeWidth="0.6" 
          />
          <circle cx="50" cy="10" r="1.5" fill="currentColor" opacity="0.8" />
        </g>
      ))}

      {/* Decorative Dots */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <g key={`d-${i}`} transform={`rotate(${angle} 50 50)`}>
          <circle cx="50" cy="20" r="1" fill="currentColor" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
};

// Clean Royal Section Divider
export const RoyalDivider: React.FC<{ className?: string }> = ({ 
  className = "my-4" 
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#E5A84B] opacity-40" />
      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rotate-45 bg-[#E5A84B] opacity-70" />
        <span className="w-2 h-2 rotate-45 bg-[#E5A84B]" />
        <span className="w-1 h-1 rotate-45 bg-[#E5A84B] opacity-70" />
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#E5A84B] opacity-40" />
    </div>
  );
};

// Corner Rangoli Border Accent (as seen on the outer frames of Image 1)
export const RangoliPageFrame: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-12 -left-12 opacity-15 text-amber-500">
        <RangoliCornerMotif size={220} />
      </div>
      <div className="absolute -top-12 -right-12 opacity-15 text-amber-500">
        <RangoliCornerMotif size={220} />
      </div>
      <div className="absolute -bottom-12 -left-12 opacity-15 text-amber-500">
        <RangoliCornerMotif size={220} />
      </div>
      <div className="absolute -bottom-12 -right-12 opacity-15 text-amber-500">
        <RangoliCornerMotif size={220} />
      </div>
    </div>
  );
};
