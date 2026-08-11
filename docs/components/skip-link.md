---
title: Skip Link
summary: Skip Links allow users to skip navigation elements and go straight to content.
tags: components
layout: guide
eleventyNavigation:
  key: Skip Link
  parent: Components
  order: 290
  excerpt: Skip Links allow users to skip navigation elements and go straight to content.
  img: /img/illustrations/illus-skip-link.svg
---

{% for item in collections.all %}
  {% if item.url == "/accessibility/skip-link/" %}
    {{ item.templateContent }}
  {% endif %}
{% endfor %}
