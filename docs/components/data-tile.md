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

- Data Tiles are [Cards](/components/card) that display a label and related data corresponding to that label. They are useful in clearly displaying lots of text into easy-to-scan holders.
- Data Tiles feature the same display attributes as [Cards](/components/card).
- Data Tiles display as grey when inside a [Content Container](/components/boxes/#content-container) or [White Box](/components/boxes/#white-box)
- Data Tiles display as white when **not** inside a [Content Container](/components/boxes/#content-container) or [White Box](/components/boxes/#white-box)
- A Data Tile’s width is determined by its parent class; in order to adjust the width, change the `col` sizing on the parent `div` (default is `col-3`).

## Usage

<div class="col-sm-6 col-md-3 border-0">
	<div class="card shadow-none">	
		<div class="card-body">
			<p class="label">Label</p>
			<hr class="minor minimal">
			<p class="mb-0">Value</p>
		</div>
	</div>
</div>

```html
<div class="col-sm-6 col-md-3 border-0">
	<div class="card shadow-none">	
		<div class="card-body">
			<p class="label">Label</p>
			<hr class="minor minimal">
			<p class="mb-0">Value</p>
		</div>
	</div>
</div>
```
