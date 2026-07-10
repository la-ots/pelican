# Contributing to Pelican

Thanks for your interest in contributing to the Pelican Design System! Pelican is maintained by the Louisiana Office of Technology Services (OTS) and used across state agency projects, so consistency, accessibility, and stability matter a lot here. This guide covers how to propose changes, the local development workflow, and what we look for in a pull request.

By participating in this project, you agree to abide by our [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Before You Start](#before-you-start)
- [Local Development Setup](#local-development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Accessibility](#accessibility)
- [Documentation Changes](#documentation-changes)
- [Commit Messages](#commit-messages)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Review Process](#review-process)
- [Reporting Bugs & Requesting Features](#reporting-bugs--requesting-features)

## Ways to Contribute

- **Bug reports** — something in the CSS, JS, or docs isn't working as expected.
- **Feature requests** — a new component, utility, or pattern that would benefit multiple projects.
- **Accessibility improvements** — fixes or enhancements that improve compliance with WCAG/Section 508.
- **Documentation** — clarifying usage guidance, fixing examples, or adding missing docs for existing components.
- **Bug fixes & small enhancements** — pull requests are welcome for scoped, well-described changes.

For larger changes (new components, breaking changes, or significant visual/behavioral changes), please open an issue first to discuss the approach before writing code. This avoids duplicated effort and design churn.

## Before You Start

1. Search [existing issues](https://github.com/la-ots/pelican/issues) and open pull requests to avoid duplicating work.
2. For anything beyond a small fix, open an issue describing the problem or proposal and wait for feedback from a maintainer before investing significant time.
3. Fork the repository and create a topic branch off `main` for your change.

## Local Development Setup

Pelican requires [Node.js](https://nodejs.org/) (v20.5+ or v22+) and npm.

```bash
git clone https://github.com/<your-fork>/pelican.git
cd pelican
npm install
```

Build all distributable assets (CSS and JS) into `dist/`:

```bash
npm run build-dist
```

Build the documentation site as well (into `dist/docs`):

```bash
npm run build-dist-docs
```

## Project Structure

| Path         | Purpose                                                              |
| ------------ | --------------------------------------------------------------------|
| `scss/`      | Source Sass partials that make up the Pelican theme                 |
| `js/`        | Source JavaScript (`pelican.js`)                                     |
| `docs/`      | Documentation site source (Eleventy), including component usage docs |
| `build/`     | Build tooling config (esbuild, PostCSS)                              |
| `dist/`      | Compiled output (generated, not committed)                          |

When adding or changing a component, update both the Sass/JS source **and** its corresponding page under `docs/components/` so usage guidance stays in sync with the code.

## Development Workflow

Run the watch task while you work; it rebuilds assets on file changes:

```bash
npm run watch
```

To work on documentation with live rebuild of both assets and the docs site:

```bash
npm run watch:docs
```

Documentation is built with [Eleventy](https://www.11ty.dev/); see its [documentation](https://www.11ty.dev/docs/) for template syntax (Nunjucks) used under `docs/_includes` and `docs/_layouts`.

## Coding Standards

Pelican uses shared lint/format configs (`@la-ots/eslint-config`, `@la-ots/stylelint-config`, `@la-ots/prettier-config`). Run linting before opening a pull request:

```bash
npm run lint
```

Or individually:

```bash
npm run css:lint
npm run js:lint
```

Auto-fixable issues:

```bash
npm run css:lint:fix
npm run js:lint:fix
```

Check formatting (Prettier):

```bash
npm run format:check
```

Or apply formatting fixes:

```bash
npm run format
```

Notes:

- Linters are **not** run automatically by the `watch` scripts — run them separately before committing.
- Follow existing Sass patterns (variables in `_default-theme-variables.scss`, mixins in `_mixins.scss`) rather than hardcoding values.
- Keep JavaScript vanilla and dependency-free unless there's a strong reason otherwise — Pelican targets broad compatibility across OTS applications.

## Accessibility

Pelican is a public-sector design system, so accessibility is a hard requirement, not a nice-to-have. When contributing components or markup:

- Follow guidance already documented under [`docs/accessibility/`](docs/accessibility/) (headings, keyboard, color contrast, forms, live regions, etc.).
- Ensure interactive elements are keyboard operable and have visible focus states.
- Don't rely on color alone to convey meaning; pair status colors with text/icons.
- Verify color contrast for any new colors or component states.
- Test with a screen reader where practical, especially for new interactive components.

## Documentation Changes

Component docs live in `docs/components/*.md` and follow a consistent front matter structure:

```yaml
---
title: Component Name
summary: One-sentence description shown in navigation/cards.
tags: components, component-name
layout: guide
eleventyNavigation:
  key: Component Name
  parent: Components
  order: 10
  excerpt: Same or similar one-sentence description.
  img: /img/illustrations/illus-component-name.svg
---
```

Reusable markup snippets referenced in docs live under `docs/_includes/markup/` and are pulled in with `{% include 'markup/....njk' %}` so the rendered example and the code sample shown to readers never drift apart. When adding a new usage example, add the snippet there rather than inlining raw HTML in the Markdown page.

## Commit Messages

Write clear, descriptive commit messages that explain **what** changed and **why**. Prefixing with a short scope is helpful, e.g.:

```
fix(alerts): correct focus outline color in dark mode
docs(buttons): add example for icon-only buttons
feat(badges): add pill variant
```

Keep commits scoped to a single logical change where practical; this makes review and future bisecting easier.

## Submitting a Pull Request

1. Push your branch to your fork and open a pull request against `main`.
2. Give the PR a clear title and description: what changed, why, and how to verify it (screenshots are appreciated for visual changes).
3. Link any related issue(s).
4. Before requesting review, make sure:
   - `npm run lint` passes.
   - `npm run build-dist-docs` completes without errors (this is also checked in CI).
   - New or changed components have corresponding documentation under `docs/components/`.
   - Accessibility considerations above have been addressed.
5. Keep pull requests focused — separate unrelated changes into their own PRs.

CI runs automatically on pull requests targeting `main` (see `.github/workflows/ci.yml`) and must pass before merge.

## Review Process

This repository uses [CODEOWNERS](.github/CODEOWNERS) to route review requests:

- Changes under `/scss/` are reviewed by `@la-ots/css-maintainers`.
- Changes under `/docs/` are reviewed by `@la-ots/docs-maintainers`.
- All other changes are reviewed by `@la-ots/product-delivery-admins`.

A maintainer will review your PR, may request changes, and will merge once it's approved and CI passes. Releases and npm/GitHub Packages publishing are handled by maintainers via the release workflow — contributors don't need to bump versions themselves.

## Reporting Bugs & Requesting Features

Please open a [GitHub issue](https://github.com/la-ots/pelican/issues) and include:

- A clear description of the problem or request.
- Steps to reproduce (for bugs), including browser/OS if relevant.
- Expected vs. actual behavior.
- Screenshots or a minimal code sample, if applicable.

---

Questions that don't fit neatly into an issue? Reach out to the maintainers listed in [CODEOWNERS](.github/CODEOWNERS).
