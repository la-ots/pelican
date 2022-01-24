---
title: Card
summary: Cards are containers for related content or information.
tags: components, card
layout: guide
eleventyNavigation:
  key: Card
  parent: Components
  order: 130
  excerpt: Cards are containers for related content or information.
  img: /img/illustrations/illus-cards.svg
---
## Best Practices
Cards are designed to be flexible enough to accommodate most content types
- If a Card occurs outside of a [Content Container](/components/boxes/#content-container), it will automatically get a white background 
- If the card occurs inside of a Content Container or [White Box](/components/boxes/#white-box) it will automatically get a gray background
- Cards can contain various types of information, so their appearance will vary
- A card’s width is determined by its parent element. In most cases, this is a Bootstrap `<div>` with a column class. Read [Layout Grid](/components/layout-grid/) for more information about columns
- Rows and columns can be placed inside a card body
- Cards can be themed using theming classes. Read more in [Agency Themes](/foundation/agency-theming/)

{% include "cards-tables.njk" %}

## Usage
### Basic card

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-6">
      <!-- Begin actual card -->
      <div class="card">
        <div class="card-body">
          This is where Card content goes.
        </div>
      </div>
      <!--  End actial card -->
    </div>
  </div>
</div>

```html
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <!-- Begin actual card -->
        <div class="card">
          <div class="card-body">
            This is where Card content goes.
          </div>
        </div>
        <!--  End actial card -->
      </div>
    </div>
  </div>
```

### Card without a Shadow

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-6">
      <!-- Begin actual card -->
      <div class="card shadow-none">
        <div class="card-body">
          This is where Card content goes.
        </div>
      </div>
      <!--  End actial card -->
    </div>
  </div>
</div>

```html
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
          <!-- Begin actual card -->
        <div class="card shadow-none">
          <div class="card-body">
            This is where Card content goes.
          </div>
        </div>
        <!--  End actial card -->
      </div>
    </div>
  </div>
```

### Card without a Border

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-6">
      <!-- Begin actual card -->
      <div class="card border-0">
        <div class="card-body">
          This is where Card content goes.
        </div>
      </div>
      <!--  End actial card -->
    </div>
  </div>
</div>

```html
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
          <!-- Begin actual card -->
        <div class="card border-0">
          <div class="card-body">
            This is where Card content goes.
          </div>
        </div>
        <!--  End actial card -->
      </div>
    </div>
  </div>
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/components/card/" target="_blank">Bootstrap Documentation - Cards</a>
