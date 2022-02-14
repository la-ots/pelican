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
- Separate form sections into different [Content Containers](/components/boxes/#content-container).
- Use the form section to introduce and name each form section.
- Put the form section header and its related form fields into the same `.content-container`.
- Put `role="group"` onto the container which holds the form section.
- Be sure to consult [Typography and Headings](/foundation/typography/#headings) to ensure you’re using the appropriate heading level.

**Note:** The content container, row, and column are only included to show how the Form Section Header will look. If you already have those in place, you only need the element with “Form Section” as the text.

## Usage

<div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
  <div class="row">
    <div class="col-12">
      <h2 class="legend">Form Section</h2>
      <p id="form-section-01-description">Sentence about this form section goes here. It can help describe this part of the form or explain special instructions.</p>
    </div>
  </div>
</div>

```html
<div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
  <div class="row">
    <div class="col-12">
      <h2 class="legend">Form Section</h2>
      <p id="form-section-01-description">Sentence about this form section goes here. It can help describe this part of the form or explain special instructions.</p>
    </div>
  </div>
</div>
```
