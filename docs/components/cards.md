---
title: Cards
summary: Cards are containers for related content or information.
tags: components, card
layout: guide
eleventyNavigation:
  key: Cards
  parent: Components
  order: 130
  excerpt: Cards are containers for related content or information.
  img: /img/illustrations/illus-cards.svg
---

## Best Practices

- When a Card occurs **outside** a [Content Container](/components/content_container/), it has a white background.
- When a Card occurs **inside** a [Content Container](/components/content_container/) it has a gray background.
- Titles or headers in Cards may need an appropriate [Heading Level](/accessibility/headings/).
- Cards are flexible enough to accommodate most content types.
- A card’s width is determined by its parent element. This might be a `<div>` with a Bootstrap column class. [Read Layout Grid](/components/layout-grid/) for more information.
- Rows and columns can be placed inside a card body.
- Cards can be themed using theming classes. Read more in [Agency Themes](/foundation/agency-theming/).
{% include 'cards-tables.njk' %}

## Usage

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="azbXEZa" data-pen-title="Buttons Disabled" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/azbXEZa">
  Buttons Disabled</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Resources

- [Bootstrap Documentation - Cards](https://getbootstrap.com/docs/5.3/components/card/)
