---
title: Brand Colors
summary: Pelican uses Brand Colors to help define your own brand.
tags: color
layout: page-guide
eleventyNavigation:
  key: Brand Colors
  parent: Foundation
  order: 1
  excerpt: Pelican uses Brand Colors to help define your own brand.
  img: /img/illustrations/illus-brand-colors.svg
---
## Brand Colors

Brand Colors are the colors featured in an agency’s logo and other aspects of its visual identity. Pelican provides three default Brand Colors. These colors are based upon Louisiana’s official colors.

<div class="row mb-5">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-primary rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary</p>
        <p class="mb-0">Hex Code: <code>#00284d</code></p>
        <p class="mb-0">SCSS Var: <code>$primary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-secondary rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Secondary</p>
        <p class="mb-0">Hex Code: <code>#008282</code></p>
        <p class="mb-0">SCSS Var: <code>$secondary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0">
      <div class="bg-accent rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Accent</p>
        <p class="mb-0">Hex Code: <code>#fe9903</code></p>
        <p class="mb-0">SCSS Var: <code>$accent</code></p>
      </div>
    </div>
  </div>
</div>

## Using Brand Colors

Brand Colors are presented in these lists. These colors have been automatically assigned for you. If your digital product requires changing these colors, see [Agency Themes](/foundation/agency-theming/) for more information.

**Primary**

The Primary color is the color most recognized and associated with a brand. In Pelican, the Primary Brand Color, `$primary`, is often used for the items below:

- Text color for [Page Title](/components/page-title/)
- Background color for [left sidebar](/components/app-screen/)
- Button background color for the main action button in a [Button Container](/components/button-container/)

**Secondary**

- Button background color for the secondary action button in a [Button Container](/components/button-container/)

**Accent**

The Accent color is the smallest supporting color associated with your brand. It’s used as supporting color when either the Primary or Secondary brand need to stand apart from each other but still need a supporting color to them. The Accent Brand Color, `$accent`, is often used in Pelican as:

- Overlay colors in [Hero Blocks](/hero-blocks/)
- Default color for buttons in the [Utility Footer](/components/footer/)

## Brand Color Class List

You’ll change background and text colors by using the following classes. Consult [Agency Themes](/foundation/agency-theming/) for more information.

<div class="table-responsive">
  <table class="table mb-5">
    <thead>
      <tr>
        <th scope="col" id="brand-color">Brand Color</th>
        <th scope="col" id="background-color">Background Color</th>
        <th scope="col" id="background-color-class">Background Color Class</th></th>
        <th scope="col" id="text-color">Text Color</th>
        <th scope="col" id="text-color-class">Text Color Class</th></th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <th scope="row" id="Primary">Primary</th>
          <td headers="primary background-color"><span class="h5"><span class="badge badge-primary">bg-primary</span></span></td>
          <td headers="primary background-color-class"><code>bg-primary</code></td>
          <td headers="primary text-color"><span class="h5"><span class="badge text-primary">text-primary</span></span></td>
          <td headers="primary text-color-class"><code>text-primary</code></td>
        </tr>
        <tr>
          <th scope="row" id="Secondary">Secondary</th>
          <td headers="secondary background-color"><span class="h5"><span class="badge badge-secondary">bg-secondary</span></span></td>
          <td headers="secondary background-color-class"><code>bg-secondary</code></td>
          <td headers="secondary text-color"><span class="h5"><span class="badge text-secondary">text-secondary</span></span></td>
          <td headers="secondary text-color-class"><code>text-secondary</code></td>
        </tr>
        <tr>
          <th scope="row" id="Accent">Accent</th>
          <td headers="accent background-color"><span class="h5"><span class="badge badge-accent">bg-accent</span></span></td>
          <td headers="accent background-color-class"><code>bg-accent</code></td>
          <td headers="accent text-color"><span class="h5"><span class="badge text-accent">text-accent</span></span></td>
          <td headers="accent text-color-class"><code>text-accent</code></td>
        </tr>                   
      </tbody>
  </table>
</div>

## Resources

* <a href="{% include 'links/color.njk' %}" target="_blank">Bootstrap Documentation - Color</a>
