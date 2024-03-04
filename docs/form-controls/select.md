---
title: Select
summary: Select allows the user to select an option from a group of similar options.
tags: forms
layout: guide
eleventyNavigation:
  key: Select
  parent: Form Controls
  order: 9
  excerpt: Select allows the user to select an option from a group of similar options.
  img: /img/illustrations/illus-select.png
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Forms work best when users can see all of their choices. When possible, try to refrain from using Selects.
- If space is not limited, use [Radios](/form-controls/radios) or [Toggle Tokens](/form-controls/toggle-tokens) instead.
- If users can choose more than one option at a time, use [Checkboxes](/form-controls/checkboxes).
- If you need to include more than 15 possible options, use [Radios](/form-controls/radios) instead.
- Do not use this for navigation.
- Use the first `option` to help inform the user of what they should do.
- It’s not the same thing as the [Dropdown Button](/components/buttons/#dropdown-buttons). It’s often called a “dropdown” but we should avoid this term as it may be confusing.
- Use this as the last resort ui element.

## Usage

{% include 'markup/select.njk' %}

```html
{% include 'markup/select.njk' %}
```

## Resources

- [Digital.gov - Form Controls: Selects (Best Practices)](https://designsystem.digital.gov/components/form-controls/#dropdown)
- [Section 508 Guidelines](https://www.section508.gov/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Bootstrap Documentation - Forms](https://getbootstrap.com/docs/5.3/forms/select/)
