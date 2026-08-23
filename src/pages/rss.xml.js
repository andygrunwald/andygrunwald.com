import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { getSortedBlogPosts } from "../lib/blog";

// Post descriptions are authored as Markdown and rendered on the site through
// astro-remote. Feed readers do not render Markdown, so without this the raw
// source (link brackets, emphasis markers) shows up verbatim in the feed.
// renderInline keeps the single-paragraph descriptions free of a wrapping <p>.
const markdown = new MarkdownIt();

function renderDescription(description) {
  return sanitizeHtml(markdown.renderInline(description));
}

export async function GET(context) {
  const blogPosts = await getSortedBlogPosts();
  return rss({
    title: "Andy Grunwald (andygrunwald.com)",
    description:
      "Software Engineer and Engineering Manager. Open Source enthusiast with a passion for Backend, Infrastructure, Reliability and Engineering Culture.",
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: renderDescription(post.data.description),
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
