---
title: Spacing
summary: Spacing is the paddings and margins in Pelican.
tags: foundation
layout: page-guide
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

<div class="row mb-5">
    <div class="col-md-6 mb-4 mb-lg-0">
        <div class="p-5 bg-ui text-white rounded-lg">
            <p>There are 32 pixels of padding around this box. It pushes content away from the edges, towards the inside.</p>
            <p>There are 15 pixels of margin to the right. This can also be called “margin-right”.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div class="p-5 bg-ui text-white rounded-lg">
            <p>There are 32 pixels of padding around this box. It pushes content away from the edges, towards the inside.</p>
            <p>There are 15 pixels of margin to the left. This can also be called “margin-left”.</p>
        </div>
    </div>
</div>

## Padding and Margin Classes

Padding and Margin can be applied to individual sides, to top and bottom at the same, or the left and right at the same time.

Replace `n` with any number from 0 to 5. Replacing `n` with `0` applies zero spacing. Each successive number from `1` to `5` adds a multiple of pixels of space to the previous number (based on Bootstrap's defined spacer variable).

Be sure to consult <a href="{% include 'links/spacing.njk' %}" target="_blank">Bootstrap’s Spacing Utilities</a> for additional spacing abilities like responsive spacing.

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

* <a href="{% include 'links/spacing.njk' %}" target="_blank">Bootstrap’s Spacing Utilities</a>
