---
title: Select
summary: Select allows the user to select an option from a group of similar options.
tags: forms
layout: guide
eleventyNavigation:
  key: Select
  parent: Form Controls
  order: 7
  excerpt: Select allows the user to select an option from a group of similar options.
  img: /img/illustrations/illus-select.svg
---

## Best Practices

- The Select element creates a floating menu of options. It’s often called a “dropdown” but we should avoid this term as it may be confused with a <a href="https://getbootstrap.com/docs/4.5/components/dropdowns/" target="_blank">Bootstrap Dropdown</a>. Use this as the last resort ui element.
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

``` html
{% include 'markup/select.njk' %}
```

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#dropdown" target="_blank">Digital.gov - Form Controls: Selects (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
