---
title: Tabbed Content
summary: Tabs group related content, allowing users to see only what they want to see.
tags: components
layout: guide
eleventyNavigation:
  key: Tabbed Content
  parent: Components
  order: 300
  excerpt: Tabs group related content, allowing users to see only what they want to see.
  img: /img/illustrations/illus-tabbed-content.svg
---

## Best Practices

- Tabbed content allows users to choose which content they want to see.
- Use tabbed content to small bits of content at a time.
- Rounded style tabs work better on small devices.
- Tabs are for selective content display, not navigation.
- You may need to put tabbed content into [Layout Grid](/foundation/layout-grid/) items.

## Usage

### Tabs

{% include 'markup/tabbed-content-traditional.njk' %}

```html
{% include 'markup/tabbed-content-traditional.njk' %}
```

### Button Tabs

{% include 'markup/tabbed-content-rounded.njk' %}

```html
{% include 'markup/tabbed-content-rounded.njk' %}
```

## Resources

- [Bootstrap Documentation - Pill Nav](https://getbootstrap.com/docs/5.3/components/navs-tabs/#pills)
- [Bootstrap Documentation - Tab Nav](https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs)
