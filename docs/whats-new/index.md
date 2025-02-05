---
title: What’s New
summary: Pelican Changelog
tags: resources
layout: guide
index: true
eleventyNavigation:
  key: What’s New
  title: What’s New
  order: 1
---

## Make Pelican Better

You can help improve Pelican. Visit the [Feedback Page](/feedback) to learn how to become involved.

We’re continually improving Pelican. The following changes are listed by the date we completed each change.

## 2.3.0: February 7, 2025

- We changed how the textured backgrounds are loaded for performance reasons. They’re now used as optional CSS files. Read more about this at [Background Textures](/foundation/agency-theming/#background-texture).
- Added CSS to offer optional, dim versions of [Badges](/components/badges/).
- Changed the CSS structure for Badges, which affects their default behavior in [Page Titles](/components/page-title/). Refer to their documentation for more information. 

## 2.2.3: January 10, 2025

- Fixes a bug in the color selectors for text in a table

## 2.2.2: December 20, 2024

- Fixes a typo in the reference to the variable typeface

## 2.2.1: June 14, 2024

- Clarifies instructions about Content Containers
- Updates the image used for State Seal
- Updates hex value for UI color

## 2.2.0: April 5, 2024

- Adds Status component

## 2.1.0: March 28, 2024

- Adds a scrollable table option for data-dense tables

## 2.0.7: March 4, 2024

- Adds shadows to basic button classes

## 2.0.6: February 21, 2024

- Fixes a button misalignment bug

## 2.0.5: January 25, 2024

- Fixes color bugs in the Add Data button
- Fixes padding bugs in the Button Container

## 2.0.4: December 15 2023

- Add omitted CSS variables for Alerts’ border radius
- Add omitted CSS variables for Checkbox and Radios active color
- Add omitted CSS variables for some Form controls
- Add omitted CSS variables for Languages Feature Block
- Add omitted CSS variables for List Group links
- Add omitted CSS variables for Pagination
- Add omitted CSS variables for Official Banner focus indicator color
- Add omitted CSS variables for Table items
- Add omitted CSS variables for TOC
- Fix bug of mispelled variable names in Nav SCSS rules
- Fix bug of incorrect CSS variable used in disabled Toggle Tokens
- Fix bug of clashing class name in Topbar background
- Fix bug of links in Tables not inheriting color
- Reformatted dates and headers in What’s New to be easier to scan
- Remove border from sidebar code samples to align with actual site markup
- Updated dependencies

## 2.0.3: November 30 2023

- Icons in List Group links are vertically centered

## 2.0.2: November 28 2023

- Links in tables get underlines, and double underlines on hover, by default for accessibility.
- Sidebar button gets a hover state border change
- Removes text selection styles and variables

## 2.0.1: October 23 2023

- Added additional theming variables

## 2.0.0: October 16 2023

- **Bootstrap 5.** Bootstrap updated from version 4 to version 5. Pelican 2 is based upon Bootstrap 5.2 but Pelican 1 is based upon Bootstrap 4.6. This major change in Bootstrap version required some things to be refactored in the code to accommodate this. See the [Migration Guide](/migration-guide/) for details about how this affects projects built upon Pelican 1 (Bootstrap 4.6).
- **CSS Variables.** Easier code theming for dependent projects. Bootstrap 5 introduces the use of CSS variables to enable better theming flexibility. Be sure to tell your developer.
- **Figma Features.** Pelican’s Figma library gets some refreshes. Figma updates its capabilities and workflows regularly. To keep the Pelican Mockups 2 Library fresh, we will be updating components to stay current with Figma.
