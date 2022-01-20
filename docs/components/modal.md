---
title: Modal
summary: Modals stop the user for an important change or decision.
tags: components
layout: guide
eleventyNavigation:
  key: Modal
  parent: Components
  order: 190
  excerpt: Modals stop the user for an important change or decision.
  img: /img/illustrations/illus-modals.svg
---

## Best Practices

- On a small phone, all content and all user interface elements must be seen within a single screen height
- Any buttons that close or cancel the modal should get initial focus.
- Modals hold focus until the action is completed or dismissed. 
- Do not use modals to notify a user of a successful or unsuccessful action; Use a [Toast](/components/toasts) instead.
- Do not use forms in a modal.
- Use Modals sparingly.
- Tabbing should only cycle between the buttons inside the Modal.
- For accessibility reasons do not close the modal by tapping the modal backdrop.
- For accessibility reasons pressing ESC should close or cancel the modal.


## Usage

### Default Modal

{% include markup/modal-default.njk %}

``` html
{% include markup/modal-default.njk %}
```

### Small Modal

{% include markup/modal-small.njk %}

``` html
{% include markup/modal-small.njk %}
```

### Large Modal

{% include markup/modal-large.njk %}

``` html
{% include markup/modal-large.njk %}
```

### Extra Large Modal

{% include markup/modal-xl.njk %}

``` html
{% include markup/modal-xl.njk %}
```

## Resources
* <a href="https://getbootstrap.com/docs/5.1/components/modal/" target="_blank">Bootstrap Documentation - Modal</a>
