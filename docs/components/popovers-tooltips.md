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

- Popovers and Tooltips may appear at the top, right, bottom, or left of the connected object.
- If space is limited, both will automatically adjust their orientation regardless of initial placement.
- Popovers have a header. It’s useful when explaining things in more detail than a Tooltip.
- Tooltips do not have a header. It’s useful only short amount of text is needed.

## Usage

### Popover

<button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="top" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle top popover</button> <button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="right" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle right popover</button> <button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="bottom" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle bottom popover</button> <button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="left" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle left popover</button>

``` html
<button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="top" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle top popover</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="right" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle right popover</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="bottom" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle bottom popover</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="left" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle left popover</button>
```

### Tooltips

<button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><span class="fas fa-question"></span></button> <button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><span class="fas fa-question"></span></button> <button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"><span class="fas fa-question"></span></button> <button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="left" title="Tooltip on left"><span class="fas fa-question"></span></button>

``` html
<button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  <span class="fas fa-question"></span>
</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  <span class="fas fa-question"></span>
</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  <span class="fas fa-question"></span>
</button>
<button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  <span class="fas fa-question"></span>
</button>
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/popovers/" target="_blank">Bootstrap Documentation - Popovers</a>
* <a href="https://getbootstrap.com/docs/4.5/components/tooltips/" target="_blank">Bootstrap Documentation - Tooltips</a>
