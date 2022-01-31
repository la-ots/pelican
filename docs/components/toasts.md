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

- Put Toasts at the top right of the screen.
- Toasts use the same [Status Colors](/theming/color) as Alerts.
- Status Colors only add visual cues. The content of the Toast must make the meaning obvious to assistive technology users.
- Toasts are only triggered by user actions such as saving, editing, deleting, or creating a file.
- Use **Info** (Blue) to communicate informative or helpful information to users.
- Use **Success** (Green) to provide feedback to the user indicating an action is successful.
- Use **Warning** (Yellow) to indicate an unintended, but not dangerous, effect.  
- Use **Danger** (Red) to indicate an action will cause data loss, error, or other hard-to-reverse effects.
- Use the icons provided for each Toast type.
- Toasts may also be used to notify the user about information related to their current action.
- Toasts are persistent regardless of scrolling. 
- Toasts are dismissable either by clicking the X to close or they automatically close after a defined time duration (suggestion is 7 seconds).

{% include 'writing-tips.njk' %}

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
{% include 'markup/toast-success.njk' %}
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
{% include 'markup/toast-danger.njk' %}
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
{% include 'markup/toast-info.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/toasts/" target="_blank">Bootstrap Documentation - Toasts</a>
