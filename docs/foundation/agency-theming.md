---
title: Agency Themes
summary: Agencies have opportunity to reflect their own brand using Pelican.
tags: color, agency, brand
layout: guide
eleventyNavigation:
  key: Agency Themes
  parent: Foundation
  order: 4
  excerpt: Agencies have opportunity to reflect their own brand using Pelican.
  img: /img/illustrations/illus-agency-theme.svg
---

## Overview

Agencies can apply their own brand by changing the SCSS variables and recompiling the CSS. Pelican comes with default theme colors for brand, based upon Louisiana colors, to give you a starting point.

## Applying Agency Brand Theme Colors

Pelican provides 9 Brand color variables you can change. These are listed in the file named `_variables-agency.scss` inside the `/_scss/` folder. Bootstrap will generate all theme variations of components when the SCSS is recompiled to CSS.

{% include 'cards-brand-colors.njk' %}

## Themeable Elements

Pelican provides a way to change the following theme aspects when appropriate. These items can be identified within markup by the use of theme classes such as `btn-primary`, `bg-secondary`, or `text-accent`, for example.

- Background colors, `bg-primary`, `bg-accent`, etc.
- Text colors, `text-accent`, `text-primary`, etc.
- Images and photographs
- Icons and their colors, `text-accent`, `text-danger`, etc.
- Overlay colors, `overlay` + `bg-primary`, etc.
- Button colors, `btn-primary`, etc.

## Changing Themeable Elements

To change the default background or text color, change the class name representing the color to want to change.

For example, changing `bg-primary` to `bg-secondary` will switch the first block’s background color. Changing `text-secondary` to `text-primary` will switch the first block’s text color.

<div class="px-4 mb-5">
    <div class="row">
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-primary text-secondary">
                <p class="mb">Background color is <em>bg-primary</em>.</p>
                <p class="mb-0">Text color is <em>text-secondary</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-black text-warning">
                <p class="mb">Background color is <em>bg-black</em>.</p>
                <p class="mb-0">Text color is <em>text-warning</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-white text-success">
                <p class="mb">Background color is <em>bg-white</em>.</p>
                <p class="mb-0">Text color is <em>text-success</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-info-90 text-info-10">
                <p class="mb">Background color is <em>bg-info-90</em>.</p>
                <p class="mb-0">Text color is <em>text-info-10</em>.</p>
            </div>
        </div>
    </div>
</div>

You would change the background and text colors by changing the Theme Classes.

<div class="px-4 mb-4">
    <div class="row">
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-secondary text-primary">
                <p class="">Background color is now <em>bg-secondary</em>.</p>
                <p class="mb-0">Text color is now <em>text-primary</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-danger text-white">
                <p class="">Background color is now <em>bg-danger</em>.</p>
                <p class="mb-0">Text color is now <em>text-white</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-ui-light text-black">
                <p class="">Background color is now <em>bg-ui-light</em>.</p>
                <p class="mb-0">Text color is now <em>text-black</em>.</p>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
            <div class="p-8 rounded-lg bg-info text-info-10">
                <p class="">Background color is now <em>bg-info</em>.</p>
                <p class="mb-0">Text color is now <em>text-info-90</em>.</p>
            </div>
        </div>
    </div>
</div>

## Brand Colors and Usability

Brand first is not necessarily usability first. Designing with a brand first approach could cause usability problems unless your brand has been designed with usability in mind.

Let’s examine this by looking at the color palette in a digital product. We’ll look at the [Brand colors](/foundation/brand-colors) and the [Status colors](/foundation/status-colors). Brand Colors are the colors of the organization, their logo, and other parts of their visual identity. Status Colors are the special colors which communicate situations to the users like success (usually a green) or danger (usually a red).

Suppose the main Brand Color is green. The success color is also a green. The problem is that these two greens look similar to each other.

<div class="row mb-12">
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 rounded-top" style="background-color: #198754;"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">Example Brand</p>
                <p class="mb-0"><code>#198754</code></p>
                <p class="mb-0">&nbsp;</p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-success rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">Status Success</p>
                <p class="mb-0"><code>#0d6211</code></p>
                <p class="mb-0"><code>$success</code></p>
            </div>
        </div>
    </div>
</div>

Using Brand green-styled buttons as the go-to buttons will cause ambiguity for the user later in the user interface. The user will see the brand green buttons everywhere. Then a situation arises in which a success green-styled button is necessary.

<div class="px-4 mb-5">
    <div class="row">
        <div class="col-12 ">
            <button type="button" class="btn btn-accent" style="background:#198754">Brand Style Button</button>
            <button type="button" class="btn btn-success">Good Action Button</button>
        </div>
    </div>
</div>

User confusion is likely, and could lead them to ask:

- Is this a different green color? What does it mean?
- Did someone make a mistake?
- Were those other buttons I pressed good buttons?

Some strategies to counter this could include:

- Adjust Status Colors to be distinct
- Use supporting Brand Colors for buttons
- Only use brand-colored buttons in select regions like the top or bottom of a page. Use [UI-colored buttons](/foundation/ui-colors/#ui-vs-ui-blue) in between the top and bottom of page.

To prevent ambiguity in this situation, [Status Colors](/foundation/status-colors/) should be adjusted to be visually distinct from Brand Colors.

{% include 'color-warning.njk' %}

## Resources

- <a href="https://www.section508.gov/" target="_blank">Section 508</a>
- <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG Standards</a>
