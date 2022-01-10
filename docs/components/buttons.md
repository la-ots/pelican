﻿---
title: Buttons
summary: Buttons are interactive elements that trigger actions.
tags: components, buttons
layout: guide
eleventyNavigation:
  key: Buttons
  parent: Components
  order: 60
  excerpt: Buttons are interactive elements that trigger actions.
  img: /img/illustrations/illus-buttons.svg
---

## Best Practices

### Layout

- Always place the primary button on the left, followed by other buttons
- If the primary button has priority over other buttons, use the `$ui-priority` class, other buttons receive the `$ui` class
- If all buttons have equal priority, all receive the `$ui` class
- When a button is disabled, it receives the `$ui-light` class
- If the button has a less dominant position on the page, consider using an outline button
- Try not to overuse the `secondary` and `accent` classes; too many colors can be disorienting for a user
- If the button is inside of a table, it receives the `btn-sm` class
- If an action moves the user to another place in the same page, or another URL, use a link (`<a>`); in all other cases use a `<button>`

### Content

- Button labels must clearly state the action that occurs when the button is pressed
- When writing buttons, use action verbs and precise language; you can also use a noun after the verb to clarify meaning
  - **Examples**: "Edit", "Empty Trash", or "Go to File"
- When including an icon with text, the icon's meaning must match the meaning of the text
  - **Examples**: A trash can icon with the text "Delete"
- When using an icon-only button, the icon must clearly indicate the button's purpose

### Accessibility

- For accessibility reasons, when using a link you must include the `role="button"` attribute on the `<a>`
- If you are using an icon-only button, you must include the appropriate classes for assistive technologies (see markup below)

<hr>

## Usage

### Primary Buttons

<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary">ButtonText</button>
        </div>
    </div>
</div>

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary">ButtonText</button>
        </div>
    </div>
</div> 
```

See [Status Colors](/foundation/status-colors) and [UI Colors](/foundation/ui-colors) for further color guidance.

### Outline Buttons

<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-outline-secondary">Secondary Outline</button>
        </div>
    </div>
</div>

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-outline-secondary">Secondary Outline</button>
        </div>
    </div>
</div> 
```

See [Status Colors](/foundation/status-colors) and [UI Colors](/foundation/ui-colors) for further color guidance.

### Icon-only Button
Assistive technology reads the text of a button to the user to indicate the purpose of the button. Therefore, buttons which do not have text, but only icons, should contain text available to assistive technology.

Icon-only buttons should be used sparingly and only when their meaning is clear to the user. Additionally, status colors should be considered to help reinforce this specific meaning (**Example**: A red warning button with a trash can icon would clearly signal a 'Delete' action).

They should not be used as a way to save space in a design.

<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary btn-sm">
                <span class="fas fa-check" aria-hidden="true"></span>
                <span class="sr-only" aria-hidden="false">Accept</span>
            </button>
        </div>
    </div>
</div>

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary btn-sm">
                <span class="fas fa-check" aria-hidden="true"></span>
                <span class="sr-only" aria-hidden="false">Accept</span>
            </button>
        </div>
    </div>
</div>
```

### Disabled Buttons

- Disabled buttons cannot be clicked and should not appear clickable.
- Do not use Disabled buttons as a placeholder if a feature isn’t ready yet.
- Disabled states can be used for a temporary state change triggered by the user’s actions. Once the action is resolved, the button should return to an enabled state.
- Use the `disabled` attribute to create a disabled button.
- Add the class `disabled` to the class list.
- Be sure to use `tabindex="-1"` to prevent tabbing to that button.

<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>ButtonText</button>
        </div>
        <div class="col-6 col-md-4">
            <a class="btn btn-primary disabled" tabindex="-1" role="button">ButtonText</a>
        </div>
    </div>
</div>

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-6 col-md-4">
            <button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>ButtonText</button>
        </div>
        <div class="col-6 col-md-4">
            <a class="btn btn-primary disabled" tabindex="-1" role="button">ButtonText</a>
        </div>
    </div>
</div> 
```

### Specialized Buttons
Pelican includes a number of pre-made, specialized buttons. Unlike Base buttons, these are constrained to specific usage purposes and only control content near their location.

These include:

- [Back & Forward buttons](/components/back-and-forward-buttons) - Navigate through an application
- [Back to Top button](/components/back-to-top-button) - Move to top of page
- [Previous & Next Section buttons](/components/previous-and-next-buttons)  - Navigate through page sections
- [Add Data buttons](/components/add-data-button) - Add data multiples to an application
- [Page Action buttons](/components/page-actions-button) - Allow users to print, email, or share

## Resources

- <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
