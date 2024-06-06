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
- Normal-sized text is based on browser defaults of 16 pixels and requires a minimum Contrast Ratio of 4.5:1.
- Large text requires a minimum Contrast Ratio of 3:1. (Large-sized text is either: 24 pixels or larger, or 19 pixels and bold.)
- User interface items such as [Form Controls](/form-controls/) require a minimum Contrast Ratio of 3:1. This includes the outlines of Form Controls and the outer edges of Buttons, but is not limited to them.
- When in doubt use [WebAIM’s Contrast Checker](https://webaim.org/resources/contrastchecker/) or [TPGi’s Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

**Text Contrast**

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="icon fas fa-check me-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center text-white pd-color-block" style="background-color: #767676!important;">
        <p class="mb-0 text-center">16px Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 fw-bold"><span class="icon fas fa-check text-success me-1" aria-hidden="true"></span>4.5:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-success">
        <p class="mb-0 text-white">
          <span class="icon fas fa-check me-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-secondary text-white pd-color-block" style="font-size: 24px; background-color: #08A5A7!important;">
        <p class="mb-0 text-center text-white">18px Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 fw-bold"><span class="icon fas fa-check text-success me-1" aria-hidden="true"></span>3:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-danger">
        <p class="mb-0 text-white">
          <span class="icon fas fa-times me-1" aria-hidden="true"></span>Don’t
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black text-white pd-color-block" style="background-color: #fe9903!important;">
        <p class="mb-0 text-center text-white">16px Text</p>
      </div>
      <div class="card-body">
        <p class="mb-0 fw-bold"><span class="icon fas fa-times text-danger me-1" aria-hidden="true"></span>2.14:1 Contrast ratio</p>
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
          <span class="icon fas fa-check me-1" aria-hidden="true"></span>Do
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center text-white pd-color-block" style="background-color: #292929;">
        <p class="mb-0 text-center">
          <button type="button" class="btn btn-secondary">Button Text</button>
        </p>
      </div>
      <div class="card-body">
        <p class="mb-0 fw-bold"><span class="icon fas fa-check text-success me-1" aria-hidden="true"></span>3.1:1 Contrast ratio</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 bg-danger">
        <p class="mb-0 text-white">
          <span class="icon fas fa-times me-1" aria-hidden="true"></span>Don’t
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center bg-black text-white pd-color-block" style="background-color: #C0CEDB!important;">
        <p class="mb-0 text-center">
          <button type="button" class="btn btn-warning">Button Text</button>
        </p>
      </div>
      <div class="card-body">
        <p class="mb-0 fw-bold"><span class="icon fas fa-times text-danger me-1" aria-hidden="true"></span>1.01:1 Contrast ratio</p>
      </div>
    </div>
  </div>
</div>

## Resources

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [TPGi Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
