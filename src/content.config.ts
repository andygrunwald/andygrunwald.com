import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// The speaking entries use "" to mean "no link". Normalise that to undefined so
// templates can test presence, while still validating anything non-empty.
const optionalUrl = z
  .union([z.url(), z.literal("")])
  .transform((value) => value || undefined);

const blogPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  // `image()` resolves each path relative to the entry and fails the build on a
  // bad path, so posts get validated ImageMetadata instead of bare strings.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(image()),
      categories: z.array(z.string()),
      keywords: z.array(z.string()),
      tags: z.array(z.string()),
      pubDate: z.date(),
      lastmod: z.date(),
      showHeaderImage: z.boolean(),
    }),
});

const publicSpeakingCollection = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/content/speaking" }),
  schema: z.object({
    // Trimmed because the title is what groups appearances into one talk.
    title: z.string().trim(),
    date: z.date(),
    eventtype: z.string(),
    eventenddate: z.date(),
    eventtitle: z.string(),
    eventlink: optionalUrl,
    ratinglink: optionalUrl,
    twittermoments: optionalUrl,
    videolink: optionalUrl,
    slides: optionalUrl,
    picture: z.string().optional(),
    city: z.string(),
    country: z.string(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
  schema: z.object({
    name: z.string(),
    website: z.url(),
    links: z.array(z.url()),
    blogposts: z.array(z.url()),
    startDate: z.date(),
    endDate: z.date(),
  }),
});

export const collections = {
  blog: blogPostsCollection,
  speaking: publicSpeakingCollection,
  project: projectCollection,
};
