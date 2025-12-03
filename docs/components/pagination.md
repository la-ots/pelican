---
title: Pagination
summary: Pagination allows users to choose between viewable data sets.
tags: components
layout: guide
eleventyNavigation:
  key: Pagination
  parent: Components
  order: 240
  excerpt: Pagination allows users to choose between viewable data sets.
  img: /img/illustrations/illus-pagination.svg
---

## Best Practices

- Include the `<select>` for users to choose how many items they want to see on each page.
- Use the `<nav>` element as the wrapping element for the page links.
- Show the number of paginated items.
- Indicate the range of items being viewed.
- Indicate the current page visually and accessibly.
- Use seven slots at most for the page links: Previous, first, overflow ellipsis, middle page, overflow ellipsis, last, next page.
- Hide the previous page link when on the first page and hide next page when on the last page.
- Remove any extra slots if fewer than 7 pages exist. You should use all slots for the page link numbers.
- Always show first page, current page, and last page. Other pages can be represented with ellipses around current page.
- Present previous page only when first page isn’t current.
- Present next page only when last page isn’t current.
- Place it below the content which it is paginating.
- Conditionally hidden items should not be focusable when hidden.
- Do not use it to display movement, like steps in a process, for which the [Progress Indicator](/components/progress/) is meant.

### For accessibility

- Screen reader text must be included with page links.
- Current page must include `aria-page="current"`.
- Results area should update in the same page and receive focus via: <br> `aria-live="polite"` on the results summary (“Showing X to Y of Z records”), or
move focus to the heading of the results or the first result row.
- All interactive elements must be reachable in a logical focus order with the keyboard via Tab and activated using Enter / Space.


## Usage

{% include 'markup/pagination.njk' %}

```html
{% include 'markup/pagination.njk' %}
```

## Resources

- [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
