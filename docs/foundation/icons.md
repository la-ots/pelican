﻿---
title: Icons
summary: Icons provide at-a-glance representation of actions or concepts.
tags: icons
layout: guide
eleventyNavigation:
  key: Icons
  parent: Foundation
  order: 9
  excerpt: Icons provide at-a-glance representation of actions or concepts.
  img: /img/illustrations/illus-icons.svg
---

## Best practices

- Here’s the [Font Awesome icons we can use](https://fontawesome.com/v5/search?o=r&m=free&s=solid).
- Choose the most obvious icon for what’s being communicated.
- Be consistent when using icons within projects.
- Do not use the same icon for two different functions.
- As much as possible, use common meanings when choosing icons.
- Font Awesome icons take their size from their containing element.
- By default, Pelican wraps icons in `<span>` tags as these tags are inline with text.
- Change the color of an icon by changing the theme class. The [Color Theme Lists](/foundation/agency-theming/) have the text color classes you need to change icon colors.
- Copy markup from FontAwesome, but change the `<i>` to a `<span>`.
- Be sure to add `aria-hidden="true"` to the `<span>`. This hides the icon from assistive technologies.

## Usage

<span class="icon fas fa-universal-access text-info" aria-hidden="true"></span> <span class="icon fas fa-calendar-alt text-secondary" aria-hidden="true"></span> <span class="icon fas fa-check-circle text-success" aria-hidden="true"></span> <span class="icon fas fa-grin-alt text-accent" aria-hidden="true"></span> <span class="icon fas fa-heart text-danger" aria-hidden="true"></span>

```html
<span class="icon fas fa-universal-access text-info" aria-hidden="true"></span>
<span class="icon fas fa-calendar-alt text-secondary" aria-hidden="true"></span>
<span class="icon fas fa-check-circle text-success" aria-hidden="true"></span>
<span class="icon fas fa-grin-alt text-accent" aria-hidden="true"></span>
<span class="icon fas fa-heart text-danger" aria-hidden="true"></span>
```

## Resources

- [FontAwesome Icon List](https://fontawesome.com/v5/search?o=r&m=free&s=solid)
