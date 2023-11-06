---
title: Back to Top Button
summary: The Back to Top Button allows users to return to the top of the page.
tags: back to top button, required
layout: guide
eleventyNavigation:
  key: Back to Top Button
  parent: Components
  order: 90
  excerpt: The Back to Top Button allows users to return to the top of the page.
  img: /img/illustrations/illus-button-top.svg
---

## Best Practices

- Insert it at the bottom of the root element in the page.
- Don’t remove the text in the button. Screen readers need it.
- It appears after the user has scrolled down, usually four times the height of the screen’s initially-visible portion.
- The `href` of the button should be the `id` of the `<main>` element.

## Usage

```html
{% include 'markup/button-back-to-top.njk' %}
```

## Resources

- [Bootstrap Documentation - Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
