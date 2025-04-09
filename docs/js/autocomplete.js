// JS adapted from https://haltersweb.github.io/Accessibility/autocomplete.html 
// chargpt used to convert to vanilla js

// Standard Namespacing
var NAME = NAME || {};




// accessibility helpers

(function () {
    'use strict';

    NAME.keyboard = {
        back: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18,
        esc: 27, space: 32, pageUp: 33, pageDown: 34,
        end: 35, home: 36, left: 37, up: 38, right: 39,
        down: 40, del: 46, command: 91
    };

    NAME.focusables = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

    NAME.general = {};
    NAME.general.senseClickOutside = function (evtTarget, container) {
        return !container.contains(evtTarget);
    };

    NAME.general.debounce = function (func, delay, immediate) {
        let timeout, result;
        return function (...args) {
            const context = this;
            const later = function () {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, delay);
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };

    NAME.access = {};

    NAME.access.blockFocus = function (blockedContainers, focusInstead) {
        blockedContainers.forEach(container => {
            container.setAttribute('aria-hidden', 'true');
            container.addEventListener('focusin', function (e) {
                if (container.getAttribute('aria-hidden') === 'true') {
                    focusInstead.focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }, { passive: false });
        });
    };

    NAME.access.removeBlockFocus = function (blockedContainers) {
        blockedContainers.forEach(container => {
            container.removeAttribute('aria-hidden');
            container.replaceWith(container.cloneNode(true)); // quick way to remove event listener
        });
    };

    NAME.access.ariaExpand = function (expander, expandingContainer) {
        expander.setAttribute('aria-expanded', 'true');
        expandingContainer.setAttribute('aria-hidden', 'false');
    };

    NAME.access.ariaContract = function (expander, expandingContainer) {
        expander.setAttribute('aria-expanded', 'false');
        expandingContainer.setAttribute('aria-hidden', 'true');
    };

    NAME.access.ariaHideContent = function (hideContainers) {
        hideContainers.forEach(container => {
            const focusables = container.querySelectorAll('a, button, input, select, textarea');
            container.setAttribute('aria-hidden', 'true');
            focusables.forEach(elem => {
                elem.setAttribute('tabindex', '-1');
                elem.setAttribute('data-focusable-hidden-elem', 'true');
            });
        });
    };

    NAME.access.ariaShowContent = function (blockedContainers) {
        blockedContainers.forEach(container => {
            const focusables = container.querySelectorAll('[data-focusable-hidden-elem]');
            container.removeAttribute('aria-hidden');
            focusables.forEach(elem => {
                elem.removeAttribute('tabindex');
                elem.removeAttribute('data-focusable-hidden-elem');
            });
        });
    };

    NAME.access.tagTrigger = function (optionalTrigger) {
        const trigger = optionalTrigger || document.activeElement;
        trigger.setAttribute('data-trigger', 'true');
    };

    NAME.access.focusTrigger = function (optionalTrigger) {
        const trigger = optionalTrigger || document.querySelector('[data-trigger="true"]');
        if (trigger) {
            trigger.focus();
            trigger.removeAttribute('data-trigger');
        }
    };

    NAME.access.announcements = function (ariaContainer, textToRead) {
        ariaContainer.textContent = textToRead;
        setTimeout(() => {
            ariaContainer.textContent = '';
        }, 1000);
    };

    NAME.access.duplicateTextForReading = function (ariaContainer, elements) {
        let textToBeRead = '';
        elements.forEach(el => {
            textToBeRead += el.textContent + ' ';
        });
        NAME.access.announcements(ariaContainer, textToBeRead.trim());
    };
})();




// autocomplete js

(function (NAME) {
    'use strict';

    const widget = document.querySelector('[data-widget="accessible-autocomplete"]');
    const input = widget.querySelector('#search');
    const clearText = document.getElementById('clearText');
    const resultsContainer = widget.querySelector('#results');
    const liveRegion = widget.querySelector('[aria-live]');
    const key = NAME.keyboard;
    const directions = "Keyboard users, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.";
    const liMarkup = id => `<li id="${id}" class="list-group-item" role="option" aria-selected="false" tabindex="-1">`;

    const fakeResults = [
        ['apple', 'avocado', 'banana', 'cucumber', 'eggplant', 'kiwi'],
        ['banana', 'cucumber', 'eggplant'],
        ['cucumber']
    ];

    let inputVal = "";
    let results = [];

    function fakeAjaxResults() {
        const len = input.value.length;
        if (len === 0 || len > 3) return [];
        if (len === 1) return fakeResults[0];
        if (len === 2) return fakeResults[1];
        if (len === 3) return fakeResults[2];
    }

    function positionResults() {
        if (resultsContainer.style.width) return;
        const rect = input.getBoundingClientRect();
        resultsContainer.style.left = rect.left + 'px';
        resultsContainer.style.top = (rect.top + input.offsetHeight) + 'px';
        resultsContainer.style.minWidth = input.offsetWidth + 'px';
    }

    function buildListHtml(results) {
        resultsContainer.innerHTML = results.map((r, idx) => liMarkup('') + r + '</li>').join('');
        resultsContainer.style.display = 'block';
        input.setAttribute('aria-expanded', 'true');
    }

    function announceResults() {
        const textToRead = results.length ? `${results.length} results are available. ${directions}` : "No search results";
        NAME.access.announcements(liveRegion, textToRead);
    }

    function markSelected(selection) {
        if (!selection) return;
        selection.setAttribute('aria-selected', 'true');
        selection.id = 'selectedOption';
        input.setAttribute('aria-activedescendant', 'selectedOption');
    }

    function clearSelected() {
        input.setAttribute('aria-activedescendant', '');
        resultsContainer.querySelectorAll('[aria-selected="true"]').forEach(el => {
            el.setAttribute('aria-selected', 'false');
            el.removeAttribute('id');
        });
    }

    function closeResults() {
        clearSelected();
        resultsContainer.style.display = 'none';
        input.setAttribute('aria-expanded', 'false');
    }

    function autocomplete() {
        if (input.value === inputVal) return;
        inputVal = input.value;
        results = fakeAjaxResults();
        if (!results.length) {
            closeResults();
        } else {
            buildListHtml(results);
            announceResults();
        }
    }

    function arrowing(kc) {
        if (!results.length) return;
        const activeItem = resultsContainer.querySelector('[aria-selected="true"]');
        let nextItem = null;
        if (kc === key.down) {
            nextItem = activeItem ? activeItem.nextElementSibling : resultsContainer.querySelector('li');
        }
        if (kc === key.up) {
            nextItem = activeItem ? activeItem.previousElementSibling : resultsContainer.querySelector('li:last-child');
        }
        clearSelected();
        if (nextItem) markSelected(nextItem);
    }

    function populating() {
        const selectedItem = resultsContainer.querySelector('[aria-selected="true"]');
        input.value = selectedItem ? selectedItem.textContent : inputVal;
    }

    function eventListeners() {
        document.addEventListener('click', e => {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                closeResults();
            }
        });

        input.addEventListener('keyup', e => {
            const kc = e.keyCode;
            if (![key.up, key.down, key.tab, key.enter, key.esc].includes(kc)) {
                autocomplete();
            }
        });

        input.addEventListener('keydown', e => {
            const kc = e.keyCode;
            if (kc === key.tab) {
                closeResults();
            }
            if (kc === key.enter) {
                e.preventDefault();
                closeResults();
            }
            if (kc === key.up || kc === key.down) {
                e.preventDefault();
                arrowing(kc);
                populating();
            }
            if (kc === key.esc) {
                input.value = inputVal;
                closeResults();
            }
        });

        resultsContainer.addEventListener('click', e => {
            input.value = e.target.textContent;
            closeResults();
            input.focus();
        });

        clearText.addEventListener('click', () => {
            inputVal = '';
            input.value = '';
        });
    }

    function init() {
        eventListeners();
        positionResults();
    }

    init();
})(NAME);




// show-code.js

(function (NAME) {
    'use strict';

    const codeContainers = document.querySelectorAll('[data-code]');
    codeContainers.forEach(container => {
        const id = container.getAttribute('data-code');
        const htmlElem = document.getElementById(id);
        if (!htmlElem) return;
        let html = htmlElem.innerHTML;
        const noTabs = html.match(/[^<]*/)[0].replace(/\n/, "").length;
        const re = new RegExp("\n\t{" + noTabs + "}|^\t{" + noTabs + "}", "g");
        html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(re, '\n');
        container.innerHTML = `<pre><code>${html}</code></pre>`;
    });
})(NAME);