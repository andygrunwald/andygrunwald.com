import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'Andy Grunwald (andygrunwald.com)',
        description: 'Software Engineer and Engineering Manager. Open Source enthusiast with a passion for Backend, Infrastructure, Reliability and Engineering Culture.',
        site: import.meta.env.SITE,
        items: await pagesGlobToRssItems(import.meta.glob(['./blog/*.mdx',])),
        customData: `<language>en-gb</language>`,
    });
}
