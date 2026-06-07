// Shared schema.org building blocks for JSON-LD structured data.
const SITE_URL = "https://andygrunwald.com/";

export const personSchema = {
  "@type": "Person",
  name: "Andy Grunwald",
  url: SITE_URL,
  jobTitle: "Engineering Manager",
  worksFor: {
    "@type": "Organization",
    name: "Cloudflare",
    url: "https://www.cloudflare.com/",
  },
  sameAs: [
    "https://x.com/andygrunwald",
    "https://hachyderm.io/@andygrunwald",
    "https://github.com/andygrunwald",
    "https://www.linkedin.com/in/andy-grunwald-09aa265a/",
  ],
};

export const webSiteSchema = {
  "@type": "WebSite",
  name: "Andy Grunwald",
  url: SITE_URL,
};
