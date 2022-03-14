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

{% for blog in blogs %}

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
            <a href="{{ '/whats-new/tagged/' | url }}{{blogTag | slug}}">{{ blogTag }}</a>
            {%- else -%}
            , <a href="{{ '/whats-new/tagged/' | url }}{{blogTag | slug}}">{{ blogTag }}</a>
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
