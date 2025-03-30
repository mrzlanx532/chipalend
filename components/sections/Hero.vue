<script setup lang="ts">
import Menu from '@/components/Menu.vue'

const heroTemplateRef = ref(null)
const heroCoverTemplateRef = ref(null)
const calculatedHeight = ref<number>(0)

const setHeight = () => {
  calculatedHeight.value = document.documentElement.clientHeight

  heroCoverTemplateRef.value.style.height = `${calculatedHeight.value}px`
  heroTemplateRef.value.style.height = `${calculatedHeight.value}px`
}

onMounted(() => {
  setHeight()
})
</script>

<template>
  <div class="hero" ref="heroTemplateRef"/>
  <div class="hero__cover" ref="heroCoverTemplateRef"/>
  <Menu />
  <div class="hero__container container">
    <div style="padding: 2em;">
      <h1 class="hero__header" v-gsap.fromInvisible.from='{ delay: 0.1, y: 10 }'>Организация детских праздников от профессиональных аниматоров в Москве</h1>
      <h2 class="hero__subheader" v-gsap.fromInvisible.from='{ delay: 0.1, y: 10 }'>Поможем Вам с выбором программы под любой возраст и бюджет!</h2>
      <div class="flex flex-center">
        <button class="hero__button" v-gsap.fromInvisible.from='{ delay: 1, y: 10 }'>Связаться</button>
      </div>
    </div>
  </div>
</template>
