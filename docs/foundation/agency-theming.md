---
title: Agency Themes
summary: Agencies have opportunity to reflect their own brand using Pelican.
tags: color, agency, brand
layout: guide
eleventyNavigation:
  key: Agency Themes
  parent: Foundation
  order: 4
  excerpt: Agencies have opportunity to reflect their own brand using Pelican.
  img: /img/illustrations/illus-agency-theme.svg
---

## Using Your Agency Colors

Pelican 2 comes with the flexibility to apply themes. Themes could be based upon the agency’s brand standards or a subset of a brand for some specific need. To help create themes, Pelican 2 has a companion project, the [Pelican 2 Themer](https://github.com/la-ots/pelican-2-themer) available for download at Github. Running that project and updating CSS variables will generate a CSS file to apply them theme you create.

1. Get the [Pelican 2 Themer](https://github.com/la-ots/pelican-2-themer) repo
1. Use NPM instructions in the README
1. Use the resulting CSS file in your Pelican-based project

The [Pelican 2 Figma library file at Figma Community](https://www.figma.com/community/file/1295790757134814477/pelican-2) has corresponding theming flexibility. Instructions for it can be found in the Figma file.

## Themeable Parts

All of the components in Pelican 2 have themeable parts. Themeable parts include text color, background colors, button colors, and even the font. Here’s an example using the Alerts.

- `--theme-alert-success-text-color: var(--theme-success-900);` controls the text color for the Success Alert
- `--theme-alert-success-bg-color: var(--theme-success-100);` controls the background color
- `--theme-alert-success-border-color: var(--theme-success-900);` controls the border color

You’ll find the full list of themeable parts for Pelican 2 in the Pelican 2 Themer.

{% include 'color-warning.njk' %}

## Resources

- [Pelican 2 Themer](https://github.com/la-ots/pelican-2-themer)
- [Pelican 2 Figma library](https://www.figma.com/community/file/1295790757134814477/pelican-2)
- [Section 508](https://www.section508.gov/)
- [WCAG Standards](https://www.w3.org/TR/WCAG22/)
