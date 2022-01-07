---
title: Toasts
summary: Toasts are a lightweight notification relaying information related to the user's actions.
tags: components
layout: guide
eleventyNavigation:
  key: Toasts
  parent: Components
  order: 300
  excerpt: Toasts are a lightweight notification relaying information related to the user's actions.
  img: /img/illustrations/illus-toasts.svg
---

## Best Practices

Toasts use the [Status Colors](/theming/color) and correlate to the same meanings.
- **Info** (Blue) provides user with information that is not critical to the current task, but provides them with related information
- **Success** (Green) provides feedback to the user indicating an action is successful 
- **Danger** (Red) indicates an action will cause data loss, error, or other hard-to-reverse effects

### Writing Toasts
When writing Toast messages, keep the following in mind:
- Toasts should be clear and specific to the user's actions/ goals
- Use <a href="https://plainlanguage.gov/" target="_blank">Plain Language</a>, not technical jargon
- Avoid negative language; Do not blame the user
- Avoid using all uppercase letters unless you are using Acronyms
- Provide useful information

### Accessibility
Status colors only add visual meaning. This is not communicated to users with assistive technologies, such as screen readers. The content of Toast must make the reason for the Toast obvious to the user.

Toasts include the attribute `role="alert"` so they can be read by screen readers.

### When to use
- Toasts are only triggered by user actions such as saving, editing, deleting, or creating a file.
- Toasts may also be used to notify the user about information related to their current action.
- Toasts are displayed in the top-right of the screen and are persistent regardless of scrolling. They are dismissable either by clicking the X to close or after a defined time duration (suggestion is 7 seconds).

_**Note:** Toasts require <a href="https://getbootstrap.com/docs/4.5/getting-started/javascript/#util" target="_blank">util.js</a>_

## Usage
### Success Toast
* **Success** (Green) provides feedback to the user indicating an action is successful
* Use a <a href="https://fontawesome.com/icons/check-circle?style=solid" target="_blank">check in a circle</a> as the icon

<div class="bd-example bg-light">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-success-90 bg-success-10">
      <span class="fas fa-check-circle"></span>
      <strong class="text-success-90 mx-1">Success!</strong> Hey, User, the thing worked.
    <button type="button" class="ml-auto mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </div>
    <div class="toast-body">
      Some text inside the toast body
    </div>
  </div>
</div>

``` html
{% include markup/toast-success.njk %}
```

### Danger Toast
* **Danger** (Red) indicates an action will cause data loss, error, or other hard-to-reverse effects
* Use the <a href="https://fontawesome.com/icons/exclamation-triangle?style=solid" target="_blank">exclamation mark in a triangle</a> as the icon

<div class="bd-example bg-light">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-danger-90 bg-danger-10">
      <span class="fas fa-exclamation-triangle"></span>
      <strong class="text-danger-90 mx-1">Danger!</strong> Hey, User, the thing broke.
    <button type="button" class="ml-auto mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </div>
    <div class="toast-body">
      Some text inside the toast body
    </div>
  </div>
</div>

``` html
{% include markup/toast-danger.njk %}
```

### Info Toast
* **Info** (Blue) provides user with information that is not critical to the current task, but provides them with related information
* Use the <a href="https://fontawesome.com/icons/info-circle?style=solid" target="_blank">info symbol in a circle</a> as the icon

<div class="bd-example bg-light">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-info-90 bg-info-10">
      <span class="fas fa-info-circle"></span>
      <strong class="text-info-90 mx-1">Hey!</strong> Hey, User, just an FYI.
    <button type="button" class="ml-auto mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </div>
    <div class="toast-body">
      Some text inside the toast body
    </div>
  </div>
</div>

``` html
{% include markup/toast-info.njk %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/toasts/" target="_blank">Bootstrap Documentation - Toasts</a>
