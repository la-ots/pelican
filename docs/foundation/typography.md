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

Headings semantically express the logical structure of a document’s or application screen’s information. Heading tags create an outline of the page’s information. The size of Headings helps to visually reinforce document hierarchy. Using the Header tags correctly also help search engines properly index the information.

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="" src="/img/illustrations/typography-headings.svg">
  </div>
</div>

Pelican uses Headings for:

- Page Titles
- Page Section Titles
- Subsection Headers

Heading Guidelines:

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

Pelican uses 16px, the browser default, as the base font size. This is considered the best starting point for web readability.

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="" src="/img/illustrations/typography-paragraphs.svg">
  </div>
</div>

Paragraph tags `<p>` hold paragraphs. A paragraph can be one or more sentences. Spacing below a paragraph is equal to 16px in Pelican. That’s why sentences only have space below them when they’re within  lines of text. If you need to remove the margin from a paragraph, add the class `mb-0`.

```html
<p>Pelican uses 16px, the browser default, as the base font size. This is considered the best starting point for web readability.</p>
<p>Paragraph tags `<p>` hold paragraphs. A paragraph can be one or more sentences. Spacing below a paragraph is equal to 16px in Pelican. That’s why sentences only have space below them when they’re not within other lines of text. If you need to remove the margin from a paragraph, add the class `mb-0`.</p>
```
## Strong and Em

Strong tags `<strong>` and em tags `<em>` allow visual and semantic expressiveness in text. Using these tags affects the semantics of the text within. For expressiveness which is only visual, see the Span section below. They also communicate this expressiveness for assistive technology users. Strong tags make the text <strong>visually bolder</strong> and screen readers speak it <strong>audibly bolder</strong>.  Em tags make the text <em>italicized</em> and screen readers add audible expressiveness for users.

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="" src="/img/illustrations/typography-strong-em.svg">
  </div>
</div>

```html
Strong tags `<strong>` and em tags `<em>` allow visual and semantic expressiveness in text. Using these tags affects the semantics of the text within. For expressiveness which is only visual, see the Span section below. They also communicate this expressiveness for assistive technology users. Strong tags make the text <strong>visually bolder</strong> and screen readers speak it <strong>audibly bolder</strong>.  Em tags make the text <em>italicized</em> and screen readers add audible expressiveness for users.
```

## Small

Small tags `<small>` allow text to be presented in smaller size in a logical content parent. A common use of this within Pelican is helper text under a form field. An example of this can be seen in the [Form Template for Names](/form-templates/name/).

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  </div>
</div>
```

## Lists

Lists are used to present elements in a collection. These may be bullet points for the user to consider or a discrete enumeration of content. Lists can be either ordered or unordered. 

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="" src="/img/illustrations/typography-lists.svg">
  </div>
</div>

When writing lists, try to do the following when possible:

* Keep the same approximate line lengths and phrasing    
* Avoid repeating the same word at the beginning of each list item
* Introduce list with a clear, descriptive sentence
* Do not overuse lists in content. Overusing lists will diminish their importance.

Use **Ordered** lists when the order of items is important.

{% include "markup/list-ordered.njk" %}

``` html
{% include "markup/list-ordered.njk" %}
```

Use **Unordered** lists when the order of items does not matter.

{% include "markup/list-unordered.njk" %}

``` html
{% include "markup/list-unordered.njk" %}
```

## Visual Presentation Allowances

There may be an use case for a stylistic change which doesn’t affect semantics. Pelican allows for such use cases.

<div class="row mb-12">
  <div class="col-12">
    <img alt="Sample Latin alphabet with Public Sans typeface." class="" src="/img/illustrations/typography-visual-style.svg">
  </div>
</div>

**Header Visual Size Changes**

In some instances you may need to changea Heading‘s visual size. Don’t change heading tags just to change visual size! If you want to change sizes for purely visual reasons, you could change classes on the tag. For example, you could put a H5 class on a H2.

<h2 class="h6">Major Section Heading, H2, presented at H6 visual size</h2>

```html
<h2 class="h6">Major Section Heading, H2, presented at H6 visual size</h2>
```

**Use Span for Inline Style**

Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="font-weight-bold">bolder</span> without affecting the semantics.This text can be <span class="font-italic">italicized</span> without affecting the semantics. 

```html
Span tags `<span>` allow local text changes without affecting semantics. We can style <span class="text-danger">words in this sentence to be red</span> without affecting the semantics. This text can be <span class="font-weight-bold">bolder</span> without affecting the semantics.This text can be <span class="font-italic">italicized</span> without affecting the semantics. 
```

## Resources

* <a href="https://getbootstrap.com/docs/4.5/content/typography/" target="_blank">Bootstrap Documentation - Typography</a>
