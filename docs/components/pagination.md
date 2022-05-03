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

- Use Pagination if data, such as on [Tables](/components/table), is long and needs to be split up.
- Make sure the Pagination clearly shows the current page’s number.
- Pagination is placed at the bottom of the content which it pages.
- You may need to adjust columns sizes to best fit to your project.

## Usage

{% include 'markup/pagination.njk' %}

``` html
{% include 'markup/pagination.njk' %}
```

## Resources

- <a href="https://getbootstrap.com/docs/4.6/components/pagination/" target="_blank">Bootstrap Pagination</a>