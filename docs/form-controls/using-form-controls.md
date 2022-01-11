---
title: Using Form Controls
summary: Make the form for the user, not for us.
tags: forms
layout: guide
eleventyNavigation:
  key: Using Form Controls
  parent: Form Controls
  order: 1
  excerpt: Make the form for the user, not for us.
  img: /img/illustrations/illus-using-form-controls.svg
---

## Best Practices

Louisiana government agencies will get the best data possible from the user when the forms are planned and implemented from the user’s point of view. The user will not know the legislative or administrative reasoning behind the forms. So let’s arrange the forms for their understanding, not ours.

Here are some general tips to help make the best form for the user’s experience.

- Structure forms that take the user experience into account instead of developer ease.
- Labels should be atop the input.
- Use a single column form if possible. This is the easiest form reading experience for users. If Stakeholders and/or Product Owners indicate their preference against this, then arrange the form to have as few vertical divisions as possible.
- Clearly label all form controls.  
- Consider [Label Guidance](/form-controls/labels-guidance).

## Usage

- Copy the form controls markup you need. Include the wrapping element, often the `mb-3` class.
- Make `for` and `id` value match.
- Verify that the appropriate input type is being used, such as using `<input type=”tel”>` for telephone numbers.
- Do not omit the Labels.
- Refrain from using the placeholder attribute.
- Change any IDs for your project’s requirements.
    
## Theming Constraints

Unlike other Design System elements, Form Inputs and Controls are not themeable by the agency. This ensures maximum compliance with <a href="https://www.section508.gov/" target="_blank">Section 508</a> and <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG guidelines</a>.

Please [read about Status colors](/foundation/status-colors/), [UI colors](/foundation/ui-colors/), and [Agency Theming](/foundation/agency-theming/) for more information.
