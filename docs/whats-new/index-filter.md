---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: title
index: true
eleventyNavigation:
  key: Tags
  title: Tags
  order: 1
  excerpt: Pelican Changelog
  hideChild: true
pagination:
  data: collections
  size: 1
  alias: tag
permalink: "whats-new/tagged/{{tag | slug}}/"
---
## Make Pelican Better

You can help improve Pelican. Visit the [Feedback Page](/feedback) to learn how to become involved.

We’re continually improving Pelican. The following changes are listed by the date we completed each change.

{% for blog in collections[tag] %}
## <a href="{{ blog.url | url }}">{{ blog.data.title }}</a>

{% for blogTag in blog.data.tags %}
<a href="{{ '/whats-new/tagged/' | url }}{{blogTag}}">{{ blogTag }}</a>
{%- endfor %}

{%- for checkitem in blog.data.checklist %}
- {{checkitem}}
{%- endfor %}

{{blog.data.intro}}

{% endfor %}
