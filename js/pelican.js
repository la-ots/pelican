"use strict";

import * as bootstrap from "bootstrap";
import { initPelicanComboboxes } from "./components/combobox.js";

window.bootstrap = bootstrap;

// Automatically initializes Pelican comboboxes (autocomplete) when the DOM is fully loaded
const initializePelicanComponents = () => {
  initPelicanComboboxes();
};

// Waits until the page is ready before initializing Pelican components
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePelicanComponents);
} else {
  initializePelicanComponents();
}
