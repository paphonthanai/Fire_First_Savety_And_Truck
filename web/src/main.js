import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router.js'

import '@fontsource/archivo/latin-400.css'
import '@fontsource/archivo/latin-600.css'
import '@fontsource/archivo/latin-800.css'
import '@fontsource/anuphan/400.css'
import '@fontsource/anuphan/600.css'
import '@fontsource/anuphan/700.css'
import './styles/modernist.css'
import './styles/app.css'

export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
  scrollBehavior(to, from, saved) {
    // เปลี่ยนหน้าแล้วเลื่อนขึ้นบนสุด
    if (saved) return saved
    if (to.path === from.path) return
    return { top: 0 }
  },
})
