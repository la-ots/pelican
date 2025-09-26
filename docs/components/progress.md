---
title: Progress Indicator
summary: Progress Indicators show users their place in a multi-step process.
tags: components
layout: guide
eleventyNavigation:
  key: Progress Indicator
  parent: Components
  order: 260
  excerpt: Progress Indicators show users their place in a multi-step process.
  img: /img/illustrations/illus-progress-indicators.svg
---

## Best Practices

- Use the Large Progress Indicator when the progress can be easily divided into segments.
- Use the Small Progress Indicator when the progress is hard to divide into clean segments.
- Use it in conjunction with [Back and Forward Buttons](/components/back-and-forward-buttons).
- Put the current step’s info into the `<title>` within the `<head>`.
- Use the Small Progress Indicator when the progress is hard to divide into clean segments.
- Place the buttons at the bottom, but above the footer, of each page in the process.
- Be sure to customize the value in the `aria-label="..."` for each project.
- Buttons should be side by side at small sizes, when the button labels are short.
- Buttons can be centered at small sizes when the buttons labels are too long for side by side arrangement.
- When button labels are long enough to require centering, ensure that Previous button is atop the Next button.
- To assign equal emphasis to Previous and Next, change `btn-outline-ui` on the Previous button to `btn-primary`.
- Consider the guidance in [Buttons](/components/buttons/).

## Usage

**Large Progress Indicator**

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="bNGzLJO" data-pen-title="Progress Indicator Large" data-editable="true" data-user="lagovdesignteam" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/bNGzLJO">
  Progress Indicator Large</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

**Small Progress Indicator**

<p class="codepen" data-height="{{codepen.embedHeight}}" data-default-tab="html,result" data-slug-hash="OPJdQYB" data-pen-title="Progress Indicator Large" data-editable="true" data-user="lagovdesignteam" style="height: {{codepen.embedHeightPx}} box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/OPJdQYB">
  Progress Indicator Large</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>
