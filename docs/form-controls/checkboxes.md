---
title: Checkboxes
summary: Checkboxes allow users to select one or more options at the same time.
tags: forms
layout: guide
eleventyNavigation:
  key: Checkboxes
  parent: Form Controls
  order: 4
  excerpt: Checkboxes allow users to select one or more options at the same time.
  img: /img/illustrations/illus-checkboxes.svg
---
  
## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- When possible, present them in a vertical list.
- If only one item can be selected, use [Radios](/form-controls/radios).
- If the user needs to activate or deactivate something, use a [Switch](/form-controls/switches) instead.
- Ensure the `id` of the input matches the `for` of the label.
- Set a checkbox as the default choice by adding the `checked` attribute to it.
- If a checkbox is required, add the `required` attribute to it.

## Usage

{% include 'markup/checkboxes.njk' %}

``` html
{% include 'markup/checkboxes.njk' %}
```

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#checkbox" target="_blank">Design.gov - Checkbox (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
