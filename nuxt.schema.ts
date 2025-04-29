import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: 'App',
      description: 'App configuration',
      icon: 'i-mdi-application-brackets',
      fields: {
        background: field({
          type: 'string',
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
    }),
    ui: group({
      title: 'Ui',
      fields: {
        colors: group({
          title: 'color',
          fields: {
            primary: field({
              title: 'Primary',
              type: 'string',
              required: ['slate', 'teal', 'zinc', 'pink']
            }),
            neutral: field({
              title: 'Neutral',
              type: 'string',
              required: ['slate', 'teal', 'zinc', 'pink']
            }),
          }
        })
      }
    }),
  }
})
