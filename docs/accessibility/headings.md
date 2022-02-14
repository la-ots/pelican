---
title: Headings
summary: Headings are used to indicate information structure. They also enable accessible access.
tags: color, contrast
layout: guide
eleventyNavigation:
  key: Headings
  parent: Accessibility
  order: 6
  excerpt: Headings are used to indicate information structure. They also enable accessible access.
  img: /img/illustrations/illus-headings.svg
---

## Overview

Headings semantically express the content structure of a document. For assistive technology, Heading tags create a navigable outline of the page’s information.

## Best Practices

Indents in the code below help illustrate how Heading tags create an information outline.

```html
<h1></h1>
  <h2></h2>
    <h3></h3>
      <h4></h4>
  <h2></h2>
    <h3></h3>
      <h4></h4>
	    <h5></h5>
		  <h6></h6>
  <h2></h2>
```

To use Headings properly

- Understand and implement Headings to correspond to the document hierarchy.
- Start with an H1. Only use one H1 per page.
- [Page Titles](/components/page-title/) by default are the H1 in Pelican.
- Follow H1 with as many H2 headers to chunk the content into meaningful sections.
- Further divisions between H2s, should begin with H3.
- Use H4, H5, and H6 successively.
- Don’t skip Headings.
- Try to keep the page to just three levels at most.

**Pelican uses Headings for:**

- Page Titles
- Page Section Titles
- Subsection Headings

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" target="_blank">Heading Elements</a>
