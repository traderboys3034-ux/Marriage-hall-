import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { Language } from '../types';
import { PRIMARY_PHONE, formatPhoneNumber } from '../utils/booking';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelHi: 'होम', labelEn: 'Home' },
    { href: '#about', labelHi: 'परिचय', labelEn: 'About' },
    { href: '#services', labelHi: 'सुविधाएं', labelEn: 'Services' },
    { href: '#gallery', labelHi: 'गैलरी', labelEn: 'Gallery' },
    { href: '#location', labelHi: 'स्थान', labelEn: 'Location' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#32060D]/95 backdrop-blur-md py-2.5 shadow-xl border-b border-[#D4AF37]/30'
          : 'bg-gradient-to-b from-[#200408]/90 via-[#200408]/60 to-transparent py-4 border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-white whitespace-nowrap shrink min-w-0 focus:outline-none"
            aria-label="Om Shivshakti Marriage Hall Home"
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8F6A17] flex items-center justify-center text-[#3B0710] font-bold text-base sm:text-xl shadow-md border border-[#F5E5AB]/40 group-hover:scale-105 transition-transform shrink-0">
              ॐ
            </span>
            <div className="flex flex-col truncate">
              <span className="font-display font-bold text-sm sm:text-lg tracking-wide text-white group-hover:text-[#F5E5AB] transition-colors leading-tight truncate">
                {lang === 'hi' ? 'ॐ शिवशक्ति' : 'Om Shivshakti'}
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#F5E5AB]/80 tracking-wider truncate">
                Rajauli (Nawada)
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-white/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F5E5AB] transition-colors tracking-wide relative py-1 text-sm whitespace-nowrap shrink-0 group"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Language Switcher + Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="px-2 py-1 rounded-md border border-[#D4AF37]/40 bg-[#4A0E17]/80 text-[11px] sm:text-xs font-semibold text-[#F5E5AB] hover:bg-[#4A0E17] hover:border-[#D4AF37] transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              title={lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
              aria-label="Toggle language"
            >
              {lang === 'hi' ? 'ENG' : 'हिन्दी'}
            </button>

            {/* Quick Call Icon (Desktop & Tablet) */}
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all whitespace-nowrap shrink-0"
              title="Call primary booking line"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono text-xs">{formatPhoneNumber(PRIMARY_PHONE)}</span>
            </a>

            {/* Primary Action Button (Desktop & Tablet) */}
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#2A050B] bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] rounded-md shadow hover:brightness-105 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2A050B]" />
              <span>{lang === 'hi' ? 'बुक करें' : 'Book Now'}</span>
            </button>

            {/* Mobile Drawer Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-[#F5E5AB] hover:text-white hover:bg-white/10 transition-colors focus:outline-none shrink-0"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2C060D] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 py-2 text-base font-medium text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-white/10 text-white/90 hover:text-[#F5E5AB] transition-colors border-b border-white/5"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>कॉल करें: {PRIMARY_PHONE}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] text-[#2A050B] font-semibold text-sm shadow hover:brightness-105"
            >
              <CalendarCheck className="w-4 h-4 text-[#2A050B]" />
              <span>{lang === 'hi' ? 'अभी बुकिंग फॉर्म खोलें' : 'Open Booking Form'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
