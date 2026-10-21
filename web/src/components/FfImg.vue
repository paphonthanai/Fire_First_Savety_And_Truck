<script setup>
import { computed } from 'vue'
import { IMAGES } from '../content/site.js'
import { useSite } from '../composables/useSite.js'

// รูปทุกรูปของเว็บ: WebP + JPG สำรอง, มี width/height, lazy-load ยกเว้นรูป hero
const props = defineProps({
  name: { type: String, required: true },
  alt: { type: String, default: '' },
  priority: Boolean,
  cover: Boolean,
  position: { type: String, default: 'center' },
})
const { lang } = useSite()
const meta = computed(() => IMAGES[props.name] || {})
const altText = computed(() => props.alt || meta.value.alt?.[lang.value] || '')
</script>

<template>
  <picture :class="['ff-img', { 'ff-img--cover': cover }]">
    <source :srcset="`/img/${name}.webp`" type="image/webp" />
    <img
      :src="`/img/${name}.jpg`"
      :alt="altText"
      :width="meta.w"
      :height="meta.h"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
      :style="{ objectPosition: position }"
    />
  </picture>
</template>
