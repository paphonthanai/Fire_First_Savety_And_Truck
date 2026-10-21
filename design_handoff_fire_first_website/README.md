# Handoff: Fire First Safety & Truck — Corporate Website (TH/EN)

## Overview
Marketing website for **บริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค จำกัด / Fire First Safety & Truck Co., Ltd.** — a Thai supplier of fire trucks, specialist rescue vehicles, fire extinguishers and fire equipment, plus training, consulting and maintenance. Goal: brand awareness + information, with a quote-request path. 5 pages, bilingual (Thai default, English), SEO is a priority.

**Primary direction: `Fire First B.dc.html` ("Poster" — left index rail, full red hero).** `Fire First A.dc.html` ("Grid" — top nav) is an alternate kept for reference; same content and data.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look, content and behavior, not production code. They run on a proprietary prototype runtime (`.dc.html`, `{{ }}` holes, `<sc-for>`, `<sc-if>`), which will not exist in your project. **Recreate the designs in a real stack.** No codebase exists yet; recommended: **Next.js (App Router) or Astro** with static generation, real routes per page and per language, so every page is crawlable HTML.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and interactions. Recreate pixel-accurately at 1280px desktop; responsive behavior is NOT designed yet (see Responsive below).

## Routing (required for SEO)
Prototype switches pages via client state + `#hash`. Production must use real URLs:
```
/            /about        /products        /works        /contact        (th, default)
/en/         /en/about     /en/products     /en/works     /en/contact
```
Each route: own `<title>`, meta description, canonical, `hreflang` th/en/x-default alternates. Language toggle links to the equivalent route in the other language. `<html lang="th|en">`.

## Layout — Design B (primary)
Page = CSS grid `240px | minmax(0,1fr)`, background `--color-bg #f3f2f2`.

### Left rail (all pages)
- `position: sticky; top:0; height:100vh` (cap 900px), padding 24px 20px, flex column gap 28px, right border 2px `--color-divider`.
- Wordmark: "FIRE / FIRST" two lines, Archivo 800, 30px, line-height .95, letter-spacing -0.02em, color `#ec3013`; below "Safety & Truck Co., Ltd." 10px, uppercase, letter-spacing .12em. Click → home.
- Nav list: top border 2px divider; each item grid `28px 1fr`, padding 11px 0, bottom border 1px divider, 15px. Left col = index "01"–"05" at 11px. Active: color accent, weight 800. Hover: color accent. Items: หน้าแรก/Home, เกี่ยวกับเรา/About, สินค้าและบริการ/Products & Services, ผลงาน/Projects, ติดต่อ/Contact. Must be real `<a href>`.
- Language segmented control: "ไทย | EN", 1px divider border, 12px, padding 5px 12px; active = bg `#201e1d`, text white.
- Bottom (margin-top:auto): "24/7" label (11px uppercase, `--color-neutral-700`) — **confirm with client that 24/7 is accurate**; phone "080-254-4306" Archivo 800 22px, `tel:` link; primary button "ขอใบเสนอราคา / Request a quote →" (label flush left, arrow right, `justify-content: space-between`).

### Home
1. **Hero** — bg accent `#ec3013`, white text, grid `7fr | 5fr`, min-height 640px.
   - Left (padding 40px 40px 36px, column, space-between): kicker (12px uppercase .12em) "รถดับเพลิง · อุปกรณ์ดับเพลิง · ฝึกอบรม"; stacked display words "เร็ว. / รอด. / ปลอดภัย." (Fast. Save. Safe.) Archivo 800, 128px, lh .95, ls -0.03em; bottom row with 2px white top rule: lead paragraph 17px (max 520px) + black button "สินค้าและบริการ →" (bg `#201e1d`, hover `#000`, padding 12px 16px, 800).
   - Right: full-bleed photo `firefighters.jpg`, object-fit cover.
2. **Video** — full width, bg black, `<video controls playsinline preload="metadata">` `assets/pitch.mp4`, max-height 640px. Add title/aria-label (see SEO).
3. **Intro** — padding 48px 40px, grid `1fr | 2fr` gap 40px. Left: **the page `<h1>`** "มากกว่ารถดับเพลิง คือความปลอดภัยของทุกชีวิต" at 40px. Right: about paragraph 18px/1.65 + ghost link "เกี่ยวกับเรา →".
4. **Services list (01)** — header "01" + h2. 8 full-width rows, grid `72px | 1.2fr | 1fr | 32px`, padding 18px 40px, 1px top rule; number 13px/600, title Archivo 800 24px, desc 14px, "→". **Hover: entire row bg accent, text white.** Click → /products.
5. **Photo strip** — 3 equal cells, height 360px, 2px vertical rules: unimog, nozzle, tactical.
6. **Works (02)** — grid `2fr 1fr 1fr`, gap 20px; first item spans 2 rows; others aspect 4/5. Caption 14px/600. "ดูทั้งหมด →" → /works.
7. **Reviews (03)** — grid `1fr | 3fr`. Left: heading, neutral tag "ข้อความตัวอย่าง — แทนที่ด้วยรีวิวจริง" (**remove once real reviews supplied**), segmented 01/02/03 switcher. Right: quote Archivo 800 40px lh 1.2 + caption with 2px top rule.

### About
Red title band (h1 64px "ป้องกัน พร้อมรับ แก้ไข ฟื้นฟู ครบจบในที่เดียว") → full-width `hq.jpg` 420px tall → grid `2fr|1fr`: paragraph 20px/1.65 | MD name "พิทยา ดำงามกิจ" / "กรรมการผู้จัดการ" + facts (Tax ID 0125567038118, business category, office) → 3-cell values row (เร็ว/รอด/ปลอดภัย, 56px accent).

### Products & Services
h1 64px → services 2-column grid (number 22px accent, title 19px 800, desc 14px; 2px vertical rule between cols) → "ยานพาหนะเฉพาะทาง" 10 vehicle cells in a 5×2 grid (min-height 180px, big number 44px; **hover bg accent / white text**) → Pricing rows: grid `1.2fr 1.6fr .8fr auto` — name, feature tags, price ("สอบถามราคา"/"ตามสเปก" — **real prices pending from client**), secondary button "ขอใบเสนอราคา →".

### Works
h1 + category filter (ทั้งหมด / ฝึกอบรม / ที่ปรึกษา / ยานพาหนะ / อุปกรณ์), active = accent text + 2px accent underline. 3-col grid of square images with 2px rules, category label (11px uppercase `--color-accent-700`) + title.

### Contact
Red band grid `1fr|1fr`: h1 64px, phone 56px (tel:), email (mailto:), legal name + address with 2px white rule | form card on `--color-bg` (name*, organisation, phone*, message; primary submit). Success: accent tag "ได้รับข้อความแล้ว…". → Google Map embed 340px, grayscale → FAQ accordion (5 items; numbered; Archivo 800 20px question; one open at a time, first open by default; "+"/"−").

### Footer (all pages)
bg `#201e1d`, white; grid `2fr|1fr`; "เลือก FIRE FIRST เลือกความปลอดภัย" Archivo 800 36px; legal name + slogan 13px `--color-neutral-300`.

## Design A (alternate) — summary
Top header bar (logo square + wordmark, inline nav with 2px accent underline on active, TH|EN, primary call button), light hero grid `1fr|1fr` with h1 60px + unimog photo, values row, 4-col services grid, fleet list + photo mosaic, 4-col works, 3-col reviews, red closing banner. Same pages/data. See `Fire First A.dc.html`.

## Interactions & Behavior
- Images: grayscale by default (`filter: grayscale(1) contrast(1.08)`), **hover → full color**, `transition: filter .4s ease`. (Client asked for color on hover.)
- Service rows / vehicle cells: hover fills accent, text white, no transition.
- Nav/links hover: accent. Buttons: primary hover `--color-accent-600`, active `--color-accent-700`. Focus: `outline 2px solid #ec3013; offset 2px`.
- FAQ accordion: single-open. Use `<details>`/`<summary>` or accessible button with `aria-expanded`.
- Reviews switcher: manual, no autoplay.
- Works filter: client-side filter by category.
- Contact form: required name + phone; on submit show success message. **Backend not designed** — wire to email (e.g. Resend/Formspree) or LINE notify; add spam protection.
- Changing page scrolls to top.

## Responsive (not designed — implement sensibly)
Desktop design at 1280px. Suggested: <1024px rail becomes top bar with hamburger; hero stacks (photo below, display type ~72px); grids collapse to 1–2 cols; keep 2px rules and zero radius.

## SEO requirements (client priority)
- Static/SSR HTML per route; one `<h1>` per page.
- Per-page/per-language title + description: see `seo` object in `ff-content.js`.
- Keywords to target: รถดับเพลิง, อุปกรณ์ดับเพลิง, เครื่องดับเพลิง, ถังดับเพลิง, รถกู้ภัย, ฝึกอบรมดับเพลิง, ซ้อมแผนอพยพหนีไฟ, ตรวจถังดับเพลิง, เครื่องสูบน้ำดับเพลิง, ชุดผจญเพลิง, นนทบุรี.
- JSON-LD: `LocalBusiness` (name TH + alternateName EN, phone +66-80-254-4306, email, taxID, PostalAddress 48/68 ม.2 ต.ไทรน้อย อ.ไทรน้อย นนทบุรี 11150 TH, founder) and `FAQPage` — both present in the `<helmet>` of the HTML files; copy them. Add `BreadcrumbList` on subpages and `VideoObject` for the pitch video (needs thumbnail + uploadDate).
- Open Graph + Twitter card; og:image `assets/company.jpg` (make a 1200×630 crop).
- `hreflang` alternates, canonical, `sitemap.xml`, `robots.txt`.
- **Domain `firefirstsafety.co.th` is a placeholder** — replace with the real domain.
- Images: Thai descriptive `alt` (already written in HTML), serve WebP/AVIF, `width/height` set, lazy-load below fold; hero image `fetchpriority="high"`. Video: compress, provide poster frame.
- NAP (name/address/phone) identical across site footer, contact page, JSON-LD and Google Business Profile.
- Core Web Vitals: self-host fonts with `font-display: swap`, subset Thai.

## State
`lang` (from route), `page` (from route), `faqOpen` index, `reviewIndex`, `worksCategory`, `formSent`.

## Design Tokens (Modernist design system — `modernist.css`)
- Colors: bg `#f3f2f2`, surface `#eae9e9`, text `#201e1d`, accent `#ec3013`, divider `rgba(32,30,29,.40)` (`color-mix(#201e1d 40%, transparent)`). Accent ramp 100 `#fff2ef` · 200 `#ffe0d9` · 300 `#ffc4b8` · 400 `#ff9783` · 500 `#ff563c` · 600 `#dd2b0f` · 700 `#ae1800` · 800 `#7c1405` · 900 `#4d170e`. Neutral 100 `#f8f4f4` · 300 `#d7d3d3` · 700 `#605d5d` · 800 `#444141` · 900 `#2d2b2b`. Use accent-700 for small red text on light ground (contrast).
- Type: **Archivo** (400/600/800) for Latin + **Anuphan** (400/600/700) for Thai — stack `"Archivo","Anuphan",system-ui,sans-serif`. Headings 800, line-height 1.12, letter-spacing -0.015em. Body 15px/1.55. Scale used: 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 40, 56, 64, 128px.
- Spacing: 4, 8, 12, 16, 24, 32 (+ 40/48 section padding).
- Radius: **0 everywhere.** Rules: 2px between major sections, 1px between rows.
- Shadows: none used.
- Buttons: Archivo 800 14px, padding 8px 14.4px, labels flush left.

## Assets (`assets/`)
Client-supplied (from their Facebook posters/photos): `firefighters.jpg`, `unimog.jpg`, `tactical.jpg`, `nozzle.jpg`, `hq.jpg`, `fleet-types.jpg`, `drill.jpg`, `extinguisher.jpg`, `triage.jpg`, `comms.jpg`, `firetruck.jpg`, `pickup.jpg`, `trucks.jpg`, `pumps.jpg`, `company.jpg` (company poster with logo/contact), `pitch.mp4` (30s company video). Many "works" images are text-heavy promotional posters; request clean photos where possible. No standalone logo file was provided (Ganesha emblem appears in `company.jpg`) — request vector logo.

## Content
All copy (TH + EN) lives in `ff-content.js` — structured data you can move to JSON/CMS (`brand, nav, hero, values, services[8], fleet[10], works[8], reviews[3], pricing[3], faq[5], about, contact, seo{page}`). Pending from client: real prices, real reviews, service area, English spelling of MD name, real domain, confirmation of 24/7.

## Files
- `Fire First B.dc.html` — primary design (all 5 pages, toggled in-page).
- `Fire First A.dc.html` — alternate design.
- `ff-content.js` — bilingual content + SEO strings.
- `modernist.css` — design-system tokens and component classes (`.btn`, `.tag`, `.field`, `.input`).
- `assets/` — images and video.
