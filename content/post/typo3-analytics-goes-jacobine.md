+++
draft = false

title = "TYPO3-Analytics goes Jacobine"
description = "The story on how we found the new name Jacobine for the open-source project TYPO3-Analytics."
images = []
keywords = [
    "analytics",
    "development",
    "Jacobine",
    "metrics",
    "open source",
    "software repository mining",
    "typo3",
    "duisburg",
]
tags = [
    "Open Source"
]
categories = [
    "Open Source"
]

date = "2014-04-22T12:45:13+02:00"
lastmod = "2021-07-10T12:45:13+02:00"

featureimage = ""
menu = ""
+++

For quite some time, I was looking for a new name for an open-source project: *TYPO3-Analytics*.

I am (sadly) not creative in naming things or painting.
The most prominent part of creativity is during development and programming.
To find a name is (in my point of view) very difficult.

<!--more-->

> **Update (July 2021): The project is not active anymore.**
>
> The idea, passion, and motivation are still alive, but I won't continue [TYPO3-Analytics/Jacobine](https://github.com/andygrunwald/Jacobine/) as it is right now anymore.
>
> The project stays open-source on GitHub.

There are some names of projects I like because of the sound, like [Flynn.io](https://flynn.io/ "Flynn: A next-generation open-source platform as a service (PaaS)").
On 3rd March 2014, I wrote a blog post about this challenge to use the power of the community: TYPO3-Analytics is looking for a new name - suggestions welcome!

Next to this blog post, I got on my girlfriend's nerves with recurring questions like "What do you think about name x? Or y?".
And I asked my Twitter timeline many times and wondered how Apache chose names for their product.
They [got rules for product names](https://www.apache.org/dev/project-names.html "Apache Infrastructure Project and product names"), but I did not find a resource that describes the story about these names.
[Ingo](https://twitter.com/irnnr "Ingo Renner at twitter") [mentioned](https://twitter.com/irnnr/status/449367546211221504 "Background on Apache Tika's name") that [Tika](https://tika.apache.org/ "Apache Tika") is one of the project founders’ kid’s toy pet’s name.
[Scott](https://twitter.com/shirleman "Scott Hirleman at twitter") [suggested](https://twitter.com/shirleman/status/449614357022773248) Donk, because it was his stuffed donkey's name as a kid :D
Anyway.

I thought a lot about possible names and talked to many people.
Some of the ideas were *Vizben*, *Benvis*, *Mevis*, *Pinocchio*, *Gepetto*, *Viva con analysis* and *Knock.io*.
Nothing special.
Nothing "good" enough.
Nothing I like at the first time.
I continued my search.
During a lunch break, I talked to my colleagues [Jan](https://twitter.com/janvanthoor "Jan van Thoor at twitter") and [Dominik](https://twitter.com/milchjieper "Dominik Siebel at twitter") about this topic.
Jan mentioned that I might have to choose a general topic that I focus on for the name search.
He suggested mining.
I liked the idea and started my research in the mining area ...

## The new name: *Jacobine*

I was born and live in [Duisburg, Germany](https://en.wikipedia.org/wiki/Duisburg "Duisburg, Germany at Wikipedia").
Duisburg is a small town in [North Rhine-Westphalia](https://en.wikipedia.org/wiki/North_Rhine-Westphalia "North Rhine-Westphalia at Wikipedia!) and part of the Ruhrgebiet.
Duisburg is very popular for its steel industry and coal mining (see the [Landschaftspark Duisburg-Nord](https://en.wikipedia.org/wiki/Landschaftspark_Duisburg-Nord "Landschaftspark Duisburg-Nord at Wikipedia") or a [list of coal mines in Duisburg](https://de.wikipedia.org/wiki/Liste_von_Bergwerken_in_Nordrhein-Westfalen#Duisburg "List of coal mines in Duisburg at Wikipedia")).
In 1855 an English company started to build a new mine called *Jacobine*.
It was located in Duisburg-Meiderich near to [Oberhausen](https://en.wikipedia.org/wiki/Oberhausen "Oberhausen, Germany at Wikipedia").
In 1859 the mine had to shut down because water damaged it.
Eleven years later, in 1870, the mine was repaired.
In 1871 the mine was put into production again under a new name Schacht 1.
Schacht 1 was part of the bigger mine [Westende](https://de.wikipedia.org/wiki/Zeche_Westende "Westende at Wikipedia").

Dominik mentioned that the name *Jacobine* got a bad taste because it was damaged and shut down.
Dominik is correct, but the mine was repaired and put into production again.
I would agree with Dominik that *Jacobine* is a bad name for management software or something in this area.
But we do not build management software ;)
And one important fact: I like the new name.
It is unique in the software world (as far as I know).
It got a relation to the central area of the tool we build ([data]mining) and a relationship to my lovely town Duisburg.

**So let's try to get not damaged by the water :)**

## Migrate your TYPO3-Analytics clone

If you got an existing clone of the project with the old name TYPO3-Analytics you must migrate the git repository to keep up to date.
Here we go:

```bash
$ git remote -v
origin git@github.com:andygrunwald/TYPO3-Analytics.git (fetch)
origin git@github.com:andygrunwald/TYPO3-Analytics.git (push)

$ git remote set-url origin git@github.com:andygrunwald/Jacobine.git

$ git remote -v
origin git@github.com:andygrunwald/Jacobine.git (fetch)
origin git@github.com:andygrunwald/Jacobine.git (push)
```

Please pay attention to the name of your remote (origin or maybe [upstream](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork "Syncing a fork at GitHub documentation")) and the protocol you use (*git://* or *https://*).

The ecosystem around *Jacobine* (the [web frontend](https://github.com/andygrunwald/Jacobine-Web-Frontend "Jacobinee Web Frontend at GitHub"), the [vagrant machine](https://github.com/andygrunwald/Jacobine-Vagrant "Jacobine Virtual Machine at GitHub") and the [chef cookbook](https://github.com/andygrunwald/chef-jacobine "Chef cookbook for Jacobine at GitHub")) will be renamed in the following days.

If you got any problems or need help to migrate your clone, I will help you as much as possible.
Just add a comment, send a tweet ([@andygrunwald](https://twitter.com/andygrunwald "Andy Grunwald at twitter")) or send me an email.

PS: Thanks to all people involved in finding a new name and attending all the discussions!
PPS: And thanks to [Georg](https://twitter.com/georg_ringer "Georg Ringer at twitter"), [Ben](https://twitter.com/benvantende "Ben vant Ende at twitter") and [Ola](https://twitter.com/misprintedtype "Ola Gasidlo at twitter") who attend my [last survey on twitter](https://twitter.com/andygrunwald/status/458286697416245249) regarding *Jacobine* or *Jacob* (self made abbreviation for *Jacobine*) - 3:1 for *Jacobine*!