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

Brand colors are the colors featured in an agency’s logo and other aspects of its visual identity. Pelican provides three default brand colors. 

<div class="row mb-12">
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-primary rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">Primary</p>
                <p class="mb-0"><code>#00284d</code></p>
                <p class="mb-0"><code>$primary</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-secondary rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">Secondary</p>
                <p class="mb-0"><code>#fe9903</code></p>
                <p class="mb-0"><code>$secondary</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-accent rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">Accent</p>
                <p class="mb-0"><code>#008282</code></p>
                <p class="mb-0"><code>$accent</code></p>
            </div>
        </div>
    </div>
</div>

## Using Brand Colors

Some of the uses of each Brand Color are presented in these lists, but not limited to these items. If your digital product requires changing these colors, see [Agency Themes](/foundation/agency-theming/) for more information.

**Primary**

The Primary color is the color most recognized and associated with your brand. In Pelican, the Primary brand color, `$primary`, is often used for the items below:

- Text color for [Page Title](/components/page-title/)
- Background color for [left sidebar](/components/app-screen/)
- Button background color for the main completion button in a [Button Bar]()

The lighter version of Primary, `$primary-10`, is often used as:

- Icon color in the [Page Title](/components/page-title/)
- Background color of [Dividers](/components/dividers/)

**Secondary**

The Secondary color supports the Primary color. It adds contrast to the Primary color. The Secondary brand color, `$secondary`, is often used in Pelican as:

- Overlay background color for some [Hero Blocks](/hero-blocks/)
- Background color for some [Feature Blocks](/feature-blocks/)
- Button background color for a single, alternate completion button in a [Button Bar]()

**Accent**

The Accent color is the smallest supporting color associated with your brand. It’s used as supporting color when either the Primary or Secondary brand need to stand apart from eahc other but still need a supporting color to them. The Accent brand color, `$accent`, is often used in Pelican as:

- Button background color for the [Back to Top Button](/components/back-to-top-button/)
- Overlay background color for some [Hero Blocks](/hero-blocks/)

## Brand Color Variations

Dark and light variants are available for all three Brand colors. Use them to ensure accessibility by providing better contrast in User Interface (UI) elements or as text and background colors.

{% include 'cards-brand-colors.njk' %}

## Brand Color Class List

You’ll change background and text colors by using the following classes. Consult [Agency Themes](/foundation/agency-theming/) for more information.

<div class="table-wrapper">
    <table class="table table-light mb-8">
        <thead>
            <tr>
                <th>Background Colors</th>
                <th>Text Colors</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-primary">bg-primary</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-primary">text-primary</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-primary-10">bg-primary-10</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-primary-10">text-primary-10</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-primary-90">bg-primary-90</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-primary-90">text-primary-90</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-secondary">bg-secondary</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-secondary">text-secondary</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-secondary-10">bg-secondary-10</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-secondary-10">text-secondary-10</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-secondary-90">bg-secondary-90</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-secondary-90">text-secondary-90</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-accent">bg-accent</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-accent">text-accent</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-accent-10">bg-accent-10</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-accent-10">text-accent-10</span></td>
            </tr>
            <tr>
                <td><span class="badge badge-pill py-2 px-4 badge-accent-90">bg-accent-90</span></td>
                <td><span class="badge badge-pill py-2 px-4 text-accent-90">text-accent-90</span></td>
            </tr>                      
        </tbody>
    </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/4.5/utilities/colors/" target="_blank">Bootstrap Documentation - Color</a>
