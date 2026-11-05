import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Calendar,
  Send,
  User,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import {
  BookingFormData,
  validateBookingForm,
  generateWhatsAppBookingUrl,
  PRIMARY_PHONE,
  SECONDARY_PHONE_1,
  SECONDARY_PHONE_2,
  PROPRIETOR_NAME,
  formatPhoneNumber,
} from '../utils/booking';

interface ContactSectionProps {
  lang: Language;
  prefilledEvent?: { eventType: string; guests: string } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, prefilledEvent }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    eventType: 'Wedding Ceremony',
    eventDate: '',
    guestCount: '350',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRefNumber, setBookingRefNumber] = useState('');

  // Update if prefilled from calculator
  useEffect(() => {
    if (prefilledEvent) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledEvent.eventType || prev.eventType,
        guestCount: prefilledEvent.guests || prev.guestCount,
      }));
    }
  }, [prefilledEvent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Generate reference code
    const randomRef = `OSS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefNumber(randomRef);
    setIsSubmitted(true);
  };

  const handleOpenWhatsAppFromForm = () => {
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    const url = generateWhatsAppBookingUrl(formData);
    window.open(url, '_blank');
  };

  const whatsAppDirectUrl = `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(
    'नमस्ते, मुझे ॐ शिवशक्ति मैरिज हॉल (राजाउली, नवादा) में वेन्यू बुकिंग एवं तारीखों के बारे में जानकारी चाहिए।'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#881329] bg-[#881329]/10 px-3.5 py-1 rounded-full border border-[#881329]/20">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
            {lang === 'hi' ? 'संपर्क एवं बुकिंग' : 'Reservation & Contact'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#3B0710] tracking-tight mt-3">
            {lang === 'hi' ? 'Apne Special Day Ko Yaadgaar Banayein' : 'Make Your Special Day Truly Unforgettable'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-base sm:text-lg text-[#5C4D44] max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'Venue booking aur event details ke liye humse directly contact karein.'
              : 'Contact us directly for venue availability, customized decor, and hassle-free date reservations.'}
          </p>

          {/* Direct CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#4A0E17] hover:bg-[#670D1F] border border-[#D4AF37] shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {PRIMARY_PHONE}</span>
            </a>

            <a
              href={whatsAppDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 border border-emerald-400 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp {PRIMARY_PHONE}</span>
            </a>
          </div>
        </div>

        {/* Contact Numbers & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Numbers & Proprietor Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Proprietor Card */}
            <div className="bg-gradient-to-br from-[#3B0710] via-[#4A0E17] to-[#26050B] text-white rounded-3xl p-7 shadow-xl border border-[#D4AF37]/40">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5E5AB]">
                {lang === 'hi' ? 'संचालक / संपर्क सूत्र' : 'Proprietor & Host'}
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">{PROPRIETOR_NAME}</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-6">
                {lang === 'hi'
                  ? 'राजाउली में आपकी पारिवारिक प्रतिष्ठा और सुविधा के अनुरूप उत्तम विवाह स्थल। किसी भी पूछताछ के लिए निःसंकोच संपर्क करें।'
                  : 'Committed to upholding your family prestige with seamless event hospitality in Rajauli, Nawada.'}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/15">
                {/* Primary Number */}
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-[#D4AF37]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#29050B] flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#F5E5AB]">
                        {lang === 'hi' ? 'प्राथमिक बुकिंग नंबर (Primary)' : 'Primary Booking Line'}
                      </div>
                      <div className="font-mono text-base font-bold text-white tracking-wide">
                        {PRIMARY_PHONE}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#F5E5AB] group-hover:translate-x-1 transition-transform">
                    {lang === 'hi' ? 'कॉल करें →' : 'Call →'}
                  </span>
                </a>

                {/* Secondary Number 1 */}
                <a
                  href={`tel:${SECONDARY_PHONE_1}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 text-[#F5E5AB] flex items-center justify-center font-bold">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/70">
                        {lang === 'hi' ? 'अतिरिक्त संपर्क (Contact 2)' : 'Alternate Line 1'}
                      </div>
                      <div className="font-mono text-sm font-semibold text-white tracking-wide">
                        {SECONDARY_PHONE_1}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-white/70 group-hover:text-white">Call</span>
                </a>

                {/* Secondary Number 2 */}
                <a
                  href={`tel:${SECONDARY_PHONE_2}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 text-[#F5E5AB] flex items-center justify-center font-bold">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/70">
                        {lang === 'hi' ? 'अतिरिक्त संपर्क (Contact 3)' : 'Alternate Line 2'}
                      </div>
                      <div className="font-mono text-sm font-semibold text-white tracking-wide">
                        {SECONDARY_PHONE_2}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-white/70 group-hover:text-white">Call</span>
                </a>
              </div>
            </div>

            {/* Timings & Address Summary */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#D4AF37]/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0D7] text-[#881329] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3B0710]">
                    {lang === 'hi' ? 'मुलाकात व हॉल निरीक्षण समय' : 'Venue Visit & Enquiries'}
                  </h4>
                  <p className="text-xs text-[#5C4D44]">
                    {lang === 'hi' ? 'सोमवार - रविवार: प्रातः 8:00 बजे से रात्रि 11:00 बजे तक' : 'Mon - Sun: 8:00 AM - 11:00 PM'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#6F5B4E] leading-relaxed pt-3 border-t border-[#EBE1CB]">
                {lang === 'hi'
                  ? 'स्थान: सिमरकोल हनुमान मंदिर के पास, राजाउली, नवादा (बिहार)। बुकिंग से पहले आप कभी भी आकर हॉल और सुविधाओं का प्रत्यक्ष निरीक्षण कर सकते हैं।'
                  : 'Venue: Near Simarkol Hanuman Mandir, Rajauli, Nawada (Bihar). Families are warmly welcome to visit and inspect the premises beforehand.'}
              </p>
            </div>
          </div>

          {/* Right: Booking Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-[#D4AF37]/35">
            {isSubmitted ? (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Ref: {bookingRefNumber}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#3B0710] mt-3 mb-2">
                  {lang === 'hi' ? 'बुकिंग पूछताछ सफलतापूर्वक प्राप्त हुई!' : 'Booking Enquiry Received!'}
                </h3>
                <p className="text-sm text-[#5C4D44] max-w-md mx-auto mb-6">
                  {lang === 'hi'
                    ? `धन्यवाद ${formData.fullName}! आपके द्वारा दी गई तारीख (${formData.eventDate}) और कार्यक्रम (${formData.eventType}) के विवरण हमें मिल गए हैं। प्रो. अभय किशोर प्रसाद जी शीघ्र आपसे ${formatPhoneNumber(formData.phone)} पर संपर्क करेंगे।`
                    : `Thank you, ${formData.fullName}! Your enquiry for ${formData.eventType} on ${formData.eventDate} has been registered. Pro. Abhay Kishor Prasad will contact you shortly on ${formatPhoneNumber(formData.phone)}.`}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      const url = generateWhatsAppBookingUrl(formData);
                      window.open(url, '_blank');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'व्हाट्सएप पर भी भेजें' : 'Send via WhatsApp Too'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        eventType: 'Wedding Ceremony',
                        eventDate: '',
                        guestCount: '350',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#3B0710] bg-[#FAF6EE] hover:bg-[#F3ECE0] border border-[#D4AF37]/40 transition-colors"
                  >
                    <span>{lang === 'hi' ? 'अन्य पूछताछ भेजें' : 'Submit Another Enquiry'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#3B0710]">
                    {lang === 'hi' ? 'ऑनलाइन वेन्यू बुकिंग पूछताछ' : 'Venue Reservation Form'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#786659] mt-1">
                    {lang === 'hi'
                      ? 'कृपया सही जानकारी भरें ताकि हम तारीख की उपलब्धता सुनिश्चित कर सकें।'
                      : 'Please provide your event requirements to verify date availability and receive our best package quote.'}
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                    {lang === 'hi' ? 'आपका नाम (Full Name) *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6E]" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={lang === 'hi' ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#2C1810] bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-[#D4AF37]/30'
                      }`}
                      required
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Event Type in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                      {lang === 'hi' ? 'मोबाइल नंबर (Phone Number) *' : 'Mobile Number *'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6E]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={lang === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile number'}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#2C1810] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-[#D4AF37]/30'
                        }`}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                      {lang === 'hi' ? 'कार्यक्रम का प्रकार (Event Type) *' : 'Event Type *'}
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 text-sm text-[#2C1810] bg-white transition-all focus:outline-none"
                    >
                      <option value="Wedding Ceremony">Wedding Ceremony (विवाह संस्कार)</option>
                      <option value="Tilak Ceremony">Tilak Ceremony (तिलक समारोह)</option>
                      <option value="Reception">Reception (रिसेप्शन पार्टी)</option>
                      <option value="Anniversary">Anniversary (सालगिरह उत्सव)</option>
                      <option value="Family Functions">Family Functions (पारिवारिक उत्सव)</option>
                      <option value="Other Special Events">Other Special Events (अन्य विशेष आयोजन)</option>
                    </select>
                  </div>
                </div>

                {/* Event Date & Guest Count in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                      {lang === 'hi' ? 'कार्यक्रम की तारीख (Event Date) *' : 'Event Date *'}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6E]" />
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#2C1810] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.eventDate
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-[#D4AF37]/30'
                        }`}
                        required
                      />
                    </div>
                    {errors.eventDate && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label htmlFor="guestCount" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                      {lang === 'hi' ? 'अतिथियों की संख्या (Number of Guests) *' : 'Number of Guests *'}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6E]" />
                      <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        min="10"
                        max="2500"
                        placeholder="350"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#2C1810] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.guestCount
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-[#D4AF37]/30'
                        }`}
                        required
                      />
                    </div>
                    {errors.guestCount && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.guestCount}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#3B0710] mb-1.5">
                    {lang === 'hi' ? 'संदेश / विशेष आवश्यकताएं (Message)' : 'Special Requests or Requirements (Optional)'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      lang === 'hi'
                        ? 'उदा. डेकोरेशन, कैटरिंग व्यवस्था या कमरों की आवश्यकता...'
                        : 'e.g. Any special mandap themes, rooms needed, or catering space preferences...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DAC6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 text-sm text-[#2C1810] bg-white transition-all focus:outline-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-[#26050B] bg-gradient-to-r from-[#F5E5AB] via-[#D4AF37] to-[#C59B27] shadow hover:brightness-105 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4 text-[#26050B]" />
                    <span>{lang === 'hi' ? 'बुकिंग पूछताछ भेजें (Send Booking Enquiry)' : 'Send Booking Enquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWhatsAppFromForm}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm text-white bg-emerald-700 hover:bg-emerald-600 active:scale-95 transition-all shadow"
                    title={lang === 'hi' ? 'व्हाट्सएप से तुरंत भेजें' : 'Send directly via WhatsApp'}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
