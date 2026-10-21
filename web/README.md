# Fire First Safety & Truck — เว็บไซต์บริษัท (TH/EN)

Vite + Vue 3 + vite-ssg (สร้าง HTML สำเร็จรูปแยกทุกหน้า เพื่อ SEO) + Firebase (Hosting + Firestore)
ทำตามดีไซน์ `../design_handoff_fire_first_website` (Design B "Poster")

## เริ่มใช้งาน

```bash
npm install
cp .env.example .env      # ใส่ค่า Firebase + โดเมนจริง
npm run dev               # http://localhost:5173
npm run build             # สร้าง dist/ (HTML 10 หน้า + sitemap.xml + robots.txt)
```

## URL

| ไทย (ค่าเริ่มต้น) | English |
|---|---|
| `/` `/about` `/products` `/works` `/contact` | `/en` `/en/about` `/en/products` `/en/works` `/en/contact` |

แต่ละหน้ามี title / description / canonical / hreflang (th, en, x-default) / OG / Twitter card,
JSON-LD `LocalBusiness` ทุกหน้า + `BreadcrumbList` (หน้าย่อย) + `VideoObject` (หน้าแรก) + `FAQPage` (หน้าติดต่อ)

## โครงสร้าง

```
src/content/ff-content.js   เนื้อหาทั้งหมด TH/EN (แก้ข้อความที่นี่)
src/content/site.js         เบอร์โทร อีเมล โดเมน ขนาดรูป + alt
src/content/routes.js       รายการหน้า + ฟังก์ชันสร้าง URL
src/composables/useSeo.js   meta tags + JSON-LD
src/components/             SiteRail (เมนูซ้าย / แถบบน+แฮมเบอร์เกอร์บนมือถือ), SiteFooter, FfImg
src/pages/                  5 หน้า
src/firebase.js             ส่งฟอร์มติดต่อเข้า Firestore (โหลดแบบ lazy)
src/styles/                 modernist.css (design tokens) + app.css (layout + responsive)
public/img/                 รูป (jpg + webp), วิดีโอ, og-image 1200×630
firestore.rules             อนุญาตเฉพาะ "สร้าง" เอกสารใน inquiries พร้อมตรวจรูปแบบข้อมูล
```

## Responsive

- ≥1024px: เมนูซ้าย (rail) ตามดีไซน์
- <1024px: แถบบนติดหน้าจอ + ปุ่มแฮมเบอร์เกอร์, hero ซ้อนรูปไว้ด้านล่าง, grid เหลือ 2 คอลัมน์
- ≤640px: grid เหลือ 1–2 คอลัมน์, ตัวอักษรเล็กลง, ช่องกรอก 16px (กัน iOS ซูม)
- อุปกรณ์สัมผัส (ไม่มี hover) แสดงรูปสีปกติแทนขาวดำ

## Firebase

1. สร้างโปรเจกต์ใน Firebase console → เพิ่ม Web app → คัดลอก config ใส่ `.env`
2. เปิดใช้ Firestore (Production mode)
3. แก้ `.firebaserc` เป็น project id จริง
4. `npm i -g firebase-tools && firebase login`
5. `npm run deploy` (build + deploy hosting และ firestore rules)

คำขอจากฟอร์มจะอยู่ใน collection `inquiries` (ดูได้ใน Firebase console)
ถ้าต้องการแจ้งเตือนทางอีเมล ติดตั้ง extension **Trigger Email from Firestore** หรือเขียน Cloud Function
ที่ trigger เมื่อมีเอกสารใหม่ แนะนำเปิด **App Check** (reCAPTCHA v3) กันสแปมเพิ่มจาก honeypot

## สิ่งที่รอข้อมูลจากลูกค้า (มี TODO ในโค้ด)

- โดเมนจริง (`VITE_SITE_URL`) — ตอนนี้ใช้ `firefirstsafety.co.th` เป็นตัวอย่าง
- ราคาจริง, รีวิวจริง (ลบป้าย "ข้อความตัวอย่าง"), ยืนยันบริการ 24/7
- ตัวสะกดชื่อกรรมการผู้จัดการภาษาอังกฤษ, ไฟล์โลโก้ vector, รูปผลงานแบบไม่มีตัวอักษร
- วันที่เผยแพร่วิดีโอ (`uploadDate` ใน HomePage.vue)
- วิดีโอขนาด 7.6MB ควรบีบอัดเพิ่ม (เช่น H.264 CRF 28, 1280px) ก่อนขึ้นจริง
