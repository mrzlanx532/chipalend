<script setup lang="ts">
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
</script>

<template>
  <div class="menu">
    <div class="menu__company-name">TOP1ANIMATOR</div>
    <ul class="menu__items">
      <li v-for="item in items">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </ul>
    <div>
      <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
      <label class="burger" for="burger-checkbox" />
    </div>
  </div>
</template>