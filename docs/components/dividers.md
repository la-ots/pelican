---
title: Dividers
summary: Dividers separate content into clear, meaningful groups.
tags: components, dividers
layout: guide
eleventyNavigation:
  key: Dividers
  parent: Components
  order: 160
  excerpt: Dividers separate content into clear, meaningful groups.
  img: /img/illustrations/illus-divider.svg
---
 
## Best Practices

- Dividers separate content, unlike [cards](/components/card) which group content together
- Use Dividers sparingly and only when separating content.

### Edge-to-Edge or Within Edges

Some dividers go all the way across the screen and some don’t go all the way across the screen when placed inside of a white or gray box. 

- If the divider is outside a white or gray box, but atop the background of the page, it goes edge-to-edge.
- If the divider is inside a white or gray box, it stays within the padding of the white or gray box.
- Top borders on [Back and Forward Buttons](/components/back-and-forward-buttons/) go edge-to-edge. (That Component isn’t placed in any white or gray boxes.)

Exceptions to this guidance are:

- Borders on sections within a card typically go edge-to-edge.
- Borders on Components such as [Large Progress Indicator](/components/progress/) typically go edge-to-edge.

### Changing Margins on Dividers

Top and bottom margins can be changed for Dividers 
  - Add any `mt-x` class to change top margin
  - Add any `mb-x` class to change bottom margin
  - Add any `my-x` class to change top and bottom margin at the same time

See [Padding and Margin](/foundation/spacing/) for more information. 

## Usage
### Major Divider

- Creates a strong separation between pieces of information or content
- **Example**: Use these to separate form or content sections from each other

{% include markup/divider-major.njk %}

``` html
{% include markup/divider-major.njk %}
```

### Minor Divider
- Create a weak separation between pieces of information or content
- **Example**: Use these when separating content with nuanced differences

{% include markup/divider-minor.njk %}

``` html
{% include markup/divider-minor.njk %}
```

## Resources
* <a href="https://getbootstrap.com/docs/4.5/utilities/spacing/" target="_blank">Bootstrap Spacing Utilities</a>
