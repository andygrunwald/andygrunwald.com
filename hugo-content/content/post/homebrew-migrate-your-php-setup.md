+++
draft = false

title = "Migrate your local PHP 7.2 setup to Homebrew v1.5"
description = "A small guide on how you migrate your local Homebrew PHP setup while updating to Homebrew v1.5"
images = []
keywords = [
    "php",
    "homebrew",
    "macOS",
    "environment",
    "engineering",
    "programming",
]
tags = [
    "Programming",
    "Engineering",
    "PHP",
    "Open Source"
]
categories = [
    "PHP",
    "Open Source",
    "Engineering"
]

date = 2018-04-10T17:14:20+02:00
lastmod = 2021-07-10T17:14:20+02:00

featureimage = ""
menu = ""
+++

Last week, [Hans Puac](https://twitter.com/hanspuac "Hans Puac at twitter"), a colleague of mine, wrote a small guide into our internal company chat on how to migrate your local PHP environment on macOS to the new Homebrew version 1.5.*.
The guide helped a lot of other engineers inside [trivago](https://www.trivago.com/ "trivago").

I thought it might help more people from the internet.
I asked Hans if I am allowed to share it, and he approved.
So kudos belongs to him.

<!--more-->

> **Update (July 2021): Homebrew project structure changed.**
>
> Due to a new homebrew / tap structure, this article might not be up to date anymore.
>
> Please check out the latest state of the [PHP Homebrew formula](https://formulae.brew.sh/formula/php "PHP Homebrew formula").

Here we go:

With Homebrew v1.5.0 the tap `homebrew/php` got deprecated.
They migrated it to `homebrew/core`, but this is changing the installation process completely.
If you want to migrate:

## 1. Cleanup

Remove your currently installed PHP packages.
This is not 100% necessary, but I wanted to have it clean.

You can check what packages are installed via `brew list | grep php`, for example, and remove via `brew remove MYPACKAGE`.
Check for leftovers in `/usr/local/etc/php/` and remove if necessary.
Untap the deprecated repo `brew untap homebrew/php`.
You can check your taps with `brew tap`.
I also had some other taps that I directly untapped as well because those were deprecated:

- `brew untap homebrew/science`
- `brew untap homebrew/versions`

## 2. Update

`brew update`

## 3. Install PHP

Install PHP via `brew install php@7.2`

## 4. Verify Installation

Before we continue, we want to ensure that the

- PHP installation was successful
- [PATH] is set properly
- [PEAR] is configured properly

Run `php --version`, `php --ini` and `pear config-show | grep php.ini` and check if everything is pointing to the right
PHP version and that no warnings are displayed.

If you encounter any problems, check the [Troubleshooting]({{< ref "/post/homebrew-migrate-your-php-setup.md#troubleshooting" >}} "Troubleshooting your PHP Homebrew setup") section
below.

## 5. Install Extensions

The `intl` is now already built-in.
Install all other required extensions via [PECL][] (gets installed together with PHP).

Installation via pecl requires autoconf (`brew install autoconf`):

- `pecl install xdebug`
- `pecl install redis`
- `pecl install apcu`
- `pecl install memcached`
- `pecl install imagick`
...

### Particular version of an extension

If your app depends on a particular version of an extension, e.g. [redis in v3.1.6](https://pecl.php.net/package/redis "PECL Redis Extension")
specify the version explicitly via `pecl install redis-3.1.6`.

### Extension `snmp`

If you rely on the [SNMP Extension](https://www.php.net/manual/en/book.snmp.php "PHP SNMP Extension"), I have to disappoint you right now.
This extension is, state of now (2018-04-10), not part of this PHP build:

> SNMP was excluded from the build because it crashes Apache.

## 6. Cleanup

To make some disk space accessible, you may remove old versions of packages by executing `brew cleanup -s`.

## Troubleshooting

### Wrong PHP Version is displayed

If `php --version` displays the wrong PHP version, try to open a new terminal window. The [PATH] variable got
adjusted during the PHP installation and might not be loaded in your current terminal session.

If the old version is still displayed, check your [PATH] (`echo $PATH`) and ensure that `/usr/local/bin/` comes before
`/usr/bin/` or uninstall the other PHP version if the [PATH] was already set properly. The commands
`ls -la $(which php)` and `brew list | grep php` might help you find out where that version is coming from.

### [PEAR] configuration is pointing to the wrong `php.ini` file

If `pear config-show | grep php.ini` is pointing to the wrong `php.ini` file, you can overwrite it with
`pear config-set php_ini /MY/RIGHT/PATH/php.ini`. You can find out the right path with `php --ini`.

### Module already loaded / Unable to load library

Example Warnings:

- `PHP Warning:  Module '[some module]' already loaded in Unknown on line 0`
- `PHP Warning:  PHP Startup: Unable to load dynamic library '[some module]' ([...]) in Unknown on line 0`

During the installation of an extension, pecl adds the extension to the `php.ini` file but not removing it
during uninstall. In this case, edit your `php.ini` manually and remove deprecated `extension="[some module]"` lines.


## Resources

- [Homebrew 1.5.0 release announcement](https://brew.sh/2018/01/19/homebrew-1.5.0/ "Homebrew v1.5.0 release announcement")
- [PHP load and tap errors with latest brew @ brew discourse](https://discourse.brew.sh/t/php-load-and-tap-errors-with-latest-brew/1956/2)

[PATH]: https://en.wikipedia.org/wiki/PATH_(variable)
[PEAR]: https://pear.php.net/
[PECL]: https://pecl.php.net/
