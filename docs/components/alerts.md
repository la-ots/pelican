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

- Put Alerts at the top of the page, under the [Page Title](/components/page-title/).
- Alerts use the [Status Colors](/foundation/status-colors/) for their colors and meaning.
- Status Colors only add visual cues. The content of the Alert must make the meaning obvious to assistive technology users.
- Use **Info** (Blue) to communicate informative or helpful information to users.
- Use **Success** (Green) to provide feedback to the user indicating an action is successful.
- Use **Warning** (Yellow) to indicate an unintended, but not dangerous, effect.   
- Use **Danger** (Red) to indicate an action will cause data loss, error, or other hard-to-reverse effects.
- Use the icons provided for each Alert type.

{% include 'writing-tips.njk' %}


## Usage

### Info Alert

{% include 'markup/alert-info.njk' %}

``` html
{% include 'markup/alert-info.njk' %}
```

### Success Alert

_Note: A successful action can include the successful deletion of an item or file._

{% include 'markup/alert-success.njk' %}

``` html
{% include 'markup/alert-success.njk' %}
```

### Warning Alert

{% include 'markup/alert-warning.njk' %}

``` html
{% include 'markup/alert-warning.njk' %}
```

### Danger Alert

{% include 'markup/alert-danger.njk' %}

``` html
{% include 'markup/alert-danger.njk' %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/alerts/" target="_blank">Bootstrap Documentation - Alerts</a>
