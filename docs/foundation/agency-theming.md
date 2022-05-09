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

## Using Your Agency Colors

Agencies can apply their own brand by changing the SCSS variables and recompiling the CSS. Pelican comes with default theme colors for brand, based upon Louisiana colors, to give you a starting point.

Pelican provides 9 Brand color variables you can change. These are listed in the file named `_variables-agency.scss` inside the `/_scss/` folder. Bootstrap will generate all theme variations of components when the SCSS is recompiled to CSS.

To use your own agency colors:

 - Download the repo for Pelican.
 - Update the hex values in `_variables-agency.scss`. 

Bootstrap will generate all theme variations of components when the SCSS is recompiled to CSS.

## Themeable Elements

Pelican provides a way to change the following theme aspects when appropriate. These items can be identified within markup by the use of theme classes such as `btn-primary`, `bg-secondary`, or `text-accent`, for example, you can change: 

- Background colors, using classes such as `bg-primary`, `bg-accent`, etc.
- Text colors, using classes such as `text-accent`, `text-primary`, etc.
- Images and photographs
- Icons and their colors, using classes such as `text-accent`, `text-danger`, etc.
- Button colors, `btn-primary`, etc.

## Changing Themeable Elements

To change background or text color, change the class name representing the color you want to change. Consider [Color Contrast](/accessibility/color-contrast/) when you change these classes. For example, changing `bg-primary` to `bg-secondary` will change the background color from the primary to the secondary color. Changing `text-secondary` to `text-primary` will change the text color. Compare the cards below.

<div class="row px-4 mb-6">
  <div class="col-12 col-md-6">
    <div class="card bg-primary text-primary-10">
      <div class="card-body">
        <p class="mb">Background color is <code class="text-primary-10">bg-primary</code>.</p>
        <p class="mb-0">Text color is <code class="text-primary-10">text-primary-10</code>.</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-black text-warning">
      <div class="card-body">
        <p class="mb">Background color is <code class="text-warning">bg-black</code>.</p>
        <p class="mb-0">Text color is <code class="text-warning">text-warning</code>.</p>
      </div>
    </div>            
  </div>
</div>

## Brand Colors and Usability

Brand first is not necessarily accessibility or usability first. Designing with a brand first approach could cause usability problems unless your brand has been designed with accessibility in mind.

Let’s examine this concept with an imaginary color palette for a digital product. Suppose the primary brand color of this imaginary palette is green. The success status color is also a green. The problem is that these two greens look similar to each other. A user would not be able to distinguish between a success cue, such as a Success Toast, from a brand color. The meaning would be unclear.

<div class="row mb-12">
  <div class="col-md-6">
    <div class="card border-0">
      <div class="rounded-top pd-color-block" style="background-color: #198754;"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Example Brand</p>
        <p class="mb-0">Hex Code: <code>#198754</code></p>
        <p class="mb-0">SCSS Var: <code>$primary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card border-0">
      <div class="bg-success rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Status Success</p>
        <p class="mb-0">Hex Code: <code>#0d6211</code></p>
        <p class="mb-0">SCSS Var: <code>$success</code></p>
      </div>
    </div>
  </div>
</div>

In the same way, using brand green-styled buttons as the go-to buttons will also confuse the user. The user will see the brand green buttons everywhere. But what happens when you need a success button? The meaning of the success button, to indicate something affirmative, would be lost.

<div class="row px-4 mb-6">
  <div class="col-12">
    <button type="button" class="btn btn-secondary" style="background:#198754; border-color:#198754; color:white;">Brand Style Button</button>
    <button type="button" class="btn btn-success">Good Action Button</button>
  </div>
</div>

User confusion is likely, and could lead them to ask:

- Is this a different green color? What does it mean?
- Did someone make a mistake?
- Were those other buttons I pressed good buttons?

Some strategies to counter this could include:

- Adjust Status Colors to be distinct
- Create and use supporting brand colors for important user interface elements.
- Only use brand-colored buttons in specific, controlled regions, like the top or bottom of a page.

To prevent ambiguity in this situation, you could try one of a few strategies:

- Design [Status Colors](/foundation/status-colors/) should be adjusted to be visually distinct from Brand Colors.
- Avoid using Brand Colors in meaningful places in the user interface
- Design a supporting brand palette for Status colors

{% include 'color-warning.njk' %}

## Resources

- <a href="https://www.section508.gov/" target="_blank">Section 508</a>
- <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG Standards</a>
