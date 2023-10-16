---
title: Skip Link
summary: Skip Links allow users to skip navigation elements and go straight to content.
tags: skip link, accessibility
layout: guide
eleventyNavigation:
  key: Skip Link
  parent: Accessibility
  order: 4
  excerpt: Skip Links allow users to skip navigation elements and go straight to content.
  img: /img/illustrations/illus-skip-link.svg
---

## Best Practice

Users who rely on keyboard navigation need a way to skip past navigation elements if they are already familiar with the page.

- Put the Skip Link markup as a direct child of the `<body>` element.
- It should always be the first element the user can interact with on the page if they press the <kbd>Tab</kbd> key immediately after the page has loaded.

## Usage

```html
{% include 'markup/skip-link.njk' %}
```

## Resources

- [Skip Links: Skip to Main Content by NC State University](https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/skip-to-main-content/)
- [Skip Links: WebAIM Keyboard Accessibility via Tabindex](https://webaim.org/techniques/keyboard/tabindex)
- [WebAIM Skip Navigation Links](https://webaim.org/techniques/skipnav/)
