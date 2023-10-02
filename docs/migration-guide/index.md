---
title: Migration Guide
summary: Differences between Pelican 1 and Pelican 2.
tags: resources
layout: guide
index: true
eleventyNavigation:
  key: Migration Guide
  title: Migration Guide
  order: 3
---

## Migration Guide

Upgrading to Pelican 2 requires a few steps. Here’s what you’ll have to do:

1. Swap Pelican 1 CSS with Pelican 2 CSS.
2. Update your markup from Pelican 1 markup to Pelican 2 markup.
3. Update the javascript.

## Markup Changes

The move from Bootstrap 4 in Pelican 1 to Bootstrap 5 in Pelican 2 does require some markup changes in a few things.  These changes could be different markup or different `class` values on old markup. Here’s lists of items which have new markup. You’ll need to compare your markup from Pelican 1 to markup for Pelican 2 for the following items.

### Components with markup or CSS changes
 
These lists give a little more information on what’s different between Pelican 1 (Bootstrap 4.6) and Pelican 2 (Bootstrap 5.3).

- [Alerts](/components/alerts/)
  - Class name on dismissal buttons is different
  - Name spacing on attributes for JavaScript targets is different
- [App Screen](/components/app-screen/)
  - Class names on child elements
- [Badges](/components/badges/)
  - Inclusion of icons
  - CSS to create the Badges
- [Button Container](/components/button-container/)
  - Class names on child elements
  - CSS to create the Button Container
- [Previous and Next Page Buttons](/components/buttons-previous-next-page/)
  - Class names on child elements
  - Inclusion of ARIA label to communicate purpose
- [Back to Top Button](/components/back-to-top-button/)
  - Class name on child elements
- [Add Data Button](/components/add-data-button/)
  - Class names on child elements
  - Removal of problematic markup for Voicecontrol Users
- [Page Actions Button](/components/page-actions-button/)
  - Class names on child elements
- [Chips](/components/chip/)
  - Class names on child elements
  - CSS to create the Chips
- [Footer, Utility Footer](/components/footer/)
  - Class names on child elements
- [Modals](/components/modal/)
  - Name spacing on attributes for JavaScript targets is different
- [Navbars](/components/navbar/)
  - Name spacing on attributes for JavaScript targets is different
- [Official Banner](/components/official-banner/)
  - Inclusion of ARIA label
  - Class names on child elements
  - Inclusion of attributes to help accessibility
- [Page Title](/components/page-title/)
  - Class name son child elements
  - Inclusion of badges as an option
  - CSS to create the Page Title
  - Smaller default padding
- [Pagination](/components/pagination/)
- [Popovers &amp; Tooltips](/components/popovers-tooltips/)
- [Progress Indicator, Large](/components/progress/)
- [Sidebar](/components/app-screen/) (part of App Screen)
- [Share Social](/components/share-and-social/)
- [Tabbed Content](/components/tabbed-content/)
- [Toasts](/components/toasts/)
- [Topbar](/components/app-screen/) (part of App Screen)

### Form Controls with new markup

- [Form Section Header](/form-controls/form-section-header/)
- [Inputs](/form-controls/inputs/)
- [Checkboxes](/form-controls/checkboxes/)
- [Date Pickers](/form-controls/inputs/)
- [Radios](/form-controls/radios/)
- [Selects](/form-controls/select/)
- [Switches](/form-controls/switches/)
- [File Uploads](/form-controls/inputs/)

### Form Templates with new markup

- [Address Form](/form-templates/address/)
- [Change Password](/form-templates/change-password/)
- [Contact Information](/form-templates/contact-information/)
- [Create User ID &amp; Password](/form-templates/create-user-id-and-password/)
- [Name](/form-templates/name/)
- [Sign In](/form-templates/sign-in/)

### Hero Blocks with new markup

- [Dual Pane](/hero-blocks/dual-pane/)
- [Hero Single Pane](/hero-blocks/single-pane/)
- [Text over Color-toned Photo](/hero-blocks/text-over-color-toned-photo/)

### Page Templates with new markup

- [404 Page](/page-templates/404-page/), public and internal
- [Error Page](/page-templates/error-page/), public and internal
- [Landing Page](/page-templates/landing-page/)
