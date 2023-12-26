import { z, defineCollection } from "astro:content";

const blogPostsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(z.string()),
      categories: z.array(z.string()),
      keywords: z.array(z.string()),
      tags: z.array(z.string()),
      pubDate: z.date(),
      lastmod: z.date(),
      showHeaderImage: z.boolean()
    })
});

export const collections = {
  blog: blogPostsCollection,
};