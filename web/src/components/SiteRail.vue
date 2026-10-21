<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSite } from '../composables/useSite.js'
import { PHONE, PHONE_TEL } from '../content/site.js'

const { lang, page, c, to, pad } = useSite()
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <aside class="rail" :class="{ 'is-open': open }">
    <div class="rail__top">
      <RouterLink :to="to('home')" class="rail__brand" :aria-label="c.legal">
        <span class="rail__word">FIRE<br /> FIRST</span>
        <span class="rail__sub">Safety &amp; Truck Co., Ltd.</span>
      </RouterLink>
      <button
        class="rail__burger"
        type="button"
        :aria-expanded="open"
        aria-controls="rail-menu"
        :aria-label="lang === 'th' ? 'เมนู' : 'Menu'"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>

    <div id="rail-menu" class="rail__menu">
      <nav class="rail__nav" :aria-label="lang === 'th' ? 'เมนูหลัก' : 'Main menu'">
        <RouterLink
          v-for="(n, i) in c.nav"
          :key="n.id"
          :to="to(n.id)"
          class="rail__link"
          :class="{ 'is-active': n.id === page }"
          :aria-current="n.id === page ? 'page' : undefined"
        >
          <span class="rail__idx">{{ pad(i) }}</span><span>{{ n.l }}</span>
        </RouterLink>
      </nav>

      <div class="seg-lang" role="group" aria-label="Language">
        <RouterLink :to="to(page, 'th')" hreflang="th" lang="th" :class="{ on: lang === 'th' }">ไทย</RouterLink>
        <RouterLink :to="to(page, 'en')" hreflang="en" lang="en" :class="{ on: lang === 'en' }">EN</RouterLink>
      </div>

      <div class="rail__bottom">
        <!-- TODO: ยืนยันกับลูกค้าว่าให้บริการ 24/7 จริง -->
        <span class="rail__label">24/7</span>
        <a :href="PHONE_TEL" class="rail__phone">{{ PHONE }}</a>
        <RouterLink :to="to('contact')" class="btn btn-primary btn-split">{{ c.cta }} <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
  </aside>
</template>
