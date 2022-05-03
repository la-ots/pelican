---
title: Label Guidance
summary: Labels give the user additonal control and context for form controls.
tags: forms
layout: guide
eleventyNavigation:
  key: Label Guidance
  parent: Form Controls
  order: 2
  excerpt: Labels give the user additonal control and context for form controls.
  img: /img/illustrations/illus-labels.svg
---
    
## Best Practices

- Labels are **required** for form controls.
- Don’t replace Labels with placeholders.
- Refrain from using placeholder attributes in inputs because they cause usability problems.
- Ensure the `for` and `id` attributes have matching values. Note the code below.
- Use a red asterisk (<span class="fas fa-asterisk text-danger" aria-hidden="true"></span>) to denote required fields.

## Usage

<div class="form-group">
  <label for="inputTextBox499">
    <span class="fas fa-asterisk text-danger mr-1" aria-hidden="true"></span>Input Email Label
  </label>
  <input type="tel" class="form-control" id="inputTextBox499" placeholder="This is a placeholder, don’t use.">
  <small>On mobile browsers this presents an email-optimized UI.</small>
</div>

```html
<div class="form-group">
  <label for="inputTextBox499">
      <span class="fas fa-asterisk text-danger mr-1" aria-hidden="true"></span>Input Email Label
    </label>
  <input type="tel" class="form-control" id="inputTextBox499" placeholder="This is a placeholder, don’t use.">
  <small>On mobile browsers this presents an email-optimized UI.</small>
</div>
```

## Resources

- <a href="https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/" target="_blank">The anatomy of Accessible Forms: The Problem with Placeholders</a>

