export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://firefirstsafetyandtruck.com').replace(/\/$/, '')
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
  // สินค้าจากโบรชัวร์ (ตัดจากหน้าแคตตาล็อก) — alt ใช้ชื่อสินค้าในหน้าเว็บ
  'products/cone': { w: 469, h: 358 },
  'products/baton': { w: 517, h: 453 },
  'products/bollard-flex': { w: 384, h: 346 },
  'products/bollard-steel': { w: 317, h: 482 },
  'products/barrier-steel': { w: 723, h: 407 },
  'products/barrier-water': { w: 417, h: 231 },
  'products/mirror': { w: 498, h: 296 },
  'products/signs': { w: 484, h: 469 },
  'products/checkpoint': { w: 446, h: 396 },
  'products/solar-signs': { w: 485, h: 332 },
  'products/solar-flasher': { w: 473, h: 246 },
  'products/solar-flasher-pole': { w: 130, h: 686 },
  'products/solar-streetlight': { w: 404, h: 425 },
  'products/bump-sign': { w: 230, h: 799 },
  'products/turnout-suit': { w: 270, h: 598 },
  'products/boots': { w: 444, h: 464 },
  'products/gloves': { w: 729, h: 490 },
  'products/helmet': { w: 446, h: 464 },
  'products/nozzle': { w: 330, h: 278 },
  'products/hose': { w: 290, h: 302 },
  'products/couplings': { w: 317, h: 249 },
  'products/extinguisher-dry': { w: 189, h: 385 },
  'products/extinguisher-powersoft': { w: 175, h: 347 },
  'products/vests': { w: 848, h: 291 },
}
