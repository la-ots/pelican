---
title: Quick Start
summary: Pelican’s building blocks on one all.
tags: quick start
layout: default
eleventyNavigation:
  key: Quick Start
  parent: Page Templates
  title: Quick Start
  order: 1
---

<!-- Start Page Title -->
{% include 'markup/page-title.njk' %}

<!-- Start Alerts -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12">{% include 'markup/alert-info.njk' %}{% include 'markup/alert-success.njk' %}{% include 'markup/alert-warning.njk' %}{% include 'markup/alert-danger.njk' %}</div>
  </div>
</div>

<!-- Start Form Portion 1 -->
{% include 'markup/progress-large.njk' %}
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="legend mb-8">Form Portion 1</h2>
        <p>Use Minor dividers to indicate relationships between form elements when needed</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox199">Input Text Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>			
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox352">Label</label>
          <input type="text" class="form-control-plaintext" id="inputTextBox352" value="Value">
          <small>My presented value aligns with input fields’ values.</small>
        </div>					
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox299">Input Date Label</label>
          <input type="date" class="form-control" id="inputTextBox299">
          <small>This tells the browser to present a date-optimized UI.</small>
        </div>
      </div>
    </div>
    <hr class="minor">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTelBox399">Input Tel Label</label>
          <input type="tel" class="form-control" id="inputTelBox399">
          <small>On mobile browsers this presents a phone number-optimized UI.</small>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class="label" for="inputTextBox499">Input Email Label</label>
          <input type="tel" class="form-control" id="inputTextBox499">
          <small>On mobile browsers this presents an email-optimized UI.</small>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox599">Input Search Label</label>
          <input type="search" class="form-control" id="inputTextBox599">
          <small>This presents a search-optimized UI.</small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox699">Input URL Label</label>
          <input type="url" class="form-control" id="inputTextBox699">
          <small>On mobile browsers this presents a URL-optimized UI.</small>
        </div>	
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="inputTextBox799">Input Number Label</label>
          <input type="number" class="form-control" id="inputTextBox799">
          <small>This presents a numeric-optimized UI.</small>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label class='label' for="selectChoices">Label for Select</label>
          <select class="custom-select" id="selectChoices">
            <option selected>&mdash; Select a Numeral &mdash;</option>
            <option value="1">1 (One)</option>
            <option value="2">2 (Two)</option>
            <option value="3">3 (Three)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>				

<!-- Start Form Portion 2 -->				
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="legend mb-8">Form Portion 2</h2>
        <p>Both form portions belong together in the same large data set being collected, but each section as fields more tightly related to each other than other elements in the form. Breaking visually associated form elements into groups helps ease the 'wall of scary' when entering data.
        <p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label class='label' for="customFile" aria-hidden="true">Select</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
          <small>This presents a file-selection UI.</small>
        </div>
      </div>
    </div>
    <hr class="minor">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <p class="label">Group of Checkboxes</p>
          <!-- ⯅ This is a fake label -->
          <div class="custom-control custom-checkbox">
            <!-- Remove 'custom-control-inline' for stacked checkboxes -->
            <input type="checkbox" class="custom-control-input" id="checkboxValue1">
            <label class="custom-control-label" for="checkboxValue1">Value 1</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue2">
            <label class="custom-control-label" for="checkboxValue2">Value 2</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue5" disabled>
            <label class="custom-control-label" for="checkboxValue5">Value 5</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue6" disabled checked="checked">
            <label class="custom-control-label" for="checkboxValue6">Value 6</label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <p class="label">Group of Radios</p>
          <!-- ⯅ This is a fake label -->
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue1" name="radioChoice">
            <label class="custom-control-label" for="radioValue1">Value 1</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue2" name="radioChoice">
            <label class="custom-control-label" for="radioValue2">Value 2</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue5" name="radioChoice" disabled>
            <label class="custom-control-label" for="radioValue5">Value 5</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue6" name="radioChoice" disabled checked=checked>
            <label class="custom-control-label" for="radioValue6">Value 6</label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <p class="label">Label</p>
          <div class="custom-control custom-switch">
            <!-- Remove 'custom-control-inline' for stacked switches -->
            <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="true">
            <label class="custom-control-label" for="customSwitch1">Value 1</label>
          </div>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch2">
            <label class="custom-control-label" for="customSwitch2">Value 2</label>
          </div>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch3" checked="true" disabled>
            <label class="custom-control-label" for="customSwitch3">Value 3</label>
          </div>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" disabled id="customSwitch4" disabled>
            <label class="custom-control-label" for="customSwitch4">Value 4</label>
          </div>
        </div>
      </div>
    </div>
    <hr class="minor">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label for="bigSwitch">Big Switch Label</label>
          <div class="custom-control custom-switch custom-switch-large">
            <input type="checkbox" class="custom-control-input" id="bigSwitch">
            <label class="custom-control-label" for="bigSwitch" aria-hidden="true">Big Switch Label</label>
            <span class="custom-switch-text inactive" ariahidden="true">Off</span>
            <span class="custom-switch-text active" ariahidden="true">On</span>
          </div>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <p class="label">Which will you choose?</p>
          <div class="form-check toggle-token">
            <input class="form-check-input" type="radio" value="" name="exclusiveChoice01" id="toggleTokenField11" value="option1">
            <label class="form-check-label" for="toggleTokenField11">
              <span class="fas fa-circle"></span>
              <span class="fas fa-dot-circle"></span>
              Exclusive Choice Label
            </label>
          </div>
          <div class="form-check toggle-token ml-4">
            <input class="form-check-input" type="radio" value="" name="exclusiveChoice01" id="toggleTokenField12" value="option2">
            <label class="form-check-label" for="toggleTokenField12">
              <span class="fas fa-circle " aria-hidden="true"></span>
              <span class="fas fa-dot-circle" aria-hidden="true"></span>
              Exclusive Choice Label
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <p class="label">Which will you choose?</p>
          <div class="form-check toggle-token">
            <input class="form-check-input" type="checkbox" value="" id="toggleTokenField01">
            <label class="form-check-label" for="toggleTokenField01">
              <span class="fas fa-square" aria-hidden="true"></span>
              <span class="fas fa-check-square" aria-hidden="true"></span>
              Multi Choice Label
            </label>
          </div>
          <div class="form-check toggle-token ml-4">
            <input class="form-check-input" type="checkbox" value="" id="toggleTokenField02">
            <label class="form-check-label" for="toggleTokenField02">
              <span class="fas fa-square " aria-hidden="true"></span>
              <span class="fas fa-check-square" aria-hidden="true"></span>
              Multi Choice Label
            </label>
          </div>
        </div>
      </div>
    </div>
    <hr class="minor">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="form-group">
          <label for="textarea1" class="label">Textarea</label>
          <textarea class="form-control" id="textarea1" rows="5"></textarea>
        </div>
      </div>
      </row>
    </div>
  </div>
</div>		

<hr class="major">

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h2 class="legend h2 text-primary mb-0">Heading</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-6 col-lg-4">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-6 col-lg-4">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-3">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-3">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-3">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-3">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-6">{% include 'markup/data-tile.njk' %}</div>
    <div class="col-12 col-md-6">{% include 'markup/data-tile.njk' %}</div>
  </div>
</div>

<hr class="major">
<!-- Start Table -->
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="legend h2 text-primary mb-0">Heading</h2>
      </div>
    </div>
    <div class="row mt-8">
      <div class="col-12">{% include 'markup/table.njk' %}</div>
    </div>
  </div>
</div>

<!-- tabbed content -->
{% include 'markup/tabbed-content-traditional.njk' %}

<hr class="major">

<!-- Start Buttons -->
{% include 'markup/button-container.njk' %}
