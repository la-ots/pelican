let pageWrapper = document.getElementById("page-wrapper");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let sidebarDropdownLink = document.querySelectorAll(
  ".sidebar-dropdown-header-expand",
);
let scrollToTop = document.getElementById("ScrollToTop");

let slideUp = (target, duration = 500) => {
  // Check if already hidden or animating
  if (!target || window.getComputedStyle(target).display === "none") return;

  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight; // Force reflow
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;

  window.setTimeout(() => {
    target.style.display = "none";
    target.setAttribute("aria-hidden", "true");
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("box-sizing");
  }, duration);
};

let slideDown = (target, duration = 500) => {
  // Check if already visible or animating
  if (!target || window.getComputedStyle(target).display !== "none") return;

  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  target.setAttribute("aria-hidden", "false");

  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight; // Force reflow
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("box-sizing");
  }, duration);
};

// ADD THE DROPDOWN TOGGLE CODE HERE
sidebarDropdownLink.forEach((dropdownItem) => {
  const toggleDropdown = (event) => {
    event.preventDefault();

    let sidebarSubMenu = document.querySelectorAll(".sidebar-submenu");
    let expand = event.target;

    if (expand.nodeName !== "BUTTON") {
      expand = expand.parentNode;
    }
    let header = expand.parentNode;

    let nextSibling = header.nextElementSibling;
    while (nextSibling && !nextSibling.classList.contains("sidebar-submenu")) {
      nextSibling = nextSibling.nextElementSibling;
    }

    let wasActive = expand.classList.contains("active");

    sidebarSubMenu.forEach((subMenu) => {
      let display = window.getComputedStyle(subMenu).display;
      if (display === "block" && subMenu !== nextSibling) {
        slideUp(subMenu, 200);
      }
    });

    sidebarDropdownLink.forEach((link) => {
      link.classList.remove("active");
      link.setAttribute("aria-expanded", "false");
    });

    if (!wasActive && nextSibling) {
      expand.classList.add("active");
      expand.setAttribute("aria-expanded", "true");
      slideDown(nextSibling, 200);
    } else if (nextSibling) {
      expand.setAttribute("aria-expanded", "false");
      slideUp(nextSibling, 200);
    }
  };

  dropdownItem.addEventListener("click", toggleDropdown);

  dropdownItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown(event);
    }
  });
});

function menuA11Y() {
  //insert menu hidding behavior
  if (sidebar.offsetLeft == 0) {
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.removeAttribute("inert");
    sidebar.setAttribute("visibility", "visible");
    sidebar.setAttribute("aria-expanded", "true");
  } else {
    sidebar.setAttribute("aria-hidden", "true");
    sidebar.setAttribute("inert", "inert");
    sidebar.setAttribute("visibility", "hidden");
    sidebar.setAttribute("aria-expanded", "false");
  }
}
if (sidebar) {
  sidebar.ontransitionend = menuA11Y;
  menuA11Y();
}

if (sidebarButton) {
  sidebarButton.onclick = () => {
    pageWrapper.classList.toggle("toggled");
  };
}

window.onscroll = () => {
  scrollFunction();
};

if (scrollToTop) {
  scrollToTop.onclick = (event) => {
    event.preventDefault();
    topFunction();
  };
}

function scrollFunction() {
  if (scrollToTop) {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  let pageContent = document.getElementsByClassName("page-content");
  if (pageContent && pageContent.length > 0) {
    pageContent[0].scrollTop = 0;
  } else {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]'),
);
popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]'),
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

(() => {
  const defaultOptions = [
    "Apply for Benefits",
    "Driver Services",
    "Fishing License",
    "Hunting License",
    "Medicaid Information",
    "Office Locations",
    "Professional Licensing",
    "Public Records Request",
  ];

  // get options from data attribute or use defaults
  const parseOptions = (wrapper) => {
    const rawOptions = wrapper.getAttribute("data-pelican-combobox-options");
    if (!rawOptions) {
      return [...defaultOptions];
    }

    try {
      const parsedOptions = JSON.parse(rawOptions);
      if (!Array.isArray(parsedOptions)) {
        return [...defaultOptions];
      }
      // keep only valid string options
      return parsedOptions
        .filter((option) => typeof option === "string")
        .map((option) => option.trim())
        .filter(Boolean);
    } catch (error) {
      console.warn(
        "Invalid data-pelican-combobox-options JSON. Falling back to default options.",
        error,
      );
      return [...defaultOptions];
    }
  };

  // initiate combobox
  const initializeCombobox = (wrapper, index) => {
    const input = wrapper.querySelector(".pelican-combobox__input");
    const listbox = wrapper.querySelector(".pelican-combobox__listbox");
    const status = wrapper.querySelector(".pelican-combobox__status");
    const label = wrapper.querySelector(".pelican-combobox__label");
    const helpText = wrapper.querySelector(".pelican-combobox__help");

    if (!input || !listbox || !status) {
      return;
    }

    const options = parseOptions(wrapper);
    const comboboxId = `pelican-combobox-${index + 1}`;

    if (!input.id) {
      input.id = `${comboboxId}-input`;
    }

    if (!listbox.id) {
      listbox.id = `${comboboxId}-listbox`;
    }

    if (!status.id) {
      status.id = `${comboboxId}-status`;
    }

    if (label) {
      label.setAttribute("for", input.id);
    }

    // connects help text to the input for screen readers
    if (helpText) {
      if (!helpText.id) {
        helpText.id = `${comboboxId}-help`;
      }
      input.setAttribute("aria-describedby", helpText.id);
    } else {
      input.removeAttribute("aria-describedby");
    }

    input.setAttribute("aria-controls", listbox.id);

    let filtered = [];
    let active = -1;
    let isOpen = false;
    let hasAnnounced = false;

    const updateStatus = () => {
      const query = input.value.trim();

      if (!isOpen) {
        status.textContent = "";
        hasAnnounced = false;
        return;
      }

      // announces if no options are found
      if (!filtered.length) {
        status.textContent = "";
        setTimeout(() => {
          status.textContent = query ? `No matches for ${query}.` : "No matches.";
        }, 30);
        hasAnnounced = true;
        return;
      }

      // announces the currently active option
      if (active >= 0) {
        status.textContent = "";
        setTimeout(() => {
          status.textContent = `${filtered[active]}, ${active + 1} of ${filtered.length}`;
        }, 30);
      } else if (!hasAnnounced) {
        status.textContent = "";
        setTimeout(() => {
          status.textContent = `${filtered.length} suggestion${filtered.length === 1 ? "" : "s"} available. Use up and down arrow keys to navigate.`;
        }, 30);

        hasAnnounced = true;
      }
    };

    const openList = () => {
      listbox.hidden = false;
      input.setAttribute("aria-expanded", "true");
      isOpen = true;
      updateStatus();
    };

    const closeList = () => {
      listbox.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      active = -1;
      isOpen = false;
      updateStatus();
    };

    // sets the currently active option in the list
    const setActive = (indexToActivate) => {
      const items = listbox.querySelectorAll(
        '.pelican-combobox__option[role="option"]',
      );

      items.forEach((item, i) => {
        const isSelected = i === indexToActivate;
        item.setAttribute("aria-selected", String(isSelected));
        item.classList.toggle("pelican-combobox__option--active", isSelected);
      });

      if (indexToActivate >= 0 && items[indexToActivate]) {
        input.setAttribute("aria-activedescendant", items[indexToActivate].id);
        items[indexToActivate].scrollIntoView({ block: "nearest" });
      } else {
        input.removeAttribute("aria-activedescendant");
      }

      active = indexToActivate;
      updateStatus();
    };

    const selectOption = (indexToSelect) => {
      if (indexToSelect < 0 || indexToSelect >= filtered.length) {
        return;
      }

      input.value = filtered[indexToSelect];
      closeList();
    };

    const render = () => {
      listbox.innerHTML = "";

      if (!filtered.length) {
        const li = document.createElement("li");
        li.className = "pelican-combobox__option pelican-combobox__option--empty";
        li.setAttribute("aria-disabled", "true");

        const span = document.createElement("span");
        span.className = "pelican-combobox__option-label";
        span.textContent = input.value.trim()
          ? `No services match "${input.value.trim()}"`
          : "No services available";

        li.appendChild(span);
        listbox.appendChild(li);

        active = -1;
        openList();
        input.removeAttribute("aria-activedescendant");
        return;
      }

      filtered.forEach((item, i) => {
        const li = document.createElement("li");
        li.id = `${comboboxId}-option-${i}`;
        li.setAttribute("role", "option");
        li.className = "pelican-combobox__option";
        li.setAttribute("aria-selected", "false");

        const span = document.createElement("span");
        span.className = "pelican-combobox__option-label";
        span.textContent = item;

        li.appendChild(span);

        li.addEventListener("mousedown", (event) => event.preventDefault());
        li.addEventListener("click", () => {
          input.value = item;
          closeList();
          input.focus();
        });

        listbox.appendChild(li);
      });

      openList();
      setActive(active);
    };

    const filterOptions = (value) => {
      const normalizedValue = value.toLowerCase().trim();

      filtered = normalizedValue
        ? options.filter((option) =>
            option.toLowerCase().includes(normalizedValue),
          )
        : [...options];

      active = -1;
      hasAnnounced = false;
      render();
    };

    const showAllOptions = () => {
      filtered = input.value.trim()
        ? options.filter((option) =>
            option.toLowerCase().includes(input.value.toLowerCase()),
          )
        : [...options];

      active = -1;
      hasAnnounced = false;
      render();
    };

    input.addEventListener("input", () => {
      filterOptions(input.value);
    });

    input.addEventListener("click", () => {
      if (!isOpen) {
        showAllOptions();
      }
    });

    input.addEventListener("focus", () => {
      if (!isOpen) {
        showAllOptions();
      }
    });

    // keyboard navigation and selection
    input.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          if (!isOpen) {
            showAllOptions();
          }

          if (filtered.length) {
            const nextIndex = active < filtered.length - 1 ? active + 1 : 0;
            setActive(nextIndex);
          }
          break;

        case "ArrowUp":
          event.preventDefault();

          if (!isOpen) {
            showAllOptions();
          }

          if (filtered.length) {
            const previousIndex = active > 0 ? active - 1 : filtered.length - 1;
            setActive(previousIndex);
          }
          break;

        case "Enter":
          if (!isOpen) {
            event.preventDefault();
            showAllOptions();
          } else if (active >= 0 && filtered.length) {
            event.preventDefault();
            selectOption(active);
          }
          break;

        case "Tab":
          if (isOpen && active >= 0 && filtered.length) {
            selectOption(active);
          } else {
            closeList();
          }
          break;

        case "Escape":
          if (isOpen) {
            event.preventDefault();
            closeList();
          }
          break;
      }
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        closeList();
      }
    });
  };

  document.querySelectorAll(".pelican-combobox").forEach((wrapper, index) => {
    initializeCombobox(wrapper, index);
  });
})();
