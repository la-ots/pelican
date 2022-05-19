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

Pelican provides more clarity in the user interface by using a color for UI elements. This color is used on form controls, priority interface actions, and supporting interface elements. 

<div class="row mb-5">
  <div class="col-md-6 col-xl-3">
    <div class="card border-0">
      <div class="bg-ui rounded-top pd-color-block"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">UI</p>
        <p class="mb-0">Hex Code: <code>#6c757d</code></p>
        <p class="mb-0">SCSS Var: <code>$ui</code></p>
      </div>
    </div>
  </div>
</div>

Like [Brand Colors](/foundation/status-colors) and [Status colors](/foundation/status-colors), this can be changed. Change with great care as this have been chosen in accordance with usability and color contrast guidelines.

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
        <th>Background Colors</th>
        <th>Text Colors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="h5"><span class="badge badge-ui">bg-ui</span></span></td>
        <td><span class="h5"><span class="badge bg-transparent text-ui">text-ui</span></span></td>
      </tr>                             
    </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/4.5/utilities/colors/" target="_blank">Bootstrap Documentation - Color</a>
