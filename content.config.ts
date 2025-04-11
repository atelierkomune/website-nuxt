import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: '/*.md',
      schema: z.object({
        published: z.boolean(),
        date: z.string(),
        type: z.enum(['page', 'project'])
      })
    }),
    project: defineCollection({
      type: 'page',
      source: '/projects/*.md',
      schema: z.object({
        published: z.boolean(),
        date: z.string(),
        image: z.string()
      })
    })
  }
})
