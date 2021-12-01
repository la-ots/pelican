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

## Icons used in Pelican

We use <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free" target="_blank">icons from FontAwesome</a> as the source for the icons in Pelican.

## How to Choose the Icons

The <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free" target="_blank">icons we can use</a> are pre-selected. If you need to choose another icon, limit your choices to “Free”, “Solid”, or “Brands.”

Choose the clearest icon for the need. Be consistent when using icons in projects. Do not use the same icon for two different functions. This will cause confusion as to their meaning. For example, <i class="fas fa-arrow-right"></i> is used to navigate to another page, don’t use it for any other purpose.

As much as possible, stick to common meanings when choosing icons rather than meanings specific to your project. For instance, use <i class="fas fa-upload"></i> to indicate a file upload rather than <i class="fas fa-arrow-up"></i> which could mean something else.

### Implementing Icons

FontAwesome icons take their size from their containing element. 

<p class="h1"><span class="fas fa-eye" aria-hidden="true"></span> H1-sized Text</p>
<p><span class="fas fa-eye" aria-hidden="true"></span> This is paragraph-sized text.</p>

``` html
<p class="h1"><span class="fas fa-eye" aria-hidden="true"></span> H1-sized Text</p>
<p><span class="fas fa-eye" aria-hidden="true"></span> This is paragraph-sized text.</p>
```

By default, Pelican icons are wrapped in `<span>` tags as these tags are inline to the text and [won’t add semantic meaning](/foundation/typography/#use-span-for-inline-style). FontAwesome implements them as `<i>` <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i" target="blank">Idiomatic Text</a> tags.

Change the `<i>` to `<span>` in your project. Be sure to add `aria-hidden="true"` to that FontAwesome icon `<span>` so that it resembles `<span class="fas fa-eye" aria-hidden="true"></span>`. This hides the icon from assistive technologies.

### Theming Icons

Change the color of an icon by changing the theme class. The [Color Theme Lists](/foundation/agency-theming/) have the text color classes you need to change icon colors.

<span class="fas fa-eye text-primary" aria-hidden="true"></span> <span class="fas fa-eye text-danger" aria-hidden="true"></span>

``` html
<span class="fas fa-eye text-primary" aria-hidden="true"></span>
<span class="fas fa-eye text-danger" aria-hidden="true"></span>
```

## Resources

* <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free" target="_blank">FontAwesome Icon List</a>
