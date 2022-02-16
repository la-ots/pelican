---
title: Previous & Next Buttons
summary: Previous & Next buttons allow users to move through a sequential process.
tags: components, buttons
layout: guide
eleventyNavigation:
  key: Previous and Next Buttons
  parent: Components
  order: 80
  excerpt: Previous & Next buttons allow users to move through a sequential process.
  img: /img/illustrations/illus-buttons-back-fwd.svg
---

## Best Practices

- Often used on conjunction with [Progress Indicators](/components/progress).
- Use when users must complete a sequential process.
- Place at the bottom, but above the footer, of each page in the process.
- Buttons should be side by side at small sizes, when the button labels are short.
- Buttons can be centered at small sizes when the buttons labels are too long for side by side arrangement.
- When button labels are long enough to require centering, ensure that Previous button is atop the Next button.
- To assign equal emphasis to Previous and Next, change `btn-outline-ui` on the Previous button to `btn-primary`.
- Consider the guidance in [Buttons](/components/buttons/).

## Usage

{% include 'markup/button-previous-next-page.njk' %}

``` html
{% include 'markup/button-previous-next-page.njk' %}
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
