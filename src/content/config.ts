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

const publicSpeakingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    eventtype: z.string(),
    eventenddate: z.date(),
    eventtitle: z.string(),
    eventlink: z.string(),
    ratinglink: z.string(),
    twittermoments: z.string(),
    videolink: z.string(),
    slides: z.string(),
    picture: z.string(),
    city: z.string(),
    country: z.string(),
  })
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    website: z.string(),
    links: z.array(z.string()),
    blogposts: z.array(z.string()),
    startDate: z.date(),
    endDate: z.date(),
  })
});

export const collections = {
  blog: blogPostsCollection,
  speaking: publicSpeakingCollection,
  project: projectCollection,
};