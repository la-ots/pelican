---
title: Radios
summary: Radios allow users to select exactly one option from multiple options.
tags: forms
layout: docs/guide
eleventyNavigation:
  key: Radios
  parent: Form Controls
  order: 7
  excerpt: Radios allow users to select exactly one option from multiple options.
  img: /img/illustrations/illus-radios.svg
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- When possible, present them in a vertical list.
- If space is limited, consider using a [Select](/form-controls/select).
- If the user can select one or more options, use [Checkboxes](/form-controls/checkboxes).
- Ensure the `id` of the input matches the `for` of the Label.
- Set a Radio Button as the default choice by adding the `checked` attribute to it.
- If a Radio Button choice is required, add the `required` attribute on all Radio Buttons in a group.

## Usage

{% include 'markup/form-controls/radios.njk' %}

``` html
{% include 'markup/form-controls/radios.njk' %}
```

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#radio-buttons" target="_blank">Design.gov - Radio Buttons (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/5.1/forms/checks-radios/" target="_blank">Bootstrap Documentation - Forms</a>
