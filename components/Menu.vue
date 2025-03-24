<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const mobIsActive = ref(false)
const menuMobileTemplate = useTemplateRef<HTMLDivElement>('menuMobileTemplate')

const items = [
  {
    label: 'Главная',
    link: '#',
  },
  {
    label: 'Преимущества',
    link: '#',
  },
  {
    label: 'Тарифы',
    link: '#',
  },
  {
    label: 'Отзывы',
    link: '#',
  },
  {
    label: 'Контакты',
    link: '#',
  },
]

onClickOutside(menuMobileTemplate, () => mobIsActive.value = false)
</script>

<template>
  <div class="menu">
    <div class="menu__company-name">TOP1ANIMATOR</div>
    <ul class="menu__items">
      <li v-for="item in items">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </ul>
    <div class="burger-container" @click="mobIsActive = !mobIsActive">
      <svg height="50" width="50">
        <use xlink:href="/sprite.svg#burger" />
      </svg>
    </div>
  </div>
  <div class="menu-mobile" :class="{'active': mobIsActive}" ref="menuMobileTemplate">
    <div class="flex flex-center">
      <button class="menu-mobile__close-button" @click="mobIsActive = false">Закрыть</button>
    </div>
    <div v-for="item in items">{{ item.label }}</div>
  </div>
</template>