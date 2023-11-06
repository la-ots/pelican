---
title: Navbar
summary: Navbars allow users to move around digital products.
tags: components
layout: guide
eleventyNavigation:
  key: Navbar
  parent: Components
  order: 210
  excerpt: Navbars allow users to move around digital products.
  img: /img/illustrations/illus-navbar.svg
---

## Best Practice

- Navbars contain links to either another page in the digital product or parts of the current page.
- Tailor them to your agency’s needs by changing some aspects of their appearance.
- Do not remove the word “Menu” from the button that expands the navigation .
- If you emphasize a link, make sure it is either the first or last link in the list.

## Usage

### Brand Minimal Navigation

- Directs users to a single action
- This may be used on a landing page or a single-page website

{% include 'markup/navbar-minimal.njk' %}

```html
{% include 'markup/navbar-minimal.njk' %}
```

### Basic Navigation

- Presents 3 - 5 links to the user
- Contains one visually-emphasized link
- If you emphasize a link, make sure it is either the first or last link in the list

{% include 'markup/navbar-basic.njk' %}

```html
{% include 'markup/navbar-basic.njk' %}
```

### Iconic Links Navigation

- Well-suited for pages behind a login of a web application
- Displays an agency logo
- Features a set of links composed of an Icon over text

{% include 'markup/navbar-iconic.njk' %}

```html
{% include 'markup/navbar-iconic.njk' %}
```

## Resources

- [Bootstrap Documentation - Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Bootstrap Documentation - Navs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)
