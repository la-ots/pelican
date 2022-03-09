---
title: Color Contrast
summary: Color Contrast is the contrast ratio between colors.
tags: color, contrast
layout: guide
eleventyNavigation:
  key: Color Contrast
  parent: Accessibility
  order: 2
  excerpt: Color Contrast is the contrast ratio between two colors.
  img: /img/illustrations/illus-color-contrast.svg
---

## Best Practices

- Use the recommended color contrast ratios.
- Normal-sized text is 16 pixels and requires a minimum Contrast Ratio of 4.5:1.
- Large-sized text is 18 pixels or larger and requires a minimum Contrast Ratio of 3:1.
- User interface items such as [Form Controls](/form-controls/) require a minimum Contrast Ratio of 3:1. This includes the outlines of Form Controls and the outer edges of Buttons, but is not limited to them.
- when in doubt use <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM’s Contrast Checker</a>

**Text Contrast**

A black background (`#FFFFFF`) and white text (`#000000`) has a Contrast Ratio of 21:1. Text requires a minimum Contrast Ratio of 4.5:1. If text is 24 pixels or larger, a minimum Contrast Ratio of 3:1 is required.

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white">
          <p class="mb-0 text-center">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 21:1 Contrast ratio</p>
          <p class="mb-0">Highest possible contrast ratio for text against a background.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #657892!important;">
          <p class="mb-0 text-center">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 4.5:1 Contrast ratio</p>
          <p class="mb-0">Text requires a minimum of 4.5:1 color contrast against its background.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-secondary text-white">
          <p class="mb-0 text-center text-secondary-90" style="font-size: 24px; color: #734500!important;">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 3.79:1 Contrast ratio</p>
          <p class="mb-0">24px or larger text requires 3:1 minimum contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #6C757D!important;">
          <p class="mb-0 text-center" style="font-size: 24px; color: #CFCFCE;">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 3.01:1 Contrast ratio</p>
          <p class="mb-0">24px or larger text requires 3:1 minimum contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-danger text-white">
        <p class="mb-0">
          <span class="fas fa-times"></span>
          Don’t
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white">
          <p class="mb-0 text-center" style="color: #495057!important;">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger"></span> 2.57:1 Contrast ratio</p>
          <p class="mb-0">Text requires a minimum of 4.5:1 color contrast against its background.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-danger text-white">
        <p class="mb-0">
          <span class="fas fa-times"></span>
          Don’t
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #6384A3!important;">
          <p class="mb-0 text-center">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger"></span> 3.92:1 Contrast ratio</p>
          <p class="mb-0">Text requires a minimum of 4.5:1 color contrast against its background.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-danger text-white">
        <p class="mb-0">
          <span class="fas fa-times"></span>
          Don’t
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #FECB7F!important;">
          <p class="mb-0 text-center">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger"></span> 1.49:1 Contrast ratio</p>
          <p class="mb-0">Text requires a minimum of 4.5:1 color contrast against its background.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-danger text-white">
        <p class="mb-0">
          <span class="fas fa-times"></span>
          Don’t
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #808080!important;">
          <p class="mb-0 text-center" style="font-size: 24px; color: #CED4DA!important;">Text</p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger"></span> 2.64:1 Contrast ratio</p>
          <p class="mb-0">24px or larger text requires 3:1 minimum contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
</div>

**User Interface Contrast**

User interface items such as form controls require a minimum Contrast Ratio of 3:1. This includes the outlines of Form Controls and the outer edges of Buttons, but are not limited to them.

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white">
          <p class="mb-0 text-center">
            <button type="button" class="btn btn-secondary">Button Text</button>
          </p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 9.77:1 Contrast ratio</p>
          <p class="mb-0">Interface elements require minimum 3:1 contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-danger text-white">
        <p class="mb-0">
          <span class="fas fa-times"></span>
          Don’t
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-11 px-4 bg-black text-white" style="background-color: #C0CEDB!important;">
          <p class="mb-0 text-center">
            <button type="button" class="btn btn-warning">Button Text</button>
          </p>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-times text-danger"></span> 1.02:1 Contrast ratio</p>
          <p class="mb-0">Interface elements require minimum 3:1 contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0">
      <div class="card-header rounded-top border-0 py-2 px-4 bg-success text-white">
        <p class="mb-0">
          <span class="fas fa-check"></span>
          Do
        </p>
      </div>
      <div class="card-body p-0">
        <div class="py-7 px-4 bg-black" style="background-color: #CED4DA!important;">
          <div class="form-group mb-0">
            <label for="colorTest1" class="label">
              <span class="fas fa-asterisk text-danger"></span>
              Label</label>
            <input id="colorTest1" type="text" class="form-control">
          </div>
        </div>
        <div class="p-4">
          <p class="mb-0 font-weight-bold"><span class="fas fa-check text-success"></span> 3.13:1 Contrast ratio</p>
          <p class="mb-0">Interface elements require minimum 3:1 contrast ratio.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Resources
* <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG - Web Content Accessibility Guidelines</a>
