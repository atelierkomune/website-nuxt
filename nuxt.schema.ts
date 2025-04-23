import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: 'App',
      description: 'App configuration',
      icon: 'i-mdi-application-brackets',
      fields: {
        sitename: field({
          type: 'string',
        }),
        darkMode: field({
            type: 'boolean',
            title: 'Dark mode',
            description: 'Enable dark mode on website',
            default: false,
        }),
        diapo: group({
          title: 'Diapo',
          icon: 'i-mdi-image',
          fields: {
            images: group({
              title: 'Images',
              fields: {
                one: field({ type: 'media' }),
                two: field({ type: 'media' }),
                three: field({ type: 'media' }),
                four: field({ type: 'media' }),
                five: field({ type: 'media' }),
              }
            })
          }
        })
      }
    })
  }
})
