---
title: Breadcrumbs
summary: Breadcrumbs show users where the current page is in relation to other pages on the site.
tags: components, breadcrumbs
layout: guide
eleventyNavigation:
  key: Breadcrumbs
  parent: Components
  order: 50
  excerpt: Breadcrumbs show users where the current page is in relation to other pages on the site.
  img: /img/illustrations/illus-breadcrumbs.svg
---

## Best Practices

- Breadcrumbs give the user a way to travel up the information hierarchy of the digital product
- Breadcrumbs are not primary navigation
- They are best used for products requiring multiple levels of navigation
- They are not used to show a user the path they took to navigate to the current page
- They show the user their current place within the site or app’s hierarchy
- The Home icon always goes to the Homepage.
- On smaller devices, breadcrumbs only display the current page and a link to its parent in the information hierarchy.
- Place Breadcrumbs immediately above the Page Title UI Block.

## Usage

{% include markup/breadcrumbs.njk %}

``` html
{% include markup/breadcrumbs.njk %}
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/breadcrumb/" target="_blank">Bootstrap Documentation - Breadcrumb</a>
