import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), mdx()],
});
