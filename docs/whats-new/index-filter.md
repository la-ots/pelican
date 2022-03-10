---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: title
index: true
excludeFromSidebar: true
eleventyNavigation:
  key: What’s New
  title: What’s New
  order: 1
  excerpt: Pelican Changelog
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

<div class="card shadow-none">
  <div class="card-body">
    <div class="row">
      <div class="col-2">
        <img></img>
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-6">
            <h2><a href="{{ blog.url | url }}">{{ blog.data.title }}</a></h2> 
          </div>
          <div class="col-6">
            {%- for blogTag in blog.data.tags %}
            {%- if blogTag == blog.data.tags[0] %}
            <a href="{{ '/whats-new/tagged/' | url }}{{blogTag}}">{{ blogTag }}</a>
            {%- else -%}
            , <a href="{{ '/whats-new/tagged/' | url }}{{blogTag}}">{{ blogTag }}</a>
            {%- endif %}
            {%- endfor %}
          </div>
          <div class="col">
            <ul>
              {%- for checkitem in blog.data.checklist %}
              <li>{{checkitem}}
              </li> 
              {%- endfor -%}
            </ul>
            <p>{{blog.data.intro}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{% endfor %}
