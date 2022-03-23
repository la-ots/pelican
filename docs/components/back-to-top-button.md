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
- Don’t remove the hidden text for screen readers.
- It appears after the user has scrolled down, usually four times the height of the screen’s initially-visible portion.
- The `href` of the button should be the `id` of the `<main>` element.
- Follow the guidance in the [Icon-Only Button](/components/buttons/#icon-only-button).

## Usage

{% include 'markup/button-back-to-top.njk' %}

``` html
{% include 'markup/button-back-to-top.njk' %}
```
## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
