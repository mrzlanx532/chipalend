// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
      '~/assets/app.scss',
      'vue3-carousel/carousel.css'
  ],
  modules: [
    'v-gsap-nuxt',
    ['@nuxtjs/google-fonts', {
        families: {
            'Shantell Sans': true,
            'Balsamiq Sans': true,
            'Geologica': true
        }
    }]
  ]
})