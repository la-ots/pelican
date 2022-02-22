---
title: App Screen
summary: The App Screen is the container for your digital product. 
tags: basic view, sidenav, topbar
layout: guide
eleventyNavigation:
  key: App Screen
  parent: Components
  order: 20
  excerpt: The App Screen is the container for your digital product. 
  img: /img/illustrations/illus-app-screen.svg
---

## Best Practice

For projects requiring a sidebar navigation the App Screen provides the basic user interface frame. It contains 5 parts. The bottom of this page will display the markup pattern after the 5 parts have been explained.

1. Page Wrapper, `id=page-wrapper`
1. Sidebar with Navigation, `id=sidebar`
1. Main Wrapper, `id=wrapper-main`
1. Topbar, `id=wrapper-topbar`
1. Main Content, `id=main`

## Usage

Everything considered part of the App Screen is placed into the `id=page-wrapper`. This is out the outermost `div`. The Skip Link goes above it in markup. The Back to Top button goes below it in markup.

```html
{% include 'markup/skip-link.njk' %}
<div id="page-wrapper" class="page-wrapper agency-theme">
  ...
</div>
{% include 'markup/button-back-to-top.njk' %}
```

## Sidebar with Navigation

The first child element to the `id=page-wrapper` is the Sidebar with Navigation. This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed. 

```html
<nav id="sidebar" class="sidebar-wrapper d-print-none">
  <div class="sidebar-content">
    <div class="sidebar-brand">
      <a href="javascript://" class="mr-auto">Digital Product Name</a>
    </div>
    <div class="sidebar-menu text-white">
      <ul>
        <!-- this is a Top Level navi item without a child menu -->
        <li class="sidebar-item border-top border-black">
          <div class="sidebar-dropdown-header">
            <a class="sidebar-nav-item " href="#">
              <span>Top Level Nav Item</span>
            </a>
          </div>
        </li>
        <!-- this is a Top Level navi item with a child menu -->
        <li class="sidebar-item">
          <div class="sidebar-dropdown-header">
            <a class="sidebar-nav-item" href="#">
              <span>Top Level Nav Item</span>
            </a>
            <a class="sidebar-dropdown-header-expand" href="javascript://" role="button">
              <span class="fas fa-fw fa-angle-right" aria-hidden="true"></span>
            </a>
          </div>
          <div class="sidebar-submenu">
            <ul>
              <li class="sidebar-item active">
                <a class="sidebar-nav-item active" href="#">
                  <span class="fas fa-fw fa-eye" aria-hidden="true"></span>
                  <span>Child Level Nav Item</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-footer">
  </div>
</nav>
```

## Wrapper Main and Page Content

After the `nav` is the `class="wrapper-main"` and `class="page-content"`.

```html
<div id="wrapper-main" class="wrapper-main">
  <div class="page-content">
    ...
  </div>
</div>
```

## Topbar

The Topbar goes inside of the `class="page-content"`. The Topbar contains a hamburger button to show and hide the Sidebar with Navigation and the current page title.

```html
<!-- topbar -->
<div id="wrapper-topbar" class="wrapper-topbar bg-black text-white">
  <p class="m-0 font-weight-bold order-lg-2 mr-auto">
    <span class="d-md-none">Digital Product Name</span>
    <span class="d-none d-md-inline">Current Page Title</span>
  </p>
  <a id="sidebar-button" class="btn btn-sm btn-black mr-2 text-white order-lg-1" href="javascript://" role="button">
    <span class="fas fa-fw fa-bars"></span>
  </a>
</div>
<!-- / topbar -->
```

## Using Main Content

This `main` element is where the screen’s contents and user interface items are placed. This is also the target for the [Skip Link](/accessibility/skip-link/).

```html
<main id="main" class="main" role="main">
  ... 
</main>
```

## Putting It All Together

The App Screen markup below is how all the 5 parts are assembled.

```html
{% include 'markup/app-screen.njk' %}
```
