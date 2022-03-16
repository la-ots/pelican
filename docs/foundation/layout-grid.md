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

The <a href="https://getbootstrap.com/docs/5.1/layout/grid/" target="_blank">Layout Grid is taken from Bootstrap</a>, upon which Pelican is built. It allocates space to items and sizes them. We recommend familiarizing yourself with it.

## Explanation

The Layout Grid needs to be understood from the point of view of screen or device widths, such as mobile devices.

The browser window has an explicit width whether it’s edge-to-edge of your monitor or resized. The Bootstrap grid divides the element in which its positioned into 12 equally-sized columns with gaps. This could be the root of the document or in a child element. These 12 columns’ individual widths change as the browser window or device width changes. These browser windows or device widths are divided into certain ranges, or Breakpoints. The window size determines the breakpoint, regardless of where the grid is placed.

<div class="table-responsive">
  <table class="table mb-8">
    <thead>
      <tr>
        <th id="Breakpoint">Breakpoint</th>
        <th id="Breakpoint-Size">Breakpoint-Size</th>
        <th id="Breakpoint-Range">Breakpoint-Range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="Extra-Small">Extra-Small</th>
        <td headers="Extra-Small Breakpoint-Size"><code>-xs</code></td>
        <td headers="Extra-Small Breakpoint-Range">0 – 576px</td>
      </tr>
      <tr>
        <th id="Small">Small</th>
        <td headers="Small Breakpoint-Size"><code>-sm</code></td>
        <td headers="Small Breakpoint-Range">577 – 767px</td>
      </tr>
      <tr>
        <th id="Medium">Medium</th>
        <td headers="Medium Breakpoint-Size"><code>-md</code></td>
        <td headers="Medium Breakpoint-Range">768 – 991px</td>
      </tr>
      <tr>
        <th id="Large">Large</th>
        <td headers="Large Breakpoint-Size"><code>-lg</code></td>
        <td headers="Large Breakpoint-Range">992 – 1199px</td>
      </tr>
      <tr>
        <th id="Extra-Large">Extra-Large</th>
        <td headers="Extra-Large Breakpoint-Size"><code>-xl</code></td>
        <td headers="Extra-Large Breakpoint-Range">1200 – 1399px</td>
      </tr>
      <tr>
        <th id="Extra-Extra-Large">Extra-Extra-Large</th>
        <td headers="Extra-Extra-Large Breakpoint-Size"><code>-xxl</code></td>
        <td headers="Extra-Extra-Large Breakpoint-Range">≥ 1400px</td>
      </tr>                                
    </tbody>
  </table>
</div>

These breakpoints allow for items to be predictably sized. Resize this window and observe how the light blue boxes widths change in small increments before changing across larger increments.

{% include markup/layout-grid.njk %}

``` html
{% include markup/layout-grid.njk %}
``` 

## Guidance

To get the predictable resizing, follow this markup guide.

1. Begin with a `container-fluid` (or a `.container` if you need to limit the total width).
1. Insert a `row`
1. Add the column classed `<div>`s as necessary, such as `col-12` or `col-md-6`.

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12 ..."></div>
  </div>
</div>
```

This forms the basis of your layout. 

Content which needs to resize would be placed directly in the `<div>` elements with the columns classes. For example, notice how each cards is sized by its parent column class.

{% include markup/cards-layout.njk %}

```html
{% include markup/cards-layout.njk %}
```

## Special Note

Pelican defaults tp `container-fluid` rather than `container` to better accomodate fluid sizing. This allows full-width use of the screen.

* `.container-fluid` sets width at 100% on all breakpoints, which allows it to use to maximum screen width available to its parent element
* `.container` sets a maximum width at preset breakpoints, which makes it less flexible as a child element

## Resources

* <a href="https://getbootstrap.com/docs/5.1/layout/grid/" target="_blank">Bootstrap Documentation - Grid System</a>
