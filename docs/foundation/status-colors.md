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

Status colors should not be the sole way statuses are communicated to users. However, the selected colors are common colors when communicating system conditions. Status colors only add visual meaning. This is not communicated to users with assistive technologies, such as screen readers. Write your content to clearly communicate along with the chosen Status color.

By default, Status Colors in Pelican don’t change when light or dark themes are toggled.

<div class="row mb-12">
    <div class="col-md-6 col-xl-3">
        <div class="card border-0">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-success);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">Success</p>
                <p class="mb-0"><code>#0d6211</code></p>
                <p class="mb-0"><code>--theme-success</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-warning);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">Warning</p>
                <p class="mb-0"><code>#ffc107</code></p>
                <p class="mb-0"><code>--theme-warning</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-danger);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">Danger</p>
                <p class="mb-0"><code>#b00003</code></p>
                <p class="mb-0"><code>--theme-danger</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0">
            <div class="rounded-top pd-color-block" style="background-color: var(--theme-info);"></div>
            <div class="card-body">
                <p class="mb-0 fw-bold">Info</p>
                <p class="mb-0"><code>#004ba1</code></p>
                <p class="mb-0"><code>--theme-info</code></p>
            </div>
        </div>
    </div>
</div>

## Using Status Colors

The guidelines below may not cover all situations and use cases in your digital product. Use them as guides for deciding which color is semantically appropriate. Be careful not to use Status Colors as brand colors as this will dilute their meaning.

### Success

The Success color indicates an action is successful or an event is beneficial.

- Often used in validated form field indications
- Lighter and darker variations used for background and text colors in [Success Alerts](/components/alerts/) and [Success Toasts](/components/toasts/)
- Might be to used to signal a data submission button when all required or validated fields are satisfactory.

_Note: A successful action can include the successful deletion of an item or file._

### Warning

The Warning color indicates unintended, but not dangerous, effects of actions.

- Often used to display destructive actions from a list if it’s relatively easy to reinsert items in the list.
- Can be used to signal data actions authorized users can affect which could affect non-authorized users.
- Could be used to indicate waiting states in processes or multi-step forms.
- Should be used to inform the user of system-wide errors preventing some, if not all, features.
- Lighter and darker variations used for background and text colors in [Warning Alerts](/components/alerts/).

### Danger

The Danger colors indicates that an action will cause critical effects such as loss of data, errors, or other hard-to-reverse effects.

- Should be used to inform the user of data deletions
- Could be used to inform the user that opting out of certain application features could prohibit future functionality
- Should be used to inform the user of system-wide errors which totally prevent system use
- Lighter and darker variations used for background and text colors in [Danger Alerts](/components/alerts/) and [Danger Toasts](/components/toasts/)

### Info

The Info color indicates informative or helpful information.

- Could be used to inform the user of new features
- Should be used to inform the user of in-process system-wide changes which will improve their experience
- Lighter and darker variations used for background and text colors in [Info Alerts](/components/alerts/)

{% include 'color-variation-message.njk' %}

## Resources

- [Bootstrap Documentation - Color](https://getbootstrap.com/docs/5.3/utilities/colors/)
