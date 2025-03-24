<script setup lang="ts">
import Menu from '@/components/Menu.vue'

const heroTemplateRef = ref(null)
const heroCoverTemplateRef = ref(null)
const calculatedHeight = ref<string>('0')

const recalculateHeight = () => {
  const rect = heroTemplateRef.value.getBoundingClientRect()

  calculatedHeight.value = rect.height

  heroCoverTemplateRef.value.style.height = `${calculatedHeight.value}px`
}

onMounted(() => {
  new ResizeObserver(recalculateHeight).observe(document.body)
  recalculateHeight()
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
