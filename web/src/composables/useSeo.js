import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useSite } from './useSite.js'
import { pagePath } from '../content/routes.js'
import { SITE_URL, EMAIL } from '../content/site.js'

const KEYWORDS = 'รถดับเพลิง, อุปกรณ์ดับเพลิง, เครื่องดับเพลิง, ถังดับเพลิง, รถกู้ภัย, ฝึกอบรมดับเพลิง, ซ้อมแผนอพยพหนีไฟ, ตรวจถังดับเพลิง, เครื่องสูบน้ำดับเพลิง, ชุดผจญเพลิง, นนทบุรี, fire truck Thailand, fire extinguisher'

const abs = (p) => SITE_URL + p
const OG_VERSION = '2'

/** JSON-LD LocalBusiness — ข้อมูล NAP ต้องตรงกับ footer / หน้าติดต่อ / Google Business Profile */
export function localBusiness(c, lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#org`,
    name: 'บริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค จำกัด',
    alternateName: 'Fire First Safety & Truck Co., Ltd.',
    slogan: c.slogan,
    description: c.seo.home.d,
    url: abs(pagePath('home', lang)),
    telephone: '+66-80-254-4306',
    email: EMAIL,
    taxID: '0125567038118',
    image: abs('/img/company.jpg'),
    logo: abs('/img/logo-512.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '48/68 ม.2 ต.ไทรน้อย',
      addressLocality: 'อ.ไทรน้อย',
      addressRegion: 'นนทบุรี',
      postalCode: '11150',
      addressCountry: 'TH',
    },
    founder: { '@type': 'Person', name: 'พิทยา ดำงามกิจ', jobTitle: 'กรรมการผู้จัดการ' },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'รถดับเพลิงและรถกู้ภัย' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'เครื่องดับเพลิงและอุปกรณ์ดับเพลิง' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ฝึกอบรมดับเพลิงและซ้อมแผน' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ตรวจสอบและบำรุงรักษาถังดับเพลิง' } },
    ],
  }
}

/**
 * ตั้ง <title>, description, canonical, hreflang, OG/Twitter และ JSON-LD ของหน้า
 * @param {(ctx) => object[]} [extraLd] JSON-LD เพิ่มเติมเฉพาะหน้า
 */
export function useSeo(extraLd) {
  const { lang, page, c } = useSite()

  useHead(computed(() => {
    const s = c.value.seo[page.value]
    const url = abs(pagePath(page.value, lang.value))
    const ld = [localBusiness(c.value, lang.value)]
    if (page.value !== 'home') {
      const nav = c.value.nav
      ld.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: nav[0].l, item: abs(pagePath('home', lang.value)) },
          { '@type': 'ListItem', position: 2, name: nav.find((n) => n.id === page.value).l, item: url },
        ],
      })
    }
    if (extraLd) ld.push(...extraLd({ c: c.value, lang: lang.value, url }))

    // การ์ดแชร์ลิงก์แยกหน้า/ภาษา (สร้างด้วย npm run og) — เปลี่ยน OG_VERSION เมื่อสร้างภาพใหม่ เพื่อให้ Facebook/LINE ดึงภาพใหม่
    const ogImage = abs(`/img/og/${page.value}-${lang.value}.jpg?v=${OG_VERSION}`)
    const ogAlt = `${c.value.legal} — ${s.t}`

    return {
      htmlAttrs: { lang: lang.value },
      title: s.t,
      meta: [
        { name: 'description', content: s.d },
        { name: 'keywords', content: KEYWORDS },
        { name: 'robots', content: 'index,follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Fire First Safety & Truck' },
        { property: 'og:locale', content: lang.value === 'th' ? 'th_TH' : 'en_US' },
        { property: 'og:locale:alternate', content: lang.value === 'th' ? 'en_US' : 'th_TH' },
        { property: 'og:title', content: s.t },
        { property: 'og:description', content: s.d },
        { property: 'og:url', content: url },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:secure_url', content: ogImage },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: ogAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: s.t },
        { name: 'twitter:description', content: s.d },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: ogAlt },
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
        { rel: 'alternate', hreflang: 'th', href: abs(pagePath(page.value, 'th')) },
        { rel: 'alternate', hreflang: 'en', href: abs(pagePath(page.value, 'en')) },
        { rel: 'alternate', hreflang: 'x-default', href: abs(pagePath(page.value, 'th')) },
      ],
      script: ld.map((obj, i) => ({
        key: `ld-${i}`,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(obj),
      })),
    }
  }))
}
