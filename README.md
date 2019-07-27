GatsbyJS example for a brochure site from Plone CMS
===================================================

Requirements
------------

* docker, for running Plone
* node and yarn, for installing and running GatsbyJS
* bash and jq for importing example content

Getting started
---------------

Clone the project

```shell
$ git clone https://github.com/datakurre/gatsby-starter-plone-brochure.git
$ cd gatsby-starter-plone-brochure
```

Start Plone

```shell
$ docker-compose up
```

Import example content

```shell
$ ./fixture/purge.sh
$ ./fixture/import.sh
```

Install GatsbyJS

```shell
$ yarn install
```

Start GatsbyJS

```shell
$ yarn develop
```
