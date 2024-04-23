---
title: Table, Scrollable
summary: Scrollable tables allow users to compare and review large amounts of data unrestricted by window size.
tags: components
layout: guide
eleventyNavigation:
  key: Table, Scrollable
  parent: Components
  order: 330
  excerpt: Scrollable tables allow users to compare and review large amounts of data unrestricted by window size.
  img: /img/illustrations/illus-table-scroll.png
---

## Best Practice

- Do not use `table-striped` on this table.
- You may need to reduce the window’s width to see the table’s horizontal scrolling.
- Tables allows the user to compare data.
- Use accessible Table markup, like what’s provided.
- [Pagination](/components/pagination) goes below a table if you need it.
- Use Tables to display tabular data, not for layout.
- Tables size their columns by the longest amount of unbroken text in either the column header or the column.
{% include 'cards-tables.njk' %}

## Usage

{% include 'markup/table-scrollable.njk' %}

```html
{% include 'markup/table-scrollable.njk' %}
```

## Resources

- [Bootstrap Documentation - Tables](https://getbootstrap.com/docs/5.3/content/tables/)
- [Mozilla Developer Network - HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)
