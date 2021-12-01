---
title: Label Guidance
summary: Labels give the user additonal control and context for form controls.
tags: forms
layout: guide
eleventyNavigation:
  key: Label Guidance
  parent: Form Controls
  order: 2
  excerpt: Labels give the user additonal control and context for form controls.
  img: /img/illustrations/illus-labels.svg
---
    
## Best Practices

Labels are required for form controls. The user knows what information they need to provide because of the labels.

### Labels and Placeholders on Inputs

Labels are required and they should not be substituted with Placeholders. They are not the same thing. In fact, Placeholders should be omitted altogether from inputs because <a href="https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/" target="_blank">placeholders cause various user experience problems</a>. The example below illustrates labels and placeholders. 

Labels also give the user an extra clickable element for the control to which it belongs. The value in the `for` attribute of the Label should match the value in the `id` attribute of the form control.

<div class="row">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleInputText1">This is a Label</label>
      <input type="email" class="form-control" id="exampleInputText1" placeholder="This is a placeholder">
    </div>
  </div>
</div>

Takeaways:

- Include Labels
- Match the `for=""` in the Label to the `id=""` of the control.
- Do not use Placeholders

### Label Guidance for Checkboxes, Radios, Toggle Tokens, and Switches

The guidance here applies to checkboxes and radios. Toggles and Switches are checkboxes and radio buttons that are styled to have alternate appearances so the same guidance applies.

On checkboxes and radios the labels of checkboxes and labels are the text which appears to the right of the control.

<div class="row">
  <div class="col-lg-6">
    <div class="form-group">
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Checkbox</label>
      </div>
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="customCheck2">
        <label class="custom-control-label" for="customCheck2">Checkbox</label>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="form-group">
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input">
        <label class="custom-control-label" for="customRadioInline1">Radio</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input">
        <label class="custom-control-label" for="customRadioInline2">Radio</label>
      </div>
    </div>
  </div>
</div>

When checkboxes or radios appear in a group, or next to other form control elements, they should have a text string above them to:

- Give them context
- Visually align them to their siblings in a form. 

The text string is a `<p>` with the class of `label` as you see here: `<p class="label">Label</p>`.

Consider the two examples below. The checkbox and radio with the text string above are better for context and alignment in the first example.

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput2">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
    </div>
  </div>
  <div class="col-lg-3">
    <div class="form-group">
      <p class="label">Label</p>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline4353456dsgh" name="customRadioInline46" class="custom-control-input">
        <label class="custom-control-label" for="customRadioInline4353456dsgh">Radio</label>
      </div>
    </div>
  </div>
  <div class="col-lg-3">
    <div class="form-group">
      <p class="label">Label</p>
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="customCheck457">
        <label class="custom-control-label" for="customCheck457">Checkbox</label>
      </div>
    </div>
  </div>
</div>

In this example, their alignment and context is less evident.

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput2dsfg456">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput2dsfg456">
    </div>
  </div>
  <div class="col-lg-3">
    <div class="form-group">
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInlinee5678569" name="customRadioInline" class="custom-control-input">
        <label class="custom-control-label" for="customRadioInlinee5678569">Radio</label>
      </div>
    </div>
  </div>
  <div class="col-lg-3">
    <div class="form-group">
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="customCheck7457678">
        <label class="custom-control-label" for="customCheck7457678">Checkbox</label>
      </div>
    </div>
  </div>
</div>

Switches benefit in the same way as their unstyled versions.

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput9745676">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput9745676">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="form-group">
      <p class="label">Label</p>
      <div class="custom-control custom-control-inline custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch578678" checked="true">
        <label class="custom-control-label" for="customSwitch578678">Value 1</label>
      </div>
      <div class="custom-control custom-control-inline custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch7895678">
        <label class="custom-control-label" for="customSwitch7895678">Value 2</label>
      </div>
    </div>
  </div>
</div>

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput97634">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput97634">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="form-group">
      <div class="custom-control custom-control-inline custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1245fdh68" checked="true">
        <label class="custom-control-label" for="customSwitch1245fdh68">Value 1</label>
      </div>
      <div class="custom-control custom-control-inline custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch2adtg678">
        <label class="custom-control-label" for="customSwitch2adtg678">Value 2</label>
      </div>
    </div>
  </div>
</div>

Toggle Tokens benefit in the same way as their unstyled versions.

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput9765875879">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput9765875879">
    </div>
  </div>
  <div class="col-lg-6">
    <p class="label">Label</p>
    <div class="form-group">
      <div class="form-check toggle-token">
        <input class="form-check-input" type="radio" value="" name="exclusiveChoice013567567" id="toggleTokenField11" value="option1">
        <label class="form-check-label" for="toggleTokenField11">
          <span class="fas fa-circle"></span>
          <span class="fas fa-check-circle"></span>
          Value 1
        </label>
      </div>
      <div class="form-check toggle-token ml-4">
        <input class="form-check-input" type="radio" value="" name="exclusiveChoice013567567" id="toggleTokenField12" value="option2">
        <label class="form-check-label" for="toggleTokenField12">
          <span class="fas fa-circle " aria-hidden="true"></span>
          <span class="fas fa-check-circle" aria-hidden="true"></span>
          Value 2
        </label>
      </div>
    </div>
  </div>
</div>

<div class="row mb-8">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleFormControlInput9e67857876">Label</label>
      <input type="text" class="form-control" id="exampleFormControlInput9e67857876">
    </div>
  </div>
  <div class="col-lg-6">
    <div class="form-group">
      <div class="form-check toggle-token">
        <input class="form-check-input" type="radio" value="" name="exclusiveChoice01sdfge578" id="toggleTokenField11sfy5467" value="option1">
        <label class="form-check-label" for="toggleTokenField11sfy5467">
          <span class="fas fa-circle"></span>
          <span class="fas fa-check-circle"></span>
          Value 1
        </label>
      </div>
      <div class="form-check toggle-token ml-4">
        <input class="form-check-input" type="radio" value="" name="exclusiveChoice01sdfge578" id="toggleTokenField12567dfgh" value="option2">
        <label class="form-check-label" for="toggleTokenField12567dfgh">
          <span class="fas fa-circle " aria-hidden="true"></span>
          <span class="fas fa-check-circle" aria-hidden="true"></span>
          Value 2
        </label>
      </div>
    </div>
  </div>
</div>

### Required Form Inputs & Controls

The data collected from some fields in the form may be required in the application. In this case, use a red asterisk (<span class="fas fa-asterisk text-danger"></span>) to denote required fields. Product Owners and BAs will determine which fields are required. Refer to wireframes/ mock-ups for guidance on when to use asterisks.

<div class="row">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleInputText1"><span class="fas fa-asterisk text-danger"></span> This is a Required Field</label>
      <input type="email" class="form-control" id="exampleInputText1" placeholder="This is a placeholder">
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-lg-6">
    <div class="form-group">
      <label for="exampleInputText1"><span class="fas fa-asterisk text-danger"></span> This is a Required Field</label>
      <input type="email" class="form-control" id="exampleInputText1" placeholder="This is a placeholder">
    </div>
  </div>
</div>
```

## Resources

- <a href="https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/" target="_blank">The anatomy of Accessible Forms: The Problem with Placeholders</a>
