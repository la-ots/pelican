---
title: Printing
summary: Guidelines for different printing styles.
tags: print
layout: guide
eleventyNavigation:
  key: Printing
  parent: Foundation
  order: 13
  excerpt: Guidelines for different printing styles.
  img: /img/illustrations/illus-images.svg
---

## Best Practices

In general, the premise of the print preview layout design is to focus on what's visible in the main content of the page.
This means that the following components are excluded from ever being printed:

- Skip To Main
- Sidebar with Navigation
- Footer
- Back to Top Button
- Navbar

<a class="btn btn-primary" href="/foundation/printing-optional/" target="_blank">See Provided Example</a>

### Custom Print Modifications

Other features that work in tandem with other elements (thus only provide a means of interaction and not give information) are able to be excluded from the print preview as well.
These components that follow are not hidden by default:

- Pagination
- Buttons
- Form Elements

When customizing your own print styles, keep the following in mind:

- Make sure that different layers or sections of the page that are still present divide up the page in print preview the same way.
- Be sure that relevant information can still be interpreted regardless of changes to visual color or spacing.
- Understand that the layout grid will change based on the dimensions of the paper size that the preview is scaling to.

