---
title: List Group
summary: Give items in a list more visual prominence.
tags: components
layout: guide
eleventyNavigation:
  key: List Group
  parent: Components
  order: 180
  excerpt: Give items in a list more visual prominence.
  img: /img/illustrations/illus-list-group.png
---

## Best Practices

- List group items are best for items which need to be more prominence than a simple bullet list.
- Be sure to use an `<ol>` rather than an `<ul>` for a numbered list.
- Do make sure to add the `list-group-numbered` class for a numbered list to the `<ol>`.

## Usage

### Static Text List

<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

### Link List

<div class="list-group" role="list-group">
  <a role="list-item" href="#" class="list-group-item list-group-item-action">An item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A second item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A thirditem</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A fourth item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">And a fifth one</a>
</div>

<!-- prettier-ignore -->
```html
<div class="list-group" role="list-group">
  <a role="list-item" href="#" class="list-group-item list-group-item-action">An item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A second item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A thirditem</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">A fourth item</a>
  <a role="list-item" href="#" class="list-group-item list-group-item-action">And a fifth one</a>
</div>
```
