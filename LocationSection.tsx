import React from 'react';
import { MapPin, Navigation, Compass, Car, Phone } from 'lucide-react';
import { Language } from '../types';
import { HALL_INFO } from '../data/content';
import { PRIMARY_PHONE } from '../utils/booking';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Simarkol Hanuman Mandir Rajauli Nawada Bihar'
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3.5 py-1 rounded-full border border-[#881329]/20">
            <Compass className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
            {lang === 'hi' ? 'स्थान एवं पता' : 'Our Location'}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#3B0710] tracking-tight mt-3">
            {lang === 'hi' ? 'यहाँ कैसे पहुंचे (How to Reach Us)' : 'How to Reach the Venue'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#5C4D44] max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'सिमरकोल हनुमान मंदिर के पास, राजाउली (नवादा) - मुख्य सड़क से सुलभ संपर्क एवं वाहन पार्किंग।'
              : 'Located adjacent to Simarkol Hanuman Mandir, Rajauli (Nawada) with smooth highway access.'}
          </p>
        </div>

        {/* Location Grid: Details & Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 shadow-lg border border-[#D4AF37]/35 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A0E17] to-[#26050B] flex items-center justify-center text-[#F5E5AB] mb-6 shadow">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#3B0710] mb-2">
                {lang === 'hi' ? HALL_INFO.nameHindi : HALL_INFO.nameEnglish}
              </h3>

              <div className="text-base text-[#670D1F] font-semibold mb-6">
                Simarkol Hanuman Mandir ke paas, Rajauli (Nawada), Bihar
              </div>

              {/* Landmark Guidance Items */}
              <div className="space-y-4 pt-4 border-t border-[#EBE1CB]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0D7] text-[#881329] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3B0710] uppercase">
                      {lang === 'hi' ? 'प्रमुख लैंडमार्क' : 'Key Landmark'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C4D44]">
                      {lang === 'hi'
                        ? 'प्रसिद्ध सिमरकोल हनुमान मंदिर के बिल्कुल निकट।'
                        : 'Directly adjacent to the well-known Simarkol Hanuman Mandir.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0D7] text-[#881329] flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3B0710] uppercase">
                      {lang === 'hi' ? 'हाईवे व सड़क कनेक्टिविटी' : 'Road Connectivity'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C4D44]">
                      {lang === 'hi'
                        ? 'नवादा, कोडरमा, गया व रजौली मुख्य मार्ग (NH-31) से सीधा सुगम रास्ता।'
                        : 'Direct smooth approach road connected to the NH-31 Nawada-Koderma highway corridor.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0D7] text-[#881329] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3B0710] uppercase">
                      {lang === 'hi' ? 'रास्ता भटकने पर तत्काल सहायता' : 'Route Guidance Helpline'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C4D44]">
                      {lang === 'hi' ? 'कॉल करें:' : 'Call:'}{' '}
                      <a href={`tel:${PRIMARY_PHONE}`} className="font-semibold text-[#881329] hover:underline">
                        {PRIMARY_PHONE}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-8 pt-5 border-t border-[#EBE1CB]">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base text-[#29050B] bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] shadow hover:brightness-105 active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#29050B]" />
                <span>{lang === 'hi' ? 'गूगल मैप्स पर रास्ता देखें (Get Directions)' : 'Get Directions on Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed / Clean Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-[#D4AF37]/35 bg-white relative flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px]">
              {/* Interactive OpenStreetMap / Google Maps iframe placeholder centered on Rajauli, Bihar */}
              <iframe
                title="Om Shivshakti Marriage Hall Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.65778877543!2d85.4850239!3d24.6542152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f37912d1b7b7a1%3A0x6b42b78bf23bcda9!2sRajauli%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Elegant floating address overlay at map bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-[#2C060D]/90 backdrop-blur-md text-white p-4 rounded-xl border border-[#D4AF37]/40 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-xs font-bold text-[#F5E5AB] font-display">ॐ शिवशक्ति मैरिज हॉल</span>
                </div>
                <p className="text-xs text-white/90">
                  Simarkol Hanuman Mandir ke paas, Rajauli, Nawada, Bihar
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#F5E5AB]/80 pt-2 border-t border-white/10">
                  <span>संचालक: Pro. Abhay Kishor Prasad</span>
                  <a href={`tel:${PRIMARY_PHONE}`} className="text-white underline hover:text-[#D4AF37]">
                    {PRIMARY_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
