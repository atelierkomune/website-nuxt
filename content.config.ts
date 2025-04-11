import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: {
        include: '*.md',
        exclude: ['projects/**'],
        prefix: '/',
      },
      schema: z.object({
        published: z.boolean(),
        date: z.string(),
        showPageInMenu: z.boolean(),
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'projects/*.md',
        prefix: '/',
      },
      schema: z.object({
        published: z.boolean(),
        date: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
      })
    })
  }
})
