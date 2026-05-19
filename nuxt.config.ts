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
    '@vueuse/nuxt',
    'nuxt-studio'
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

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/']
    },
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

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  studio: {
    dev: true,
    route: '/_studio',
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'atelierkomune',
      repo: 'website-nuxt',
      branch: 'main'
    }
  },

  compatibilityDate: '2024-11-27'
})