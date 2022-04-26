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

  if (innerIsEmpty(previousNumberElement)) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //If only previousNumber is not empty (operator is empty)
  else if (innerIsEmpty(operatorSignElement)) {
    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
  } //if current_calc end by an operator:
  else if (!innerIsEmpty(operatorSignElement) && innerIsEmpty(latestNumberElement)) {
    latestNumberElement.dataset.value = rawValue;
    latestNumberElement.innerText = displayValue;
    var rawResult = calculate();
    var displayResult = renderDisplayValue(rawResult.toString());
    inputZone.dataset.value = rawResult;
    inputZone.innerText = displayResult;
  } //if current_calc end by =:
  else if (!innerIsEmpty(equalSignElement)) {
    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;

    var _rawResult = calculate();

    var _displayResult = renderDisplayValue(_rawResult.toString());

    inputZone.dataset.value = _rawResult;
    inputZone.innerText = _displayResult;
  } //If has a complex operator result in latest number and don't end by =:
  else if (!innerIsEmpty(latestNumberElement) && innerIsEmpty(equalSignElement)) {
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

  if (inputZone.dataset.type == "result" && !innerIsEmpty(equalSignElement)) {
    erasePreviousCalculation();
  } //Calculate previous number if needed
  else if (!innerIsEmpty(previousNumberElement)) {
    if (inputZone.dataset.type == "current") {
      latestNumberElement.dataset.value = rawValue;
    }

    if (!valueIsEmpty(latestNumberElement)) {
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
    currentCalcDisplayValue = "√" + x;
    result = Math.sqrt(x);
  } else if (currentUserInputValue === "%") {
    currentCalcDisplayValue = x + "%";
    var previousValue = innerIsEmpty(previousNumberElement) ? 0 : previousNumberElement.dataset.value;
    result = previousValue * x / 100;
  }

  if (innerIsEmpty(previousNumberElement) && innerIsEmpty(latestNumberElement)) {
    previousNumberElement.dataset.value = result;
    previousNumberElement.innerText = currentCalcDisplayValue;
  } else if (!innerIsEmpty(previousNumberElement)) {
    if (!innerIsEmpty(operatorSignElement)) {
      latestNumberElement.dataset.value = result;
      latestNumberElement.innerText = currentCalcDisplayValue;
    } else if (innerIsEmpty(operatorSignElement)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFdBQVcsb0JBQW9CLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLHFCQUFxQix1QkFBdUIsUUFBUSxRQUFRLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxRQUFRLE1BQU0sTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsWUFBWSxRQUFRLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLFFBQVEsTUFBTSxTQUFTLHVCQUF1QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLFFBQVEsT0FBTyxNQUFNLEtBQUssdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxL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S0FISSxNQUlBLElBQUd0QixzRUFBaUIsQ0FBQ29FLEtBQUssQ0FBQ0csR0FBUCxDQUFwQixFQUFnQztBQUNqQ2xELE1BQUFBLHFCQUFxQixHQUFHK0MsS0FBSyxDQUFDRyxHQUE5QjtBQUNBakQsTUFBQUEscUJBQXFCLEdBQUcsa0JBQXhCO0FBQ0gsS0FISSxNQUlBLElBQUdwQixtRUFBYyxDQUFDa0UsS0FBSyxDQUFDRyxHQUFQLENBQWpCLEVBQTZCO0FBQzlCLGNBQVFILEtBQUssQ0FBQ0csR0FBZDtBQUNJLGFBQUssV0FBTDtBQUNJbEQsVUFBQUEscUJBQXFCLEdBQUcsWUFBeEI7QUFDQTs7QUFFSixhQUFLLFFBQUw7QUFDSUEsVUFBQUEscUJBQXFCLEdBQUcsYUFBeEI7QUFDQTs7QUFFSixhQUFLLFFBQUw7QUFDSUEsVUFBQUEscUJBQXFCLEdBQUcsV0FBeEI7QUFDQTs7QUFFSjtBQUNJO0FBZFI7O0FBZ0JBQyxNQUFBQSxxQkFBcUIsR0FBRyxlQUF4QjtBQUNILEtBbEJJLE1BbUJBO0FBQ0RrQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsK0JBQW1DVyxLQUFLLENBQUNHLEdBQXpDO0FBQ0E7QUFDSDs7QUFDREwsSUFBQUEsY0FBYyxDQUFDN0MscUJBQUQsRUFBd0JDLHFCQUF4QixDQUFkO0FBQ0gsR0E3Q0Q7QUFnREgsQ0F6REQsQ0EyREEsT0FBT2tELEtBQVAsRUFBYztBQUNWbEUsRUFBQUEsU0FBUyxDQUFDMEMsV0FBVixHQUF3QixPQUF4QjtBQUNBMUMsRUFBQUEsU0FBUyxDQUFDMEIsT0FBVixDQUFrQkcsSUFBbEIsR0FBeUIsT0FBekI7QUFDQXFCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvZnVuY3Rpb25zL3JlZ2V4LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL21haW4uc2Nzcz85MGVhIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1JlZ2V4IHRlc3RzXHJcbmNvbnN0IGRpZ2l0c1JlZyA9IG5ldyBSZWdFeHAoL15bMC05XSQvKTtcclxuY29uc3QgaXNEaWdpdCA9IHZhbHVlID0+IGRpZ2l0c1JlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IG9wZXJhdG9yc1JlZyA9IG5ldyBSZWdFeHAoL15bLS8qK10kLyk7XHJcbmNvbnN0IGlzT3BlcmF0b3IgPSB2YWx1ZSA9PiBvcGVyYXRvcnNSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBmbG9hdGluZ1BvaW50UmVnID0gbmV3IFJlZ0V4cCgvXlsuLF0kLyk7XHJcbmNvbnN0IGlzRmxvYXRQb2ludCA9IHZhbHVlID0+IGZsb2F0aW5nUG9pbnRSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBkZWNpbWFsTnVtYmVyUmVnID0gbmV3IFJlZ0V4cCgvXlxcZCpbLC5dXFxkKiQvKTtcclxuY29uc3QgaXNEZWNpbWFsTnVtYmVyID0gdmFsdWUgPT4gZGVjaW1hbE51bWJlclJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGVxdWFsU2lnblJlZyA9IG5ldyBSZWdFeHAoL149fEVudGVyJC8pO1xyXG5jb25zdCBpc0VxdWFsU2lnbiA9IHZhbHVlID0+IGVxdWFsU2lnblJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGNvbXBsZXhPcGVyYXRvclJlZyA9IG5ldyBSZWdFeHAoL15bJcKyXSQvKTtcclxuY29uc3QgaXNDb21wbGV4T3BlcmF0b3IgPSB2YWx1ZSA9PiBjb21wbGV4T3BlcmF0b3JSZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5jb25zdCBkZWxldGVCdXR0b25SZWcgPSBuZXcgUmVnRXhwKC9eQmFja3NwYWNlfERlbGV0ZXxFc2NhcGV8Y2xlYXJfKGVycm9yfGFsbHxsYXN0KSQvKTtcclxuY29uc3QgaXNEZWxldGVCdXR0b24gPSB2YWx1ZSA9PiBkZWxldGVCdXR0b25SZWcudGVzdCh2YWx1ZSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGlzRGVsZXRlQnV0dG9uLFxyXG4gICAgaXNDb21wbGV4T3BlcmF0b3IsXHJcbiAgICBpc0VxdWFsU2lnbixcclxuICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgIGlzRmxvYXRQb2ludCxcclxuICAgIGlzT3BlcmF0b3IsXHJcbiAgICBpc0RpZ2l0LFxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9mb250cy9PcmJpdHJvbi1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yMyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLm15LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTMge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tdC0xIHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxufVxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5oLTI0IHtcXG4gIGhlaWdodDogNnJlbTtcXG59XFxuLnctZml0IHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5tYXgtdy14cyB7XFxuICBtYXgtd2lkdGg6IDIwcmVtO1xcbn1cXG4uZ3JpZC1jb2xzLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZ2FwLTEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4ud2hpdGVzcGFjZS1ub3dyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmJnLWdyYXktNDAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctd2hpdGUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA4NSwgOTksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktMTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JlZW4tMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyNDcsIDIwOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcbi5wLTEge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb250LWNhbGN1bGF0b3Ige1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCI7XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuLmhvdmVyXFxcXDpjdXJzb3ItcG9pbnRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob3ZlclxcXFw6YmctZ3JheS0zMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5wZWVyOmhvdmVyIH4gLnBlZXItaG92ZXJcXFxcOnJvdGF0ZS0xODAge1xcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gIC5zbVxcXFw6dGV4dC1sZyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb250LWJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvJTNDaW5wdXQlMjBjc3MlMjBpa0RHVVMlM0VcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFTLENBQVQ7OztDQUFTOztBQUFUOzs7RUNRRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLG1CQUFtQixFQUFFLE1BQU07RUFDM0IscUJBQXdELEVBQUUsTUFBTTtBRFh6RDs7QUFBVDs7RUNnQkUsZ0JBQWdCO0FEaEJUOztBQUFUOzs7OztDQUFTOztBQUFUO0VDMkJFLGdCQUFnQixFQUFFLE1BQU07RUFDeEIsOEJBQThCLEVBQUUsTUFBTTtFQUN0QyxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLGNBQVc7S0FBWCxXQUFXLEVBQUUsTUFBTTtFQUNuQix3UkFBc1AsRUFBRSxNQUFNO0FEL0J2UDs7QUFBVDs7O0NBQVM7O0FBQVQ7RUN3Q0UsU0FBUyxFQUFFLE1BQU07RUFDakIsb0JBQW9C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O0FGRVM7QUFBVDtFRUZBLG1CQUFBO0VBQUE7QUZFUztBQUFUO0VFRkEsbUJBQUE7RUFBQTtBRkVTO0FBQVQ7RUVGQSxtQkFBQTtFQUFBO0FGRVM7QUFBVDtFRUZBO0FGRVM7QUFBVDtFRUZBO0FGRVM7QUFBVDtFRUZBO0FGRVM7QUFBVDtFRUZBO0FGRVM7QUFBVDtFRUZBO0FGRVM7QUFBVDtFRUZBLG9CQUFBO0VBQUE7QUZFUztBQUFUO0VFRkEsb0JBQUE7RUFBQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQSxxQkFBQTtFQUFBO0FGRVM7QUFFVDtFQUNJLHVCQUF1QjtFQUN2Qiw0Q0FBOEMsRUFBQTtBQU5sRDtFRUFBO0NBQUE7QUZBQTtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsb0JBQUE7RUFBQTtDQUFBO0FGQUE7O0VFQUE7SUFBQSxvQkFBQTtJQUFBO0dBQUE7O0VBQUE7SUFBQTtHQUFBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxyXFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxyXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCJhc3NldHMvZm9udHMvT3JiaXRyb24tUmVndWxhci53b2ZmXFxcIik7XFxyXFxufVwiLFwiLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiB0aGVtZSgnYm9yZGVyQ29sb3IuREVGQVVMVCcsIGN1cnJlbnRDb2xvcik7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgIzljYTNhZik7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLy9TdHlsZSBmb3IgZGV2IGVudmlyb25tZW50IG9ubHlcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbWFpbi5zY3NzJztcclxuXHJcbi8vSW1wb3J0c1xyXG5pbXBvcnQgeyAgICBcclxuICAgIGlzRGVsZXRlQnV0dG9uLFxyXG4gICAgaXNDb21wbGV4T3BlcmF0b3IsXHJcbiAgICBpc0VxdWFsU2lnbixcclxuICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgIGlzRmxvYXRQb2ludCxcclxuICAgIGlzT3BlcmF0b3IsXHJcbiAgICBpc0RpZ2l0LFxyXG59IGZyb20gJy4vZnVuY3Rpb25zL3JlZ2V4LmpzJztcclxuXHJcbi8vVmFyaWFibGVzXHJcbmxldCBpbnB1dFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0X3pvbmVcIik7XHJcbmxldCBjYWxjdWxhdG9yS2V5Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3Jfa2V5Ym9hcmRcIik7XHJcblxyXG5sZXQgcHJldmlvdXNOdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aW91c19udW1iZXJcIik7XHJcbmxldCBvcGVyYXRvclNpZ25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVyYXRvcl9zaWduXCIpO1xyXG5sZXQgbGF0ZXN0TnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0ZXN0X251bWJlclwiKTtcclxubGV0IGVxdWFsU2lnbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVxdWFsX3NpZ25cIik7XHJcblxyXG5sZXQgbWF4RGlnaXRTaXplID0gMTY7XHJcblxyXG4vL21hdGggZnVuY3Rpb25zXHJcbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcclxuY29uc3Qgc3VidHJhY3Rpb24gPSAoYSwgYikgPT4gYSAtIGI7XHJcbmNvbnN0IG11bHRpcGxpY2F0aW9uID0gKGEsIGIpID0+IGEgKiBiO1xyXG5jb25zdCBkaXZpc2lvbiA9IChhLCBiKSA9PiBhIC8gYjtcclxuXHJcbi8vRnVuY3Rpb25zXHJcbmxldCBjdXJyZW50VXNlcklucHV0VmFsdWUgPSAnJztcclxubGV0IGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9ICcnO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmF3VmFsdWUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuY29uc3QgcmVuZGVyRGlzcGxheVZhbHVlID0gcmF3VmFsdWUgPT4ge1xyXG4gICAgaWYocmF3VmFsdWUgPT0gXCJJbmZpbml0eVwiKXtcclxuICAgICAgICByZXR1cm4gXCJPVkVSRkxPVyBFUlJPUlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYXdWYWx1ZS5yZXBsYWNlKCcuJywgJywnKTtcclxufVxyXG5cclxuLyoqIFxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHJhd1ZhbHVlIFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuY29uc3QgcmVuZGVyQ3VycmVudENhbGNEaXNwbGF5VmFsdWUgPSByYXdWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1ZhbHVlKS5yZXBsYWNlKC8sJC8sICcnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAgXHJcbiAqL1xyXG5jb25zdCBpbm5lcklzRW1wdHkgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LmlubmVyVGV4dC5sZW5ndGggPT0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAgXHJcbiAqL1xyXG5jb25zdCB2YWx1ZUlzRW1wdHkgPSBlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUubGVuZ3RoID09IDA7XHJcbn1cclxuXHJcbmNvbnN0IGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbiA9ICgpID0+IHtcclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIG9wZXJhdG9yU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIG9wZXJhdG9yU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gXCJcIjtcclxuICAgIFxyXG4gICAgZXF1YWxTaWduRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgZXF1YWxTaWduRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuY29uc3QgY2xlYXJJbnB1dFpvbmUgPSAoKSA9PiB7XHJcbiAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gMDtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gMDtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImN1cnJlbnRcIjtcclxufVxyXG5cclxuY29uc3QgY2xlYXJFcnJvciA9ICgpID0+IHtcclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIil7XHJcbiAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBjbGVhcklucHV0Wm9uZSgpO1xyXG59XHJcblxyXG5jb25zdCBjbGVhckFsbCA9ICgpID0+IHtcclxuICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgY2xlYXJJbnB1dFpvbmUoKTtcclxufVxyXG5cclxuY29uc3QgY2xlYXJMYXN0ID0gKCkgPT4ge1xyXG4gICAgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcInJlc3VsdFwiKXtcclxuICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaW5wdXRab25lLmRhdGFzZXQudHlwZSA9PSBcImN1cnJlbnRcIil7XHJcbiAgICAgICAgbGV0IHZhbHVlVG9DbGVhciA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCByYXdWYWx1ZSA9IFwiMFwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYodmFsdWVUb0NsZWFyLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICByYXdWYWx1ZSA9IHZhbHVlVG9DbGVhci5yZXBsYWNlKC8uJC8sICcnKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3VmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUgPSBjdXJyZW50VXNlcklucHV0VmFsdWUgPT4ge1xyXG5cclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG5cclxuICAgIC8vUHJldmVudCB1c2VyIGZyb20gaW5wdXRpbmcgbW9yZSBkaWdpdHMgdGhhbiBtYXggYWxsb3dlZCBzaXplXHJcbiAgICBpZihpbnB1dFpvbmUuZGF0YXNldC52YWx1ZS5sZW5ndGggPCBtYXhEaWdpdFNpemUpe1xyXG4gICAgICAgIHJhd1ZhbHVlICs9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgIT0gXCJjdXJyZW50XCIgfHwgKGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID09IFwiMFwiICYmICFpc0Zsb2F0UG9pbnQoY3VycmVudFVzZXJJbnB1dFZhbHVlKSkgKXtcclxuICAgICAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwicmVzdWx0XCIgJiYgZXF1YWxTaWduRWxlbWVudC5pbm5lclRleHQgPT0gXCI9XCIpe1xyXG4gICAgICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhd1ZhbHVlID0gY3VycmVudFVzZXJJbnB1dFZhbHVlO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImN1cnJlbnRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHJlbmRlckRpc3BsYXlWYWx1ZShyYXdWYWx1ZSk7XHJcblxyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgIGlucHV0Wm9uZS5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlEZWNpbWFsTnVtYmVyID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuICAgIGlmKGlzRGVjaW1hbE51bWJlcihpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSkpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vRXJhc2UgcHJldmlvdXMgY2FsY3VsYXRpb24gcmVzdWx0XHJcbiAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwicmVzdWx0XCIpe1xyXG4gICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImN1cnJlbnRcIjtcclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IDA7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IDA7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxufVxyXG5cclxuY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGZpcnN0T3BlcmFuZCA9IHBhcnNlRmxvYXQocHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUpO1xyXG4gICAgbGV0IG9wZXJhdG9yU2lnbiA9IG9wZXJhdG9yU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZTtcclxuICAgIGxldCBzZWNvbmRPcGVyYW5kID0gcGFyc2VGbG9hdChsYXRlc3ROdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUpO1xyXG5cclxuICAgIHN3aXRjaCAob3BlcmF0b3JTaWduKSB7XHJcbiAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHN1bShmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG5cclxuICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3Rpb24oZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kKTtcclxuXHJcbiAgICAgICAgY2FzZSBcIipcIjpcclxuICAgICAgICAgICAgcmV0dXJuIG11bHRpcGxpY2F0aW9uKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCk7XHJcblxyXG4gICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgIGlmKHNlY29uZE9wZXJhbmQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFpvbmUudGV4dENvbnRlbnQgPSBcIkdPIEJBQ0sgVE8gU0NIT09MXCI7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC50eXBlID0gXCJlcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGl2aXNpb24oZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kKTtcclxuICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5RXF1YWxTaWduID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuXHJcbiAgICBsZXQgcmF3VmFsdWUgPSBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZTtcclxuICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJDdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZShyYXdWYWx1ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAvL0lmIGN1cnJlbnRfY2FsYyBpcyBlbXB0eTpcclxuICAgIGlmKGlubmVySXNFbXB0eShwcmV2aW91c051bWJlckVsZW1lbnQpKXtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy9JZiBvbmx5IHByZXZpb3VzTnVtYmVyIGlzIG5vdCBlbXB0eSAob3BlcmF0b3IgaXMgZW1wdHkpXHJcbiAgICBlbHNlIGlmKGlubmVySXNFbXB0eShvcGVyYXRvclNpZ25FbGVtZW50KSl7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy9pZiBjdXJyZW50X2NhbGMgZW5kIGJ5IGFuIG9wZXJhdG9yOlxyXG4gICAgZWxzZSBpZighaW5uZXJJc0VtcHR5KG9wZXJhdG9yU2lnbkVsZW1lbnQpICYmIGlubmVySXNFbXB0eShsYXRlc3ROdW1iZXJFbGVtZW50KSkge1xyXG5cclxuICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBsYXRlc3ROdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IGNhbGN1bGF0ZSgpO1xyXG4gICAgICAgIGxldCBkaXNwbGF5UmVzdWx0ID0gcmVuZGVyRGlzcGxheVZhbHVlKHJhd1Jlc3VsdC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdSZXN1bHQ7XHJcbiAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvL2lmIGN1cnJlbnRfY2FsYyBlbmQgYnkgPTpcclxuICAgIGVsc2UgaWYoIWlubmVySXNFbXB0eShlcXVhbFNpZ25FbGVtZW50KSl7XHJcbiAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlSZXN1bHQgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3UmVzdWx0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1Jlc3VsdDtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVJlc3VsdDtcclxuICAgIH1cclxuICAgIC8vSWYgaGFzIGEgY29tcGxleCBvcGVyYXRvciByZXN1bHQgaW4gbGF0ZXN0IG51bWJlciBhbmQgZG9uJ3QgZW5kIGJ5ID06XHJcbiAgICBlbHNlIGlmKCFpbm5lcklzRW1wdHkobGF0ZXN0TnVtYmVyRWxlbWVudCkgJiYgaW5uZXJJc0VtcHR5KGVxdWFsU2lnbkVsZW1lbnQpKXtcclxuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlSZXN1bHQgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3UmVzdWx0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSA9IHJhd1Jlc3VsdDtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBlcXVhbFNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICBlcXVhbFNpZ25FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInJlc3VsdFwiO1xyXG5cclxufVxyXG5cclxuY29uc3QgZGlzcGxheU9wZXJhdG9yID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuXHJcbiAgICBsZXQgcmF3VmFsdWUgPSBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZTtcclxuICAgIGxldCByYXdWYWx1ZUlzQ2FsY3VsYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vRXJhc2UgcHJldmlvdXMgY2FsY3VsYXRpb25cclxuICAgIGlmKGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPT0gXCJyZXN1bHRcIiAmJiAhaW5uZXJJc0VtcHR5KGVxdWFsU2lnbkVsZW1lbnQpKXtcclxuICAgICAgICBlcmFzZVByZXZpb3VzQ2FsY3VsYXRpb24oKTtcclxuICAgIH1cclxuICAgIC8vQ2FsY3VsYXRlIHByZXZpb3VzIG51bWJlciBpZiBuZWVkZWRcclxuICAgIGVsc2UgaWYoIWlubmVySXNFbXB0eShwcmV2aW91c051bWJlckVsZW1lbnQpKXtcclxuICAgICAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwiY3VycmVudFwiKXtcclxuICAgICAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdmFsdWVJc0VtcHR5KGxhdGVzdE51bWJlckVsZW1lbnQpKXtcclxuICAgICAgICAgICAgcmF3VmFsdWUgPSBjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgcmF3VmFsdWVJc0NhbGN1bGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihpbnB1dFpvbmUuZGF0YXNldC50eXBlID09IFwidGVtcG9yYXJ5XCIpe1xyXG4gICAgICAgICAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGVxdWFsU2lnbkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGVxdWFsU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyQ3VycmVudENhbGNEaXNwbGF5VmFsdWUocmF3VmFsdWUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcblxyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwidGVtcG9yYXJ5XCI7XHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuXHJcbiAgICBpZihyYXdWYWx1ZUlzQ2FsY3VsYXRlZCl7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwicmVzdWx0XCI7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzd2l0Y2hTaWduID0gKCkgPT4ge1xyXG4gICAgbGV0IHJhd1ZhbHVlID0gaW5wdXRab25lLmRhdGFzZXQudmFsdWU7XHJcbiAgICBpZihyYXdWYWx1ZSA8IDApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJhd1ZhbHVlKTtcclxuICAgICAgICByYXdWYWx1ZSA9IHJhd1ZhbHVlLnJlcGxhY2UoL14tLywgXCJcIik7IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihyYXdWYWx1ZSA+IDApe1xyXG4gICAgICAgIHJhd1ZhbHVlID0gXCItXCIgKyByYXdWYWx1ZTtcclxuICAgIH1cclxuICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3VmFsdWUpO1xyXG5cclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5Q29tcGxleE9wZXJhdG9yID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuICAgIGxldCB4ID0gaW5wdXRab25lLmRhdGFzZXQudmFsdWU7XHJcbiAgICBsZXQgY3VycmVudENhbGNEaXNwbGF5VmFsdWUgPSBcIlwiOyBcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG5cclxuICAgIGlmKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PT0gXCIxL3hcIil7XHJcbiAgICAgICAgaWYoeCA9PSAwKXtcclxuICAgICAgICAgICAgaW5wdXRab25lLmlubmVyVGV4dCA9IFwiQ0FOTk9UIERJVklERSBCWSAwXCI7XHJcbiAgICAgICAgICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgICAgIGVyYXNlUHJldmlvdXNDYWxjdWxhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCIxL1wiICsgeDtcclxuICAgICAgICByZXN1bHQgPSAxIC8geDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dFZhbHVlID09PSBcInjCslwiKXtcclxuICAgICAgICBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSA9IHggKyBcIsKyXCI7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5wb3coeCwgMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PT0gXCLiiJp4XCIpe1xyXG4gICAgICAgIGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlID0gXCLiiJpcIiArIHg7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5zcXJ0KHgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjdXJyZW50VXNlcklucHV0VmFsdWUgPT09IFwiJVwiKXtcclxuICAgICAgICBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSA9IHggKyBcIiVcIjtcclxuICAgICAgICBsZXQgcHJldmlvdXNWYWx1ZSA9IGlubmVySXNFbXB0eShwcmV2aW91c051bWJlckVsZW1lbnQpID8gMCA6IHByZXZpb3VzTnVtYmVyRWxlbWVudC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgICAgIHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgKiB4IC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlubmVySXNFbXB0eShwcmV2aW91c051bWJlckVsZW1lbnQpICYmIGlubmVySXNFbXB0eShsYXRlc3ROdW1iZXJFbGVtZW50KSl7XHJcbiAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByZXN1bHQ7XHJcbiAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighaW5uZXJJc0VtcHR5KHByZXZpb3VzTnVtYmVyRWxlbWVudCkpIHsgXHJcbiAgICAgICAgaWYoIWlubmVySXNFbXB0eShvcGVyYXRvclNpZ25FbGVtZW50KSl7XHJcbiAgICAgICAgICAgIGxhdGVzdE51bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgbGF0ZXN0TnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpbm5lcklzRW1wdHkob3BlcmF0b3JTaWduRWxlbWVudCkpe1xyXG4gICAgICAgICAgICBwcmV2aW91c051bWJlckVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRDYWxjRGlzcGxheVZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyRGlzcGxheVZhbHVlKHJlc3VsdC50b1N0cmluZygpKTtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmVzdWx0O1xyXG4gICAgaW5wdXRab25lLmlubmVyVGV4dCA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcInRlbXBvcmFyeVwiO1xyXG5cclxufVxyXG5cclxuY29uc3QgdHJlYXRVc2VySW5wdXQgPSAoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpID0+IHtcclxuICAgIGlmKGlzRGlnaXQoY3VycmVudFVzZXJJbnB1dFZhbHVlKSAmJiBjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwibnVtZXJpY1wiKSB7XHJcbiAgICAgICAgZGlzcGxheU51bWJlckluSW5wdXRab25lKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihpc0Zsb2F0UG9pbnQoY3VycmVudFVzZXJJbnB1dFZhbHVlKSAmJiBjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwiZmxvYXRfcG9pbnRcIikge1xyXG4gICAgICAgIGRpc3BsYXlEZWNpbWFsTnVtYmVyKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihpc09wZXJhdG9yKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSkgJiYgY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcIm9wZXJhdG9yXCIpe1xyXG4gICAgICAgIGRpc3BsYXlPcGVyYXRvcihjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoaXNFcXVhbFNpZ24oY3VycmVudFVzZXJJbnB1dFZhbHVlKSAmJiBjdXJyZW50VXNlcklucHV0Q2xhc3MgPT09IFwiZXF1YWxcIil7XHJcbiAgICAgICAgZGlzcGxheUVxdWFsU2lnbihjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcInN3aXRjaF9zaWduXCIpe1xyXG4gICAgICAgIHN3aXRjaFNpZ24oKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJkZWxldGVfYnV0dG9uXCIpe1xyXG4gICAgICAgIHN3aXRjaCAoY3VycmVudFVzZXJJbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGVhcl9lcnJvclwiOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGVhcl9hbGxcIjpcclxuICAgICAgICAgICAgICAgIGNsZWFyQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyX2xhc3RcIjpcclxuICAgICAgICAgICAgICAgIGNsZWFyTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIGlmKGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJjb21wbGV4X29wZXJhdG9yXCIpe1xyXG4gICAgICAgIGRpc3BsYXlDb21wbGV4T3BlcmF0b3IoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9NYWluIHNjcmlwdFxyXG50cnkge1xyXG4gICAgLy9MaXN0ZW4gZm9yIG1vdXNlIGlucHV0IHZhbHVlXHJcbiAgICBjYWxjdWxhdG9yS2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xyXG4gICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNsYXNzXCIpO1xyXG4gICAgICAgIHRyZWF0VXNlcklucHV0KGN1cnJlbnRVc2VySW5wdXRWYWx1ZSwgY3VycmVudFVzZXJJbnB1dENsYXNzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vTGlzdGVuIGZvciB1c2VyIGtleWJvYXJkIGlucHV0IHZhbHVlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYoaXNEaWdpdChldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcIm51bWVyaWNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc09wZXJhdG9yKGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwib3BlcmF0b3JcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0Zsb2F0UG9pbnQoZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IFwiLlwiO1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcImZsb2F0X3BvaW50XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNFcXVhbFNpZ24oZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IFwiPVwiO1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcImVxdWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNDb21wbGV4T3BlcmF0b3IoZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IGV2ZW50LmtleTtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJjb21wbGV4X29wZXJhdG9yXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNEZWxldGVCdXR0b24oZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCJjbGVhcl9sYXN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IFwiY2xlYXJfZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCJjbGVhcl9hbGxcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZGVsZXRlX2J1dHRvblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vdCBhIHdvcmthYmxlIGtleTogJHtldmVudC5rZXl9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJlYXRVc2VySW5wdXQoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbn0gXHJcblxyXG5jYXRjaCAoZXJyb3IpIHtcclxuICAgIGlucHV0Wm9uZS50ZXh0Q29udGVudCA9IFwiRVJST1JcIjtcclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgPSBcImVycm9yXCI7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRpZ2l0c1JlZyIsIlJlZ0V4cCIsImlzRGlnaXQiLCJ2YWx1ZSIsInRlc3QiLCJvcGVyYXRvcnNSZWciLCJpc09wZXJhdG9yIiwiZmxvYXRpbmdQb2ludFJlZyIsImlzRmxvYXRQb2ludCIsImRlY2ltYWxOdW1iZXJSZWciLCJpc0RlY2ltYWxOdW1iZXIiLCJlcXVhbFNpZ25SZWciLCJpc0VxdWFsU2lnbiIsImNvbXBsZXhPcGVyYXRvclJlZyIsImlzQ29tcGxleE9wZXJhdG9yIiwiZGVsZXRlQnV0dG9uUmVnIiwiaXNEZWxldGVCdXR0b24iLCJtb2R1bGUiLCJleHBvcnRzIiwic3R5bGUiLCJpbnB1dFpvbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FsY3VsYXRvcktleWJvYXJkIiwicHJldmlvdXNOdW1iZXJFbGVtZW50Iiwib3BlcmF0b3JTaWduRWxlbWVudCIsImxhdGVzdE51bWJlckVsZW1lbnQiLCJlcXVhbFNpZ25FbGVtZW50IiwibWF4RGlnaXRTaXplIiwic3VtIiwiYSIsImIiLCJzdWJ0cmFjdGlvbiIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJjdXJyZW50VXNlcklucHV0VmFsdWUiLCJjdXJyZW50VXNlcklucHV0Q2xhc3MiLCJyZW5kZXJEaXNwbGF5VmFsdWUiLCJyYXdWYWx1ZSIsInJlcGxhY2UiLCJyZW5kZXJDdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSIsImlubmVySXNFbXB0eSIsImVsZW1lbnQiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJ2YWx1ZUlzRW1wdHkiLCJkYXRhc2V0IiwiZXJhc2VQcmV2aW91c0NhbGN1bGF0aW9uIiwiY2xlYXJJbnB1dFpvbmUiLCJ0eXBlIiwiY2xlYXJFcnJvciIsImNsZWFyQWxsIiwiY2xlYXJMYXN0IiwidmFsdWVUb0NsZWFyIiwiZGlzcGxheVZhbHVlIiwiZGlzcGxheU51bWJlckluSW5wdXRab25lIiwiZGlzcGxheURlY2ltYWxOdW1iZXIiLCJjYWxjdWxhdGUiLCJmaXJzdE9wZXJhbmQiLCJwYXJzZUZsb2F0Iiwib3BlcmF0b3JTaWduIiwic2Vjb25kT3BlcmFuZCIsInRleHRDb250ZW50IiwiZGlzcGxheUVxdWFsU2lnbiIsInRvU3RyaW5nIiwicmF3UmVzdWx0IiwiZGlzcGxheVJlc3VsdCIsImRpc3BsYXlPcGVyYXRvciIsInJhd1ZhbHVlSXNDYWxjdWxhdGVkIiwic3dpdGNoU2lnbiIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5Q29tcGxleE9wZXJhdG9yIiwieCIsImN1cnJlbnRDYWxjRGlzcGxheVZhbHVlIiwicmVzdWx0IiwiTWF0aCIsInBvdyIsInNxcnQiLCJwcmV2aW91c1ZhbHVlIiwidHJlYXRVc2VySW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJrZXkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=