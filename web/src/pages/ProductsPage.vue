<script setup>
import { useSite } from '../composables/useSite.js'
import { useSeo } from '../composables/useSeo.js'

const { c, to, pad } = useSite()
useSeo()
</script>

<template>
  <section class="page-head rule">
    <h1 class="page-h1">{{ c.h.services }}</h1>
  </section>

  <section class="svc-grid rule">
    <article v-for="(s, i) in c.services" :key="s.t" class="svc-cell">
      <span class="svc-cell__n">{{ pad(i) }}</span>
      <div>
        <h2 class="svc-cell__t">{{ s.t }}</h2>
        <p class="svc-cell__d">{{ s.d }}</p>
      </div>
    </article>
  </section>

  <section class="pad-x"><h2 class="sub-h">{{ c.h.fleet }}</h2></section>
  <section class="fleet">
    <article v-for="(f, i) in c.fleet" :key="f.t" class="fleet__cell">
      <span class="fleet__n">{{ pad(i) }}</span>
      <h3 class="fleet__t">{{ f.t }}</h3>
      <p class="fleet__d">{{ f.d }}</p>
    </article>
  </section>

  <section class="pad rule">
    <h2 class="sub-h">{{ c.h.pricing }}</h2>
    <!-- TODO: ราคาจริงรอข้อมูลจากลูกค้า -->
    <div v-for="p in c.pricing" :key="p.t" class="price-row">
      <h3 class="price-row__t">{{ p.t }}</h3>
      <ul class="price-row__f">
        <li v-for="x in p.f" :key="x" class="tag tag-neutral">{{ x }}</li>
      </ul>
      <div class="price-row__p">
        <span>{{ p.p }}</span>
        <small>{{ p.u }}</small>
      </div>
      <RouterLink :to="to('contact')" class="btn btn-secondary">{{ c.cta }} →</RouterLink>
    </div>
  </section>
</template>
