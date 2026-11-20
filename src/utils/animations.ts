import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (typeof window === 'undefined') return null;

  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  });

  lenisInstance = lenis;

  // Synchronize Lenis and GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export const scrollToSection = (id: string) => {
  if (lenisInstance) {
    const target = document.getElementById(id);
    if (target) {
      lenisInstance.scrollTo(target, { offset: -80, duration: 1.5 });
    }
  } else {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

