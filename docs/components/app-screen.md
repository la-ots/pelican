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

The first child element of the `id=page-wrapper` is the [Sidebar with Navigation](/components/sidebar-nav/). This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed.

- Used in the App Screen.
- Presents only two levels of navigation.
- Child pages should get the class `active` added to their class list, in both the `li` and `a` which hold the link when they’re being viewed.
- Current child pages also get the eye icon, <span class="fas fa-eye" aria-hidden="true"></span> when they’re being viewed. The same icon is used in [Breadcrumbs](/components/breadcrumbs) to indicate the current page.
- Child items will only appear when they’re toggled by the button to the right of their parent link.
- The sidebar footer is empty by default but available for 1 or 2 short links

```html
{% include 'markup/sidebar-nav.njk' %}
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
  <a id="sidebar-button" class="btn btn-sm btn-black sidebar-button" href="javascript://" role="button">
    <span class="fas fa-fw fa-bars" aria-hidden="true"></span>
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
