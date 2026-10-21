<script setup>
import { useSite } from '../composables/useSite.js'
import { PHONE, PHONE_TEL, EMAIL } from '../content/site.js'
const { c } = useSite()
</script>

<template>
  <footer class="footer">
    <p class="footer__close">{{ c.h.close }}</p>
    <address class="footer__meta">
      <strong>{{ c.legal }}</strong><br />
      {{ c.contact.addr }}<br />
      <a :href="PHONE_TEL">{{ PHONE }}</a> · <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a><br />
      <span>{{ c.slogan }}</span>
    </address>
  </footer>
</template>
