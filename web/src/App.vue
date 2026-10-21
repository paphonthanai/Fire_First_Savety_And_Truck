<script setup>
import SiteRail from './components/SiteRail.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useSite } from './composables/useSite.js'
const { lang } = useSite()
</script>

<template>
  <a class="skip" href="#main">{{ lang === 'th' ? 'ข้ามไปยังเนื้อหา' : 'Skip to content' }}</a>
  <div class="shell">
    <SiteRail />
    <div class="shell__main">
      <main id="main">
        <RouterView />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
