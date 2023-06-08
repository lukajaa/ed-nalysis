// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ed-nalysis'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gtag',
        'nuxt-icon',
    ],
    gtag: {
        id: 'G-QNLZ5NY7HH'
    }
})
