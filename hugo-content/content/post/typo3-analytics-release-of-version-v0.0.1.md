+++
draft = false

title = "TYPO3-Analytics: Release of version v0.0.1"
description = "The open-source project TYPO3-Analytics (now Jacobine) was released in version 0.0.1."
images = []
keywords = [
    "analytics",
    "development",
    "Jacobine",
    "metrics",
    "open source",
    "software repository mining",
    "typo3",
]
tags = [
    "Open Source"
]
categories = [
    "Open Source"
]

date = "2014-02-15T13:10:00+02:00"
lastmod = "2021-07-10T13:10:00+02:00"

featureimage = ""
menu = ""
+++

Today i tagged and released version [v0.0.1](https://github.com/andygrunwald/Jacobine/releases/tag/v0.0.1 "v0.0.1 of Jacobine") of the project [TYPO3-Analytics](https://github.com/andygrunwald/Jacobine "Jacobine at GitHub").
After 303 days and 144 commits later, I decided to make a "cut" and start a new version.

This version is a first (workable as far as I know) "proof of concept" for a repository mining platform to produce (community) metrics of various systems.
The first example system is [TYPO3](https://typo3.org/ "TYPO3 Content Management System").

<!--more-->

> **Update (July 2021): The project is not active anymore.**
>
> The idea, passion, and motivation are still alive, but I won't continue [TYPO3-Analytics/Jacobine](https://github.com/andygrunwald/Jacobine/) as it is right now anymore.
>
> The project stays open-source on GitHub.

# What does this version include?

13 [RabbitMQ](https://www.rabbitmq.com/ "RabbitMQ Message Queue System") consumer written in PHP:

* Download a git resource
* Download an HTTP resource
* Extract a tar.gz archive
* Crawl a Gerrit server
* Crawl a single Gerrit project
* Crawl a Gitweb site
* Crawl an NNTP server
* Crawl a single NNTP group
* Analyze the filesize of a file
* Analyze a VCS repository via CVSAnaly
* Analyze PHP source code via PHPLoc
* Analyze PHP source code via pDepend
* Analyze used programming languages via GitHub linguist

4 RabbitMQ producer written in PHP:

* Messages to crawl a Gerrit code review system
* Messages to download TYPO3 releases from get.typo3.org
* Messages to crawl a Gitweb site
* Messages to crawl an NNTP server

This release can be downloaded from github: [v0.0.1: Release of version 0.0.1](https://github.com/andygrunwald/Jacobine/releases/tag/v0.0.1 "v0.0.1 of Jacobine")

# What will be tackled in the next version?

There is no concrete roadmap for the next version(s).
And I do not know which version number will it be.
Maybe a new minor, perhaps a new major version.
The next version of TYPO3-Analytics will focus on:

* code quality
* testing
* stability
* flexibility
* documentation

I try to refactor some code, create unit and integration tests, try to tackle some bugs and "unused" concepts to make better use of existing functionality (e.g. [RabbitMQ Dead Lettering](https://www.rabbitmq.com/dlx.html "RabbitMQ Dead Lettering")) and to add more parameter to messages to decouple the existing consumer from the proof of concept TYPO3.

Furthermore, I want to write more documentation and some blog posts about the architecture and concept of this project. I got the hope to find more contributors or to find more people who are interested in it. Maybe it will help. We will see.

If you want to contribute and you do not know how to contact me via Twitter ([@andygrunwald](https://twitter.com/andygrunwald "Andy Grunwald at twitter)) or by e-mail ([GitHub profile](https://github.com/andygrunwald "Andy Grunwald at GitHub")).