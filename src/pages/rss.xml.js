import rss from '@astrojs/rss';
import { getSortedBlogPosts } from "../scripts/blog.js";

export async function GET(context) {
    const blogPosts = await getSortedBlogPosts();
    return rss({
        title: 'Andy Grunwald (andygrunwald.com)',
        description: 'Software Engineer and Engineering Manager. Open Source enthusiast with a passion for Backend, Infrastructure, Reliability and Engineering Culture.',
        site: context.site,
        items: blogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-gb</language>`,
    });
}
