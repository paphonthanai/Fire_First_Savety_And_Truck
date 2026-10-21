// ใช้ร่วมกันทั้งแอปและ vite.config.js (สร้าง sitemap) — ห้าม import ไฟล์ .vue ที่นี่
export const PAGES = ['home', 'about', 'products', 'works', 'contact']
export const LANGS = ['th', 'en']

/** URL ของหน้าในแต่ละภาษา: ไทยเป็นค่าเริ่มต้น (ไม่มี prefix), อังกฤษอยู่ใต้ /en */
export function pagePath(page, lang = 'th') {
  const prefix = lang === 'en' ? '/en' : ''
  if (page === 'home') return prefix || '/'
  return `${prefix}/${page}`
}
