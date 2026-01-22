// ============================================================================
// DOM ELEMENT REFERENCES
// ============================================================================
let pageWrapper = document.getElementById("page-wrapper");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let sidebarDropdownLink = document.querySelectorAll(
  ".sidebar-dropdown-header-expand",
);
let scrollToTop = document.getElementById("ScrollToTop");
const pageContent = document.querySelector(".page-content");

// ============================================================================
// ANIMATION UTILITY FUNCTIONS
// ============================================================================
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

// ============================================================================
// SIDEBAR FUNCTIONALITY
// ============================================================================
// Sidebar dropdown toggle
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

// Sidebar accessibility
function menuA11Y() {
  //insert menu hiding behavior
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

// Sidebar button toggle
if (sidebarButton) {
  sidebarButton.onclick = () => {
    pageWrapper.classList.toggle("toggled");
  };
}

// ============================================================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================================================
// Function to show/hide scroll to top button based on scroll position
function scrollFunction() {
  if (!scrollToTop) return;
  
  let scrollTop;
  if (pageContent) {
    scrollTop = pageContent.scrollTop;
  } else {
    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  }
  
  // Show button after scrolling down 100px, hide when at top
  if (scrollTop > 100) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// Function to scroll the page or .page-content to the top
function topFunction() {
  if (pageContent) {
    pageContent.scrollTop = 0; 
  } else {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
}

// Attach scroll listener to .page-content or window
if (pageContent) {
  pageContent.addEventListener("scroll", scrollFunction);
} else {
  window.addEventListener("scroll", scrollFunction);
}

// Scroll to top button click handler
if (scrollToTop) {
  scrollToTop.onclick = (event) => {
    event.preventDefault();
    topFunction();
  };
}

// Call scrollFunction on page load to ensure the button is hidden if already at the top
window.addEventListener("load", () => {
  scrollFunction(); 
});

// ============================================================================
// BOOTSTRAP COMPONENTS INITIALIZATION
// ============================================================================
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