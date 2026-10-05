---
title: Autocomplete
summary: Autocomplete lets users type to filter and select from a known set of options.
tags: forms
layout: guide
eleventyNavigation:
  key: Autocomplete
  parent: Form Controls
  order: 6
  excerpt: Autocomplete lets users type to filter and select from a known set of options.
  img: /img/illustrations/illus-inputs.png
---

## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Use autocomplete when users should choose from a known list but the list is too long for [Radios](/form-controls/radios) or [Select](/form-controls/select).
- Keep option text short and meaningful.
- Provide clear helper text that explains how to navigate suggestions (arrow keys, Enter, Escape).
- Requires Pelican JavaScript (`pelican.bundle.min.js` or `@la-ots/pelican/dist/js/pelican.js`).

## Usage

{% include 'markup/input-autocomplete.njk' %}

```html
{% include 'markup/input-autocomplete.njk' %}
```

## Data Options Implementation

Autocomplete reads options from `data-pelican-combobox-options`, which must be a JSON array of strings.

```html
data-pelican-combobox-options='["Apply for Benefits","Driver Services"]'
```

Use single quotes around the attribute value and valid JSON (double quotes inside the JSON array).

All examples below use the complete label, input, status, listbox, and helper-text markup from [Usage](#usage). The abbreviated wrappers show only the attributes that change.

Pelican reads this attribute **once, when the component initializes**. It does not fetch a URL placed in the attribute, watch later attribute changes, or search an API as the user types. Load remote options before loading Pelican JavaScript; filtering then happens locally. Calling the initializer again is not an options-update mechanism.

### Option 1: Hard-code options in markup

Use when options are small and rarely change.

```html
<div
  class="pelican-combobox form-group"
  data-pelican-combobox-options='["Apply for Benefits","Driver Services","Office Locations"]'>
  ...
</div>
<script src="/js/pelican.bundle.min.js" defer></script>
```

Here the attribute already contains the full list, so Pelican can initialize normally. When generating HTML, HTML-escape the serialized JSON for the quoted attribute, including apostrophes in option text. For example, `Driver&#39;s License` in the HTML attribute becomes `Driver's License` when read by JavaScript.

### Option 2: Load options from a JSON file

Use when options are managed in static content or shared across multiple pages.

Serve a JSON file at `/data/services.json`:

```json
["Apply for Benefits", "Driver Services", "Office Locations"]
```

Start with an empty attribute and disable the input until the data is ready:

```html
<div
  id="service-autocomplete"
  class="pelican-combobox form-group"
  data-pelican-combobox-options="[]">
  <!-- Include the complete Usage markup here; add disabled to its input. -->
</div>
<p id="service-options-status" role="status">Loading services...</p>
```

Place this script after the markup. It sets the attribute with `JSON.stringify`, then loads Pelican. **Replace the usual Pelican script tag with this loader**, rather than loading Pelican twice. Adjust the bundle URL to your application's asset location.

```html
<script type="module">
  const combobox = document.getElementById("service-autocomplete");
  const input = combobox.querySelector(".pelican-combobox__input");
  const status = document.getElementById("service-options-status");

  async function loadServiceOptions(url, toOptions) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not load services: HTTP ${response.status}`);
      }

      const data = await response.json();
      const options = toOptions(data);
      if (
        !Array.isArray(options) ||
        !options.every((option) => typeof option === "string" && option.trim())
      ) {
        throw new Error(
          "Service options must be an array of non-empty strings.",
        );
      }

      combobox.setAttribute(
        "data-pelican-combobox-options",
        JSON.stringify(options),
      );

      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/js/pelican.bundle.min.js";
        script.onload = resolve;
        script.onerror = () => reject(new Error("Could not load Pelican."));
        document.head.appendChild(script);
      });

      input.disabled = false;
      status.textContent = options.length ? "" : "No services are available.";
    } catch (error) {
      console.error("Unable to initialize service autocomplete.", error);
      status.textContent =
        "Services could not be loaded. Please reload the page to try again.";
    }
  }

  await loadServiceOptions("/data/services.json", (data) => data);
</script>
```

After loading, the wrapper's attribute contains:

```html
data-pelican-combobox-options='["Apply for Benefits","Driver Services","Office
Locations"]'
```

`setAttribute` handles the attribute value directly, so do not HTML-escape the JSON before passing it to this method. If a page has multiple remote autocomplete fields, populate all of their attributes before loading Pelican once.

### Option 3: Populate options from an API

Use when options depend on user context, environment, or frequently updated service data.

Use the same markup and loader from Option 2. For an API returning an array of strings, replace the loader's final call with:

```js
await loadServiceOptions("/api/services", (data) => data);
```

If your API instead returns records:

```json
{
  "services": [
    { "id": 101, "display_name": "Apply for Benefits" },
    { "id": 102, "display_name": "Driver Services" }
  ]
}
```

Map those records to display strings in the loader's final call:

```js
await loadServiceOptions("/api/services", (data) =>
  data.services.map((service) => service.display_name),
);
```

The loader sets the wrapper attribute to:

```html
data-pelican-combobox-options='["Apply for Benefits","Driver Services"]'
```

Objects such as `{ "id": 101, "display_name": "Apply for Benefits" }` are not supported directly in the attribute. The component displays and selects strings; it does not retain record IDs or require a listed selection. Add an input `name` to submit its text value, and validate it on your server. Keep API credentials on the server, and use a same-origin endpoint or configure CORS for cross-origin requests. For large datasets or search-as-you-type APIs, use a separate remote-search implementation rather than downloading every record.

### Option 4: Populate options from a database (server-side)

Use when your application already has a backend and database source of truth.

For example, an Express application using PostgreSQL (`pg`) and EJS can query names and pass serialized JSON to its template:

```js
app.get("/services", async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      "SELECT display_name FROM services ORDER BY display_name",
    );
    const options = rows.map((row) => row.display_name);
    res.render("services", {
      autocompleteOptionsJson: JSON.stringify(options),
    });
  } catch (error) {
    next(error);
  }
});
```

In the EJS template, use the **escaped** output tag (`<%=`), not the unescaped tag (`<%-`):

```html
<div
  class="pelican-combobox form-group"
  data-pelican-combobox-options="<%= autocompleteOptionsJson %>">
  <!-- Include the complete Usage markup here. -->
</div>
<script src="/js/pelican.bundle.min.js" defer></script>
```

For rows named `Apply for Benefits` and `Driver Services`, the rendered HTML contains:

```html
<div
  class="pelican-combobox form-group"
  data-pelican-combobox-options="[&#34;Apply for Benefits&#34;,&#34;Driver Services&#34;]">
  ...
</div>
```

The browser decodes the HTML entities, so Pelican reads `["Apply for Benefits","Driver Services"]` as valid JSON. Other template engines can use the same approach: serialize the array to JSON, then HTML-escape it for the quoted attribute. Do not use raw/unescaped template output for database or user-provided values. Database credentials and queries belong on the server, not in browser JavaScript; query failures should reach your application's error handler.

## Resources

- [Inputs](/form-controls/inputs)
- [Section 508 Guidelines](https://www.section508.gov/)
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
