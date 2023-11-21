---
title: Table
summary: Tables allow users to compare and review large amounts of data.
tags: components
layout: guide
eleventyNavigation:
  key: Table
  parent: Components
  order: 310
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

```html
{% include 'markup/table.njk' %}
```

## Resources

- [Bootstrap Documentation - Tables](https://getbootstrap.com/docs/5.3/content/tables/)
- [Mozilla Developer Network - HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)
