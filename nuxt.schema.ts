import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: 'App',
      description: 'App configuration',
      icon: 'i-mdi-application-brackets',
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
