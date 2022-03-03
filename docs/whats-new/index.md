---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: page
index: true
eleventyNavigation:
  key: What’s New
  title: What’s New
  order: 1
pagination:
  data: collections.blog
  size: 10
  alias: blogs
permalink: "whats-new/page-{{ pagination.pageNumber + 1 }}/"
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

<hr class="major opacity-50 mb-0"/>
<div class="container-fluid py-12">
  <div class="row justify-content-between">
    <div class="col-6 col-md-3 col-lg-2">
      {%- if pagination.href.previous %}
      <a href="{{ pagination.href.previous }}" class="btn btn-primary btn-shadow btn-block" id="btnBack">
        <span class="fas fa-arrow-left fa-xs" aria-hidden="true"></span>
        Previous
      </a>
      {%- endif %}
    </div>
    <div class="col-6 col-md-3 col-lg-2 text-right">
      {%- if pagination.href.next %}
      <a href="{{ pagination.href.next }}" class="btn btn-primary btn-shadow btn-block" id="btnForward">
        Next
        <span class="fas fa-arrow-right fa-xs" aria-hidden="true"></span>
      </a>
      {%- endif %}
    </div>
  </div>
</div>