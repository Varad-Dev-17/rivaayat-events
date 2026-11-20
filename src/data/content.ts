import { 
  ServiceItem, 
  EventCategory, 
  FeaturedEvent, 
  CateringMenuCategory, 
  ProcessStep, 
  GalleryItem, 
  Testimonial 
} from '../types';

export const BRAND = {
  name: "RIVAAYAT",
  fullName: "RIVAAYAT Events & Production",
  tagline: "Corporate Events • Grand Weddings • Birthday Parties • Live Shows",
  est: "2012",
  phone: "+91 98200 45678",
  whatsapp: "+91 98200 45678",
  email: "contact@rivaayatevents.com",
  addresses: [
    { city: "Hyderabad", address: "Banjara Hills, Road No. 12, Hyderabad 500034" },
    { city: "Mumbai", address: "Bandra Kurla Complex (BKC), Mumbai 400051" },
    { city: "Bengaluru", address: "Indiranagar 100ft Road, Bengaluru 560038" },
    { city: "New Delhi", address: "Connaught Place, New Delhi 110001" },
  ],
  stats: [
    { value: 850, suffix: "+", label: "Events Managed", sub: "Corporate & Social" },
    { value: 250, suffix: "+", label: "Corporate Clients", sub: "MNCs & Enterprises" },
    { value: 28, suffix: "+", label: "Cities in India", sub: "Pan-India Coverage" },
    { value: 100, suffix: "%", label: "Turnkey Execution", sub: "Concept to Wrap" },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "corporate-events-production",
    title: "Corporate Events & Foundation Days",
    subtitle: "Annual Days • Conferences • Awards Galas",
    description: "End-to-end production for company foundation days, annual employee parties, awards nights, and executive summits with traditional Diya lighting.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Company Foundation Day and annual celebration galas",
      "Traditional Diya Prajwalan inaugural setups",
      "Curved 8K LED stages, lighting & concert sound",
      "VIP protocol and executive dining coordination"
    ],
    deliverables: ["Run of Show Schedule", "Stage Technical Rider", "Branding & Backdrop Renders"],
    royalQuote: "Seamless execution that elevates your corporate stature."
  },
  {
    id: "wedding-planning-production",
    title: "Weddings & Vedic Rituals",
    subtitle: "Sacred Nuptials • Haldi • Sangeet • Baraat",
    description: "Complete wedding management including auspicious Muhurat coordination, floral mandaps, Phoolon ki Chaadar entries, Haldi, Sangeet, and royal Baraats.",
    icon: "Crown",
    image: "https://images.unsplash.com/photo-1640745692250-db63545f4eef?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Sacred Vedic mandaps with fresh Mogra & marigolds",
      "Certified Vedic Pandits and ritual samagri liaison",
      "Daytime Haldi carnivals with brass urlis & floral decor",
      "Royal Baraat processions with vintage cars and safas"
    ],
    deliverables: ["Muhurat Schedule Matrix", "Floral Mandap 3D Render", "Vendor Master Timeline"],
    royalQuote: "Sacred traditions celebrated with timeless elegance."
  },
  {
    id: "birthday-parties-jubilees",
    title: "Birthday Parties & Milestones",
    subtitle: "1st Birthdays • 50th Jubilees • Shashti Poorthi",
    description: "Designing memorable milestone birthday celebrations, 50th golden jubilees, 60th Shashti Poorthi rituals, and private theme soirées.",
    icon: "Calendar",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom themes: Gatsby, Retro Bollywood & Floral Oasis",
      "Traditional Shashti Poorthi & Ayushya Homa arrangements",
      "Artisanal dessert stations, designer cakes & photo zones",
      "Live music performers, emcees, and DJs"
    ],
    deliverables: ["Theme Concept Moodboard", "Decor Renders", "Entertainment Schedule"],
    royalQuote: "Celebrating life's milestones with joy and style."
  },
  {
    id: "live-concerts-cultural-shows",
    title: "Live Concerts & Sangeet Nights",
    subtitle: "Bollywood Artists • Sufi Nights • DJ Stages",
    description: "High-energy live music concerts, Sufi mehfils, and Sangeet celebrations featuring celebrity performers, concert audio, and light shows.",
    icon: "Music",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Artist booking: Bollywood singers, Sufi qawwals & DJs",
      "Concert-grade sound systems and intelligent lighting rigs",
      "Sufi Mehfils with traditional low baithak seating",
      "Choreographers for Sangeet dance performances"
    ],
    deliverables: ["Artist Performance Contract", "AV Stage Layout", "Sound Check Sign-Off"],
    royalQuote: "Music that elevates every celebration."
  },
  {
    id: "catering-banquet-curation",
    title: "Catering & Royal Banquets",
    subtitle: "Corporate Buffets • Regional Thalis • Live Chaat",
    description: "Turnkey catering management for all group sizes: pure vegetarian regional Indian thalis, live street food stalls, executive corporate buffets, and plated dinners.",
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Pure vegetarian, Jain, Marwari & South Indian thalis",
      "Corporate executive buffets and high-tea lounges",
      "Interactive live chaat, jalebi and dosa carts",
      "Full tableware, bronze Kansa thalis & butler service"
    ],
    deliverables: ["Tasting Menu Degustation", "Catering Service Plan", "Dietary Matrix"],
    royalQuote: "Delicious feasts prepared to culinary perfection."
  },
  {
    id: "venue-scouting-logistics",
    title: "Venue Selection & Logistics",
    subtitle: "Convention Halls • Luxury Hotels • Transport",
    description: "Securing convention halls, hotel ballrooms, and heritage resorts across India. Managing government clearances, guest transport, and on-site directing.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Booking convention centers, 5-star hotels & palaces",
      "Floor plans, fire safety, and acoustic clearances",
      "Fleet transport: luxury buses, vintage cars & sedans",
      "Traditional guest arrivals: Aarti, garlands & check-in"
    ],
    deliverables: ["Venue Scouting Dossier", "Floor Layout Grid", "Fleet Dispatch Schedule"],
    royalQuote: "Total peace of mind with 360° logistical mastery."
  }
];

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "corporate-events",
    name: "Corporate Events & Foundation Days",
    tagline: "Annual Days • Award Nights • Product Launches",
    description: "Turnkey management for company foundation days, conferences, awards nights, and annual employee parties with stage, AV, and hospitality.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    stats: "250+ Corporate Events",
    highlights: ["Foundation Day Stages", "Ceremonial Diya Lighting", "Annual Awards Production", "Executive Dinners"]
  },
  {
    id: "weddings-ceremonies",
    name: "Weddings & Pre-Wedding Functions",
    tagline: "Vedic Nuptials • Haldi • Sangeet • Baraat",
    description: "Authentic Vedic ceremonies with sacred Muhurats, floral mandaps, Phoolon ki Chaadar entries, Haldi carnivals, and grand Baraats.",
    image: "https://images.unsplash.com/photo-1640745692250-db63545f4eef?auto=format&fit=crop&w=1000&q=80",
    stats: "320+ Traditional Weddings",
    highlights: ["Sacred Vedic Mandaps", "Phoolon ki Chaadar Entry", "Vedic Pandit Coordination", "Royal Baraat Procession"]
  },
  {
    id: "birthday-parties",
    name: "Birthday Parties & Milestones",
    tagline: "1st Birthdays • 50th Jubilees • Shashti Poorthi",
    description: "Memorable personal milestones: themed 1st birthdays, 50th golden jubilees, 60th Shashti Poorthi Vedic ceremonies, and private bashes.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
    stats: "180+ Birthday Milestones",
    highlights: ["Thematic Stage Decor", "Live Entertainment & DJs", "Customized Dessert Tables", "Family Video Memories"]
  },
  {
    id: "concerts-cultural",
    name: "Live Concerts & Sangeet Shows",
    tagline: "Musical Nights • Sufi Mehfils • Cultural Festivals",
    description: "High-energy live concerts, Sufi baithaks, Dandiya Raas festivals, and Sangeets featuring headline artists and concert production.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
    stats: "100+ Live Concerts",
    highlights: ["Concert Audio & Lighting", "Celebrity Artist Booking", "Crowd Management", "Ticketing & Entry Gates"]
  }
];

export const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    id: "corporate-foundation-day",
    title: "Apex Technologies: 25th Foundation Day",
    client: "Apex Global Group",
    category: "Corporate Foundation Day",
    location: "HICC, Hyderabad",
    date: "January 2026",
    guestCount: "1,200 Attendees",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1783124759848-79b2b085c4fe?auto=format&fit=crop&w=800&q=80",
    description: "A 25th foundation day with 1,200 employees and delegates. Featured an auspicious 7-tier brass Diya lighting, keynote sessions, laser logo reveal, and an awards dinner.",
    palette: ["#E5A84B", "#FFFFFF", "#F9EAD2", "#221A15"],
    highlights: [
      "Auspicious 7-tier brass Diya Prajwalan inauguration",
      "120-foot curved 8K LED stage with kinetic lighting",
      "Executive seated banquet for 1,200 attendees",
      "Live performance by Bollywood playback artist"
    ],
    testimonialQuote: "Flawless execution. Our board and employees were thrilled with the stage design and timing.",
    aspectRatio: 'wide'
  },
  {
    id: "royal-vedic-wedding-hyderabad",
    title: "Palace of Lights: A Grand Vedic Wedding",
    client: "Aditya & Shravya",
    category: "Royal Wedding",
    location: "Taj Falaknuma Palace, Hyderabad",
    date: "December 2025",
    guestCount: "500 Guests",
    coverImage: "https://images.unsplash.com/photo-1640745692250-db63545f4eef?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1695972775096-22c3e979ded9?auto=format&fit=crop&w=800&q=80",
    description: "A 3-day royal Hindu wedding. The couple celebrated in traditional crimson lehenga and cream sherwani with fresh floral jaimala garlands under 2,000 brass oil lamps.",
    palette: ["#E5A84B", "#FFFFFF", "#FDF9F3", "#C27A23"],
    highlights: [
      "Custom lotus mandap with 100,000 fresh white Mogra blooms",
      "Live Shehnai & Carnatic violin arrival ensemble",
      "Royal Telugu & Hyderabadi pure vegetarian feast",
      "Grand Baraat with vintage open-top Rolls Royce"
    ],
    testimonialQuote: "RIVAAYAT created magic. Every sacred ritual was respected with devotion.",
    aspectRatio: 'tall'
  },
  {
    id: "milestone-50th-birthday-gala",
    title: "The Golden Jubilee: 50th Birthday Gala",
    client: "The Kapoor Family",
    category: "Birthday Gala",
    location: "The Leela Palace, Bengaluru",
    date: "November 2025",
    guestCount: "250 Guests",
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "A 50th golden jubilee celebration featuring crystal chandeliers, an interactive memory wall, multi-course tasting menu, and live fusion jazz.",
    palette: ["#E5A84B", "#FFFFFF", "#FAF4E8", "#3A2E26"],
    highlights: [
      "Floral and gold entrance archway with custom monogram",
      "Multimedia wall chronicling 50 years of memories",
      "Artisanal dessert stations and live counters",
      "Live band performance & illusionist act"
    ],
    testimonialQuote: "The party of a lifetime. Our friends are still talking about the music and food!",
    aspectRatio: 'square'
  },
  {
    id: "live-sangeet-musical-night",
    title: "Starlight Sangeet & Concert Night",
    client: "Karan & Ananya",
    category: "Musical Sangeet",
    location: "Rambagh Palace, Jaipur",
    date: "February 2026",
    guestCount: "450 Guests",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1770823218239-996df9afcff0?auto=format&fit=crop&w=800&q=80",
    description: "A high-energy Sangeet night merging family choreography with a live concert under the stars, featuring pyrotechnics and headline performers.",
    palette: ["#E5A84B", "#FFFFFF", "#F9EAD2", "#D49333"],
    highlights: [
      "Concert stage with beam lighting and CO2 cryo jets",
      "Bollywood playback singer live performance",
      "Family dance acts directed by Mumbai choreographers",
      "Midnight street-food and jalebi live stalls"
    ],
    testimonialQuote: "The energy was electric. RIVAAYAT produced a concert to remember.",
    aspectRatio: 'wide'
  }
];

export const CATERING_CATEGORIES: CateringMenuCategory[] = [
  {
    id: "corporate-executive-buffets",
    title: "Corporate Buffets & High Teas",
    heritage: "Business Summits & Foundation Days",
    description: "Executive multi-cuisine dining designed for conferences and annual days. Live salad bars, hot regional mains, and dessert lounges.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    signatureDishes: [
      "Hyderabadi Subz Dum Biryani with Salan",
      "Paneer Kaju Butter Masala & Naans",
      "Live Pasta & Risotto Artisan Station",
      "Petit Fours & Fresh Fruit Tarts"
    ],
    serviceStyle: "Executive Buffet & Butler Canapés",
    specialtyTag: "Corporate Standards"
  },
  {
    id: "traditional-royal-thali",
    title: "Traditional Royal Thali Banquets",
    heritage: "Vedic Weddings & Celebrations",
    description: "Slow-simmered regional delicacies served on bronze Kansa or banana leaves prepared in pure Desi Ghee by master Maharajs.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    signatureDishes: [
      "Shahi Dal Makhani & Dal Tadka with Desi Ghee",
      "Rajasthani Gatte & Kashmiri Dum Aloo",
      "Fresh Stuffed Kulchas & Hot Puris",
      "Hot Malpua with Rabdi & Gulab Jamun"
    ],
    serviceStyle: "Silver & Kansa Seated Dining",
    specialtyTag: "Pure Desi Ghee"
  },
  {
    id: "live-chaat-street-counters",
    title: "Artisanal Live Chaat & Mithai",
    heritage: "Street Food Counters & Sangeet",
    description: "Live interactive stations serving crispy Palak Chaat, 5-flavor Pani Puri, Varanasi tamatar chaat, and fresh hot jalebis with rabdi.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    signatureDishes: [
      "Crispy Palak Patta Chaat with Pomegranate",
      "Varanasi Tamatar Chaat & Aloo Tikki",
      "Live Saffron Jalebi with Pistachio Rabdi",
      "Kulhad Masala Chai & Filter Coffee"
    ],
    serviceStyle: "Live Cooking Carts",
    specialtyTag: "Cooked Live On-Site"
  },
  {
    id: "birthday-cocktail-dessert",
    title: "Party Canapés & Dessert Bar",
    heritage: "Birthday Bashes & Private Soirées",
    description: "Gourmet finger food, mini sliders, artisanal dessert shots, and custom multi-tiered celebration cakes.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    signatureDishes: [
      "Truffle Cheese & Fig Crostinis",
      "Paneer Tikka Tartlets with Mint Pearls",
      "Rasmalai Tres Leches with Saffron",
      "Custom Multi-Tier Birthday Cake"
    ],
    serviceStyle: "Cocktail Style Service",
    specialtyTag: "Party Experience"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    sanskritName: "Prathama",
    title: "Event Brief & Vision",
    tagline: "Aligning on goals, attendees & budget",
    description: "We understand your event goals, guest count, dates, and budget to establish the master project scope.",
    duration: "Week 1",
    deliverables: ["Scope Document", "Budget Estimate", "Dates Grid"],
    icon: "Compass"
  },
  {
    step: "02",
    sanskritName: "Sthala",
    title: "Venue & Production Plan",
    tagline: "Locking the venue & master timeline",
    description: "We secure the convention hall, ballroom, or resort, negotiate rates, and draft the minute-by-minute production schedule.",
    duration: "Month 1",
    deliverables: ["Venue Booking", "Floor Layout", "Production Schedule"],
    icon: "MapPin"
  },
  {
    step: "03",
    sanskritName: "Rachana",
    title: "Stage, Decor & 3D Design",
    tagline: "Creating 3D renders & food tastings",
    description: "Our design team produces 3D renders of your stage, mandap, or party backdrop and arranges private menu tastings.",
    duration: "Month 2",
    deliverables: ["3D Decor Renders", "AV Stage Rider", "Tasting Menu"],
    icon: "Palette"
  },
  {
    step: "04",
    sanskritName: "Sambhala",
    title: "Vendor Coordination & Tech Checks",
    tagline: "Synchronizing artists & rehearsals",
    description: "We coordinate artists, emcees, caterers, sound technicians, and security, running full technical rehearsals.",
    duration: "Event Week",
    deliverables: ["Run-Sheet", "Sound Check", "Safety Clearance"],
    icon: "Sliders"
  },
  {
    step: "05",
    sanskritName: "Utsava",
    title: "Flawless Live Execution",
    tagline: "You enjoy the event; our directors manage every cue",
    description: "On event day, our on-site directors manage stage cues, guest hospitality, and transitions seamlessly.",
    duration: "Event Day",
    deliverables: ["On-Site Directing", "Guest Hospitality", "Event Wrap"],
    icon: "Crown"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Corporate Foundation Day Stage",
    category: "Galas & Corporate",
    location: "HICC, Hyderabad",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    tag: "Corporate Stage",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Indian Wedding Couple in Regalia",
    category: "Weddings",
    location: "Rambagh Palace, Jaipur",
    image: "https://images.unsplash.com/photo-1640745692250-db63545f4eef?auto=format&fit=crop&w=1200&q=80",
    tag: "Royal Wedding",
    aspectRatio: "portrait"
  },
  {
    id: "gal-3",
    title: "Ceremonial Brass Diya Lighting",
    category: "Galas & Corporate",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1783124759848-79b2b085c4fe?auto=format&fit=crop&w=1200&q=80",
    tag: "Diya Lighting",
    aspectRatio: "square"
  },
  {
    id: "gal-4",
    title: "Milestone 50th Birthday Party",
    category: "Weddings",
    location: "The Leela Palace, Bengaluru",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    tag: "Birthday Gala",
    aspectRatio: "landscape"
  },
  {
    id: "gal-5",
    title: "Live Concert Stage & Beam Lighting",
    category: "Sangeet & Mehendi",
    location: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    tag: "Live Concert",
    aspectRatio: "landscape"
  },
  {
    id: "gal-6",
    title: "Traditional Kansa Thali Feast",
    category: "Dining & Banquets",
    location: "Samode Palace, Jaipur",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    tag: "Royal Feast",
    aspectRatio: "square"
  },
  {
    id: "gal-7",
    title: "Bride in Red & Gold Lehenga",
    category: "Weddings",
    location: "Udaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1695972775096-22c3e979ded9?auto=format&fit=crop&w=1200&q=80",
    tag: "Bridal Elegance",
    aspectRatio: "portrait"
  },
  {
    id: "gal-8",
    title: "Floral Mandap with Fresh Mogra",
    category: "Weddings",
    location: "Taj Falaknuma, Hyderabad",
    image: "https://images.unsplash.com/photo-1774024051727-499f15bff4c9?auto=format&fit=crop&w=1200&q=80",
    tag: "Sacred Mandap",
    aspectRatio: "portrait"
  },
  {
    id: "gal-9",
    title: "Live Street Chaat & Jalebi Counter",
    category: "Dining & Banquets",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    tag: "Live Food",
    aspectRatio: "square"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Sanjay Mehta, VP Corporate Affairs",
    eventTitle: "Apex Technologies 25th Foundation Day",
    location: "HICC, Hyderabad",
    rating: 5,
    quote: "RIVAAYAT managed our 25th Foundation Day with 1,200 attendees. The ceremonial Diya lighting, keynote stage, and awards banquet were completely flawless.",
    story: "Flawless timing and stage production for our corporate annual day.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    eventImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    date: "January 2026"
  },
  {
    id: "test-2",
    clientName: "Vikram & Sunita Reddy",
    eventTitle: "Traditional Royal Vedic Wedding",
    location: "Taj Falaknuma Palace, Hyderabad",
    rating: 5,
    quote: "They orchestrated our daughter's wedding with such poise. From the sacred mandap to the royal Baraat, our 600 guests were left spellbound.",
    story: "Every Vedic ritual was respected with authentic warmth and beauty.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    eventImage: "https://images.unsplash.com/photo-1640745692250-db63545f4eef?auto=format&fit=crop&w=600&q=80",
    date: "December 2025"
  },
  {
    id: "test-3",
    clientName: "Pooja & Sameer Kapoor",
    eventTitle: "50th Golden Jubilee Birthday Gala",
    location: "The Leela Palace, Bengaluru",
    rating: 5,
    quote: "The 50th birthday celebration RIVAAYAT produced was spectacular! The decor, live music, and dessert wall made it an unforgettable night.",
    story: "Total peace of mind from invitations to the midnight party wrap-up.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    eventImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
    date: "November 2025"
  }
];

export const FAQ_ITEMS = [
  {
    q: "What types of events do you manage?",
    a: "We produce Corporate Events (Foundation Days, Annual Days, Conferences, Awards), Royal Weddings, Milestone Birthdays, and Live Concerts across India."
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking 3 to 6 months in advance for major events, though our rapid-response team can also execute events on shorter timelines."
  },
  {
    q: "Do you handle complete audiovisuals and staging?",
    a: "Yes. We manage turnkey production: 8K LED walls, stage lighting, concert sound engineering, emcees, and traditional Diya lighting setups."
  },
  {
    q: "Which cities do you operate in?",
    a: "Our core hubs are Hyderabad, Mumbai, Bengaluru, and New Delhi, executing events across all major Indian cities."
  }
];
