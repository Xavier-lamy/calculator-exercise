/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/regex.js":
/*!********************************!*\
  !*** ./src/functions/regex.js ***!
  \********************************/
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

module.exports = {
  isDeleteButton: isDeleteButton,
  isComplexOperator: isComplexOperator,
  isEqualSign: isEqualSign,
  isDecimalNumber: isDecimalNumber,
  isFloatPoint: isFloatPoint,
  isOperator: isOperator,
  isDigit: isDigit
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.h-24 {\n  height: 6rem;\n}\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-end {\n  align-items: flex-end;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(187, 247, 208, var(--tw-bg-opacity));\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-calculator {\n  font-family: \"Orbitron\", \"Courier New\";\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n@font-face {\n  font-family: \"Orbitron\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n.peer:hover ~ .peer-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@media (min-width: 640px) {\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:font-bold {\n    font-weight: 700;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.scss","webpack://./src/%3Cinput%20css%206E_A6W%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n@font-face {\r\n    font-family: \"Orbitron\";\r\n    src: url(\"assets/fonts/Orbitron-Regular.woff\");\r\n}","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
/* harmony import */ var _functions_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/regex.js */ "./src/functions/regex.js");
/* harmony import */ var _functions_regex_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__);
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
  return rawValue.replace('.', ',');
};
/** 
 * 
 * @param {string} rawValue 
 * @returns
 */


var renderCurrentCalcDisplayValue = function renderCurrentCalcDisplayValue(rawValue) {
  return rawValue.replace('.', ',').replace(/,$/, '');
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
      console.log(valueToClear.length);
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

  if (inputZone.dataset.type != "current" || inputZone.dataset.value == "0" && !(0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue)) {
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
  if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isDecimalNumber)(inputZone.dataset.value)) {
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

  if (previousNumberElement.innerText.length == 0) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //If only previousNumber is not empty
  else if (operatorSignElement.innerText.length == 0) {
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //if current_calc end by an operator:
  else if (operatorSignElement.innerText.length != 0 && latestNumberElement.innerText.length == 0) {
    latestNumberElement.dataset.value = rawValue;
    latestNumberElement.innerText = displayValue;
    var rawResult = calculate();
    var displayResult = renderDisplayValue(rawResult.toString());
    inputZone.dataset.value = rawResult;
    inputZone.innerText = displayResult;
  } //if current_calc end by =:
  else if (equalSignElement.innerText.length != 0) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;

    var _rawResult = calculate();

    var _displayResult = renderDisplayValue(_rawResult.toString());

    inputZone.dataset.value = _rawResult;
    inputZone.innerText = _displayResult;
  } //If has a temporary result and don't end by =:
  else if (latestNumberElement.innerText.length != 0 && equalSignElement.innerText.length == 0) {
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

  if (inputZone.dataset.type == "result" && equalSignElement.innerText == "=") {
    erasePreviousCalculation();
  } //Calculate previous number if needed
  else if (previousNumberElement.innerText.length != 0) {
    if (inputZone.dataset.type == "current") {
      latestNumberElement.dataset.value = rawValue;
    }

    if (latestNumberElement.dataset.value.length != 0) {
      rawValue = calculate();
      rawValueIsCalculated = true;

      if (inputZone.dataset.type == "temporary") {
        console.log('case2');
        latestNumberElement.innerText = "";
        latestNumberElement.dataset.value = "";
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
      inputZone.textContent = "CANNOT DIVIDE BY 0";
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
    currentCalcDisplayValue = "√" + x;
    result = Math.sqrt(x);
  }

  if (previousNumberElement.innerText.length == 0) {
    previousNumberElement.dataset.value = result;
    previousNumberElement.innerText = currentCalcDisplayValue;
  } else {
    latestNumberElement.dataset.value = result;
    latestNumberElement.innerText = currentCalcDisplayValue;
  }

  var displayValue = renderDisplayValue(result.toString());
  inputZone.dataset.value = result;
  inputZone.innerText = displayValue;
  inputZone.dataset.type = "temporary";
};

var treatUserInput = function treatUserInput(currentUserInputValue, currentUserInputClass) {
  if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isDigit)(currentUserInputValue) && currentUserInputClass === "numeric") {
    displayNumberInInputZone(currentUserInputValue);
  } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue) && currentUserInputClass === "float_point") {
    displayDecimalNumber(currentUserInputValue);
  } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isOperator)(currentUserInputValue) && currentUserInputClass === "operator") {
    displayOperator(currentUserInputValue);
  } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isEqualSign)(currentUserInputValue) && currentUserInputClass === "equal") {
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
    if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isDigit)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "numeric";
    } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isOperator)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "operator";
    } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(event.key)) {
      currentUserInputValue = ".";
      currentUserInputClass = "float_point";
    } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isEqualSign)(event.key)) {
      currentUserInputValue = "=";
      currentUserInputClass = "equal";
    } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isComplexOperator)(event.key)) {
      currentUserInputValue = event.key;
      currentUserInputClass = "complex_operator";
    } else if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isDeleteButton)(event.key)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsT0FBTyxNQUFNLGFBQWEsT0FBTyxTQUFTLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLHVCQUF1QixXQUFXLG9CQUFvQix1QkFBdUIsUUFBUSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsdUJBQXVCLFFBQVEsUUFBUSxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLGFBQWEsUUFBUSxNQUFNLE1BQU0sVUFBVSxhQUFhLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLFlBQVksUUFBUSxNQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLFFBQVEsdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUsscUJBQXFCLHVCQUF1Qix1QkFBdUIsUUFBUSxRQUFRLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIscUJBQXFCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIsdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixzQkFBc0IsUUFBUSxLQUFLLHFCQUFxQixzQkFBc0IsUUFBUSxNQUFNLHFCQUFxQixzQkFBc0IsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxZQUFZLHFCQUFxQix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FB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QXpCO0FBQ0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEIsS0FBWjtBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL2Z1bmN0aW9ucy9yZWdleC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL3NyYy9tYWluLnNjc3M/OTBlYSIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9SZWdleCB0ZXN0c1xyXG5jb25zdCBkaWdpdHNSZWcgPSBuZXcgUmVnRXhwKC9eWzAtOV0kLyk7XHJcbmNvbnN0IGlzRGlnaXQgPSB2YWx1ZSA9PiBkaWdpdHNSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBvcGVyYXRvcnNSZWcgPSBuZXcgUmVnRXhwKC9eWy0vKitdJC8pO1xyXG5jb25zdCBpc09wZXJhdG9yID0gdmFsdWUgPT4gb3BlcmF0b3JzUmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3QgZmxvYXRpbmdQb2ludFJlZyA9IG5ldyBSZWdFeHAoL15bLixdJC8pO1xyXG5jb25zdCBpc0Zsb2F0UG9pbnQgPSB2YWx1ZSA9PiBmbG9hdGluZ1BvaW50UmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3QgZGVjaW1hbE51bWJlclJlZyA9IG5ldyBSZWdFeHAoL15cXGQqWywuXVxcZCokLyk7XHJcbmNvbnN0IGlzRGVjaW1hbE51bWJlciA9IHZhbHVlID0+IGRlY2ltYWxOdW1iZXJSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBlcXVhbFNpZ25SZWcgPSBuZXcgUmVnRXhwKC9ePXxFbnRlciQvKTtcclxuY29uc3QgaXNFcXVhbFNpZ24gPSB2YWx1ZSA9PiBlcXVhbFNpZ25SZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBjb21wbGV4T3BlcmF0b3JSZWcgPSBuZXcgUmVnRXhwKC9eWyXCsl0kLyk7XHJcbmNvbnN0IGlzQ29tcGxleE9wZXJhdG9yID0gdmFsdWUgPT4gY29tcGxleE9wZXJhdG9yUmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3QgZGVsZXRlQnV0dG9uUmVnID0gbmV3IFJlZ0V4cCgvXkJhY2tzcGFjZXxEZWxldGV8RXNjYXBlfGNsZWFyXyhlcnJvcnxhbGx8bGFzdCkkLyk7XHJcbmNvbnN0IGlzRGVsZXRlQnV0dG9uID0gdmFsdWUgPT4gZGVsZXRlQnV0dG9uUmVnLnRlc3QodmFsdWUpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBpc0RlbGV0ZUJ1dHRvbixcclxuICAgIGlzQ29tcGxleE9wZXJhdG9yLFxyXG4gICAgaXNFcXVhbFNpZ24sXHJcbiAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICBpc0Zsb2F0UG9pbnQsXHJcbiAgICBpc09wZXJhdG9yLFxyXG4gICAgaXNEaWdpdCxcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZm9udHMvT3JiaXRyb24tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5teS0zIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaC0yNCB7XFxuICBoZWlnaHQ6IDZyZW07XFxufVxcbi53LWZpdCB7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLmdyaWQtY29scy00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmdhcC0xIHtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuLndoaXRlc3BhY2Utbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5iZy1ncmF5LTQwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyZWVuLTIwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjQ3LCAyMDgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtMyB7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbn1cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9udC1jYWxjdWxhdG9yIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LXdoaXRlIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG4uaG92ZXJcXFxcOmN1cnNvci1wb2ludGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhvdmVyXFxcXDpiZy1ncmF5LTMwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnBlZXI6aG92ZXIgfiAucGVlci1ob3ZlclxcXFw6cm90YXRlLTE4MCB7XFxuICAtLXR3LXJvdGF0ZTogMTgwZGVnO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDp0ZXh0LWxnIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOmZvbnQtYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy8lM0NpbnB1dCUyMGNzcyUyMDZFX0E2VyUzRVwiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQVMsQ0FBVDs7O0NBQVM7O0FBQVQ7OztFQ1FFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQixxQkFBd0QsRUFBRSxNQUFNO0FEWHpEOztBQUFUOztFQ2dCRSxnQkFBZ0I7QURoQlQ7O0FBQVQ7Ozs7O0NBQVM7O0FBQVQ7RUMyQkUsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4Qiw4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O0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQSxtQkFBQTtFQUFBO0FGRVM7QUFBVDtFRUZBLG1CQUFBO0VBQUE7QUZFUztBQUFUO0VFRkEsbUJBQUE7RUFBQTtBRkVTO0FBQVQ7RUVGQSxtQkFBQTtFQUFBO0FGRVM7QUFBVDtFRUZBLG1CQUFBO0VBQUE7QUZFUztBQUFUO0VFRkE7QUZFUztBQUFUO0VFRkE7QUZFUztBQUFUO0VFRkE7QUZFUztBQUFUO0VFRkE7QUZFUztBQUFUO0VFRkE7QUZFUztBQUFUO0VFRkEsb0JBQUE7RUFBQTtBRkVTO0FBQVQ7RUVGQSxvQkFBQTtFQUFBO0FGRVM7QUFBVDtFRUZBLHFCQUFBO0VBQUE7QUZFUztBQUVUO0VBQ0ksdUJBQXVCO0VBQ3ZCLDRDQUE4QyxFQUFBO0FBTmxEO0VFQUE7Q0FBQTtBRkFBO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxvQkFBQTtFQUFBO0NBQUE7QUZBQTs7RUVBQTtJQUFBLG9CQUFBO0lBQUE7R0FBQTs7RUFBQTtJQUFBO0dBQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcImFzc2V0cy9mb250cy9PcmJpdHJvbi1SZWd1bGFyLndvZmZcXFwiKTtcXHJcXG59XCIsXCIvKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IHRoZW1lKCdib3JkZXJDb2xvci5ERUZBVUxUJywgY3VycmVudENvbG9yKTsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjOWNhM2FmKTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvL1N0eWxlIGZvciBkZXYgZW52aXJvbm1lbnQgb25seVxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLnNjc3MnO1xyXG5cclxuLy9JbXBvcnRzXHJcbmltcG9ydCB7ICAgIFxyXG4gICAgaXNEZWxldGVCdXR0b24sXHJcbiAgICBpc0NvbXBsZXhPcGVyYXRvcixcclxuICAgIGlzRXF1YWxTaWduLFxyXG4gICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgaXNGbG9hdFBvaW50LFxyXG4gICAgaXNPcGVyYXRvcixcclxuICAgIGlzRGlnaXQsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMvcmVnZXguanMnO1xyXG5cclxuLy9WYXJpYWJsZXNcclxubGV0IGlucHV0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRfem9uZVwiKTtcclxubGV0IGNhbGN1bGF0b3JLZXlib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRvcl9rZXlib2FyZFwiKTtcclxuXHJcbmxldCBwcmV2aW91c051bWJlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX251bWJlclwiKTtcclxubGV0IG9wZXJhdG9yU2lnbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZXJhdG9yX3NpZ25cIik7XHJcbmxldCBsYXRlc3ROdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXRlc3RfbnVtYmVyXCIpO1xyXG5sZXQgZXF1YWxTaWduRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXF1YWxfc2lnblwiKTtcclxuXHJcbmxldCBtYXhEaWdpdFNpemUgPSAxNjtcclxuXHJcbi8vbWF0aCBmdW5jdGlvbnNcclxuY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xyXG5jb25zdCBzdWJ0cmFjdGlvbiA9IChhLCBiKSA9PiBhIC0gYjtcclxuY29uc3QgbXVsdGlwbGljYXRpb24gPSAoYSwgYikgPT4gYSAqIGI7XHJcbmNvbnN0IGRpdmlzaW9uID0gKGEsIGIpID0+IGEgLyBiO1xyXG5cclxuLy9GdW5jdGlvbnNcclxubGV0IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9ICcnO1xyXG5sZXQgY3VycmVudFVzZXJJbnB1dENsYXNzID0gJyc7XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByYXdWYWx1ZSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5jb25zdCByZW5kZXJEaXNwbGF5VmFsdWUgPSByYXdWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgnLicsICcsJyk7XHJcbn1cclxuXHJcbi8qKiBcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByYXdWYWx1ZSBcclxuICogQHJldHVybnNcclxuICovXHJcbmNvbnN0IHJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gcmF3VmFsdWUgPT4ge1xyXG4gICAgcmV0dXJuIHJhd1ZhbHVlLnJlcGxhY2UoJy4nLCAnLCcpLnJlcGxhY2UoLywkLywgJycpO1xyXG59XHJcblxyXG5jb25zdCBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24gPSAoKSA9PiB7XHJcbiAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGxhdGVzdE51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcbiAgICBcclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFySW5wdXRab25lID0gKCkgPT4ge1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IDA7XHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IDA7XHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC50eXBlID0gXCJjdXJyZW50XCI7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwicmVzdWx0XCIpe1xyXG4gICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJJbnB1dFpvbmUoKTtcclxufVxyXG5cclxuY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XHJcbiAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgIGNsZWFySW5wdXRab25lKCk7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyTGFzdCA9ICgpID0+IHtcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIil7XHJcbiAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJjdXJyZW50XCIpe1xyXG4gICAgICAgIGxldCB2YWx1ZVRvQ2xlYXIgPSBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZTtcclxuICAgICAgICBsZXQgcmF3VmFsdWUgPSBcIjBcIjtcclxuICAgIFxyXG4gICAgICAgIGlmKHZhbHVlVG9DbGVhci5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVUb0NsZWFyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJhd1ZhbHVlID0gdmFsdWVUb0NsZWFyLnJlcGxhY2UoLy4kLywgJycpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdWYWx1ZSk7XHJcbiAgICBcclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlOdW1iZXJJbklucHV0Wm9uZSA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PiB7XHJcblxyXG4gICAgbGV0IHJhd1ZhbHVlID0gaW5wdXRab25lLmRhdGFzZXQudmFsdWU7XHJcblxyXG4gICAgLy9QcmV2ZW50IHVzZXIgZnJvbSBpbnB1dGluZyBtb3JlIGRpZ2l0cyB0aGFuIG1heCBhbGxvd2VkIHNpemVcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlLmxlbmd0aCA8IG1heERpZ2l0U2l6ZSl7XHJcbiAgICAgICAgcmF3VmFsdWUgKz0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaW5wdXRab25lLmRhdGFzZXQudHlwZSAhPSBcImN1cnJlbnRcIiB8fCAoaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPT0gXCIwXCIgJiYgIWlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpKSApe1xyXG4gICAgICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIiAmJiBlcXVhbFNpZ25FbGVtZW50LmlubmVyVGV4dCA9PSBcIj1cIil7XHJcbiAgICAgICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmF3VmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKTtcclxuXHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheURlY2ltYWxOdW1iZXIgPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG4gICAgaWYoaXNEZWNpbWFsTnVtYmVyKGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlKSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9FcmFzZSBwcmV2aW91cyBjYWxjdWxhdGlvbiByZXN1bHRcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIil7XHJcbiAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gMDtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gMDtcclxuICAgIH1cclxuICAgIGRpc3BsYXlOdW1iZXJJbklucHV0Wm9uZShjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmlyc3RPcGVyYW5kID0gcGFyc2VGbG9hdChwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSk7XHJcbiAgICBsZXQgb3BlcmF0b3JTaWduID0gb3BlcmF0b3JTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IHNlY29uZE9wZXJhbmQgPSBwYXJzZUZsb2F0KGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSk7XHJcblxyXG4gICAgc3dpdGNoIChvcGVyYXRvclNpZ24pIHtcclxuICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3VtKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCk7XHJcblxyXG4gICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdGlvbihmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG5cclxuICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbGljYXRpb24oZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kKTtcclxuXHJcbiAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgaWYoc2Vjb25kT3BlcmFuZCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGlucHV0Wm9uZS50ZXh0Q29udGVudCA9IFwiR08gQkFDSyBUTyBTQ0hPT0xcIjtcclxuICAgICAgICAgICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXZpc2lvbihmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG4gICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlFcXVhbFNpZ24gPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG5cclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlKHJhd1ZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIC8vSWYgY3VycmVudF9jYWxjIGlzIGVtcHR5OlxyXG4gICAgaWYocHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dC5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIH1cclxuICAgIC8vSWYgb25seSBwcmV2aW91c051bWJlciBpcyBub3QgZW1wdHlcclxuICAgIGVsc2UgaWYob3BlcmF0b3JTaWduRWxlbWVudC5pbm5lclRleHQubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIH1cclxuICAgIC8vaWYgY3VycmVudF9jYWxjIGVuZCBieSBhbiBvcGVyYXRvcjpcclxuICAgIGVsc2UgaWYob3BlcmF0b3JTaWduRWxlbWVudC5pbm5lclRleHQubGVuZ3RoICE9IDAgJiYgbGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQubGVuZ3RoID09IDApIHtcclxuXHJcbiAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICBsZXQgZGlzcGxheVJlc3VsdCA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdSZXN1bHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3UmVzdWx0O1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy9pZiBjdXJyZW50X2NhbGMgZW5kIGJ5ID06XHJcbiAgICBlbHNlIGlmKGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0Lmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICBsZXQgZGlzcGxheVJlc3VsdCA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdSZXN1bHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3UmVzdWx0O1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy9JZiBoYXMgYSB0ZW1wb3JhcnkgcmVzdWx0IGFuZCBkb24ndCBlbmQgYnkgPTpcclxuICAgIGVsc2UgaWYobGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQubGVuZ3RoICE9IDAgJiYgZXF1YWxTaWduRWxlbWVudC5pbm5lclRleHQubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICBsZXQgZGlzcGxheVJlc3VsdCA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdSZXN1bHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3UmVzdWx0O1xyXG4gICAgICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5UmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuICAgIGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwicmVzdWx0XCI7XHJcblxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5T3BlcmF0b3IgPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG5cclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IHJhd1ZhbHVlSXNDYWxjdWxhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy9FcmFzZSBwcmV2aW91cyBjYWxjdWxhdGlvblxyXG4gICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcInJlc3VsdFwiICYmIGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID09IFwiPVwiKXtcclxuICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgIH1cclxuICAgIC8vQ2FsY3VsYXRlIHByZXZpb3VzIG51bWJlciBpZiBuZWVkZWRcclxuICAgIGVsc2UgaWYocHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dC5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcImN1cnJlbnRcIil7XHJcbiAgICAgICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICAgICAgcmF3VmFsdWUgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgcmF3VmFsdWVJc0NhbGN1bGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwidGVtcG9yYXJ5XCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nhc2UyJyk7XHJcbiAgICAgICAgICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlKHJhd1ZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG5cclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInRlbXBvcmFyeVwiO1xyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgb3BlcmF0b3JTaWduRWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcblxyXG4gICAgaWYocmF3VmFsdWVJc0NhbGN1bGF0ZWQpe1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInJlc3VsdFwiO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3dpdGNoU2lnbiA9ICgpID0+IHtcclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgaWYocmF3VmFsdWUgPCAwKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyYXdWYWx1ZSk7XHJcbiAgICAgICAgcmF3VmFsdWUgPSByYXdWYWx1ZS5yZXBsYWNlKC9eLS8sIFwiXCIpOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYocmF3VmFsdWUgPiAwKXtcclxuICAgICAgICByYXdWYWx1ZSA9IFwiLVwiICsgcmF3VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKTtcclxuXHJcbiAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUNvbXBsZXhPcGVyYXRvciA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PiB7XHJcbiAgICBsZXQgeCA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCJcIjsgXHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICBpZihjdXJyZW50VXNlcklucHV0VmFsdWUgPT09IFwiMS94XCIpe1xyXG4gICAgICAgIGlmKHggPT0gMCl7XHJcbiAgICAgICAgICAgIGlucHV0Wm9uZS50ZXh0Q29udGVudCA9IFwiQ0FOTk9UIERJVklERSBCWSAwXCI7XHJcbiAgICAgICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCIxL1wiICsgeDtcclxuICAgICAgICByZXN1bHQgPSAxIC8geDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dFZhbHVlID09PSBcInjCslwiKXtcclxuICAgICAgICBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSA9IHggKyBcIsKyXCI7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5wb3coeCwgMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PT0gXCLiiJp4XCIpe1xyXG4gICAgICAgIGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCLiiJpcIiArIHg7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5zcXJ0KHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmVzdWx0O1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJEaXNwbGF5VmFsdWUocmVzdWx0LnRvU3RyaW5nKCkpO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByZXN1bHQ7XHJcbiAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwidGVtcG9yYXJ5XCI7XHJcblxyXG59XHJcblxyXG5jb25zdCB0cmVhdFVzZXJJbnB1dCA9IChjdXJyZW50VXNlcklucHV0VmFsdWUsIGN1cnJlbnRVc2VySW5wdXRDbGFzcykgPT4ge1xyXG4gICAgaWYoaXNEaWdpdChjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJudW1lcmljXCIpIHtcclxuICAgICAgICBkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJmbG9hdF9wb2ludFwiKSB7XHJcbiAgICAgICAgZGlzcGxheURlY2ltYWxOdW1iZXIoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGlzT3BlcmF0b3IoY3VycmVudFVzZXJJbnB1dFZhbHVlKSAmJiBjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwib3BlcmF0b3JcIil7XHJcbiAgICAgICAgZGlzcGxheU9wZXJhdG9yKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihpc0VxdWFsU2lnbihjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJlcXVhbFwiKXtcclxuICAgICAgICBkaXNwbGF5RXF1YWxTaWduKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwic3dpdGNoX3NpZ25cIil7XHJcbiAgICAgICAgc3dpdGNoU2lnbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcImRlbGV0ZV9idXR0b25cIil7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50VXNlcklucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyX2Vycm9yXCI6XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyX2FsbFwiOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJBbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xlYXJfbGFzdFwiOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJMYXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcImNvbXBsZXhfb3BlcmF0b3JcIil7XHJcbiAgICAgICAgZGlzcGxheUNvbXBsZXhPcGVyYXRvcihjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL01haW4gc2NyaXB0XHJcbnRyeSB7XHJcbiAgICAvL0xpc3RlbiBmb3IgbW91c2UgaW5wdXQgdmFsdWVcclxuICAgIGNhbGN1bGF0b3JLZXlib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY2xhc3NcIik7XHJcbiAgICAgICAgdHJlYXRVc2VySW5wdXQoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9MaXN0ZW4gZm9yIHVzZXIga2V5Ym9hcmQgaW5wdXQgdmFsdWVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZihpc0RpZ2l0KGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwibnVtZXJpY1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzT3BlcmF0b3IoZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IGV2ZW50LmtleTtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJvcGVyYXRvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzRmxvYXRQb2ludChldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCIuXCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZmxvYXRfcG9pbnRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0VxdWFsU2lnbihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCI9XCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZXF1YWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0NvbXBsZXhPcGVyYXRvcihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcImNvbXBsZXhfb3BlcmF0b3JcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0RlbGV0ZUJ1dHRvbihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBcImNsZWFyX2xhc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCJjbGVhcl9lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBcImNsZWFyX2FsbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJkZWxldGVfYnV0dG9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTm90IGEgd29ya2FibGUga2V5OiAke2V2ZW50LmtleX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJlYXRVc2VySW5wdXQoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbn0gXHJcblxyXG5jYXRjaCAoZXJyb3IpIHtcclxuICAgIGlucHV0Wm9uZS50ZXh0Q29udGVudCA9IFwiRVJST1JcIjtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRpZ2l0c1JlZyIsIlJlZ0V4cCIsImlzRGlnaXQiLCJ2YWx1ZSIsInRlc3QiLCJvcGVyYXRvcnNSZWciLCJpc09wZXJhdG9yIiwiZmxvYXRpbmdQb2ludFJlZyIsImlzRmxvYXRQb2ludCIsImRlY2ltYWxOdW1iZXJSZWciLCJpc0RlY2ltYWxOdW1iZXIiLCJlcXVhbFNpZ25SZWciLCJpc0VxdWFsU2lnbiIsImNvbXBsZXhPcGVyYXRvclJlZyIsImlzQ29tcGxleE9wZXJhdG9yIiwiZGVsZXRlQnV0dG9uUmVnIiwiaXNEZWxldGVCdXR0b24iLCJtb2R1bGUiLCJleHBvcnRzIiwic3R5bGUiLCJpbnB1dFpvbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FsY3VsYXRvcktleWJvYXJkIiwicHJldmlvdXNOdW1iZXJFbGVtZW50Iiwib3BlcmF0b3JTaWduRWxlbWVudCIsImxhdGVzdE51bWJlckVsZW1lbnQiLCJlcXVhbFNpZ25FbGVtZW50IiwibWF4RGlnaXRTaXplIiwic3VtIiwiYSIsImIiLCJzdWJ0cmFjdGlvbiIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJjdXJyZW50VXNlcklucHV0VmFsdWUiLCJjdXJyZW50VXNlcklucHV0Q2xhc3MiLCJyZW5kZXJEaXNwbGF5VmFsdWUiLCJyYXdWYWx1ZSIsInJlcGxhY2UiLCJyZW5kZXJDdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSIsImVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJjbGVhcklucHV0Wm9uZSIsInR5cGUiLCJjbGVhckVycm9yIiwiY2xlYXJBbGwiLCJjbGVhckxhc3QiLCJ2YWx1ZVRvQ2xlYXIiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheVZhbHVlIiwiZGlzcGxheU51bWJlckluSW5wdXRab25lIiwiZGlzcGxheURlY2ltYWxOdW1iZXIiLCJjYWxjdWxhdGUiLCJmaXJzdE9wZXJhbmQiLCJwYXJzZUZsb2F0Iiwib3BlcmF0b3JTaWduIiwic2Vjb25kT3BlcmFuZCIsInRleHRDb250ZW50IiwiZGlzcGxheUVxdWFsU2lnbiIsInRvU3RyaW5nIiwicmF3UmVzdWx0IiwiZGlzcGxheVJlc3VsdCIsImRpc3BsYXlPcGVyYXRvciIsInJhd1ZhbHVlSXNDYWxjdWxhdGVkIiwic3dpdGNoU2lnbiIsImRpc3BsYXlDb21wbGV4T3BlcmF0b3IiLCJ4IiwiY3VycmVudENhbGNEaXNwbGF5VmFsdWUiLCJyZXN1bHQiLCJNYXRoIiwicG93Iiwic3FydCIsInRyZWF0VXNlcklucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwia2V5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9