import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { PAGES, pagePath } from './src/content/routes.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const site = (env.VITE_SITE_URL || 'https://firefirstsafetyandtruck.com').replace(/\/$/, '')

  return {
    plugins: [vue()],
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      beastiesOptions: { reduceInlineStyles: false },
      // สร้าง sitemap.xml + robots.txt หลัง build ทุกครั้ง
      onFinished() {
        const today = new Date().toISOString().slice(0, 10)
        const urls = PAGES.map((p) => {
          const th = site + pagePath(p, 'th')
          const en = site + pagePath(p, 'en')
          const alt = `<xhtml:link rel="alternate" hreflang="th" href="${th}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${th}"/>`
          return [th, en].map((loc) => `<url><loc>${loc}</loc><lastmod>${today}</lastmod>${alt}</url>`).join('')
        }).join('')
        writeFileSync(resolve('dist/sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>\n`)
        writeFileSync(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
      },
    },
  }
})
