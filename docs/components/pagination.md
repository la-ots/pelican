---
title: Pagination
summary: Pagination allows users to choose between viewable data sets.
tags: components
layout: guide
eleventyNavigation:
  key: Pagination
  parent: Components
  order: 230
  excerpt: Pagination allows users to choose between viewable data sets.
  img: /img/illustrations/illus-pagination.svg
---

## Best Practices
- Pagination is used if data, such as on [Tables](/components/table), is split up into several groups
- Pagination also shows users how many sets of data they want to see at one time
- Make sure the Pagination clearly shows the current page number
- Pagination is placed at the bottom of the content which it controls

## Usage

{% include "markup/pagination.njk" %}

``` html
{% include "markup/pagination.njk" %}
```
