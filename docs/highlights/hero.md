---
title: Hero
summary: Heroes bring a visual impact to a visitor’s initial impression of a site.
tags: feature block
layout: guide
eleventyNavigation:
  key: Hero
  parent: Highlights
  excerpt: Heroes bring a visual impact to a visitor’s initial impression of a site.
  order: 1
  img: /img/illustrations/illus-boxed-in-photo.svg
---

## Best Practices

- Use Hero as the first, prominent element on the page.
- Put it after an instances of the [Official Banner](/components/official-banner/) or [Navbars](/components/navbar/).
- Use the Centered Hero if the image is what’s important.
- Use the Left-Aligned Hero if the text is what’s important.
- One button is best, but two are acceptable as long as button is more prominent than the other.
- Don’t use more than two buttons.

## Usage

**Centered Hero**

{% include markup/highlights-hero-centered.njk %}

```html
{% include markup/highlights-hero-centered.njk %}
```

**Left-Aligned Hero**

{% include markup/highlights-hero-left-aligned.njk %}

```html
{% include markup/highlights-hero-left-aligned.njk %}
```
