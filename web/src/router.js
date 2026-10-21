import { PAGES, LANGS, pagePath } from './content/routes.js'

const components = {
  home: () => import('./pages/HomePage.vue'),
  about: () => import('./pages/AboutPage.vue'),
  products: () => import('./pages/ProductsPage.vue'),
  works: () => import('./pages/WorksPage.vue'),
  contact: () => import('./pages/ContactPage.vue'),
}

// สร้าง route จริงแยกทุกหน้า × ทุกภาษา เพื่อให้ vite-ssg สร้าง HTML ครบทุก URL
export const routes = [
  ...LANGS.flatMap((lang) =>
    PAGES.map((page) => ({
      path: pagePath(page, lang),
      name: `${page}-${lang}`,
      component: components[page],
      meta: { page, lang },
    })),
  ),
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
