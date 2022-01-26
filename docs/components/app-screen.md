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

## Usage Guidance

App Screen provides the basic user interface frame for all products developed using Pelican. It contains:
* Sidebar
* Topbar
* Main content area. 

The App Screen is composed of 5 parts. The bottom of this page will display the markup pattern after the 5 parts have been explained.

1. Page Wrapper, `id=page-wrapper`
1. Sidebar with Navigation, `id=sidebar`
1. Main Wrapper, `id=wrapper-main`
1. Topbar, `id=wrapper-topbar`
1. Main Content, `id=main`

## Using Page Wrapper

Everything considered part of the App Screen is placed into this element. This is out the outermost `div`. The Skip Link goes above it in markup. The Back to Top button goes below it in markup.

```html
{% include 'markup/skip-link-markup.njk' %}
<div id="page-wrapper" class="page-wrapper agency-theme">
    ...
</div>
{% include 'markup/button-back-to-top.njk' %}
```

## Sidebar with Navigation

The first child element is the Sidebar with Navigation. This is the `nav`. For small devices like smartphones, it makes responsive adjustments.

```html
<nav id="sidebar" class="sidebar-wrapper d-print-none">
    <div class="sidebar-content">
        <div class="sidebar-brand">
            <a href="javascript://" class="mr-auto">Digital Product Name</a>
        </div>
        <div class="sidebar-menu text-white">
            <ul>
                <li class="sidebar-item border-top border-black">
                    <div class="sidebar-dropdown-header">
                        <a class="sidebar-nav-item " href="#">
                            <span>Top Level Nav Item</span>
                        </a>
                    </div>
                </li>
                <li class="sidebar-item">
                    <div class="sidebar-dropdown-header">
                        <a class="sidebar-nav-item" href="#">
                            <span>Top Level Nav Item</span>
                        </a>
                        <a class="sidebar-dropdown-header-expand" href="javascript://" role="button">
                            <span class="fas fa-fw fa-angle-right"></span>
                        </a>
                    </div>
                    <div class="sidebar-submenu">
                        <ul>
                            <li class="sidebar-item active">
                                <a class="sidebar-nav-item active" href="#">
                                    <span class="fas fa-fw fa-eye"></span>
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

Add Top Level and Child Level items as needed. Further guidance follows:

- Child Level items have a circle icon, <span class="fas fa-circle"></span>, to indicate their membership under the Top Level nav item.
- Current pages get the class `active` added to the classlist of the `li` and `a` which hold the link.
- Current pages substitute the eye icon, <span class="fas fa-eye"></span>, for the circle icon. The same icon is used in the [Breadcrumbs](/components/breadcrumbs) to indicate the current page.

## Main Wrapper

Following the `nav` is the Main Wrapper. This `div` contains another `div` for the page content which holds the remaining items in this list of 5 parts.

```html
<div id="wrapper-main" class="wrapper-main">
    <div class="page-content">
        ...
    </div>
</div>
```

## Topbar

The Topbar goes inside of the `page-content` of the `wrapper-main`. It contains a hamburger button to show and hide the Sidebar with Navigation and the current page title. This `div` is the Topbar and its contents. It also contains responsive elements for small devices like smartphones.

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

This `main` is where the screen’s contents and user interface items are placed. This is also the target for the [Skip Link](/accessibility/skip-link/).

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



