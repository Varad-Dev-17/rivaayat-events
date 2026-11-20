import React from 'react';
import { RoyalDivider } from './IndianPatterns';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {/* Optional Pill Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-3 text-xs font-semibold tracking-wider uppercase border border-amber-300/60 bg-amber-50 text-amber-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {badge}
        </div>
      )}

      {/* Main Serif Headline (28-36px typical size) */}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal font-normal leading-[1.2] tracking-tight">
        {title}{' '}
        {highlight && (
          <span className="italic font-normal text-amber-600">
            {highlight}
          </span>
        )}
      </h2>

      {/* Royal Divider Motif */}
      <RoyalDivider className={isCenter ? 'my-3.5' : 'my-3.5 justify-start'} />

      {/* Subtitle (16-18px typical size, constrained line width 50-75ch) */}
      {subtitle && (
        <p className={`text-base sm:text-lg font-light text-charcoal-muted leading-relaxed max-w-[65ch] ${
          isCenter ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
