export interface NavigationLink {
  label: string;
  href: string;
  title: string;
}

export const navigationLinks: NavigationLink[] = [
  { label: "✍️ Blog", href: "/blog/", title: "Blog of Andy Grunwald" },
  { label: "👨‍🔬 About", href: "/about/", title: "About Andy Grunwald" },
  {
    label: "🎙️ Engineering Kiosk Podcast",
    href: "https://engineeringkiosk.dev/",
    title: "Engineering Kiosk Podcast",
  },
];
