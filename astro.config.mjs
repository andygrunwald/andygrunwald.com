import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

import { slug as githubSlug } from "github-slugger";

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const BLOG_CONTENT_DIR = "./src/content/blog";

// Maps a blog post slug to its `lastmod` frontmatter date.
//
// @astrojs/sitemap cannot read page frontmatter itself -- its top-level
// `lastmod` option is site-wide only -- so the dates have to be collected here
// and applied per entry in `serialize`. `astro:content` is not available inside
// the config, hence reading the files directly.
//
// Slugs come from github-slugger because that is what Astro's glob loader uses
// to turn a filename into an entry id. Filenames alone would not match: three
// posts contain dots (`...php-7.2-setup-to-homebrew-v1.5.mdx`), which the
// slugger strips.
function readBlogPostLastmod() {
  const lastmodBySlug = new Map();

  for (const filename of readdirSync(BLOG_CONTENT_DIR)) {
    if (!filename.endsWith(".mdx")) {
      continue;
    }

    const source = readFileSync(join(BLOG_CONTENT_DIR, filename), "utf8");
    const frontmatter = source.split("---", 2)[1] ?? "";
    const lastmod = frontmatter.match(/^lastmod:\s*(\S+)/m)?.[1];

    if (lastmod) {
      lastmodBySlug.set(githubSlug(filename.replace(/\.mdx$/, "")), lastmod);
    }
  }

  return lastmodBySlug;
}

const lastmodBySlug = readBlogPostLastmod();

// https://astro.build/config
export default defineConfig({
  site: "https://andygrunwald.com/",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  image: {
    // Emit a srcset for every <Image>. `responsiveStyles` is deliberately
    // left at its default of false: Astro's responsive styles are not in a
    // cascade layer, so they would override the Tailwind object-fit
    // utilities this site uses on its images.
    layout: "constrained",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      // Variable range covers body (400), nav/links (500), headings (600)
      // and Markdown <strong> (700) from a single file per style.
      weights: ["400 700"],
      // Blog posts use <em> heavily, so the italic face is required.
      styles: ["normal", "italic"],
      // latin-ext carries the umlauts used throughout the posts (Düsseldorf).
      subsets: ["latin", "latin-ext"],
      display: "swap",
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1];
        const lastmod = slug && lastmodBySlug.get(slug);

        if (lastmod) {
          item.lastmod = lastmod;
        }

        return item;
      },
      // The site has no news, video, translated or image-annotated entries, so
      // these namespaces only add bytes to every sitemap.
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
        image: false,
      },
    }),
    mdx(),
  ],
});
