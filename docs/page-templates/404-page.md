---
title: 404 Page
summary: 404 Pages tell the user a page doesn’t exist and helps them recover.
tags: page templates
layout: guide
eleventyNavigation:
  key: 404 Page
  parent: Page Templates
  title: 404 Page
  order: 4
  excerpt: 404 Pages tell the user a page doesn’t exist and helps them recover.
  img: /img/illustrations/illus-404-page.svg
---

## Best Practices

404 pages are pages which users will see if they click an invalid URL. An invalid URL could be caused by a developer error, a copy and paste error, or other error. They are not the user’s fault.

{% include 'writing-tips.njk' %}

## Usage

<a class="btn btn-primary" href="/page-templates/404-page-internal/" target="_blank">See Internal Preview</a>

``` html
{% include 'markup/404-internal.njk' %}
```

<a class="btn btn-primary" href="/page-templates/404-page-public/" target="_blank">See Public Preview</a>

``` html
{% include 'markup/404-public.njk' %}
```
