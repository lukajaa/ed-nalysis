// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ed-nalysis'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ]
})
