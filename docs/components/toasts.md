---
title: Toasts
summary: Toasts are a lightweight notification relaying information related to the user's actions.
tags: components
layout: guide
eleventyNavigation:
  key: Toasts
  parent: Components
  order: 340
  excerpt: Toasts are a lightweight notification relaying information related to the user's actions.
  img: /img/illustrations/illus-toasts.svg
---

## Best Practices

- Put Toasts at the top right of the screen.
- Toasts use the same [Status Colors](/foundation/status-colors) as Alerts.
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

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wBvNjbq" data-pen-title="Tabbed Content" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/wBvNjbq">
  Tabbed Content</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Resources

- [Bootstrap Documentation - Toasts](https://getbootstrap.com/docs/5.3/components/toasts/)
