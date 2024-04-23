---
title: Status
summary: Use Status to present concise messages about system or data status.
tags: components
layout: guide
eleventyNavigation:
  key: Status
  parent: Components
  order: 300
  excerpt: Use Status to present concise messages about system or data status.
  img: /img/illustrations/illus-status.png
---

## Best Practice

- Status presents concise system or data status messages to the user.
- It inherits its style from [Alerts](/components/alerts).
- Keep the text in it short and succint, or two short words.
- Use one Status per unit of data: example, one per card.
- Choose an icon which supports the meaning of the text, and [use the icon accessibly](/foundation/icons).
- It’s different from Alerts because it doesn’t apply to the whole screen.
- It’s different from [Badges](/components/badges) because only one Status is used at a time on something.

## Usage

<div class="status-wrapper">
	<span class="status status-info">
		<span class="icon fas fa-eye" aria-hidden="true"></span>
		<span class="status-message">In Review</span>
	</span>
	<span class="status status-success">
		<span class="icon fas fa-cloud-upload-alt" aria-hidden="true"></span>
		<span class="status-message">Saved</span>
	</span>
	<span class="status status-warning">
		<span class="icon fas fa-stop-circle" aria-hidden="true"></span>
		<span class="status-message">On Hold</span>
	</span>
	<span class="status status-danger">
		<span class="icon fas fa-ban" aria-hidden="true"></span>
		<span class="status-message">Denied</span>
	</span>
</div>

```html
<div class="status-wrapper">
	<span class="status status-info">
		<span class="icon fas fa-eye" aria-hidden="true"></span>
		<span class="status-message">In Review</span>
	</span>
	<span class="status status-success">
		<span class="icon fas fa-cloud-upload-alt" aria-hidden="true"></span>
		<span class="status-message">Saved</span>
	</span>
	<span class="status status-warning">
		<span class="icon fas fa-stop-circle" aria-hidden="true"></span>
		<span class="status-message">On Hold</span>
	</span>
	<span class="status status-danger">
		<span class="icon fas fa-ban" aria-hidden="true"></span>
		<span class="status-message">Denied</span>
	</span>
</div>
```

## Resources

- [FontAwesome Icon List](https://fontawesome.com/v5/search?o=r&m=free&s=solid)
