export default defineAppConfig({
  // https://nuxt.com/docs/guide/directory-structure/app-config
  // https://content.nuxt.com/docs/studio/config
  app: {
    sitename: 'Atelier Komune',
    darkMode: true,
    diapo: {
      images: {
        one: '/projects/LANDING/36-b-compressed.jpg',
        two: '',
        three: '',
        four: '',
        five: '',
      }
    },
    fonts: {
      title: 'Outfit',
      paragraphe: 'IBM Plex Mono'
    }
  },
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'neutral',
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