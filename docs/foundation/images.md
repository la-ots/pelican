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

## Overview

Images which are content require certain considerations. Images which are content include photos or graphics which are part of the presented information.

Images which are not content require other considerations. Image which are not content include decorative images background images. These image do not bring informational value to the content.

## Guidance for Content Images

Avoid using images of swamps, alligators, or cultural images unless they strongly relate to the content. Images should not be used as “filler” on a website or web application. This dilutes the Louisiana brand and brings little value to other agencies. For example, the Louisiana Office of Tourism or Wildlife & Fisheries could use wildlife photography to promote tourism or ecological wealth to visitors. Such images may not be relevant in other projects.

* Content images should contain [Alt Text](/foundation/images/#alt-text). 
* Apply `img-fluid` to images to make them responsive. This makes the image fit its parent container. Height is automatically adjusted by the browser to preserve the aspect ratio.
* You may optionally add the `rounded` class to put rounded corners on the image.

<div class="row mb-8">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Person using a laptop, with notebooks and a pen." class="img-fluid" src="/img/photos/pexels-photo-5077047.jpeg">
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Laptop, filled coffee cup, notepad, pen, and phone on a desk." class="img-fluid rounded" src="/img/photos/pexels-photo-2312369.jpeg">
  </div>
</div>

```html
<div class="row mb-8">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Person using a laptop, with notebooks and a pen." class="img-fluid" src="/img/photos/pexels-photo-5077047.jpeg">
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="Laptop, filled coffee cup, notepad, pen, and phone on a desk." class="img-fluid rounded" src="/img/photos/pexels-photo-2312369.jpeg">
  </div>
</div>
```

## Guidance for Non-content Images

Non-content images may be requested by the Stakeholders and Project Owners. In this case, consider the following guidelines:

* Try to use images which do not distract from the content. 
* Content images should use [Alt Text](/foundation/images/#alt-text) with an empty value.

<div class="row mb-8">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid" src="/img/photos/pexels-photo-2156881.jpeg">
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid rounded" src="/img/photos/pexels-photo-2317711.jpeg">
  </div>
</div>

```html
<div class="row mb-8">
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid" src="/img/photos/pexels-photo-2156881.jpeg">
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <img alt="" class="img-fluid rounded" src="/img/photos/pexels-photo-2317711.jpeg">
  </div>
</div>
```
## Alt Text

Alt Text is used by assistive technology to describe the image to the user or browsers that block images. This ensures all visitors can use your product. All content images should contain alt text. Non-content images should contain Alt Text with a null value, `alt=""`.

### Writing Alt Text

When writing alt text, keep the following in mind:

* Be specific; describe the image for users who cannot see them
* Keep it short; try to stay <a href="https://usability.yale.edu/web-accessibility/articles/images" target="_blank">under 250 characters</a>
* Don't include phrases like "Image of..." or "Picture of..." 
* Use a simple, descriptive sentence and the appropriate punctuation.
* Keep Alt Text short; try to stay [under 250 characters](https://usability.yale.edu/web-accessibility/articles/images).
* Don’t begin phrases with "Image of..." or "Picture of...".

Keep in mind when writing alt text you are describing the image, not a caption. Additionally, you do not need to include any copyright information.

A good example of using alt text is as follows:

`<img src="pelican.jpg" alt="A pelican.">`

A better example of using alt text would be:

`<img src="pelican.jpg" alt="A pelican flying over a lake.">`

The best example of alt text would be:

`<img src="pelican.jpg" alt="A brown pelican flying over water.">`

If the image is decorative (which should be avoided if possible), include the `alt` attribute but leave it blank.

## Resources

* <a href="https://webaim.org/techniques/alttext/" target="_blank">WebAIM: Alternate Text</a>
