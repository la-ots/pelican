---
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

- <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free" target="_blank">Fontawesome icons we can use</a>.
- Choose the clearest icon for what’s being communicated. 
- Be consistent when using icons in projects. 
- Do not use the same icon for two different functions.
- As much as possible, stick to common meanings when choosing icons rather than meanings specific to your project.
- FontAwesome icons take their size from their containing element. 
- By default, Pelican wraps icons `<span>` tags as these tags are inline to the text. 
- Change the color of an icon by changing the theme class. The [Color Theme Lists](/foundation/agency-theming/) have the text color classes you need to change icon colors.

## Accessibility

- If you copy markup from FontAwesome, change the `<i>` to a `<span>`.
- Be sure to add `aria-hidden="true"` to that FontAwesome icon `<span>` so that it resembles `<span class="fas fa-cog" aria-hidden="true"></span>`. This hides the icon from assistive technologies.

## Resources

* <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free" target="_blank">FontAwesome Icon List</a>
