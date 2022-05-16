---
title: Accessibility Checklist
summary: A few things you can check to ensure you have basic accessibility covered.
tags: accessibility
layout: guide
eleventyNavigation:
  key: Accessibility Checklist
  parent: Accessibility
  order: 8
  excerpt: A few things you can check to ensure you have basic accessibility covered.
  img: /img/illustrations/illus-accessibility-checklist.svg
---

## Best Practices

The following checklists for are based on the WCAG 2.0 Level A and AA standards. The checklists are organized as sections for Perceiveable, Operable, Understandable, and Robust, or P.O.U.R.  They will be updated as new information is available. It’s meant to assist product teams, including designers, developers, content creators, and purchasing agents, in creating and procuring accessible IT.

### Perceivable

- Do images have [Alt text](/foundation/images/)?
- Does video have captions and does audio have transcripts?
- Does the page include proper headings, lists, ARIA landmarks, and other semantic HTML elements to communicate document structure?
- Are the [tab and read orders](/accessibility/keyboard/) logical and intuitive?
- Do form fields within pages have [appropriately coded and connected labels](/form-controls/inputs/)?
- Have you avoided using visual tactics to communicate information (e.g., “click the button on the right” or “required fields are in red”)?
- Does the interface have [sufficient contrast](/accessibility/color-contrast/) between text color and background color?
- Does the content scale well when text is enlarged up to 200 percent?

### Operable

- Are all menus, links, buttons, and other controls [usable only by keyboard](/accessibility/keyboard/), to make them accessible to users who don’t use a mouse?
- Does the web page include a visible focus indicator so all users, especially those using a keyboard, can easily know their current position?
- Do features that scroll or update automatically (e.g., slideshows, carousels) have prominent accessible controls that enable users to pause or advance these features on their own?
- Do pages that have time limits include mechanisms for adjusting those limits for users who need more time?
- Have you avoided using content that flashes or flickers?
- Does the web page or document have a title that describes its topic or purpose?
- Are mechanisms in place that [allow users to bypass blocks of content](/accessibility/skip-link/) (e.g., a “skip to main content”?
- Does the website include two or more ways of finding content, such as a navigation menu, search feature, or [human-readable site map](/sitemap/)?
- Do all [links contain meaninful text](/foundation/links/), independent of context?
- At 200% zoom or higher, all content and controls should still be accessed.

### Understandable

- Has the language of the web page or document (or individual parts of a multilingual document) been defined?
- Have you avoided links, controls, or form fields that automatically trigger a change in context?
- Does the website include consistent navigation?
- Do online forms provide helpful, accessible error and verification messages?
- At 200% zoom or higher, the user should only need to scroll in one direction.

### Robust

- Are you including human testing? Automated testing is useful, but not a replacement for human testing.
- Are you using semantic HTML?
- Is the web page coded using valid HTML (e.g., not using Javascript on a Div instead of a button or link)? 
- Do rich, dynamic, web interfaces, such as modal windows, drop-down menus, slideshows, and carousels, include ARIA markup?
- Are you including proper ARIA on custom controls?
- At 200% zoom or higher, the digital product should still function.

## Resources

This checklist is heavily inspired by University of Washington’s Accessibility Checklist.

- <a href="https://accessibility.digital.gov/" target="_blank">Digital.gov’s Accessibility for Teams </a>
- <a href="https://www.washington.edu/accessibility/checklist/" target="_blank">University of Washington’s Accessibility Checklist</a>
- <a href="https://accessibility.digital.gov/visual-design/getting-started/" target="_blank">Visual Design Guidance by Digital.gov </a>
- <a href="https://accessibility.digital.gov/front-end/getting-started/" target="_blank">Accessibility for Front-End Developers </a>
- <a href="https://alistapart.com/article/accessibilityseo" target="_blank">Accessibility Leads to SEO Wins </a>
