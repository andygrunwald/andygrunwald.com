+++
draft = false

title = "things with buzzers: a sports competition"
description = "We used self build game show buzzers to track athlete times during a fitness sport competition."
images = [
    "/img/posts/things-with-buzzers-sports-competition/things-with-buzzers-sports-competition-interface.png",
    "/img/posts/things-with-buzzers-sports-competition/architecture-raspberry-pi-websocket-usb-game-show-buzzer-setup-frontend.png",
    "/img/posts/things-with-buzzers-sports-competition/installation-of-self-made-game-show-buzzer.jpg",
    "/img/posts/things-with-buzzers-sports-competition/final-game-show-buzzer-event-setup.jpg",
    "/img/posts/things-with-buzzers-sports-competition/scoreboard-during-rowing-exercise.jpg",
    "/img/posts/things-with-buzzers-sports-competition/scoreboard-during-wallballs-exercise.jpg"
]
keywords = [
    "diy",
    "game show buzzer",
    "fitness",
    "raspberry pi",
    "3d printing",
    "websocket",
    "things with buzzers"
]
tags = [
    "things-with-buzzers",
    "sports",
    "diy"
]
categories = [
    "Community",
    "things with buzzers"
]

date = 2019-11-01T17:00:00+01:00
lastmod = 2021-07-09T17:00:00+01:00

featureimage = ""
menu = ""
+++

**tl;dr**: For the _[**things with-buzzers** series](https://github.com/andygrunwald/things-with-buzzers-hardware "things with buzzers hardware at GitHub")_ we created a frontend to run a sports competition at a local functional fitness gym. It stops the athlete's time and ranks them according to the fastest. It was an exceptional feeling to hit the buzzer at the end of the workout. Check it out at _[things with buzzers: sports competition](https://github.com/andygrunwald/things-with-buzzers-sports-competition "things with buzzer sport competition interface at GitHub")_.

<!--more-->

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/things-with-buzzers-sports-competition-interface.png"
    alt="things with buzzers: The sports competition interface."
    caption="things with buzzers: The sports competition interface."
>}}

> If you like this article, you might want to read [things with buzzers: building them]({{< ref "/post/things-with-buzzers-building-them.md" >}} "things with buzzers: building your own game-show buzzers") and [things with buzzers: playing Jeopardy!]({{< ref "/post/things-with-buzzers-playing-jeopardy.md" >}} "Playing Jeopardy! with self-made game show buzzers") as well.

## things with buzzers

Inspired by [Hacker Jeopardy](https://media.ccc.de/search/?q=Hacker+Jeopardy "Hacker Jeopardy from the Chaos Computer Club") from the [Chaos Computer Club](https://www.ccc.de/en/ "Chaos Computer Club"), we got motivated to build a Jeopardy! Game and have fun with friends and colleagues.
We 3d-printed game show buzzers, created a custom printed circuit board, and wrote software to connect with the hardware to be able to play games like Jeopardy!

Finally, we **open-sourced everything**.
Check out the **things with buzzers** series **_[hardware](https://github.com/andygrunwald/things-with-buzzers-hardware "things with buzzers hardware at GitHub")_, _[websocket](https://github.com/andygrunwald/things-with-buzzers-websocket "things with buzzers WebSocket software at GitHub")_ and _[the Jeopardy! game show interface](https://github.com/andygrunwald/things-with-buzzers-jeopardy "things with buzzers Jeopardy! Game software at GitHub")_**.

During the process of building it, a friend of mine approached me with an idea: Can we re-use the technology for a sports event?
Why not giving it a try?
This article is about a **frontend for sports competitions**.
For more context about the hardware, I recommend reading the [things with buzzers: building them]({{< ref "/post/things-with-buzzers-building-them.md" >}} "things with buzzers: building your game-show buzzers") article.

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/architecture-raspberry-pi-websocket-usb-game-show-buzzer-setup-frontend.png"
    alt="things with buzzers: Architecture diagram of how the single parts play together."
    caption="things with buzzers: Architecture diagram of how the single parts play together."
>}}

## A sports competition frontend

We built this frontend from scratch with the primary goal to automate manual effort of collecting athlete times and ranking them.
The idea was to have a stopwatch to see who is the fastest athlete.
On previous events, this was done manually with pen and paper.

Here is how it works:
Athletes are starting in groups (so-called _heats_) of four.
Every heat has a stopwatch that needs to be triggered manually once the heats start.
Every athlete got a color assigned (visible next to the athlete's name on the scoreboard).
Once the athlete completes the workout, she has to hit on the assigned buzzer color.
By this, the time of the athlete will be stopped and shown on the scoreboard.
All athletes are getting ranked according to their time.
The fastest athlete wins.

During the events, the set up works flawlessly.
A positive surprise: We underestimated how much fun it is for the athletes to hit the buzzer and stop their time at the end of an exhausting workout.
I attended as well and tried it myself.
Hitting the buzzer feels like a relief.

The frontend itself is a static HTML page and a few lines of JavaScript with JQuery.
The web server will serve the website, and the WebSocket server sends the buzzer pushes.

## Start your sports event today

The complete project is available on GitHub: [things with buzzers: sports competition](https://github.com/andygrunwald/things-with-buzzers-sports-competition "things with buzzer sport competition interface at GitHub").

The repository contains all instructions you need to set it up, create your workout, and compete with your friends.

## Impression of the events

In the meantime, we used the setup already twice in a local function fitness gym.
Below you find a few insights from the events.

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/installation-of-self-made-game-show-buzzer.jpg"
    alt="Buzzer installation still ongoing."
    caption="Buzzer installation still ongoing."
>}}

----

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/final-game-show-buzzer-event-setup.jpg"
    alt="Final game show buzzer set up. Ready to go."
    caption="Final game show buzzer set up. Ready to go."
>}}

----

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/scoreboard-during-rowing-exercise.jpg"
    alt="Rowing discipline and a visible scoreboard."
    caption="Rowing discipline and a visible scoreboard."
>}}

----

{{<
    figure src="/img/posts/things-with-buzzers-sports-competition/scoreboard-during-wallballs-exercise.jpg"
    alt="Executing wallballs and a visible scoreboard."
    caption="Executing wallballs and a visible scoreboard."
>}}

----

{{< youtube id="sXZbd52_UFk" title="The official after event video from the first event. The competition frontend is visible from 0:11 min to 0:13 min." >}}
