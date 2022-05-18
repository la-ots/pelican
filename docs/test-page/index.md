---
title: Test Page
summary: This test page is used to visuall check if CSS changes have unintended effects.
tags: test-page
layout: default-minimal
index: true
## eleventyNavigation:
##   key: Sitemap
##   title: Sitemap
##   order: 14
---

<!-- this style is only for the test page -->
<style scoped>
  .toast         {
    position: fixed;
    right: 10px;
    z-index: 3000;
    width: 300px;
  }
  .toast-info    {
    top: 20px;
  }
  .toast-danger  {
    top: 110px;
  }
  .toast-success {
    top: 200px;
  }
</style>

{%- include 'markup/components/toast-info.njk'    -%}
{%- include 'markup/components/toast-danger.njk'  -%}
{%- include 'markup/components/toast-success.njk' -%}

{% include "markup/components/breadcrumbs.njk" %}

<!-- page title -->
<div class="page-title">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-lg-flex justify-content-lg-between align-items-center">
        <div class="mb-2 mb-lg-0">
          <h2 class="page-title-text">
            <span class="icon fas fa-home" aria-hidden="true"></span>
            Page Title
            <span class="badge badge-primary">Badge</span>
            <span class="badge badge-secondary">Badge</span>
            <span class="badge badge-accent">Badge</span>
            <span class="badge badge-ui">Badge</span>
            <span class="badge badge-success">Badge</span>
            <span class="badge badge-warning">Badge</span>
            <span class="badge badge-danger">Badge</span>
            <span class="badge badge-info">Badge</span>
          </h2>	
          <p class="mb-0">Use this sentence to briefly describe the purpose of the page.</p>
        </div>
        <div>
          <a href="https://google.com" class="btn btn-primary btn-shadow">
            <span class="fas fa-bolt" aria-hidden="true"></span>
            Do This
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- alerts -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      {%- include 'markup/components/alert-success.njk' -%}
      {%- include 'markup/components/alert-info.njk' -%}
      {%- include 'markup/components/alert-warning.njk' -%}
      {%- include 'markup/components/alert-danger.njk' -%}
    </div>
  </div>
</div>

<!-- progress indicator large -->
{%- include 'markup/components/progress-large.njk' -%}
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
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text-plain.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/select.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        <button type="button" class="btn btn-ui btn-sm pd-mt-8" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          <span class="fas fa-question" aria-hidden="true"></span>
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
        {%- include 'markup/form-controls/input-file.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        <button type="button" class="btn btn-ui btn-sm pd-mt-8" data-toggle="popover" data-placement="top" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
          <span class="fas fa-question" aria-hidden="true"></span>
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
        {%- include 'markup/form-controls/checkboxes.njk' -%}
      </div>
      <div class="col-12 col-lg-4">
        {%- include 'markup/form-controls/radios.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4">
        {%- include 'markup/form-controls/toggle-tokens-exclusive.njk' -%}
      </div>
      <div class="col-12 col-lg-4">
        {%- include 'markup/form-controls/toggle-tokens-inclusive.njk' -%}
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
        {%- include 'markup/form-controls/input-text.njk' -%}
      </div>
      <div class="col-12 col-lg-3">
        {%- include 'markup/form-controls/select.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        {%- include 'markup/sample-table.njk' -%}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="minor">
      </div>
    </div>
    {%- include 'markup/components/pagination.njk' -%}
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
    {%- include 'markup/components/button-page-actions.njk' -%}
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
        {%- include 'markup/components/modal.njk' -%}
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
      {%- include 'markup/components/progress-small.njk' -%}
    </div>
    <div class="col-12 col-lg-4 mt-3 mt-lg-0">
      {%- include 'markup/components/share-social.njk' -%}
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
        {%- include 'markup/components/progress-small.njk' -%}
      </div>
      <div class="col-12 col-lg-4 mt-3 mt-lg-0">
        {%- include 'markup/components/share-social.njk' -%}
      </div>
    </div>
  </div>
</div>

<hr class="major">

<!-- collapses -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-lg-3">
      {%- include 'markup/components/component-collapse.njk' -%}
    </div>
  </div>
</div>
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        {%- include 'markup/components/component-collapse.njk' -%}
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
{%- include 'markup/components/tabbed-content-traditional.njk' -%}

<!-- features -->
{%- include 'markup/highlights/feature-cta-double.njk' -%}
{%- include 'markup/highlights/feature-set.njk' -%}
<!-- heroes -->
{%- include 'markup/highlights/hero-dual-pane.njk' -%}
{%- include 'markup/highlights/hero-textbox-over-photo.njk' -%}
{%- include 'markup/highlights/hero-text-color-toned-photo.njk' -%}
{%- include 'markup/highlights/hero-single-pane.njk' -%}
<!-- button container -->
{%- include 'markup/components/button-container.njk' -%}
