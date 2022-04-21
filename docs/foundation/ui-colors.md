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

Pelican attempts to provide more clarity in the user interface by introducing three colors called UI, UI Light, and UI Priority. These are used on form controls, priority interface actions, and supporting interface elements. 

<div class="row mb-12">
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-ui rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">UI</p>
                <p class="mb-0"><code>#6c757d</code></p>
                <p class="mb-0"><code>$ui</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-ui-light rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">UI Light</p>
                <p class="mb-0"><code>#dee2e6</code></p>
                <p class="mb-0"><code>$ui-light</code></p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card border-0 mb-4">
            <div class="py-20 bg-ui-priority rounded-top"></div>
            <div class="card-body">
                <p class="mb-0 font-weight-bold">UI Priority</p>
                <p class="mb-0"><code>#185ae3</code></p>
                <p class="mb-0"><code>$ui-priority</code></p>
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

**UI Priority**

The UI Priority color is taken from calls to action and link colors around the web. It’s often used as:

- Activated [Form Controls](/form-controls/)
- Buttons which need to [appear more prominently than other UI buttons](/foundation/ui-colors/#ui-vs-ui-blue)
- [Links in text](/accessibility/about-accessibility/)

## UI vs UI Priority

Deciding between the use of UI and UI Priority depends on the use case. As an example, consider the user interface below. 

Each item in each list has a button which takes the user to more information about that item. The [UI Priority themed buttons](/components/buttons/#ui-priority-button) are used for the more important, higher visual priority items. The UI themed buttons are used for the lesser importance items.

<div class="px-4 mb-12">
    <div class="row">
        <div class="col-lg-6">
            <ul class="list-group">
                <li class="list-group-item d-flex align-items-center">New Item
                    <button type="button" class="btn btn-sm btn-ui-priority ml-auto">View Now</button>
                </li>
                <li class="list-group-item d-flex align-items-center">New Item
                    <button type="button" class="btn btn-sm btn-ui-priority ml-auto">View Now</button>
                </li>
                <li class="list-group-item d-flex align-items-center">New Item
                    <button type="button" class="btn btn-sm btn-ui-priority ml-auto">View Now</button>
                </li>
            </ul>
        </div>
        <div class="col-lg-6">
            <ul class="list-group">
                <li class="list-group-item d-flex align-items-center">Historical Item
                    <button type="button" class="btn btn-sm btn-ui ml-auto">More Info</button>
                </li>
                <li class="list-group-item d-flex align-items-center">Historical Item
                    <button type="button" class="btn btn-sm btn-ui ml-auto">More Info</button>
                </li>
                <li class="list-group-item d-flex align-items-center">Historical Item
                    <button type="button" class="btn btn-sm btn-ui ml-auto">More Info</button>
                </li>
            </ul>
        </div>
    </div>
</div>

For more example and context guidance, read [Consider the Priority](/components/buttons/#consider-the-priority) on the UI Buttons page.

## UI Color Class List

The UI Colors are implemented as background colors and as text colors. The classes needed to apply these colors are listed here.

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
                <td><span class="badge badge-pill py-2 px-3 badge-ui">bg-ui</span></td>
                <td><span class="badge badge-pill py-2 px-3 bg-transparent text-ui">text-ui</span></td>
            </tr> 
            <tr>
                <td><span class="badge badge-pill py-2 px-3 badge-ui-light">bg-ui-light</span></td>
                <td><span class="badge badge-pill py-2 px-3 bg-transparent text-ui-light">text-ui-light</span></td>
            </tr> 
            <tr>
                <td><span class="badge badge-pill py-2 px-3 badge-ui-priority">bg-ui-priority</span></td>
                <td><span class="badge badge-pill py-2 px-3 bg-transparent text-ui-priority">text-ui-priority</span></td>
            </tr>                                
        </tbody>
    </table>
</div>

## Resources

* <a href="https://getbootstrap.com/docs/4.5/utilities/colors/" target="_blank">Bootstrap Documentation - Color</a>
