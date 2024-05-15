---
title: Brand Colors
summary: Pelican uses Brand colors to help define your own brand.
tags: color
layout: guide
eleventyNavigation:
  key: Brand Colors
  parent: Foundation
  order: 1
  excerpt: Pelican uses Brand colors to help define your own brand.
  img: /img/illustrations/illus-brand-colors.svg
---

## Brand Colors

Brand colors are the colors featured in an agency’s logo and other aspects of its visual identity. Pelican provides three default brand colors. These colors are based upon Louisiana’s official colors.

<div class="row mb-12">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-primary rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary</p>
        <p class="mb-0">Hex Code: <code>#00284d</code></p>
        <p class="mb-0">CSS Var: <code>--theme-primary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-secondary rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Secondary</p>
        <p class="mb-0">Hex Code: <code>#008282</code></p>
        <p class="mb-0">CSS Var: <code>--theme-secondary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-accent rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Accent</p>
        <p class="mb-0">Hex Code: <code>#fe9903</code></p>
        <p class="mb-0">CSS Var: <code>--theme-accent</code></p>
      </div>
    </div>
  </div>
</div>

## Using Brand Colors

Brand Colors are presented in these lists. These colors have been automatically assigned for you. If your digital product requires changing these colors, see [Agency Themes](/foundation/agency-theming/) for more information.

**Primary**

The Primary color is the color most recognized and associated with a brand. In Pelican, the Primary brand color, `--theme-primary`, is often used for the following items, but not limited to them.

- Text color for [Page Title](/components/page-title/)
- Background color for [Navbar](/components/navbar/)
- Button background color for the main action button in a [Button Container](/components/button-container/)

**Secondary**

The Secondary color is used to support the primary color. In Pelican, `--theme-secondary`, is often used for the following items, but not limited to them.

- Button background color for the second action button in a [Button Container](/components/button-container/)

**Accent**

The Accent color is the smallest supporting color associated with your brand. It’s used as supporting color when either the Primary or Secondary brand need to stand apart from each other but still need a supporting color to them. The Accent brand color, `--theme-accent`, is often used in Pelican as:

- Button background color for the [Back to Top Button](/components/back-to-top-button/)

{% include 'color-variation-message.njk' %}

## Resources

- [Bootstrap Documentation - Color](https://getbootstrap.com/docs/5.3/customize/color/)
