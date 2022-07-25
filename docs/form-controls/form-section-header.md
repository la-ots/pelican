---
title: Form Section Header
summary: Form Section Headers divide a Form into smaller sections.
tags: forms
layout: docs/guide
eleventyNavigation:
  key: Form Section Header
  parent: Form Controls
  order: 3
  excerpt: Form Section Headers divide a Form into smaller sections.
  img: /img/illustrations/illus-form-section-header.svg
---

## Best Practices

- Divide Forms into smaller sections to make it easier for the user to fill out.
- Separate Form Sections into different [Content Containers](/components/boxes/#content-container).
- Use the Form Section to introduce and name each Form section.
- Put the Form Section Header and its related Form fields into the same `.content-container`.
- Put `role="group"` onto the container which holds the Form section.
- Be sure to consult [Typography and Headings](/foundation/typography/#headings) to ensure you’re using the appropriate heading level.

**Note:** The outer containers are only included to show how the Form Section Header will look. If you already have those in place, you only need the element with “Form Section” as the text.

## Usage

<div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
  <h2 class="legend">Form Section</h2>
  <p id="form-section-01-description">Sentence about this Form Section goes here. It can help describe this part of the Form or explain special instructions.</p>
</div>

```html
<div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
  <h2 class="legend">Form Section</h2>
  <p id="form-section-01-description">Sentence about this Form Section goes here. It can help describe this part of the Form or explain special instructions.</p>
</div>
```
