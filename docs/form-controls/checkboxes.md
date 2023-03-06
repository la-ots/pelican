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
  img: /img/illustrations/illus-checkboxes.png
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
* [Design.gov - Checkbox (Best Practices)](https://designsystem.digital.gov/components/form-controls/#checkbox)
* [Section 508 Guidelines](https://www.section508.gov/)
* [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/)
* [Bootstrap Documentation - Forms](https://getbootstrap.com/docs/5.2/forms/checks-radios/)
