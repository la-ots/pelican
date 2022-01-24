---
title: Toggle Tokens
summary: Toggle Tokens are a styled version of Checkboxes and Radios. 
tags: forms
layout: guide
eleventyNavigation:
  key: Toggle Tokens
  parent: Form Controls
  order: 10
  excerpt: Toggle Tokens are a styled version of Checkboxes and Radios.
  img: /img/illustrations/illus-toggle-tokens.svg
---
    
## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Toggle Tokens have larger interaction areas than [Checkboxes](/form-controls/checkboxes) and [Radios](/form-controls/radios) and are easier to easier to press because they require less accuracy.
- When space is limited, use the unstyled [Checkboxes](/form-controls/checkboxes) and [Radios](/form-controls/radios) instead.

_**Note:** Some Toggle Tokens can be marked as 'required' (<span class="fas fa-asterisk text-danger"></span>) in the wireframe/ mock-up. Please refer to [Required Form Inputs & Controls](/form-controls/labels-guidance#required-form-inputs-%26-controls) for guidance._

## Usage
### Toggle Tokens for Exclusive Choices
* [Radios](form-controls/radios) can be presented as Toggle Tokens
* Use Radio button logic

{% include "markup/toggle-tokens-exclusive.njk" %}

``` html
{% include "markup/toggle-tokens-exclusive.njk" %}
```

_**Note:** Do not use Toggle Tokens when space is limited._

### Toggle Tokens for Multiple Choices
* [Checkboxes](form-controls/checkboxes) can be presented as Toggle Tokens
* Use Checkbox logic

{% include "markup/toggle-tokens-inclusive.njk" %}

``` html
{% include "markup/toggle-tokens-inclusive.njk" %}
```

_**Note:** Do not use Toggle Tokens when space is limited._

## Resources
* <a href="https://designsystem.digital.gov/components/form-controls/#checkbox" target="_blank">Design.gov - Checkbox (Best Practices)</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
