---
title: Background Texture
summary: Scalable vector graphic backgrounds which can add an ecological flavor to projects which use Pelican.
tags: background texture
layout: guide
eleventyNavigation:
  key: Background Texture
  parent: Extras
  order: 1
  excerpt: Scalable vector graphic backgrounds which can add an ecological flavor to projects which use Pelican.
  img: /img/illustrations/illus-bg-tile.png
---

## Best Practices

Themed background texture tiles were included in Pelican by default using SVG inlined in the CSS. You can see an example of it in action in the [Get Started section of the Pelican home page](/). This added considerable weight to the CSS so this has been changed so that these themed textures are optionally loaded. The background colors of these optional CSS files can be themed using CSS variables.

## Usage

Load these CSS files in the `<head>` section of your project after Pelican CSS and your theme file. For example, the following might be a way to load them:

```html
<head>
    <link href="css/pelican.min.css" rel="stylesheet">
    <link href="css/your-theme.css" rel="stylesheet">
    <link href="css/bg-texture.css" rel="stylesheet">
</head>
```

To apply the textured background, add its class and any background color classes. In our example you can get a preview. We manually add padding and margins to the example to make it easier to review.

```html
<div class="mb-1 p-8 bg-texture bg-primary">...</div>
<div class="mb-1 p-8 bg-texture bg-secondary"></div>
<div class="mb-1 p-8 bg-texture bg-accent"></div>
<div class="mb-1 p-8 bg-texture bg-ui"></div>
```

<div class="mb-1 p-8 bg-texture bg-primary"></div>
<div class="mb-1 p-8 bg-texture bg-secondary"></div>
<div class="mb-1 p-8 bg-texture bg-accent"></div>
<div class="mb-1 p-8 bg-texture bg-ui"></div>

You can get it at the following locations:

- Default Texture: [bg-texture.css](/css/bg-texture.css)
