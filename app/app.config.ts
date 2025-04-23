export default defineAppConfig({
  // https://nuxt.com/docs/guide/directory-structure/app-config
  // https://content.nuxt.com/docs/studio/config
  app: {
    sitename: 'Atelier Komune',
    darkMode: true,
    diapo: {
      images: {
        one: '/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg',
        two: '/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg',
        three: '/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg',
        four: '/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg',
        five: '/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg',
      }
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