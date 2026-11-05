import React from 'react';
import {
  MapPin,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Sliders,
  Award,
  Zap,
  Home,
  Utensils,
  Car,
  UserCheck,
} from 'lucide-react';
import { Language } from '../types';
import { WHY_CHOOSE_ITEMS, AMENITIES } from '../data/content';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#F5E5AB]" />;
      case 'rooms':
        return <Home className="w-5 h-5 text-[#F5E5AB]" />;
      case 'dining':
        return <Utensils className="w-5 h-5 text-[#F5E5AB]" />;
      case 'parking':
        return <Car className="w-5 h-5 text-[#F5E5AB]" />;
      case 'location':
        return <MapPin className="w-5 h-5 text-[#F5E5AB]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#F5E5AB]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3.5 py-1 rounded-full border border-[#881329]/20">
            {lang === 'hi' ? 'हमारी विशेषताएं' : 'Key Advantages'}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#3B0710] tracking-tight mt-3">
            {lang === 'hi'
              ? 'Why Choose Om Shivshakti Marriage Hall?'
              : 'Why Choose Om Shivshakti Marriage Hall?'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#5C4D44] max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'राजाउली, नवादा में सबसे भरोसेमंद और सुव्यवस्थित मैरिज हॉल, जहां आपके पारिवारिक मान-सम्मान का पूरा ध्यान रखा जाता है।'
              : 'The most trusted and professionally managed marriage hall in Rajauli, Nawada offering comfort, dignity, and prestige.'}
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#D4AF37]/25 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A0E17] to-[#26050B] flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#3B0710] mb-2.5 group-hover:text-[#881329] transition-colors">
                {lang === 'hi' ? item.titleHi : item.titleEn}
              </h3>
              <p className="text-sm text-[#5C4D44] leading-relaxed">
                {lang === 'hi' ? item.descHi : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Essential Amenities & Facilities Showcase (Dark Maroon Accent Banner) */}
        <div className="bg-gradient-to-br from-[#3B0710] via-[#4A0E17] to-[#26050B] rounded-3xl p-7 sm:p-12 text-white shadow-2xl border border-[#D4AF37]/40 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#F5E5AB] font-semibold">
                {lang === 'hi' ? 'परिसर की प्रमुख सुविधाएं' : 'Venue Amenities & Infrastructure'}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-white mt-2">
                {lang === 'hi'
                  ? 'अतिथियों की सुविधा और सुखद अनुभव के लिए हर व्यवस्था'
                  : 'Complete Infrastructure for a Seamless Experience'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AMENITIES.map((amenity) => (
                <div
                  key={amenity.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mb-3">
                    {getAmenityIcon(amenity.id)}
                  </div>
                  <h4 className="font-semibold text-white text-base mb-1.5 font-display">
                    {lang === 'hi' ? amenity.titleHi : amenity.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {lang === 'hi' ? amenity.descHi : amenity.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
