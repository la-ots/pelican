---
title: Badges
summary: Badges are labels that inform users about some aspect of the data, such as the count of related items.
tags: components, badges
layout: guide
eleventyNavigation:
  key: Badges
  parent: Components
  order: 30
  excerpt: Badges are labels that inform users about some aspect of the data, such as the count of related items.
  img: /img/illustrations/illus-badges.svg
---

## Best Practices

- Badges take their size from the parent element.
- Prefer smaller badges over larger ones to prevent them from being confused with buttons.
- Keep the text in them short and succint, one or two short words.
- Use them to display a piece of data’s related quality, such as a number of notifications.
- Remove the `<span>` with the icon if you don’t need it.
- Prefer fewer badges on a page element so they don’t create visual noise.
- A dim variant of the badge may be used by adding the `badge-dim` class.
- Badges are no longer dim by default in the [Page Title](/components/page-title/) to allow for flexibility.

## Usage

{% include 'markup/badges.njk' %}

```html
{% include 'markup/badges.njk' %}
```

## Resources

- [Bootstrap Documentation - Badges](https://getbootstrap.com/docs/5.3/components/badge/)
