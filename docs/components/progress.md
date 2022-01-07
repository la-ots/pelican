---
title: Progress Indicator
summary: Progress Indicators show users their place in a multi-step process.
tags: components
layout: guide
eleventyNavigation:
  key: Progress Indicator
  parent: Components
  order: 250
  excerpt: Progress Indicators show users their place in a multi-step process.
  img: /img/illustrations/illus-progress-indicators.svg
---

## Best Practices

- We use two types of Progress Indicators:
  - Large Progress Indicator
  - Small Progress Indicator
  - Often used on conjunction with [Back and Forward Buttons](/components/back-and-forward-buttons)
- Use a Large Progress Indicator when progress has a defined number of steps 
- The Next/ Previous buttons may not be needed in every implementation
  - **Example**: You may not want a user to be able to move through the steps independent of a set process
- Use a Small Progress Indicator is used when the measured progress is less firm

## Usage
### Large Progress Indicator

{% include markup/progress-large.njk %}

``` html
{% include markup/progress-large.njk %}
```

### Small Progress Indicator

{% include markup/progress-small.njk %}

``` html
{% include markup/progress-small.njk %}
```
