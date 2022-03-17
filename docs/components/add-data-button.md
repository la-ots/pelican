---
title: Add Data Button
summary: Add Data Button allows users to add data to a set.
tags: components, buttons
layout: guide
eleventyNavigation:
  key: Add Data Button
  parent: Components
  order: 110
  excerpt: Add Data Button allows users to add data to a set.
  img: /img/illustrations/illus-button-add-data.svg
---

## Best Practices

- The Add Data Button allows the user to add more pieces of data to a set, such as additional phone numbers or email addresses.
- Put it below any objects it adds, usually in [a row and column-classed element](/foundation/layout-grid/) of its own.
- Make it the same width as the objects it adds.
- Place it under the data to which it adds.

## Usage

<div class="d-grid">
  <button type="button" class="btn-add-this">
    <span class="btn-add-this-core rounded p-2">
      <span class="fa fa-plus fa-fw" aria-hidden="true"></span>
      <span class="visually-hidden">Add Another</span>
    </span>
  </button>
</div>

``` html
<div class="d-grid">
  <button type="button" class="btn-add-this">
    <span class="btn-add-this-core rounded p-2">
      <span class="fa fa-plus fa-fw" aria-hidden="true"></span>
      <span class="visually-hidden">Add Another</span>
    </span>
  </button>
</div>
```

## Resources

* <a href="https://getbootstrap.com/docs/5.1/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
