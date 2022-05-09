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

## Best Practices

- When writing links, users should be able to clearly understand the destination of the link.
- Assistive technology also uses the text in the link to describe the link to users.
- The text in the link should communicate the link’s destination.
- Refrain from generic link text such as “click here”.

<div class="row mb-6">
  <div class="col-lg-6">
    <p class="mb-2"><em>A clear example:</em></p>
    Search engines allow us to find<a href="https://www.google.com/search?q=cats" target="_blank"> information about cats</a>.
  </div>
  <div class="col-lg-6">
    <p class="mb-2"><em>An unclear example:</em></p>
    Search engines allow us to find information about cats. <a href="https://www.google.com/search?q=cats" target="_blank">Click Here</a>
  </div>
</div>

## Underlines in Paragraphs

- Links should contain underlines when they are in paragraph text.
- The underlines help to designate the clickable link text because it doesn’t rely on color alone.
- Don’t use underlines for emphasis. Underlines are reserved for links in paragraph text.

## Links with Button Appreance

- Links may take the appearance of Buttons. [Read about Buttons](/components/buttons) to learn about them.

## External / Off-site links

If a link connects users to <a href="https://fontawesome.com/icons/external-link-alt?style=solid" target="_blank">a site that is not a part of the digital product</a>, include `target="_blank"` to the link, unless it’s a [button](/components/buttons/). Pelican CSS will automatically append the appropriate icon to the end of the link. The link will open in a new tab or window, depending on the user’s browser settings, allowing the user to keep their place in the digital product.
