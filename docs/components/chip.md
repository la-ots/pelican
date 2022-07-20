---
title: Chip
summary: Chips allow users to see items added to or removed from a set.
tags: components, chips
layout: page-guide
eleventyNavigation:
  key: Chip
  parent: Components
  order: 140
  excerpt: Chips allow users to see items added to or removed from a set.
  img: /img/illustrations/illus-chips.svg
---

## Best Practices

- Chips indicate the presence of a member in a set.
- They contain a `<a>` with `role="button"` to delete them from a data group.
- Chips are special [Badges](/components/badges).
- Create a parent container with a class of `chips` to hold the chips.
- First use the badge markup, then add `class=”chip”`. 

## Usage

{% include 'markup/components/chip.njk' %}

``` html
{% include 'markup/components/chip.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/5.1/components/badge/" target="_blank">Bootstrap Documentation - Badges</a>
