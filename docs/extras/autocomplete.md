---
title: Autocomplete
summary: Autocomplete with screenreader support.
tags: Autocomplete
layout: guide
eleventyNavigation:
  key: Autocomplete
  parent: Extras
  order: 10
  excerpt: Autocomplete with screenreader support.
  img: /img/illustrations/illus-autocomplete.png
---

## Best Practices

Autocompletes benefit users with domain knowledge about what they’re choosing. If the available options are unknown to the user then it’s better to use checkboxes, radios, or selects because they can easily refer to the options.

## Usage

You’ll need to add the following resources to your project. The autocomplete isn’t included in Pelican by default. Be aware that you’ll need to define your own data source. The included JS file uses fake data for the demo.

- JS: [`autocomplete.js`](/js/autocomplete.js)
- CSS: [`autocomplete.css`](/css/autocomplete.css)

{% include 'markup/autocomplete.njk' %}

```html
{% include 'markup/autocomplete.njk' %}
```


