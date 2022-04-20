---
title: App Screen
summary: The App Screen is the container for your digital product. 
tags: basic view, sidenav, topbar
layout: guide
eleventyNavigation:
  key: App Screen
  parent: Components
  order: 20
  excerpt: The App Screen is the container for your digital product. 
  img: /img/illustrations/illus-app-screen.svg
---

## Best Practice

For projects requiring a sidebar navigation the App Screen provides the basic user interface frame. It contains 5 parts. The bottom of this page will display the markup pattern after the 5 parts have been explained.

1. Site Container, `id=site-container`
1. Sidebar with Navigation, `id=site-nav`
1. Topbar, `id=site-topbar`
1. Main Wrapper, `id=main`
1. Footer, `id=footer`

## Usage

Everything considered part of the App Screen is placed into the `id=site-container`. This is out the outermost `div`. The Skip Link goes above it in markup. The Footer and Back to Top button go below it in markup.

```html
{% include 'markup/skip-link.njk' %}
<div id="site-container" class="site-container">
  ...
</div>
{% include 'markup/button-back-to-top.njk' %}
```

## Sidebar with Navigation

The first child element of the `id=site-container` is the [Sidebar with Navigation](/components/sidebar-nav/). This is the `nav`. For small devices like smartphones, it makes responsive adjustments. Add Top Level and Child Level items as needed.

- Used in the App Screen.
- Presents only two levels of navigation.
- Current pages get the class `active` added to the class list of the `li` and `a` which hold the link.
- Current child pages also get the eye icon, <span class="fas fa-eye" aria-hidden="true"></span>. The same icon is used in [Breadcrumbs](/components/breadcrumbs) to indicate the current page.

```html
<nav id="site-nav" class="site-nav">
  ...
</nav>
```

## Topbar

The Topbar also goes inside of the `id="site-container"`. The Topbar contains a hamburger button to show and hide the Sidebar with Navigation and the current page title.

```html
<div id="site-topbar" class="site-topbar">
  ...
</div>
```

## Main Content

This `main id="main"` element is where the screen’s contents and user interface items are placed. This is also the target for the [Skip Link](/accessibility/skip-link/).

```html
<main id="main" class="site-main">
  ...
</main>
```

## Footer

After the `main id="main"` put the Footer element.

```html
<footer class="footer" id="footer">
  ...
</footer>
```

## Putting It All Together

The App Screen markup below is how all the 5 parts are assembled.

```html
<div id="site-container" class="site-container">
  <nav id="site-nav" class="site-nav">  ...  </nav>
  <div id="site-topbar" class="site-topbar">  ...  </div>
  <main id="main" class="site-main">  ...  </main>
  <footer class="footer" id="footer">  ...  </footer>
</div>
```
