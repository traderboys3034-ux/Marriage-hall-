import React from 'react';
import { Sparkles, Calendar, CheckCircle2, UserCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { ENTRANCE_IMAGE, RECEPTION_IMAGE, HALL_INFO } from '../data/content';

interface AboutProps {
  lang: Language;
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onBookClick }) => {
  const featureCards = [
    {
      titleHi: 'सुंदर व भव्य वेन्यू (Beautiful Venue)',
      titleEn: 'Beautiful & Luxurious Venue',
      descHi: 'शाही सजावट, क्रिस्टल झूमर, आधुनिक स्टेज व पवित्र विवाह मंडप जो आपके हर उत्सव को यादगार और फोटो-परफेक्ट बनाते हैं।',
      descEn: 'Regal maroon and gold drapes, crystal chandeliers, photogenic stage, and sacred mandap designed for timeless celebrations.',
      icon: Sparkles,
      tagHi: 'शाही सौंदर्य',
      tagEn: 'Royal Ambience',
    },
    {
      titleHi: 'हर अवसर के लिए उपयुक्त (Perfect for Every Occasion)',
      titleEn: 'Perfect for Every Occasion',
      descHi: 'शादी, तिलक, रिसेप्शन, सालगिरह, सगाई, जन्मदिन या मुंडन - छोटे व बड़े हर उत्सव के लिए सुविधाजनक व्यवस्था।',
      descEn: 'From grand weddings and auspicious tilaks to intimate anniversaries, birthdays, and devotional gatherings.',
      icon: Calendar,
      tagHi: 'बहुमुखी आयोजन',
      tagEn: 'Versatile Spaces',
    },
    {
      titleHi: 'सहज व पारदर्शी बुकिंग (Easy Booking)',
      titleEn: 'Easy & Hassle-Free Booking',
      descHi: 'सीधे प्रो. अभय किशोर प्रसाद जी से संपर्क करें। बिना किसी बिचौलिये या छिपे शुल्क के पारदर्शी व त्वरित बुकिंग।',
      descEn: 'Direct booking coordination with proprietor Pro. Abhay Kishor Prasad with transparent terms and dedicated personal support.',
      icon: CheckCircle2,
      tagHi: 'विश्वसनीय सेवा',
      tagEn: 'Direct Trust',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF6EE] relative overflow-hidden">
      {/* Subtle floral background pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3 py-1 rounded-full border border-[#881329]/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-[#881329]" />
            <span>{lang === 'hi' ? 'हमारा परिचय' : 'Our Story'}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#3B0710] tracking-tight">
            {lang === 'hi' ? 'About Om Shivshakti Marriage Hall' : 'About Om Shivshakti Marriage Hall'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-6" />
          
          <p className="text-base sm:text-lg text-[#4A3B32] leading-relaxed font-normal">
            {lang === 'hi'
              ? 'Om Shivshakti Marriage Hall, Rajauli, Nawada mein shaadi, tilak, reception, anniversary aur anya khaas avsaron ke liye ek convenient aur comfortable venue hai. Hamara goal hai ki aapke special occasion ko memorable aur hassle-free banaya ja sake.'
              : 'Om Shivshakti Marriage Hall in Rajauli, Nawada is a premier, comfortable venue for weddings, tilak, receptions, anniversaries, and family milestones. Our commitment is to ensure your sacred celebrations are seamless, joyous, and truly memorable.'}
          </p>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/25 hover:border-[#D4AF37] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A0E17] to-[#26050B] text-[#F5E5AB] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <span className="text-xs font-semibold text-[#881329] bg-[#881329]/5 px-2.5 py-1 rounded-md border border-[#881329]/15">
                      {lang === 'hi' ? card.tagHi : card.tagEn}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#3B0710] mb-2.5 group-hover:text-[#881329] transition-colors">
                    {lang === 'hi' ? card.titleHi : card.titleEn}
                  </h3>
                  <p className="text-sm text-[#5C4D44] leading-relaxed">
                    {lang === 'hi' ? card.descHi : card.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBE1CB] flex items-center text-xs font-semibold text-[#881329] group-hover:text-[#D4AF37] transition-colors">
                  <span>{lang === 'hi' ? 'विस्तार से जानें →' : 'Learn More →'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proprietor Trust Banner & Visual Showcase */}
        <div className="mt-16 bg-gradient-to-r from-[#3B0710] via-[#4A0E17] to-[#26050B] rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-[#D4AF37]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Showcase (Images) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/30 h-44 sm:h-52">
                <img
                  src={ENTRANCE_IMAGE}
                  alt="Om Shivshakti Marriage Hall Rajauli Entrance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-[10px] text-[#F5E5AB] px-2 py-0.5 rounded">
                  {lang === 'hi' ? 'भव्य प्रवेश द्वार' : 'Grand Entrance'}
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/30 h-44 sm:h-52">
                <img
                  src={RECEPTION_IMAGE}
                  alt="Reception Stage Setup Om Shivshakti"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-[10px] text-[#F5E5AB] px-2 py-0.5 rounded">
                  {lang === 'hi' ? 'शाही स्टेज' : 'Royal Stage'}
                </span>
              </div>
            </div>

            {/* Proprietor Message */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 text-[#F5E5AB] text-xs font-semibold uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === 'hi' ? 'व्यवस्थापक का संदेश' : "Proprietor's Welcome Note"}</span>
              </div>
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                {lang === 'hi'
                  ? 'आपके परिवार का हर उत्सव, हमारा अपना उत्सव है'
                  : 'Every Family Milestone Is Welcomed with Utmost Reverence'}
              </h3>
              
              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light mb-6">
                {lang === 'hi'
                  ? 'हमारा उद्देश्य केवल हॉल प्रदान करना नहीं, बल्कि आपकी खुशी और प्रतिष्ठा में सहभागी बनना है। सिमरकोल हनुमान जी के आशीर्वाद से राजाउली में हम हर परिवार को सुलभ, भव्य और पारिवारिक गरिमा के अनुरूप सेवाएं देने के लिए समर्पित हैं।'
                  : 'Our sacred goal is not just providing a venue, but upholding your family prestige with warm Indian hospitality. Blessed by nearby Simarkol Hanuman Mandir, we ensure every ceremony is conducted seamlessly.'}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
                <div>
                  <div className="font-bold text-[#F5E5AB] text-base">{HALL_INFO.proprietor}</div>
                  <div className="text-xs text-white/70">
                    {lang === 'hi' ? 'संचालक एवं व्यवस्थापक, ॐ शिवशक्ति मैरिज हॉल' : 'Owner & Proprietor, Rajauli (Nawada)'}
                  </div>
                </div>

                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] text-[#26050B] font-semibold text-xs sm:text-sm shadow hover:brightness-105 transition-all"
                >
                  {lang === 'hi' ? 'मुलाकात व बुकिंग तय करें' : 'Schedule Venue Visit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
