---
title: Switches
summary: Switches allow users to enable or disable something, like a light switch.
tags: forms
layout: guide
eleventyNavigation:
  key: Switches
  parent: Form Controls
  order: 8
  excerpt: Switches allow users to enable or disable something, like a light switch.
  img: /img/illustrations/illus-switches.svg
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Use this when users can toggle a feature on or off.
- Switches are custom-styled [Checkboxes](/forms/checkboxes). 

_**Note:** Some Switches can be marked as 'required' (<span class="fas fa-asterisk text-danger"></span>) in the wireframe/ mock-up. Please refer to [Required Form Inputs & Controls](/form-controls/labels-guidance#required-form-inputs-%26-controls) for guidance._

## Usage
### Little Switches
* Allow users to enable or disable multiple items
* Use when users can toggle multiple features on and off

{% include "markup/switches-little.njk" %}

``` html
{% include "markup/switches-little.njk" %}
```

### Big Switches
* Allow users to enable or disable larger sections of functionality
* Can be used to disable a group of Little Switches

{% include "markup/switches-big.njk" %}

``` html
{% include "markup/switches-big.njk" %}
```

_**Note:** Do not use multiple Big Switches as replacements for multiple Little Switches._

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#checkbox" target="_blank">Design.gov - Checkbox (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
