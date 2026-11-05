import React, { useState } from 'react';
import { Users, Calculator, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { estimateHallArrangement, PRIMARY_PHONE } from '../utils/booking';

interface EventCalculatorProps {
  lang: Language;
  onApplyToBooking: (details: { eventType: string; guests: string }) => void;
}

export const EventCalculator: React.FC<EventCalculatorProps> = ({ lang, onApplyToBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding Ceremony');
  const [guestCount, setGuestCount] = useState<number>(350);

  const eventOptions = [
    { id: 'Wedding Ceremony', labelHi: 'विवाह समारोह (Wedding)', labelEn: 'Wedding Ceremony' },
    { id: 'Tilak Ceremony', labelHi: 'तिलक समारोह (Tilak)', labelEn: 'Tilak Ceremony' },
    { id: 'Reception Party', labelHi: 'रिसेप्शन पार्टी (Reception)', labelEn: 'Reception Party' },
    { id: 'Anniversary', labelHi: 'सालगिरह उत्सव (Anniversary)', labelEn: 'Anniversary' },
    { id: 'Family Function', labelHi: 'पारिवारिक उत्सव (Family Event)', labelEn: 'Family Function' },
  ];

  const plan = estimateHallArrangement(guestCount);

  const handleWhatsAppQuickInquiry = () => {
    const text = `नमस्ते! मुझे ॐ शिवशक्ति मैरिज हॉल में *${selectedEvent}* के लिए *${guestCount} अतिथियों* की व्यवस्था और तारीख की उपलब्धता जाननी है।`;
    window.open(`https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF6EE] to-[#F3ECE0] border-y border-[#D4AF37]/25">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#D4AF37]/35">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EBE1CB]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#881329] bg-[#881329]/10 px-3 py-1 rounded-full mb-1">
                <Calculator className="w-3.5 h-3.5 text-[#881329]" />
                <span>{lang === 'hi' ? 'प्लानिंग कैलकुलेटर' : 'Event Capacity Planner'}</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#3B0710]">
                {lang === 'hi' ? 'अपने कार्यक्रम की अनुमानित व्यवस्था जानें' : 'Estimate Your Event Setup & Capacity'}
              </h3>
            </div>
            <div className="text-xs text-[#5C4D44] max-w-xs">
              {lang === 'hi'
                ? 'अतिथियों की संख्या चुनें और देखें कि हॉल में बैठने व खान-पान का क्या उत्तम प्रारूप रहेगा।'
                : 'Select guest volume to preview optimal hall zoning, seating, and catering turns.'}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Controls */}
            <div className="space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-2">
                  {lang === 'hi' ? '1. कार्यक्रम चुनें:' : '1. Select Event Type:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {eventOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedEvent(opt.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all border ${
                        selectedEvent === opt.id
                          ? 'bg-[#3B0710] text-[#F5E5AB] border-[#D4AF37] shadow-sm'
                          : 'bg-[#FAF7F2] text-[#3B0710] border-[#E5DAC6] hover:border-[#D4AF37]'
                      }`}
                    >
                      {lang === 'hi' ? opt.labelHi : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="guest-slider" className="text-xs font-bold uppercase tracking-wider text-[#3B0710]">
                    {lang === 'hi' ? '2. अनुमानित अतिथि (Guests):' : '2. Estimated Guests:'}
                  </label>
                  <span className="font-display font-extrabold text-xl text-[#881329] tabular-nums">
                    {guestCount} {lang === 'hi' ? 'लोग' : 'guests'}
                  </span>
                </div>
                <input
                  id="guest-slider"
                  type="range"
                  min="50"
                  max="1200"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#881329] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#786659] mt-1 tabular-nums">
                  <span>50</span>
                  <span>300</span>
                  <span>600</span>
                  <span>900</span>
                  <span>1200+</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#881329] mb-3">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === 'hi' ? 'सुझाई गई हॉल व्यवस्था' : 'Recommended Layout Recommendation'}</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-xl border border-[#EBE1CB]">
                    <span className="text-[11px] uppercase tracking-wider text-[#786659] block">
                      {lang === 'hi' ? 'हॉल एरिया व व्यवस्था' : 'Space Allocation'}
                    </span>
                    <strong className="text-sm sm:text-base text-[#3B0710] font-display">
                      {plan.recommendedHallArea}
                    </strong>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#EBE1CB]">
                    <span className="text-[11px] uppercase tracking-wider text-[#786659] block">
                      {lang === 'hi' ? 'स्टेज व मंडप सेटअप' : 'Stage Setup'}
                    </span>
                    <strong className="text-sm sm:text-base text-[#3B0710] font-display">
                      {plan.stageSetup}
                    </strong>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#EBE1CB]">
                    <span className="text-[11px] uppercase tracking-wider text-[#786659] block">
                      {lang === 'hi' ? 'डाइनिंग स्लॉट योजना' : 'Dining Turns'}
                    </span>
                    <strong className="text-sm sm:text-base text-[#3B0710] font-display">
                      {plan.diningBatches}{' '}
                      {lang === 'hi'
                        ? 'बैच में अतिथियों का सुगम भोजन'
                        : 'Simultaneous & Rolling Dining Batches'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-[#EBE1CB] flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onApplyToBooking({
                      eventType: selectedEvent,
                      guests: guestCount.toString(),
                    })
                  }
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#4A0E17] hover:bg-[#670D1F] transition-colors shadow"
                >
                  <span>{lang === 'hi' ? 'बुकिंग फॉर्म में भरें' : 'Apply to Booking Form'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5E5AB]" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuickInquiry}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर पूछें' : 'Ask on WhatsApp'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
