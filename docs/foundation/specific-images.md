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

- Ensure `img-fluid` is in the class list to size it according to its parent element.
- Use the provided alternative text.

## Usage

<div class="row">
  <div class="col-12 offset-md-1 col-md-3 text-center">
    <p><span class="badge badge-ui">PNG</span></p>
    <img class="img-fluid" alt="Official Louisiana State Seal." src="/img/New-Governors-Office-Seal.png" >
  </div>
</div>

```html
<img
  class="img-fluid"
  alt="Official Louisiana State Seal."
  src="/img/New-Governors-Office-Seal.png" />
```
