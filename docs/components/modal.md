---
title: Modal
summary: Modals stop the user for an important change or decision.
tags: components
layout: docs/guide
eleventyNavigation:
  key: Modal
  parent: Components
  order: 190
  excerpt: Modals stop the user for an important change or decision.
  img: /img/illustrations/illus-modals.svg
---

## Best Practices

- Use Modals sparingly.
- Modals are meant to disrupt the user’s flow for important choices.
- On a small phone, all content and all user interface elements must be seen within a single screen height.
- Any buttons that close or cancel the Modal should get initial focus.
- Modals hold focus until the action is completed or dismissed. 
- Do not use Modals to notify a user of a successful or unsuccessful action; Use a [Toast](/components/toasts) instead.
- Do not use Forms in a Modal.
- Tabbing should only cycle between the buttons inside the Modal.
- For accessibility reasons do not close the Modal by tapping the Modal backdrop.
- For accessibility reasons pressing the key escape (ESC) should close or cancel the Modal.

## Usage

{% include 'markup/components/modal.njk' %}

``` html
{% include 'markup/components/modal.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/5.1/components/modal/" target="_blank">Bootstrap Documentation - Modal</a>
