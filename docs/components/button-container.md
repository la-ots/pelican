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
- If there are 1 or more cautionary buttons, such as a `.btn-warning` or `btn-danger`, then add the class `ms-md-auto` to the first one in the source.
- Consider buttons’ [action hierarchy](/components/buttons) when assigning button styles.

## Usage

{% include 'markup/button-container.njk' %}

``` html
{% include 'markup/button-container.njk' %}
```
## Resources
* [Bootstrap Documentation - Buttons](https://getbootstrap.com/docs/5.2/components/buttons/)
