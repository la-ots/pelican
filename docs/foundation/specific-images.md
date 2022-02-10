---
title: Specific Images
summary: Specific guidelines for using images such as the State seal and logos.
tags: images
layout: guide
eleventyNavigation:
  key: Specific Images
  parent: Foundation
  order: 12
  excerpt: Specific guidelines for using images such as the State seal and logos.
  img: /img/illustrations/illus-images-specific.svg
---

## Best Practices

The Louisiana Seal is used to indicate the authenticity and official status of the application or website.

- Use the SVG file for web use. It will retain its quality and always be as sharp as possible.
- Use the PNG file for print use or if SVG files aren’t suported. It may not always retain sharpness.
- Ensure `img-fluid` is in the class list to size it according to its parent element.

## Usage

<div class="row">
  <div class="col-12 col-md-3 text-center">
    <p><span class="badge badge-ui">SVG</span></p>
    <img class="img-fluid" alt="Louisiana State Seal as a SVG image file." src="/img/Louisiana-State-Seal.svg">
  </div>
  <div class="col-12 offset-md-1 col-md-3 text-center">
    <p><span class="badge badge-ui">PNG</span></p>
    <img class="img-fluid" alt="Louisiana State Seal as a PNG image file." src="/img/Louisiana-State-Seal.png" >
  </div>
</div>

```html
<img class="img-fluid" alt="Louisiana State Seal as a SVG image file." src="/img/Louisiana-State-Seal.svg">
<img class="img-fluid" alt="Louisiana State Seal as a PNG image file." src="/img/Louisiana-State-Seal.png" >
