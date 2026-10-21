<script setup>
import { ref, computed } from 'vue'
import FfImg from '../components/FfImg.vue'
import { useSite } from '../composables/useSite.js'
import { useSeo } from '../composables/useSeo.js'
import { SITE_URL } from '../content/site.js'

const { lang, c, to, pad } = useSite()
const rev = ref(0)
const review = computed(() => c.value.reviews[rev.value])

const videoTitle = computed(() =>
  lang.value === 'th'
    ? 'แนะนำบริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค — สถานีดับเพลิงและกู้ภัยครบวงจร'
    : 'Fire First Safety & Truck — complete fire & rescue station solutions',
)

useSeo(({ c }) => [
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: videoTitle.value,
    description: c.hero.lead,
    thumbnailUrl: `${SITE_URL}/img/pitch-poster.jpg`,
    contentUrl: `${SITE_URL}/img/pitch.mp4`,
    uploadDate: '2026-10-21', // TODO: แก้เป็นวันที่เผยแพร่วิดีโอจริง
    duration: 'PT30S',
  },
])

// ผลงาน 5 ชิ้นแรก: ชิ้นแรกสูง 2 แถว ที่เหลืออัตราส่วน 4/5
const worksTop = computed(() => c.value.works.slice(0, 5))
</script>

<template>
  <section class="hero">
    <div class="hero__copy">
      <span class="kicker">{{ c.hero.kicker }}</span>
      <p class="hero__words">
        <span v-for="v in c.values" :key="v.k">{{ v.k }}.</span>
      </p>
      <div class="hero__foot">
        <p class="hero__lead">{{ c.hero.lead }}</p>
        <RouterLink :to="to('products')" class="btn-dark">{{ c.h.services }} <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
    <div class="hero__media">
      <FfImg name="firefighters" cover priority class="hover-color" />
    </div>
  </section>

  <section class="video">
    <video
      controls
      playsinline
      preload="none"
      poster="/img/pitch-poster.jpg"
      :title="videoTitle"
      :aria-label="lang === 'th' ? 'วิดีโอแนะนำบริษัท Fire First 30 วินาที' : 'Fire First 30-second company video'"
      width="1920"
      height="1080"
    >
      <source src="/img/pitch.mp4" type="video/mp4" />
    </video>
  </section>

  <section class="intro rule">
    <h1 class="intro__h1">{{ c.hero.h1 }}</h1>
    <div class="intro__body">
      <p>{{ c.about.p }}</p>
      <RouterLink :to="to('about')" class="btn btn-ghost">{{ c.h.about }} →</RouterLink>
    </div>
  </section>

  <section class="rule">
    <div class="sec-head"><span class="sec-num">01</span><h2>{{ c.h.services }}</h2></div>
    <ul class="svc-list">
      <li v-for="(s, i) in c.services" :key="s.t">
        <RouterLink :to="to('products')" class="svc-row">
          <span class="svc-row__n">{{ pad(i) }}</span>
          <span class="svc-row__t">{{ s.t }}</span>
          <span class="svc-row__d">{{ s.d }}</span>
          <span class="svc-row__a" aria-hidden="true">→</span>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section class="strip rule">
    <div><FfImg name="unimog" cover class="hover-color" /></div>
    <div><FfImg name="nozzle" cover class="hover-color" /></div>
    <div><FfImg name="tactical" cover class="hover-color" /></div>
  </section>

  <section class="pad rule">
    <div class="sec-head sec-head--flush">
      <span class="sec-num">02</span>
      <h2>{{ c.h.works }}</h2>
      <RouterLink :to="to('works')" class="btn btn-ghost">{{ c.more }} →</RouterLink>
    </div>
    <div class="works-mosaic">
      <figure v-for="(w, i) in worksTop" :key="w.img" :class="{ 'is-tall': i === 0 }">
        <div class="works-mosaic__img">
          <FfImg :name="w.img.replace('.jpg', '')" :alt="w.t" cover position="top" class="hover-color" />
        </div>
        <figcaption>{{ w.t }}</figcaption>
      </figure>
    </div>
  </section>

  <section class="reviews rule">
    <div class="reviews__side">
      <div class="sec-head sec-head--flush"><span class="sec-num">03</span><h2 class="reviews__h">{{ c.h.reviews }}</h2></div>
      <!-- TODO: ลบป้ายนี้เมื่อได้รีวิวจริงจากลูกค้า -->
      <span class="tag tag-neutral">{{ c.reviewNote }}</span>
      <div class="seg-num" role="tablist" :aria-label="c.h.reviews">
        <button
          v-for="(r, i) in c.reviews"
          :key="i"
          type="button"
          role="tab"
          :aria-selected="i === rev"
          :class="{ on: i === rev }"
          @click="rev = i"
        >{{ pad(i) }}</button>
      </div>
    </div>
    <figure class="reviews__quote" aria-live="polite">
      <blockquote>“{{ review.q }}”</blockquote>
      <figcaption>— {{ review.w }}</figcaption>
    </figure>
  </section>
</template>
