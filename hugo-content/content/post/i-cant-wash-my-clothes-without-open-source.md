+++
draft = false

title = "I can't wash my clothes without Open Source"
description = "On my newly bought washing machine, a sheet of paper about the used open source projects was attached. In this article we check what it is all about."
images = []
keywords = [
    "OpenBSD",
    "The WIDE project",
    "TropicSSL",
    "Open Source",
    "Hardware",
    "Engineering",
    "Washing machine"
]
tags = [
    "Open Source",
    "Hardware"
]
categories = [
    "Open Source",
    "Hardware"
]

date = 2021-09-18T07:15:00+02:00
lastmod = 2021-09-21T20:30:00+02:00

featureimage = ""
menu = ""
aliases = [
    "/blog/i-cant-wash-my-cloth-without-open-source/"
]
+++


My 20-year-old washing machine broke recently, and I bought a new one: A [Siemens iQ800 WM14VG43](https://www.siemens-home.bsh-group.com/de/produktliste/waeschepflege/waschmaschinen/frontlader/WM14VG43).

The manual contained a sheet of paper headlining [**Information regarding Open Source Software**](/files/information-regarding-open-source-software.pdf).
Four software projects have been listed: [OpenBSD]({{< ref "i-cant-wash-my-clothes-without-open-source.md#openbsd" >}}), [TropicSSL]({{< ref "i-cant-wash-my-clothes-without-open-source.md#tropicssl" >}}), [Flexible and Economical UTF-8 Decoder]({{< ref "i-cant-wash-my-clothes-without-open-source.md#flexible-and-economical-utf-8-decoder" >}}), and [the WIDE project]({{< ref "i-cant-wash-my-clothes-without-open-source.md#the-wide-project" >}}).

<!--more-->

Let us have a look at them:

### OpenBSD

[OpenBSD](https://www.openbsd.org/), a multi-platform BSD-based UNIX-like operating system with a high focus on security.

### TropicSSL

TropicSSL is an SSL library and an unofficial fork of XySSL (keeping the BSD-licensed code stream).
XySSL is not maintained anymore since the end of 2008 but was forked and further developed as PolarSSL.
The company behind PolarSSL was [aquired by ARM](https://tls.mbed.org/tech-updates/blog/polarssl-part-of-arm), and the product was renamed to [mbedTLS](https://tls.mbed.org/).
mbedTLS is still available and [activily maintained at GitHub](https://github.com/ARMmbed/mbedtls).

_Fun Fact_: The sheet of paper has a typo naming the SSL library *TopicSSL*.

### Flexible and Economical UTF-8 Decoder

A [small and efficient library to work with UTF-8 strings](https://bjoern.hoehrmann.de/utf-8/decoder/dfa/) from [Bjoern Hoehrmann](https://github.com/hoehrmann/).
That popular that there are a few community implementations in languages like [Scala](https://gist.github.com/ssledz/f26e9892d5153436bacc38239770b9a3), [Java](http://www.javased.com/index.php?source_dir=AutobahnAndroid%2FAutobahn%2Fsrc%2Fde%2Ftavendo%2Fautobahn%2FUtf8Validator.java), [Erlang](https://ninenines.eu/articles/erlang-validate-utf8/) or [Python](https://ws4py.readthedocs.io/en/latest/_modules/ws4py/utf8validator/) available.

### The WIDE project

The [WIDE project](https://www.wide.ad.jp/index_e.html) looks like a bigger organization related to infrastructure and networking.
Probably some piece of network-related code is used here.

## Embedded Open Source

It is not a surprise that all the projects are done for embedded / hardware programming use-case.
All of them have a focus on low memory usage and low code size.
Even if I think nowadays a washing machine can afford some compute power.

On the other hand, the used projects seem pretty old (e.g., _TropicSSL_).
This may lead to the assumption of the usage of older hardware/software in newer products.
Or maybe they are just stable, it works, and the engineers love the pragmatism and boring software.

## Are those the only Open Source projects used?

I doubt that this list of open-source software used in this hardware product is complete.
The washing machine has support for WLAN and integration for [Home Connect](https://www.home-connect.com/).

My current guess about why we see these four projects have been selected to be printed into the manual:
We see the compliance work from one team.
The first three projects require attribution.

Managing multiple teams to all get compliance for open source done is painfully complex.
Especially when multiple vendors are involved.

## Why does it matter?

I do like the fact that there is a sheet of paper as part of the official manual that claims the use of Open Source Software.
Even if this is legally required, most companies ignore it, or they don't know it.

This sheet of paper creates awareness and enables customers to dig a bit deeper.
I believe this is a step in the right direction for Open Source.
This step provides a better and broader understanding of the importance of Open Source for those who are not into the software bubble.

If you buy a new hardware device, check out the manual and look for similar information about Open Source projects.
I am curious to hear about it.

### Fun Fact: The software is shared between products

The same sheet of paper is attached to an [Oven _Thermador POD301LW_](https://www.thermador.com/us/products-list/ovens/wall-ovens/POD301LW) (see the [manual](https://www.manualowl.com/m/Thermador/POD301LW/Manual/531080)).