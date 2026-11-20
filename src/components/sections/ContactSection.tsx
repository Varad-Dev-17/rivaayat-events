import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BRAND, FAQ_ITEMS } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Corporate Foundation Day, Office Party or Annual Awards',
    eventDate: '',
    guestCount: '250 - 500 Guests',
    destination: 'Hyderabad',
    visionNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E5A84B', '#F2CE98', '#D49333', '#FFFFFF'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Inquiries"
          title="Plan Your Celebration"
          highlight="With RIVAAYAT"
          subtitle="Connect with our experienced event directors to bring your celebration, corporate summit, or wedding to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Direct Concierge & Offices on Pure White */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-rangoli-bg p-8 border border-rangoli-border shadow-sm">
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold block mb-1">
                Private Client Concierge
              </span>
              <h3 className="font-heading text-2xl text-charcoal mb-6 font-semibold">
                RIVAAYAT Office Hubs
              </h3>

              <div className="space-y-5 text-sm text-charcoal font-normal">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-rangoli-border text-amber-600 shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal-muted uppercase">Phone Hotline</p>
                    <a href={`tel:${BRAND.phone}`} className="text-base text-charcoal hover:text-amber-600 transition-colors font-medium">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-rangoli-border text-amber-600 shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal-muted uppercase">WhatsApp Concierge</p>
                    <a href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-base text-charcoal hover:text-amber-600 transition-colors font-medium">
                      {BRAND.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white border border-rangoli-border text-amber-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal-muted uppercase">Email Inquiries</p>
                    <a href={`mailto:${BRAND.email}`} className="text-base text-charcoal hover:text-amber-600 transition-colors font-medium">
                      {BRAND.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-rangoli-border">
                <p className="text-xs uppercase tracking-wider text-charcoal-muted font-semibold mb-3">
                  Key Office Locations
                </p>
                <div className="space-y-2.5">
                  {BRAND.addresses.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-charcoal font-medium mr-1">{item.city}:</strong>
                        <span>{item.address}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Event Inquiry Form on Pure White */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-rangoli-border shadow-md p-6 sm:p-10">
              
              {isSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-semibold mb-2">
                    Dhanyavaad, {formData.fullName || 'Valued Guest'}
                  </h3>
                  <p className="text-base text-charcoal-muted max-w-md mx-auto mb-6 leading-relaxed font-light">
                    Your celebration inquiry for <strong>{formData.eventType}</strong> has been received by our lead event directors. We will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        eventType: 'Corporate Foundation Day, Office Party or Annual Awards',
                        eventDate: '',
                        guestCount: '250 - 500 Guests',
                        destination: 'Hyderabad',
                        visionNotes: '',
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-amber-600 hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-rangoli-border pb-3 mb-4">
                    <h3 className="font-heading text-xl sm:text-2xl text-charcoal font-semibold">
                      Request Event Consultation
                    </h3>
                    <p className="text-xs text-charcoal-muted font-light mt-0.5">
                      Tell us about your event vision, dates, and requirements.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. radhika@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Event Discipline
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      >
                        <option>Corporate Foundation Day, Office Party or Annual Awards</option>
                        <option>Royal Vedic Wedding & Pre-Wedding Functions</option>
                        <option>Milestone Birthday Party or Jubilee Celebration</option>
                        <option>Live Music Concert, Sufi Mehfil or Cultural Festival</option>
                        <option>Royal Banquet, Exhibition or Social Soirée</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Anticipated Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors"
                      >
                        <option>50 - 150 Guests</option>
                        <option>150 - 350 Guests</option>
                        <option>350 - 750 Guests</option>
                        <option>750 - 1500+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">
                      Celebration Specifics / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.visionNotes}
                      onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                      placeholder="Share details of your venue preferences, specific rituals, keynote themes, or any special requests..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-rangoli-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-sm text-charcoal transition-colors resize-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-rangoli justify-center py-3.5"
                  >
                    {isSubmitting ? 'Transmitting Event Brief...' : 'Submit Event Brief'}
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-rangoli-border">
          <h3 className="font-heading text-2xl text-charcoal text-center font-semibold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-rangoli-border overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-heading text-base sm:text-lg text-charcoal font-medium">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 text-amber-600">
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-sm text-charcoal-muted font-light leading-relaxed border-t border-rangoli-border/40">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
