export default defineAppConfig({
  // https://nuxt.com/docs/guide/directory-structure/app-config
  // https://content.nuxt.com/docs/studio/config
  app: {
    darkMode: true,
    diapoImages: ['/projects/TNA/TNA-MEDIATHEQUE-VAUCLUSE.jpg']
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