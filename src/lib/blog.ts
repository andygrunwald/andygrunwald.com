import { getCollection, type CollectionEntry } from "astro:content";

export async function getSortedBlogPosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
