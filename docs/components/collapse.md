---
title: Collapse
summary: Collapses allow users to toggle the visibility of content.
tags: components,collapse
layout: guide
eleventyNavigation:
  key: Collapse
  parent: Components
  order: 150
  excerpt: Collapses allow users to toggle the visibility of content.
  img: /img/illustrations/illus-collapses.svg
---

## Best Practices

- Collapses give users control over how much information they see at one time.
- A common use of Collapses is for a “Question and Answer” item on a FAQ page. 
- Use the native HTML tag for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">Details disclosure Element</a> as Collapses whenever possible.

## Usage

{% include 'markup/component-collapse.njk' %}

``` html
{% include 'markup/component-collapse.njk' %}
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/collapse/" target="_blank">Bootstrap Documentation - Collapse</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">Details disclosure Element</a>
