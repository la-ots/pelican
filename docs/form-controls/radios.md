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
- If space is limited, consider using a [Select](/form-controls/select).
- If the user can select one or more options, use [Checkboxes](/form-controls/checkboxes).
- Ensure the `id` of the input matches the `for` of the label.
- Set a radio button as the default choice by adding the `checked` attribute to it.
- If a radio button choice is required, add the `required` attribute on all radio buttons in a group.

## Usage

{% include 'markup/radios.njk' %}

``` html
{% include 'markup/radios.njk' %}
```

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#radio-buttons" target="_blank">Design.gov - Radio Buttons (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
