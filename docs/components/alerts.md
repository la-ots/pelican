---
title: Alerts
summary:  Alerts communicate system or data statuses, such as warnings, to users.
tags: components, alerts
layout: guide
eleventyNavigation:
  key: Alerts
  parent: Components
  order: 10
  excerpt: Alerts communicate system or data statuses, such as warnings, to users.
  img: /img/illustrations/illus-alerts.svg
---

## Best Practices

Alerts are way to inform users of important information. They are usually placed at the top of the page, under the [Page Title](/components/page-title/).

## Choosing Alert Style

Alerts use the [Status Colors](/theming/color) and correlate to the same meanings.

Status Colors only add visual meaning. This is not communicated to users with assistive technologies, such as screen readers. The content of Alerts must make the meaning of the Alert obvious to the user.

Alerts types are situational and related to system statuses. We use 4 types:

* **Info** (Blue) communicates informative or helpful information to users    
* **Success** (Green) provides feedback to the user indicating an action is successful
* **Warning** (Yellow) indicates an unintended, but not dangerous, effect    
* **Danger** (Red) indicates an action will cause data loss, error, or other hard-to-reverse effects

## Writing Alerts

When writing alert messages, keep the following in mind:

* Be clear and specific
* Use <a href="https://plainlanguage.gov/" target="_blank">Plain Language</a>, not technical jargon
* Do not blame the user
* Avoid negative language
* Avoid using all uppercase letters unless you are using Acronyms
* Provide useful information


## Usage
### Info Alert
* **Info** (Blue) communicates informative or helpful information to users
* Use the <a href="https://fontawesome.com/icons/info-circle?style=solid" target="_blank">info symbol in a circle</a> as the icon

{% include "markup/alert-info.njk" %}

``` html
{% include "markup/alert-info.njk" %}
```

### Success Alert
* **Success** (Green) provides feedback to the user indicating an action is successful
* Use a <a href="https://fontawesome.com/icons/check-circle?style=solid" target="_blank">check in a circle</a> as the icon

_Note: A successful action can include the successful deletion of an item or file._

{% include "markup/alert-success.njk" %}

``` html
{% include "markup/alert-success.njk" %}
```

### Warning Alert
* **Warning** (Yellow) indicates an unintended, but not dangerous, effect
* Use the <a href="https://fontawesome.com/icons/exclamation-circle?style=solid" target="_blank">exclamation mark in a circle</a> as the icon

{% include "markup/alert-warning.njk" %}

``` html
{% include "markup/alert-warning.njk" %}
```

### Danger Alert
* **Danger** (Red) indicates an action will cause data loss, error, or other hard-to-reverse effects
* Use the <a href="https://fontawesome.com/icons/exclamation-triangle?style=solid" target="_blank">exclamation mark in a triangle</a> as the icon

{% include "markup/alert-danger.njk" %}

``` html
{% include "markup/alert-danger.njk" %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/alerts/" target="_blank">Bootstrap Documentation - Alerts</a>
