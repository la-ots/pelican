---
title: Spacing
summary: Spacing is the paddings and margins in Pelican.
tags: foundation
layout: guide
eleventyNavigation:
  key: Spacing
  parent: Foundation
  order: 6
  excerpt: Spacing is the paddings and margins in Pelican.
  img: /img/illustrations/illus-spacing.svg
---

## Overview

In Pelian, spacing refers to Padding and Margin. Padding is the space inside of something, putting space between its edges and its internal contents. Margin is the space around something, putting space between its outder edges and the outer edges of something else. 

These two boxes illustrate margin and padding. The first sentence in the first box uses a larger bottom margin than the first sentence in the second box. The second box has more padding inside of it than the first box.

<div class="row mb-12">
    <div class="col-md-6 mb-6 mb-lg-0">
        <div class="p-8 bg-ui text-white rounded-lg">
            <p class="mb-16">Padding pushes content away from the edges, towards the inside.</p>
            <p>Margin pushes things away from other things, towards the outside.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div class="p-16 bg-ui text-white rounded-lg">
            <p>Padding pushes content away from the edges, towards the inside.</p>
            <p>Margin pushes things away from other things, towards the outside.</p>
        </div>
    </div>
</div>

## Using Padding and Margin

Padding and Margin can be applied to individual sides, to top and bottom at the same, or the left and right at the same time. Negative margins can even be used. Replace `D` with a digit. For example `mt-4`.

**Padding Classes**

- Top: `pt-D`
- Right: `pe-D` 
- Bottom: `pb-D`
- Left: `ps-D` 
- Top and Bottom: `py-D`
- Right and Left: `px-D`

**Margin Classes**

- Top: `mt-D`
- Right: `me-D`
- Bottom: `mb-D`
- Left: `me-D`
- Top and Bottom: `my-D`
- Right and Left: `mx-D`

## Resources

* <a href="https://getbootstrap.com/docs/5.1/utilities/spacing/" target="_blank">Bootstrap’s Spacing Utilities</a>
