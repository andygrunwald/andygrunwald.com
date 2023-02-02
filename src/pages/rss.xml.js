import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Andy Grunwald (andygrunwald.com)',
        description: 'I am a Software Engineer, conference and meetup organizer, and open source enthusiast with a passion for on Backend, Infrastructure, Reliability and Engineering Culture.',
        site: import.meta.env.SITE,
        items: await pagesGlobToRssItems(import.meta.glob(['./blog/*.mdx',])),
        customData: `<language>en-gb</language>`,
    });
}
