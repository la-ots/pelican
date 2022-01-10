﻿---
title: Back & Forward Buttons
summary: Back & Forward buttons allow users to move through a sequential process.
tags: components, buttons
layout: guide
eleventyNavigation:
  key: Back and Forward Buttons
  parent: Components
  order: 80
  excerpt: Back & Forward buttons allow users to move through a sequential process.
  img: /img/illustrations/illus-buttons-back-fwd.svg
---

## Best Practices

- Often used on conjunction with [Progress Indicators](/components/progress)
- Use when users must complete a sequential process
- Place at the bottom, but above the footer, of each page in the process
- Buttons should be side by side at small sizes, when the button labels are short
- Buttons can be centered at small sizes when the buttons labels are too long for side by side arrangement
- When button labels are long enough to require centering, ensure that Back button is atop the Forward button

## Usage

{% include markup/button-back-forward.njk %}

``` html
{% include markup/button-back-forward.njk %}
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
