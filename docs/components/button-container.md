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

- Insert Button Container as the element in the markup of the page.
- See [Buttons](/components/buttons) for guidance on styling and writing buttons.
- Consider buttons’ [action hierarchy](/components/buttons) when assigning button styles.
- Put Warning and Danger buttons to the right of the Button Bar by adding the class `ms-md-auto` added to the first of those buttons.
- It’s best not to show disabled buttons.

## Usage

{% include markup/button-container.njk %}

``` html
{% include markup/button-container.njk %}
```
## Resources
* <a href="https://getbootstrap.com/docs/5.1/components/buttons/" target="_blank">Bootstrap Documentation - Buttons</a>
