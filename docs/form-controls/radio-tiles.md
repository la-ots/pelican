---
title: Radio Tiles
summary: Radio tiles allow users to select one significant choice from a set of options.
tags: forms
layout: guide
eleventyNavigation:
  key: Radio Tiles
  parent: Form Controls
  order: 8
  excerpt: Radios allow users to select exactly one option from multiple options.
  img: /img/illustrations/illus-radio-tile.png
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Put them into columns for sizing.
- If multiple items can be selected, use [Checkboxes](/form-controls/checkboxes).
- If the user needs to activate or deactivate something, use a [Switch](/form-controls/switches) instead.
- Ensure the `id` of the input matches the `for` of the Label.
- If you need more than four, use a normal [Radios](/form-controls/radios/) instead.
- Omit the tile description span with `tile-description` if you don’t need it.

## Usage

<div class="form-check radio-tile">
  <input class="form-check-input" id="check-historical-truth-4" type="radio" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-truth-4">Sojourner Truth</label>
</div>
<div class="form-check radio-tile">
  <input class="form-check-input" id="check-historical-booker-4" type="radio" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-booker-4">
    Booker T. Washington
    <span class="tile-description">This is optional text that can be used to describe the Label in more
      detail.</span>
  </label>
</div>

<!-- prettier-ignore -->
```html
<div class="form-check radio-tile">
  <input class="form-check-input" id="check-historical-truth-4" type="radio" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-truth-4">Sojourner Truth</label>
</div>
<div class="form-check radio-tile">
  <input class="form-check-input" id="check-historical-booker-4" type="radio" name="historical-figures" value="sojourner-truth" />
  <label class="form-check-label" for="check-historical-booker-4">
    Booker T. Washington
    <span class="tile-description">
      This is optional text that can be used to describe the Label in more detail.      
    </span>
  </label>
</div>
```
