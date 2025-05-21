import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // page collection
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
    // projects collection
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'projects/*.md',
        prefix: '/projects',
      },
      schema: z.object({
        company: z.string(),
        project: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
      })
    })
  }
})
