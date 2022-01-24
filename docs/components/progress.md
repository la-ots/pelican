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

- Use the Small Progress Indicator when the progress is hard to divide into clean segment.
- Use the Large Progress Indicator when the progress can be easily divided into segments.
- Use them in conjunction with [Back and Forward Buttons](/components/back-and-forward-buttons).
- Put the current step’s info into the `<title>` within the `<head>`.
- 

## Usage

### Small Progress Indicator

{% include markup/progress-small.njk %}

``` html
{% include markup/progress-small.njk %}
```

### Large Progress Indicator

{% include markup/progress-large.njk %}

``` html
{% include markup/progress-large.njk %}
```
