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
                <p class="mb-0">Hex Code: <code>#14847f</code></p>
                <p class="mb-0">SCSS Var: <code>$accent</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-4">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-accent rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">Accent</p>
                <p class="mb-0">Hex Code: <code>#fe9903</code></p>
                <p class="mb-0">SCSS Var: <code>$secondary</code></p>
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

The lighter version of Primary, `$primary-10`, is often used as:

- Icon color in the [Page Title](/components/page-title/)
- Background color of [Dividers](/components/dividers/)

**Secondary**

The Secondary color supports the Primary color by adding contrast to the Primary color. The Secondary brand color, `$secondary`, is often used in Pelican as:

- Button background color the alternate  action button in a [Button Container](/components/button-container/)

**Accent**

The Accent color is the smallest supporting color associated with your brand. It’s used as supporting color when either the Primary or Secondary brand need to stand apart from each other but still need a supporting color to them. The Accent brand color, `$accent`, is often used in Pelican as:

- Button background color for the [Back to Top Button](/components/back-to-top-button/)

## Brand Color Variations

Dark and light variants are available for all three Brand colors. Use them to ensure accessibility by providing better contrast in User Interface (UI) elements or as text and background colors.

{% include cards-brand-colors.njk %}

## Brand Color Class List

You’ll change background and text colors by using the following classes. Consult [Agency Themes](/foundation/agency-theming/) for more information.

<div class="table-wrapper">
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
                <th scope="row" id="Primary-10">Primary-10</th>
                <td headers="primary-10 background-color"><span class="badge badge-pill py-2 px-4 bg-primary-10 text-primary">bg-primary-10</span></td>
                <td headers="primary-10 background-color-class"><code>bg-primary-10</code></td>
                <td headers="primary-10 text-color"><span class="badge badge-pill py-2 px-4 text-primary-10">text-primary-10</span></td>
                <td headers="primary-10 text-color-class"><code>text-primary-10</code></td>
            </tr>
            <tr>
                <th scope="row" id="Primary-90">Primary-90</th>
                <td headers="primary-90 background-color"><span class="badge badge-pill py-2 px-4 bg-primary-90">bg-primary-90</span></td>
                <td headers="primary-90 background-color-class"><code>bg-primary-90</code></td>
                <td headers="primary-90 text-color"><span class="badge badge-pill py-2 px-4 text-primary-90">text-primary-90</span></td>
                <td headers="primary-90 text-color-class"><code>text-primary-90</code></td>
            </tr>
            <tr>
                <th scope="row" id="Secondary">Secondary</th>
                <td headers="secondary background-color"><span class="badge badge-pill py-2 px-4 bg-secondary">bg-secondary</span></td>
                <td headers="secondary background-color-class"><code>bg-secondary</code></td>
                <td headers="secondary text-color"><span class="badge badge-pill py-2 px-4 text-secondary">text-secondary</span></td>
                <td headers="secondary text-color-class"><code>text-secondary</code></td>
            </tr>
            <tr>
                <th scope="row" id="Secondary-10">Secondary-10</th>
                <td headers="secondary-10 background-color"><span class="badge badge-pill py-2 px-4 bg-secondary-10 text-secondary">bg-secondary-10</span></td>
                <td headers="secondary-10 background-color-class"><code>bg-secondary-10</code></td>
                <td headers="secondary-10 text-color"><span class="badge badge-pill py-2 px-4 text-secondary-10">text-secondary-10</span></td>
                <td headers="secondary-10 text-color-class"><code>text-secondary-10</code></td>
            </tr>
            <tr>
                <th scope="row" id="Secondary-90">Secondary-90</th>
                <td headers="secondary-90 background-color"><span class="badge badge-pill py-2 px-4 bg-secondary-90">bg-secondary-90</span></td>
                <td headers="secondary-90 background-color-class"><code>bg-secondary-90</code></td>
                <td headers="secondary-90 text-color"><span class="badge badge-pill py-2 px-4 text-secondary-90">text-secondary-90</span></td>
                <td headers="secondary-90 text-color-class"><code>text-secondary-90</code></td>
            </tr>
            <tr>
                <th scope="row" id="Accent">Accent</th>
                <td headers="accent background-color"><span class="badge badge-pill py-2 px-4 bg-accent">bg-accent</span></td>
                <td headers="accent background-color-class"><code>bg-accent</code></td>
                <td headers="accent text-color"><span class="badge badge-pill py-2 px-4 text-accent">text-accent</span></td>
                <td headers="accent text-color-class"><code>text-accent</code></td>
            </tr>
            <tr>
                <th scope="row" id="Accent-10">Accent-10</th>
                <td headers="accent-10 background-color"><span class="badge badge-pill py-2 px-4 bg-accent-10 text-accent-90">bg-accent-10</span></td>
                <td headers="accent-10 background-color-class"><code>bg-accent-10</code></td>
                <td headers="accent-10 text-color"><span class="badge badge-pill py-2 px-4 text-accent-10">text-accent-10</span></td>
                <td headers="accent-10 text-color-class"><code>text-accent-10</code></td>
            </tr>
            <tr>
                <th scope="row" id="Accent-90">Accent-90</th>
                <td headers="accent-90 background-color"><span class="badge badge-pill py-2 px-4 bg-accent-90">bg-accent-90</span></td>
                <td headers="accent-90 background-color-class"><code>bg-accent-90</code></td>
                <td headers="accent-90 text-color"><span class="badge badge-pill py-2 px-4 text-accent-90">text-accent-90</span></td>
                <td headers="accent-90 text-color-class"><code>text-accent-90</code></td>
            </tr>                      
        </tbody>
    </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/5.1/customize/color/" target="_blank">Bootstrap Documentation - Color</a>
