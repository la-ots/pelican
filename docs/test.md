---
title: Test
layout: test
eleventyExcludeFromCollections: true
---



<!-- based on 'markup/breadcrumbs.njk' -->
<nav class="breadcrumb-wrapper" aria-label="breadcrumbs" class="breadcrumb-wrapper">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="/">
        <span class="fas fa-home" aria-hidden="true"></span>
        <span class="sr-only">Home</span>
      </a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Section</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <span>Current</span>
      <span class="fas fa-eye ml-2" aria-hidden="true"></span>
    </li>
  </ol>
</nav>

<!-- based on 'markup/page-title.njk' / 'markup/badges.njk' -->
<div class="page-title">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-lg-flex justify-content-lg-between align-items-center">
        <div class="mb-2 mb-lg-0">
          <h2 class="page-title-text">
            <span class="icon fas fa-home" aria-hidden="true"></span>
            Page Title
            <span class="badge badge-primary">Badge</span>
            <span class="badge badge-success">Badge</span>
            <span class="badge badge-warning">Badge</span>
            <span class="badge badge-info">Badge</span>
            <span class="badge badge-danger">Badge</span>
            <span class="badge badge-ui">Badge</span>
            <span class="badge badge-accent">Badge</span>
          </h2>	
          <p class="mb-0">Page heading message goes here.</p>
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

<!-- based on 'markup/alert-success.njk' / 'markup/alert-info.njk' / 'markup/alert-warning.njk' / 'markup/alert-danger.njk' -->
<div class="container-fluid">
  <div class="alert alert-success alert-dismissable fade show" role="alert">
    <span class="alert-icon fas fa-check-circle"></span>
    <strong>Success!</strong> Hey, User, the thing worked.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="fas fa-times" aria-hidden="true"></span>
    </button>
  </div>
  <div class="alert alert-info alert-dismissable fade show" role="alert">
    <span class="alert-icon fas fa-info-circle"></span>
    <strong>Info.</strong> Hey, User, you might find this nice.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="fas fa-times" aria-hidden="true"></span>
    </button>
  </div>
  <div class="alert alert-warning alert-dismissable fade show" role="alert">
    <span class="alert-icon fas fa-exclamation-circle"></span>
    <strong>Warning!</strong> Uh, User, you need to know this!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="fas fa-times" aria-hidden="true"></span>
    </button>
  </div>
  <div class="alert alert-danger alert-dismissable fade show" role="alert">
    <span class="alert-icon fas fa-exclamation-triangle"></span>
    <strong>Danger!</strong> Whoa, User! Bad things could happen!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="fas fa-times" aria-hidden="true"></span>
    </button>
  </div>
</div>

<!-- based on 'markup/progress-large.njk' -->
<div class="progress-large">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-9 col-md-10">
        <div class="progress-info">
          <div class="progress-step" aria-hidden="true">
            <div class="progress-step-digit">1</div>
          </div>
          <div>
            <span class="progress-description-counter ">Step X of X</span>
            <span class="progress-description">Description of Step</span>
          </div>
        </div>
      </div>
      <div class="col-3 col-md-2 text-right">
        <a href="#" class="btn btn-outline-primary mb-2 mb-sm-0">
          <span class="fas fa-arrow-left" aria-hidden="true"></span>
          <span class="sr-only">Go back one step</span>
        </a>
        <a href="#" class="btn btn-outline-primary">
          <span class="fas fa-arrow-right" aria-hidden="true"></span>
          <span class="sr-only">Go forward one step</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/form-section-header-sentence.njk' / 'markup/input-text.njk' / 'markup/input-text-plain.njk' / 'markup/select.njk' / 'markup/tooltips.njk' -->
<div class="content-container">
	<div class="container-fluid">
		<div class="row">
			<div class="col-4">
				<h2 class="legend h2 text-primary">Heading</h2>
				<p class="font-weight-bold mb-0">Use the minor dividers to signal tight relations among form elements when necessary.</p>
			</div>
		</div>
    <div class="row">
			<div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="staticEmail" class="label mb-0">Label</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Value" tabindex="-1">
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
		</div>
    <hr class="minor">
    <div class="row">
			<div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="selectChoices">Label</label>
          <select class="custom-select" id="selectChoices">
            <option selected>&mdash; Select &mdash;</option>
            <option value="1">1 (One)</option>
            <option value="2">2 (Two)</option>
            <option value="3">3 (Three)</option>
          </select>
        </div>
			</div>
      <div class="col-3">
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Label</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <button type="button" class="btn btn-ui btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip">
          <span class="fas fa-question"></span>
        </button>
			</div>
		</div>
	</div>
</div>

<hr class="major">

<!-- based on 'markup/form-section-header-sentence.njk' / 'markup/input-file.njk' / 'markup/popovers.njk' / 'markup/checkboxes.njk' / 'markup/radios.njk' / 'markup/switches-little.njk' / 'markup/toggle-tokens-exclusive.njk' / 'markup/toggle-tokens-inclusive.njk' / 'markup/textarea.njk' -->
<div class="content-container">
	<div class="container-fluid">
		<div class="row">
			<div class="col-4">
				<h2 class="legend h2 text-primary">Heading</h2>
				<p class="mb-0">Form portions 1 and 2 belong together in the same large data set being collected, but each section has fields more tightly related to each other than other members of the form. Let’s ease the reading burden by breaking the form into visually-associated chunks.</p>
			</div>
		</div>
    <div class="row">
      <div class="col-3">
        <div class="form-group">
          <label for="customFile" aria-hidden="true">Label</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
          <small>This presents a file-selection UI.</small>
        </div>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-ui btn-sm" data-toggle="popover" data-placement="top" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">?</button>
      </div>
    </div>
    <hr class="minor">
    <div class="row">
			<div class="col-3">
        <div class="form-group">
          <p class="label">Label</p>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue1" checked>
            <label class="custom-control-label" for="checkboxValue1">Value</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue2">
            <label class="custom-control-label" for="checkboxValue2">Unchecked</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue5" disabled>
            <label class="custom-control-label" for="checkboxValue5">Disabled, Unchecked</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkboxValue5" disabled>
            <label class="custom-control-label" for="checkboxValue5">Disabled, Checked</label>
          </div>
        </div>
			</div>
      <div class="col-3">
        <p class="label">Label</p>
        <div class="form-group">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue1" name="radioChoice" checked>
            <label class="custom-control-label" for="radioValue1">Value</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue2" name="radioChoice">
            <label class="custom-control-label" for="radioValue2">Unticked</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="radioValue3" name="radioChoice" disabled>
            <label class="custom-control-label" for="radioValue3">Disabled, Ticked</label>
          </div>
        </div>
			</div>
      <div class="col-3">
        <p class="label">Label</p>
        <div class="custom-control custom-control-inline custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="true">
          <label class="custom-control-label" for="customSwitch1">Value</label>
        </div>
        <div class="custom-control custom-control-inline custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch2">
          <label class="custom-control-label" for="customSwitch2">Off / No</label>
        </div>
        <div class="custom-control custom-control-inline custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch3" checked="true" disabled>
          <label class="custom-control-label" for="customSwitch3">Disabled, On</label>
        </div>
        <div class="custom-control custom-control-inline custom-switch">
          <input type="checkbox" class="custom-control-input" disabled id="customSwitch4" disabled>
          <label class="custom-control-label" for="customSwitch4">Disabled, Off / No</label>
        </div>
			</div>
		</div>
    <hr class="minor">
    <div class="row">
			<div class="col-3">
        <div class="form-group">
          <p class="label">Which will you choose?</p>
          <div class="form-check toggle-token">
            <input class="form-check-input" type="radio" value="" name="exclusiveChoice01" id="toggleTokenField11" value="option1">
            <label class="form-check-label" for="toggleTokenField11">
              <span class="fas fa-circle"></span>
              <span class="fas fa-dot-circle"></span>
              Value
            </label>
          </div>
          <div class="form-check toggle-token ml-4">
            <input class="form-check-input" type="radio" value="" name="exclusiveChoice01" id="toggleTokenField12" value="option2">
            <label class="form-check-label" for="toggleTokenField12">
              <span class="fas fa-circle" aria-hidden="true"></span>
              <span class="fas fa-dot-circle" aria-hidden="true"></span>
              Value
            </label>
          </div>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <p class="label">Which will you choose?</p>
          <div class="form-check toggle-token">
            <input class="form-check-input" type="checkbox" value="" id="toggleTokenField01">
            <label class="form-check-label" for="toggleTokenField01">
              <span class="fas fa-square" aria-hidden="true"></span>
              <span class="fas fa-check-square" aria-hidden="true"></span>
              Value
            </label>
          </div>
          <div class="form-check toggle-token ml-4">
            <input class="form-check-input" type="checkbox" value="" id="toggleTokenField02">
            <label class="form-check-label" for="toggleTokenField02">
              <span class="fas fa-square " aria-hidden="true"></span>
              <span class="fas fa-check-square" aria-hidden="true"></span>
              Value
            </label>
          </div>
        </div>
			</div>
		</div>
    <hr class="minor">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="textarea1" class="label">Label</label>
          <textarea class="form-control" id="textarea1" rows="5"></textarea>
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
      </div>
    </div>
	</div>
</div>

<hr class="major">

<!-- based on 'markup/input-text.njk' / 'markup/select.njk' / 'markup/pagination.njk' / 'markup/table.njk' -->
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
			<div class="col-12">
				<h2 class="legend h2 text-primary">Heading</h2>
			</div>
		</div>
    <div class="row">
			<div class="col-3">
        <div class="form-group">
          <label for="inputTextBox199">Filter By Something</label>
          <input type="text" class="form-control" id="inputTextBox199">
          <small>This accepts any kind of alphanumeric characters.</small>
        </div>
			</div>
      <div class="col-3">
        <div class="form-group">
          <label for="selectChoices">Label</label>
          <select class="custom-select" id="selectChoices">
            <option selected>&mdash; Select &mdash;</option>
            <option value="1">1 (One)</option>
            <option value="2">2 (Two)</option>
            <option value="3">3 (Three)</option>
          </select>
          <small>Use radios instead if possible. But, no more than 7 - 15 options otherwise.</small>
        </div>
			</div>
		</div>
    <table class="table table-striped">
      <caption class="d-none">Table caption describes the data presented.</caption>
      <thead>
        <tr>
          <th scope="col" id="user">
            <a href="#" class="text-decoration-none" role="button">
              <span class="fas fa-sort"></span> User
            </a>
          </th>
          <th scope="col" id="role">
            <a href="#" class="text-decoration-none" role="button">
              <span class="fas fa-sort"></span> Role
            </a>
          </th>
          <th scope="col" id="figma">
            Figma Trained
          </th>
          <th scope="col" id="team">
            <a href="#" class="text-decoration-none" role="button">
              <span class="fas fa-sort"></span> Team
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" id="John">John</th>
          <td headers="role John">Boss</td>
          <td headers="figma John">No</td>
          <td headers="team John">OTS</td>
        </tr>
        <tr>
          <th scope="row" id="Susan">Susan</th>
          <td headers="role Susan">Developer</td>
          <td headers="figma Susan">No</td>
          <td headers="team Susan">EA</td>
        </tr>
        <tr>
          <th scope="row" id="Deborah">Deborah</th>
          <td headers="role Deborah">Business Analyst</td>
          <td headers="figma Deborah">Yes</td>
          <td headers="team Deborah">OTS</td>
        </tr>
        <tr>
          <th scope="row" id="Rick">Rick</th>
          <td headers="role Rick">Business Analyst</td>
          <td headers="figma Rick">Yes</td>
          <td headers="team Rick">DOC</td>
        </tr>
        <tr>
          <th scope="row" id="Kevin">Kevin</th>
          <td headers="role Kevin">Product Owner</td>
          <td headers="figma Kevin">No</td>
          <td headers="team Kevin">OJJ</td>
        </tr>
        <tr>
          <th scope="row" id="José">José</th>
          <td headers="role José">Tester</td>
          <td headers="figma José">No</td>
          <td headers="team José">OMV</td>
        </tr>
        <tr>
          <th scope="row" id="Bob">Bob</th>
          <td headers="role Bob">Business Analyst</td>
          <td headers="figma Bob">Yes</td>
          <td headers="team Bob">OMV</td>
        </tr>
        <tr>
          <th scope="row" id="Jane">Jane</th>
          <td headers="role Jane">Database Administrator</td>
          <td headers="figma Jane">No</td>
          <td headers="team Jane">DOC</td>
        </tr>
        <tr>
          <th scope="row" id="Todd">Todd</th>
          <td headers="role Todd">Developer</td>
          <td headers="figma Todd">No</td>
          <td headers="team Todd">DOC</td>
        </tr>
        <tr>
          <th scope="row" id="Frank">Frank</th>
          <td headers="role Frank">Developer</td>
          <td headers="figma Frank">No</td>
          <td headers="team Frank">OTS</td>
        </tr>
      </tbody>
    </table>
    <div class="row justify-content-center align-items-md-end mt-6">
      <div class="col text-center text-lg-right">
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
      <div class="col-auto">
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
      <div class="col text-center text-lg-left">
        <p class="mb-2">Showing<br class="d-none d-md-block d-lg-none"> <strong>X</strong> of <strong>Y</strong>
          items.</p>
      </div>
    </div>
  </div>
</div>


<hr class="major">

<!-- based on 'markup/button-page-actions.njk' -->
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <h1>Heading 1</h1>
        <p class="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <h2>Heading 2</h2>
        <p class="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <h3>Heading 3</h3>
        <p class="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <h4>Heading 4</h4>
        <p class="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <h5>Heading 5</h5>
        <p class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <h6>Heading 6</h6>
        <p class="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.</p>
        <p class="lead">This is a lead sentence.</p>
        <p class="lead font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.
        </p>
        <p>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.
        </small>
        </p>
        <p>
        <small class="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.
        </small>
        </p>
        <hr class="minor">
        <button type="button" class="btn btn-outline-ui">
          <span class="fas fa-print"></span> Print
        </button>
        <button type="button" class="btn btn-outline-ui mx-2">
          <span class="fas fa-envelope-open"></span> Email
        </button>
        <button type="button" class="btn btn-outline-ui">
          <span class="fas fa-share-alt"></span> Share
        </button>
      </div>
      <div class="col-3">
      <div class="card">
        <div class="card-body">
          <details id="toc" open="">
            <summary class="summary font-weight-bold">On this page:</summary>
            <div class="mt-2">
              <nav class="toc">
                <ol>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                  <li class="mt-1"><a href="#">Heading X</a>
                  </li>
                </ol>
              </nav>
            </div>
          </details>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/form-section-header.njk' / 'markup/button-container.njk' -->
<div class="btn-container">
  <div class="container-fluid">
    <div class="row">
			<div class="col-12">
				<h2 class="legend h2 text-primary">Modal and Toasts</h2>
			</div>
		</div>
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary">
          Launch Modal
        </button>
        <button type="button" class="btn btn-info">
          Launch Info Toast
        </button>
        <button type="button" class="btn btn-danger"> 
          Launch Danger Toast
        </button>
        <button type="button" class="btn btn-success">
          Launch Success Toast
        </button>
      </div>
    </div>
  </div>	
</div>

<hr class="major">

<!-- based on 'markup/card.njk' / data tile page / 'markup/progress-small.njk' / 'markup/share-social.njk' -->
<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <p class="font-weight-bold">
            Card Title
          </p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="data-tile">
        <div class="data-tile-body">
          <p class="fw-bold text-black mb-0">Label</p>
          <hr class="minor my-2">
          <p class="mb-0">Label</p>
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 38%" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">38%</div>
        <div class="progress-bar progress-bar-striped bg-warning text-black" role="progressbar" style="width: 62%" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">62%</div>
      </div>
    </div>
    <div class="col-3">
      <div class="share-social">
        <div class="share-social-body">
          <small>Share this with others!</small>
          <a class="btn" role="button" target="_blank" href="#" title="Share this on Facebook">
            <span class="fab fa-facebook-f fa-fw"></span>
          </a>
          <a class="btn" role="button" target="_blank" href="#" title="Share this on LinkedIn">
            <span class="fab fa-linkedin-in fa-fw"></span>
          </a>
          <a class="btn" role="button" target="_blank" href="#" title="Share this on Twitter">
            <span class="fab fa-twitter fa-fw"></span>
          </a>
          <a class="btn" role="button" target="_blank" href="#" title="Share this in an Email">
            <span class="fas fa-link fa-fw"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<hr class="major">
<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <p class="font-weight-bold">
              Card Title
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl. Nulla non magna nec risus vehicula aliquet. Ut feugiat sem ut euismod tempus. Quisque tincidunt finibus felis eu tempus. Sed mauris risus, elementum eleifend leo eu, accumsan efficitur lacus. Maecenas quis massa a nisi varius pulvinar. Cras rhoncus eu mauris vel vehicula. Vivamus blandit, tellus sit amet consectetur luctus, nisl neque viverra urna, eu finibus urna magna ac dui. Nulla nulla est, posuere sed sem at, eleifend pulvinar nunc. In tempor urna id massa eleifend hendrerit.
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="data-tile">
          <div class="data-tile-body">
            <p class="fw-bold text-black mb-0">Label</p>
            <hr class="minor my-2">
            <p class="mb-0">Label</p>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style="width: 38%" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">38%</div>
          <div class="progress-bar progress-bar-striped bg-warning text-black" role="progressbar" style="width: 62%" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">62%</div>
        </div>
      </div>
      <div class="col-3">
        <div class="share-social">
          <div class="share-social-body">
            <small>Share this with others!</small>
            <a class="btn" role="button" target="_blank" href="#" title="Share this on Facebook">
              <span class="fab fa-facebook-f fa-fw"></span>
            </a>
            <a class="btn" role="button" target="_blank" href="#" title="Share this on LinkedIn">
              <span class="fab fa-linkedin-in fa-fw"></span>
            </a>
            <a class="btn" role="button" target="_blank" href="#" title="Share this on Twitter">
              <span class="fab fa-twitter fa-fw"></span>
            </a>
            <a class="btn" role="button" target="_blank" href="#" title="Share this in an Email">
              <span class="fas fa-link fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="major">

<!-- based on 'markup/component-collapse.njk' / loading animation page -->
<div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <details id="example01">
            <summary class="lead text-ui-priority">What is the question and does it wrap when necessary?</summary>
            <div class="mt-2">
              <p>I am the answer to the question. Users will see this answer only after they have clicked the question above.<p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <details id="example01">
              <summary class="lead text-ui-priority">What is the question and does it wrap when necessary?</summary>
              <div class="mt-2">
                <p>I am the answer to the question. Users will see this answer only after they have clicked the question above.<p>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="spinner-border text-ui" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="col-3">
        <div class="spinner-border text-ui" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="major">

<!-- based on 'markup/tabbed-content-traditional.njk' -->
<div class="content-container ">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs" id="tabset2" role="tablist">
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab1TraditionalContent" aria-selected="true" class="nav-link active" href="#Tab1TraditionalContent">Active</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab2TraditionalContent" aria-selected="false" class="nav-link" href="#Tab2TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
          <li class="nav-item" role="presentation">
            <a id="" data-toggle="tab" aria-controls="#Tab3TraditionalContent" aria-selected="false" class="nav-link" href="#Tab3TraditionalContent">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/feature-cta-double.njk' -->
<div class="feature-cta-double">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-md-6 col-lg-5">
        <h2 class="feature-big-text">Big Text</h2>
        <p class="feature-small-text">This is smaller text which explains this block. This is smaller text which explains this block.</p>
      </div>
      <div class="col-md-6 offset-lg-1 text-center">
        <a href="#" class="btn btn-white d-block d-md-inline mb-4 mb-md-0">Button <span class="fas fa-arrow-right" aria-hidden="true"></span></a>
        <a href="#" class="btn btn-white d-block d-md-inline">Button <span class="fas fa-arrow-right" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/feature-set.njk' -->
<div class="content-container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="feature-big-text">Set Name</h2>
          <p class="feature-lead-text">This guide’s focus is to offer clear guidance on how to build reliable, predicatable, and reusable components for use in Louisiana’s digital products. </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10 col-md-6">
          <hr class="minor my-8">
          <p class="feature-lead-icon">
            <span class="fas fa-info-circle"></span>
          </p>
          <p class="feature-small-text">This is smaller text which explains this block.</p>
          <a href="#" class="btn btn-ui-priority">
            Button
            <span class="fas fa-arrow-right"></span>
          </a>
        </div>
        <div class="col-10 col-md-6">
          <hr class="minor my-8">
          <p class="feature-lead-icon">
            <span class="fas fa-info-circle"></span>
          </p>
          <p class="feature-small-text">This is smaller text which explains this block.</p>
          <a href="#" class="btn btn-ui-priority">
            Button
            <span class="fas fa-arrow-right"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

<!-- based on 'markup/hero-dual-pane.njk' -->
<div id="" class="hero-dual-pane" style="background-image: url('/img/photos/pexels-photo-275030.jpeg');">
  <div class="overlay overlay-left"></div>
  <div class="overlay overlay-right bg-secondary"></div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-md-7 col-lg-6">
        <h2 class="hero-big-text">Big text.</h2>
        <p class="hero-small-text">This is smaller text which explains this block. This is smaller text which explains this block.</p>
      </div>
      <div class="col-10 col-md-7 col-lg-6 d-flex flex-column justify-content-center align-items-center">
        <a href="/get-started/" class="btn btn-outline-primary btn-lg">Button</a>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/hero-textbox-over-photo.njk' -->
<div class="hero-textbox-over-photo" 
  style="background-image:url('/img/photos/pexels-photo-275030.jpeg');">
  <div class="overlay" style=""></div>
  <div class="hero-textbox">
    <h2 class="hero-big-text">Big text.</h2>
    <p class="hero-small-text">This is smaller text which explains this block. This is smaller text which explains this block.</p>
    <a href="#" class="btn btn-white">Button</a>
  </div>
</div>

<!-- based on 'markup/hero-text-color-toned-photo.njk' -->
<div class="hero-text-color-toned-photo" style="background-image: url('/img/photos/pexels-photo-275030.jpeg');">
  <div class="overlay bg-primary"></div>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="col-12 col-md-5 col-lg-4">
        <p class="hero-big-text">Big text.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4">
        <p class="hero-small-text">This is smaller text which explains this block. This is smaller text which explains this block.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4">
        <a href="/introduction" class="btn btn-outline-primary">Button</a>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/hero-single-pane.njk' -->
<div class="hero-solo-pane">
  <div class="row no-gutters">
    <div class="col-lg-6 half-left" style="background-image: url('/img/photos/pexels-photo-275030.jpeg');">
      <img src="/img/photos/pexels-photo-275030.jpeg" alt="Photo a building shaped like a person." class="img-fluid">
    </div>
    <div class="col-lg-6 half-right ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-10 col-lg-8">
            <h2 class="hero-big-text">Big text.</h2>
            <p class="hero-small-text">This is smaller text which explains this block. This is smaller text which explains this block.</p>
            <a href="/introduction" class="btn btn-white btn-lg">Button</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- based on 'markup/button-container.njk' -->
<div class="btn-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary">
          <span class="fas fa-arrow-right" aria-hidden="true"></span> 
          Button
        </button>
        <button type="button" class="btn btn-accent">
          <span class="fas fa-arrow-right" aria-hidden="true"></span> 
          Button
        </button>
        <button type="button" class="btn btn-outline-ui">
          Button
        </button>
        <button type="button" class="btn btn-outline-ui">
          Button
        </button>
        <button type="button" class="btn btn-outline-ui">
          Button
        </button>
        <button type="button" class="btn btn-danger ml-auto">
          <span class="fas fa-trash-alt" aria-hidden="true"></span> 
          Button
        </button>
        <button type="button" class="btn btn-warning">
          <span class="fas fa-trash-alt" aria-hidden="true"></span> 
          Button
        </button>
      </div>
    </div>
  </div>	
</div>
