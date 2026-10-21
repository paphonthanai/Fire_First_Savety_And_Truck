<script setup>
import FfImg from '../components/FfImg.vue'
import { useSite } from '../composables/useSite.js'
import { useSeo } from '../composables/useSeo.js'

const { c } = useSite()
useSeo()
</script>

<template>
  <section class="band">
    <span class="kicker">{{ c.h.about }}</span>
    <h1 class="band__h1">{{ c.about.h }}</h1>
  </section>

  <section class="about-photo rule">
    <FfImg name="hq" cover priority class="hover-color" />
  </section>

  <section class="about-body rule">
    <p class="about-body__p">{{ c.about.p }}</p>
    <div class="facts">
      <div class="facts__md">
        <div class="facts__name">{{ c.about.md }}</div>
        <div class="facts__role">{{ c.about.mdr }}</div>
      </div>
      <dl>
        <div v-for="f in c.about.facts" :key="f.k" class="facts__row">
          <dt>{{ f.k }}</dt>
          <dd>{{ f.v }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="values rule">
    <div v-for="v in c.values" :key="v.k" class="values__cell">
      <h2 class="values__k">{{ v.k }}</h2>
      <p>{{ v.d }}</p>
    </div>
  </section>
</template>
