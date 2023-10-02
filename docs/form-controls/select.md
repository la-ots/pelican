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

- The Select element creates a floating menu of options. It’s often called a “dropdown” but we should avoid this term as it may be confused with a [Bootstrap Dropdown](https://getbootstrap.com/docs/5.2/components/dropdowns/). Use this as the last resort ui element.
- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Forms work best when users can see all of their choices. When possible, try to refrain from using Selects.
- If space is not limited, use [Radios](/form-controls/radios) or [Toggle Tokens](/form-controls/toggle-tokens) instead.
- If users can choose more than one option at a time, use [Checkboxes](/form-controls/checkboxes).
- If you need to include more than 15 possible options, let users type the information into a text input that suggests options.
- Do not use this for navigation.
- Use the first `option` to help inform the user of what they should do.
- It’s not the same thing as the [Dropdown Button](/components/buttons/#dropdown-buttons).

## Usage

{% include 'markup/select.njk' %}

```html
{% include 'markup/select.njk' %}
```

## Resources

- [Digital.gov - Form Controls: Selects (Best Practices)](https://designsystem.digital.gov/components/form-controls/#dropdown)
- [Section 508 Guidelines](https://www.section508.gov/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/)
- [Bootstrap Documentation - Forms](https://getbootstrap.com/docs/5.2/forms/select/)
