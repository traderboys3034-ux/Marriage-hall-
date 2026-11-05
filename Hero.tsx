import React, { useEffect, useRef } from 'react';
import { Calendar, Phone, MessageCircle, MapPin, Sparkles, ShieldCheck, Users, Utensils } from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGE, HALL_INFO } from '../data/content';
import { PRIMARY_PHONE } from '../utils/booking';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle floating golden dust particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 32 subtle golden spark particles
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      maxAlpha: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.pulseSpeed;

        if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 229, 171, ${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const whatsAppHeroUrl = `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(
    'नमस्ते, मुझे ॐ शिवशक्ति मैरिज हॉल (राजाउली, नवादा) में कार्यक्रम बुकिंग की तारीखों और व्यवस्था की जानकारी चाहिए।'
  )}`;

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#240409]">
      {/* Background Image with Dark Royal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Om Shivshakti Marriage Hall Grand Stage Decor Rajauli"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Layered luxury scrim for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#200408] via-[#2D060E]/80 to-[#1A0307]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,2,5,0.7)_100%)]" />
      </div>

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#3B0710]/80 backdrop-blur-sm text-[#F5E5AB] text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{lang === 'hi' ? 'हर खास उत्सव का सर्वोत्तम स्थल' : 'Perfect Venue for Every Celebration'}</span>
        </div>

        {/* Sacred Heading */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-md max-w-4xl leading-[1.15]">
          {lang === 'hi' ? (
            <>
              <span className="block text-[#F5E5AB] mb-1">ॐ शिवशक्ति</span>
              <span className="gold-gradient-text">मैरिज हॉल</span>
            </>
          ) : (
            <>
              <span className="block text-[#F5E5AB] mb-1">OM SHIVSHAKTI</span>
              <span className="gold-gradient-text">MARRIAGE HALL</span>
            </>
          )}
        </h1>

        {/* Location Subheading */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-sm sm:text-base font-medium text-[#F5E5AB]/90 tracking-wide">
          <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            {lang === 'hi'
              ? 'Simarkol Hanuman Mandir ke paas, Rajauli, Nawada, Bihar'
              : 'Near Simarkol Hanuman Mandir, Rajauli, Nawada, Bihar'}
          </span>
        </div>

        {/* Subtitle / Value Proposition */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl text-center leading-relaxed font-light">
          {lang === 'hi'
            ? 'Shaadi, Tilak, Reception, Anniversary aur har khaas mauke ke liye ek perfect venue.'
            : 'The premier luxury destination for Weddings, Tilak, Receptions, Anniversaries, and every special family celebration.'}
        </p>

        {/* Owner Trust Badge */}
        <div className="mt-3 text-xs sm:text-sm text-[#E5C05B]/85 bg-black/40 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
          {lang === 'hi' ? 'संचालक / व्यवस्थापक: ' : 'Owner & Proprietor: '}
          <strong className="text-white font-semibold">{HALL_INFO.proprietor}</strong>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg px-2">
          {/* Book Your Event */}
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#29050B] bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#29050B]" />
            <span>{lang === 'hi' ? 'तारीख बुक करें' : 'Book Your Event'}</span>
          </button>

          {/* Call Now */}
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#4A0E17]/90 hover:bg-[#670D1F] border border-[#D4AF37]/60 rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={whatsAppHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 border border-emerald-400/40 rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>{lang === 'hi' ? 'व्हाट्सएप करें' : 'WhatsApp Us'}</span>
          </a>
        </div>
      </div>

      {/* 4-Item Feature Strip Below Hero */}
      <div className="relative z-20 border-t border-[#D4AF37]/30 bg-[#1D0307]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center pt-2 md:pt-0">
              <Users className="w-5 h-5 text-[#D4AF37] mb-1.5" />
              <span className="text-white font-bold text-sm sm:text-base font-display">1000+ क्षमता</span>
              <span className="text-xs text-[#F5E5AB]/75">
                {lang === 'hi' ? 'भव्य आयोजन हेतु' : 'Guest Capacity'}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center pt-2 md:pt-0">
              <Sparkles className="w-5 h-5 text-[#D4AF37] mb-1.5" />
              <span className="text-white font-bold text-sm sm:text-base font-display">शाही स्टेज व मंडप</span>
              <span className="text-xs text-[#F5E5AB]/75">
                {lang === 'hi' ? 'आकर्षक फ्लोरल डेकोर' : 'Royal Stage & Mandap'}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center pt-2 md:pt-0">
              <Utensils className="w-5 h-5 text-[#D4AF37] mb-1.5" />
              <span className="text-white font-bold text-sm sm:text-base font-display">विशाल डाइनिंग स्पेस</span>
              <span className="text-xs text-[#F5E5AB]/75">
                {lang === 'hi' ? 'स्वच्छ बुफे व रसोई' : 'Hygienic Banquet Dining'}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center pt-2 md:pt-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-1.5" />
              <span className="text-white font-bold text-sm sm:text-base font-display">24/7 पावर व सुरक्षा</span>
              <span className="text-xs text-[#F5E5AB]/75">
                {lang === 'hi' ? 'फुल जनरेटर बैकअप' : '24/7 Generator Backup'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
