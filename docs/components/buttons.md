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

- Always place the primary action’s button on the left, followed by other buttons.
- It’s best not to show disabled buttons.
- If disabled buttons must be shown, be sure to add the `disabled` attribute.
- Use only one primary button when possible.
- Multiple gray outline buttons may be used.
- If an action moves the user to another place in the same page, or another URL, use a link (`<a>`) and not `<button>`.
- If a button is inside of a table row, give it the `btn-sm` class in addition to other classes.
- For accessibility reasons, when using `<a>` as a `<button>` you must include `role="button"`.

<p class="fw-bold mt-4">Button Hierarchies</p>

- For a single action: only include the [Primary button](/components/buttons/#primary-buttons).
- For two types of actions: use the primary button as the main action and [gray outline buttons](/components/buttons/#tertiary-buttons) as the tertiary action(s).
- For three types of actions:  use the primary button as the main action, use the [Secondary button](/components/buttons/#secondary-buttons) as the secondary action, and the gray outline buttons as the tertiary action(s).
- If a fourth or more types of actions are required, use the [Link Buttons](/components/buttons/#link-buttons) for those, in addition to the types above.
- Any cautionary buttons, [Warning](/components/buttons/#warning-buttons) or [Danger](/components/buttons/#danger-buttons), should be right aligned tin the button container.
- Consider a [Button Container](/components/button-container/) to hold all of the buttons.

<p class="fw-bold mt-4">Single Level</p>

<div class="d-grid gap-2 d-md-flex">
<button type="button" class="btn btn-primary">Button</button>
<button type="button" class="btn btn-warning ms-md-auto">Warning</button>
</div>

{% include markup/divider-minor.njk %}

<p class="fw-bold mt-4">Two Levels</p>

<div class="d-grid gap-2 d-md-flex">
<button type="button" class="btn btn-primary">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-warning ms-md-auto">Warning</button>
</div>

{% include markup/divider-minor.njk %}

<p class="fw-bold mt-4">Three Levels</p>

<div class="d-grid gap-2 d-md-flex">
<button type="button" class="btn btn-primary">Button</button>
<button type="button" class="btn btn-secondary">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-warning ms-md-auto">Warning</button>
<button type="button" class="btn btn-danger ">Danger</button>
</div>

{% include markup/divider-minor.njk %}

<p class="fw-bold mt-4">Four or More Levels</p>

<div class="d-grid gap-2 d-md-flex">
<button type="button" class="btn btn-primary">Button</button>
<button type="button" class="btn btn-secondary">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-outline-ui">Button</button>
<button type="button" class="btn btn-link">Button</button>
<button type="button" class="btn btn-link">Button</button>
<button type="button" class="btn btn-link">Button</button>
<button type="button" class="btn btn-warning ms-md-auto">Warning</button>
<button type="button" class="btn btn-danger ">Danger</button>
</div>

{% include markup/divider-minor.njk %}

<p class="fw-bold mt-4">Writing Buttons</p>

- Button labels must clearly state the action that occurs when the button is pressed.
- Use action verbs and precise language. Use a noun after the verb to clarify meaning. For example: "Edit", "Empty Trash", or "Go to File".
- When including an icon with text, the icon's meaning must match the meaning of the text.

{% include writing-tips.njk %}

## Usage

**Primary Buttons**

<button type="button" class="btn btn-primary">Button</button>

```html
<button type="button" class="btn btn-primary">Button</button>
```

**Secondary Buttons**

<button type="button" class="btn btn-secondary">Button</button>

```html
<button type="button" class="btn btn-secondary">Button</button>
```

**Tertiary Buttons**

<button type="button" class="btn btn-outline-ui">Button</button>

```html
<button type="button" class="btn btn-outline-ui">Button</button>
```

**Link Buttons**

 <button type="button" class="btn btn-link">Button</button>

```html
<button type="button" class="btn btn-link">Button</button>
```

**Danger Buttons**

<button type="button" class="btn btn-danger">Button</button>

```html
 <button type="button" class="btn btn-danger">Button</button>
```

**Warning Buttons**

<button type="button" class="btn btn-warning">Button</button>

```html
<button type="button" class="btn btn-warning">Button</button>
```

**Icons in Buttons**

- Review Pelican’s [Icon](/foundation/icons/) guidance
- Put the icon on the left or the right side.
- Icons in Button are mostly on the left. Buttons on the right are meant for directional actions such as going to a link, sign in, or sign out actions.
- Ensure icons have `aria-hidden="true"` to hide them from assistive technology

<button type="button" class="btn btn-primary">
  <span class="fas fa-check" aria-hidden="true"></span> 
  Button
</button>
<button type="button" class="btn btn-primary">
  Button
  <span class="fas fa-sign-in-alt" aria-hidden="true"></span> 
</button>

```html
<button type="button" class="btn btn-primary">
  <span class="fas fa-check" aria-hidden="true"></span> 
  Button
</button>
<button type="button" class="btn btn-primary">
  Button
  <span class="fas fa-sign-in-alt" aria-hidden="true"></span> 
</button>
```


**Icon-only Button**

- The icon must clearly indicate the button’s purpose.
- Add descriptive text for assisitive technology users. This includes special classes and attributes in the sample code. Your project may need more than what’s included here.

<button type="button" class="btn btn-outline-ui">
    <span class="fas fa-check" aria-hidden="true"></span>
    <span class="sr-only" aria-hidden="false">Accept Terms</span>
</button>

```html
<button type="button" class="btn btn-primary btn-sm">
    <span class="fas fa-check" aria-hidden="true"></span>
    <span class="sr-only" aria-hidden="false">Accept Terms</span>
</button>
```

**Disabled Buttons**

- It’s best not to show disabled buttons.
- Disabled buttons cannot be clicked and should not appear clickable.
- Do not use Disabled buttons as a placeholder if a feature isn’t ready yet.
- Disabled states can be used for a temporary state change triggered by the user’s actions. Once the action is resolved, the button should return to an enabled state.
- Use the `disabled` attribute to create a disabled button.
- Add the class `disabled` to the class list.
- Be sure to use `tabindex="-1"` to prevent tabbing to that button.

<button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>Button</button>

```html
<button type="button" class="btn btn-primary disabled" tabindex="-1" disabled>Button</button>
```

## Resources

- <a href="https://getbootstrap.com/docs/5.1/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
