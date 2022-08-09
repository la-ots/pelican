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

Pelican provides more clarity in the user interface by using a color for UI elements. This color is used on Form Controls, priority interface actions, and supporting interface elements. 

<div class="row mb-5">
  <div class="col-md-4">
    <div class="card border-0">
      <div class="bg-ui rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI</p>
        <p class="mb-0">Hex Code: <code>#6c757d</code></p>
        <p class="mb-0">SCSS Var: <code>$ui</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card border-0">
      <div class="bg-ui-light rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI Light</p>
        <p class="mb-0">Hex Code: <code>#ebeeef</code></p>
        <p class="mb-0">SCSS Var: <code>$gray-100</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card border-0">
      <div class="bg-ui-priority rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI Priority</p>
        <p class="mb-0">Hex Code: <code>#004ba1</code></p>
        <p class="mb-0">SCSS Var: <code>$info-900</code></p>
      </div>
    </div>
  </div>
</div>

Like [Brand Colors](/foundation/status-colors) and [Status Colors](/foundation/status-colors), this can be changed. Change with great care as this has been chosen in accordance with usability and [Color Contrast](/accessibility/color-contrast/) guidelines.

## Using UI Colors

**UI**

The UI color is often used as:

- Border colors on [Form Controls](/form-controls/).
- Auxiliary choice buttons among several buttons in a row when Brand or Status themed buttons must also appear.
- The smaller buttons immediately adjacent to user interface elements.

## UI Color Class List

The UI Colors are implemented as background colors and as text colors. The classes needed to apply these colors are listed here.

<div class="table-wrapper">
  <table class="table table-striped mb-5">
    <thead>
      <tr>
        <th scope="col" id="color-class">Color Class</th>
        <th scope="col" id="bg-color-class">Background Color Class</th>
        <th scope="col" id="text-color-class">Text Color Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" id="ui">UI</th>
        <td scope="" headers="bg-color-class ui">
          <span class="h5"><span class="badge badge-ui">bg-ui</span></span>
        </td>
        <td scope="" headers="text-color-class ui">
          <span class="h5"><span class="badge bg-transparent text-ui">text-ui</span></span>
        </td>
      </tr> 
      <tr>
        <th scope="row" id="ui-light">UI Light</th>
        <td scope="" headers="bg-color-class ui-light">
          <span class="h5"><span class="badge badge-ui-light">bg-ui-light</span></span>
        </td>
        <td scope="" headers="text-color-class ui-light">
          <span class="h5"><span class="badge bg-transparent text-ui-light">text-ui-light</span></span>
        </td>
      </tr> 
      <tr>
        <th scope="row" id="ui-priority">UI Priority</th>
        <td scope="" headers="bg-color-class ui-priority">
          <span class="h5"><span class="badge badge-ui-priority">bg-ui-priority</span></span>
        </td>
        <td scope="" headers="text-color-class ui-priority">
          <span class="h5"><span class="badge bg-transparent text-ui-priority">text-ui-priority</span></span>
        </td>
      </tr>                             
    </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank">Bootstrap Documentation - Color</a>
