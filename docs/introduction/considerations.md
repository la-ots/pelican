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

When [implementing an Agency Theme](/foundation/agency-theming/), be sure to think about Accessibility and <a href="https://www.section508.gov/create/software-websites" target="_blank">Section 508</a> and <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG guidelines</a> for contrast between Background Colors and Text Colors. 

## Layout

Don’t change the layouts of Pelican Design System elements. We need common layouts across Louisiana government digital products. There may be a need to adjust padding and/or margin because of some unforeseen case, but don’t change the overall layouts. Even with brand colors across agencies, users become familiar to where things are placed.

## Markup

Don’t change the markup unless you are prepared for any remedying any Accessibility or browser rendering problems on your own. If you need markup for something not found here in Pelican, consult the <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">Bootstrap documentation</a> as it’s the underlying framework for Pelican.



If your project requires custom work not found here in the Design System or Bootstrap, <a href="https://accessibility.digital.gov/front-end/getting-started/" target="_blank">consult Digital.gov’s guidelines on Frontend accessibility</a>.

{% include "markup/pull-request.njk" %}

Extensions to Pelican are welcome! Extensions will be implemented in a manner which accommodates their future use by all teams and compliance with accessibility guidelines.
