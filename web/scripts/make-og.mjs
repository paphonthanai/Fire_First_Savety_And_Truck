// สร้างภาพการ์ดแชร์ลิงก์ (Open Graph 1200×630) แยกทุกหน้า × ทุกภาษา → public/img/og/{page}-{lang}.jpg
// ใช้ Chrome/Edge headless เรนเดอร์ HTML (ฟอนต์ไทยจัดวรรณยุกต์ถูกต้อง) แล้วแปลงเป็น JPG ด้วย sharp
// รัน: npm run og   (รันเมื่อแก้ข้อความ/รูปของการ์ด แล้ว commit ไฟล์ที่ได้)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import sharp from 'sharp'
import { pick } from '../src/content/ff-content.js'
import { PAGES, LANGS } from '../src/content/routes.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = resolve(root, '.og-tmp')
const out = resolve(root, 'public/img/og')
mkdirSync(tmp, { recursive: true })
mkdirSync(out, { recursive: true })

const BROWSERS = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)
const browser = BROWSERS.find((p) => existsSync(p))
if (!browser) throw new Error('ไม่พบ Chrome/Edge — ตั้ง CHROME_PATH')

const url = (p) => pathToFileURL(resolve(root, p)).href
const font = (fam, file, w) =>
  `@font-face{font-family:${fam};font-weight:${w};src:url(${url(`node_modules/@fontsource/${file}`)}) format('woff2')}`
const FONTS = [
  font('Archivo', 'archivo/files/archivo-latin-800-normal.woff2', 800),
  font('Archivo', 'archivo/files/archivo-latin-600-normal.woff2', 600),
  font('Anuphan', 'anuphan/files/anuphan-thai-700-normal.woff2', 700),
  font('Anuphan', 'anuphan/files/anuphan-thai-600-normal.woff2', 600),
  font('Anuphan', 'anuphan/files/anuphan-latin-700-normal.woff2', 700),
  font('Anuphan', 'anuphan/files/anuphan-latin-600-normal.woff2', 600),
].join('')

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch])

function card(page, lang) {
  const c = pick(lang)
  const label = c.nav.find((n) => n.id === page).l
  const cats = [...new Set(c.works.map((w) => w.c))].join(' · ')
  const spec = {
    home: { kicker: c.hero.kicker, head: c.values.map((v) => `${v.k}.`).join('<br>'), sub: c.hero.h1, img: 'firefighters', big: true },
    about: { kicker: label, head: c.about.h, sub: c.slogan, img: 'hq' },
    products: { kicker: label, head: c.hero.h1, sub: c.hero.kicker, img: 'unimog' },
    works: { kicker: label, head: c.h.works, sub: cats, img: 'tactical' },
    contact: { kicker: c.h.contact, head: '080-254-4306', sub: c.contact.addr, img: 'nozzle', phone: true },
  }[page]

  return `<!doctype html><html lang="${lang}"><meta charset="utf-8"><style>${FONTS}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:Archivo,Anuphan,sans-serif;background:#090a0d;color:#fff;display:grid;grid-template-rows:1fr 112px}
.top{display:grid;grid-template-columns:690px 1fr;min-height:0}
.copy{background:#ec3013;padding:44px 48px 36px;display:flex;flex-direction:column;gap:18px}
.brand{font-weight:800;font-size:22px;letter-spacing:-.01em;line-height:1}
.brand small{display:block;font-weight:600;font-size:12px;letter-spacing:.14em;margin-top:6px;text-transform:uppercase}
.kicker{font-weight:600;font-size:20px;letter-spacing:.06em;margin-top:auto;opacity:.95}
.head{font-weight:800;font-size:${spec.big ? 76 : spec.phone ? 84 : 56}px;${spec.phone ? "white-space:nowrap;" : ""}line-height:${spec.big ? 1 : 1.08};letter-spacing:-.02em;text-wrap:balance}
.sub{font-weight:600;font-size:22px;line-height:1.35;border-top:2px solid #fff;padding-top:14px;text-wrap:balance}
.photo{position:relative;overflow:hidden}
.photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.bar{display:flex;align-items:center;gap:22px;padding:0 48px 0 30px;border-top:4px solid #ec3013}
.bar img{height:92px}
.bar .name{font-weight:800;font-size:22px;line-height:1.15}
.bar .name small{display:block;font-weight:600;font-size:15px;color:#d7d3d3}
.bar .tel{margin-left:auto;text-align:right;font-weight:800;font-size:30px;line-height:1.1}
.bar .tel small{display:block;font-weight:600;font-size:16px;color:#ff9783}
</style><body>
<div class="top">
  <div class="copy">
    <div class="brand">FIRE FIRST<small>Safety &amp; Truck Co., Ltd.</small></div>
    <div class="kicker">${esc(spec.kicker)}</div>
    <div class="head">${spec.big ? spec.head : esc(spec.head)}</div>
    <div class="sub">${esc(spec.sub)}</div>
  </div>
  <div class="photo"><img src="${url(`public/img/${spec.img}.jpg`)}"></div>
</div>
<div class="bar">
  <img src="${url('scripts/og/logo.png')}">
  <div class="name">${esc(c.legal)}<small>${esc(c.slogan)}</small></div>
  <div class="tel"${spec.phone ? ' style="font-size:22px"' : ''}>${spec.phone ? esc(c.contact.mail) : '080-254-4306'}<small>firefirstsafetyandtruck.com</small></div>
</div>
</body></html>`
}

for (const lang of LANGS) {
  for (const page of PAGES) {
    const html = resolve(tmp, `${page}-${lang}.html`)
    const png = resolve(tmp, `${page}-${lang}.png`)
    writeFileSync(html, card(page, lang))
    execFileSync(browser, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
      '--force-device-scale-factor=1', '--window-size=1200,630', '--virtual-time-budget=4000',
      `--screenshot=${png}`, pathToFileURL(html).href,
    ], { stdio: 'ignore' })
    await sharp(png).resize(1200, 630).jpeg({ quality: 84, mozjpeg: true }).toFile(resolve(out, `${page}-${lang}.jpg`))
    console.log(`✓ img/og/${page}-${lang}.jpg`)
  }
}
rmSync(tmp, { recursive: true, force: true })
