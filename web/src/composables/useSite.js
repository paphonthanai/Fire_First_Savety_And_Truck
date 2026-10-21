import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pick } from '../content/ff-content.js'
import { pagePath } from '../content/routes.js'

const cache = {}

/** ภาษา/หน้าปัจจุบัน (อ่านจาก route) + เนื้อหาตามภาษา + ตัวช่วยสร้างลิงก์ */
export function useSite() {
  const route = useRoute()
  const lang = computed(() => route.meta.lang || 'th')
  const page = computed(() => route.meta.page || 'home')
  const c = computed(() => (cache[lang.value] ||= pick(lang.value)))
  const to = (p, l = lang.value) => pagePath(p, l)
  const pad = (i) => String(i + 1).padStart(2, '0')
  return { lang, page, c, to, pad }
}
