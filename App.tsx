/**
 * Om Shivshakti Marriage Hall (Rajauli, Nawada, Bihar)
 * Premium Indian Wedding & Event Venue Web Application
 * Owner: Pro. Abhay Kishor Prasad
 */

import { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EventCalculator } from './components/EventCalculator';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [prefilledBooking, setPrefilledBooking] = useState<{
    eventType: string;
    guests: string;
  } | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPrefilledBooking({
      eventType: serviceName,
      guests: '350',
    });
    scrollToContact();
  };

  const handleApplyCalculatorToBooking = (details: { eventType: string; guests: string }) => {
    setPrefilledBooking(details);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#4A0E17]">
      {/* Sticky Header */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onBookClick={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero lang={lang} onBookClick={scrollToContact} />

        {/* 2. About Section */}
        <About lang={lang} onBookClick={scrollToContact} />

        {/* 3. Services / Events Section */}
        <Services
          lang={lang}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 4. Why Choose Us & Amenities Section */}
        <WhyChooseUs lang={lang} />

        {/* 5. Interactive Capacity & Event Planning Calculator */}
        <EventCalculator
          lang={lang}
          onApplyToBooking={handleApplyCalculatorToBooking}
        />

        {/* 6. Masonry Gallery with Lightbox Modal */}
        <Gallery lang={lang} />

        {/* 7. Location & Directions Section */}
        <LocationSection lang={lang} />

        {/* 8. Contact & Booking Form Section */}
        <ContactSection
          lang={lang}
          prefilledEvent={prefilledBooking}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions lang={lang} onBookClick={scrollToContact} />
    </div>
  );
}
