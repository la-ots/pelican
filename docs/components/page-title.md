---
title: Page Title
summary: The Page Title block explains the purpose of a page.
tags: components
layout: guide
eleventyNavigation:
  key: Page Title
  parent: Components
  order: 220
  excerpt: The Page Title block explains the purpose of a page.
  img: /img/illustrations/illus-page-title.svg
---

## Best Practices

- Page Titles tell the user which page they’re on.
- It’s recommended for every page to have a Page Title. 
- Use the button to provide quick access to one common action for the page. Use only one.
- If a page needs more than one button, use a <a href="https://getbootstrap.com/docs/4.5/components/dropdowns/#single-button" target="_blank">Bootstrap Dropdown button</a>.
- See the [icons we can use](https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free) as the source for the icon.

## Usage

{% include markup/page-title.njk %}

``` html
{% include markup/page-title.njk %}
```
