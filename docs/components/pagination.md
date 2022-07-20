---
title: Pagination
summary: Pagination allows users to choose between viewable data sets.
tags: components
layout: page-guide
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
- Pagination is placed underneath the content which it pages.
- You may need to adjust columns sizes to best fit to your project.

## Usage

{% include 'markup/components/pagination.njk' %}

``` html
{% include 'markup/components/pagination.njk' %}
```

## Resources

- <a href="https://getbootstrap.com/docs/5.1/components/pagination/" target="_blank">Bootstrap Pagination</a>
