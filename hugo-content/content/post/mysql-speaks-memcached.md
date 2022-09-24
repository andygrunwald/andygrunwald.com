+++
draft = true

title = "Mysql Speaks Memcached"
description = ""
images = []
keywords = []
tags = []
categories = []

date = 2021-07-25T13:37:24+02:00
lastmod = 2021-07-25T13:37:24+02:00

featureimage = ""
menu = ""
+++

Did you know that your MySQL Server can speak the [memcached](https://memcached.org/) [protocol](https://github.com/memcached/memcached/blob/master/doc/protocol.txt)?



## Unsorted notes

Notes:
* Demo and experiment usecase
* Deprecated in MySQL 8.0.22 -> https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-22.html#mysqld-8-0-22-deprecation-removal

TODO Find reasoning of the deprecation

> Direct access to InnoDB tables, bypassing the SQL parser, the optimizer, and even the Handler API layer.

> Standard memcached protocols, including the text-based protocol and the binary protocol
> The daemon_memcached plugin passes all 55 compatibility tests of the memcapable command.

Benefits
* Can be seen as a "Memcached with persistence"
* Possible usage of other mysql features like replication
* Data is accessible through standard sql (e.g., grouping operations like SUM are possible)

All benefits: https://dev.mysql.com/doc/refman/8.0/en/innodb-memcached-benefits.html


Caveats:
- Somehowish transactions -> https://dev.mysql.com/doc/refman/8.0/en/innodb-memcached-intro.html
-


> Using memcached as a MySQL front end: This is the primary purpose of the InnoDB memcached plugin


- https://scriptingmysql.wordpress.com/2014/05/01/use-mysql-to-store-nosql-and-sql-data-in-the-same-database-using-memcached-and-innodb/
- https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-22.html#mysqld-8-0-22-deprecation-removal
- https://dev.mysql.com/doc/refman/8.0/en/innodb-memcached-setup.html
- https://www.digitalocean.com/community/tutorials/how-to-add-nosql-queries-to-mysql-with-memcached-on-ubuntu-14-04
- https://github.com/bradfitz/gomemcache


docker run --rm --publish 3306:3306 --env MYSQL_ROOT_PASSWORD=secret --name mysql-speaks-memcached --detach mysql:8.0.26 mysqld --default-authentication-plugin=mysql_native_password


https://github.com/mysql/mysql-server/commit/f392d091d336d6343dc28e987fccf01c2e50ad4e