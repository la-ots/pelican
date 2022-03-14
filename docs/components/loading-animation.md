---
title: Loading Animation
summary: The Loading Animation informs the user a website or application is getting data.
tags: components
layout: guide
eleventyNavigation:
  key: Loading Animation
  parent: Components
  order: 180
  excerpt: The Loading Animation informs the system is getting data.
  img: /img/illustrations/illus-loading.svg
---

## Best Practice

- Show the Loading Animation while content is being loaded.
- Put the Loading Animation into the markup which wraps the loaded content.
- Hide the Loading Animation when the content is finished loading.

## Usage

<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-ui" role="status">
  <span class="sr-only">Loading...</span>
</div>

``` html
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-ui" role="status">
  <span class="sr-only">Loading...</span>
</div>
```
