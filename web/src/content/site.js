export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.firefirstsafety.co.th').replace(/\/$/, '')
export const PHONE = '080-254-4306'
export const PHONE_TEL = 'tel:+66802544306'
export const EMAIL = 'firefirstsafetyandtruck@gmail.com'

// ขนาดจริงของรูป (ใส่ width/height ป้องกัน layout shift) + alt ภาษาไทย/อังกฤษ
export const IMAGES = {
  firefighters: { w: 2048, h: 1536, alt: { th: 'นักดับเพลิงสวมชุดผจญเพลิงและเครื่องช่วยหายใจ', en: 'Firefighters in turnout gear and breathing apparatus' } },
  unimog: { w: 1448, h: 1086, alt: { th: 'รถกู้ภัยดับเพลิงขับเคลื่อนสี่ล้อ Fire First ลุยน้ำท่วม', en: 'Fire First 4x4 fire-rescue vehicle wading through flood water' } },
  nozzle: { w: 1599, h: 1536, alt: { th: 'หัวฉีดน้ำดับเพลิงแบบมอนิเตอร์', en: 'Fire monitor nozzle' } },
  tactical: { w: 1080, h: 1350, alt: { th: 'รถดับเพลิงขนาดเล็ก Compact Tactical Unit สำหรับพื้นที่ป่า', en: 'Compact Tactical Unit wildland fire vehicle' } },
  hq: { w: 1536, h: 1024, alt: { th: 'สำนักงานและศูนย์บริการ Fire First Safety and Truck นนทบุรี', en: 'Fire First Safety and Truck office and service centre, Nonthaburi' } },
  drill: { w: 1145, h: 1374 },
  extinguisher: { w: 1145, h: 1374 },
  triage: { w: 1145, h: 1374 },
  comms: { w: 1145, h: 1374 },
  firetruck: { w: 1024, h: 1280 },
  pickup: { w: 1024, h: 1280 },
  trucks: { w: 1024, h: 1280 },
  pumps: { w: 1099, h: 1374 },
}
