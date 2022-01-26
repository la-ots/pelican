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
Modals draw the user's attention to a specific task or piece of information. They are used to present critical information to a user prior to performing a major action, such as conveying an action's consequence (such as cancelling and action) or to confirm a decision. 

Modals block the user from performing other actions on the page. The user cannot interact with anything else until the Modal is closed.

Modals are best kept very short and to the point.

When using Modals:
* All content and all user interface elements must be seen on a single screen height of a small phone
* Any buttons that close the Modal get initial focus
* Do not use Modals to notify a user of a successful or unsuccessful action; Use a [Toast](/components/toasts)
* Do not use Modals as a form
* Use sparingly as overuse is linked to user frustration

### Accessibility
* Modals hold focus until the action is completed or dismissed. 
* Hitting Tab (or Tab + Shift) should only cycle between the buttons inside the Modal. 

Pressing ESC should close or cancel the Modal without performing the prompted action. 

### Technical Notes
Test Modals to ensure they work on older mobile devices and assistive technologies. If the information presented in the Modal cannot easily fit within the non-scrolling height of a mobile device, revise the content. 

Touch screens on older mobile devices have difficulty interpreting touch intents. As a result, Modals may present usage issues for mobile device users. Modals can also present usability problems for assistive technology users.

## Usage

{% include 'markup/modal.njk' %}

``` html
{% include 'markup/modal.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/modal/" target="_blank">Bootstrap Documentation - Modal</a>
