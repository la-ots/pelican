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
- If an action moves the user to another place in the same page, or another URL, use a link `<a>` and not `<button>`.
- If a button is inside of a table row, add the `btn-sm` class in addition to other classes.
- For accessibility reasons, when using `<a>` as a `<button>` you must include `role="button"`.
- Button labels must clearly state the action that occurs when the button is pressed.
- When writing buttons, use action verbs and precise language; you can also use a noun after the verb to clarify meaning.
  - **Examples**: "Edit", "Empty Trash", or "Go to File".
- When including an icon with text, the icon's meaning must match the meaning of the text.
  - **Examples**: A trash can icon with the text "Delete".
- When using an icon-only button, the icon must clearly indicate the button's purpose.
- For accessibility reasons, when using `<a>` to perform a data action, you must include the `role="button"` attribute on the `<a>`.
- If you are using an icon-only button, you must include the appropriate classes for assistive technologies (see markup below).
- Try to avoid icon-only button unless the action word is known to voice control users.

<hr>

## Usage

See [Status Colors](/foundation/status-colors) and [UI Colors](/foundation/ui-colors) for further color guidance.

### Provided Buttons

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="emYxJyL" data-pen-title="Buttons" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/emYxJyL">
  Buttons</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

### Icon-only Button

- Add text available to assistive technology.
- Use sparingly and only when their meaning is clear to the user.
- Consider omitting icon-only buttons as VoiceControl users may not be able to invoke them.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PwoVZVm" data-pen-title="Buttons" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/PwoVZVm">
  Buttons</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

### Dropdown Buttons

- Contains a list of links, using the `<a>` element.
- It’s not the same thing as the [Select Menu](/form-controls/select/) used in Forms.
- Keep the text in the links brief.
- Appearance can be changed like other buttons.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wBvNMOr" data-pen-title="Buttons icon only" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/wBvNMOr">
  Buttons icon only</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

### Disabled Buttons

- Disabled buttons cannot be clicked and should not appear clickable.
- Do not use Disabled buttons as a placeholder if a feature isn’t ready yet.
- Disabled states can be used for a temporary state change triggered by the user’s actions. Once the action is resolved, the button should return to an enabled state.
- Use the `disabled` attribute to create a disabled button.
- Add the class `disabled` to the class list.
- Be sure to use `tabindex="-1"` to prevent tabbing to that button.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bNGzEJa" data-pen-title="Buttons" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/bNGzEJa">
  Buttons</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Resources

- [Bootstrap Documentation - Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
