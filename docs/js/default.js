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

// Search functionality
const searchableSections = [
  { label: "Accessibility", prefix: "/accessibility/" },
  { label: "Foundation", prefix: "/foundation/" },
  { label: "Components", prefix: "/components/" },
  { label: "Form Controls", prefix: "/form-controls/" },
  { label: "Form Templates", prefix: "/form-templates/" },
  { label: "Hero Blocks", prefix: "/hero-blocks/" },
  { label: "Feature Blocks", prefix: "/feature-blocks/" },
  { label: "Page Templates", prefix: "/page-templates/" },
  { label: "Extras", prefix: "/extras/" },
];

const searchResultsPerPageDefault = 10;
const searchResultsPerPageOptions = [10, 25, 50, "all"];

function getSectionForPath(pathname) {
  return searchableSections.find((section) => pathname.startsWith(section.prefix));
}

function normalizeSearchQuery(query) {
  return (query || "").toLowerCase().trim().replace(/\s+/g, " ");
}

function getSearchTerms(query) {
  return normalizeSearchQuery(query)
    .split(" ")
    .map((part) => part.trim())
    .filter(Boolean);
}

function getSearchQueryAndPage() {
  const params = new URLSearchParams(window.location.search);
  const pageFromUrl = Number.parseInt(params.get("page"), 10);
  const perPageParam = (params.get("perPage") || "").toLowerCase();
  const perPageFromUrl = Number.parseInt(perPageParam, 10);

  const perPage = perPageParam === "all"
    ? "all"
    : searchResultsPerPageOptions.includes(perPageFromUrl)
      ? perPageFromUrl
      : searchResultsPerPageDefault;

  return {
    query: (params.get("q") || "").trim(),
    page: Number.isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl,
    perPage,
  };
}

function buildSearchIndex() {
  const links = document.querySelectorAll(".sidebar-menu .sidebar-nav-item");
  const uniqueByPath = new Map();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const pathname = new URL(href, window.location.origin).pathname;
    const section = getSectionForPath(pathname);
    if (!section) {
      return;
    }

    const title = (link.textContent || "").trim().replace(/\s+/g, " ");
    const excerpt = (link.dataset.searchExcerpt || "")
      .trim()
      .replace(/\s+/g, " ");
    if (!title || uniqueByPath.has(pathname)) {
      return;
    }

    uniqueByPath.set(pathname, {
      title,
      excerpt,
      url: pathname,
      category: section.label,
      normalizedTitle: title.toLowerCase(),
      searchText: `${title} ${section.label} ${excerpt}`.toLowerCase(),
    });
  });

  return Array.from(uniqueByPath.values());
}

function rankResult(item, normalizedQuery, terms) {
  let score = 0;
  if (item.normalizedTitle === normalizedQuery) {
    score += 10;
  }
  if (item.normalizedTitle.startsWith(normalizedQuery)) {
    score += 6;
  }
  if (item.normalizedTitle.includes(normalizedQuery)) {
    score += 3;
  }
  terms.forEach((term) => {
    if (item.normalizedTitle.includes(term)) {
      score += 2;
    } else if (item.searchText.includes(term)) {
      score += 1;
    }
  });
  return score;
}

function searchIndex(index, query) {
  const normalizedQuery = normalizeSearchQuery(query);
  const terms = getSearchTerms(query);

  if (!normalizedQuery || terms.length === 0) {
    return [];
  }

  return index
    .filter((item) => terms.every((term) => item.searchText.includes(term)))
    .map((item) => ({ ...item, score: rankResult(item, normalizedQuery, terms) }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.title.localeCompare(b.title);
    });
}

function buildSearchResultsUrl(query, page, perPage) {
  const params = new URLSearchParams();
  params.set("q", query);
  if (page > 1) {
    params.set("page", String(page));
  }
  if (perPage !== searchResultsPerPageDefault) {
    params.set("perPage", String(perPage));
  }

  return `/search/?${params.toString()}`;
}

function getPaginationItems(totalPages, currentPage) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

function createPaginationLinkListItem({
  page,
  currentPage,
  query,
  perPage,
}) {
  const item = document.createElement("li");
  item.className = `page-item${page === currentPage ? " active" : ""}`;

  const link = document.createElement("a");
  link.className = "page-link";
  link.href = buildSearchResultsUrl(query, page, perPage);

  link.textContent = String(page);

  if (page === currentPage) {
    link.setAttribute("aria-current", "page");
  }

  item.appendChild(link);
  return item;
}

function createPaginationArrowListItem({
  direction,
  disabled,
  targetPage,
  query,
  perPage,
}) {
  const item = document.createElement("li");
  item.className = `page-item${disabled ? " disabled" : ""}`;

  const iconClass =
    direction === "previous" ? "fas fa-chevron-left" : "fas fa-chevron-right";
  const hiddenLabel = direction === "previous" ? "Previous page" : "Next page";

  if (disabled) {
    const span = document.createElement("span");
    span.className = "page-link";
    span.innerHTML = `
      <span class="icon ${iconClass}" aria-hidden="true"></span>
      <span class="visually-hidden">${hiddenLabel}</span>
    `;
    item.appendChild(span);
    return item;
  }

  const link = document.createElement("a");
  link.className = "page-link";
  link.href = buildSearchResultsUrl(query, targetPage, perPage);
  link.innerHTML = `
    <span class="icon ${iconClass}" aria-hidden="true"></span>
    <span class="visually-hidden">${hiddenLabel}</span>
  `;
  item.appendChild(link);
  return item;
}

function createPaginationEllipsisListItem(positionLabel) {
  const item = document.createElement("li");
  item.className = "page-item disabled";
  item.innerHTML = `
    <span class="page-link">
      <span class="visually-hidden">pages between ${positionLabel} and current</span>
      <span aria-hidden="true"> &hellip; </span>
    </span>
  `;
  return item;
}

function renderSearchPagination(
  container,
  totalResults,
  currentPage,
  query,
  perPage,
  startIndex,
  endIndex,
) {
  container.innerHTML = "";
  const totalPages =
    perPage === "all" ? 1 : Math.ceil(totalResults / Number(perPage));

  const row = document.createElement("div");
  row.className = "search-results-pagination-layout";

  const selectCol = document.createElement("div");

  const form = document.createElement("form");
  form.setAttribute("action", "/search/");
  form.addEventListener("submit", (event) => event.preventDefault());

  const label = document.createElement("label");
  label.className = "visually-hidden";
  label.setAttribute("for", "pelicanSearchItemsPerPage");
  label.textContent = "Show how many?";

  const select = document.createElement("select");
  select.className = "form-select search-results-per-page";
  select.id = "pelicanSearchItemsPerPage";

  searchResultsPerPageOptions.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = String(optionValue);
    option.textContent =
      optionValue === "all"
        ? "Show all"
        : `Show ${optionValue} per page`;
    option.selected = optionValue === perPage;
    select.appendChild(option);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPerPage =
      select.value === "all" ? "all" : Number.parseInt(select.value, 10);
    window.location.href = buildSearchResultsUrl(query, 1, selectedPerPage);
  });

  select.addEventListener("change", () => {
    const selectedPerPage =
      select.value === "all" ? "all" : Number.parseInt(select.value, 10);
    window.location.href = buildSearchResultsUrl(query, 1, selectedPerPage);
  });

  form.appendChild(label);
  form.appendChild(select);
  selectCol.appendChild(form);
  row.appendChild(selectCol);

  const paginationCol = document.createElement("div");
  paginationCol.className = "d-flex justify-content-center";

  if (totalPages > 1) {
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Results navigation");
    const pagination = document.createElement("ul");
    pagination.className = "pagination justify-content-center";

    pagination.appendChild(
      createPaginationArrowListItem({
        direction: "previous",
        disabled: currentPage === 1,
        targetPage: currentPage - 1,
        query,
        perPage,
      }),
    );

    getPaginationItems(totalPages, currentPage).forEach((pageItem, index, items) => {
      if (pageItem === "ellipsis") {
        const previousPageNumber = items[index - 1];
        const nextPageNumber = items[index + 1];
        const positionLabel =
          previousPageNumber === 1 || nextPageNumber === totalPages
            ? previousPageNumber === 1
              ? "first"
              : "last"
            : "current";
        pagination.appendChild(createPaginationEllipsisListItem(positionLabel));
        return;
      }

      pagination.appendChild(
        createPaginationLinkListItem({
          page: pageItem,
          currentPage,
          query,
          perPage,
        }),
      );
    });

    pagination.appendChild(
      createPaginationArrowListItem({
        direction: "next",
        disabled: currentPage === totalPages,
        targetPage: currentPage + 1,
        query,
        perPage,
      }),
    );

    nav.appendChild(pagination);
    paginationCol.appendChild(nav);
  }
  row.appendChild(paginationCol);

  const totalsCol = document.createElement("div");
  const totals = document.createElement("p");
  totals.className = "search-results-totals";
  totals.setAttribute("aria-live", "polite");
  totals.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${totalResults} items.`;
  totalsCol.appendChild(totals);
  row.appendChild(totalsCol);

  container.appendChild(row);
}

function renderSearchResults(results, query, page, perPage) {
  const summary = document.getElementById("pelicanSearchSummary");
  const resultsList = document.getElementById("pelicanSearchResultsList");
  const pagination = document.getElementById("pelicanSearchPagination");
  const wrapper = document.getElementById("pelicanSearchWrapper");

  if (!summary || !resultsList || !pagination || !wrapper) {
    return;
  }

  wrapper.setAttribute("aria-busy", "true");
  resultsList.innerHTML = "";

  if (!query) {
    summary.innerHTML = '<p>Enter a search term to find guidance and patterns.</p>';
    resultsList.innerHTML = "";
    pagination.innerHTML = "";
    wrapper.setAttribute("aria-busy", "false");
    return;
  }

  if (results.length === 0) {
    summary.textContent = "";
    const noResultsText = document.createTextNode('No results found for "');
    const noResultsQuery = document.createElement("strong");
    noResultsQuery.textContent = query;
    const noResultsSuffix = document.createTextNode('".');
    summary.appendChild(noResultsText);
    summary.appendChild(noResultsQuery);
    summary.appendChild(noResultsSuffix);
    resultsList.innerHTML = "";
    pagination.innerHTML = "";
    wrapper.setAttribute("aria-busy", "false");
    return;
  }

  const totalResults = results.length;
  const totalPages =
    perPage === "all" ? 1 : Math.ceil(totalResults / Number(perPage));
  const currentPage = Math.min(page, totalPages);
  const startIndex =
    perPage === "all" ? 0 : (currentPage - 1) * Number(perPage);
  const endIndex =
    perPage === "all"
      ? totalResults
      : Math.min(startIndex + Number(perPage), totalResults);
  const pageResults = results.slice(startIndex, endIndex);

  summary.textContent = "";
  const summaryText = document.createTextNode(
    `Showing ${startIndex + 1}-${endIndex} of ${totalResults} result${totalResults === 1 ? "" : "s"} for "`,
  );
  const summaryQuery = document.createElement("strong");
  summaryQuery.textContent = query;
  const summarySuffix = document.createTextNode('".');
  summary.appendChild(summaryText);
  summary.appendChild(summaryQuery);
  summary.appendChild(summarySuffix);

  pageResults.forEach((result) => {
    const article = document.createElement("article");
    article.className = "search-result-item";
    const heading = document.createElement("h3");
    heading.className = "search-result-title";

    const titleLink = document.createElement("a");
    titleLink.href = result.url;
    titleLink.textContent = result.title;
    heading.appendChild(titleLink);

    const meta = document.createElement("p");
    meta.className = "search-result-meta";

    const category = document.createElement("span");
    category.className = "search-result-badge";
    category.textContent = result.category;

    const excerpt = document.createElement("span");
    excerpt.className = "search-result-excerpt";
    excerpt.textContent = result.excerpt;

    meta.appendChild(category);
    meta.appendChild(excerpt);
    article.appendChild(heading);
    article.appendChild(meta);
    resultsList.appendChild(article);
  });

  renderSearchPagination(
    pagination,
    totalResults,
    currentPage,
    query,
    perPage,
    startIndex,
    endIndex,
  );
  wrapper.setAttribute("aria-busy", "false");
}

function syncSearchInputsWithQuery(query) {
  const inputs = document.querySelectorAll('form[data-site-search] input[name="q"]');
  inputs.forEach((input) => {
    input.value = query;
  });
}

function initializeSearchPage() {
  if (!document.getElementById("pelicanSearchWrapper")) {
    return;
  }

  const { query, page, perPage } = getSearchQueryAndPage();
  syncSearchInputsWithQuery(query);

  const index = buildSearchIndex();
  const results = searchIndex(index, query);
  renderSearchResults(results, query, page, perPage);
}

initializeSearchPage();
