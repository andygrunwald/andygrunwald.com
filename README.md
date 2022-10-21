# [andygrunwald.com](https://andygrunwald.com/)

The website [andygrunwald.com](https://andygrunwald.com) based on [Astro](https://astro.build/).

Most of the following chapters are for the future me, who cannot remember everything.

## Starting the development server

```sh
$ make init
$ make run
```

## Render the (production) site

```sh
$ make build
```

## Open TODOs

### Unsorted

- Use Astro Image component properly
- Astro Image integration
- Cleanup the /public-folder (check which asset we really need)
- Show image caption, especially here: https://andygrunwald.com/blog/web-engineering-dus-recap-of-2019/
- Search for TODOs in code
- Compare old and new sitemap for links

### Public Speaking

We had a public speaking section.
The purpose was to list the talks I gave.

We deactivated the public speaking section because
- the talks are content sections
- the content sections rendered single pages
- we only want a listing page, no single pages
- we tried headless page bundles, but then I don't know how to create a dedicated page for this

Right now, the public speaking section is deactivated.
The content can be found in the `other/` folder.
At some point in time, I want to revisit this.

#### Implement cloud flare caching purge

Previously in GitHub actions

```yaml
- name: Purging Cloudflare cache
    uses: jakejarvis/cloudflare-purge-action@master
    if: github.ref == 'refs/heads/main'
    env:
    CLOUDFLARE_ZONE: ${{ secrets.CLOUDFLARE_ZONE }}
    CLOUDFLARE_TOKEN: ${{ secrets.CLOUDFLARE_TOKEN }}
```

## Contributions welcome

Feel free to contribute if you found a typo, want to fix something, or hand in a suggestion to change a blog post.
[Open a new issue](https://github.com/andygrunwald/andygrunwald.com/issues/new) or [apply a pull request](https://github.com/andygrunwald/andygrunwald.com/compare).