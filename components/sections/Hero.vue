<script setup lang="ts">
import Menu from '@/components/Menu.vue'

const heroTemplateRef = ref(null)
const heroCoverTemplateRef = ref(null)
const calculatedHeight = ref<number>(0)

const recalculateHeight = () => {
  calculatedHeight.value = window.innerHeight

  heroCoverTemplateRef.value.style.height = `${calculatedHeight.value}px`
  heroTemplateRef.value.style.height = `${calculatedHeight.value}px`
}

onMounted(() => {
  window.addEventListener('load', recalculateHeight)
  window.addEventListener('resize', recalculateHeight)
})
</script>

<template>
  <div class="hero" ref="heroTemplateRef"/>
  <div class="hero__cover" ref="heroCoverTemplateRef"/>
  <Menu />
  <div class="container">
    <div style="padding: 2em;">
      <h1>Организация детских праздников от профессиональных аниматоров в Москве</h1>
      <h2>Поможем Вам с выбором программы под любой возраст и бюджет!</h2>
      <div class="flex flex-center">
        <button class="hero__button">Связаться</button>
      </div>
    </div>
  </div>
</template>
