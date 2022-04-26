/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/validations.js":
/*!**************************************!*\
  !*** ./src/functions/validations.js ***!
  \**************************************/
/***/ ((module) => {

//Regex tests
var digitsReg = new RegExp(/^[0-9]$/);

var isDigit = function isDigit(value) {
  return digitsReg.test(value);
};

var operatorsReg = new RegExp(/^[-/*+]$/);

var isOperator = function isOperator(value) {
  return operatorsReg.test(value);
};

var floatingPointReg = new RegExp(/^[.,]$/);

var isFloatPoint = function isFloatPoint(value) {
  return floatingPointReg.test(value);
};

var decimalNumberReg = new RegExp(/^\d*[,.]\d*$/);

var isDecimalNumber = function isDecimalNumber(value) {
  return decimalNumberReg.test(value);
};

var equalSignReg = new RegExp(/^=|Enter$/);

var isEqualSign = function isEqualSign(value) {
  return equalSignReg.test(value);
};

var complexOperatorReg = new RegExp(/^[%²]$/);

var isComplexOperator = function isComplexOperator(value) {
  return complexOperatorReg.test(value);
};

var deleteButtonReg = new RegExp(/^Backspace|Delete|Escape|clear_(error|all|last)$/);

var isDeleteButton = function isDeleteButton(value) {
  return deleteButtonReg.test(value);
};
/**
 * 
 * @param {HTMLElement} element 
 * @return {boolean}  
 */


var innerIsEmpty = function innerIsEmpty(element) {
  return element.innerText.length == 0;
};
/**
 * 
 * @param {HTMLElement} element 
 * @return {boolean}  
 */


var valueIsEmpty = function valueIsEmpty(element) {
  return element.dataset.value.length == 0;
};

module.exports = {
  isDeleteButton: isDeleteButton,
  isComplexOperator: isComplexOperator,
  isEqualSign: isEqualSign,
  isDecimalNumber: isDecimalNumber,
  isFloatPoint: isFloatPoint,
  isOperator: isOperator,
  isDigit: isDigit,
  innerIsEmpty: innerIsEmpty,
  valueIsEmpty: valueIsEmpty
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/Orbitron-Regular.woff */ "./src/assets/fonts/Orbitron-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.h-24 {\n  height: 6rem;\n}\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-end {\n  align-items: flex-end;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(187, 247, 208, var(--tw-bg-opacity));\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-calculator {\n  font-family: \"Orbitron\", \"Courier New\";\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n@font-face {\n  font-family: \"Orbitron\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n.peer:hover ~ .peer-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@media (min-width: 640px) {\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:font-bold {\n    font-weight: 700;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.scss","webpack://./src/%3Cinput%20css%20ikDGUS%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n@font-face {\r\n    font-family: \"Orbitron\";\r\n    src: url(\"assets/fonts/Orbitron-Regular.woff\");\r\n}","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Orbitron-Regular.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/Orbitron-Regular.woff ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:font/woff;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _functions_validations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/validations.js */ "./src/functions/validations.js");
/* harmony import */ var _functions_validations_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__);
//Style for dev environment only
 //Imports

 //Variables

var inputZone = document.getElementById("input_zone");
var calculatorKeyboard = document.getElementById("calculator_keyboard");
var previousNumberElement = document.getElementById("previous_number");
var operatorSignElement = document.getElementById("operator_sign");
var latestNumberElement = document.getElementById("latest_number");
var equalSignElement = document.getElementById("equal_sign");
var maxDigitSize = 16; //math functions

var sum = function sum(a, b) {
  return a + b;
};

var subtraction = function subtraction(a, b) {
  return a - b;
};

var multiplication = function multiplication(a, b) {
  return a * b;
};

var division = function division(a, b) {
  return a / b;
}; //Functions


var currentUserInputValue = '';
var currentUserInputClass = '';
/**
 * 
 * @param {string} rawValue 
 * @returns 
 */

var renderDisplayValue = function renderDisplayValue(rawValue) {
  if (rawValue == "Infinity") {
    return "OVERFLOW ERROR";
  }

  return rawValue.replace('.', ',');
};
/** 
 * 
 * @param {string} rawValue 
 * @returns
 */


var renderCurrentCalcDisplayValue = function renderCurrentCalcDisplayValue(rawValue) {
  return renderDisplayValue(rawValue).replace(/,$/, '');
};

var erasePreviousCalculation = function erasePreviousCalculation() {
  previousNumberElement.innerText = "";
  previousNumberElement.dataset.value = "";
  operatorSignElement.innerText = "";
  operatorSignElement.dataset.value = "";
  latestNumberElement.innerText = "";
  latestNumberElement.dataset.value = "";
  equalSignElement.innerText = "";
  equalSignElement.dataset.value = "";
};

var clearInputZone = function clearInputZone() {
  inputZone.innerText = 0;
  inputZone.dataset.value = 0;
  inputZone.dataset.type = "current";
};

var clearError = function clearError() {
  if (inputZone.dataset.type == "result") {
    erasePreviousCalculation();
  }

  clearInputZone();
};

var clearAll = function clearAll() {
  erasePreviousCalculation();
  clearInputZone();
};

var clearLast = function clearLast() {
  if (inputZone.dataset.type == "result") {
    erasePreviousCalculation();
  } else if (inputZone.dataset.type == "current") {
    var valueToClear = inputZone.dataset.value;
    var rawValue = "0";

    if (valueToClear.length > 1) {
      rawValue = valueToClear.replace(/.$/, '');
    }

    var displayValue = renderDisplayValue(rawValue);
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  }
};

var displayNumberInInputZone = function displayNumberInInputZone(currentUserInputValue) {
  var rawValue = inputZone.dataset.value; //Prevent user from inputing more digits than max allowed size

  if (inputZone.dataset.value.length < maxDigitSize) {
    rawValue += currentUserInputValue;
  }

  if (inputZone.dataset.type != "current" || inputZone.dataset.value == "0" && !(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue)) {
    if (inputZone.dataset.type == "result" && equalSignElement.innerText == "=") {
      erasePreviousCalculation();
    }

    rawValue = currentUserInputValue;
    inputZone.dataset.type = "current";
  }

  var displayValue = renderDisplayValue(rawValue);
  inputZone.dataset.value = rawValue;
  inputZone.innerText = displayValue;
};

var displayDecimalNumber = function displayDecimalNumber(currentUserInputValue) {
  if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isDecimalNumber)(inputZone.dataset.value)) {
    return;
  } //Erase previous calculation result


  if (inputZone.dataset.type == "result") {
    erasePreviousCalculation();
    inputZone.dataset.type = "current";
    inputZone.dataset.value = 0;
    inputZone.innerText = 0;
  }

  displayNumberInInputZone(currentUserInputValue);
};

var calculate = function calculate() {
  var firstOperand = parseFloat(previousNumberElement.dataset.value);
  var operatorSign = operatorSignElement.dataset.value;
  var secondOperand = parseFloat(latestNumberElement.dataset.value);

  switch (operatorSign) {
    case "+":
      return sum(firstOperand, secondOperand);

    case "-":
      return subtraction(firstOperand, secondOperand);

    case "*":
      return multiplication(firstOperand, secondOperand);

    case "/":
      if (secondOperand == 0) {
        inputZone.textContent = "GO BACK TO SCHOOL";
        inputZone.dataset.type = "error";
        erasePreviousCalculation();
        break;
      }

      return division(firstOperand, secondOperand);

    default:
      break;
  }
};

var displayEqualSign = function displayEqualSign(currentUserInputValue) {
  var rawValue = inputZone.dataset.value;
  var displayValue = renderCurrentCalcDisplayValue(rawValue.toString()); //If current_calc is empty:

  if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(previousNumberElement)) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //If only previousNumber is not empty (operator is empty)
  else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(operatorSignElement)) {
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //if current_calc end by an operator:
  else if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(operatorSignElement) && (0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(latestNumberElement)) {
    latestNumberElement.dataset.value = rawValue;
    latestNumberElement.innerText = displayValue;
    var rawResult = calculate();
    var displayResult = renderDisplayValue(rawResult.toString());
    inputZone.dataset.value = rawResult;
    inputZone.innerText = displayResult;
  } //if current_calc end by =:
  else if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(equalSignElement)) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;

    var _rawResult = calculate();

    var _displayResult = renderDisplayValue(_rawResult.toString());

    inputZone.dataset.value = _rawResult;
    inputZone.innerText = _displayResult;
  } //If has a complex operator result in latest number and don't end by =:
  else if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(latestNumberElement) && (0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(equalSignElement)) {
    var _rawResult2 = calculate();

    var _displayResult2 = renderDisplayValue(_rawResult2.toString());

    inputZone.dataset.value = _rawResult2;
    inputZone.innerText = _displayResult2;
  }

  equalSignElement.dataset.value = currentUserInputValue;
  equalSignElement.innerText = currentUserInputValue;
  inputZone.dataset.type = "result";
};

var displayOperator = function displayOperator(currentUserInputValue) {
  var rawValue = inputZone.dataset.value;
  var rawValueIsCalculated = false; //Erase previous calculation

  if (inputZone.dataset.type == "result" && !(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(equalSignElement)) {
    erasePreviousCalculation();
  } //Calculate previous number if needed
  else if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(previousNumberElement)) {
    if (inputZone.dataset.type == "current") {
      latestNumberElement.dataset.value = rawValue;
    }

    if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.valueIsEmpty)(latestNumberElement) && !(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(operatorSignElement)) {
      rawValue = calculate();
      rawValueIsCalculated = true;

      if (inputZone.dataset.type == "temporary") {
        latestNumberElement.innerText = "";
        latestNumberElement.dataset.value = "";
        equalSignElement.innerText = "";
        equalSignElement.dataset.value = "";
      }
    }
  }

  var displayValue = renderCurrentCalcDisplayValue(rawValue.toString());
  previousNumberElement.dataset.value = rawValue;
  previousNumberElement.innerText = displayValue;
  inputZone.dataset.type = "temporary";
  operatorSignElement.dataset.value = currentUserInputValue;
  operatorSignElement.innerText = currentUserInputValue;

  if (rawValueIsCalculated) {
    inputZone.dataset.type = "result";
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  }
};

var switchSign = function switchSign() {
  var rawValue = inputZone.dataset.value;

  if (rawValue < 0) {
    console.log(rawValue);
    rawValue = rawValue.replace(/^-/, "");
  } else if (rawValue > 0) {
    rawValue = "-" + rawValue;
  }

  var displayValue = renderDisplayValue(rawValue);
  inputZone.dataset.value = rawValue;
  inputZone.innerText = displayValue;
};

var displayComplexOperator = function displayComplexOperator(currentUserInputValue) {
  var x = inputZone.dataset.value;
  var currentCalcDisplayValue = "";
  var result = 0;

  if (currentUserInputValue === "1/x") {
    if (x == 0) {
      inputZone.innerText = "CANNOT DIVIDE BY 0";
      inputZone.dataset.type = "error";
      erasePreviousCalculation();
      return;
    }

    currentCalcDisplayValue = "1/" + x;
    result = 1 / x;
  } else if (currentUserInputValue === "x²") {
    currentCalcDisplayValue = x + "²";
    result = Math.pow(x, 2);
  } else if (currentUserInputValue === "√x") {
    if (x < 0) {
      inputZone.innerText = "INVALID INPUT";
      inputZone.dataset.type = "error";
      erasePreviousCalculation();
      return;
    }

    currentCalcDisplayValue = "√" + x;
    result = Math.sqrt(x);
  } else if (currentUserInputValue === "%") {
    currentCalcDisplayValue = x + "%";
    var previousValue = (0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(previousNumberElement) ? 0 : previousNumberElement.dataset.value;
    result = previousValue * x / 100;
  }

  if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(previousNumberElement) && (0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(latestNumberElement)) {
    previousNumberElement.dataset.value = result;
    previousNumberElement.innerText = currentCalcDisplayValue;
  } else if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(previousNumberElement)) {
    if (!(0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(operatorSignElement)) {
      latestNumberElement.dataset.value = result;
      latestNumberElement.innerText = currentCalcDisplayValue;
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.innerIsEmpty)(operatorSignElement)) {
      previousNumberElement.dataset.value = result;
      previousNumberElement.innerText = currentCalcDisplayValue;
    }
  }

  var displayValue = renderDisplayValue(result.toString());
  inputZone.dataset.value = result;
  inputZone.innerText = displayValue;
  inputZone.dataset.type = "temporary";
};

var treatUserInput = function treatUserInput(currentUserInputValue, currentUserInputClass) {
  if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isDigit)(currentUserInputValue) && currentUserInputClass === "numeric") {
    displayNumberInInputZone(currentUserInputValue);
  } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue) && currentUserInputClass === "float_point") {
    displayDecimalNumber(currentUserInputValue);
  } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isOperator)(currentUserInputValue) && currentUserInputClass === "operator") {
    displayOperator(currentUserInputValue);
  } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isEqualSign)(currentUserInputValue) && currentUserInputClass === "equal") {
    displayEqualSign(currentUserInputValue);
  } else if (currentUserInputClass === "switch_sign") {
    switchSign();
  } else if (currentUserInputClass === "delete_button") {
    switch (currentUserInputValue) {
      case "clear_error":
        clearError();
        break;

      case "clear_all":
        clearAll();
        break;

      case "clear_last":
        clearLast();
        break;
    }
  } else if (currentUserInputClass === "complex_operator") {
    displayComplexOperator(currentUserInputValue);
  }
}; //Main script


try {
  //Listen for mouse input value
  calculatorKeyboard.addEventListener("click", function (event) {
    currentUserInputValue = event.target.getAttribute("data-value");
    currentUserInputClass = event.target.getAttribute("data-class");
    treatUserInput(currentUserInputValue, currentUserInputClass);
  }); //Listen for user keyboard input value

  document.addEventListener("keydown", function (event) {
    if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isDigit)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "numeric";
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isOperator)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "operator";
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(event.key)) {
      currentUserInputValue = ".";
      currentUserInputClass = "float_point";
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isEqualSign)(event.key)) {
      currentUserInputValue = "=";
      currentUserInputClass = "equal";
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isComplexOperator)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "complex_operator";
    } else if ((0,_functions_validations_js__WEBPACK_IMPORTED_MODULE_1__.isDeleteButton)(event.key)) {
      switch (event.key) {
        case "Backspace":
          currentUserInputValue = "clear_last";
          break;

        case "Delete":
          currentUserInputValue = "clear_error";
          break;

        case "Escape":
          currentUserInputValue = "clear_all";
          break;

        default:
          break;
      }

      currentUserInputClass = "delete_button";
    } else {
      console.log("Not a workable key: ".concat(event.key));
      return;
    }

    treatUserInput(currentUserInputValue, currentUserInputClass);
  });
} catch (error) {
  inputZone.textContent = "ERROR";
  inputZone.dataset.type = "error";
  console.log(error);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFFBQVEsdUJBQXVCLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsUUFBUSxPQUFPLE1BQU0sS0FBSyx1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsc0JBQXNCLFFBQVEsS0FBSyxxQkFBcUIsc0JBQXNCLFFBQVEsTUFBTSxxQkFBcUIsc0JBQXNCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sWUFBWSxxQkFBcUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFL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QU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvZnVuY3Rpb25zL3ZhbGlkYXRpb25zLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL21haW4uc2Nzcz85MGVhIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1JlZ2V4IHRlc3RzXHJcbmNvbnN0IGRpZ2l0c1JlZyA9IG5ldyBSZWdFeHAoL15bMC05XSQvKTtcclxuY29uc3QgaXNEaWdpdCA9IHZhbHVlID0+IGRpZ2l0c1JlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IG9wZXJhdG9yc1JlZyA9IG5ldyBSZWdFeHAoL15bLS8qK10kLyk7XHJcbmNvbnN0IGlzT3BlcmF0b3IgPSB2YWx1ZSA9PiBvcGVyYXRvcnNSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBmbG9hdGluZ1BvaW50UmVnID0gbmV3IFJlZ0V4cCgvXlsuLF0kLyk7XHJcbmNvbnN0IGlzRmxvYXRQb2ludCA9IHZhbHVlID0+IGZsb2F0aW5nUG9pbnRSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBkZWNpbWFsTnVtYmVyUmVnID0gbmV3IFJlZ0V4cCgvXlxcZCpbLC5dXFxkKiQvKTtcclxuY29uc3QgaXNEZWNpbWFsTnVtYmVyID0gdmFsdWUgPT4gZGVjaW1hbE51bWJlclJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGVxdWFsU2lnblJlZyA9IG5ldyBSZWdFeHAoL149fEVudGVyJC8pO1xyXG5jb25zdCBpc0VxdWFsU2lnbiA9IHZhbHVlID0+IGVxdWFsU2lnblJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGNvbXBsZXhPcGVyYXRvclJlZyA9IG5ldyBSZWdFeHAoL15bJcKyXSQvKTtcclxuY29uc3QgaXNDb21wbGV4T3BlcmF0b3IgPSB2YWx1ZSA9PiBjb21wbGV4T3BlcmF0b3JSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBkZWxldGVCdXR0b25SZWcgPSBuZXcgUmVnRXhwKC9eQmFja3NwYWNlfERlbGV0ZXxFc2NhcGV8Y2xlYXJfKGVycm9yfGFsbHxsYXN0KSQvKTtcclxuY29uc3QgaXNEZWxldGVCdXR0b24gPSB2YWx1ZSA9PiBkZWxldGVCdXR0b25SZWcudGVzdCh2YWx1ZSk7XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICBcclxuICovXHJcbiBjb25zdCBpbm5lcklzRW1wdHkgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LmlubmVyVGV4dC5sZW5ndGggPT0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAgXHJcbiAqL1xyXG5jb25zdCB2YWx1ZUlzRW1wdHkgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgaXNEZWxldGVCdXR0b24sXHJcbiAgICBpc0NvbXBsZXhPcGVyYXRvcixcclxuICAgIGlzRXF1YWxTaWduLFxyXG4gICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgaXNGbG9hdFBvaW50LFxyXG4gICAgaXNPcGVyYXRvcixcclxuICAgIGlzRGlnaXQsXHJcbiAgICBpbm5lcklzRW1wdHksXHJcbiAgICB2YWx1ZUlzRW1wdHlcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZm9udHMvT3JiaXRyb24tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5teS0zIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaC0yNCB7XFxuICBoZWlnaHQ6IDZyZW07XFxufVxcbi53LWZpdCB7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLmdyaWQtY29scy00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmdhcC0xIHtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuLndoaXRlc3BhY2Utbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5iZy1ncmF5LTQwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyZWVuLTIwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjQ3LCAyMDgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtMyB7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9udC1jYWxjdWxhdG9yIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcbi5ob3ZlclxcXFw6Y3Vyc29yLXBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaG92ZXJcXFxcOmJnLWdyYXktMzAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucGVlcjpob3ZlciB+IC5wZWVyLWhvdmVyXFxcXDpyb3RhdGUtMTgwIHtcXG4gIC0tdHctcm90YXRlOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuc21cXFxcOnRleHQtbGcge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9udC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjLyUzQ2lucHV0JTIwY3NzJTIwaWtER1VTJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBUyxDQUFUOzs7Q0FBUzs7QUFBVDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLHFCQUF3RCxFQUFFLE1BQU07QURYekQ7O0FBQVQ7O0VDZ0JFLGdCQUFnQjtBRGhCVDs7QUFBVDs7Ozs7Q0FBUzs7QUFBVDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU07RUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4QixjQUFXO0tBQVgsV0FBVyxFQUFFLE1BQU07RUFDbkIsd1JBQXNQLEVBQUUsTUFBTTtBRC9CdlA7O0FBQVQ7OztDQUFTOztBQUFUO0VDd0NFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLG9CQUFvQixFQUFFLE1BQU07QUR6Q3JCOztBQUFUOzs7O0NBQVM7O0FBQVQ7RUNtREUsU0FBUyxFQUFFLE1BQU07RUFDakIsY0FBYyxFQUFFLE1BQU07RUFDdEIscUJBQXFCLEVBQUUsTUFBTTtBRHJEdEI7O0FBQVQ7O0NBQVM7O0FBQVQ7RUM2REUseUNBQWlDO1VBQWpDLGlDQUFpQztBRDdEMUI7O0FBQVQ7O0NBQVM7O0FBQVQ7Ozs7OztFQzBFRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FEM0ViOztBQUFUOztDQUFTOztBQUFUO0VDbUZFLGNBQWM7RUFDZCx3QkFBd0I7QURwRmpCOztBQUFUOztDQUFTOztBQUFUOztFQzZGRSxtQkFBbUI7QUQ3Rlo7O0FBQVQ7OztDQUFTOztB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QTtFQUFBO0NBQUE7QUZBQTtFRUFBLG9CQUFBO0VBQUE7Q0FBQTtBRkFBOztFRUFBO0lBQUEsb0JBQUE7SUFBQTtHQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiYXNzZXRzL2ZvbnRzL09yYml0cm9uLVJlZ3VsYXIud29mZlxcXCIpO1xcclxcbn1cIixcIi8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogdGhlbWUoJ2JvcmRlckNvbG9yLkRFRkFVTFQnLCBjdXJyZW50Q29sb3IpOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICM5Y2EzYWYpOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vU3R5bGUgZm9yIGRldiBlbnZpcm9ubWVudCBvbmx5XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21haW4uc2Nzcyc7XHJcblxyXG4vL0ltcG9ydHNcclxuaW1wb3J0IHsgICAgXHJcbiAgICBpc0RlbGV0ZUJ1dHRvbixcclxuICAgIGlzQ29tcGxleE9wZXJhdG9yLFxyXG4gICAgaXNFcXVhbFNpZ24sXHJcbiAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICBpc0Zsb2F0UG9pbnQsXHJcbiAgICBpc09wZXJhdG9yLFxyXG4gICAgaXNEaWdpdCxcclxuICAgIGlubmVySXNFbXB0eSxcclxuICAgIHZhbHVlSXNFbXB0eVxyXG59IGZyb20gJy4vZnVuY3Rpb25zL3ZhbGlkYXRpb25zLmpzJztcclxuXHJcbi8vVmFyaWFibGVzXHJcbmxldCBpbnB1dFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0X3pvbmVcIik7XHJcbmxldCBjYWxjdWxhdG9yS2V5Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3Jfa2V5Ym9hcmRcIik7XHJcblxyXG5sZXQgcHJldmlvdXNOdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aW91c19udW1iZXJcIik7XHJcbmxldCBvcGVyYXRvclNpZ25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVyYXRvcl9zaWduXCIpO1xyXG5sZXQgbGF0ZXN0TnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0ZXN0X251bWJlclwiKTtcclxubGV0IGVxdWFsU2lnbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVxdWFsX3NpZ25cIik7XHJcblxyXG5sZXQgbWF4RGlnaXRTaXplID0gMTY7XHJcblxyXG4vL21hdGggZnVuY3Rpb25zXHJcbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcclxuY29uc3Qgc3VidHJhY3Rpb24gPSAoYSwgYikgPT4gYSAtIGI7XHJcbmNvbnN0IG11bHRpcGxpY2F0aW9uID0gKGEsIGIpID0+IGEgKiBiO1xyXG5jb25zdCBkaXZpc2lvbiA9IChhLCBiKSA9PiBhIC8gYjtcclxuXHJcbi8vRnVuY3Rpb25zXHJcbmxldCBjdXJyZW50VXNlcklucHV0VmFsdWUgPSAnJztcclxubGV0IGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9ICcnO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmF3VmFsdWUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuY29uc3QgcmVuZGVyRGlzcGxheVZhbHVlID0gcmF3VmFsdWUgPT4ge1xyXG4gICAgaWYocmF3VmFsdWUgPT0gXCJJbmZpbml0eVwiKXtcclxuICAgICAgICByZXR1cm4gXCJPVkVSRkxPVyBFUlJPUlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYXdWYWx1ZS5yZXBsYWNlKCcuJywgJywnKTtcclxufVxyXG5cclxuLyoqIFxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHJhd1ZhbHVlIFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuY29uc3QgcmVuZGVyQ3VycmVudENhbGNEaXNwbGF5VmFsdWUgPSByYXdWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKS5yZXBsYWNlKC8sJC8sICcnKTtcclxufVxyXG5cclxuY29uc3QgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uID0gKCkgPT4ge1xyXG4gICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBlcXVhbFNpZ25FbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBlcXVhbFNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5jb25zdCBjbGVhcklucHV0Wm9uZSA9ICgpID0+IHtcclxuICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSAwO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSAwO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG59XHJcblxyXG5jb25zdCBjbGVhckVycm9yID0gKCkgPT4ge1xyXG4gICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcInJlc3VsdFwiKXtcclxuICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgIH1cclxuICAgIGNsZWFySW5wdXRab25lKCk7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xyXG4gICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICBjbGVhcklucHV0Wm9uZSgpO1xyXG59XHJcblxyXG5jb25zdCBjbGVhckxhc3QgPSAoKSA9PiB7XHJcbiAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwicmVzdWx0XCIpe1xyXG4gICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwiY3VycmVudFwiKXtcclxuICAgICAgICBsZXQgdmFsdWVUb0NsZWFyID0gaW5wdXRab25lLmRhdGFzZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHJhd1ZhbHVlID0gXCIwXCI7XHJcbiAgICBcclxuICAgICAgICBpZih2YWx1ZVRvQ2xlYXIubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIHJhd1ZhbHVlID0gdmFsdWVUb0NsZWFyLnJlcGxhY2UoLy4kLywgJycpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdWYWx1ZSk7XHJcbiAgICBcclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlOdW1iZXJJbklucHV0Wm9uZSA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PiB7XHJcblxyXG4gICAgbGV0IHJhd1ZhbHVlID0gaW5wdXRab25lLmRhdGFzZXQudmFsdWU7XHJcblxyXG4gICAgLy9QcmV2ZW50IHVzZXIgZnJvbSBpbnB1dGluZyBtb3JlIGRpZ2l0cyB0aGFuIG1heCBhbGxvd2VkIHNpemVcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlLmxlbmd0aCA8IG1heERpZ2l0U2l6ZSl7XHJcbiAgICAgICAgcmF3VmFsdWUgKz0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaW5wdXRab25lLmRhdGFzZXQudHlwZSAhPSBcImN1cnJlbnRcIiB8fCAoaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPT0gXCIwXCIgJiYgIWlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpKSApe1xyXG4gICAgICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIiAmJiBlcXVhbFNpZ25FbGVtZW50LmlubmVyVGV4dCA9PSBcIj1cIil7XHJcbiAgICAgICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmF3VmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKTtcclxuXHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheURlY2ltYWxOdW1iZXIgPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG4gICAgaWYoaXNEZWNpbWFsTnVtYmVyKGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9FcmFzZSBwcmV2aW91cyBjYWxjdWxhdGlvbiByZXN1bHRcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIil7XHJcbiAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gMDtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gMDtcclxuICAgIH1cclxuICAgIGRpc3BsYXlOdW1iZXJJbklucHV0Wm9uZShjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmlyc3RPcGVyYW5kID0gcGFyc2VGbG9hdChwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSk7XHJcbiAgICBsZXQgb3BlcmF0b3JTaWduID0gb3BlcmF0b3JTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IHNlY29uZE9wZXJhbmQgPSBwYXJzZUZsb2F0KGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSk7XHJcblxyXG4gICAgc3dpdGNoIChvcGVyYXRvclNpZ24pIHtcclxuICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3VtKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCk7XHJcblxyXG4gICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdGlvbihmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG5cclxuICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbGljYXRpb24oZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kKTtcclxuXHJcbiAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgaWYoc2Vjb25kT3BlcmFuZCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGlucHV0Wm9uZS50ZXh0Q29udGVudCA9IFwiR08gQkFDSyBUTyBTQ0hPT0xcIjtcclxuICAgICAgICAgICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXZpc2lvbihmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG4gICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlFcXVhbFNpZ24gPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG5cclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlKHJhd1ZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIC8vSWYgY3VycmVudF9jYWxjIGlzIGVtcHR5OlxyXG4gICAgaWYoaW5uZXJJc0VtcHR5KHByZXZpb3VzTnVtYmVyRWxlbWVudCkpe1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB9XHJcbiAgICAvL0lmIG9ubHkgcHJldmlvdXNOdW1iZXIgaXMgbm90IGVtcHR5IChvcGVyYXRvciBpcyBlbXB0eSlcclxuICAgIGVsc2UgaWYoaW5uZXJJc0VtcHR5KG9wZXJhdG9yU2lnbkVsZW1lbnQpKXtcclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB9XHJcbiAgICAvL2lmIGN1cnJlbnRfY2FsYyBlbmQgYnkgYW4gb3BlcmF0b3I6XHJcbiAgICBlbHNlIGlmKCFpbm5lcklzRW1wdHkob3BlcmF0b3JTaWduRWxlbWVudCkgJiYgaW5uZXJJc0VtcHR5KGxhdGVzdE51bWJlckVsZW1lbnQpKSB7XHJcblxyXG4gICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlSZXN1bHQgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3UmVzdWx0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1Jlc3VsdDtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVJlc3VsdDtcclxuICAgIH1cclxuICAgIC8vaWYgY3VycmVudF9jYWxjIGVuZCBieSA9OlxyXG4gICAgZWxzZSBpZighaW5uZXJJc0VtcHR5KGVxdWFsU2lnbkVsZW1lbnQpKXtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICBsZXQgZGlzcGxheVJlc3VsdCA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdSZXN1bHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3UmVzdWx0O1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy9JZiBoYXMgYSBjb21wbGV4IG9wZXJhdG9yIHJlc3VsdCBpbiBsYXRlc3QgbnVtYmVyIGFuZCBkb24ndCBlbmQgYnkgPTpcclxuICAgIGVsc2UgaWYoIWlubmVySXNFbXB0eShsYXRlc3ROdW1iZXJFbGVtZW50KSAmJiBpbm5lcklzRW1wdHkoZXF1YWxTaWduRWxlbWVudCkpe1xyXG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICBsZXQgZGlzcGxheVJlc3VsdCA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdSZXN1bHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3UmVzdWx0O1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5UmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwicmVzdWx0XCI7XHJcblxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5T3BlcmF0b3IgPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG5cclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IHJhd1ZhbHVlSXNDYWxjdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy9FcmFzZSBwcmV2aW91cyBjYWxjdWxhdGlvblxyXG4gICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcInJlc3VsdFwiICYmICFpbm5lcklzRW1wdHkoZXF1YWxTaWduRWxlbWVudCkpe1xyXG4gICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgLy9DYWxjdWxhdGUgcHJldmlvdXMgbnVtYmVyIGlmIG5lZWRlZFxyXG4gICAgZWxzZSBpZighaW5uZXJJc0VtcHR5KHByZXZpb3VzTnVtYmVyRWxlbWVudCkpe1xyXG4gICAgICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJjdXJyZW50XCIpe1xyXG4gICAgICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF2YWx1ZUlzRW1wdHkobGF0ZXN0TnVtYmVyRWxlbWVudCkgJiYgIWlubmVySXNFbXB0eShvcGVyYXRvclNpZ25FbGVtZW50KSl7XHJcbiAgICAgICAgICAgIHJhd1ZhbHVlID0gY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgICAgIHJhd1ZhbHVlSXNDYWxjdWxhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcInRlbXBvcmFyeVwiKXtcclxuICAgICAgICAgICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBlcXVhbFNpZ25FbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBlcXVhbFNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlKHJhd1ZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG5cclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInRlbXBvcmFyeVwiO1xyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcblxyXG4gICAgaWYocmF3VmFsdWVJc0NhbGN1bGF0ZWQpe1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInJlc3VsdFwiO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3dpdGNoU2lnbiA9ICgpID0+IHtcclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgaWYocmF3VmFsdWUgPCAwKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyYXdWYWx1ZSk7XHJcbiAgICAgICAgcmF3VmFsdWUgPSByYXdWYWx1ZS5yZXBsYWNlKC9eLS8sIFwiXCIpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYocmF3VmFsdWUgPiAwKXtcclxuICAgICAgICByYXdWYWx1ZSA9IFwiLVwiICsgcmF3VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKTtcclxuXHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUNvbXBsZXhPcGVyYXRvciA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PiB7XHJcbiAgICBsZXQgeCA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCJcIjsgXHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICBpZihjdXJyZW50VXNlcklucHV0VmFsdWUgPT09IFwiMS94XCIpe1xyXG4gICAgICAgIGlmKHggPT0gMCl7XHJcbiAgICAgICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBcIkNBTk5PVCBESVZJREUgQlkgMFwiO1xyXG4gICAgICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC50eXBlID0gXCJlcnJvclwiO1xyXG4gICAgICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSA9IFwiMS9cIiArIHg7XHJcbiAgICAgICAgcmVzdWx0ID0gMSAvIHg7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PT0gXCJ4wrJcIil7XHJcbiAgICAgICAgY3VycmVudENhbGNEaXNwbGF5VmFsdWUgPSB4ICsgXCLCslwiO1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGgucG93KHgsIDIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjdXJyZW50VXNlcklucHV0VmFsdWUgPT09IFwi4oiaeFwiKXtcclxuICAgICAgICBpZih4IDwgMCl7XHJcbiAgICAgICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBcIklOVkFMSUQgSU5QVVRcIjtcclxuICAgICAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiZXJyb3JcIjtcclxuICAgICAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudENhbGNEaXNwbGF5VmFsdWUgPSBcIuKImlwiICsgeDtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLnNxcnQoeCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PT0gXCIlXCIpe1xyXG4gICAgICAgIGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0geCArIFwiJVwiO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1ZhbHVlID0gaW5uZXJJc0VtcHR5KHByZXZpb3VzTnVtYmVyRWxlbWVudCkgPyAwIDogcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWU7XHJcbiAgICAgICAgcmVzdWx0ID0gcHJldmlvdXNWYWx1ZSAqIHggLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaW5uZXJJc0VtcHR5KHByZXZpb3VzTnVtYmVyRWxlbWVudCkgJiYgaW5uZXJJc0VtcHR5KGxhdGVzdE51bWJlckVsZW1lbnQpKXtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gY3VycmVudENhbGNEaXNwbGF5VmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFpbm5lcklzRW1wdHkocHJldmlvdXNOdW1iZXJFbGVtZW50KSkgeyBcclxuICAgICAgICBpZighaW5uZXJJc0VtcHR5KG9wZXJhdG9yU2lnbkVsZW1lbnQpKXtcclxuICAgICAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlubmVySXNFbXB0eShvcGVyYXRvclNpZ25FbGVtZW50KSl7XHJcbiAgICAgICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gY3VycmVudENhbGNEaXNwbGF5VmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJEaXNwbGF5VmFsdWUocmVzdWx0LnRvU3RyaW5nKCkpO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByZXN1bHQ7XHJcbiAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwidGVtcG9yYXJ5XCI7XHJcblxyXG59XHJcblxyXG5jb25zdCB0cmVhdFVzZXJJbnB1dCA9IChjdXJyZW50VXNlcklucHV0VmFsdWUsIGN1cnJlbnRVc2VySW5wdXRDbGFzcykgPT4ge1xyXG4gICAgaWYoaXNEaWdpdChjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJudW1lcmljXCIpIHtcclxuICAgICAgICBkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJmbG9hdF9wb2ludFwiKSB7XHJcbiAgICAgICAgZGlzcGxheURlY2ltYWxOdW1iZXIoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGlzT3BlcmF0b3IoY3VycmVudFVzZXJJbnB1dFZhbHVlKSAmJiBjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwib3BlcmF0b3JcIil7XHJcbiAgICAgICAgZGlzcGxheU9wZXJhdG9yKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihpc0VxdWFsU2lnbihjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJlcXVhbFwiKXtcclxuICAgICAgICBkaXNwbGF5RXF1YWxTaWduKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwic3dpdGNoX3NpZ25cIil7XHJcbiAgICAgICAgc3dpdGNoU2lnbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcImRlbGV0ZV9idXR0b25cIil7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50VXNlcklucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyX2Vycm9yXCI6XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyX2FsbFwiOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJBbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xlYXJfbGFzdFwiOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJMYXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcImNvbXBsZXhfb3BlcmF0b3JcIil7XHJcbiAgICAgICAgZGlzcGxheUNvbXBsZXhPcGVyYXRvcihjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL01haW4gc2NyaXB0XHJcbnRyeSB7XHJcbiAgICAvL0xpc3RlbiBmb3IgbW91c2UgaW5wdXQgdmFsdWVcclxuICAgIGNhbGN1bGF0b3JLZXlib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY2xhc3NcIik7XHJcbiAgICAgICAgdHJlYXRVc2VySW5wdXQoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9MaXN0ZW4gZm9yIHVzZXIga2V5Ym9hcmQgaW5wdXQgdmFsdWVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZihpc0RpZ2l0KGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwibnVtZXJpY1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzT3BlcmF0b3IoZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IGV2ZW50LmtleTtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJvcGVyYXRvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzRmxvYXRQb2ludChldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCIuXCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZmxvYXRfcG9pbnRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0VxdWFsU2lnbihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCI9XCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZXF1YWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0NvbXBsZXhPcGVyYXRvcihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcImNvbXBsZXhfb3BlcmF0b3JcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0RlbGV0ZUJ1dHRvbihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBcImNsZWFyX2xhc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCJjbGVhcl9lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBcImNsZWFyX2FsbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJkZWxldGVfYnV0dG9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTm90IGEgd29ya2FibGUga2V5OiAke2V2ZW50LmtleX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmVhdFVzZXJJbnB1dChjdXJyZW50VXNlcklucHV0VmFsdWUsIGN1cnJlbnRVc2VySW5wdXRDbGFzcyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxufSBcclxuXHJcbmNhdGNoIChlcnJvcikge1xyXG4gICAgaW5wdXRab25lLnRleHRDb250ZW50ID0gXCJFUlJPUlwiO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiZXJyb3JcIjtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGlnaXRzUmVnIiwiUmVnRXhwIiwiaXNEaWdpdCIsInZhbHVlIiwidGVzdCIsIm9wZXJhdG9yc1JlZyIsImlzT3BlcmF0b3IiLCJmbG9hdGluZ1BvaW50UmVnIiwiaXNGbG9hdFBvaW50IiwiZGVjaW1hbE51bWJlclJlZyIsImlzRGVjaW1hbE51bWJlciIsImVxdWFsU2lnblJlZyIsImlzRXF1YWxTaWduIiwiY29tcGxleE9wZXJhdG9yUmVnIiwiaXNDb21wbGV4T3BlcmF0b3IiLCJkZWxldGVCdXR0b25SZWciLCJpc0RlbGV0ZUJ1dHRvbiIsImlubmVySXNFbXB0eSIsImVsZW1lbnQiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJ2YWx1ZUlzRW1wdHkiLCJkYXRhc2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0eWxlIiwiaW5wdXRab25lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbGN1bGF0b3JLZXlib2FyZCIsInByZXZpb3VzTnVtYmVyRWxlbWVudCIsIm9wZXJhdG9yU2lnbkVsZW1lbnQiLCJsYXRlc3ROdW1iZXJFbGVtZW50IiwiZXF1YWxTaWduRWxlbWVudCIsIm1heERpZ2l0U2l6ZSIsInN1bSIsImEiLCJiIiwic3VidHJhY3Rpb24iLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlzaW9uIiwiY3VycmVudFVzZXJJbnB1dFZhbHVlIiwiY3VycmVudFVzZXJJbnB1dENsYXNzIiwicmVuZGVyRGlzcGxheVZhbHVlIiwicmF3VmFsdWUiLCJyZXBsYWNlIiwicmVuZGVyQ3VycmVudENhbGNEaXNwbGF5VmFsdWUiLCJlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24iLCJjbGVhcklucHV0Wm9uZSIsInR5cGUiLCJjbGVhckVycm9yIiwiY2xlYXJBbGwiLCJjbGVhckxhc3QiLCJ2YWx1ZVRvQ2xlYXIiLCJkaXNwbGF5VmFsdWUiLCJkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUiLCJkaXNwbGF5RGVjaW1hbE51bWJlciIsImNhbGN1bGF0ZSIsImZpcnN0T3BlcmFuZCIsInBhcnNlRmxvYXQiLCJvcGVyYXRvclNpZ24iLCJzZWNvbmRPcGVyYW5kIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5RXF1YWxTaWduIiwidG9TdHJpbmciLCJyYXdSZXN1bHQiLCJkaXNwbGF5UmVzdWx0IiwiZGlzcGxheU9wZXJhdG9yIiwicmF3VmFsdWVJc0NhbGN1bGF0ZWQiLCJzd2l0Y2hTaWduIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXlDb21wbGV4T3BlcmF0b3IiLCJ4IiwiY3VycmVudENhbGNEaXNwbGF5VmFsdWUiLCJyZXN1bHQiLCJNYXRoIiwicG93Iiwic3FydCIsInByZXZpb3VzVmFsdWUiLCJ0cmVhdFVzZXJJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImtleSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==