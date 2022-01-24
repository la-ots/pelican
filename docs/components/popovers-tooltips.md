---
title: Popovers & Tooltips
summary: Popovers & Tooltips provide additional context to users about a connected item.
tags: components
layout: guide
eleventyNavigation:
  key: Popovers & Tooltips
  parent: Components
  order: 240
  excerpt: Popovers & Tooltips provide additional context to users about a connected item.
  img: /img/illustrations/illus-popovers-tooltips.svg
---

## Best Practices

- Popovers and Tooltips may appear at the top, right, bottom, or left of the connected object
- If space is limited, both will automatically adjust their orientation regardless of initial placement

### Popovers Guidance
- Popovers have a header
- Use Popovers when you need to set the context. It is useful when explaining things in more detail than a Tooltip.

### Tooltips Guidance
- Tooltips do not have a header.
- Use Tooltip when the specific context isn’t needed and can contain brief amounts of text.

## Usage
### Popover

{% include 'markup/popovers.njk' %}

``` html
{% include 'markup/popovers.njk' %}
```

### Tooltips

{% include 'markup/tooltips.njk' %}

``` html
{% include 'markup/tooltips.njk' %}
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/popovers/" target="_blank">Bootstrap Documentation - Popovers</a>
* <a href="https://getbootstrap.com/docs/4.5/components/tooltips/" target="_blank">Bootstrap Documentation - Tooltips</a>
