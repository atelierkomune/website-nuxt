// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
  ],

  hub: {
    database: true
  },

  image: {
    baseURL: 'https://newatelierkomune.barquette.club'
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  devServer: {
    port: 3003
  },

  nitro: {
    preset: 'cloudflare_pages',
    experimental: {
      openAPI: true
    }
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  compatibilityDate: '2024-11-27'
})