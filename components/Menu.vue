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

const lockScroll = (e) => {
  e.preventDefault()
}

const openMenu = () => {
  mobIsActive.value = true
  document.body.style.touchAction = 'none'
}

const closeMenu = () => {
  mobIsActive.value = false
  document.body.style.touchAction = 'auto'
}

const onClickWhatsapp = () => {
  const a = document.createElement('a')
  a.href = 'whatsapp://send?phone=79031559009'
  a.click()
}

onClickOutside(menuMobileTemplate, () => mobIsActive.value = false)

onMounted(() => {

  const element = document.getElementsByClassName('hero__container')[0]

  const observer = new IntersectionObserver((entries) => {
    if (!isFirstCallbackExecuted) {
      //isFirstCallbackExecuted = true
      //return
    }

   /* if (entries[0].isIntersecting) {
      menuItems1Template.value?.classList.add('white')
      menuCompanyNameTemplate.value.style.color = 'black'
      menuItemsTemplate.value.forEach(item => {
        item.style.color = 'black'
      })
    } else {
      menuItems1Template.value?.classList.remove('white')
      menuCompanyNameTemplate.value.style.color = 'white'
      menuItemsTemplate.value.forEach(item => {
        item.style.color = 'white'
      })
    }*/
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
    <ul class="menu__items" ref="menuItems1Template" v-gsap.fromInvisible.from='{ delay: 0.1, y: -10 }'>
      <li v-for="item in items">
        <a :href="item.link" ref="menuItemsTemplate">{{ item.label }}</a>
      </li>
    </ul>
    <div class="burger-container" @click="openMenu">
      <svg height="50" width="50">
        <use xlink:href="/sprite.svg#burger" />
      </svg>
    </div>
  </div>
  <div class="menu-mobile" :class="{'active': mobIsActive}" ref="menuMobileTemplate">
    <div>
      <div class="menu-mobile__header-container">
        <div class="menu-mobile__company-name" ref="menuCompanyNameTemplate">TOP1ANIMATOR</div>
        <svg height="28" width="28" @click="closeMenu">
          <use xlink:href="/sprite.svg#close" />
        </svg>
      </div>
      <ul class="menu-mobile__items">
        <li v-for="item in items" ><a :href="item.link">{{ item.label }}</a></li>
      </ul>
    </div>
    <div>
      <div class="menu-mobile__phone-container">
        <div class="menu-mobile__messengers">
          <div class="menu-mobile__messenger" @click="onClickWhatsapp">
            <div class="menu-mobile__messenger-label">
              <a class="menu-mobile__whatsapp-link">Написать в <span style="color: #40c351;">Whatsapp</span></a>
            </div>
          </div>
          <div class="menu-mobile__messenger">
            <div class="menu-mobile__messenger-label">
              <a class="menu-mobile__telegram-link">&nbsp;Написать в <span style="color: #29b6f6;">Telegram</span>&nbsp;</a>
            </div>
          </div>
        </div>
        <div>Бесплатная консультация</div>
        <a href="tel:+79999999999">+7 (999) 999-99-99</a>
      </div>
    </div>
  </div>
</template>