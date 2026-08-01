import { defineCollection, z } from 'astro:content';

const nieuws = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Sanne Verduin'),
  }),
});

export const collections = { nieuws };
