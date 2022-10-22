# [andygrunwald.com](https://andygrunwald.com)

My website [andygrunwald.com](https://andygrunwald.com) based on [Hugo](https://gohugo.io/).

Most of the following chapters are for the future me, who is not able to remember all things.

## Start the server

```sh
$ make serve
```

## Render the (production) site

```sh
$ make build
```

## Start a new blog post

```
$ hugo new post/resources-to-learn-golang.md
```

## Open TODOs

### Public Speaking

We had a public speaking section.
The purpose was to list the talks I gave.

We deactivated the public speaking section, because
- the talks are content sections
- the content sections rendered single pages
- we only want a list page, no single pages
- we tried headless page bundles, but then I don't know how to create a dedicated page for this

Right now, the public speaking section is deactivated.
The content can be found in the `other/` folder.
At some point in time I want to revisit this.

## Theme

We used [hugo-type-theme](https://github.com/digitalcraftsman/hugo-type-theme) as a foundation (thanks for this!).
Sadly, this theme is no longer maintained.
We went from there and modified the original theme for our needs.

### Other themes with a nice design

* [Anatole](https://themes.gohugo.io/anatole/)
* [Clean White](https://themes.gohugo.io/hugo-theme-cleanwhite/)
* [Noteworthy](https://themes.gohugo.io/hugo-theme-noteworthy/)
* [Yourfolio](https://themes.gohugo.io/yourfolio/)
* [Introduction](https://themes.gohugo.io/hugo-theme-introduction/)
* [Initio](https://themes.gohugo.io/hugo-initio/)

## Contribution welcome

If you found a typo, want to fix something or just hand in a suggestion to change a blog post, feel free to contribute.
[Open a new issue](https://github.com/andygrunwald/andygrunwald.github.io/issues/new) or [apply a pull request](https://github.com/andygrunwald/andygrunwald.github.io/compare).