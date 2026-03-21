import { getCollection } from "astro:content";

export async function getSortedBlogPosts() {
	return (await getCollection("blog")).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}
