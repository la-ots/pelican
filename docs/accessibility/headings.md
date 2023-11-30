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

Headings semantically express the content structure of a document. For assistive technology such as screen readers, Heading elements create a navigable outline of the page’s information. People who use screen readers often prefer using headings to get an overview of a page’s content.

## Best Practices

Indents in the code below help illustrate how Heading tags create an information outline.

<!-- prettier-ignore -->
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
- Use H1, H2, H3, H4, H5, and H6 successively.
- Don’t skip Headings.
- Try to keep the page content to just three levels at most.

Pelican uses Headings for

- Page Titles
- Page Section Titles
- Subsection Headings

## Resources

- [Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey7/#finding)
- [A11y Project](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)
- [Headings](https://www.med.unc.edu/webguide/accessibility/headings/)
- [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
