---
title: Popovers & Tooltips
summary: Popovers & Tooltips provide additional context to users about a connected item.
tags: components
layout: guide
eleventyNavigation:
  key: Popovers & Tooltips
  parent: Components
  order: 250
  excerpt: Popovers & Tooltips provide additional context to users about a connected item.
  img: /img/illustrations/illus-popovers-tooltips.svg
---

## Best Practices

- Popovers and Tooltips may appear at the top, right, bottom, or left of the connected object.
- If space is limited, both will automatically adjust their orientation regardless of initial placement.
- Popovers have a header. It’s useful when explaining things in more detail than a Tooltip.
- Tooltips do not have a header. It’s useful only short amount of text is needed.

## Usage

### Popover

{% include 'markup/popovers.njk' %}

```html
{% include 'markup/popovers.njk' %}
```

### Tooltips

{% include 'markup/tooltips.njk' %}

```html
{% include 'markup/tooltips.njk' %}
```

## Resources

- [Bootstrap Documentation - Popovers](https://getbootstrap.com/docs/5.3/components/popovers/)
- [Bootstrap Documentation - Tooltips](https://getbootstrap.com/docs/5.3/components/tooltips/)
