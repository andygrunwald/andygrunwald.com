// Resolves a project-root image path string (e.g. "/src/assets/images/posts/foo/bar.png")
// to optimized ImageMetadata so it can be passed to astro:assets <Image>/<Picture>.
//
// import.meta.glob keys are project-root absolute paths. Frontmatter `images`
// entries and inline <Figure>/<BlogPostImage> `path=` attributes use this same
// form, so a single resolver covers both. Returns null when the path is not a
// processed asset (e.g. a not-yet-migrated post still pointing at /public).
const assets = import.meta.glob(
  "/src/assets/images/posts/**/*.{png,jpg,jpeg,webp,gif}",
);

export async function resolvePostImage(path) {
  const loader = assets[path];
  if (!loader) {
    return null;
  }
  const module = await loader();
  return module.default;
}
