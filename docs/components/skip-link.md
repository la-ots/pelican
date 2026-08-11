---
title: Skip Link
summary: Skip Links allow users to skip navigation elements and go straight to content.
tags: components
layout: guide
eleventyNavigation:
  key: Skip Link
  parent: Components
  order: 290
  excerpt: Skip Links allow users to skip navigation elements and go straight to content.
  img: /img/illustrations/illus-skip-link.svg
---

## Best Practice

Users who rely on keyboard navigation need a way to skip past navigation elements if they are already familiar with the page.

- Put the Skip Link markup as the first direct child of the `<body>` element.
- Its `href` should be set to the `id` of the main content of the page. This is often the `<main id="main">` element.
- It should always be the first element the user can interact with on the page when they press the <kbd>Tab</kbd> key immediately after the page has loaded.

## Usage

```html
{% include 'markup/skip-link.njk' %}
```

## Resources

- [Skip Links: Skip to Main Content by NC State University](https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/skip-to-main-content/)
- [Skip Links: WebAIM Keyboard Accessibility via Tabindex](https://webaim.org/techniques/keyboard/tabindex)
- [WebAIM Skip Navigation Links](https://webaim.org/techniques/skipnav/)
