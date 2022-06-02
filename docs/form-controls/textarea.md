---
title: Textarea
summary: Textarea allows users to input multiple lines of text into a Form.
tags: forms
layout: page-guide
eleventyNavigation:
  key: Textarea
  parent: Form Controls
  order: 11
  excerpt: Textarea allows users to input multiple lines of text into a Form.
  img: /img/illustrations/illus-textarea.svg
---
    
## Best Practices

- Use Textarea when the expected text input is longer than one sentence.
- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Textareas do not include formatting controls.

## Usage

{% include 'markup/form-controls/textarea.njk' %}

``` html
{% include 'markup/form-controls/textarea.njk' %}
```

## Resources
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="{% include 'links/forms.njk' %}" target="_blank">Bootstrap Documentation - Forms</a>
