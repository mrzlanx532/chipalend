<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const mobIsActive = ref(false)
const menuMobileTemplate = useTemplateRef<HTMLDivElement>('menuMobileTemplate')
const menuTemplate = useTemplateRef<HTMLDivElement>('menuTemplate')
const menuCompanyNameTemplate = useTemplateRef<HTMLDivElement>('menuCompanyNameTemplate')
const menuItemsTemplate = useTemplateRef<HTMLDivElement>('menuItemsTemplate')
const menuItems1Template = useTemplateRef<HTMLDivElement>('menuItems1Template')

let isFirstCallbackExecuted = false

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

onMounted(() => {

  const element = document.getElementsByClassName('hero__container')[0]

  const observer = new IntersectionObserver((entries) => {
    if (!isFirstCallbackExecuted) {
      //isFirstCallbackExecuted = true
      //return
    }

    if (entries[0].isIntersecting) {
      menuItems1Template.value?.classList.remove('white')

      menuCompanyNameTemplate.value.style.color = 'white'

      menuItemsTemplate.value.forEach(item => {

        console.log(item)

        item.style.color = 'white'
      })
    } else {
      menuItems1Template.value?.classList.add('white')
      menuCompanyNameTemplate.value.style.color = 'black'
      menuItemsTemplate.value.forEach(item => {
        console.log(item)
        item.style.color = 'black'
      })
      console.log(menuItemsTemplate.value)
    }
  })

  observer.observe(element, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
})
</script>

<template>
  <div class="menu" ref="menuTemplate">
    <div class="menu__company-name" ref="menuCompanyNameTemplate">TOP1ANIMATOR</div>
    <ul class="menu__items" ref="menuItems1Template">
      <li v-for="item in items">
        <a :href="item.link" ref="menuItemsTemplate">{{ item.label }}</a>
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
    <ul class="menu-mobile__items">
      <li v-for="item in items" ><a :href="item.link">{{ item.label }}</a></li>
    </ul>
  </div>
</template>