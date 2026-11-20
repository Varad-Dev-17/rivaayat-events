import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-amber to-amber-600 text-white shadow-lg shadow-amber/25 hover:shadow-amber/40 hover:brightness-105 border border-amber/40',
    secondary:
      'bg-gold text-brown-dark font-semibold shadow-md shadow-gold/20 hover:bg-gold-light border border-gold-deep/20',
    outline:
      'bg-transparent text-brown border border-gold/70 hover:border-amber hover:bg-gold/10 hover:text-brown-dark backdrop-blur-sm',
    dark:
      'bg-brown-dark text-gold border border-gold/30 hover:border-gold hover:bg-brown shadow-xl hover:shadow-gold/10',
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {/* Soft inner glow ring */}
      <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/10" />
    </button>
  );
};

