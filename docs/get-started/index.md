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

## Design

Get the [Pelican 2 Design library](https://www.figma.com/community/file/1295790757134814477/pelican-2), available at Figma Community. Use that file to create mockups and designs which connect to the code at [Pelican Design System](https://pelican.ots.la.gov).

## Installation

Installation of Pelican requires [npm](https://www.npmjs.com/).

Install the package for your application:

```bash
npm install --save @la-ots/pelican bootstrap @popperjs/core
```

Pelican is built on top of Bootstrap, so Bootstrap and Popper are expected runtime dependencies for app projects. In most modern npm setups these may be installed automatically, but it is still best to install them explicitly so your app has a predictable dependency tree. For application projects, use regular dependencies rather than `devDependencies` because the CSS and JavaScript are used at runtime.

### Node-based apps

If you are building a Node-based app with a bundler such as Vite, Webpack, or Parcel, import Pelican's compiled assets from the package:

```js
import '@la-ots/pelican/dist/css/pelican.css';
import '@la-ots/pelican/dist/js/pelican.js';
```

### ASP.NET Core MVC apps

For a .NET 8+ MVC application, start by installing the package from npm in the web project folder:

```bash
npm install --save @la-ots/pelican bootstrap @popperjs/core
```

Then copy the compiled assets from the package into your app's static files folder so they are served by ASP.NET Core. A typical workflow is:

```bash
mkdir -p wwwroot/css wwwroot/js
cp node_modules/@la-ots/pelican/dist/css/pelican.min.css wwwroot/css/
cp node_modules/@la-ots/pelican/dist/js/pelican.bundle.min.js wwwroot/js/
```

Reference the files from your shared layout, such as `Views/Shared/_Layout.cshtml`:

```html
<link rel="stylesheet" href="~/css/pelican.min.css" />
<script src="~/js/pelican.bundle.min.js" defer></script>
```

If your MVC app uses a frontend build pipeline, you can also import the assets from your entry point using the same statements shown above for Node-based apps.

### Static sites and manual setup

Installation instructions for the latest version of the package can be found [on NPM](https://www.npmjs.com/package/@la-ots/pelican).

For simple static pages, install the package with npm, then copy the compiled CSS and JS out of `node_modules/@la-ots/pelican/dist/` into a folder your site actually serves (or otherwise host them), and reference them from your HTML using the path where you placed them. The example below assumes the files were copied to `css/` and `js/` folders alongside your HTML:

```html
<link rel="stylesheet" href="/css/pelican.min.css" />
<script src="/js/pelican.bundle.min.js" defer></script>
```

For the recommended font and icon experience, also include [Public Sans](https://fonts.google.com/specimen/Public+Sans) and [Font Awesome](https://fontawesome.com/v5/search?s=solid&ic=free-collection).

## Builds

Included within the package are the following compiled CSS and JS builds:

<div class="visually-hidden">
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
              </ul>
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

<div aria-hidden="true">
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

Bundled versions (`pelican.bundle.*`) include [Bootstrap's JS](https://getbootstrap.com/) and [Popper](https://popper.js.org/).

For proper font and icon display, you should also use the [Public Sans](https://fonts.google.com/specimen/Public+Sans) typeface and [Font Awesome](https://fontawesome.com/v5/search?s=solid&ic=free-collection) library, which are **not provided** in the bundled resources.

Minified builds should be used in the production environments of projects for performance benefits. Un-minified versions should be used in pre-production environments for troubleshooting purposes.

## Usage

Download the package and extract the contents, or copy the compiled assets out of `node_modules/@la-ots/pelican/dist/` into a folder served by your app. The `/css/...` and `/js/...` paths below are just an example of where those files might be hosted, so adjust them to match wherever you placed the files. Include the Pelican files and associated dependencies (typically via CDNs), either bundled or non-bundled:

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

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="/js/pelican.min.js"></script>

</body>
</html>
```
