---
title: Form Validation
summary:
tags: forms
layout: guide
eleventyNavigation:
  key: Form Validation
  parent: Form Controls
  order: 13
  excerpt:
  img: /img/illustrations/illus-form-section-header.png
---

## Best Practices

Form validation helps our users know they’ve given us appropriate information in form fields. Pelican builds in form validation styles but you’ll have to submit the data and run validation yourself. This page is a sample to show you how form validation will look.

- Don’t rely on color alone to convery a form field’s state.
- Pelican adds icons to help users distinguish between valid and invalid fields.
- It’s best to validate the form before sending data to the server.

## Usage

<p class="codepen" data-height="{{codepen.embedHeight}}" data-default-tab="html,result" data-slug-hash="YPzBgeO" data-pen-title="Form Validation" data-editable="true" data-user="lagovdesignteam" style="height: {{codepen.embedHeightPx}} box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/lagovdesignteam/pen/YPzBgeO">
  Form Validation</a> by LA Gov Design Team (<a href="https://codepen.io/lagovdesignteam">@lagovdesignteam</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Resources

- [Validation](https://getbootstrap.com/docs/5.3/forms/validation/)

<script>
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
</script>
