<script setup>
import { ref, computed, watch } from 'vue'
import FfImg from '../components/FfImg.vue'
import { useSite } from '../composables/useSite.js'
import { useSeo } from '../composables/useSeo.js'

const { lang, c } = useSite()
useSeo()

const cat = ref(0)
watch(lang, () => (cat.value = 0))
const cats = computed(() => [c.value.h.all, ...new Set(c.value.works.map((w) => w.c))])
const items = computed(() => (cat.value ? c.value.works.filter((w) => w.c === cats.value[cat.value]) : c.value.works))
</script>

<template>
  <section class="page-head page-head--split rule">
    <h1 class="page-h1">{{ c.h.works }}</h1>
    <div class="filters" role="group" :aria-label="lang === 'th' ? 'กรองตามหมวดหมู่' : 'Filter by category'">
      <button
        v-for="(k, i) in cats"
        :key="k"
        type="button"
        :class="{ on: i === cat }"
        :aria-pressed="i === cat"
        @click="cat = i"
      >{{ k }}</button>
    </div>
  </section>

  <section class="works-grid">
    <article v-for="w in items" :key="w.img" class="works-grid__item">
      <div class="works-grid__img">
        <FfImg :name="w.img.replace('.jpg', '')" :alt="w.t" cover position="top" class="hover-color" />
      </div>
      <div class="works-grid__cap">
        <span class="works-grid__cat">{{ w.c }}</span>
        <h2 class="works-grid__t">{{ w.t }}</h2>
      </div>
    </article>
  </section>
</template>
