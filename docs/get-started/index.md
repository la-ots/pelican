---
title: Get Started
summary: Get a quick start using Pelican.
tags: get started
layout: guide
eleventyNavigation:
  key: Get Started
  order: 2
  excerpt: Get a quick start using Pelican.
---

## Installation

Installation of Pelican requires [npm](https://www.npmjs.com/).

Installation instructions for the latest version of the package can be found [on NPM](https://www.npmjs.com/package/@la-ots/pelican). 

## Builds

Included within the package are the following compiled CSS and JS builds:

<div class="sr-only">
  <ul>
    <li>pelican
      <ul>
        <li>dist /
          <ul>
            <li>css /
              <ul>
                <li>pelican.css</li>
                <li>pelican.css.map</li>
                <li>pelican.min.css</li>
                <li>pelican.min.css.map</li>
              </li>
            </li>
          </ul>
          <ul>
            <li>js /
              <ul>
                <li>pelican.bundle.js</li>
                <li>pelican.bundle.js.map</li>
                <li>pelican.bundle.min.js</li>
                <li>pelican.bundle.js.min.map</li>
                <li>pelican.esm.js</li>
                <li>pelican.esm.js.map</li>
                <li>pelican.esm.min.js</li>
                <li>pelican.esm.min.js.map</li>
                <li>pelican.js</li>
                <li>pelican.js.map</li>
                <li>pelican.min.js</li>
                <li>pelican.min.js.map</li>
              </ul>
            </li>
          </ul>
        </li>      
      </ul>
    </li>
  </ul>
</div>

<div class="" aria-hidden="true">
<pre>
pelican
└── dist/
    ├── css/
    |   ├── pelican.css
    |   ├── pelican.css.map
    |   ├── pelican.min.css
    |   └── pelican.min.css.map
    └── js/
        ├── pelican.bundle.js
        ├── pelican.bundle.js.map
        ├── pelican.bundle.min.js
        ├── pelican.bundle.js.min.map
        ├── pelican.esm.js
        ├── pelican.esm.js.map
        ├── pelican.esm.min.js
        ├── pelican.esm.min.js.map
        ├── pelican.js
        ├── pelican.js.map
        ├── pelican.min.js
        └── pelican.min.js.map
</pre>
</div>

The Pelican Design System, provides compiled CSS and JS (`pelican.*`) or compiled and minified CSS and JS (`pelican.min.*`). Source maps are available as well (`pelican.*.map`).

Bundled versions (`pelican.bundle.*`) include [Bootstrap's JS](https://getbootstrap.com/), [Popper](https://popper.js.org/) and [jQuery](https://jquery.com/).

For proper font and icon display, you should also use the [Public Sans](https://fonts.google.com/specimen/Public+Sans) typeface and [Font Awesome](https://fontawesome.com/) library, which are **not provided** in the bundled resources.

Minified builds should be used in the production environments of projects for performance benefits. Un-minified versions should be used in pre-production environments for troubleshooting purposes.

## Usage

Download the package and extract the contents. Include the Pelican files and associated dependencies (typically via CDNs), either bundled or non-bundled:

```html
<head>
    ...
    <link href="/css/pelican.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/brands.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900" rel="stylesheet">
    ...
</head>
<body>
...

    <script src="/js/pelican.bundle.min.js"></script>

[or]

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/popper.min.js" integrity="sha384-wtNlGLUJ2I0nMcuD4N4C2l3SrJdgaRpeu64hbXM9GHBPIEAQZqtmrvsJZAIL10I0" crossorigin="anonymous"></script>
    <script src="/js/pelican.min.js"></script>

</body>
</html>
```
