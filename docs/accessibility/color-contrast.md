---
title: Color Contrast
summary: Color Contrast is the contrast ratio between colors.
tags: color, contrast
layout: guide
eleventyNavigation:
  key: Color Contrast
  parent: Accessibility
  order: 3
  excerpt: Color Contrast is the contrast ratio between two colors.
  img: /img/illustrations/illus-color-contrast.svg
---

## Best Practices

- Use the recommended color contrast ratios.
- Normal-sized text is 16 pixels and requires a minimum Contrast Ratio of 4.5:1.
- Large-sized text is 18 pixels or larger and requires a minimum Contrast Ratio of 3:1.
- User interface items such as [Form Controls](/form-controls/) require a minimum Contrast Ratio of 3:1. This includes the outlines of Form Controls and the outer edges of Buttons, but is not limited to them.
- When in doubt use <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM’s Contrast Checker</a>

**Text Contrast**

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="fas fa-check mr-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center text-white pd-color-block" style="background-color: #657892!important;">
        <p class="mb-0 text-center">Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success mr-1" aria-hidden="true"></span>4.5:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="fas fa-check mr-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-secondary text-white pd-color-block" style="font-size: 24px; color: #734500!important;">
        <p class="mb-0 text-center text-secondary-90">Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success mr-1" aria-hidden="true"></span>3.78:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-danger">
        <p class="mb-0 text-white">
          <span class="fas fa-times mr-1" aria-hidden="true"></span>Don’t
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black text-white pd-color-block" style="background-color: #FECB7F!important;">
        <p class="mb-0 text-center">Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger mr-1" aria-hidden="true"></span>1.49:1 Contrast ratio</p>
      </div>
    </div>
  </div>
</div>

**User Interface Contrast**

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="fas fa-check mr-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black text-white pd-color-block">
        <p class="mb-0 text-center">
          <button type="button" class="btn btn-secondary">Button Text</button>
        </p>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success mr-1" aria-hidden="true"></span>9.77:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="fas fa-check mr-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black pd-color-block" style="background-color: #CED4DA!important;">
        <div class="form-group mb-0">
          <label for="colorTest1" class="label">
            <span class="fas fa-asterisk text-danger mr-1" aria-hidden="true"></span>Label</label>
          <input id="colorTest1" type="text" class="form-control">
        </div>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success mr-1" aria-hidden="true"></span>3.13:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-danger">
        <p class="mb-0 text-white">
          <span class="fas fa-times mr-1" aria-hidden="true"></span>Don’t
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black text-white pd-color-block" style="background-color: #C0CEDB!important;">
        <p class="mb-0 text-center">
          <button type="button" class="btn btn-warning">Button Text</button>
        </p>
      </div>
      <div class="card-body">
        <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger mr-1" aria-hidden="true"></span>1.02:1 Contrast ratio</p>
      </div>
    </div>
  </div>
</div>

## Resources
* <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG - Web Content Accessibility Guidelines</a>
