---
title: Quick Start
summary: Pelican’s building blocks on one all.
tags: quick start
layout: quick
index: true
eleventyNavigation:
  key: Quick Start
  title: Quick Start
  order: 11
---
<!-- Start Breadcrumb -->
<nav aria-label="breadcrumbs" id="breadcrumbs" class="breadcrumbs mb-0">
<ol class="breadcrumb mb-0">
<li class="breadcrumb-item d-none d-lg-flex">
<a href="/">
<span class="fas fa-home" aria-hidden="true"></span>
<span class="sr-only">Home</span>
</a>
</li>
<li class="breadcrumb-item">
<a href="">Components</a>
</li>
<li class="breadcrumb-item active" aria-current="page">
<span>Breadcrumbs</span>
<span class="fas fa-eye ml-2" aria-hidden="true"></span>
</li>
</ol>
</nav>
<hr class="minor my-0">

<!-- Start Page Title -->
<div class="page-title bg-white p-4 p-lg-16 mb-4" id="pageTitle">
<div class="container-fluid">
<div class="row">
<div class="col-12 d-lg-flex justify-content-lg-between align-items-center">
<div>
<h2 class="h2 mb-0 text-primary">
<span class="fas fa-home text-primary-10"></span>
Page Title
</h2>	
<p class="mb-0">Use this sentence to briefly describe the purpose of the page.</p>
</div>
<div class="mt-8 mt-lg-0">
<a href="https://google.com" class="btn btn-primary btn-shadow">
<span class="fas fa-bolt"></span>
Do This
</a>
</div>
</div>
</div>
</div>
</div>

<!-- Start Alerts -->
<!-- Start Info Alert -->				
<div class="container-fluid">
<div class="alert alert-info bg-info-10 alert-dismissable fade show" role="alert">
<span class="fas fa-info-circle"></span>
<strong>Info.</strong> Hey, User, you might find this nice.	
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span class="fas fa-times" aria-hidden="true"></span>
</button>
</div>

<!-- Start Success Alert -->	
<div class="alert alert-success bg-success-10 alert-dismissable fade show" role="alert">
<span class="fas fa-check-circle"></span>
<strong>Success!</strong> Hey, User, the thing worked.	
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span class="fas fa-times" aria-hidden="true"></span>
</button>
</div>		

<!-- Start Warning Alert -->	
<div class="alert alert-warning bg-warning-10 alert-dismissable fade show" role="alert">
<span class="fas fa-exclamation-circle"></span>
<strong>Warning!</strong> Uh, User, you need to know this!	
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span class="fas fa-times" aria-hidden="true"></span>
</button>
</div>	

<!-- Start Danger Alert -->	
<div class="alert alert-danger bg-danger-10 alert-dismissable fade show" role="alert">
<span class="fas fa-exclamation-triangle"></span>
<strong>Danger!</strong> Whoa, User! Bad things could happen!	
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span class="fas fa-times" aria-hidden="true"></span>
</button>
</div>	
</div>

<hr class="major">

<!-- Start Form Portion 1 -->
<div class="content-container py-4 p-lg-16 mb-4">
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
<div class="content-container py-4 p-lg-16 mb-4">
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
<div class="custom-control custom-checkbox"> <!-- Remove 'custom-control-inline' for stacked checkboxes -->
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
<div class="custom-control custom-switch"> <!-- Remove 'custom-control-inline' for stacked switches -->
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

<!-- Start Card Samples, Uncontained -->			
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h2 class="legend">Card Samples, Uncontained</h2>
</div>
</div>
<div class="row">
<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<div class="card-body">
Card contents go here.
</div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<h5 class="card-header bg-primary text-white">
Card Header
</h5>
<div class="card-body">
Card contents go here.
</div>
</div>	
</div>
<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<div class="card-body">
<form>
<div class="row">
<div class="col-12 col-md-6">
<div class="form-group">
<label class="label" for="sampleTextInput">Label</label>
<input type="text" id="sampleTextInput" class="form-control">
</div>
</div>
<div class="col-12 col-md-6">
<div class="form-group">
<label class="label" for="sampleDateInput">Label</label>
<input type="date" id="sampleDateInput" class="form-control">
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<button type="submit" class="btn btn-primary">Submit</button>
<button type="submit" class="btn btn-ui">Cancel</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-12 col-md-6 col-lg-4">
<div class="card mb-4">
<div class="card-header text-muted">
<small>This is a Card Header</small>
</div>
<div class="card-body">
<h3 class="card-title mb-0">Card Title</h3>
<p>This is text in a Card Body. Cards take their width from their containing element.</p>
<a href="#" class="btn btn-primary">
Button Text
<span class="fas fa-arrow-right" aria-hidden="true"></span>
</a>
<a href="#" class="btn btn-ui">
Button Text
<span class="fas fa-arrow-right" aria-hidden="true"></span>
</a>
</div>
<div class="card-footer text-muted">
<small>This is a Card Footer</small>
</div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<img src="/img/photos/pexels-photo-275030.jpeg" class="card-img-top border-0" alt="...">
<div class="card-body">
<p class="mb-0">You can't build something great on a weak foundation.</p>
</div>
<div class="card-footer">
<small class="text-muted">This is a Card Footer</small>
</div>
</div>			
</div>
</div>
</div>

<hr class="major">

<!-- Start Card Samples, Contained -->
<div class="content-container p-16 mb-4">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h2 class="legend">Card Samples, Uncontained</h2>
</div>
</div>

<div class="row">
<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<div class="card-body">
Card contents go in here.
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<h5 class="card-header bg-primary text-white">
Card Header
</h5>
<div class="card-body">
Card Content Goes Here.
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<div class="card-body">
<form>
<div class="row">
<div class="col-12">
<div class="form-group">
<label class="label" for="sampleTextInput">Label</label>
<input type="text" id="sampleTextInput" class="form-control">
<small>This accepts any kind of alphnumeric characters.</small>
</div>
</div>
<div class="col-12">
<div class="form-group">
<label class="label" for="sampleDateInput">Label</label>
<input type="date" id="sampleDateInput" class="form-control">
<small>Presents a date entry-optimized UI in modern browsers.</small>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<button type="submit" class="btn btn-primary">Submit</button>
<button type="submit" class="btn btn-ui">Cancel</button>
</div>
</div>
</form>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="card mb-4">
<div class="card-header text-muted">
<small>This is a Card Header</small>
</div>
<div class="card-body">
<h3 class="card-title mb-0">Card Title</h3>
<p>This is text in a Card Body. Cards take their width from their containing element.</p>
<a href="#" class="btn btn-primary">
Button Text
<span class="fas fa-arrow-right" aria-hidden="true"></span>
</a>
<a href="#" class="btn btn-ui">
Button Text
<span class="fas fa-arrow-right" aria-hidden="true"></span>
</a>
</div>
<div class="card-footer text-muted">
<small>This is a Card Footer</small>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="card">
<img src="/img/photos/pexels-photo-275030.jpeg" class="card-img-top border-0" alt="...">
<div class="card-body">
<p class="mb-0">You can't build something great on a weak foundation.</p>
</div>
<div class="card-footer">
<small class="text-muted">This is a Card Footer</small>
</div>
</div>
</div>
</div>
</div>
</div>

<hr class="major">

<!-- Start Table -->
<div class="content-container py-4 p-lg-16 mb-4">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h4 class="h4 text-primary">Table of Data</h4>
<div class="row">
<div class="col-md-6 col-lg-4">
<div class="form-group">
<label for="filterTextbox">Filter by Textbox</label>
<input class="form-control" type="text" id="filterTextbox">
</div>
</div>
<div class="col-md-6 col-lg-4">
<div class="form-group">
<label for="filterSelect">Filter by Select</label>
<select class="custom-select mb-3" id="filterSelect">
<option selected>&mdash; Select &mdash;</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
</div>
</div>
<table class="table table-striped">
<caption class="d-none">Table caption describes the data presented.</caption>
<thead>
<tr>
<th scope="col" id="user">
<a href="#">
<span class="fas fa-sort"></span> User
</a>
</th>
<th scope="col" id="role">
<a href="#">
<span class="fas fa-sort"></span> Role
</a>
</th>
<th scope="col" id="role">
Figma Trained
</th>
<th scope="col" id="agency">
<a href="#">
<span class="fas fa-sort"></span> Team
</a>
</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row" id="James">James</th>
<td headers="role James">Boss</td>
<td headers="figma James">No</td>
<td headers="team James">OTS</td>
</tr>
<tr>
<th scope="row" id="Naman">Naman</th>
<td headers="role Naman">Developer</td>
<td headers="figma Naman">No</td>
<td headers="team Naman">EA</td>
</tr>
<tr>
<th scope="row" id="Charmetra">Charmetra</th>
<td headers="role Charmetra">Business Analyst</td>
<td headers="figma Charmetra">Yes</td>
<td headers="team Charmetra">OTS</td>
</tr>
<tr>
<th scope="row" id="Jade">Jade</th>
<td headers="role Jade">Business Analyst</td>
<td headers="figma Jade">Yes</td>
<td headers="team Jade">DOC</td>
</tr>
<tr>
<th scope="row" id="Keith">Keith</th>
<td headers="role Keith">Product Owner</td>
<td headers="figma Keith">No</td>
<td headers="team Keith">OJJ</td>
</tr>
<tr>
<th scope="row" id="Joseph">Joseph</th>
<td headers="role Joseph">Tester</td>
<td headers="figma Joseph">No</td>
<td headers="team Joseph">OMV</td>
</tr>
<tr>
<th scope="row" id="Ben">Ben</th>
<td headers="role Ben">Business Analyst</td>
<td headers="figma Ben">Yes</td>
<td headers="team Ben">OMV</td>
</tr>
<tr>
<th scope="row" id="Jennifer">Jennifer</th>
<td headers="role Jennifer">Database Administrator</td>
<td headers="figma Jennifer">No</td>
<td headers="team Jennifer">DOC</td>
</tr>
<tr>
<th scope="row" id="Ian">Ian</th>
<td headers="role Ian">Developer</td>
<td headers="figma Ian">No</td>
<td headers="team Ian">DOC</td>
</tr>
<tr>
<th scope="row" id="Al">Al</th>
<td headers="role AL">Developer</td>
<td headers="figma Al">No</td>
<td headers="team Al">OTS</td>
</tr>
</tbody>
</table>
<hr class="minor">
<div class="row justify-content-center align-items-md-end mt-6">
<div class="col-md-3">
<form action="" class="">
<label class="d-none" aria-hidden="false" for="NumberItemsToShow">Show how many?</label>
<select class="custom-select mb-4 mr-md-4 mb-lg-0" id="NumberItemsToShow" style="height:38px;">
<option selected>Show 10 per page</option>
<option value="1">Show 25 per page</option>
<option value="2">Show 50 per page</option>
<option value="3">Show All</option>
</select>
</form>
</div>
<div class="col-md-6">
<nav class="" aria-label="Page navigation example">
<ul class="pagination justify-content-center mr-lg-4 mb-lg-0">
<li class="page-item">
<a class="page-link" href="#" aria-label="Previous">
<span class="fas fa-angle-double-left"></span>
</a>
</li>
<li class="page-item">
<a class="page-link" href="#">1</a>
</li>
<li class="page-item">
<a class="page-link" href="#">2</a>
</li>
<li class="page-item">
<a class="page-link" href="#">3</a>
</li>
<li class="page-item">
<a class="page-link" href="#">4</a>
</li>
<li class="page-item">
<a class="page-link" href="#">5</a>
</li>
<li class="page-item">
<a class="page-link" href="#" aria-label="Next">
<span class="fas fa-angle-double-right"></span>
</a>
</li>
</ul>
</nav>
</div>
<div class="col-md-3 text-lg-right">
<p class="mb-0 mb-lg-2">Showing<br class="d-none d-md-block d-lg-none"> <strong>X</strong> of <strong>Y</strong>
items.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<hr class="major">

<!-- Start Tabbed Content -->
<div class="container-fluid">
<div class="row">
<div class="col-12">
<ul class="nav nav-pills nav-pills-tabs pl-lg-16 mb-1" id="UserInfosTabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="Tab1Control" data-toggle="pill" href="#Tab1Content" role="tab" aria-controls="Tab1Content" aria-selected="true">
Tab 1
</a>
</li>
<li class="nav-item">
<a class="nav-link" id="Tab2Control" data-toggle="pill" href="#Tab2Content" role="tab" aria-controls="Tab2Content" aria-selected="false">
Tab 2
</a>
</li>
<li class="nav-item">
<a class="nav-link" id="Tab3Control" data-toggle="pill" href="#Tab3Content" role="tab" aria-controls="Tab3Content" aria-selected="false">
Tab 3
</a>
</li>
<li class="nav-item">
<a class="nav-link" id="Tab4Control" data-toggle="pill" href="#Tab4Content" role="tab" aria-controls="Tab4Content" aria-selected="false">
Tab 4
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="content-container py-4 p-lg-16 mb-4">
<div class="tab-content">
<div id="Tab1Content" class="tab-pane fade show active">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h4 text-primary">
<span class="fas fa-user text-primary-10"></span>
Tab 1
</h3>
<p class="lead">I am content in a tabbed content section.</p>
<partial name="uiparts/_Name" />
<p>Other content fits into here too. From rows and columns to paragraphs to forms.</p>
</div>
</div>
</div>
</div>
<div id="Tab2Content" class="tab-pane fade">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h4 text-primary">
<span class="fas fa-at text-primary-10"></span>
Tab 2
</h3>
<p class="lead">I am content in a tabbed content section.</p>
<partial name="uiparts/_Name" />
<p>Other content fits into here too.</p>
</div>
</div>
</div>
</div>
<div id="Tab3Content" class="tab-pane fade">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h4 text-primary">
<span class="fas fa-user-shield text-primary-10"></span>
Tab 3
</h3>
<p class="lead">I am content in a tabbed content section.</p>
<partial name="uiparts/_Name" />
<p>Other content fits into here too.</p>
</div>
</div>
</div>
</div>
<div id="Tab4Content" class="tab-pane fade">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h4 text-primary">
<span class="fas fa-hashtag text-primary-10"></span>
Tab 4
</h3>
<p class="lead">I am content in a tabbed content section.</p>
<partial name="uiparts/_Name" />
<p>Other content fits into here too.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<hr class="major">
<!-- Start Body Content -->
<div class="container">
<div class="row">
<div class="col-12">
<h2 class="legend">Body Content</h2>
</div>
</div>
<div class="row">
<div class="col-md-8 col-lg-7 pt-md-6">
<h1>Headings</h1>
<p>All HTML Heading tags (`h1` – `h6`) are available in Pelican. Headings semantically express the logical structure of a document’s or application screen’s information. Heading tags create an outline of the page’s information. The size of Headings helps to reinforce document hierarchy. Using the Header tags correctly also help search engines index the information. When using Headings, do not skip; Always start with h1 and use subsequent elements after. Only use one h1 Section Heading per page.</p>
<h2>Heading Guidlines</h2>
<p>Above is the second-level <code>h2</code> tag. Use <code>h2</code> headings to break pages into major sections. Each level after that (h3 - h6) is a next level into that section. If possible, try to stick with 3 levels total. 
<p>Pelican also uses Headings for:<p>
<ul>
<li>Page Titles</li>
<li>Page Section Titles</li>
</ul>
<p>When using Headings:</p>
<ul>
<li>Start with <code>h1</code></li>
<li>Use only one <code>h1</code> per page</li>
<li>Don't skip headings; use <code>h2</code>, <code>h3</code>, and subsequent Heading tags in order</li>
</ul>
<h2 class="h3">Using Heading Classes</h2>
<p>Avoid using Section Headings as a way to size text in your application. If you want to give text the appearence of a Section Heading, but cannot use the Section Heading element, use the Headings classes <code>.h1</code> – <code>.h6</code>, instead. These will give the associated text the appearance of the element, but the semantic structure of the document or application screen. You will note the Heading for this section is semantically an <code>h2</code>, but uses the <code>.h3</code> to give the appearance of an <code>h3</code> tag.</p>
<h2>Using Strong and Emphasis</h2>
<p>Use <code>strong</code> and <code>em</code> tags for visual and sematic expressivness in text. Using these tags affects the semantics of the text within. They also communicate this expressiveness for assistive technology users. The <code>strong</code> tag makes the text <strong>visually bolder</strong> and screen readers speak it <strong>audibly bolder</strong>. The <code>em</code> tag makes the text <em>italicized</em> and screen readers add <em>audible expressiveness</em> for users. If you want text to only appear <span class="font-weight-bold">bold</span> or <span class="font-italic">itaclized</span>, use <code>span</code> tags with the classes "font-weight-bold" or "font-italic". 
</p>
<p>Refer to <a href="https://getbootstrap.com/docs/5.1/content/typography/" target="_blank">Boostrap’s Typography documentation</a> for more information.
</p>	
</div>
</div>
</div>

<hr class="major">

<!-- Start Email Addresses -->
<div class="content-container mb-4 py-4 p-lg-16">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h3 mb-6 text-primary">
<span class="fas fa-at fa-fw mr-1 text-primary-10"></span> Email Addresses
</h3>
<p>We need at least 1 email address for you.</p>
<div class="row">
<div class="col-xl-6 mb-4">
<div class="card mb-4 mb-lg-0">
<div class="card-body">
<p class="h6 card-title font-weight-bold mr-12 mb-2">CardLabelHere</p>
<p class="mr-12 mb-2">Card Value Here</p>
<p class="small mr-12 mb-0">Card Meta Here</p>
<button class="btn btn-link btn-card-edit">
<span class="fas fa-pencil-alt"></span>
</button>
</div>
</div>
</div>
<div class="col-xl-6 mb-4">
<div class="card mb-4 mb-lg-0">
<div class="card-body">
<p class="h6 card-title font-weight-bold mr-12 mb-2">CardLabelHere</p>
<p class="mr-12 mb-2">Card Value Here</p>
<p class="small mr-12 mb-0">Card Meta Here</p>
<button class="btn btn-link btn-card-edit">
<span class="fas fa-pencil-alt"></span>
</button>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-xl-6 mb-4">
<button type="button" class="addThis btn-add-this">
<div>
<span class="fa fa-plus-circle fa-fw text-white"></span>
</div>
</button>
</div>
</div>
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<div class="form-row">
<div class="col-12">
<p class="h6 card-title font-weight-bold mr-12 mb-2">Add an Email Address</p>
</div>
<div class="col-12 col-xl-4">
<div class="form-group">
<label for="emailLabel">Email Address Label</label>
<select class="custom-select" id="emailLabel">
<option selected>&mdash; Select &mdash;</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
</div>
<div class="col-12 col-xl-4">
<div class="form-group">
<label for="emailAddress4">Email Address</label>
<input type="email" class="form-control" id="emailAddress4">
</div>
</div>
<div class="col-12 col-xl-4">
<div class="form-group">
<label for="EmailLang">Language</label>
<select class="custom-select" id="EmailLang">
<option selected>Use my preferred language</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<button class="btn btn-ui">
<span class="fas fa-check"></span>
</button>
<button class="btn btn-ui">
<span class="fas fa-undo-alt"></span>
</button>
<button class="btn btn-ui">
<span class="fas fa-minus-circle"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<hr class="major">			

<!-- Start Phone Numbers-->
<div class="content-container py-4 p-lg-16 mb-4">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h3 class="h3 mb-6 text-primary">
<span class="fas fa-phone fa-fw mr-1 text-primary-10"></span> Phone Numbers
</h3>
<p>Add as many phone numbers as you need. These phone numbers must be able to receive text messages.</p>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="card mb-4 mb-lg-0">
<div class="card-body">
<p class="h6 card-title font-weight-bold mr-12 mb-2">CardLabelHere</p>
<p class="mr-12 mb-2">Card Value Here</p>
<p class="small mr-12 mb-0">Card Meta Here</p>
<button class="btn btn-link btn-card-edit">
<span class="fas fa-pencil-alt"></span>
</button>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card mb-4 mb-lg-0">
<div class="card-body">
<p class="h6 card-title font-weight-bold mr-12 mb-2">CardLabelHere</p>
<p class="mr-12 mb-2">Card Value Here</p>
<p class="small mr-12 mb-0">Card Meta Here</p>
<button class="btn btn-link btn-card-edit">
<span class="fas fa-pencil-alt"></span>
</button>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<button type="button" class="addThis btn-add-this">
<div>
<span class="fa fa-plus-circle fa-fw text-white"></span>
</div>
</button>
</div>
</div>
<div class="row">
<div class="col-12">
<div class="card">
<div class="card-body">
<div class="form-row">
<div class="col-12">
<p class="h6 card-title font-weight-bold mr-12 mb-2">Add a Phone Number</p>
</div>
<div class="col-12 col-md-6 col-xl-4">
<div class="form-group">
<label for="PhoneLabel">Phone Number Label</label>
<select class="custom-select" id="PhoneLabel">
<option selected>&mdash; Select a Label for this Phone Number &mdash;</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
</div>
<div class="col-12 col-md-6 col-xl-3">
<div class="form-group">
<label for="PhoneNum">Phone Number</label>
<input type="tel" class="form-control" id="PhoneNum">
</div>
</div>
<div class="col-12 col-md-6 col-xl-2">
<div class="form-group">
<label for="PhoneExt">Extension</label>
<input type="tel" class="form-control" id="PhoneExt">
</div>
</div>
<div class="col-12 col-md-6 col-xl-3">
<div class="form-group">
<label for="PhoneLang">Language</label>
<select class="custom-select" id="PhoneLang">
<option selected>&mdash; Select Language &mdash;</option>
<option value="PreferredLanguage">Use my preferred language</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<button class="btn btn-ui">
<span class="fas fa-check"></span>
</button>
<button class="btn btn-ui">
<span class="fas fa-undo-alt"></span>
</button>
<button class="btn btn-ui">
<span class="fas fa-minus-circle"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<hr class="major">

<!-- Start Sign In-->
<div class="container-fluid mt-16 mb-4">
<div class="row justify-content-center">
<div class="col-12 col-md-10 col-lg-6">
<div class="card mb-0">
<div class="card-body">
<div class="row">
<div class="col-12">
<h3 class="h3 mb-6 text-primary">
<span class="fas fa-sign-in-alt fa-fw mr-1 text-primary-10"></span> Sign In
</h3>
</div>
</div>
<div class="row">
<div class="col-12">
<div class="form-group">
<label for="SignInUsername" class="label">User ID</label>
<input class="form-control" id="SignInUsername" type="text">
</div>
</div>
<div class="col-12">
<div class="form-group">
<label for="SignInPassword" class="label">Password</label>
<input class="form-control" id="SignInPassword" type="password">
<div class="custom-control custom-switch mt-2">
<input type="checkbox" class="custom-control-input" id="SignInShowPassword">
<label class="custom-control-label" for="SignInShowPassword">Show Password</label>
</div>
</div>
</div>
<div class="col-12">
<button type="submit" class="btn btn-ui btn-lg btn-shadow">Sign In
<span class="fas fa-sign-in-alt"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="container-fluid">
<div class="row justify-content-center">
<div class="col-12 col-md-10 col-lg-6">
<div class="card">
<div class="card-body">
<p class="mb-0">Don&rsquo;t have an account? <br class="d-block d-lg-none">
<a href="#" title="Go to MyLa to create a login account.">Create your own MyLa Account.</a>
</p>
</div>
</div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-12 col-md-10 col-lg-6 mt-4">
<p class="pl-4">Need help? <br class="d-block d-lg-none">
<a href="#" title="Get help for sign in problems.">Get help signing in.</a>
</p>
</div>
</div>
</div>

<hr class="major">

<!-- Start Modal -->
<div class="content-container p-16 mb-4">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<h2 class="legend">Modal</h2>
</div>
</div>
<div class="row">
<div class="col-12">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalID">Launch demo modal</button>

<!-- this is the actual modal markup -->
<div class="modal fade" id="ModalID" tabindex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true" aria-describedby="ModalTitle">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title text-primary" id="ModalTitle">
<span class="fas fa-bell text-primary-10"></span> Modal Title
</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<p><strong>For strong text, use this markup!</strong></p>
<p class="mb-0">For regular text, use this markup. But you can still insert <span class="strong">strong text</span> in this. Now, ready for the question?</p>
</div>
<div class="modal-footer text-center text-lg-left">
<form method="post">
<button type="button" class="btn btn-primary mb-4 mb-md-0 mb-lg-0" id="logout_url">Main Choice</button>
<button type="button" class="btn btn-ui" id="resetTimer" data-dismiss="modal">Choice</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>			
</div>	

<!-- Start Buttons -->
<div class="btn-container">
<div class="container-fluid">
<div class="row">
<div class="col-12">
<button type="button" class="btn btn-primary"><span class="fas fa-thumbs-up mr-1"></span>Submit This</button>
<button type="button" class="btn btn-ui"><span class="fas fa-upload mr-1"></span>Do Something Else</button>
<button type="button" class="btn btn-warning"><span class="fas fa-exclamation-circle mr-1"></span>Change This</button>
<button type="button" class="btn btn-danger"><span class="fas fa-exclamation-triangle mr-1"></span>Delete This</button>
</div>
</div>
</div>
</div>
