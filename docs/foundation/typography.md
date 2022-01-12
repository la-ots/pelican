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

## Overview

Typography is not just the font. In Pelican it’s also the textual tags for indicating hierarchy and document structure.

## Typeface

The typeface Pelican uses is <a href="https://public-sans.digital.gov/" target="_blank">Public Sans</a>, it’s designed by USWDS. It is also a variable font, so the download sizes are smaller. Additionally, as <a href="https://fonts.google.com/specimen/Public+Sans" target="_blank">Public Sans is made available by Google Fonts</a>, it is available in Figma automatically.

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="img-fluid" src="/img/illustrations/typography-typeface.svg">
  </div>
</div>

## Headings

<p>
  <span class="h1">H1</span> <span class="h2">H2</span> <span class="h3">H3</span> <span class="h4">H4</span> <span class="h5">H5</span> <span class="h6">H6</span>
</p>

Headings semantically express the content structure of a document’s information. Heading tags create an outline of the page’s information. The size of Headings helps to visually reinforce document hierarchy. Using the Header tags correctly also helps search engines index the information.

To use headings properly

- Start with an H1. Only use one H1 per page.
- [Page Titles](/components/page-title/) by default are the H1 in Pelican.
- Follow H1 with as many H2 headers to chunk the content into meaningful sections.
- Further divisions between H2s, should begin with H3.
- Use H4, H5, and H6 successively.
- Don’t skip headings.

**Pelican uses Headings for:**

- Page Titles
- Page Section Titles
- Subsection Headers

**Heading Guidelines:**

- Understand and implement Headings to correspond to the document hierarchy.
- Start with H1. 
- Use only one H1 per page.
- You can use as many subsequent headings as you need.
- Use H2, H3, on to H6 as the subsequent heading levels.
- Don’t skip headings. Don’t follow a H1 with a H3 by skipping H2.
- Break the page into major sections, those would use H2s for the headings.
- Each subsequent heading represents a level inward from the previous heading.
- Try to keep the page to just three levels as most, if possible.
- Don’t rely on bolded paragraph tags as headings.

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

Lists are used to present elements in a collection. These may be bullet points numeric list. When writing lists, try to do the following when possible:

* Try to keep the same approximate line lengths and phrasing.
* Try to avoid repeating the same word at the beginning of each list item.
* Introduce lists with a clear, descriptive sentence.
* Do not overuse lists in content. Overusing lists will diminish their importance.

Use **Ordered** lists when the order of items is important.

{% include markup/list-ordered.njk %}

``` html
{% include markup/list-ordered.njk %}
```

Use **Unordered** lists when the order of items does not matter.

{% include markup/list-unordered.njk %}

``` html
{% include markup/list-unordered.njk %}
```

**Use Span for Inline Style**

Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="fw-bold">bolder</span> without affecting the semantics.This text can be <span class="fst-italic">italicized</span> without affecting the semantics. 

```html
Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="fw-bold">bolder</span> without affecting the semantics.This text can be <span class="fst-italic">italicized</span> without affecting the semantics. 
```

## Resources

* <a href="https://getbootstrap.com/docs/5.1/content/typography/" target="_blank">Bootstrap Documentation - Typography</a>
