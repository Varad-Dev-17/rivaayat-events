export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  deliverables: string[];
  royalQuote?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stats: string;
  highlights: string[];
}

export interface FeaturedEvent {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  date: string;
  guestCount: string;
  coverImage: string;
  secondaryImage: string;
  description: string;
  palette: string[];
  highlights: string[];
  testimonialQuote?: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface CateringMenuCategory {
  id: string;
  title: string;
  heritage: string;
  description: string;
  image: string;
  signatureDishes: string[];
  serviceStyle: string;
  specialtyTag: string;
}

export interface ProcessStep {
  step: string;
  sanskritName: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Sangeet & Mehendi' | 'Decor & Mandaps' | 'Galas & Corporate' | 'Dining & Banquets';
  location: string;
  image: string;
  tag: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventTitle: string;
  location: string;
  rating: number;
  quote: string;
  story: string;
  avatar: string;
  eventImage: string;
  date: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budgetBracket: string;
  destination: string;
  visionNotes: string;
}

