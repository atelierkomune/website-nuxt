export default defineAppConfig({
  // https://nuxt.com/docs/guide/directory-structure/app-config
  app: {
    darkMode: false
  },
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'gray',
      neutral: 'slate',
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
