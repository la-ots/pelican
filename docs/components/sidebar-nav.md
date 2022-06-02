---
title: Sidebar with Navigation
summary: Contains and organizes all of the navigation for your web app.
tags: components
layout: page-guide
eleventyNavigation:
  key: Sidebar with Navigation
  parent: Components
  order: 270
  excerpt: Contains and organizes all of the navigation for your web app.
  img: /img/illustrations/illus-sidebar-nav.svg
---

## Best Practice

The first child element of the `id=site-container` is the Sidebar with Navigation. This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed.

- Used in the [App Screen](/components/app-screen/).
- Presents only two levels of navigation.
- Current pages should get the class `active` added to the class list of the `li` and `a` which hold the link.
- Current child pages also get the eye icon (<span class="fas fa-eye" aria-hidden="true"></span>). The same icon is used in [Breadcrumbs](/components/breadcrumbs) to indicate the current page.

## Usage

``` html
{% include 'markup/components/sidebar-nav.njk' %}
```
