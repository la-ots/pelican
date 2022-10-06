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
- Be sure to consult [Typography and Headings](/foundation/typography/#headings) to ensure you’re using the appropriate heading level.
- Remove the `role="presentation"` from the `<h2>` markup when you paste it into your project.

## Usage

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h2 class="legend text-primary mb-1" role="presentation">Header</h2>
      <p class="mb-1">Sentence about this form section goes here. It can help describe this part of the form or explain special instructions.</p>
      <p class="small"><span class="fa fa-asterisk text-danger me-1" aria-hidden="true"></span>An asterisk means we need this information.</p>
    </div>
  </div>
</div>

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h2 class="legend text-primary mb-1" role="presentation">Header</h2>
      <p class="mb-1">Sentence about this form section goes here. It can help describe this part of the form or explain special instructions.</p>
      <p class="small"><span class="fa fa-asterisk text-danger me-1" aria-hidden="true"></span>An asterisk means we need this information.</p>
    </div>
  </div>
</div>
```
