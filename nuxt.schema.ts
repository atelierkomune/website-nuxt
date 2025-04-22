import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI configuration',
      icon: 'i-ph-palette-fill',
      fields: {
        darkMode: field({
            type: 'boolean',
            title: 'Dark mode',
            description: 'Enable dark mode on website',
            default: false,
        })
      }
    })
  }
})
