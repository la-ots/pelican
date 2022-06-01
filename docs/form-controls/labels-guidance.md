---
title: Label Guidance
summary: Labels give the user additonal control and context for Form Controls.
tags: forms
layout: guide
eleventyNavigation:
  key: Label Guidance
  parent: Form Controls
  order: 2
  excerpt: Labels give the user additonal control and context for Form Controls.
  img: /img/illustrations/illus-labels.svg
---
    
## Best Practices

- Labels are **required** for Form Controls.
- Don’t replace Labels with placeholders.
- Refrain from using placeholder attributes in inputs because they cause usability problems.
- Ensure the `for` and `id` attributes have matching values. Note the code below.
- Use a red asterisk (<span class="fas fa-asterisk text-danger" aria-hidden="true"></span>) to denote required fields.

## Usage

<div class="form-group">
  <label for="inputTextBox499">
    <span class="fas fa-asterisk text-danger me-1" aria-hidden="true"></span>Input Email Label
  </label>
  <input type="tel" class="form-control" id="inputTextBox499" placeholder="This is a placeholder, don’t use.">
  <div id="telHelp" class="form-text">On mobile browsers this presents an email-optimized UI.</div>
</div>

```html
<div class="form-group">
  <label for="inputTextBox499">
      <span class="fas fa-asterisk text-danger me-1" aria-hidden="true"></span>Input Email Label
    </label>
  <input type="tel" class="form-control" id="inputTextBox499" placeholder="This is a placeholder, don’t use.">
  <div id="telHelp" class="form-text">On mobile browsers this presents an email-optimized UI.</div>
</div>
```

## Resources

- <a href="https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/" target="_blank">The anatomy of Accessible Forms: The Problem with Placeholders</a>

