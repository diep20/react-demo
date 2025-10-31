export function isValidPhone(phone) {
  if (!phone) return false;
  const pattern = /^\+254\d{9}$/; // +254 followed by 9 digits
  return pattern.test(phone);
}
