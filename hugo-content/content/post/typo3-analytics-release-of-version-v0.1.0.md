+++
draft = false

title = "TYPO3-Analytics: Release of version v0.1.0"
description = "The open-source project TYPO3-Analytics (now Jacobine) was released in version 0.1.0."
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

date = "2014-04-19T12:51:03+02:00"
lastmod = "2021-07-10T12:51:03+02:00"

featureimage = ""
menu = ""
+++

The next release of [TYPO3-Analytics in version v0.1.0](https://github.com/andygrunwald/Jacobine/releases/tag/v0.1.0 "v0.1.0 of Jacobine") is out!
This release covers various excellent features, enhancements, and bug fixes.

<!--more-->

> **Update (July 2021): The project is not active anymore.**
>
> The idea, passion, and motivation are still alive, but I won't continue [TYPO3-Analytics/Jacobine](https://github.com/andygrunwald/Jacobine/) as it is right now anymore.
>
> The project stays open-source on GitHub.

Get the new version now! Its hot: [TYPO3-Analytics v0.1.0](https://github.com/andygrunwald/Jacobine/releases/tag/v0.1.0 "v0.1.0 of Jacobine")

But what was done in the last 65 days and 109 commits?
Some numbers:

* 70 changed files
* 5,934 line additions
* 1,297 line deletions
* 1 contributor

Here is a list of the most significant changes.

## Main changes

* Added a changelog
* [Consumer Download\\HTTP] Added error check for rename operation
* [Consumer Analysis\\PHPLoc] Parse output directly without writing an XML file to disk
* [Consumer Analysis\\CVSAnaly] Moved cvsanaly settings to separate config file
* [Consumer] Centralized context generation for logging
* [Consumer Analysis\\CVSAnaly] Set a writable path
* Added (useful) information to composer.json about the project
* [Consumer] Adjusted all consumers to use the new Symfony/process component
* Added Symfony/process component and created a ProcessFactory
* Updated monolog from 1.7.0 to 1.8.0 and updated various dependencies
* Removed sudo-usage of system calls
* Changes auto_delete default option for queues to false
* [Logging] No newline after every log entry. One line per log entry
* [Consumer] Adjusted all consumers to use the new structure of DLX
* [Consumer] Added a method to reject a message and reworked consumer to reject messages
* [Consumer / Producer] Added support for the dead lettering of RabbitMQ and reworked setup of queues and exchanges
* [Consumer Analysis\\GithubLinguist] Fixed fatal error during logging
* Added a bunch of comments with message formats to every consumer
* Added class comments to all Commands
* [Producer ReviewTYPO3OrgCommand] Removed because this is obsolete
* [Consumer Download\\HTTP] Removed TYPO3 dependency in filename
* Added File object
* [Consumer Download\\HTTP] Replaced wget download with a curl download
* Add missing methods to ConsumerInterface
* Set product under MIT License
* Added PHP >= 5.4 as requirement
* Refactored the AMQPConnection and AMQPMessage into a factory
* Added PSR-2 as coding guideline standard
* Added first unit tests for several components
* Integrated Travis-CI as the continuous integration environment
* Integrated Versioneye for dependency checks
* Integrated scrutinizer-ci for code quality analysis
* [Consumer Crawler\\Gerrit] Add message acknowledgment if no projects are available

## Did we reach the goal/roadmap for the v0.0.1 release?

In the release of version v0.0.1, we defined some goals for the next release (this one), but did we reach them? Let's check it:

* *code quality*: We have **refactored** many lines of code and extracted them to separate classes, and introduced common **design patterns** like **Factory**. Furthermore, we`ve introduced services like **[scrutinizer](https://scrutinizer-ci.com/ "scrutinizer CI")** to get some **numbers about quality**. Standards like **[PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md "PHP PSR-2")** were applied.
* *testing*: **Unit tests** were introduced in this release. The **code coverage** is not very high (**18%**), but 18% are better than nothing! **[TravisCI](https://travis-ci.org/ "TravisCI")** was introduced to check the **success** of the unit tests **continuously**.
* *stability*: Many **bugs** were **fixed** (e.g. Fatal error in GithubLinguist-Logging), external **dependencies updated** (e.g. [Monolog](https://github.com/Seldaek/monolog "monolog at GitHub") from 1.7 to 1.8), **new components introduced** to make use of proven code (e.g. [symfony/process](https://symfony.com/doc/current/components/process.html "Symfony process component") component) or **more error checks** added to find some failure faster.
* *flexibility*: The product is now **released under** the **[MIT license](https://opensource.org/licenses/MIT "MIT Open-Source license")** as a permissive free software license. This product can now be official used in several environments (e.g. commercial). We have **removed hardcoded dependencies** (e.g. TYPO3-Related names in Download\\HTTP consumer) or made **more attributes configurable** (e.g. [CVSAnaly](https://github.com/MetricsGrimoire/CVSAnalY "CVSAnaly at GitHub") config) or **support more RabbitMQ queue and exchange features** on consumer / producer level.
* *documentation*: There were **several comments added** to the source code. Every class got a class header comment that **describes** what **the class is responsible**. Every **consumer** got the **accepted message format** in the docs.

In general, this release and the goals were a success.
One (important) goal was missed: Write more blog posts about the architecture and concepts of this project.
This goal was missed due to the lack of time.
Next to this goal, during the development of TYPO3-Analytics, another open-source project, CVSAnaly was improved a lot.
[See the commit history](https://github.com/MetricsGrimoire/CVSAnalY/commits?author=andygrunwald "Contributions from Andy Grunwald for CVSAnaly at GitHub").
Why? Because TYPO3-Analytics use this tool and we want to use more features of it ;)

## Roadmap for the next release

Currently, there is no strict roadmap for the next release.
But we will try to focus on some things:

* *Find a name*: We are looking for a new name for quite some time (see "TYPO3-Analytics is looking for a new name - suggestions welcome!"). We try to find a new name and apply it to the ecosystem
* *Make it more production-ready*: We try to make the product more production-ready. How? Add some more error checks, add some checks if the system is production-ready, add a proof of concept for a easier deployment (e.g., on AWS). Ideas welcome!
* *Prove the "productioness"*: We want to start some small analysis of open source projects and create reports that other people can see how to use this tool and what it is good for and how amazing such a small piece is of code can be.
* *Spread the word*: We want to communicate more (on bar camps, conferences, blogs) about it. We want to try to get more / the first external contributor.

If you want to see some features in it, contact me!

We know that these are challenging goals.
We try to reach as many of them as possible.
If you want to support us, see the next chapter ;)

## Be part of the next release

We are looking for motivated contributors to this project.
You do not have to be a programmer.
We are looking for designers, frontend people, people for communication, people who got new ideas or want to analyze further.

If you do not have (spare) time for this, we are looking for sponsors.
If you want to push some results, we would be proud to welcome you as a sponsor :)

**If you do not know how to contribute or how to get into it**: I **will offer workshops (for free!)** for TYPO3-Analytics, **how this works**, about the **architecture,**, about the **goal**, about the **motivation** or about **stuff you are interested in**.
I can offer rooms in Düsseldorf, Germany for it with internet connection for this.
If you are interested, ping me.

If you are interested, just contact me via Twitter ([@andygrunwald](https://twitter.com/andygrunwald "Andy Grunwald at twitter")) or by e-mail ([GitHub profile](https://github.com/andygrunwald "Andy Grunwald at GitHub")).