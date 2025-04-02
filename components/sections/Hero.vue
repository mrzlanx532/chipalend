<script setup lang="ts">
import Menu from '@/components/Menu.vue'

const heroTemplateRef = ref(null)
const heroCoverTemplateRef = ref(null)
const heroAnimatorContainerTemplateRef = ref(null)
const calculatedHeight = ref<number>(0)

const setHeight = () => {
  calculatedHeight.value = document.documentElement.clientHeight

  heroCoverTemplateRef.value.style.height = `${calculatedHeight.value}px`
  heroTemplateRef.value.style.height = `${calculatedHeight.value}px`
  heroAnimatorContainerTemplateRef.value.style.height = `${calculatedHeight.value}px`
}

onMounted(() => {
  setHeight()

  useGSAP().to('.hero__subheader', {
    text: 'Поможем Вам с выбором программы под любой возраст и бюджет!',
    duration: 2
  })
})
</script>

<template>
  <div class="hero" ref="heroTemplateRef"/>
  <div class="hero__cover" ref="heroCoverTemplateRef"/>
  <div class="hero__animator-container" ref="heroAnimatorContainerTemplateRef">
    <img class="hero__animator-pirat" v-gsap.fromInvisible.from='{ delay: 0.2, x: -10 }' src="/img/hero-animator-pirat.png"/>
    <img class="hero__animator-spiderman" v-gsap.fromInvisible.from='{ delay: 0.2, x: 20 }' src="/img/hero-animator-spiderman.png"/>
    <img class="hero__animator-white-snow" v-gsap.fromInvisible.from='{ delay: 0.5, x: -20 }' src="/img/hero-animator-white-snow.png"/>
    <img class="hero__animator-pony" v-gsap.fromInvisible.from='{ delay: 0.5, x: -10 }' src="/img/hero-animator-pony.png"/>
  </div>
  <Menu />
  <div class="hero__container container">
    <div style="padding: 2em;">
      <h1 class="hero__header" v-gsap.fromInvisible.from='{ delay: 0.1, y: 10 }'>Организация детских праздников от профессиональных аниматоров в Москве</h1>
      <h2 class="hero__subheader" v-gsap.fromInvisible.from='{ delay: 0.1, y: 10 }'></h2>
      <div class="flex flex-center">
        <button class="button --not-white" v-gsap.fromInvisible.from='{ delay: 1.5, y: 10 }'>Связаться</button>
      </div>
    </div>
  </div>
</template>
