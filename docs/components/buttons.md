---
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

**Layout**

- Always place the primary action’s button on the left, followed by other buttons.
- It’s best not to show disabled buttons.
- If disabled buttons must be shown, be sure to add the `disabled` attribute.
- Use only one primary button when possible.
- Multiple gray outline buttons may be used.
- If an action moves the user to another place in the same page, or another URL, use a link (`<a>`) and not `<button>`.
- If a button is inside of a table row, give it the `btn-sm` class in addition to other classes.
- For accessibility reasons, when using `<a>` as a `<button>` you must include `role="button"`.

**Content**

- Button labels must clearly state the action that occurs when the button is pressed.
- When writing buttons, use action verbs and precise language; you can also use a noun after the verb to clarify meaning.
  - **Examples**: "Edit", "Empty Trash", or "Go to File".
- When including an icon with text, the icon's meaning must match the meaning of the text.
  - **Examples**: A trash can icon with the text "Delete".
- When using an icon-only button, the icon must clearly indicate the button's purpose.

**Accessibility**

- For accessibility reasons, when using `<a>` to perform a data action, you must include the `role="button"` attribute on the `<a>`.
- If you are using an icon-only button, you must include the appropriate classes for assistive technologies (see markup below).

<hr>

## Usage

See [Status Colors](/foundation/status-colors) and [UI Colors](/foundation/ui-colors) for further color guidance.

### Primary Buttons

<button type="button" class="btn btn-primary">ButtonText</button>

```html
<button type="button" class="btn btn-primary">ButtonText</button>
```

### Outline Buttons

<button type="button" class="btn btn-outline-ui">UI Outline</button>

```html
<button type="button" class="btn btn-outline-ui">UI Outline</button>
```

### Icon-only Button

- Add text available to assistive technology.
- Use sparingly and only when their meaning is clear to the user.

<button type="button" class="btn btn-primary btn-sm">
  <span class="fas fa-check" aria-hidden="true"></span>
  <span class="sr-only" aria-hidden="false">Accept</span>
</button>

```html
<button type="button" class="btn btn-primary btn-sm">
  <span class="fas fa-check" aria-hidden="true"></span>
  <span class="sr-only" aria-hidden="false">Accept</span>
</button>
```

### Dropdown Buttons

- Contains a list of links, using the `<a>` element.
- It’s not the same thing as the [Select Menu used in Forms](/form-controls/select/).
- Keep the text in the links brief.
- Appearance can be changed like other buttons.

<div class="dropdown">
  <button class="btn btn-outline-ui dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-outline-ui dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
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

<button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>ButtonText</button> <a class="btn btn-primary disabled" tabindex="-1" role="button">ButtonText</a>

```html
<button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>ButtonText</button>
<a class="btn btn-primary disabled" tabindex="-1" role="button">ButtonText</a> 
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