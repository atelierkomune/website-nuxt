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
        logo: group({
          title: 'Diapo',
          icon: 'i-mdi-image',
          fields: {
            lightMode: field({ type: 'media' }),
            darkMode: field({ type: 'media' }),
            landing: field({ type: 'media' }),
          }
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
          title: 'Font',
          icon: 'i-mdi-format-text-variant',
          fields: {
            paragraphe: field({
              title: 'Font Default',
              description: 'See to find more https://fonts.google.com/',
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
              title: 'Light mode',
              type: 'string',
              required: ['neutral', 'pink', 'slate', 'teal', 'zinc']
            }),
            neutral: field({
              title: 'Dark mode',
              type: 'string',
              required: ['neutral', 'pink', 'slate', 'teal', 'zinc']
            }),
          }
        })
      }
    }),
  }
})
