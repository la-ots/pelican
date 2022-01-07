---
title: Keyboard Navigation
summary: Users should be able to completely interact with your application using only the keyboard.
tags: accessibility, keyboard, focus
layout: guide
eleventyNavigation:
  key: Keyboard Navigation
  parent: Accessibility
  order: 3
  excerpt: Applications should be accessible to keyboard-only users.
  img: /img/illustrations/illus-keyboard.svg
---

## What is Keyboard Navigation?
  
Some users, particularly those with visual or motor impairments, will use the keyboard to navigate your app or webpage. If a user can use the mouse to interact with a component, the same interaction must be accessible to a keyboard-only user.

## What are the Common Keyboard Controls?
 
* **Tab** - Navigates forwards between elements
* **Shift + Tab** - Navigates backwards between elements
* **Arrow Keys** - Selects options, such as in a Select, Radio, or Checkboxes
* **Enter** - Activates links and buttons or Submits forms
* **Spacebar** - Activates buttons or toggles
* **Esc** - Closes Modals or other 

## What is Focus?

Users should always visually know where they are on the page. Interactive elements should have a Focus effect (typically a light-blue outline around interactive items) when selected.

Although Focus may change based on your particular application, follow these general guidelines:

* Unless there is a Skip Link, Focus should start on the first interactive element on the screen when the page loads.
* Focus should never change on its own. It should always be initiated by a user action.
* Users should always know where they are on the page. Focus should be obvious.
* If an action causes the currently focused element to disable/ hide, Focus should go to the next logical interactive element
* Don’t remove Focus styles

## Considerations for Keyboard Navigation

All interactive elements on the page should be accessible via keyboard navigation. If a user can do something with a mouse, it should also be accessible to a keyboard-only user.

When testing applications for accessibility, keep the following in mind:

* Users should be able to focus on every interactive element on the page using Tab (or Tab+Shift to move in reverse). These include buttons, links, toggles, and menu options. 
* Once focused on an interactive object, users should be able to interact with it using the Enter, Spacebar, or Arrow keys depending on the element.
* Users should not be able to Tab to non-interactive elements, such as images, text areas, or other static elements 

## Do Certain Interactive Elements have Special Keyboard Use Cases?

Typeaheads/ Selects / Autocompletes
* Arrow Keys allow users to navigate through presented options
* Enter activates or selects desired option
* Esc collapses the menu

Modal
* Focus is always initially on the ‘Cancel’ or ‘Close’ option, unless project calls for a different behavior
* Enter submits the chosen option
* Esc closes the Modal, cancelling the action


## Resources
* <a href="https://webaim.org/techniques/keyboard/" target="_blank">WebAIM - Keyboard Accessibility</a>

