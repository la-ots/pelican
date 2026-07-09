# Pelican Design System

The Pelican Design System package is a customized [Bootstrap](https://getbootstrap.com/) theme for use within OTS projects.

## Installation

### NPM

Installation of the Pelican Design System requires [npm](https://www.npmjs.com/).

Install the package for your application:

```bash
npm install --save @la-ots/pelican bootstrap @popperjs/core
```

Pelican is built on top of Bootstrap, so Bootstrap and Popper are expected runtime dependencies for app projects. In most modern npm setups these may be installed automatically, but it is still best to install them explicitly so your app has a predictable dependency tree. For application projects, use regular dependencies rather than `devDependencies` because the CSS and JavaScript are used at runtime.

#### Node-based applications

If you are building a Node-based app with a bundler such as Vite, Webpack, or Parcel, import Pelican's compiled assets from the package:

```js
import '@la-ots/pelican/dist/css/pelican.css';
import '@la-ots/pelican/dist/js/pelican.js';
```

#### ASP.NET Core MVC applications

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

For the recommended font and icon experience, also include [Public Sans](https://fonts.google.com/specimen/Public+Sans) and [Font Awesome](https://fontawesome.com/v5/search?s=solid&ic=free-collection).

### Manual

Download the package and extract the contents. Include the Pelican files and associated dependencies (typically via CDNs), either bundled or non-bundled:

```html
<head>
    ...
    <link href="/css/pelican.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/brands.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
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

## What's Included?

The Pelican Design System, provides compiled CSS and JS (`pelican.*`) or compiled and minified CSS and JS (`pelican.min.*`). Source maps are available as well (`pelican.*.map`).

Bundled versions (`pelican.bundle.*`) include [Bootstrap's JS](https://getbootstrap.com/) and [Popper](https://popper.js.org/).

For proper font and icon display, you should also use the [Public Sans](https://fonts.google.com/specimen/Public+Sans) typeface and [Font Awesome](https://fontawesome.com/v5/search?s=solid&ic=free-collection) library, which are **not provided** in the bundled resources.

Within the installed package you'll find the following CSS and JS resources in the `pelican/dist` folder:

### css/
- pelican.css
- pelican.css.map
- pelican.min.css
- pelican.min.css.map

### js/
- pelican.bundle.js
- pelican.bundle.map
- pelican.bundle.min.js
- pelican.bundle.min.js.map
- pelican.esm.js
- pelican.esm.js.map
- pelican.esm.min.js
- pelican.esm.min.js.map
- pelican.js
- pelican.js.map
- pelican.min.js
- pelican.min.js.map

## Documentation

Documentation can be found at the [Pelican Documentation](https://pelican.ots.la.gov) website.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting issues, proposing changes, and the local development workflow.

## Local Development

First, ensure all dependencies are installed on your local machine:

> $ npm install

Once installed, test building all of the Pelican assets. Assets will build into the `dist` directory of the project's root.

> $ npm run build-dist

To build documentation: (documentation is build into the `dist\docs` directory)

> $ npm run build-dist-docs

### Development Workflow

It is recommended you run the `watch` command which will observe the asset directories and rebuild on any file changes:

> $ npm run watch

There is a comparable script for the documentation development workflow:

> $ npm run watch:docs

Documentation is generated using [Eleventy](https://www.11ty.dev/). Learn more about Eleventy via its [documentation](https://www.11ty.dev/docs/).

### Linting

Linting scripts for both CSS/SASS and Javascript:

> $ npm run lint

This will run linters across the codebase. Scripts to run linters separately are provided as:

> $ npm run css:lint
>
> $ npm run js:lint

Note: Linters are not run as part of any `watch` scripts and must be run separately.
