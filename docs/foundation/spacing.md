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

Spacing is used as Padding and Margin in Pelican.

Padding is the space inside of something, putting space between its edges and its internal contents. Margin is the space around something, putting space between its outer edges and the outer edges of something else.

These two boxes have margins around them and padding inside of them.

<div class="row mb-12">
    <div class="col-md-6 mb-6 mb-lg-0">
        <div class="p-1 bg-ui text-white rounded-lg">
            <p>There are 4 pixels of padding around this box. It pushes content away from the edges, towards the inside.</p>
            <p>There are 16 pixels of margin to the bottom of these sentences. This can also be called “margin-bottom”.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div class="p-5 bg-ui text-white rounded-lg">
            <p class="mb-0">There are 20 pixels of padding around this box. It pushes content away from the edges, towards the inside.</p>
            <p class="mb-0">There are 0 pixels of margin to the bottom of these sentences. This can also be called “margin-bottom”.</p>
        </div>
    </div>
</div>

## Padding and Margin Classes

Padding and Margin can be applied to individual sides, to top and bottom at the same, or the left and right at the same time. Padding left and right have been changed to padding start and padding end, based upon the flex direction. Be sure to consult [Bootstrap’s Spacing Utilities](https://getbootstrap.com/docs/5.2/utilities/spacing/) for additional spacing abilities like responsive spacing and flex direction.

Replace `n` with any number from 0 to 40. Replacing `n` with `0` applies zero spacing. Each successive number from `1` to `40` adds a multiple of 4 pixels (based on .25 rem) of space to the previous number (based on Bootstrap's defined spacer variable).

For example, `mb-5` adds 1.25 rem (20 pixels) while `mb-6` adds 1.5 rem (24 pixels) of margin at the bottom.

**Padding Classes**

- Top: `pt-n`
- Right: `pe-n`
- Bottom: `pb-n`
- Left: `ps-n`
- Top and Bottom: `py-n`
- Right and Left: `px-n`

**Margin Classes**

- Top: `mt-n`
- Right: `me-n`
- Bottom: `mb-n`
- Left: `ms-n`
- Top and Bottom: `my-n`
- Right and Left: `mx-n`

## Resources

- [Bootstrap’s Spacing Utilities](https://getbootstrap.com/docs/5.2/utilities/spacing/)
