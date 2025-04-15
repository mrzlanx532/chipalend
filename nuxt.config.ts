// https://nuxt.com/docs/api/configuration/nuxt-config
import { process } from 'std-env'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    app: {
        head: {
            title: 'Организация детских праздников от профессиональных аниматоров в Москве',
            htmlAttrs: {
                lang: 'ru'
            }
        }
    },
    devtools: {
        enabled: false
    },
    css: [
        '~/assets/app.scss',
        '@splidejs/vue-splide/css',
        'vue-final-modal/style.css',
        'notyf/notyf.min.css'
    ],
    modules: [
        'v-gsap-nuxt',
        'nuxt-nodemailer',
        ['@nuxtjs/google-fonts', {
            families: {
                'Shantell Sans': true,
                'Balsamiq Sans': true,
                'Geologica': true
            }
        }],
    ],
    nodemailer: {
        from: process.env.NUXT_NODEMAILER_FROM,
        host: process.env.NUXT_NODEMAILER_HOST || 'smtp.mail.ru',
        port: process.env.NUXT_NODEMAILER_PORT || 465,
        secure: true,
        auth: {
            user: process.env.NUXT_NODEMAILER_USER,
            pass: process.env.NUXT_NODEMAILER_PASS,
        },
    },
})