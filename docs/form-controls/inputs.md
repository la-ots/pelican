---
title: Inputs
summary: The Input element specifies a field for the user to enter information on a page.
tags: forms
layout: guide
eleventyNavigation:
  key: Inputs
  parent: Form Controls
  order: 5
  excerpt: The Input element specifies a field for the user to enter information on a page.
  img: /img/illustrations/illus-inputs.svg
---
    
## Best Practices

- Please read [Label Guidance](/form-controls/labels-guidance) first.
- Refrain from using placeholder attributes in inputs because they causes usability problems.
- Use the Text Input when you can’t predict a user’s response or when another type of Input would make answering the prompt difficult.
- If users must choose from a predetermined set of choices, use [Radio Buttons](/form-controls/radios) or [Checkboxes](/form-controls/checkboxes).
- Use [Textarea](/form-controls/textarea) if the user needs to enter more than a single line of text.
- Clearly label all text input fields.
- Use the appropriate type of input for the data being gathered.
- Ensure the `for` and `id` attributes have matching values.

We currently show 8 of the <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank">22 types of inputs</a>.

## Usage
**Input Type: Text**

- Accepts text, numbers, and other characters

{% include 'markup/input-text.njk' %}

``` html
{% include 'markup/input-text.njk' %}
```

**Input Type: Date Picker**

- Accepts dates using the browser’s date picker. 
- Displays a User Interface (UI) optimized for the entry of dates.

{% include 'markup/input-date-picker.njk' %}

``` html
{% include 'markup/input-date-picker.njk' %}
```

**Input Type: Known Date Entry**

- Accepts dates using three text inputs for Month, Day, Year. 
- Displays a User Interface (UI) optimized for the entry of dates.
- Be sure to include labels, especially if the fields are rearranged.

{% include 'markup/input-date-multiple-fields.njk' %}

``` html
{% include 'markup/input-date-multiple-fields.njk' %}
```

**Input Type: Tel**

- Accepts telephone numbers
- Displays a UI optimized for a phone number

{% include 'markup/input-tel.njk' %}

``` html
{% include 'markup/input-tel.njk' %}
```

**Input Type: Email**

- Accepts email addresses
- Displays a UI optimized for the email address entry

{% include 'markup/input-email.njk' %}

``` html
{% include 'markup/input-email.njk' %}
```

**Input Type: Search**

- Accepts search terms
- Displays a UI optimized for search term entry

{% include 'markup/input-search.njk' %}

``` html
{% include 'markup/input-search.njk' %}
```

**Input Type: URL**

- Accepts web addresses
- Displays a UI optimized for the entry of web addresses

{% include 'markup/input-url.njk' %}

``` html
{% include 'markup/input-url.njk' %}
```

**Input Type: Number**

- Accepts numbers
- Displays a UI optimized for the entry of numbers

{% include 'markup/input-number.njk' %}

``` html
{% include 'markup/input-number.njk' %}
```

**Input Type: File**

- Accepts file uploads.
- Displays a UI optimized for uploading files.

{% include 'markup/input-file.njk' %}

``` html
{% include 'markup/input-file.njk' %}
```

### Readonly

- Shows user information that is readonly.
- User can copy the information but not change it.

Note: This is not the same as a disabled field. A disabled field prevents _user input_. This displays _system provided values_.

{% include 'markup/input-text-readonly.njk' %}

``` html
{% include 'markup/input-text-readonly.njk' %}
```

**Input-Aligned Plain Text**

- Same as Readonly, but removes input styling.
- Will horizontally align with other, user-editable fields.

{% include 'markup/input-text-plain.njk' %}

``` html
{% include 'markup/input-text-plain.njk' %}
```

**Input Detail View**

- Use for detail views.
- Decreased vertical space between label and data to improve a detail page of data.
- Use on detail pages, not edit pages.

<div class="form-group">
  <p class="label">Label</p>
  <p>Value</p>
</div>

``` html
<div class="form-group">
  <p class="label">Label</p>
  <p>Value</p>
</div>
```

## Resources

* <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank">W3Schools.com - 22 Types of Inputs</a>
* <a href="https://www.section508.gov/" target="_blank">Section 508 Guidelines</a>
* <a href="https://www.w3.org/TR/WCAG21/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a>
* <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Documentation - Forms</a>
