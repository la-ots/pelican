---
title: Chip
summary: Chips allow users to see items added to or removed from a set.
tags: components, chips
layout: guide
eleventyNavigation:
  key: Chip
  parent: Components
  order: 140
  excerpt: Chips allow users to see items added to or removed from a set.
  img: /img/illustrations/illus-chips.svg
---

## Best Practices

- Chips indicate the presence of a member in a set
- Chips contain a property to also allow easy removal from a set
- Chips are extensions of [Badges](/components/badges). You must first enter the Badge markup, then add `class=”chip”`. Create a parent container with a class of `chips` to hold the chips.

## Usage

{% include markup/chip.njk %}

``` html
{% include markup/chip.njk %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/badge/" target="_blank">Bootstrap Documentation - Badges</a>
