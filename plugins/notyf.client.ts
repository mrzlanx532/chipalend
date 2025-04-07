import { Notyf } from 'notyf'

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            notyf: new Notyf
        }
    }
})