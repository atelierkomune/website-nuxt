// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  fonts: {
    families: [
      {
        name: 'Suisse',
        provider: 'local',
        src: [
          '/fonts/Suisse-Regular.eot',
          '/fonts/Suisse-Regular.svg',
          '/fonts/Suisse-Regular.woff2',
          '/fonts/Suisse-Regular.woff',
          '/fonts/Suisse-Regular.ttf'
        ],
        weight: 'regular',
        style: 'normal'
      }
    ]
  },

  router: {
    options: {
      scrollBehaviorType: undefined
    }
  },
  
  hub: {
    database: true
  },

  image: {
    cloudflare: {
      baseURL: 'https://newatelierkomune.barquette.club'
    }
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