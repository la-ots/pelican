---
title: Important Considerations
summary: Some important things to be aware of as you use the Pelican.
tags: layout, markup, accessibility
layout: guide
eleventyNavigation:
  key: Important Considerations
  parent: Introduction
  order: 2
  excerpt: Some important things to be aware of as you use the Pelican.
  img: /img/illustrations/illus-important-considerations.svg
---

## Accessibility

When [implementing an Agency Theme](/foundation/agency-theming/), be sure to think about Accessibility and <a href="https://www.section508.gov/create/software-websites" target="_blank">Section 508</a> and <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG guidelines</a> for [required Color Contrast](/accessibility/color-contrast/). 

## Layout

Don’t change the layouts of Pelican Design System elements. Louisiana’s residents need common layouts across Louisiana government’s digital products. Even with brand colors across agencies, users become familiar to where things are placed. The purpose of Pelican Design System is to enable residents to become familiar with a shared visual language.

## Markup

Don’t change the markup unless you are prepared for any remedying any [Accessibility](/accessibility/about-accessibility/) or browser rendering problems on your own. If you need markup for something Pelican doesn’t have, consult the <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">Bootstrap documentation</a> as it’s the underlying framework for Pelican.

If your project requires custom work not found in either Pelican Design System or Bootstrap, <a href="https://accessibility.digital.gov/front-end/getting-started/" target="_blank">consult Digital.gov’s guidelines on Frontend accessibility</a>.

{% include markup/pull-request.njk %}

Contributions to Pelican are welcome! We’ll implement them so all teams can use it. We also need to ensure they comply with [Accessibility](/accessibility/about-accessibility/) considerations.
