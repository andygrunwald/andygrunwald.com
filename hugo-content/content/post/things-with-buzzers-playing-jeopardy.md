+++
draft = false

title = "things with buzzers: playing a Jeopardy! game"
description = "Playing the popular quiz show Jeopardy! with your friends and your self-made game show buzzers."
images = [
    "/img/posts/things-with-buzzers-playing-jeopardy/jeopardy-game-show-board.png",
    "/img/posts/things-with-buzzers-playing-jeopardy/architecture-raspberry-pi-websocket-usb-game-show-buzzer-setup-frontend.png",
    "/img/posts/things-with-buzzers-playing-jeopardy/playing-jeopardy-game-show-buzzer-trivago-tech-get-together-2019.jpg"
]
keywords = [
    "diy",
    "game show buzzer",
    "jeopardy",
    "raspberry pi",
    "3d printing",
    "websocket",
    "things with buzzers"
]
tags = [
    "things-with-buzzers",
    "game",
    "diy"
]
categories = [
    "Community",
    "things with buzzers"
]

date = 2019-11-01T15:00:00+01:00
lastmod = 2021-07-09T15:00:00+01:00

featureimage = ""
menu = ""
aliases = [
    "/blog/things-with-buzzers-playing-jeopardy/"
]
+++

**tl;dr**: For the _[**things with-buzzers** series](https://github.com/andygrunwald/things-with-buzzers-hardware "things with buzzers hardware at GitHub")_ we have integrated a Jeopardy! Game show frontend to have a good time with friends. Check it out at _[things with buzzers: Jeopardy!](https://github.com/andygrunwald/things-with-buzzers-jeopardy "things with buzzers Jeopardy! Game software at GitHub")_.
Start playing today, and have a fantastic time!

<!--more-->

{{<
    figure src="/img/posts/things-with-buzzers-playing-jeopardy/jeopardy-game-show-board.png"
    alt="things with buzzers: The Jeopardy! game board."
    caption="things with buzzers: The Jeopardy! game board."
>}}

> If you like this article, you might want to read [things with buzzers: building them]({{< ref "/post/things-with-buzzers-building-them.md" >}} "things with buzzers: building your own game-show buzzers") and [things with buzzers: a sports competition]({{< ref "/post/things-with-buzzers-sports-competition.md" >}} "Running a local fitness competition with self-made game show buzzers") as well.

## things with buzzers

Inspired by [Hacker Jeopardy](https://media.ccc.de/search/?q=Hacker+Jeopardy "Hacker Jeopardy from the Chaos Computer Club") from the [Chaos Computer Club](https://www.ccc.de/en/ "Chaos Computer Club"), we got motivated to build a Jeopardy! Game and have fun with friends and colleagues.
We 3d-printed game show buzzers, created a custom printed circuit board, and wrote software to connect with the hardware to play games like Jeopardy!

Finally, we **open-sourced everything**.
Check out the **things with buzzers** series **_[hardware](https://github.com/andygrunwald/things-with-buzzers-hardware "things with buzzers hardware at GitHub")_ and _[websocket](https://github.com/andygrunwald/things-with-buzzers-websocket "things with buzzers WebSocket software at GitHub")_**.

This article is about a **Jeopardy! Frontend**.
For more context about the hardware, I recommend reading the [things with buzzers: building them]({{< ref "/post/things-with-buzzers-building-them.md" >}} "things with buzzers: building your game-show buzzers") article.

{{<
    figure src="/img/posts/things-with-buzzers-playing-jeopardy/architecture-raspberry-pi-websocket-usb-game-show-buzzer-setup-frontend.png"
    alt="things with buzzers: Architecture diagram of how the single parts play together."
    caption="things with buzzers: Architecture diagram of how the single parts play together."
>}}

## A Jeopardy! frontend

When we started this frontend, we asked ourselves if we wanted to develop the game from scratch or build upon something existing.
One of our goals was to get this game ready for a specific date.
Creating such a game from scratch will consume a few weekends.

A quick [_ Jeopardy_ search on GitHub](https://github.com/search?q=jeopardy "Jeopardy search on GitHub") revealed many repositories containing this game already.
I love open source!
We tested ~ten different game implementations and decided to go with [theGrue/jeopardy](https://github.com/theGrue/jeopardy "A jeopardy project on GitHub") as a foundation.

The base functionality of this project is excellent, but to integrate it correctly with the game show buzzers, we had to do some work.
We forked it into [andygrunwald/things-with-buzzers-jeopardy](https://github.com/andygrunwald/things-with-buzzers-jeopardy "things with buzzers Jeopardy! game software at GitHub") and started coding.
A few things that we have done:

* Modify the app that it can run offline.
* Connect to [things with buzzers: websocket](https://github.com/andygrunwald/things-with-buzzers-websocket "things with buzzers WebSocket software at GitHub") and react on pressed buzzers.
* Enable our own sets of questions/answers.
* Added documentation on how to use the Jeopardy! game in the context of things-with-buzzers.

The frontend itself is a NodeJS application with an AngularJS frontend.
We installed it on the Pi and started it next to the WebSocket server.

## Start your game today

The complete project is available on GitHub: [things with buzzers: Jeopardy!](https://github.com/andygrunwald/things-with-buzzers-jeopardy "things with buzzers Jeopardy! game software at GitHub").

The repository contains all instructions you need to set it up, create your own set of answers/questions, and play a session with your friends.

## Playing it

In the meantime, we played it a couple of times at smaller events and farewell parties.
Below you find a few insights from the first event.

{{<
    figure src="/img/posts/things-with-buzzers-playing-jeopardy/playing-jeopardy-game-show-buzzer-trivago-tech-get-together-2019.jpg"
    alt="Playing a Jeopardy! game at trivago's internal tech conference on the 19th of March 2019 with our self-made game show buzzers."
    caption="Playing a Jeopardy! game at trivago's internal tech conference on the 19th of March 2019 with our self-made game show buzzers."
>}}

----

{{< youtube id="-be2fD5neGU" title="The official event video from trivago. The Jeopardy! game is visible from 0:59 min to 1:04 min." >}}

## Credits

The main acknowledgments belongs to [theGrue](https://github.com/theGrue "theGrue at GitHub"), [btford](https://github.com/btford "btford at GitHub") + contributors for their work on [theGrue/jeopardy](https://github.com/theGrue/jeopardy "Original Jeopardy Software at GitHub") and [btford/angular-socket-io-seed](https://github.com/btford/angular-socket-io-seed "Angularjs foundation for the Jeopardy game").

Thanks a lot! You created a huge thing.
