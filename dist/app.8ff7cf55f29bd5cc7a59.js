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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.h-24 {\n  height: 6rem;\n}\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-end {\n  align-items: flex-end;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(187, 247, 208, var(--tw-bg-opacity));\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-calculator {\n  font-family: \"Orbitron\", \"Courier New\";\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n@font-face {\n  font-family: \"Orbitron\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n.peer:hover ~ .peer-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@media (min-width: 640px) {\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:font-bold {\n    font-weight: 700;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:font-bold {\n    font-weight: 700;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.scss","webpack://./src/%3Cinput%20css%20ys-oaG%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n@font-face {\r\n    font-family: \"Orbitron\";\r\n    src: url(\"assets/fonts/Orbitron-Regular.woff\");\r\n}","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
/** */


var renderCurrentCalcDisplayValue = function renderCurrentCalcDisplayValue(rawValue) {
  return rawValue.replace('.', ',').replace(/,$/, '');
};

var displayNumberInInputZone = function displayNumberInInputZone(currentUserInputValue) {
  var rawValue = inputZone.dataset.value + currentUserInputValue;

  if (inputZone.dataset.type != "current" || inputZone.dataset.value == "0" && !(0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue)) {
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
  }

  displayNumberInInputZone(currentUserInputValue);
};

var calculate = function calculate() {
  var firstOperand = parseFloat(previousNumberElement.dataset.value);
  var operatorSign = operatorSignElement.dataset.value;
  var secondOperand = parseFloat(inputZone.dataset.value);

  switch (operatorSign) {
    case "+":
      return sum(firstOperand, secondOperand);

    case "-":
      return subtraction(firstOperand, secondOperand);

    case "*":
      return multiplication(firstOperand, secondOperand);

    case "/":
      return division(firstOperand, secondOperand);

    default:
      break;
  }
};

var displayOperator = function displayOperator(currentUserInputValue) {
  var rawValue = inputZone.dataset.value;

  if (previousNumberElement.innerText.length != 0 && inputZone.dataset.type != "temporary") {
    rawValue = calculate();
  }

  var displayValue = renderCurrentCalcDisplayValue(rawValue.toString());
  previousNumberElement.dataset.value = rawValue;
  previousNumberElement.innerText = displayValue;
  inputZone.dataset.type = "temporary";
  operatorSignElement.dataset.value = currentUserInputValue;
  operatorSignElement.innerText = currentUserInputValue;
};

var treatUserInput = function treatUserInput(currentUserInputValue, currentUserInputClass) {
  /* console.log(currentUserInputValue + currentUserInputClass); */
  if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isDigit)(currentUserInputValue) && currentUserInputClass === "numeric" && inputZone.dataset.value.length < 16) {
    displayNumberInInputZone(currentUserInputValue);
  }

  if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isFloatPoint)(currentUserInputValue) && currentUserInputClass === "float_point" && inputZone.dataset.value.length < 16) {
    displayDecimalNumber(currentUserInputValue);
  }

  if ((0,_functions_regex_js__WEBPACK_IMPORTED_MODULE_1__.isOperator)(currentUserInputValue) && currentUserInputClass === "operator") {
    displayOperator(currentUserInputValue);
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
      currentUserInputClass = "equal_sign";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUss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QUFHLFdBQXhCO0FBQ0E7O0FBRUo7QUFDSTtBQWRSOztBQWdCQUMsTUFBQUEscUJBQXFCLEdBQUcsZUFBeEI7QUFDSCxLQWxCSSxNQW1CQTtBQUNEeUIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLCtCQUFtQ0wsS0FBSyxDQUFDRyxHQUF6QztBQUNIOztBQUNETCxJQUFBQSxjQUFjLENBQUNwQixxQkFBRCxFQUF3QkMscUJBQXhCLENBQWQ7QUFDSCxHQTVDRDtBQStDSCxDQXhERCxDQTBEQSxPQUFPMkIsS0FBUCxFQUFjO0FBQ1YzQyxFQUFBQSxTQUFTLENBQUM0QyxXQUFWLEdBQXdCLE9BQXhCO0FBQ0E1QyxFQUFBQSxTQUFTLENBQUNzQixPQUFWLENBQWtCQyxJQUFsQixHQUF5QixPQUF6QjtBQUNBa0IsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL3NyYy9mdW5jdGlvbnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvbWFpbi5zY3NzPzkwZWEiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvcl9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yX2pzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NhbGN1bGF0b3JfanMvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUmVnZXggdGVzdHNcclxuY29uc3QgZGlnaXRzUmVnID0gbmV3IFJlZ0V4cCgvXlswLTldJC8pO1xyXG5jb25zdCBpc0RpZ2l0ID0gdmFsdWUgPT4gZGlnaXRzUmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3Qgb3BlcmF0b3JzUmVnID0gbmV3IFJlZ0V4cCgvXlstLyorXSQvKTtcclxuY29uc3QgaXNPcGVyYXRvciA9IHZhbHVlID0+IG9wZXJhdG9yc1JlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGZsb2F0aW5nUG9pbnRSZWcgPSBuZXcgUmVnRXhwKC9eWy4sXSQvKTtcclxuY29uc3QgaXNGbG9hdFBvaW50ID0gdmFsdWUgPT4gZmxvYXRpbmdQb2ludFJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWcgPSBuZXcgUmVnRXhwKC9eXFxkKlssLl1cXGQqJC8pO1xyXG5jb25zdCBpc0RlY2ltYWxOdW1iZXIgPSB2YWx1ZSA9PiBkZWNpbWFsTnVtYmVyUmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3QgZXF1YWxTaWduUmVnID0gbmV3IFJlZ0V4cCgvXj18RW50ZXIkLyk7XHJcbmNvbnN0IGlzRXF1YWxTaWduID0gdmFsdWUgPT4gZXF1YWxTaWduUmVnLnRlc3QodmFsdWUpO1xyXG5cclxuY29uc3QgY29tcGxleE9wZXJhdG9yUmVnID0gbmV3IFJlZ0V4cCgvXlslwrJdJC8pO1xyXG5jb25zdCBpc0NvbXBsZXhPcGVyYXRvciA9IHZhbHVlID0+IGNvbXBsZXhPcGVyYXRvclJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUJ1dHRvblJlZyA9IG5ldyBSZWdFeHAoL15CYWNrc3BhY2V8RGVsZXRlfEVzY2FwZXxjbGVhcl8oZXJyb3J8YWxsfGxhc3QpJC8pO1xyXG5jb25zdCBpc0RlbGV0ZUJ1dHRvbiA9IHZhbHVlID0+IGRlbGV0ZUJ1dHRvblJlZy50ZXN0KHZhbHVlKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgaXNEZWxldGVCdXR0b24sXHJcbiAgICBpc0NvbXBsZXhPcGVyYXRvcixcclxuICAgIGlzRXF1YWxTaWduLFxyXG4gICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgaXNGbG9hdFBvaW50LFxyXG4gICAgaXNPcGVyYXRvcixcclxuICAgIGlzRGlnaXQsXHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ZvbnRzL09yYml0cm9uLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4wLjIzIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5teC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubXktMyB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLm10LTEge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmgtMjQge1xcbiAgaGVpZ2h0OiA2cmVtO1xcbn1cXG4udy1maXQge1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLm1heC13LXhzIHtcXG4gIG1heC13aWR0aDogMjByZW07XFxufVxcbi5ncmlkLWNvbHMtNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5nYXAtMSB7XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbi53aGl0ZXNwYWNlLW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uYmctZ3JheS00MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktNjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmVlbi0yMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDI0NywgMjA4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5wLTMge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuLnAtMSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvbnQtY2FsY3VsYXRvciB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIjtcXG59XFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcbi5ob3ZlclxcXFw6Y3Vyc29yLXBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaG92ZXJcXFxcOmJnLWdyYXktMzAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucGVlcjpob3ZlciB+IC5wZWVyLWhvdmVyXFxcXDpyb3RhdGUtMTgwIHtcXG4gIC0tdHctcm90YXRlOiAxODBkZWc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuc21cXFxcOnRleHQtbGcge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9udC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAubWRcXFxcOnRleHQtbGcge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Zm9udC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjLyUzQ2lucHV0JTIwY3NzJTIweXMtb2FHJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBUyxDQUFUOzs7Q0FBUzs7QUFBVDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLHFCQUF3RCxFQUFFLE1BQU07QURYekQ7O0FBQVQ7O0VDZ0JFLGdCQUFnQjtBRGhCVDs7QUFBVDs7Ozs7Q0FBUzs7QUFBVDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU07RUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4QixjQUFXO0tBQVgsV0FBVyxFQUFFLE1BQU07RUFDbkIsd1JBQXNQLEVBQUUsTUFBTTtBRC9CdlA7O0FBQVQ7OztDQUFTOztBQUFUO0VDd0NFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLG9CQUFvQixFQUFFLE1BQU07QUR6Q3JCOztBQUFUOzs7O0NBQVM7O0FBQVQ7RUNtREUsU0FBUyxFQUFFLE1BQU07RUFDakIsY0FBYyxFQUFFLE1BQU07RUFDdEIscUJBQXFCLEVBQUUsTUFBTTtBRHJEdEI7O0FBQVQ7O0NBQVM7O0FBQVQ7RUM2REUs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RUVGQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQSxvQkFBQTtFQUFBO0FGRVM7QUFBVDtFRUZBLG9CQUFBO0VBQUE7QUZFUztBQUFUO0VFRkEsb0JBQUE7RUFBQTtBRkVTO0FBQVQ7RUVGQTtBRkVTO0FBQVQ7RUVGQSxxQkFBQTtFQUFBO0FGRVM7QUFFVDtFQUNJLHVCQUF1QjtFQUN2Qiw0Q0FBOEMsRUFBQTtBQU5sRDtFRUFBO0NBQUE7QUZBQTtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsb0JBQUE7RUFBQTtDQUFBO0FGQUE7O0VFQUE7SUFBQSxvQkFBQTtJQUFBO0dBQUE7O0VBQUE7SUFBQTtHQUFBO0NBQUE7QUZBQTs7RUVBQTtJQUFBLG9CQUFBO0lBQUE7R0FBQTs7RUFBQTtJQUFBO0dBQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcImFzc2V0cy9mb250cy9PcmJpdHJvbi1SZWd1bGFyLndvZmZcXFwiKTtcXHJcXG59XCIsXCIvKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IHRoZW1lKCdib3JkZXJDb2xvci5ERUZBVUxUJywgY3VycmVudENvbG9yKTsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjOWNhM2FmKTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvL1N0eWxlIGZvciBkZXYgZW52aXJvbm1lbnQgb25seVxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLnNjc3MnO1xyXG5cclxuLy9JbXBvcnRzXHJcbmltcG9ydCB7ICAgIFxyXG4gICAgaXNEZWxldGVCdXR0b24sXHJcbiAgICBpc0NvbXBsZXhPcGVyYXRvcixcclxuICAgIGlzRXF1YWxTaWduLFxyXG4gICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgaXNGbG9hdFBvaW50LFxyXG4gICAgaXNPcGVyYXRvcixcclxuICAgIGlzRGlnaXQsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMvcmVnZXguanMnO1xyXG5cclxuLy9WYXJpYWJsZXNcclxubGV0IGlucHV0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRfem9uZVwiKTtcclxubGV0IGNhbGN1bGF0b3JLZXlib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRvcl9rZXlib2FyZFwiKTtcclxuXHJcbmxldCBwcmV2aW91c051bWJlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX251bWJlclwiKTtcclxubGV0IG9wZXJhdG9yU2lnbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZXJhdG9yX3NpZ25cIik7XHJcbmxldCBsYXRlc3ROdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXRlc3RfbnVtYmVyXCIpO1xyXG5sZXQgZXF1YWxTaWduRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXF1YWxfc2lnblwiKTtcclxuXHJcbmxldCBtYXhEaWdpdFNpemUgPSAxNjtcclxuXHJcbi8vbWF0aCBmdW5jdGlvbnNcclxuY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xyXG5jb25zdCBzdWJ0cmFjdGlvbiA9IChhLCBiKSA9PiBhIC0gYjtcclxuY29uc3QgbXVsdGlwbGljYXRpb24gPSAoYSwgYikgPT4gYSAqIGI7XHJcbmNvbnN0IGRpdmlzaW9uID0gKGEsIGIpID0+IGEgLyBiO1xyXG5cclxuLy9GdW5jdGlvbnNcclxubGV0IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9ICcnO1xyXG5sZXQgY3VycmVudFVzZXJJbnB1dENsYXNzID0gJyc7XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByYXdWYWx1ZSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5jb25zdCByZW5kZXJEaXNwbGF5VmFsdWUgPSByYXdWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgnLicsICcsJyk7XHJcbn1cclxuXHJcbi8qKiAqL1xyXG5jb25zdCByZW5kZXJDdXJyZW50Q2FsY0Rpc3BsYXlWYWx1ZSA9IHJhd1ZhbHVlID0+IHtcclxuICAgIHJldHVybiByYXdWYWx1ZS5yZXBsYWNlKCcuJywgJywnKS5yZXBsYWNlKC8sJC8sICcnKTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheU51bWJlckluSW5wdXRab25lID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuXHJcbiAgICBsZXQgcmF3VmFsdWUgPSBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSArIGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxuXHJcbiAgICBpZiAoaW5wdXRab25lLmRhdGFzZXQudHlwZSAhPSBcImN1cnJlbnRcIiB8fCAoaW5wdXRab25lLmRhdGFzZXQudmFsdWUgPT0gXCIwXCIgJiYgIWlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpKSl7XHJcbiAgICAgICAgcmF3VmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICAgICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiY3VycmVudFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXNwbGF5VmFsdWUgPSByZW5kZXJEaXNwbGF5VmFsdWUocmF3VmFsdWUpO1xyXG5cclxuICAgIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICBpbnB1dFpvbmUuaW5uZXJUZXh0ID0gZGlzcGxheVZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5RGVjaW1hbE51bWJlciA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9PiB7XHJcbiAgICBpZihpc0RlY2ltYWxOdW1iZXIoaW5wdXRab25lLmRhdGFzZXQudmFsdWUpKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5TnVtYmVySW5JbnB1dFpvbmUoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxufVxyXG5cclxuY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGZpcnN0T3BlcmFuZCA9IHBhcnNlRmxvYXQocHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUpO1xyXG4gICAgbGV0IG9wZXJhdG9yU2lnbiA9IG9wZXJhdG9yU2lnbkVsZW1lbnQuZGF0YXNldC52YWx1ZTtcclxuICAgIGxldCBzZWNvbmRPcGVyYW5kID0gcGFyc2VGbG9hdChpbnB1dFpvbmUuZGF0YXNldC52YWx1ZSk7XHJcblxyXG4gICAgc3dpdGNoIChvcGVyYXRvclNpZ24pIHtcclxuICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3VtKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCk7XHJcblxyXG4gICAgICAgIGNhc2UgXCItXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdGlvbihmaXJzdE9wZXJhbmQsIHNlY29uZE9wZXJhbmQpO1xyXG5cclxuICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbGljYXRpb24oZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kKTtcclxuXHJcbiAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCk7XHJcbiAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheU9wZXJhdG9yID0gY3VycmVudFVzZXJJbnB1dFZhbHVlID0+IHtcclxuICAgIGxldCByYXdWYWx1ZSA9IGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgXHJcbiAgICBpZihwcmV2aW91c051bWJlckVsZW1lbnQuaW5uZXJUZXh0Lmxlbmd0aCAhPSAwICYmIGlucHV0Wm9uZS5kYXRhc2V0LnR5cGUgIT0gXCJ0ZW1wb3JhcnlcIil7XHJcbiAgICAgICAgcmF3VmFsdWUgPSBjYWxjdWxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gcmVuZGVyQ3VycmVudENhbGNEaXNwbGF5VmFsdWUocmF3VmFsdWUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgcHJldmlvdXNOdW1iZXJFbGVtZW50LmRhdGFzZXQudmFsdWUgPSByYXdWYWx1ZTtcclxuICAgIHByZXZpb3VzTnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBkaXNwbGF5VmFsdWU7XHJcblxyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwidGVtcG9yYXJ5XCI7XHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmRhdGFzZXQudmFsdWUgPSBjdXJyZW50VXNlcklucHV0VmFsdWU7XHJcbiAgICBvcGVyYXRvclNpZ25FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRVc2VySW5wdXRWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgdHJlYXRVc2VySW5wdXQgPSAoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpID0+IHtcclxuICAgIC8qIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSArIGN1cnJlbnRVc2VySW5wdXRDbGFzcyk7ICovXHJcbiAgICBpZihpc0RpZ2l0KGN1cnJlbnRVc2VySW5wdXRWYWx1ZSkgJiYgY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcIm51bWVyaWNcIiAmJiBpbnB1dFpvbmUuZGF0YXNldC52YWx1ZS5sZW5ndGggPCAxNikge1xyXG4gICAgICAgIGRpc3BsYXlOdW1iZXJJbklucHV0Wm9uZShjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzRmxvYXRQb2ludChjdXJyZW50VXNlcklucHV0VmFsdWUpICYmIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9PT0gXCJmbG9hdF9wb2ludFwiICYmIGlucHV0Wm9uZS5kYXRhc2V0LnZhbHVlLmxlbmd0aCA8IDE2KSB7XHJcbiAgICAgICAgZGlzcGxheURlY2ltYWxOdW1iZXIoY3VycmVudFVzZXJJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihpc09wZXJhdG9yKGN1cnJlbnRVc2VySW5wdXRWYWx1ZSkgJiYgY3VycmVudFVzZXJJbnB1dENsYXNzID09PSBcIm9wZXJhdG9yXCIpe1xyXG4gICAgICAgIGRpc3BsYXlPcGVyYXRvcihjdXJyZW50VXNlcklucHV0VmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL01haW4gc2NyaXB0XHJcbnRyeSB7XHJcbiAgICAvL0xpc3RlbiBmb3IgbW91c2UgaW5wdXQgdmFsdWVcclxuICAgIGNhbGN1bGF0b3JLZXlib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XHJcbiAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY2xhc3NcIik7XHJcbiAgICAgICAgdHJlYXRVc2VySW5wdXQoY3VycmVudFVzZXJJbnB1dFZhbHVlLCBjdXJyZW50VXNlcklucHV0Q2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9MaXN0ZW4gZm9yIHVzZXIga2V5Ym9hcmQgaW5wdXQgdmFsdWVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZihpc0RpZ2l0KGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwibnVtZXJpY1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzT3BlcmF0b3IoZXZlbnQua2V5KSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IGV2ZW50LmtleTtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dENsYXNzID0gXCJvcGVyYXRvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzRmxvYXRQb2ludChldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCIuXCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZmxvYXRfcG9pbnRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc0VxdWFsU2lnbihldmVudC5rZXkpKXtcclxuICAgICAgICAgICAgY3VycmVudFVzZXJJbnB1dFZhbHVlID0gXCI9XCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiZXF1YWxfc2lnblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzQ29tcGxleE9wZXJhdG9yKGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRDbGFzcyA9IFwiY29tcGxleF9vcGVyYXRvclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzRGVsZXRlQnV0dG9uKGV2ZW50LmtleSkpe1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IFwiY2xlYXJfbGFzdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklucHV0VmFsdWUgPSBcImNsZWFyX2Vycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySW5wdXRWYWx1ZSA9IFwiY2xlYXJfYWxsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcklucHV0Q2xhc3MgPSBcImRlbGV0ZV9idXR0b25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb3QgYSB3b3JrYWJsZSBrZXk6ICR7ZXZlbnQua2V5fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmVhdFVzZXJJbnB1dChjdXJyZW50VXNlcklucHV0VmFsdWUsIGN1cnJlbnRVc2VySW5wdXRDbGFzcyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxufSBcclxuXHJcbmNhdGNoIChlcnJvcikge1xyXG4gICAgaW5wdXRab25lLnRleHRDb250ZW50ID0gXCJFUlJPUlwiO1xyXG4gICAgaW5wdXRab25lLmRhdGFzZXQudHlwZSA9IFwiZXJyb3JcIjtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGlnaXRzUmVnIiwiUmVnRXhwIiwiaXNEaWdpdCIsInZhbHVlIiwidGVzdCIsIm9wZXJhdG9yc1JlZyIsImlzT3BlcmF0b3IiLCJmbG9hdGluZ1BvaW50UmVnIiwiaXNGbG9hdFBvaW50IiwiZGVjaW1hbE51bWJlclJlZyIsImlzRGVjaW1hbE51bWJlciIsImVxdWFsU2lnblJlZyIsImlzRXF1YWxTaWduIiwiY29tcGxleE9wZXJhdG9yUmVnIiwiaXNDb21wbGV4T3BlcmF0b3IiLCJkZWxldGVCdXR0b25SZWciLCJpc0RlbGV0ZUJ1dHRvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZSIsImlucHV0Wm9uZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYWxjdWxhdG9yS2V5Ym9hcmQiLCJwcmV2aW91c051bWJlckVsZW1lbnQiLCJvcGVyYXRvclNpZ25FbGVtZW50IiwibGF0ZXN0TnVtYmVyRWxlbWVudCIsImVxdWFsU2lnbkVsZW1lbnQiLCJtYXhEaWdpdFNpemUiLCJzdW0iLCJhIiwiYiIsInN1YnRyYWN0aW9uIiwibXVsdGlwbGljYXRpb24iLCJkaXZpc2lvbiIsImN1cnJlbnRVc2VySW5wdXRWYWx1ZSIsImN1cnJlbnRVc2VySW5wdXRDbGFzcyIsInJlbmRlckRpc3BsYXlWYWx1ZSIsInJhd1ZhbHVlIiwicmVwbGFjZSIsInJlbmRlckN1cnJlbnRDYWxjRGlzcGxheVZhbHVlIiwiZGlzcGxheU51bWJlckluSW5wdXRab25lIiwiZGF0YXNldCIsInR5cGUiLCJkaXNwbGF5VmFsdWUiLCJpbm5lclRleHQiLCJkaXNwbGF5RGVjaW1hbE51bWJlciIsImNhbGN1bGF0ZSIsImZpcnN0T3BlcmFuZCIsInBhcnNlRmxvYXQiLCJvcGVyYXRvclNpZ24iLCJzZWNvbmRPcGVyYW5kIiwiZGlzcGxheU9wZXJhdG9yIiwibGVuZ3RoIiwidG9TdHJpbmciLCJ0cmVhdFVzZXJJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRleHRDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==