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

# What is Keyboard Navigation?
  
Some users, particularly those with visual or motor impairments, will use the keyboard to navigate your app or webpage. If a user can use the mouse to interact with a component, the same interaction must be accessible to a keyboard-only user.

## What are the Common Keyboard Controls?
 
* <kbd>Tab</kbd> : Navigates forwards between elements.
* <kbd>Shift + Tab</kbd> : Navigates backwards between elements.
* <kbd>Arrow Keys</kbd> : Moves between options, such as in a Select, Radio, or Checkboxes.
* <kbd>Enter</kbd> : Activates links and buttons or Submits forms.
* <kbd>Spacebar</kbd> : Activates Buttons, Switches, Checkboxes, or Radios.
* <kbd>Esc</kbd> : Can close Modals or stop some actions.

## What is Focus?

Focus creates an ouline (typically a light-blue outline around interactive items) around which element the user’s keyboard is currently situated. Although Focus may change based on your particular application, follow these general guidelines:

* Unless there is a Skip Link, Focus should start on the first interactive element on the screen when the page loads.
* Focus should never change on its own. It should **always** be initiated by a user action.
* Focus should be obvious.
* If an action causes the currently focused element to disable or hide, then Focus should go to the next logical interactive element.
* Don’t remove Focus styles.
* Focus follows source order.

## Considerations for Keyboard Navigation

Ensure accessibility, so keep the following in mind:

* All interactive elements on the page should be accessible via keyboard navigation. If a user can do something with a mouse, it should also be accessible to a keyboard-only user.
* Users should be able to focus on every interactive element on the page using Tab (or Shift + Tab to move in reverse). These include buttons, links, toggles, and menu options. 
* Once focused on an interactive object, users should be able to interact with it using the Enter, Spacebar, or Arrow keys depending on the element.
* Users should not be able to Tab to non-interactive elements, such as images, text areas, or other static elements 

## Special Keyboard Uses

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
