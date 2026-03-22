import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogPostsCollection = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
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
  loader: glob({ pattern: "**/*.yml", base: "./src/content/speaking" }),
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
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
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
