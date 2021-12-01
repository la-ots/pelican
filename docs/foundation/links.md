---
title: Links
summary: Links allow users to change locations.
tags: foundation
layout: guide
eleventyNavigation:
  key: Links
  parent: Foundation
  order: 7
  excerpt: Links allow users to change locations.
  img: /img/illustrations/illus-links.svg
---

## Overview

Links are the primary way that users will move around within a Louisiana digital product.

## Writing Links

When writing links, users should be able to clearly understand the destination of the link.

<div class="row mb-12">
  <div class="col-lg-6">
    <p class="mb-2"><em>A clear example:</em></p>
    Search engines allow us to find information. <a href="https://google.com" target="_blank">Search for something</a>.
  </div>
  <div class="col-lg-6">
    <p class="mb-2"><em>An unclear example:</em></p>
    Search engines allow us to find information. <a href="https://google.com" target="_blank">Click Here</a>
  </div>
</div>

## Underlines in Paragraphs

Links should contain underlines when they are in paragraph text. The underlines help to designate the clickable link text because it doesn’t rely on color alone.

## Links with Button Appreance

Links may take the appearance of Buttons. [Read about about Buttons](/components/buttons) to learn about them.

## External / off-site links

If a link connects users to <a href="https://fontawesome.com/icons/external-link-alt?style=solid" target="_blank">a site that is not a part of the digital product</a>, include `target="_blank"` to the link, unless it’s a [button](/components/buttons/). Pelican CSS will automatically append the appropriate icon to the end of the link. The link will open in a new tab or window, depending on the user’s browser settings, allowing the user to keep their place in the digital product.
