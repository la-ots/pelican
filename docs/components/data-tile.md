---
title: Data Tile
summary: Data Tiles group related information about a category. 
tags: data tile, group, information
layout: guide
eleventyNavigation:
  key: Data Tile
  parent: Components
  order: 155
  excerpt: Data Tiles group related information about a category.
  img: /img/illustrations/illus-data-tiles.svg
---
 
## Best Practices

- Data Tiles extend [Cards](/components/cards) behavior and styles.
- Data Tiles  simply display a label and related data corresponding to that label. 
- They are useful in clearly displaying lots of text into easy-to-scan holders.
- They will be grey when inside a [Content Container](- If a Card occurs outside of a [Content Container](/components/content_container/), it will automatically get a white background 
- If the card occurs inside of a [Content Container](/components/content_container/) it will automatically get a gray background).
- They will be white when **not** inside a [Content Container](- If a Card occurs outside of a [Content Container](/components/content_container/), it will automatically get a white background 
- If the card occurs inside of a [Content Container](/components/content_container/) it will automatically get a gray background).

## Usage

<div class="data-tile">
  <div class="data-tile-body">
    <p class="data-tile-title mb-0">Label</p>
    <hr class="minor my-2">
    <p class="mb-0">Value</p>
  </div>
</div>


```html
<div class="data-tile">
  <div class="data-tile-body">
    <p class="data-tile-title mb-0">Label</p>
    <hr class="minor my-2">
    <p class="mb-0">Value</p>
  </div>
</div>
```
