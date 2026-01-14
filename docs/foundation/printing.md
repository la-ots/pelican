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
This means that the following components should be in consideration from ever being printed:

- Skip To Main
- Sidebar with Navigation
- Footer
- Back to Top Button
- Navbar

An example stylesheet to use to remove these components from printing is provided below.
This stylesheet should be incorporated onto each page as required or merged within your site's local styles.

```html
{% include '../css/print.css' %}
```

### Custom Print Modifications

Other features that work in tandem with other elements (thus only provide a means of interaction and not give information) are options to be excluded from the print preview as well.
These components that follow are not hidden by default:

- Pagination
- Buttons
- Form Elements

When customizing your own print styles, keep the following in mind:

- Make sure that different layers or sections of the page that are still present divide up the page in print preview the same way.
- Be sure that relevant information can still be interpreted regardless of changes to visual color or spacing.
- Understand that the layout grid will change based on the dimensions of the paper size that the preview is scaling to.

### Resources

- https://getbootstrap.com/docs/5.3/utilities/display/#display-in-print
