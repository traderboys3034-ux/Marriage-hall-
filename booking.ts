/**
 * Booking validation, phone sanitization, and WhatsApp message generator
 * for Om Shivshakti Marriage Hall (Rajauli, Nawada)
 */

export interface BookingFormData {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message?: string;
}

export const PRIMARY_PHONE = '8409819430';
export const SECONDARY_PHONE_1 = '6204768278';
export const SECONDARY_PHONE_2 = '9110127349';
export const PROPRIETOR_NAME = 'Pro. Abhay Kishor Prasad';
export const VENUE_NAME = 'Om Shivshakti Marriage Hall';
export const VENUE_LOCATION = 'Simarkol Hanuman Mandir ke paas, Rajauli, Nawada, Bihar';

/**
 * Validates Indian 10-digit mobile phone numbers.
 * Accepts optional +91 or 0 prefix, spaces, or hyphens.
 */
export function validatePhoneNumber(raw: string): { isValid: boolean; cleaned: string; error?: string } {
  if (!raw || !raw.trim()) {
    return { isValid: false, cleaned: '', error: 'कृपया फोन नंबर दर्ज करें (Phone number is required)' };
  }

  // Remove whitespace, dashes, plus signs, brackets
  let digits = raw.replace(/[\s\-\(\)\+]/g, '');

  // Strip leading international code 91 if 12 digits
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (digits.length !== 10) {
    return {
      isValid: false,
      cleaned: digits,
      error: 'कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें (Enter a valid 10-digit mobile number)',
    };
  }

  // Valid Indian mobile numbers begin with 6, 7, 8, or 9
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return {
      isValid: false,
      cleaned: digits,
      error: 'मोबाइल नंबर 6, 7, 8 या 9 से शुरू होना चाहिए (Indian mobile numbers start with 6, 7, 8, or 9)',
    };
  }

  return { isValid: true, cleaned: digits };
}

/**
 * Formats 10-digit phone number with space separation for readability
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '').slice(-10);
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

/**
 * Validates the full booking form
 */
export function validateBookingForm(form: BookingFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof BookingFormData, string>>;
} {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  if (!form.fullName || form.fullName.trim().length < 2) {
    errors.fullName = 'कृपया अपना नाम दर्ज करें (Full name is required)';
  }

  const phoneValidation = validatePhoneNumber(form.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error;
  }

  if (!form.eventType || !form.eventType.trim()) {
    errors.eventType = 'कृपया कार्यक्रम का प्रकार चुनें (Please select event type)';
  }

  if (!form.eventDate || !form.eventDate.trim()) {
    errors.eventDate = 'कृपया तारीख चुनें (Event date is required)';
  } else {
    // Check if date is not in the past
    const selectedDate = new Date(form.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime())) {
      errors.eventDate = 'अमान्य तारीख (Invalid date format)';
    } else if (selectedDate < today) {
      errors.eventDate = 'कृपया आगामी तारीख चुनें (Please select an upcoming date)';
    }
  }

  const guestsNum = parseInt(form.guestCount, 10);
  if (!form.guestCount || isNaN(guestsNum) || guestsNum <= 0) {
    errors.guestCount = 'कृपया संभावित अतिथियों की संख्या दर्ज करें (Enter valid guest count)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates direct WhatsApp booking link with prefilled polite text
 */
export function generateWhatsAppBookingUrl(data: BookingFormData, targetNumber = PRIMARY_PHONE): string {
  const lines = [
    `*नमस्ते, ॐ शिवशक्ति मैरिज हॉल (Rajauli)* 🙏`,
    `मुझे आपके मैरिज हॉल में कार्यक्रम बुकिंग के लिए पूछताछ करनी है:`,
    ``,
    `👤 *नाम (Name):* ${data.fullName.trim()}`,
    `📞 *मोबाइल (Phone):* ${data.phone.trim()}`,
    `🎉 *कार्यक्रम (Event):* ${data.eventType.trim()}`,
    `📅 *दिनांक (Date):* ${data.eventDate.trim()}`,
    `👥 *अनुमानित अतिथि (Guests):* ${data.guestCount.trim()}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`📝 *विशेष विवरण (Message):* ${data.message.trim()}`);
  }

  lines.push(``);
  lines.push(`कृपया हॉल की उपलब्धता और बुकिंग विवरण साझा करें। धन्यवाद!`);

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/91${targetNumber}?text=${encodedText}`;
}

/**
 * Generates quick inquiry WhatsApp link for a specific service
 */
export function generateQuickServiceWhatsAppUrl(serviceTitle: string, targetNumber = PRIMARY_PHONE): string {
  const text = `नमस्ते! मुझे ॐ शिवशक्ति मैरिज हॉल (राजाउली, नवादा) में *${serviceTitle}* के आयोजन और बुकिंग के लिए जानकारी चाहिए। कृपया विवरण साझा करें।`;
  return `https://wa.me/91${targetNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Estimates venue capacity and recommended arrangement
 */
export function estimateHallArrangement(guestCount: number): {
  recommendedHallArea: string;
  diningBatches: number;
  stageSetup: string;
} {
  if (guestCount <= 200) {
    return {
      recommendedHallArea: 'Intimate Banquet & Mandap Setup',
      diningBatches: 1,
      stageSetup: 'Standard Grand Floral Stage',
    };
  } else if (guestCount <= 500) {
    return {
      recommendedHallArea: 'Full Grand Hall + Dedicated Dining Section',
      diningBatches: 2,
      stageSetup: 'Royal Maharaja Mandap & Reception Stage',
    };
  } else {
    return {
      recommendedHallArea: 'Complete Grand Venue + Lawn & Courtyard Expansion',
      diningBatches: 3,
      stageSetup: 'High-Capacity Deluxe Stage & Wide Aisles',
    };
  }
}
