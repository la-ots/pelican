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
Cards are designed to be flexible enough to accommodate most content types
- If a Card occurs outside of a [Content Container](/components/content_container/), it will automatically get a white background 
- If the card occurs inside of a [Content Container](/components/content_container/) it will automatically get a gray background
- Cards can contain various types of information, so their appearance will vary
- A card’s width is determined by its parent element. In most cases, this is a Bootstrap `<div>` with a column class. Read [Layout Grid](/components/layout-grid/) for more information about columns
- Rows and columns can be placed inside a card body
- Cards can be themed using theming classes. Read more in [Agency Themes](/foundation/agency-theming/)

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
  <div class="card-body">
    This is where Card content goes.
  </div>
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
  <div class="card-body">
    This is where Card content goes.
  </div>
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
  <div class="card-body">
    This is where Card content goes.
  </div>
</div>
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/card/" target="_blank">Bootstrap Documentation - Cards</a>
