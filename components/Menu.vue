<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import useSocialLinks from '~/composables/useSocialLinks'

const mobIsActive = ref(false)
const menuMobileTemplate = useTemplateRef<HTMLDivElement>('menuMobileTemplate')
const menuTemplate = useTemplateRef<HTMLDivElement>('menuTemplate')
const menuCompanyNameTemplate = useTemplateRef<HTMLDivElement>('menuCompanyNameTemplate')
const menuItemsTemplate = useTemplateRef<HTMLDivElement>('menuItemsTemplate')
const menuItems1Template = useTemplateRef<HTMLDivElement>('menuItems1Template')

const {
  onClickWhatsapp,
  onClickTelegram,
  getFormattedPhone
} = useSocialLinks()

const config = useRuntimeConfig()
const phone = ref(config.public.phone)
const formattedPhone = getFormattedPhone()

const items = [
  {
    label: 'Главная',
    link: '#hero',
  },
  {
    label: 'Тарифы',
    link: '#tariffs',
  },
  {
    label: 'Галерея',
    link: '#gallery',
  },
  {
    label: 'Отзывы',
    link: '#reviews',
  },
  {
    label: 'Контакты',
    link: '#contacts',
  },
]

const openMenu = () => {
  mobIsActive.value = true
  document.body.style.touchAction = 'none'
}

const closeMenu = () => {
  mobIsActive.value = false
  document.body.style.touchAction = 'auto'
}

onClickOutside(menuMobileTemplate, closeMenu)
</script>

<template>
  <div>
    <div class="menu__company-name --mobile">CHIPALEND</div>
    <div class="menu" ref="menuTemplate">
      <div class="menu__company-name" ref="menuCompanyNameTemplate">CHIPALEND</div>
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
          <div class="menu-mobile__company-name" ref="menuCompanyNameTemplate">CHIPALEND</div>
          <svg height="28" width="28" @click="closeMenu">
            <use xlink:href="/sprite.svg#close" />
          </svg>
        </div>
        <ul class="menu-mobile__items">
          <li v-for="item in items" ><a :href="item.link" @click="closeMenu">{{ item.label }}</a></li>
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
            <div class="menu-mobile__messenger" @click="onClickTelegram">
              <div class="menu-mobile__messenger-label">
                <a class="menu-mobile__telegram-link">&nbsp;Написать в <span style="color: #29b6f6;">Telegram</span>&nbsp;</a>
              </div>
            </div>
          </div>
          <div>Бесплатная консультация</div>
          <a :href="'tel:+' + phone">{{ formattedPhone }}</a>
        </div>
      </div>
    </div>
  </div>
</template>