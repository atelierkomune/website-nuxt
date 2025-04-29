export default defineAppConfig({
  // https://nuxt.com/docs/guide/directory-structure/app-config
  // https://content.nuxt.com/docs/studio/config
  app: {
    sitename: 'Atelier Komune',
    darkMode: true,

    diapo: {
      images: {
        one: '/projects/ATELIER-MATERIA_CENTRE-TECHNIQUE/ATELIER-MATERIA_CENTRE-TECHNIQUE-AJACCIO-02.jpg',
        two: '/projects/ATELIER-MATERIA_CENTRE-TECHNIQUE/ATELIER-MATERIA_CENTRE-TECHNIQUE-AJACCIO.jpg',
        three: '/projects/LANOIRE-N-COURRIAN/LANOIRE-N-COURRIAN_LOGEMENTS-BORDEAUX.jpg',
        four: '/projects/BERRANGER-N-VINCENT/BERRANGER-N-VINCENT_MEDIATHEQUE-SAINT-YVI-02.jpg',
        five: '/projects/ATELIER-MATERIA_LOGEMENTS-APPIETTO/ATELIER-MATERIA_LOGEMENTS-APPIETTO-02.jpg',
      }
    },

    fonts: {
      title: 'comics sans',
      paragraphe: 'comics sans'
    }
  },
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'zinc',
      neutral: 'zinc',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    navigationMenu: {
      slots: {
        link: 'font-bold',
        linkTrailingIcon: 'size-2'
      }
    }
  }
})