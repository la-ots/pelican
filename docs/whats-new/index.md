---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: guide
index: true
eleventyNavigation:
  key: What’s New
  title: What’s New
  order: 1
pagination:
  data: collections.blog
  size: 10
  alias: blogs
permalink: "whats-new/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}"
---

## Make Pelican Better

You can help improve Pelican. Visit the [Feedback Page](/feedback) to learn how to become involved.

We’re continually improving Pelican. The following changes are listed by the date we completed each change.


{% for blog in blogs reversed %}
## <a href="{{ blog.url | url }}">{{ blog.data.title }}</a>

{%- for checkitem in blog.data.checklist %}
- {{checkitem}}
{%- endfor %}

{{blog.data.intro}}

{% endfor %}

{% if pagination.href.previous %}<a href="{{ pagination.href.previous }}">Previous</a>{% endif %}
{% if pagination.href.next %}<a href="{{ pagination.href.next }}">Next</a>{% endif %}