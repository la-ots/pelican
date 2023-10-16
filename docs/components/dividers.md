---
title: Dividers
summary: Dividers separate content into clear, meaningful groups.
tags: components, dividers
layout: guide
eleventyNavigation:
  key: Dividers
  parent: Components
  order: 160
  excerpt: Dividers separate content into clear, meaningful groups.
  img: /img/illustrations/illus-divider.svg
---

## Best Practices

- Use Dividers to separate content.
- Use Dividers sparingly and only when separating content helps comprehension.
- Major Dividers create strong separation between content. This could be between Form or content sections.
- Minor Dividers create weak separation between content. This could be between Form or content sections with minor differences.
- If the divider is outside a Content Container, it goes edge-to-edge.
- If the divider is inside a Content Container or card, it stays within the padding of the parent.
- Top borders on [Back and Forward Buttons](/components/back-and-forward-buttons/) go edge-to-edge.
- Borders on Components such as [Large Progress Indicator](/components/progress/) typically go edge-to-edge.
- Add any `my-x` class to change top and bottom margin at the same time.
- Add any `mt-x` class to change top margin.
- Add any `mb-x` class to change bottom margin.

## Usage

**Major Divider**

<hr class="major">

```html
<hr class="major" />
```

**Minor Divider**

<hr class="minor">

```html
<hr class="minor" />
```

## Resources

- [Bootstrap Spacing Utilities](https://getbootstrap.com/docs/5.2/utilities/spacing/)
