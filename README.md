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

- Fix Footer on mobile view
- Add "Projects" page
- Add "Work with me" page
- Use Astro Image component properly
- Search for TODOs in code

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

## Contributions welcome

Feel free to contribute if you found a typo, want to fix something, or hand in a suggestion to change a blog post.
[Open a new issue](https://github.com/andygrunwald/andygrunwald.com/issues/new) or [apply a pull request](https://github.com/andygrunwald/andygrunwald.com/compare).