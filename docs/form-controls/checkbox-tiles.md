---
title: Checkbox Tiles
summary: Offer your users a larger tap target and additional information.
tags: forms
layout: guide
eleventyNavigation:
  key: Checkbox Tiles
  parent: Form Controls
  order: 5
  excerpt: Offer your users a larger tap target and additional information.
  img: /img/illustrations/illus-checkbox-tile.svg
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Put them into columns to size them.
- If only one item can be selected, use [Radios](/form-controls/radios).
- If the user needs to activate or deactivate something, use a [Switch](/form-controls/switches) instead.
- Ensure the `id` of the input matches the `for` of the label.
- If you need more than four, use a normal [Checkbox](/form-controls/checkboxes/) instead.
- Omit the tile description `tile-description` if you don’t need it.

## Usage

<div class="form-check checkbox-tile">
  <input class="form-check-input" id="check-historical-truth-2" type="checkbox" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-truth-2">Sojourner Truth</label>
</div>
<div class="form-check checkbox-tile">
  <input class="form-check-input" id="check-historical-booker-2" type="checkbox" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-booker-2">
    Booker T. Washington
    <span class="tile-description">This is optional text that can be used to describe the label in more
      detail.</span>
  </label>
</div>

```html
<div class="form-check checkbox-tile">
  <input class="form-check-input" id="check-historical-truth-2" type="checkbox" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-truth-2">Sojourner Truth</label>
</div>
<div class="form-check checkbox-tile">
  <input class="form-check-input" id="check-historical-booker-2" type="checkbox" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-booker-2">
    Booker T. Washington
    <span class="tile-description">This is optional text that can be used to describe the label in more
      detail.</span>
  </label>
</div>
```
