---
title: Typography
summary: Guidelines for presenting textual information.
tags: typography, font, typeface
layout: guide
eleventyNavigation:
  key: Typography
  parent: Foundation
  order: 8
  excerpt: Guidelines for presenting textual information.
  img: /img/illustrations/illus-typography.svg
---

## Typeface

Pelican’s typeface is Public Sans, designed by USWDS. It is also a variable font, so the download sizes are smaller. Because <a href="https://fonts.google.com/specimen/Public+Sans" target="_blank">Public Sans is available from Google Fonts</a>, it’s ready-to-use in Figma and easy to deploy to a web product.

## Headings

Headings indicate document content structure and become navigation tools for assistive technology. See [Headings](/accessibility/headings/) in Accessibility for information.

## Paragraphs

Pelican uses 16px, the browser default, as the base font size. This is considered the best starting point for web readability. Paragraph tags `<p>` hold paragraphs. A paragraph can be one or more sentences. Spacing below a paragraph is equal to 16px in Pelican. That’s why sentences only have space below them when they’re within  lines of text. If you need to remove the margin from a paragraph, add the class `mb-0`.

```html
<p>Pelican uses 16px, the browser default, as the base font size. This is considered the best starting point for web readability.</p>
<p>Paragraph tags `<p>` hold paragraphs. A paragraph can be one or more sentences. Spacing below a paragraph is equal to 16px in Pelican. That’s why sentences only have space below them when they’re not within other lines of text. If you need to remove the margin from a paragraph, add the class `mb-0`.</p>
```
## Strong and Em

Strong tags `<strong>` and em tags `<em>` allow visual and semantic expressiveness in text. Using these tags affects the semantics of the text within. They also communicate this expressiveness for assistive technology users. 

<strong>Visually bolder and audibly bolder</strong>
<em>italicized and emphasized audibly</em>
<span class="fw-bold">Visually bold text without any semantic meaning</span>

```html
<strong>Visually bolder and audibly bolder</strong>
<em>italicized and emphasized audibly</em>
<span class="fw-bold">Visually bold text without any semantic meaning</span>
```

## Small

Small tags `<small>` allow text to be presented in smaller size in a logical content parent. 
<small>A common use of this within Pelican is helper text under a form field.</small>

```html
Small tags `<small>` allow text to be presented in smaller size in a logical content parent. 
<small>A common use of this within Pelican is helper text under a form field.</small>
```

## Lists

Lists are used to present elements in a collection. These may be bullet points or a numeric list. When writing lists, try to do the following when possible:

* Try to keep the same approximate line lengths and phrasing.
* Try to avoid repeating the same word at the beginning of each list item.
* Introduce lists with a clear, descriptive sentence.
* Do not overuse lists in content. Overusing lists will diminish their importance.

Use **Ordered** lists when the order of items is important.

{% include 'markup/list-ordered.njk' %}

``` html
{% include 'markup/list-ordered.njk' %}
```

Use **Unordered** lists when the order of items does not matter.

{% include 'markup/list-unordered.njk' %}

``` html
{% include 'markup/list-unordered.njk' %}
```

**Use Span for Inline Style**

Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="font-weight-bold">bolder</span> without affecting the semantics. This text can be <span class="font-italic">italicized</span> without affecting the semantics. 

```html
Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="font-weight-bold">bolder</span> without affecting the semantics. This text can be <span class="font-italic">italicized</span> without affecting the semantics. 
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/content/typography/" target="_blank">Bootstrap Documentation - Typography</a>
