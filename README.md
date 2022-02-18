# Pelican Design System

The Pelican Design System package is a customized [Bootstrap](https://getbootstrap.com/) theme for use within OTS projects.

## Installation

### NPM 
Installation of the Pelican Design System requires [npm](https://www.npmjs.com/).

### Manual

Download the package and extract the contents.  Include the Pelican files and associated dependencies (typically via CDNs), either bundled or non-bundled:

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

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/popper.min.js" integrity="sha384-wtNlGLUJ2I0nMcuD4N4C2l3SrJdgaRpeu64hbXM9GHBPIEAQZqtmrvsJZAIL10I0" crossorigin="anonymous"></script>
    <script src="/js/pelican.min.js"></script>

</body>
</html>
```

## What's Included?

Within the installed package you'll find the following CSS and JS resources:

```
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
```

The Pelican Design System, provides compiled CSS and JS (`pelican.*`) or compiled and minified CSS and JS (`pelican.min.*`). Source maps are available as well (`pelican.*.map`). 

Bundled versions (`pelican.bundle.*`) include [Bootstrap's JS](https://getbootstrap.com/), [Popper](https://popper.js.org/) and [jQuery](https://jquery.com/).

For proper font and icon display, you should also use the [Public Sans](https://fonts.google.com/specimen/Public+Sans) typeface and [Font Awesome](https://fontawesome.com/) library, which are **not provided** in the bundled resources.

## Documentation

Documentation can be found at the [Pelican Documentation](https://pelican.ots.la.gov) website.

## Contributing

WIP

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

