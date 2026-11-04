---
title: Sidebar with Navigation
summary: Contains and organizes all of the navigation for your web app.
tags: components
layout: guide
eleventyNavigation:
  key: Sidebar with Navigation
  parent: Components
  order: 280
  excerpt: Contains and organizes all of the navigation for your web app.
  img: /img/illustrations/illus-sidebar-nav.svg
---

## Best Practice

The first child element of the `id=page-wrapper` is the Sidebar with Navigation. This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed.

- Used in the [App Screen](/components/app-screen/).
- Presents only two levels of navigation.
- Child pages should get the class `active` added to their class list, in both the `li` and `a` which hold the link when they’re being viewed.
- Current child pages also get the eye icon, <span class="icon fas fa-eye" aria-hidden="true"></span> when they’re being viewed. The same icon is used in [Breadcrumbs](/components/breadcrumbs) to indicate the current page.
- Child items will only appear when they’re toggled by the button to the right of their parent link.
- Be sure to match the `aria-controls` of the `<button>` and the id of the child items group
- Be sure to toggle between aria-expanded when the child items are open
- The sidebar footer is empty by default but available for 1 or 2 short links.

## Usage

```html
{% include 'markup/sidebar-nav.njk' %}
```

## Optional Sidebar Search

Use Sidebar Search as an optional child component inside the sidebar. It remains enabled in Pelican’s internal sidebar by default, but product teams can choose whether to include it in their own implementation.

### Add it to your sidebar

```html
<nav id="sidebar" class="sidebar-wrapper" aria-label="Sidebar">
  <div class="sidebar-content">
    <div class="sidebar-brand">
      <a href="#" class="me-auto">Digital Product Name</a>
    </div>
    {% include 'markup/sidebar-search.njk' %}
    <div class="sidebar-menu text-white">
    <!-- navigation items -->
    </div>
  </div>
</nav>
```

### Implementation steps and advice

1. Add the include directly under the sidebar brand and above `.sidebar-menu` for consistent spacing and reading order.
2. Set the form’s `action` to your application’s search endpoint, which must accept the `q` query parameter. This markup submits a native GET form; the distributed Pelican JavaScript does not provide a search endpoint or query synchronization. The `data-site-search` attribute is used only by this documentation site’s `docs/js/default.js` to synchronize inputs on its search results page.
3. If more than one sidebar exists on a page, copy the optional search markup and use a unique id/`for` pair (for example `sidebar-site-search-secondary`) to keep label/input associations valid.

4. Keep component styling in the SCSS/CSS pipeline (for example `scss/_sidebar.scss`); avoid page-level inline styles.
