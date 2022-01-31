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

- It appears after the user has scrolled down, usually four times the height of the screen’s initially-visible portion.
- The `HREF` of the button should be the `id` of the `<main>` element.
- Follow the guidance in the [Icon-Only Button](/components/buttons/#icon-only-button).

## Usage

{% include 'markup/back-to-top.njk' %}

``` html
{% include 'markup/back-to-top.njk' %}
```
## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
