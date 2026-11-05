import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePhoneNumber,
  formatPhoneNumber,
  validateBookingForm,
  generateWhatsAppBookingUrl,
  PRIMARY_PHONE,
} from './booking';

test('validatePhoneNumber accepts valid 10-digit Indian numbers', () => {
  const result1 = validatePhoneNumber('8409819430');
  assert.equal(result1.isValid, true);
  assert.equal(result1.cleaned, '8409819430');

  const result2 = validatePhoneNumber('+91 62047 68278');
  assert.equal(result2.isValid, true);
  assert.equal(result2.cleaned, '6204768278');

  const result3 = validatePhoneNumber('09110127349');
  assert.equal(result3.isValid, true);
  assert.equal(result3.cleaned, '9110127349');
});

test('validatePhoneNumber rejects invalid numbers', () => {
  const empty = validatePhoneNumber('');
  assert.equal(empty.isValid, false);

  const short = validatePhoneNumber('12345');
  assert.equal(short.isValid, false);

  // Numbers starting with invalid digit (e.g. 1, 2, 3, 4, 5)
  const invalidStart = validatePhoneNumber('2345678901');
  assert.equal(invalidStart.isValid, false);
});

test('formatPhoneNumber formats Indian numbers cleanly', () => {
  const formatted = formatPhoneNumber('8409819430');
  assert.equal(formatted, '+91 84098 19430');
});

test('validateBookingForm validates all required fields', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 10);
  const dateStr = tomorrow.toISOString().split('T')[0];

  const validForm = {
    fullName: 'Rahul Sharma',
    phone: '8409819430',
    eventType: 'Wedding Ceremony',
    eventDate: dateStr,
    guestCount: '350',
    message: 'Need full stage decoration and catering space',
  };

  const validation = validateBookingForm(validForm);
  assert.equal(validation.isValid, true);
  assert.equal(Object.keys(validation.errors).length, 0);

  const invalidForm = {
    fullName: '',
    phone: '123',
    eventType: '',
    eventDate: '2020-01-01', // past date
    guestCount: '-5',
  };

  const invalidValidation = validateBookingForm(invalidForm);
  assert.equal(invalidValidation.isValid, false);
  assert.ok(invalidValidation.errors.fullName);
  assert.ok(invalidValidation.errors.phone);
  assert.ok(invalidValidation.errors.eventType);
  assert.ok(invalidValidation.errors.eventDate);
  assert.ok(invalidValidation.errors.guestCount);
});

test('generateWhatsAppBookingUrl generates valid wa.me URL with phone and encoded text', () => {
  const form = {
    fullName: 'Amit Kumar',
    phone: '6204768278',
    eventType: 'Tilak Ceremony',
    eventDate: '2026-12-15',
    guestCount: '250',
  };

  const url = generateWhatsAppBookingUrl(form);
  assert.ok(url.startsWith(`https://wa.me/91${PRIMARY_PHONE}?text=`));
  assert.ok(url.includes(encodeURIComponent('Amit Kumar')));
  assert.ok(url.includes(encodeURIComponent('Tilak Ceremony')));
});
