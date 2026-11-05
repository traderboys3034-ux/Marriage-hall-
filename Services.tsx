import React from 'react';
import {
  HeartHandshake,
  Sparkles,
  Crown,
  Flame,
  Users,
  Calendar,
  MessageCircle,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { SERVICES } from '../data/content';
import { generateQuickServiceWhatsAppUrl } from '../utils/booking';

interface ServicesProps {
  lang: Language;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectServiceForBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3.5 py-1 rounded-full border border-[#881329]/20">
            {lang === 'hi' ? 'हमारी सेवाएं एवं आयोजन' : 'Our Services & Occasions'}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#3B0710] tracking-tight mt-3">
            {lang === 'hi' ? 'हर शुभ अवसर के लिए सर्वोत्तम सुविधाएं' : 'Tailored Packages for Every Auspicious Occasion'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#5C4D44] max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'शादी, तिलक से लेकर रिसेप्शन और पारिवारिक आयोजनों तक - हर रस्म को भव्य और गरिमामय बनाने के लिए हमारी समर्पित सेवाएं।'
              : 'From grand sacred weddings and traditional tilak ceremonies to reception parties and intimate family functions.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index) => {
            const whatsAppUrl = generateQuickServiceWhatsAppUrl(
              lang === 'hi' ? service.titleHi : service.titleEn
            );

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/25 hover:border-[#D4AF37] flex flex-col"
              >
                {/* Image Container with Aspect Ratio and Overlay */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#3B0710]">
                  <img
                    src={service.image}
                    alt={lang === 'hi' ? service.titleHi : service.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26050B] via-black/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-[#2C060D]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[#F5E5AB] text-xs font-semibold shadow">
                    {getIcon(service.icon)}
                    <span>0{index + 1}</span>
                  </div>

                  {/* Subtitle at image bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-medium text-[#F5E5AB] tracking-wide">
                      {lang === 'hi' ? service.subtitleHi : service.subtitleEn}
                    </p>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {lang === 'hi' ? service.titleHi : service.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-[#4E3E36] leading-relaxed mb-4">
                      {lang === 'hi' ? service.descriptionHi : service.descriptionEn}
                    </p>

                    {/* Feature Highlights Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {(lang === 'hi' ? service.highlightsHi : service.highlightsEn).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#3B2C24]">
                          <div className="w-4 h-4 rounded-full bg-[#FAF0D7] text-[#881329] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#EFE5D3] flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForBooking(lang === 'hi' ? service.titleHi : service.titleEn)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-[#3B0710] bg-[#FAF0D7] hover:bg-[#F3E2B8] border border-[#D4AF37]/40 transition-colors"
                    >
                      <span>{lang === 'hi' ? 'बुकिंग पूछताछ' : 'Enquire'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#881329]" />
                    </button>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                      title={lang === 'hi' ? 'व्हाट्सएप पर जानकारी लें' : 'Ask on WhatsApp'}
                      aria-label="Ask on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
