import React from 'react';
import { MapPin, Phone, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE_1,
  SECONDARY_PHONE_2,
  PROPRIETOR_NAME,
  formatPhoneNumber,
} from '../utils/booking';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#1F0307] text-[#FAF6EE] border-t border-[#D4AF37]/30 pb-20 sm:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Address (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8F6A17] flex items-center justify-center text-[#2A050B] font-bold text-xl shadow border border-[#F5E5AB]/40">
                ॐ
              </span>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  ॐ शिवशक्ति मैरिज हॉल
                </h3>
                <span className="text-xs text-[#F5E5AB]/80 tracking-wider">
                  Om Shivshakti Marriage Hall
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light max-w-md">
              {lang === 'hi'
                ? 'राजाउली, नवादा में विवाह, तिलक, रिसेप्शन और समस्त पारिवारिक आयोजनों का प्रतिष्ठित एवं भव्य उत्सव स्थल।'
                : 'A distinguished celebration destination for weddings, tilak ceremonies, receptions, and milestones in Rajauli, Nawada.'}
            </p>

            <div className="flex items-start gap-2.5 pt-2 text-xs sm:text-sm text-[#F5E5AB]/90">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Simarkol Hanuman Mandir ke paas, Rajauli, Nawada, Bihar, India</span>
            </div>

            <div className="text-xs text-white/80">
              <span className="text-[#F5E5AB] font-medium">{lang === 'hi' ? 'संचालक: ' : 'Proprietor: '}</span>
              <strong className="text-white font-semibold">{PROPRIETOR_NAME}</strong>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#F5E5AB] border-b border-white/10 pb-2">
              {lang === 'hi' ? 'त्वरित लिंक (Quick Links)' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'हॉल परिचय (About)' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'कार्यक्रम व सुविधाएं (Services)' : 'Services & Occasions'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'फोटो गैलरी (Gallery)' : 'Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'स्थान व रास्ता (Location)' : 'Location & Map'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5E5AB] transition-colors">
                  {lang === 'hi' ? 'संपर्क व बुकिंग (Contact)' : 'Contact & Booking'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Numbers (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#F5E5AB] border-b border-white/10 pb-2">
              {lang === 'hi' ? 'संपर्क सूत्र (Contact Numbers)' : 'Booking Phone Numbers'}
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <div className="text-[10px] text-[#F5E5AB]">Primary Booking (Call / WhatsApp)</div>
                  <div className="font-mono text-sm font-bold text-white">{formatPhoneNumber(PRIMARY_PHONE)}</div>
                </div>
              </a>

              <a
                href={`tel:${SECONDARY_PHONE_1}`}
                className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white/70" />
                <div>
                  <div className="text-[10px] text-white/70">Alternate Contact 1</div>
                  <div className="font-mono text-xs font-semibold text-white">{formatPhoneNumber(SECONDARY_PHONE_1)}</div>
                </div>
              </a>

              <a
                href={`tel:${SECONDARY_PHONE_2}`}
                className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white/70" />
                <div>
                  <div className="text-[10px] text-white/70">Alternate Contact 2</div>
                  <div className="font-mono text-xs font-semibold text-white">{formatPhoneNumber(SECONDARY_PHONE_2)}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO Keywords Natural Strip */}
        <div className="py-6 border-b border-white/10 text-center">
          <p className="text-[11px] text-white/50 leading-relaxed max-w-4xl mx-auto">
            <Sparkles className="w-3 h-3 inline mr-1 text-[#D4AF37]/70" />
            <span className="text-[#F5E5AB]/70 font-semibold">Local Search & Venue Directory:</span>{' '}
            Marriage Hall in Rajauli · Marriage Hall in Nawada · Wedding Venue Rajauli · Wedding Hall Nawada ·
            Om Shivshakti Marriage Hall · Rajauli Marriage Hall · Shaadi Hall Rajauli · Simarkol Hanuman Mandir
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© 2026 Om Shivshakti Marriage Hall. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for auspicious celebrations in Rajauli, Nawada</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
