---
title: Text Area
summary: Textarea allows users to input multiple lines of text into a form.
tags: forms
layout: guide
eleventyNavigation:
  key: Text Area
  parent: Form Controls
  order: 9
  excerpt: Textarea allows users to input multiple lines of text into a form.
  img: /img/illustrations/illus-textarea.svg
---
    
## Best Practices

- Use Textarea when the expected text input is longer than one sentence.
- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Textareas do not include formatting controls.

_**Note:** Some Text Areas can be marked as 'required' (<span class="fas fa-asterisk text-danger"></span>) in the wireframe/ mock-up. Please refer to [Required Form Inputs & Controls](/form-controls/labels-guidance#required-form-inputs-%26-controls) for guidance._

## Usage

{% include markup/textarea.njk %}

``` html
{% include markup/textarea.njk %}
```

## Resources
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
