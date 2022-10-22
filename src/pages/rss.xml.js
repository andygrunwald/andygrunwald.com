import rss from '@astrojs/rss';

const rssItems  = import.meta.glob([
    './blog/*.mdx',
]);

// Docs: https://docs.astro.build/en/guides/rss/
export const get = () => rss({
    title: 'Andy Grunwald (andygrunwald.com)',
    description: 'I am a Software Engineer, conference and meetup organizer, and open source enthusiast with a passion for on Backend, Infrastructure, Reliability and Engineering Culture.',
    site: import.meta.env.SITE,
    items: rssItems,
    customData: `<language>en-gb</language>`,
});
