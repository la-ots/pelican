﻿---
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

- Data Tiles extend [Cards](/components/card) behavior and styles.
- Data Tiles  simply display a label and related data corresponding to that label. 
- They are useful in clearly displaying lots of text into easy-to-scan holders.
- They will be grey when inside a [Content Container](/components/boxes/#content-container) or [White Box](/components/boxes/#white-box).
- They will be white when **not** inside a [Content Container](/components/boxes/#content-container) or [White Box](/components/boxes/#white-box).

## Usage

<div class="data-tile card shadow-none">	
  <div class="data-tile-body">
    <p>Label</p>
    <hr class="minor minimal">
    <p>Value</p>
  </div>
</div>

```html
<div class="data-tile card shadow-none">	
  <div class="data-tile-body">
    <p>Label</p>
    <hr class="minor minimal">
    <p>Value</p>
  </div>
</div>
