<script setup>
import { ref, reactive } from 'vue'
import { useSite } from '../composables/useSite.js'
import { useSeo } from '../composables/useSeo.js'
import { submitInquiry } from '../firebase.js'
import { PHONE, PHONE_TEL, EMAIL } from '../content/site.js'

const { lang, c, pad } = useSite()

useSeo(({ c }) => [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  },
])

const faqOpen = ref(0)
const toggle = (i) => (faqOpen.value = faqOpen.value === i ? -1 : i)

const form = reactive({ name: '', org: '', phone: '', message: '', website: '' })
const status = ref('idle') // idle | sending | sent | error

async function submit() {
  if (status.value === 'sending') return
  // honeypot: บอทมักกรอกช่องที่ซ่อนไว้
  if (form.website) {
    status.value = 'sent'
    return
  }
  status.value = 'sending'
  try {
    await submitInquiry({ ...form, lang: lang.value })
    status.value = 'sent'
    Object.assign(form, { name: '', org: '', phone: '', message: '' })
  } catch (e) {
    console.error(e)
    status.value = 'error'
  }
}
</script>

<template>
  <section class="contact-band">
    <div class="contact-band__info">
      <h1 class="page-h1">{{ c.h.contact }}</h1>
      <a :href="PHONE_TEL" class="contact-band__phone">{{ PHONE }}</a>
      <a :href="`mailto:${EMAIL}`" class="contact-band__mail">{{ EMAIL }}</a>
      <address class="contact-band__addr">{{ c.legal }}<br />{{ c.contact.addr }}</address>
    </div>

    <form class="contact-form" @submit.prevent="submit">
      <div class="field">
        <label for="f-name">{{ c.contact.l.name }} *</label>
        <input id="f-name" v-model="form.name" class="input" name="name" autocomplete="name" maxlength="120" required />
      </div>
      <div class="field">
        <label for="f-org">{{ c.contact.l.org }}</label>
        <input id="f-org" v-model="form.org" class="input" name="organization" autocomplete="organization" maxlength="160" />
      </div>
      <div class="field">
        <label for="f-tel">{{ c.contact.l.tel }} *</label>
        <input
          id="f-tel"
          v-model="form.phone"
          class="input"
          type="tel"
          name="tel"
          autocomplete="tel"
          inputmode="tel"
          pattern="[0-9+()\- ]{6,20}"
          required
        />
      </div>
      <div class="field">
        <label for="f-msg">{{ c.contact.l.msg }}</label>
        <textarea id="f-msg" v-model="form.message" class="input" rows="4" maxlength="3000" />
      </div>
      <div class="hp" aria-hidden="true">
        <label for="f-web">Website</label>
        <input id="f-web" v-model="form.website" tabindex="-1" autocomplete="off" />
      </div>
      <button type="submit" class="btn btn-primary btn-split btn-lg" :disabled="status === 'sending'">
        {{ status === 'sending' ? (lang === 'th' ? 'กำลังส่ง…' : 'Sending…') : c.contact.l.send }}
        <span aria-hidden="true">→</span>
      </button>
      <p role="status" class="form-status">
        <span v-if="status === 'sent'" class="tag tag-accent">{{ c.contact.l.sent }}</span>
        <span v-else-if="status === 'error'" class="tag tag-outline">
          {{ lang === 'th' ? `ส่งไม่สำเร็จ กรุณาโทร ${PHONE} หรืออีเมล ${EMAIL}` : `Couldn't send — please call ${PHONE} or email ${EMAIL}` }}
        </span>
      </p>
    </form>
  </section>

  <iframe
    class="map"
    :title="lang === 'th' ? 'แผนที่ ไทรน้อย นนทบุรี' : 'Map — Sai Noi, Nonthaburi'"
    src="https://maps.google.com/maps?q=Sai%20Noi%2C%20Nonthaburi%2011150&z=13&output=embed"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />

  <section class="pad rule">
    <h2 class="sub-h">{{ c.h.faq }}</h2>
    <div class="faq">
      <div v-for="(q, i) in c.faq" :key="q.q" class="faq__item">
        <h3 class="faq__h">
          <button
            :id="`faq-q-${i}`"
            type="button"
            class="faq__q"
            :aria-expanded="faqOpen === i"
            :aria-controls="`faq-a-${i}`"
            @click="toggle(i)"
          >
            <span class="faq__n">{{ pad(i) }}</span>
            <span>{{ q.q }}</span>
            <span class="faq__sign" aria-hidden="true">{{ faqOpen === i ? '−' : '+' }}</span>
          </button>
        </h3>
        <!-- คำตอบอยู่ใน HTML เสมอ (ซ่อนด้วย hidden) เพื่อให้ search engine อ่านได้ -->
        <p :id="`faq-a-${i}`" class="faq__a" role="region" :aria-labelledby="`faq-q-${i}`" :hidden="faqOpen !== i">{{ q.a }}</p>
      </div>
    </div>
  </section>
</template>
