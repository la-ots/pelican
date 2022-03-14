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
- Pelican recommends a Page Title for every page.
- Use the button to provide quick access to one common action for the page.
- If a page needs more than one button, use a <a href="https://getbootstrap.com/docs/4.6/components/dropdowns/#single-button" target="_blank">Bootstrap Dropdown button</a>.

## Usage

{% include 'markup/page-title.njk' %}

``` html
{% include 'markup/page-title.njk' %}
```
