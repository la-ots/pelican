---
title: Documentation Page
summary: A layout that provides links to jump to content section headers.
tags: page templates
layout: guide
eleventyNavigation:
  key: Documentation Page
  parent: Page Templates
  title: Documentation Page
  order: 5
  excerpt: A layout that provides links to jump to content section headers.
  img: /img/illustrations/illus-doc-page.svg
---

## Best Practices

People often arrive at a documentation page after visiting the landing page or after searching for a specific piece of information. Documentation pages don’t need to provide as much contextualizing information as more introductory pages. The copy should be clear, focused, and concise.

- Use <a href="https://plainlanguage.gov/" target="_blank">Plain Language</a>, not technical jargon.
- Provide useful information.
- See [Voice and Tone](/foundation/voice-and-tone/) for more information.

## Usage

<a class="btn btn-primary" href="/page-templates/documentation-page-internal/" target="_blank">See Internal Preview</a>

``` html
{% include 'markup/documentation-internal.njk' %}
```

<a class="btn btn-primary" href="/page-templates/documentation-page-public/" target="_blank">See Public Preview</a>

``` html
{% include 'markup/documentation-public.njk' %}
```

## Resources

- <a href="https://www.plainlanguage.gov/guidelines/" target="_blank">Plain Language.gov</a>