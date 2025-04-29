import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: 'App',
      description: 'App configuration',
      icon: 'i-mdi-application-brackets',
      fields: {
        ui: group({
          title: 'Color theme',
          fields: {
            colors: group({
              fields: {
                primary: field({
                  type: 'string',
                  required: ['slate', 'teal', 'zinc']
                }),
                neutral: field({
                  type: 'string',
                  required: ['slate', 'teal', 'zinc']
                }),
              }
            })
          }
        }),
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
        }),
        fonts: group({
          title: 'Fonts',
          icon: 'i-mdi-format-text-variant',
          fields: {
            title: field({
              title: 'Title font',
              type: 'string',
            }),
            paragraphe: field({
              title: 'Title font',
              type: 'string',
            })
          }
        })
      }
    })
  }
})
