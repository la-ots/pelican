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

Pelican provides more clarity for the user interface with two additional colors. They are called UI and UI Light. These are used on form controls, priority interface actions, and supporting interface elements. 

<div class="row mb-12">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-ui rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI</p>
        <p class="mb-0">Hex Code: <code>#6c757d</code></p>
        <p class="mb-0">SCSS Var: <code>$ui</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-ui-light rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI Light</p>
        <p class="mb-0">Hex Code: <code>#dee2e6</code></p>
        <p class="mb-0">SCSS Var: <code>$ui-light</code></p>
      </div>
    </div>
  </div>
</div>

Like [Brand Colors](/foundation/status-colors) and [Status colors](/foundation/status-colors), these can be changed. Change with great care as they have been chosen in accordance with usability and color contrast guidelines.

## Using UI Colors

**UI**

The UI color is often used as:

- Border colors on [Form Controls](/form-controls/)
- Auxiliary choice buttons among several buttons in a row when Brand or Status themed buttons must also appear
- The smaller buttons immediately adjacent to user interface elements

**UI Light**

The UI Light color is often used as:

- The disabled color for [Form Controls](/form-controls/)
- The background color to UI color uses

## UI Color Class List

The UI Colors are implemented as background colors and as text colors. The classes needed to apply these colors are listed here.

<div class="table-responsive">
  <table class="table mb-8">
    <thead>
      <tr>
        <th id="color-name">Color Name</th>
        <th id="background-color">Background Color</th>
        <th id="background-color">Background Color Class</th>
        <th id="text-color">Text Color</th>
        <th id="text-color-class">Text Color Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="ui">UI</th>
        <td headers="ui background-color"><span class="badge badge-pill py-2 px-4 bg-ui">bg-ui</span></td>
        <td headers="ui background-color-class"><code>bg-ui</code></td>
        <td headers="ui text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-ui">text-ui</span></td>
        <td headers="ui text-color-class"><code>text-ui</code></td>
      </tr> 
      <tr>
        <th id="ui-light">UI Light</th>
        <td headers="ui-light background-color"><span class="badge badge-pill py-2 px-4 bg-ui-light text-ui">bg-ui-light</span></td>
        <td headers="ui-light background-color-class"><code>bg-ui-light</code></td>
        <td headers="ui-light text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-ui-light">text-ui-light</span></td>
        <td headers="ui-light text-color-class"><code>text-ui-light</code></td>
      </tr>                                 
    </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/5.1/customize/color/" target="_blank">Bootstrap Documentation - Color</a>
