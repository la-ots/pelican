"use strict";

const defaultOptions = [];
let comboboxIdCounter = 0;

const getComboboxId = (wrapper) => {
  if (wrapper.id) {
    return wrapper.id;
  }

  if (!wrapper.dataset.pelicanComboboxId) {
    comboboxIdCounter += 1;
    wrapper.dataset.pelicanComboboxId = `pelican-combobox-${comboboxIdCounter}`;
  }

  return wrapper.dataset.pelicanComboboxId;
};

// Gets custom options from the component or falls back to the default options of an empty array
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

// Initializes an individual Pelican combobox
const initializeCombobox = (wrapper, index) => {
  // Elements used by the combobox
  const input = wrapper.querySelector(".pelican-combobox__input");
  const listbox = wrapper.querySelector(".pelican-combobox__listbox");
  const status = wrapper.querySelector(".pelican-combobox__status");
  const label = wrapper.querySelector(".pelican-combobox__label");
  const helpText = wrapper.querySelector(".pelican-combobox__help");

  if (!input || !listbox || !status) {
    return;
  }

  const options = parseOptions(wrapper);
  const comboboxId = getComboboxId(wrapper);

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

  // Connects optional help text to the input for screen readers
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

  // Announces available options and active selections to screen readers
  const updateStatus = () => {
    const query = input.value.trim();

    if (!isOpen) {
      status.textContent = "";
      hasAnnounced = false;
      return;
    }

    if (!filtered.length) {
      status.textContent = "";
      setTimeout(() => {
        status.textContent = query ? `No matches for ${query}.` : "No matches.";
      }, 30);
      hasAnnounced = true;
      return;
    }

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

  // Updates which option is active during keyboard navigation
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

  // Selects an option from the list and updates the input value
  const selectOption = (indexToSelect) => {
    if (indexToSelect < 0 || indexToSelect >= filtered.length) {
      return;
    }

    input.value = filtered[indexToSelect];
    closeList();
  };

  const render = () => {
    listbox.innerHTML = "";

    // Displays a message when no matching options are available
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

    // Renders the list of filtered options
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
      ? options.filter((option) => option.toLowerCase().includes(normalizedValue))
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

  // Keyboard navigation
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

const initPelicanComboboxes = (root = document) => {
  root.querySelectorAll(".pelican-combobox").forEach((wrapper, index) => {
    initializeCombobox(wrapper, index);
  });
};

export { initPelicanComboboxes };
