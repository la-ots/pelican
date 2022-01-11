---
title: Form Section Header
summary: Form section headers divide a form into smaller sections.
tags: forms
layout: guide
eleventyNavigation:
  key: Form Section Header
  parent: Form Controls
  order: 3
  excerpt: Form section headers divide a form into smaller sections.
  img: /img/illustrations/illus-form-section-header.svg
---

## Best Practices

- Divide forms into smaller sections to make it easier for the user to fill out.
- Separate Form sections into different [Content Containers](/components/boxes/#content-container).
- Form Section Headers are used to introduce form sections.
- Use the Form Section Header to name each form section.
- Put the Form Section Header header and its related form fields into the same `.content-container`.
- Put the Form Section Header into its `row` and `.col-12`.
- Be sure to consult [Typography and Headings](/foundation/typography/#headings) to esure you’re using the appropriate heading level.

## Usage

{% include markup/form-section-header.njk %}

```html
{% include markup/form-section-header.njk %}
```

{% include markup/form-section-header-sentence.njk %}

```html
{% include markup/form-section-header-sentence.njk %}
```
