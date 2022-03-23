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

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-primary rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary</p>
        <p class="mb-0">Hex Code: <code>#00284d</code></p>
        <p class="mb-0">SCSS Var: <code>$primary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-secondary rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Secondary</p>
        <p class="mb-0">Hex Code: <code>#008282</code></p>
        <p class="mb-0">SCSS Var: <code>$secondary</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-accent rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Accent</p>
        <p class="mb-0">Hex Code: <code>#fe9903</code></p>
        <p class="mb-0">SCSS Var: <code>$accent</code></p>
      </div>
    </div>
  </div>
</div>

## Using Brand Colors

Some for each Brand Color are presented in these lists, but not limited to only these items. These colros have been automatically assigned for you. If your digital product requires changing these colors, see [Agency Themes](/foundation/agency-theming/) for more information.

**Primary**

The Primary color is the color most recognized and associated with a brand. In Pelican, the Primary brand color, `$primary`, is often used for the items below:

- Text color for [Page Title](/components/page-title/)
- Background color for [left sidebar](/components/app-screen/)
- Button background color for the main action button in a [Button Container](/components/button-container/)

**Accent**

The Accent color is the smallest supporting color associated with your brand. It’s used as supporting color when either the Primary or Secondary brand need to stand apart from each other but still need a supporting color to them. The Accent brand color, `$accent`, is often used in Pelican as:

- Button background color for the [Back to Top Button](/components/back-to-top-button/)

## Brand Color Variations

Dark and light variants are available for all three Brand colors. Use them to ensure accessibility by providing better contrast in User Interface (UI) elements or as text and background colors.

**Primary Brand Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-primary rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary</p>
        <p class="mb-0">
          Hex Code: <code>#00284d</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$primary</code>
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-primary-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary, Lighter</p>
        <p class="mb-0">
          Hex Code: <code>#c0cedb</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$primary-10</code>
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-primary-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Primary, Darker</p>
        <p class="mb-0">
          Hex Code: <code>#00203e</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$primary-90</code>
        </p>
      </div>
    </div>
  </div>
</div>

**Secondary Brand Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-secondary rounded-top"></div>
        <div class="card-body">
          <p class="mb-0 fw-bold">secondary</p>
          <p class="mb-0">
            Hex Code: <code>#008282</code>
          </p>
          <p class="mb-0">
            SCSS Var: <code>$secondary</code>
          </p>
        </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-secondary-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">secondary, Lighter</p>
        <p class="mb-0">
          Hex Code: <code>#a8eae7</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$secondary-10</code>
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-secondary-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">secondary, Darker</p>
        <p class="mb-0">
          Hex Code: <code>#105a57</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$secondary-90</code>
        </p>
      </div>
    </div>
  </div>
</div>

**Accent Brand Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-accent rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">accent</p>
        <p class="mb-0">
          Hex Code: <code>#f9903</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$accent</code>
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-accent-10 rounded-top"></div>
        <div class="card-body">
            <p class="mb-0 fw-bold">accent, Lighter</p>
            <p class="mb-0">
              Hex Code: <code>#ffe0b3</code>
            </p>
            <p class="mb-0">
              SCSS Var: <code>$accent-10</code>
            </p>
        </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-accent-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">accent, Darker</p>
        <p class="mb-0">
          Hex Code: <code>#bf5102</code>
        </p>
        <p class="mb-0">
          SCSS Var: <code>$accent-90</code>
        </p>
      </div>
    </div>
  </div>
</div>

## Brand Color Class List

You’ll change background and text colors by using the following classes. Consult [Agency Themes](/foundation/agency-theming/) for more information.

<div class="table-responsive">
  <table class="table  mb-8">
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
          <td headers="primary background-color"><span class="badge badge-pill py-2 px-4 badge-primary">bg-primary</span></td>
          <td headers="primary background-color-class"><code>bg-primary</code></td>
          <td headers="primary text-color"><span class="badge badge-pill py-2 px-4 text-primary">text-primary</span></td>
          <td headers="primary text-color-class"><code>text-primary</code></td>
        </tr>
        <tr>
          <th scope="row" id="Secondary">Secondary</th>
          <td headers="secondary background-color"><span class="badge badge-pill py-2 px-4 badge-secondary">bg-secondary</span></td>
          <td headers="secondary background-color-class"><code>bg-secondary</code></td>
          <td headers="secondary text-color"><span class="badge badge-pill py-2 px-4 text-secondary">text-secondary</span></td>
          <td headers="secondary text-color-class"><code>text-secondary</code></td>
        </tr>
        <tr>
          <th scope="row" id="Accent">Accent</th>
          <td headers="accent background-color"><span class="badge badge-pill py-2 px-4 badge-accent">bg-accent</span></td>
          <td headers="accent background-color-class"><code>bg-accent</code></td>
          <td headers="accent text-color"><span class="badge badge-pill py-2 px-4 text-accent">text-accent</span></td>
          <td headers="accent text-color-class"><code>text-accent</code></td>
        </tr>                   
      </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/5.1/customize/color/" target="_blank">Bootstrap Documentation - Color</a>
