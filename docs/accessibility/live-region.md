---
title: Live Regions
summary: Visual changes in the page need to be communicated to a screen reader.
tags: accessibility
layout: guide
eleventyNavigation:
  key: Live Regions
  parent: Accessibility
  order: 8
  excerpt: Visual changes in the page need to be communicated to a screen reader.
  img: /img/illustrations/illus-live-region.png
---

## Best Practices

Sighted users can easily detect state changes to a page, such as a list being updated with new items or a javascript-based change of focused element.

- When something in the page changes visually, it should be announced to screen reader users.
- Live Regions should be initially empty.
- Announcements should be meaningful and to the point.
- Content updates which don’t receive focus will need Live Regions
- Use `assertive` politeness level for immediate updates
- Prefer `polite` politeness for updates which can wait
- Live Regions are not visible to sighted users.

## Example

Imagine your application has a table with sortable columns.

1. User presses the column header for “Amount”
1. Column sorts the values by lowest to highest amount
1. Live region’s innerHTML would change to “Table sorted by amount, lowest to highest.”

## Usage

```html
<div id="live-region" aria-live="polite" aria-atomic="true" class="visually-hidden">
    <!-- innerHTML would change -->
</div>
```

## Resources

- [Accessible Notifications with Live Regions by Sara Soueidan](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1)
- [MDN on ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [Havard’s Form Feedbakc with Live Regions](https://accessibility.huit.harvard.edu/technique-form-feedback-live-regions)
- [W3C’s Using ARIA Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)
