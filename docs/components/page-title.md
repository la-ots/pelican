﻿---
title: Page Title
summary: The Page Title block explains the purpose of a page.
tags: components
layout: guide
eleventyNavigation:
  key: Page Title
  parent: Components
  order: 230
  excerpt: The Page Title block explains the purpose of a page.
  img: /img/illustrations/illus-page-title.svg
---

## Best Practices

- Page Titles tell the user which page they’re on.
- Pelican recommends a Page Title for every page.
- Use the button to provide quick access to one common action for the page.
- If a page needs more than one button, use a [Bootstrap Dropdown button](https://getbootstrap.com/docs/5.3/components/dropdowns/#single-button).
- Remove the [Badges](/components/badges/) section if you don’t need them.
- Try to keep to just two or three Badges.
- Most badges in the Page Title, except Warning and Danger, will be dimmed to avoid undue emphasis.
- Use only one H1 per page. (We are using an extra one here only as a documentation sample for the component.)
- Learn more about how to use [Headings](/accessibility/headings/)

## Usage

{% include 'markup/page-title.njk' %}

```html
{% include 'markup/page-title.njk' %}
```
