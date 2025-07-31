<script setup lang="ts">
import useSocialLinks from '~/composables/useSocialLinks'

const config = useRuntimeConfig()

const {
  onClickWhatsapp,
  onClickTelegram,
  getFormattedPhone
} = useSocialLinks()

const phone = ref(config.public.phone)
const formattedPhone = getFormattedPhone()
</script>

<template>
  <div class="footer">
    <div class="container">
        <div class="footer__info">
        <div>chipalend@gmail.com</div>
        <div>8 (900) 149-83-03</div>
<!--        <div>
          <a v-if="phone" :href="'tel:+' + phone">{{ formattedPhone }}</a>
          <div class="footer__social-links-container">
            <div class="footer__social-links">
              <svg height="30" width="30">
                <use xlink:href="/sprite.svg#telegram" @click="onClickTelegram"/>
              </svg>
              <svg height="30" width="30" @click="onClickWhatsapp">
                <use xlink:href="/sprite.svg#whatsapp" />
              </svg>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>