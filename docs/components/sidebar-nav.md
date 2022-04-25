---
title: Sidebar with Navigation
summary: Contains and organizes all of the navigation for your web app.
tags: components
layout: guide
eleventyNavigation:
  key: Sidebar with Navigation
  parent: Components
  order: 270
  excerpt: Contains and organizes all of the navigation for your web app.
  img: /img/illustrations/illus-sidebar-nav.svg
---
  
## Best Practice

The first child element of the `id=page-wrapper` is the Sidebar with Navigation. This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed.

- Used in the [App Screen](/components/app-screen/).
- Presents only two levels of navigation.
- Child pages should get the class `active` added to their class list, in both the `li` and `a` which hold the link when they’re being viewed.
- Current child pages also get the eye icon, <span class="fas fa-eye" aria-hidden="true"></span> when they’re being viewed. The same icon is used in [Breadcrumbs](/components/breadcrumbs) to indicate the current page.
- Child items will only appear when they’re toggled by the button to the right of their parent link.
- The sidebar footer is empty by default but available for 1 or 2 short links

## Usage

``` html
{% include 'markup/sidebar-nav.njk' %}
```
