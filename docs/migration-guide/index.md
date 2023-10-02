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
  - Class names on child elements
  - Inclusion of badges as an option
  - CSS to create the Page Title
  - Smaller default padding
- [Pagination](/components/pagination/)
  - Class names on child elements
  - Attributes related to accessibility
- [Popovers &amp; Tooltips](/components/popovers-tooltips/)
  - Name spacing on attributes for JavaScript targets is different
- [Progress Indicator, Large](/components/progress/)
  - CSS to create the Progress Indicator, Large
- [Sidebar](/components/app-screen/) (part of App Screen)
  - Class names on child elements
- [Share Social](/components/share-and-social/)
  - Class names on child elements
  - Attributes related to accessibility
- [Tabbed Content](/components/tabbed-content/)
  - Promotion of common tab style to top of documentation
  - Name spacing on attributes for JavaScript targets is different
  - Attributes related to accessibility
- [Toasts](/components/toasts/)
  - Class names on child elements
- [Topbar](/components/app-screen/) (part of App Screen)
  - Class names on child elements

### Form Controls with markup or CSS changes

- [Form Section Header](/form-controls/form-section-header/)
  - Class names on child elements
  - Inclusion of required fields statement
- [Inputs](/form-controls/inputs/)
  - Class names on child elements
- [Checkboxes](/form-controls/checkboxes/)
  - Class names on child elements
- [Radios](/form-controls/radios/)
  - Class names on child elements
- [Selects](/form-controls/select/)
  - Class names on child elements
- [Switches](/form-controls/switches/)
  - Class names on child elements
  - Attributes related to accessibility

### Form Templates with markup or CSS changes

- [Address Form](/form-templates/address/)
  - Class names on child elements
- [Change Password](/form-templates/change-password/)
  - Class names on child elements
  - Replacement of javascript collapse with native HTML Details and Summary
- [Contact Information](/form-templates/contact-information/)
  - Class names on child elements
- [Create User ID &amp; Password](/form-templates/create-user-id-and-password/)
  - Class names on child elements
  - Replacement of javascript collapse with native HTML Details and Summary
- [Name](/form-templates/name/)
  - Class names on child elements
- [Sign In](/form-templates/sign-in/)
  - Class names on child elements

### Hero Blocks with markup or CSS changes

- [Dual Pane](/hero-blocks/dual-pane/)
  - Class names on child elements
  - CSS to create the Hero Block
- [Hero Single Pane](/hero-blocks/single-pane/)
  - Class names on child elements
  - CSS to create the Hero Block
- [Text over Color-toned Photo](/hero-blocks/text-over-color-toned-photo/)
  - Class names on child elements
  - CSS to create the Hero Block

### Page Templates with new markup

- [404 Page](/page-templates/404-page/), public and internal
  - class names on child elements
- [Error Page](/page-templates/error-page/), public and internal
  - class names on child elements
- [Landing Page](/page-templates/landing-page/)
  - class names on child elements
