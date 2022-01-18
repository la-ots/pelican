---
title: Status Colors
summary: Pelican uses Status colors to inform users about what is going on with the system.
tags: color
layout: guide
eleventyNavigation:
  key: Status Colors
  parent: Foundation
  order: 2
  excerpt: Pelican uses Status colors to inform users about what is going on with the system.
  img: /img/illustrations/illus-status-colors.svg
--- 

## Status Colors 

Status colors indicate various system statuses, such as error messages or informational dialogs. 

Status colors should not be the sole way statuses are communicated to users. However, the selected colors are common colors when communicating system conditions.

Status colors only add visual meaning. This is not communicated to users with assistive technologies, such as screen readers. Content must clearly relate to the chosen Status color.

<div class="row">
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-success rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Success</p>
        <p class="mb-0">Hex Code: <code>#0d6211</code></p>
        <p class="mb-0">SCSS Var: <code>$success</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-warning rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Warning</p>
        <p class="mb-0">Hex Code: <code>#ffc107</code></p>
        <p class="mb-0">SCSS Var: <code>$warning</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-danger rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Danger</p>
        <p class="mb-0">Hex Code: <code>#b00003</code></p>
        <p class="mb-0">SCSS Var: <code>$danger</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-info rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Info</p>
        <p class="mb-0">Hex Code: <code>#004ba1</code></p>
        <p class="mb-0">SCSS Var: <code>$info</code></p>
      </div>
    </div>
  </div>
</div>

## Using Status Colors

The guidelines below may not cover all situations and use cases in your digital product. Use them as guides for deciding which color is semantically appropriate. Be careful not to use Status Colors as brand colors or influence colors as this will dilute their meaning.

**Success**

The Success color indicates an action is successful or an event is beneficial.

- Often used in validated form field indications
- Lighter and darker variations used for background and text colors in [Success Alerts](/components/alerts/) and [Success Toasts](/components/toasts/)
- Might be to used to signal a data submission button when all required or validated fields are satisfactory.

_Note: A successful action can include the successful deletion of an item or file._

**Warning**

The Warning color Indicates unintended, but not dangerous, effects of actions.

- Often used to present remove actions from a list if it’s relatively easy to reinsert items in the list
- Can be used to signal data actions authorized users can affect which could affect non-authorized users
- Could be used to indicate waiting states in processes or multi-step forms
- Should be used to inform the user of system-wide errors preventing some, if not all, features
- Lighter and darker variations used for background and text colors in [Warning Alerts](/components/alerts/)

**Danger**

The Danger colors indicates that an action will cause critical effects such as loss of data, errors, or other hard-to-reverse effects.

- Should be used to inform the user of data deletions
- Could be used to inform the user that opting out of certain application features could prohibit future functionality
- Should be used to inform the user of system-wide errors which totally prevent system use
- Lighter and darker variations used for background and text colors in [Danger Alerts](/components/alerts/) and [Danger Toasts](/components/toasts/)

**Info**

The Info color indicates informative or helpful information.

- Could be used to inform the user of new features
- Should be used to inform the user of in-process system-wide changes which will improve their experience
- Lighter and darker variations used for background and text colors in [Info Alerts](/components/alerts/)

## Status Color Variations

**Success Status Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-success rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Success</p>
        <p class="mb-0">Hex Code: <code>#0d6211</code></p>
        <p class="mb-0">SCSS Var: <code>$success</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-success-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Success, Lighter</p>
        <p class="mb-0">Hex Code: <code>#dcf8e2</code></p>
        <p class="mb-0">SCSS Var: <code>$success-10</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-success-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Success, Darker</p>
        <p class="mb-0">Hex Code: <code>#003302</code></p>
        <p class="mb-0">SCSS Var: <code>$success-90</code></p>
      </div>
    </div>
  </div>
</div>

**Warning Status Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-warning rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Warning</p>
        <p class="mb-0">Hex Code: <code>#ffc107</code></p>
        <p class="mb-0">SCSS Var: <code>$warning</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-warning-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Warning, Lighter</p>
        <p class="mb-0">Hex Code: <code>#ffecb3</code></p>
        <p class="mb-0">SCSS Var: <code>$warning-10</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-warning-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Warning, Darker</p>
        <p class="mb-0">Hex Code: <code>#5c3400</code></p>
        <p class="mb-0">SCSS Var: <code>$warning-90</code></p>
      </div>
    </div>
  </div>
</div>

**Danger Status Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-danger rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Danger</p>
        <p class="mb-0">Hex Code: <code>#b00003</code></p>
        <p class="mb-0">SCSS Var: <code>$danger</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-danger-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Danger, Lighter</p>
        <p class="mb-0">Hex Code: <code>#ffe6e8</code></p>
        <p class="mb-0">SCSS Var: <code>$danger-10</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-danger-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Danger, Darker</p>
        <p class="mb-0">Hex Code: <code>#650002</code></p>
        <p class="mb-0">SCSS Var: <code>$danger-90</code></p>
      </div>
    </div>
  </div>
</div>

**Info Status Colors**

<div class="row">
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-info rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Info</p>
        <p class="mb-0">Hex Code: <code>#004ba1</code></p>
        <p class="mb-0">SCSS Var: <code>$info</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-info-10 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Info, Lighter</p>
        <p class="mb-0">Hex Code: <code>#d0e6ff</code></p>
        <p class="mb-0">SCSS Var: <code>$info-10</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-4">
    <div class="card border-0 mb-4">
      <div class="py-20 bg-info-90 rounded-top"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Info, Darker</p>
        <p class="mb-0">Hex Code: <code>#002480</code></p>
        <p class="mb-0">SCSS Var: <code>$info-90</code></p>
      </div>
    </div>
  </div>
</div>

## Status Color Class List

The Status Colors are implemented as background colors and as text colors. The classes needed to apply these colors are listed here.

<div class="table-responsive">
  <table class="table mb-8">
    <thead>
      <tr>
        <th id="Status Color">Status Color</th>
        <th id="background-color">Background Color</th>
        <th id="background-color-class">Background Color Class</th>
        <th id="text-color">Text Color</th>
        <th id="text-color-class">Text Color Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" id="Success">Success</th>
        <td headers="Success background-color"><span class="badge badge-pill py-2 px-4 badge-success">bg-success</span></td>
        <td headers="Success background-color-class"><code>bg-success</code></td>
        <td headers="Success text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-success">text-success</span></td>
        <td headers="Success text-color-class"><code>text-success</code></td>
      </tr>
      <tr>
        <th scope="row" id="Success-10">Success-10</th>
        <td headers="Success-10 background-color"><span class="badge badge-pill py-2 px-4 bg-success-10 text-success">bg-success-10</span></td>
        <td headers="Success-10 background-color-class"><code>bg-success-10</code></td>
        <td headers="Success-10 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-success-10">text-success-10</span></td>
        <td headers="Success-10 text-color-class"><code>text-success-10</code></td>
      </tr>
      <tr>
        <th scope="row" id="Success-90">Success-90</th>
        <td headers="Success-90 background-color"><span class="badge badge-pill py-2 px-4 bg-success-90 ">bg-success-90</span></td>
        <td headers="Success-90 background-color-class"><code>bg-success-90</code></td>
        <td headers="Success-90 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-success-90">text-success-90</span></td>
        <td headers="Success-90 text-color-class"><code>text-success-90</code></td>
      </tr>
      <tr>
        <th scope="row" id="Warning">Warning</th>
        <td headers="Warning background-color"><span class="badge badge-pill py-2 px-4 bg-warning">bg-warning</span></td>
        <td headers="Warning background-color-class"><code>bg-warning</code></td>
        <td headers="Warning text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-warning">text-warning</span></td>
        <td headers="Warning text-color-class"><code>text-warning</code></td>
      </tr>
      <tr>
        <th scope="row" id="Warning-10">Warning-10</th>
        <td headers="Warning-10 background-color"><span class="badge badge-pill py-2 px-4 bg-warning-10 text-warning-90">bg-warning-10</span></td>
        <td headers="Warning-10 background-color-class"><code>bg-warning-10</code></td>
        <td headers="Warning-10 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-warning-10">text-warning-10</span></td>
        <td headers="Warning-10 text-color-class"><code>text-warning-10</code></td>
      </tr>
      <tr>
        <th scope="row" id="Warning-90">Warning-90</th>
        <td headers="Warning-90 background-color"><span class="badge badge-pill py-2 px-4 bg-warning-90 ">bg-warning-90</span></td>
        <td headers="Warning-90 background-color-class"><code>bg-warning-90</code></td>
        <td headers="Warning-90 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-warning-90">text-warning-90</span></td>
        <td headers="Warning-90 text-color-class"><code>text-warning-90</code></td>
      </tr>
      <tr>
        <th scope="row" id="Danger">Danger</th>
        <td headers="Danger background-color"><span class="badge badge-pill py-2 px-4 bg-danger">bg-danger</span></td>
        <td headers="Danger background-color-class"><code>bg-danger</code></td>
        <td headers="Danger text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-danger">text-danger</span></td>
        <td headers="Danger text-color-class"><code>text-danger</code></td>
      </tr>
      <tr>
        <th scope="row" id="Danger-10">Danger-10</th>
        <td headers="Danger-10 background-color"><span class="badge badge-pill py-2 px-4 bg-danger-10 ">bg-danger-10</span></td>
        <td headers="Danger-10 background-color-class"><code>bg-danger-10</code></td>
        <td headers="Danger-10 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-danger-10">text-danger-10</span></td>
        <td headers="Danger-10 text-color-class"><code>text-danger-10</code></td>
      </tr>
      <tr>
        <th scope="row" id="Danger-90">Danger-90</th>
        <td headers="Danger-90 background-color"><span class="badge badge-pill py-2 px-4 bg-danger-90">bg-danger-90</span></td>
        <td headers="Danger-90 background-color-class"><code>bg-danger-90</code></td>
        <td headers="Danger-90 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-danger-90">text-danger-90</span></td>
        <td headers="Danger-90 text-color-class"><code>text-danger-90</code></td>
      </tr>
      <tr>
        <th scope="row" id="Info">Info</th>
        <td headers="Info background-color"><span class="badge badge-pill py-2 px-4 bg-info">bg-info</span></td>
        <td headers="Info background-color-class"><code>bg-info</code></td>
        <td headers="Info text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-info">text-info</span></td>
        <td headers="Info text-color-class"><code>text-info</code></td>
      </tr>
      <tr>
        <th scope="row" id="Info-10">Info-10</th>
        <td headers="Info-10 background-color"><span class="badge badge-pill py-2 px-4 bg-info-10 text-info">bg-info-10</span></td>
        <td headers="Info-10 background-color-class"><code>bg-info-10</code></td>
        <td headers="Info-10 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-info-10">text-info-10</span></td>
        <td headers="Info-10 text-color-class"><code>text-info-10</code></td>
      </tr>
      <tr>
        <th scope="row" id="Info-90">Info-90</th>
        <td headers="Info-90 background-color"><span class="badge badge-pill py-2 px-4 bg-info-90 ">bg-info-90</span></td>
        <td headers="Info-90 background-color-class"><code>bg-info-90</code></td>
        <td headers="Info-90 text-color"><span class="badge badge-pill py-2 px-4 bg-transparent text-info-90">text-info-90</span></td>
        <td headers="Info-90 text-color-class"><code>text-info-90</code></td>
      </tr>                                 
    </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/5.1/customize/color/" target="_blank">Bootstrap Documentation - Color</a>
