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

## Best Practice

- Indicate various system statuses, such as error messages or informational dialogs. 
- Don’t use them as the way to communicate statuses.
- They only add visual meaning.

<div class="row" style="margin-bottom: 3rem;">
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-3">
      <div class="bg-success rounded-top" style="padding-top: 5rem; padding-bottom: 5rem;"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Success</p>
        <p class="mb-0"><code>#0d6211</code></p>
        <p class="mb-0"><code>$success</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-3">
      <div class="bg-warning rounded-top" style="padding-top: 5rem; padding-bottom: 5rem;"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Warning</p>
        <p class="mb-0"><code>#ffc107</code></p>
        <p class="mb-0"><code>$warning</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-3">
      <div class="bg-danger rounded-top" style="padding-top: 5rem; padding-bottom: 5rem;"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Danger</p>
        <p class="mb-0"><code>#b00003</code></p>
        <p class="mb-0"><code>$danger</code></p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-xl-3">
    <div class="card border-0 mb-3">
      <div class="bg-info rounded-top" style="padding-top: 5rem; padding-bottom: 5rem;"></div>
      <div class="card-body">
        <p class="mb-0 fw-bold">Info</p>
        <p class="mb-0"><code>#004ba1</code></p>
        <p class="mb-0"><code>$info</code></p>
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

- Often used to display destructive actions from a list if it’s relatively easy to reinsert items in the list.
- Can be used to signal data actions authorized users can affect which could affect non-authorized users.
- Could be used to indicate waiting states in processes or multi-step forms.
- Should be used to inform the user of system-wide errors preventing some, if not all, features.
- Lighter and darker variations used for background and text colors in [Warning Alerts](/components/alerts/).

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

## Status Color Class List

The Status Colors are implemented as background colors and as text colors. The classes needed to apply these colors are listed here.

<div class="table-wrapper">
  <table class="table table-striped" style="margin-bottom: 2rem;">
    <thead>
      <tr>
        <th>Background Colors</th>
        <th>Text Colors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="badge badge-pill py-2 px-3 badge-success">bg-success</span></td>
        <td><span class="badge badge-pill py-2 px-3 bg-transparent text-success">text-success</span></td>
      </tr>
      <tr>
        <td><span class="badge badge-pill py-2 px-3 badge-warning">bg-warning</span></td>
        <td><span class="badge badge-pill py-2 px-3 bg-transparent text-warning">text-warning</span></td>
      </tr>
      <tr>
        <td><span class="badge badge-pill py-2 px-3 badge-danger">bg-danger</span></td>
        <td><span class="badge badge-pill py-2 px-3 bg-transparent text-danger">text-danger</span></td>
      </tr>
      <tr>
        <td><span class="badge badge-pill py-2 px-3 badge-info">bg-info</span></td>
        <td><span class="badge badge-pill py-2 px-3 bg-transparent text-info">text-info</span></td>
      </tr>                 
    </tbody>
  </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/4.5/utilities/colors/" target="_blank">Bootstrap Documentation - Color</a>
