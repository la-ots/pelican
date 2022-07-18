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
- Voice control technology uses the text in the link as activation text for the user.
- The text in the link should communicate the link’s destination.
- Refrain from generic link text such as “click here”.
- Pelican automatically applies distinct styling to links to an external site using `target="_blank"`.

<div class="row mb-4">
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
