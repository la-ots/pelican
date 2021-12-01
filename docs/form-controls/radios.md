---
title: Radios
summary: Radios allow users to select exactly one option from multiple options.
tags: forms
layout: guide
eleventyNavigation:
  key: Radios
  parent: Form Controls
  order: 6
  excerpt: Radios allow users to select exactly one option from multiple options.
  img: /img/illustrations/illus-radios.svg
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- When possible, present them in a vertical list.
- If space is limited, consider using a [Select](/forms/select).
- If the user can select one or more options, use [Checkboxes](/forms/checkboxes).
- Ensure the `id` of the input matches the `for` of the label.

_**Note:** Some Radios can be marked as 'required' (<span class="fas fa-asterisk text-danger"></span>) in the wireframe/ mock-up. Please refer to [Required Form Inputs & Controls](/form-controls/labels-guidance#required-form-inputs-%26-controls) for guidance._

## Usage

{% include markup/radios.njk %}

``` html
{% include markup/radios.njk %}
```

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#radio-buttons" target="_blank">Design.gov - Radio Buttons (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
