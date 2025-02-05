---
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
- Use only one H1 per page. (We are using an extra one here only as a documentation sample for the component.)
- Learn more about how to use [Headings](/accessibility/headings/)

**Using Badges in the Page Title**

- Remove the Badges section if you don’t need them.
- Try to use no more than two or three Badges.
- Badges in the Page Title are no longer dim by default. Refer to [Badges](/components/badges/) for using dim badges.

## Usage

{% include 'markup/page-title.njk' %}

```html
{% include 'markup/page-title.njk' %}
```
