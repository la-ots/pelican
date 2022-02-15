---
title: Button Container
summary: The Button Container collects a series of related buttons at bottom of page.
tags: button container
layout: guide
eleventyNavigation:
  key: Button Container
  parent: Components
  order: 70
  excerpt: The Button Container collects a series of related buttons at bottom of page.
  img: /img/illustrations/illus-button-container.svg
---
## Best Practices

- Insert Button Container after the other content, but before any footers.
- See [Buttons](/components/buttons) for guidance on styling and writing buttons.
- If there is only 1 cautionary button, such as a `.btn-warning` or `btn-danger`, then add the class `ml-auto` to it.
- If there are 2 or more cautionary buttons, such as a `.btn-warning` or `btn-danger`, then add the class `ml-auto` to the first.
- Consider buttons’ [action hierarchy](/components/buttons) when assigning button styles.
- Put Warning and Danger buttons to the right of the Button Bar by adding the class `ml-md-auto` added to the first of those buttons.

## Usage

{% include 'markup/button-container.njk' %}

``` html
{% include 'markup/button-container.njk' %}
```
## Resources
* <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
