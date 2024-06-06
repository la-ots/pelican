---
title: UI Colors
summary: Pelican uses UI colors to help define important interface cues.
tags: color
layout: guide
eleventyNavigation:
  key: UI Colors
  parent: Foundation
  order: 3
  excerpt: Pelican uses UI colors to help define important interface cues.
  img: /img/illustrations/illus-ui-colors.svg
---

## User Interface Colors

Pelican attempts to provide more clarity in the user interface by introducing three colors called UI, UI Light, and UI Priority. These are used on form controls, priority interface actions, and supporting interface elements.

By default, UI Colors in Pelican change when light or dark themes are toggled.

<div class="row mb-12">
    <div class="col-md-6 col-xl-3">
        <div class="card border-1">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-ui);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">UI</p>
                <p class="mb-0"><code>--theme-ui</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-1">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-ui-light);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">UI Light</p>
                <p class="mb-0"><code>--theme-ui-light</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-1">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-ui-priority);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">UI Priority</p>
                <p class="mb-0"><code>--theme-ui-priority</code></p>
            </div>
        </div>
    </div>
</div>

Like [Brand Colors](/foundation/status-colors) and [Status colors](/foundation/status-colors), these can be changed. Change with great care as they have been chosen in accordance with usability and color contrast guidelines.

## Using UI Colors

### UI

The UI color is often used as:

- Border colors on [Form Controls](/form-controls/)
- Auxiliary choice buttons among several buttons in a row when Brand or Status themed buttons must also appear
- The smaller buttons immediately adjacent to user interface elements

### UI Light

The UI Light color is often used as:

- The disabled color for [Form Controls](/form-controls/)
- The background color to UI color uses
- Some items’ border colors

### UI Priority

The UI Priority color is taken from calls to action and link colors around the web. It’s often used as:

- Activated [Form Controls](/form-controls/)
- Buttons which need to [appear more prominently than other UI buttons](/foundation/ui-colors/#ui-vs-ui-blue)
- [Links in text](/accessibility/about-accessibility/)

{% include 'color-variation-message.njk' %}

## Resources

- [Bootstrap Documentation - Color](https://getbootstrap.com/docs/5.3/utilities/colors/)
