---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: default-pagination
index: true
eleventyNavigation:
  key: NewsBlog
  title: What’s New
  order: 1
  excerpt: Pelican Changelog
  hideChild: true
pagination:
  data: collections.blog
  size: 10
  alias: blogs
  reverse: true
permalink: "whats-new/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber | plus: 1 }}/{% endif %}"
---

## Make Pelican Better

You can help improve Pelican. Visit the [Feedback Page](/feedback) to learn how to become involved.

We’re continually improving Pelican. The following changes are listed by the date we completed each change.

{% for blog in blogs %}
## <a href="{{ blog.url | url }}">{{ blog.data.title }}</a>

{% for blogTag in blog.data.tags %}
<a href="{{ '/whats-new/tagged/' | url }}{{blogTag}}">{{ blogTag }}</a>
{%- endfor %}

{%- for checkitem in blog.data.checklist %}
- {{checkitem}}
{%- endfor %}

{{blog.data.intro}}

{% endfor %}
