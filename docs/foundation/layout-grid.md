---
title: Layout Grid
summary: Pelican uses Bootstrap’s Grid to arrange content.
tags: components, layout grid, grid, layout
layout: guide
eleventyNavigation:
  key: Layout Grid
  parent: Foundation
  order: 5
  excerpt: Pelican uses Bootstrap’s Grid to arrange content.
  img: /img/illustrations/illus-layout.svg
---

## Overview

The <a href="https://getbootstrap.com/docs/4.5/layout/overview/" target="_blank">Layout Grid is taken from Bootstrap</a>, upon which Pelican is built, allocates space to items and sizes them. We recommend familiarizing yourself with it.

## Explanation

The Layout Grid needs to be understood from the point of view of screen or device widths, such as mobile devices.

The browser window has an explicit width whether it’s edge-to-edge of your monitor or resized to some fraction. The Bootstrap grid divides that width into 12 equally-sized columns with gaps. These 12 columns’ individual widths change as the browser window or device width changes. These browser windows or device widths are put into certain grid division ranges, or Breakpoints, as their widths fall within certain pixel width ranges.

1. Extra Small, `-xs` , the beginning, is 0 – 576px.
1. Small, `-sm` , is 577 – 767px.
1. Medium, `-md` , is 768 – 991px.
1. Large, `-lg` , is 992 – 1199px.
1. Extra Large, `-xl` , is 1200px or larger.

These breakpoints allow for items to be predictably sized. Resize this window and observe how the light blue boxes widths change in small increments before changing across larger increments.

{% include 'markup/layout-grid.njk' %}

``` html
{% include 'markup/layout-grid.njk' %}
``` 

## Guidance

To get the predictable resizing, follow this markup guide.

1. Begin with a `container-fluid`
1. Insert a `row`
1. Add the column classed `<div>`s as necessary

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12 ..."></div>
  </div>
</div>
```

This forms the basis of your layout. 

Content which needs to resize would be placed directly in the `<div>` elements with the columns classes. Cards and Form Groups are easy examples.

{% include 'markup/cards-layout.njk' %}

```html
{% include 'markup/cards-layout.njk' %}
```

## Special Note

Pelican uses `container-fluid` rather than `container` to better accomodate fluid sizing.

* `.container-fluid` sets width at 100% on all breakpoints, which allows it to use to maximum screen width available to its parent element
* `.container` sets a maximum width at preset breakpoints, which makes it less flexible as a child element

## Resources

* <a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">Bootstrap Documentation - Grid System</a>
