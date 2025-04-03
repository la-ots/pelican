---
title: Modal
summary: Modals stop the user for an important change or decision.
tags: components
layout: guide
eleventyNavigation:
  key: Modal
  parent: Components
  order: 200
  excerpt: Modals stop the user for an important change or decision.
  img: /img/illustrations/illus-modals.svg
---

## Best Practices

- Use Modals sparingly.
- Modals are meant to disrupt the user’s flow for important choices.
- On a small phone, all content and all user interface elements must be seen within a single screen height.
- Any buttons that close or cancel the modal should get initial focus.
- Modals hold focus until the action is completed or dismissed.
- Do not use modals to notify a user of a successful or unsuccessful action; Use a [Toast](/components/toasts) instead.
- Do not use forms in a modal.
- Tabbing should only cycle between the buttons inside the Modal.
- For accessibility reasons do not close the modal by tapping the modal backdrop.
- For accessibility reasons pressing ESC should close or cancel the modal.

## Usage

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="XJWOZKL" data-pen-title="Loading Animation" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/XJWOZKL">
  Loading Animation</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Resources

- [Bootstrap Documentation - Modal](https://getbootstrap.com/docs/5.3/components/modal/)
