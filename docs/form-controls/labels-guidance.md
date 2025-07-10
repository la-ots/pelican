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
  img: /img/illustrations/illus-labels.png
---

## Best Practices

Users don’t know the legislative or administrative structure so we should arrange the forms for their understanding.

- **Don’t omit form labels**.
- Labels are **required** for form controls.
- Put labels above the field so that the label appears higher up on the page than the field.
- Use a single column form if possible. This is the easiest form reading experience for users.
- Refrain from using the placeholder attribute.
- Verify that the appropriate input type is being used, such as using `<input type=”tel”>` for telephone numbers.
- Make `for` and `id` value match.
- Change any IDs for your project’s requirements.
- Don’t replace Labels with placeholders.
- Refrain from using placeholder attributes in inputs because they cause usability problems.
- Ensure the `for` and `id` attributes have matching values. Note the code below.
- Use a red asterisk (<span class="icon fas fa-asterisk text-danger" aria-hidden="true"></span>) to denote required fields.

## Resources

- [The anatomy of Accessible Forms: The Problem with Placeholders](https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/)
