---
title: Table
summary: Tables allow users to compare and review large amounts of data.
tags: components
layout: guide
eleventyNavigation:
  key: Table
  parent: Components
  order: 300
  excerpt: Tables allow users to compare and review large amounts of data.
  img: /img/illustrations/illus-table.svg
---

## Best Practice

- Tables allows the user to compare data.
- Use accessible Table markup, like what’s provided.
- [Pagination](/components/pagination) goes below a table if you need it.
- Use Tables to display tabular data, not for layout.
{% include 'cards-tables.njk' %}

## Usage

{% include 'markup/table.njk' %}

``` html
{% include 'markup/table.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/content/tables/" target="_blank">Bootstrap Documentation - Tables</a>
* <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced" target="_blank">Mozilla Developer Network - HTML Table Advanced Features and Accessibility</a>
