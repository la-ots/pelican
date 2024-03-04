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

### Basic card

<div class="card">
  <div class="card-body">
    This is where Card content goes.
  </div>
</div>

```html
<div class="card">
  <div class="card-body">This is where Card content goes.</div>
</div>
```

### Card without a Shadow

<div class="card shadow-none">
  <div class="card-body">
    This is where Card content goes.
  </div>
</div>

```html
<div class="card shadow-none">
  <div class="card-body">This is where Card content goes.</div>
</div>
```

### Card without a Border

<div class="card border-0">
  <div class="card-body">
    This is where Card content goes.
  </div>
</div>

```html
<div class="card border-0">
  <div class="card-body">This is where Card content goes.</div>
</div>
```

## Resources

- [Bootstrap Documentation - Cards](https://getbootstrap.com/docs/5.3/components/card/)
