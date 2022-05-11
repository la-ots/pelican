---
title: Images
summary: Guidelines for including images in digital products.
tags: images
layout: guide
eleventyNavigation:
  key: Images
  parent: Foundation
  order: 11
  excerpt: Guidelines for including images in digital products.
  img: /img/illustrations/illus-images.svg
---

## Best Practices

- Use meaningful images to enhance the content.
- Avoid decorative images.
- Avoid using images of swamps, alligators, or cultural images unless they are real information.

## Content Images

Content images are images which have meaningful information in them.

- Content images should contain [Alt Text](/foundation/images/#alt-text). 
- Apply `img-fluid` to images to make them responsive. This makes the image fit its parent container. Height is automatically adjusted by the browser to preserve the aspect ratio.
- You may optionally add the `rounded` class to put rounded corners on the image.

<div class="row mb-12">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Person using a laptop, with notebooks and a pen." class="img-fluid rounded" src="/img/photos/pexels-photo-5077047.jpeg">
  </div>
</div>

```html
<div class="row mb-12">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Laptop, filled coffee cup, notepad, pen, and phone on a desk." class="img-fluid rounded" src="/img/photos/pexels-photo-5077047.jpeg">
  </div>
</div>
```

## Decorative Images

Non-content images may be requested by the Stakeholders and Project Owners. In this case, consider the following guidelines:

- Try to use images which do not distract from the content. 
- Content images should use [Alt Text](/foundation/images/#alt-text) with an empty value.

<div class="row mb-12">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid rounded" src="/img/photos/pexels-photo-2317711.jpeg">
  </div>
</div>

```html
<div class="row mb-12">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid rounded" src="/img/photos/pexels-photo-2317711.jpeg">
  </div>
</div>
```

### Writing Alt Text

When writing alt text, keep the following in mind:

- Be specific; describe the image for users who cannot see them.
- Keep it short as possible, but descriptive. Try to keep it around 250 characters.
- Don’t include phrases like “Image of...” or “Picture of...” 
- Use a simple, descriptive sentence and the appropriate punctuation.
- Alt text describes the image, it’s not a caption.
- Alt text does not need to include any copyright information.

## Resources

- <a href="https://webaim.org/techniques/alttext/" target="_blank">WebAIM: Alternate Text</a>
- <a href="https://www.washington.edu/doit/how-long-can-alt-attribute-be" target="_blank">Alt Text Length, Washington.edu</a>
- <a href="https://usability.yale.edu/web-accessibility/articles/images" target="_blank">Images, Yale Usability</a>
