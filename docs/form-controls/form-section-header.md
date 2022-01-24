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

- Form Section Headers are used to indicate sections of forms which have been divided into smaller sections.
  - Divide forms into smaller sections to make it easier for the user to fill out.
- Separate Form sections into different [Content Containers](/components/boxes/#content-container).
- Use the Form Section Header to name each form section.
- Put the Form Section Header header and its related form fields into the same `.content-container`.
- Put the Form Section Header into their own `.col-12` with a `.row` parent.
- Be sure to consult [Typography and Headings](/foundation/typography/#headings) to esure you’re using the appropriate heading level.

**Note:** The content container, row, and column are only included to show how the Form Section Header will look. If you already have those in place, you only need the element with “Form Section” as the text.

## Usage

### Header Only

{% include 'markup/form-section-header.njk' %}

```html
{% include 'markup/form-section-header.njk' %}
```

### Header with Sentence

{% include 'markup/form-section-header-sentence.njk' %}

```html
{% include 'markup/form-section-header-sentence.njk' %}
```
