import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Language } from '../types';
import { PRIMARY_PHONE } from '../utils/booking';

interface FloatingActionsProps {
  lang: Language;
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, onBookClick }) => {
  const whatsAppUrl = `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(
    'नमस्ते, ॐ शिवशक्ति मैरिज हॉल (राजाउली) में मुझे वेन्यू बुकिंग के लिए पूछताछ करनी है।'
  )}`;

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Bottom-Right) */}
      <div className="fixed bottom-6 right-5 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl border border-emerald-300/40 hover:scale-105 active:scale-95 transition-all duration-200"
          title="Chat on WhatsApp (8409819430)"
          aria-label="Chat on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold group-hover:max-w-xs transition-all duration-300 px-0 group-hover:px-1">
            WhatsApp
          </span>
          <MessageCircle className="w-5 h-5 text-white" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="group flex items-center gap-2 px-3.5 py-3 rounded-full bg-gradient-to-r from-[#4A0E17] to-[#3B0710] hover:from-[#670D1F] hover:to-[#4A0E17] text-[#F5E5AB] shadow-xl hover:shadow-2xl border border-[#D4AF37]/60 hover:scale-105 active:scale-95 transition-all duration-200"
          title="Call Now (8409819430)"
          aria-label="Call Now"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold group-hover:max-w-xs transition-all duration-300 px-0 group-hover:px-1">
            {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
          </span>
          <Phone className="w-5 h-5 text-[#D4AF37]" />
        </a>
      </div>

      {/* Mobile Bottom Fixed Quick-Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#26050B]/95 backdrop-blur-md border-t border-[#D4AF37]/30 px-3 py-2 shadow-2xl flex items-center gap-2">
        {/* Call Button */}
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#4A0E17] text-white text-xs font-semibold border border-[#D4AF37]/40 shadow active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{lang === 'hi' ? 'कॉल 8409819430' : 'Call 8409819430'}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold shadow active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Book Button */}
        <button
          onClick={onBookClick}
          className="inline-flex items-center justify-center p-2.5 rounded-lg bg-gradient-to-r from-[#F5E5AB] to-[#D4AF37] text-[#29050B] shadow active:scale-95 transition-transform"
          aria-label="Open Booking Form"
          title="Book"
        >
          <Calendar className="w-4 h-4 text-[#29050B]" />
        </button>
      </div>
    </>
  );
};
