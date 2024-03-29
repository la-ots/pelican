---
title: Radios
summary: Radios allow users to select exactly one option from multiple options.
tags: forms
layout: guide
eleventyNavigation:
  key: Radios
  parent: Form Controls
  order: 7
  excerpt: Radios allow users to select exactly one option from multiple options.
  img: /img/illustrations/illus-radios.png
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- When possible, present them in a vertical list.
- If space is limited, consider using a [Select](/form-controls/select).
- If the user can select one or more options, use [Checkboxes](/form-controls/checkboxes).
- Ensure the `id` of the input matches the `for` of the label.
- Set a radio button as the default choice by adding the `checked` attribute to it.
- If a radio button choice is required, add the `required` attribute on all radio buttons in a group.

## Usage

{% include 'markup/radios.njk' %}

```html
{% include 'markup/radios.njk' %}
```

## Resources

- [Design.gov - Radio Buttons (Best Practices)](https://designsystem.digital.gov/components/form-controls/#radio-buttons)
- [Section 508 Guidelines](https://www.section508.gov/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Bootstrap Documentation - Forms](https://getbootstrap.com/docs/5.3/forms/checks-radios/)
