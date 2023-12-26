import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
    const blogPosts = await getCollection("blog");
    return rss({
        title: 'Andy Grunwald (andygrunwald.com)',
        description: 'Software Engineer and Engineering Manager. Open Source enthusiast with a passion for Backend, Infrastructure, Reliability and Engineering Culture.',
        site: import.meta.env.SITE,
        items: blogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-gb</language>`,
    });
}
