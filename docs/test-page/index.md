---
title: Test Page
summary: This test page is used to visually check if CSS changes have unintended effects.
tags: test-page
layout: test-page
index: true
---

<div style="position: fixed; right: 10px; top: 20px; z-index: 3000; width: 300px;">
  {%- include 'markup/toast-info.njk'    -%}
  {%- include 'markup/toast-danger.njk'  -%}
  {%- include 'markup/toast-success.njk' -%}
</div>

<!-- page title -->
{%- include 'markup/page-title.njk' -%}

<!-- alerts -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      {%- include 'markup/alert-success.njk' -%}
      {%- include 'markup/alert-info.njk' -%}
      {%- include 'markup/alert-warning.njk' -%}
      {%- include 'markup/alert-danger.njk' -%}
    </div>
  </div>
</div>

<!-- progress indicator large -->

{%- include 'markup/progress-large.njk' -%}

<div class="content-container">
  <div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
    <div class="row">
      <div class="col-12">
        <h2 class="legend">Heading</h2>
        <p class="fw-bold" id="form-section-01-description">Use the minor dividers to signal tight relations among form elements when necessary.</p>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox1" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox1">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/input-text-plain.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox2" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox2">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox3" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox3">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox4" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox4">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="select1">Label for Select</label>
          <select class="custom-select form-select" aria-label="" id="select1">
            <option selected>&mdash; Select a Numeral &mdash;</option>
            <option value="1">1 (One)</option>
            <option value="2">2 (Two)</option>
            <option value="3">3 (Three)</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox5" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox5">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="inputTextBox6" class="label form-label">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox6">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="top" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" style="margin-top: 2rem;">
          <span class="icon fas fa-question" aria-hidden="true"></span>
          <span class="visually-hidden">Click to show Tooltip</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- major divider -->
<hr class="major">

<div class="content-container">
  <div class="container-fluid" role="group" aria-labelledby="form-section-02-description">
    <div class="row">
      <div class="col-12">
        <h2 class="legend">Heading</h2>
        <p class="fw-bold" id="form-section-02-description">Form portions 1 and 2 belong together in the same large data set being collected, but each section has fields more tightly related to each other than other members of the form. Let’s ease the reading burden by breaking the form into visually-associated chunks.</p>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/input-file.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        <button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="top" data-content="And here's some amazing content. It's very engaging. Right?" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="And here's some amazing content. It's very engaging. Right?" title="Popover title" style="margin-top: 2rem;">
          <span class="icon fas fa-question" aria-hidden="true"></span>
          <span class="visually-hidden">Click to show popover</span>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4">
        {%- include 'markup/checkboxes.njk' -%}
      </div>
      <div class="col-12 col-lg-4">
        {%- include 'markup/radios.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4">
        {%- include 'markup/toggle-tokens-exclusive.njk' -%}
      </div>
      <div class="col-12 col-lg-4">
        {%- include 'markup/toggle-tokens-inclusive.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="form-group">
          <label for="textarea1" class="label">Textarea</label>
          <textarea class="form-control" id="textarea1" rows="5"></textarea>
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- table -->

<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="legend">Heading</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/select.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        {%- include 'markup/sample-table.njk' -%}
      </div>
    </div>
    {%- include 'markup/pagination.njk' -%}
  </div>
</div>

<hr class="major">

<!-- typography and toc -->

<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-4 order-lg-2">
        {%- include 'markup/sample-toc.njk' -%}
      </div>
      <div class="col-12 col-lg-8 order-lg-1">
        {%- include 'markup/sample-typography.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    {%- include 'markup/button-page-actions.njk' -%}
  </div>
</div>

<!-- modals and toasts buttons -->

<div class="content-container">
  <div class="container-fluid" role="group" aria-labelledby="form-section-01-description">
    <div class="row">
      <div class="col-12">
        <h2 class="legend">Modals and Toasts</h2>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        {%- include 'markup/modal.njk' -%}
        <button type="button" class="btn btn-info">Launch Info Toast</button>
        <button type="button" class="btn btn-danger">Launch Danger Toast</button>
        <button type="button" class="btn btn-success">Launch Success Toast</button>
      </div>
    </div>
  </div>
</div>

<hr class="major">

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-lg-4">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Card Title</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4">
      <div class="data-tile">
        <div class="data-tile-body">
          <p class="fw-bold text-black">Label</p>
          <hr class="minor">
          <p>Value</p>
        </div>
      </div>
      {%- include 'markup/progress-small.njk' -%}
    </div>
    <div class="col-12 col-lg-4 mt-4 mt-lg-0">
      {%- include 'markup/share-social.njk' -%}
    </div>
  </div>
</div>

<hr class="major">

<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="card">
        <div class="card-body">
          <p class="card-title">Card Title</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        </div>
      </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="data-tile">
          <div class="data-tile-body">
            <p class="fw-bold text-black">Label</p>
            <hr class="minor">
            <p>Value</p>
          </div>
        </div>
        {%- include 'markup/progress-small.njk' -%}
      </div>
      <div class="col-12 col-lg-4 mt-4 mt-lg-0">
        {%- include 'markup/share-social.njk' -%}
      </div>
    </div>
  </div>
</div>

<hr class="major">

<!-- collapses -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-lg-3">
      {%- include 'markup/component-collapse.njk' -%}
    </div>
  </div>
</div>
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/component-collapse.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        <div class="spinner-border text-ui" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="major">

<!-- tabbed content -->

{%- include 'markup/tabbed-content-traditional.njk' -%}

<!-- features -->

{%- include 'markup/feature-cta-double.njk' -%}
{%- include 'markup/feature-set.njk' -%}

<!-- heroes -->

{%- include 'markup/hero-dual-pane.njk' -%}
{%- include 'markup/hero-textbox-over-photo.njk' -%}
{%- include 'markup/hero-text-color-toned-photo.njk' -%}
{%- include 'markup/hero-single-pane.njk' -%}

<!-- button container -->

{%- include 'markup/button-container.njk' -%}
