---
title: Table, Striped
summary: Tables allow users to compare and review large amounts of data.
tags: components
layout: guide
eleventyNavigation:
  key: Table, Striped
  parent: Components
  order: 320
  excerpt: Tables allow users to compare and review large amounts of data.
  img: /img/illustrations/illus-table.svg
---

## Best Practice

- Tables allows the user to compare data.
- Use accessible Table markup, like what’s provided.
- [Pagination](/components/pagination) goes below a table if you need it.
- Use Tables to display tabular data, not for layout.
- Tables size their columns by the longest amount of unbroken text in either the column header or the column.
- Sorting needs to [inform screen reader users](/accessibility/live-region).
{% include 'cards-tables.njk' %}

## Usage

{% include 'markup/table-striped.njk' %}

```html
{% include 'markup/table-striped.njk' %}
```

## Resources

- [Bootstrap Documentation - Tables](https://getbootstrap.com/docs/5.3/content/tables/)
- [Mozilla Developer Network - HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)
