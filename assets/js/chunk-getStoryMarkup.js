"use strict";
(globalThis["webpackChunkweb_story_creation_tool"] = globalThis["webpackChunkweb_story_creation_tool"] || []).push([["chunk-getStoryMarkup"],{

/***/ "./packages/fonts/src/constants.js":
/*!*****************************************!*\
  !*** ./packages/fonts/src/constants.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURATED_FONT_NAMES": () => (/* binding */ CURATED_FONT_NAMES)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Curated Fonts list source:
// https://github.com/googleforcreators/web-stories-wp/issues/1989#issuecomment-662253222
const CURATED_FONT_NAMES = ['Karla', 'Lato', 'Lora', 'Merriweather', 'Montserrat', 'Nunito', 'Oswald', 'Playfair Display', 'Poppins', 'Raleway', 'Roboto', 'Roboto Condensed', 'Source Serif Pro', 'Titillium Web', 'Work Sans', 'Alegreya', 'Arimo', 'EB Garamond', 'IBM Plex Mono', 'IBM Plex Serif', 'Inconsolata', 'Mulish', 'Noto Sans', 'Noto Serif', 'Open Sans', 'PT Mono', 'PT Sans', 'PT Serif', 'Roboto Mono', 'Source Sans Pro', 'Ubuntu', 'Anton', 'BioRhyme', 'Bungee', 'Bungee Shade', 'Cookie', 'Dancing Script', 'Monoton', 'Nothing You Could Do', 'Parisienne', 'Rock Salt', 'UnifrakturMaguntia'];

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/fonts/src/index.js":
/*!*************************************!*\
  !*** ./packages/fonts/src/index.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURATED_FONT_NAMES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.CURATED_FONT_NAMES),
/* harmony export */   "getFontCSS": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getFontCSS),
/* harmony export */   "getGoogleFontURL": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getGoogleFontURL)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/fonts/src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/fonts/src/utils/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/fonts/src/utils/getFontCSS.js":
/*!************************************************!*\
  !*** ./packages/fonts/src/utils/getFontCSS.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Get the CSS font format for a given font URL.
 *
 * @param {string} src Font URL.
 * @return {string|null} Font format string or null if the font is unsupported.
 */
function getFontFormat(src) {
  const fileExtension = src.split(/[#?]/)[0].split('.').pop().trim();

  switch (fileExtension) {
    case 'woff':
    case 'woff2':
      return fileExtension;

    case 'ttf':
      return 'truetype';

    case 'otf':
      return 'opentype';

    default:
      return null;
  }
}
/**
 * Get the inline stylesheet for a specific font family.
 *
 * @param {string} name Font family.
 * @param {string} src Font URL.
 * @return {string|null} Stylesheet or null if the font has an unsupported format.
 */


function getFontCSS(name, src) {
  const format = getFontFormat(src);

  if (!format) {
    return null;
  }

  return `@font-face {
    font-family: "${name}";
    src: url('${src}') format('${format}');
    font-weight: normal;
    font-display:swap;
  }`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFontCSS);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/fonts/src/utils/getGoogleFontURL.js":
/*!******************************************************!*\
  !*** ./packages/fonts/src/utils/getGoogleFontURL.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Given a list of Google fonts, returns a URL to embed them.
 *
 * Uses the given list of font variants (axis tuples) to assemble the
 * axis tag list and axis tuple list that Google Fonts expects.
 *
 * @see https://developers.google.com/fonts/docs/css2
 * @param {Array<Object<{family: string, variants: Array<number, number>}>>} fonts List of font objects.
 * @param {string} [display] Valid font-display value, e.g. 'swap' or 'auto'. Default 'swap'.
 * @return {string} Google Fonts embed URL.
 */
function getGoogleFontURL(fonts) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'swap';
  const url = new URL('https://fonts.googleapis.com/css2');
  url.searchParams.append('display', display);

  for (const {
    family: familyName,
    variants = []
  } of fonts) {
    // [ [ 1, 400 ], [ 0, 700 ] ] -> [ ital, wght ]
    const axes = variants.reduce((acc, _ref) => {
      let [fontStyle, fontWeight] = _ref;

      // Uses axis names as listed on https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts.
      if (fontStyle === 1 && !acc.includes('ital')) {
        acc.push('ital');
      }

      if (fontWeight && fontWeight !== 400 && !acc.includes('wght')) {
        acc.push('wght');
      }

      return acc;
    }, []).sort(); // Need to be sorted alphabetically.

    let family = familyName;
    const axisTagList = axes.join(','); // [ ital, wght ] -> Roboto:ital,wght

    if (axisTagList) {
      family += ':' + axisTagList;
    }

    const axisTuples = variants.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }

      if (a[0] > b[0]) {
        return 1;
      }

      return a[1] - b[1];
    }).map(_ref2 => {
      let [fontStyle, fontWeight] = _ref2;
      const tuple = [];

      if (axes.includes('ital')) {
        tuple.push(fontStyle);
      }

      if (axes.includes('wght')) {
        tuple.push(fontWeight);
      }

      return tuple;
    }); // [ [ 1, 400 ], [ 0, 700 ] ] -> 1,400;0,700

    const axisTupleList = axisTuples.join(';');
    const onlyRegularVariant = axisTupleList === '400';

    if (axisTupleList && !onlyRegularVariant) {
      family += '@' + axisTupleList;
    }

    url.searchParams.append('family', family);
  }

  return decodeURI(url.toString());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoogleFontURL);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/fonts/src/utils/index.js":
/*!*******************************************!*\
  !*** ./packages/fonts/src/utils/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFontCSS": () => (/* reexport safe */ _getFontCSS__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "getGoogleFontURL": () => (/* reexport safe */ _getGoogleFontURL__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _getFontCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFontCSS */ "./packages/fonts/src/utils/getFontCSS.js");
/* harmony import */ var _getGoogleFontURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getGoogleFontURL */ "./packages/fonts/src/utils/getGoogleFontURL.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/components/withLink/index.js":
/*!**********************************************************!*\
  !*** ./packages/output/src/components/withLink/index.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _googleforcreators_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/url */ "./packages/url/src/index.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/components/withLink/index.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */




function WithLink(_ref) {
  let {
    element,
    children,
    ...rest
  } = _ref;
  const link = element.link || {};
  const {
    url,
    icon,
    desc,
    rel = []
  } = link;

  if (!url) {
    return children;
  }

  rel.push('noreferrer');
  const urlWithProtocol = (0,_googleforcreators_url__WEBPACK_IMPORTED_MODULE_2__.withProtocol)(url);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-target-blank -- False positive
    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", _extends({
      href: urlWithProtocol,
      "data-tooltip-icon": icon || undefined,
      "data-tooltip-text": desc,
      target: "_blank",
      rel: rel.join(' ')
    }, rest, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }), children)
  );
}

_c = WithLink;
WithLink.propTypes = {
  element: _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.StoryPropTypes.element.isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithLink);

var _c;

__webpack_require__.$Refresh$.register(_c, "WithLink");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/constants.js":
/*!******************************************!*\
  !*** ./packages/output/src/constants.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_AUTO_ADVANCE": () => (/* binding */ DEFAULT_AUTO_ADVANCE),
/* harmony export */   "DEFAULT_PAGE_DURATION": () => (/* binding */ DEFAULT_PAGE_DURATION)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_PAGE_DURATION = 7;
const DEFAULT_AUTO_ADVANCE = true;

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/element.js":
/*!****************************************!*\
  !*** ./packages/output/src/element.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @googleforcreators/patterns */ "./packages/patterns/src/generatePatternStyles.js");
/* harmony import */ var _googleforcreators_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @googleforcreators/units */ "./packages/units/src/dimensions.js");
/* harmony import */ var _googleforcreators_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/animation */ "./packages/animation/src/index.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* harmony import */ var _googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googleforcreators/masks */ "./packages/masks/src/index.js");
/* harmony import */ var _components_withLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/withLink */ "./packages/output/src/components/withLink/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/element.js";


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



function OutputElement(_ref) {
  let {
    element
  } = _ref;
  const {
    id,
    opacity,
    type,
    border,
    backgroundColor,
    backgroundTextMode,
    overlay
  } = element;
  const {
    Output,
    isMaskable
  } = (0,_googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.getDefinitionForType)(type); // Box is calculated based on the 100%:100% basis for width and height

  const box = (0,_googleforcreators_units__WEBPACK_IMPORTED_MODULE_6__.getBox)(element, 100, 100);
  const {
    x,
    y,
    width,
    height,
    rotationAngle
  } = box; // We're adding background styles in case of Fill here so that
  // the background and the border would match together.

  const bgStyles = {
    backgroundClip: 'content-box',
    ...(0,_googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_7__["default"])(backgroundColor)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      left: x ? `${x}%` : 0,
      top: y ? `${y}%` : 0,
      width: `${width}%`,
      height: `${height}%`,
      ...((0,_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.shouldDisplayBorder)(element) ? (0,_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.getBorderPositionCSS)({ ...border,
        width: `${width}%`,
        height: `${height}%`,
        posTop: `${y}%`,
        posLeft: `${x}%`
      }) : null),
      transform: rotationAngle ? `rotate(${rotationAngle}deg)` : null,
      opacity: typeof opacity !== 'undefined' ? opacity / 100 : null
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_googleforcreators_animation__WEBPACK_IMPORTED_MODULE_2__.StoryAnimation.AMPWrapper, {
    target: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.OutputWithMask, {
    className: !isMaskable ? undefined : 'mask',
    element: element,
    box: box,
    id: 'el-' + id,
    style: { ...((0,_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.shouldDisplayBorder)(element) ? (0,_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.getBorderStyle)(element) : null),
      pointerEvents: 'initial',
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      ...(0,_googleforcreators_masks__WEBPACK_IMPORTED_MODULE_4__.getBorderRadius)(element),
      ...(backgroundTextMode === _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.BACKGROUND_TEXT_MODE.FILL ? bgStyles : null)
    },
    skipDefaultMask: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_withLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    element: element,
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Output, {
    element: element,
    box: box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  })), overlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "element-overlay-area",
    style: (0,_googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_7__["default"])(overlay),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }))));
}

_c = OutputElement;
OutputElement.propTypes = {
  element: _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.StoryPropTypes.element.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputElement);

var _c;

__webpack_require__.$Refresh$.register(_c, "OutputElement");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/index.js":
/*!**************************************!*\
  !*** ./packages/output/src/index.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_AUTO_ADVANCE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_AUTO_ADVANCE),
/* harmony export */   "DEFAULT_PAGE_DURATION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PAGE_DURATION),
/* harmony export */   "OutputStory": () => (/* reexport safe */ _story__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "getLongestMediaElement": () => (/* reexport safe */ _utils_getLongestMediaElement__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "getStoryMarkup": () => (/* reexport safe */ _utils_getStoryMarkup__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story */ "./packages/output/src/story.js");
/* harmony import */ var _utils_getStoryMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getStoryMarkup */ "./packages/output/src/utils/getStoryMarkup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/output/src/constants.js");
/* harmony import */ var _utils_getLongestMediaElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getLongestMediaElement */ "./packages/output/src/utils/getLongestMediaElement.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/page.js":
/*!*************************************!*\
  !*** ./packages/output/src/page.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @googleforcreators/patterns */ "./packages/patterns/src/generatePatternStyles.js");
/* harmony import */ var _googleforcreators_units__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @googleforcreators/units */ "./packages/units/src/constants.js");
/* harmony import */ var _googleforcreators_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/animation */ "./packages/animation/src/index.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./packages/output/src/constants.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element */ "./packages/output/src/element.js");
/* harmony import */ var _utils_backgroundAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/backgroundAudio */ "./packages/output/src/utils/backgroundAudio.js");
/* harmony import */ var _utils_getTextElementTagNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getTextElementTagNames */ "./packages/output/src/utils/getTextElementTagNames.js");
/* harmony import */ var _utils_getAutoAdvanceAfter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/getAutoAdvanceAfter */ "./packages/output/src/utils/getAutoAdvanceAfter.js");
/* harmony import */ var _utils_outlink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/outlink */ "./packages/output/src/utils/outlink.js");
/* harmony import */ var _utils_shoppingAttachment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/shoppingAttachment */ "./packages/output/src/utils/shoppingAttachment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/page.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */








const ASPECT_RATIO = `${_googleforcreators_units__WEBPACK_IMPORTED_MODULE_11__.PAGE_WIDTH}:${_googleforcreators_units__WEBPACK_IMPORTED_MODULE_11__.PAGE_HEIGHT}`;

function OutputPage(_ref) {
  let {
    page,
    autoAdvance = _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_AUTO_ADVANCE,
    defaultPageDuration = _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PAGE_DURATION,
    flags
  } = _ref;
  const {
    id,
    animations,
    elements,
    backgroundColor,
    backgroundAudio,
    pageAttachment
  } = page;
  const [backgroundElement, ...otherElements] = elements; // If the background element has base color set, it's media, use that.

  const baseColor = backgroundElement?.resource?.baseColor;
  const backgroundStyles = baseColor ? {
    backgroundColor: baseColor
  } : {
    backgroundColor: 'white',
    ...(0,_googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_12__["default"])(backgroundColor)
  };
  const autoAdvanceAfter = autoAdvance ? (0,_utils_getAutoAdvanceAfter__WEBPACK_IMPORTED_MODULE_8__["default"])({
    animations,
    elements,
    defaultPageDuration,
    backgroundAudio,
    id
  }) : undefined;
  const tagNamesMap = (0,_utils_getTextElementTagNames__WEBPACK_IMPORTED_MODULE_7__["default"])(otherElements.filter(_ref2 => {
    let {
      type
    } = _ref2;
    return 'text' === type;
  }));
  const regularElements = otherElements.map(element => {
    const {
      id: elementId,
      type,
      tagName = 'auto'
    } = element;

    if ('text' === type && 'auto' === tagName) {
      element.tagName = tagNamesMap.get(elementId);
    } // Remove invalid links.
    // TODO: this should come from the pre-publish checklist in the future.


    if (pageAttachment?.url && (0,_googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.isElementBelowLimit)(element)) {
      delete element.link;
    }

    return element;
  });
  const products = elements.filter(_ref3 => {
    let {
      type
    } = _ref3;
    return type === _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.ELEMENT_TYPES.PRODUCT;
  }).map(_ref4 => {
    let {
      product
    } = _ref4;
    return product;
  }).filter(Boolean);
  const videoCaptions = elements.filter(_ref5 => {
    let {
      type,
      tracks
    } = _ref5;
    return type === _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.ELEMENT_TYPES.VIDEO && tracks?.length > 0;
  }).map(_ref6 => {
    let {
      id: videoId
    } = _ref6;
    return `el-${videoId}-captions`;
  });
  const backgroundAudioSrc = backgroundAudio?.resource?.src;
  const hasBackgroundAudioCaptions = backgroundAudio?.tracks?.length > 0;
  const hasNonLoopingBackgroundAudio = false === backgroundAudio?.loop && backgroundAudio?.resource?.length;
  const needsEnhancedBackgroundAudio = hasBackgroundAudioCaptions || hasNonLoopingBackgroundAudio;

  if (backgroundAudioSrc && hasBackgroundAudioCaptions) {
    videoCaptions.push(`el-${id}-captions`);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-page", {
    id: id,
    "auto-advance-after": autoAdvanceAfter,
    "background-audio": backgroundAudioSrc && !needsEnhancedBackgroundAudio ? backgroundAudioSrc : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_googleforcreators_animation__WEBPACK_IMPORTED_MODULE_2__.StoryAnimation.Provider, {
    animations: animations,
    elements: elements,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_googleforcreators_animation__WEBPACK_IMPORTED_MODULE_2__.StoryAnimation.AMPAnimations, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), backgroundElement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-grid-layer", {
    template: "vertical",
    "aspect-ratio": ASPECT_RATIO,
    class: "grid-layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-fullbleed-area",
    style: backgroundStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-safe-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_element__WEBPACK_IMPORTED_MODULE_5__["default"], {
    element: backgroundElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), backgroundElement.overlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-background-overlay-area",
    style: (0,_googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_12__["default"])(backgroundElement.overlay),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-grid-layer", {
    template: "vertical",
    "aspect-ratio": ASPECT_RATIO,
    class: "grid-layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-fullbleed-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "page-safe-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, regularElements.map(element => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_element__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: element.id,
    element: element,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  })))))), backgroundAudioSrc && needsEnhancedBackgroundAudio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_backgroundAudio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundAudio: backgroundAudio,
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), videoCaptions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-grid-layer", {
    template: "vertical",
    "aspect-ratio": ASPECT_RATIO,
    class: "grid-layer align-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "captions-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, videoCaptions.map(captionId => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-captions", {
    key: captionId,
    id: captionId,
    layout: "fixed-height",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  })))), pageAttachment?.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_outlink__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, pageAttachment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 31
    }
  })), products.length > 0 && flags?.shoppingIntegration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_shoppingAttachment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    products: products,
    theme: pageAttachment?.theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }));
}

_c = OutputPage;
OutputPage.propTypes = {
  page: _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_3__.StoryPropTypes.page.isRequired,
  autoAdvance: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  defaultPageDuration: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),
  flags: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "OutputPage");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/story.js":
/*!**************************************!*\
  !*** ./packages/output/src/story.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* harmony import */ var _utils_getUsedAmpExtensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getUsedAmpExtensions */ "./packages/output/src/utils/getUsedAmpExtensions.js");
/* harmony import */ var _utils_ampBoilerplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/ampBoilerplate */ "./packages/output/src/utils/ampBoilerplate.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/styles */ "./packages/output/src/utils/styles.js");
/* harmony import */ var _utils_fontDeclarations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/fontDeclarations */ "./packages/output/src/utils/fontDeclarations.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./packages/output/src/page.js");
/* harmony import */ var _utils_getPreloadResources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/getPreloadResources */ "./packages/output/src/utils/getPreloadResources.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/story.js";


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */








function OutputStory(_ref) {
  let {
    story: {
      featuredMedia,
      link,
      title,
      autoAdvance,
      defaultPageDuration,
      backgroundAudio,
      publisherLogo
    },
    pages,
    metadata: {
      publisher
    },
    flags
  } = _ref;
  const ampExtensions = (0,_utils_getUsedAmpExtensions__WEBPACK_IMPORTED_MODULE_3__["default"])(pages);
  const preloadResources = (0,_utils_getPreloadResources__WEBPACK_IMPORTED_MODULE_8__["default"])(pages);
  const featuredMediaUrl = featuredMedia?.url || '';
  const publisherLogoUrl = publisherLogo?.url || '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("html", {
    amp: "",
    lang: "en",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("head", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=1,initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), ampExtensions.map(_ref2 => {
    let {
      name,
      src
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("script", {
      key: src,
      async: "async",
      src: src,
      "custom-element": name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_fontDeclarations__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pages: pages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), preloadResources.map(_ref3 => {
    let {
      url,
      type
    } = _ref3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("link", {
      key: url,
      href: url,
      rel: "preload",
      as: type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_ampBoilerplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "web-stories-replace-head-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, title), link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("link", {
    rel: "canonical",
    href: link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 18
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "web-stories-replace-head-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story", {
    standalone: "",
    publisher: publisher,
    "publisher-logo-src": publisherLogoUrl,
    title: title,
    "poster-portrait-src": featuredMediaUrl,
    "background-audio": backgroundAudio?.resource?.src ?? undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, pages.map(page => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_page__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: page.id,
    page: page,
    autoAdvance: autoAdvance,
    defaultPageDuration: defaultPageDuration,
    flags: flags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })))));
}

_c = OutputStory;
OutputStory.propTypes = {
  story: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    link: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired),
    autoAdvance: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    defaultPageDuration: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    backgroundAudio: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
      resource: _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_2__.BackgroundAudioPropType
    }),
    publisherLogo: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
      url: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired)
    }),
    featuredMedia: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
      url: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired)
    })
  }).isRequired,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(_googleforcreators_elements__WEBPACK_IMPORTED_MODULE_2__.StoryPropTypes.page).isRequired,
  metadata: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    publisher: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired)
  }).isRequired,
  flags: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputStory);

var _c;

__webpack_require__.$Refresh$.register(_c, "OutputStory");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/ampBoilerplate.js":
/*!*****************************************************!*\
  !*** ./packages/output/src/utils/ampBoilerplate.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/ampBoilerplate.js";


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Renders AMP boilerplate
 *
 * @see https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/
 * @see https://amp.dev/documentation/components/amp-story/#boilerplate
 * @return {Element} AMP boilerplate.
 */
function Boilerplate() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", {
    "amp-boilerplate": "",
    dangerouslySetInnerHTML: {
      __html: 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("noscript", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", {
    "amp-boilerplate": "",
    dangerouslySetInnerHTML: {
      __html: 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })));
}

_c = Boilerplate;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boilerplate);

var _c;

__webpack_require__.$Refresh$.register(_c, "Boilerplate");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/backgroundAudio.js":
/*!******************************************************!*\
  !*** ./packages/output/src/utils/backgroundAudio.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _googleforcreators_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googleforcreators/media */ "./packages/media/src/types.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/backgroundAudio.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */




function BackgroundAudio(_ref) {
  let {
    backgroundAudio,
    id
  } = _ref;
  const {
    resource,
    tracks,
    loop
  } = backgroundAudio || {};
  const {
    mimeType,
    src
  } = resource;
  const videoProps = {
    loop: loop ? 'loop' : undefined,
    id: `page-${id}-background-audio`,
    // Actual <amp-story-captions> output happens in OutputPage.
    'captions-id': tracks?.length > 0 ? `el-${id}-captions` : undefined
  };
  const sourceProps = {
    type: mimeType,
    src
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-grid-layer", {
    template: "fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-video", _extends({
    autoPlay: "autoplay",
    layout: "nodisplay",
    poster: ""
  }, videoProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("source", _extends({}, sourceProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), tracks && tracks.map((_ref2, i) => {
    let {
      srclang,
      label,
      kind,
      track,
      id: key
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("track", {
      srcLang: srclang,
      label: label,
      kind: kind,
      src: track,
      key: key,
      default: i === 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    });
  })));
}

_c = BackgroundAudio;
BackgroundAudio.propTypes = {
  backgroundAudio: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    resource: _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_2__.BackgroundAudioPropType,
    loop: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    tracks: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(_googleforcreators_media__WEBPACK_IMPORTED_MODULE_4__.ResourcePropTypes.trackResource)
  }),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundAudio);

var _c;

__webpack_require__.$Refresh$.register(_c, "BackgroundAudio");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/fontDeclarations.js":
/*!*******************************************************!*\
  !*** ./packages/output/src/utils/fontDeclarations.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _googleforcreators_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/fonts */ "./packages/fonts/src/index.js");
/* harmony import */ var _googleforcreators_rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googleforcreators/rich-text */ "./packages/rich-text/src/index.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/fontDeclarations.js";


/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */





const hasTuple = (tuples, tuple) => tuples.some(val => val[0] === tuple[0] && val[1] === tuple[1]);

const tupleDiff = (a, b) => {
  return Math.abs(a[0] + a[1] - b[0] - b[1]);
};

const getNearestTuple = (tuples, tuple) => {
  return tuples.reduce((acc, curr) => {
    const currDiff = tupleDiff(curr, tuple);
    const accDiff = tupleDiff(acc, tuple);
    return currDiff < accDiff ? curr : acc;
  });
};

function FontDeclarations(_ref) {
  let {
    pages
  } = _ref;
  const map = new Map();

  for (const {
    elements
  } of pages) {
    const textElements = elements.filter(_ref2 => {
      let {
        type
      } = _ref2;
      return type === 'text';
    }); // Prepare font objects for later use.

    for (const {
      font,
      content
    } of textElements) {
      const {
        service,
        family,
        variants = [],
        url
      } = font;

      if (!service || service === 'system') {
        continue;
      }

      const serviceMap = map.get(service) || new Map();
      map.set(service, serviceMap);
      const fontObj = serviceMap.get(family) || {
        family,
        variants: [],
        url
      };
      const contentVariants = (0,_googleforcreators_rich_text__WEBPACK_IMPORTED_MODULE_3__.getFontVariants)(content);

      if (variants.length > 0) {
        // A variant ("axis tuple" in Google Fonts terms) is a combination
        // of font style and weight for a given font.
        // The first item is a flag for italic.
        // The second item is the numeric font weight.
        // Example: [1, 700] for italic + bold
        for (const variant of contentVariants) {
          // Use closest variant as fallback and let browser do the math if needed.
          // Examples:
          // - If only [ [ 0, 200 ], [ 0, 400 ] ] exist, and
          //   [ 1, 200] was requested, fall back to [ 0, 200 ].
          // - If only [ [ 0, 400 ], [ 0, 800 ] ] exist, and
          //   [ 1, 800] was requested, fall back to [ 0, 800 ].
          // - If only [ [ 1, 400 ] ] exist, and
          //   [ 0, 400] was requested, fall back to [ 1, 400 ].
          const newVariant = getNearestTuple(variants, variant);
          const fontObjHasVariant = hasTuple(fontObj.variants, newVariant);
          const isValidVariant = hasTuple(variants, newVariant); // Keeps list unique.

          if (!fontObjHasVariant && isValidVariant) {
            fontObj.variants.push(newVariant);
          }
        }
      }

      serviceMap.set(family, fontObj);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, Array.from(map.keys()).map(service => {
    const serviceMap = map.get(service);

    switch (service) {
      case 'fonts.google.com':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("link", {
          key: service,
          href: (0,_googleforcreators_fonts__WEBPACK_IMPORTED_MODULE_2__.getGoogleFontURL)(Array.from(serviceMap.values())),
          rel: "stylesheet",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }
        });

      case 'custom':
        return Array.from(serviceMap.values()).map(_ref3 => {
          let {
            family,
            url
          } = _ref3;
          const inlineStyle = (0,_googleforcreators_fonts__WEBPACK_IMPORTED_MODULE_2__.getFontCSS)(family, url);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", {
            key: family,
            dangerouslySetInnerHTML: {
              __html: inlineStyle
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }
          });
        });

      default:
        return null;
    }
  }));
}

_c = FontDeclarations;
FontDeclarations.propTypes = {
  pages: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(_googleforcreators_elements__WEBPACK_IMPORTED_MODULE_4__.StoryPropTypes.page).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontDeclarations);

var _c;

__webpack_require__.$Refresh$.register(_c, "FontDeclarations");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getAutoAdvanceAfter.js":
/*!**********************************************************!*\
  !*** ./packages/output/src/utils/getAutoAdvanceAfter.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _googleforcreators_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googleforcreators/animation */ "./packages/animation/src/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./packages/output/src/constants.js");
/* harmony import */ var _getLongestMediaElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLongestMediaElement */ "./packages/output/src/utils/getLongestMediaElement.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function getAutoAdvanceAfter(_ref) {
  let {
    animations,
    defaultPageDuration = _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PAGE_DURATION,
    elements,
    backgroundAudio,
    id
  } = _ref;
  const {
    resource,
    loop
  } = backgroundAudio || {};
  const animationDuration = (0,_googleforcreators_animation__WEBPACK_IMPORTED_MODULE_1__.getTotalDuration)({
    animations
  }) / 1000;
  const backgroundAudioDuration = !loop && resource?.length ? resource.length : 0; // If we have media, take the media time for advancement time and ignore the default,
  // but still consider animation time as the minimum, too.

  const longestMediaElement = (0,_getLongestMediaElement__WEBPACK_IMPORTED_MODULE_3__["default"])(elements, Math.max(animationDuration || 1, backgroundAudioDuration));

  if (longestMediaElement?.id) {
    return `el-${longestMediaElement?.id}-media`;
  } // If the page doesn't have media, take either the animations time or the configured default duration time.


  const nonMediaPageDuration = Math.max(animationDuration || 0, backgroundAudioDuration, defaultPageDuration);
  return nonMediaPageDuration > backgroundAudioDuration ? `${nonMediaPageDuration}s` : `page-${id}-background-audio`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAutoAdvanceAfter);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getLongestMediaElement.js":
/*!*************************************************************!*\
  !*** ./packages/output/src/utils/getLongestMediaElement.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _googleforcreators_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googleforcreators/elements */ "./packages/elements/src/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * Among all elements, returns the media element with the longest duration.
 *
 * @param {Array<Object>} elements List of elements.
 * @param {number} minDuration Duration that the minimum element must exceed in seconds.
 * @return {Object|undefined} Found element, or undefined if there are no media elements.
 */

function getLongestMediaElement(elements) {
  let minDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return elements.filter(_ref => {
    let {
      type,
      loop
    } = _ref;
    const {
      isMedia
    } = (0,_googleforcreators_elements__WEBPACK_IMPORTED_MODULE_1__.getDefinitionForType)(type); // Ensure looping media is not considered.

    return isMedia && !loop;
  }).reduce((longest, element) => {
    if (!element?.resource?.length) {
      return longest;
    }

    if (element?.resource?.length < minDuration) {
      return longest;
    }

    return longest?.resource?.length > element?.resource?.length ? longest : element;
  }, undefined);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLongestMediaElement);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getPreloadResources.js":
/*!**********************************************************!*\
  !*** ./packages/output/src/utils/getPreloadResources.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * AMP Extension
 *
 * @typedef {Object} PreloadResource
 * @property {string} url The URL to the resource.
 * @property {string} type Type of resource, e.g. "video" or "image".
 */

/**
 * Goes through all pages in a story to find the resources that should be preloaded.
 *
 * Currently this includes the first page's background image/video.
 *
 * @param {Array} pages List of pages.
 * @return {Array<PreloadResource>} List of preload resources.
 */
function getPreloadResources(pages) {
  const preloadResources = [];

  if (pages.length === 0) {
    return preloadResources;
  }

  for (const {
    type,
    resource,
    isBackground
  } of pages[0].elements) {
    if (!['image', 'video', 'gif'].includes(type)) {
      continue;
    }

    if (!isBackground) {
      continue;
    } // resource?.output?.src is used only for GIF resources.


    const src = resource?.output?.src || resource.src;
    preloadResources.push({
      url: src,
      type: 'image' === type ? 'image' : 'video'
    });
  }

  return preloadResources;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPreloadResources);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getStoryMarkup.js":
/*!*****************************************************!*\
  !*** ./packages/output/src/utils/getStoryMarkup.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStoryMarkup)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _googleforcreators_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/react */ "./packages/react/src/index.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../story */ "./packages/output/src/story.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/getStoryMarkup.js";


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Creates AMP HTML markup for saving to DB for rendering in the FE.
 *
 * @param {import('../../../types').Story} story Story object.
 * @param {Array<Object>} pages List of pages.
 * @param {Object} metadata Metadata.
 * @param {Object} flags Feature flags.
 * @return {string} Story markup.
 */

function getStoryMarkup(story, pages, metadata) {
  let flags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Note that react-dom/server will warn about useLayoutEffect usage here.
  // Not because of any wrongdoing in our code, but mostly because
  // of its own profiler.
  // See https://github.com/facebook/react/issues/14927
  return (0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_story__WEBPACK_IMPORTED_MODULE_3__["default"], {
    story: story,
    pages: pages,
    metadata: metadata,
    flags: flags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }));
}

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getTextElementTagNames.js":
/*!*************************************************************!*\
  !*** ./packages/output/src/utils/getTextElementTagNames.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MINIMUM_CONTENT_LENGTH = 3;
/**
 * Returns a map of tag names for text elements.
 *
 * Uses a very simple algorithm to set tag name (h1, h2, h3, p)
 * based on font size.
 *
 * @param {Array<Object>} elements List of text elements
 * @return {Map<string, string>} Map of element IDs to tag name.
 */

function getTextElementTagNames(elements) {
  return elements.sort((a, b) => a.y - b.y).reduce(
  /**
   * Reducer.
   *
   * @param {Map<string, string>} tagNamesMap Tag names map.
   * @param {Object} element Text element.
   * @param {string} element.id Element ID
   * @param {number} element.fontSize Font size.
   * @param {string} element.content Text content.
   * @return {Map<string, string>} Tag names map.
   */
  (tagNamesMap, _ref) => {
    let {
      id,
      fontSize,
      content
    } = _ref;

    if (content.length <= MINIMUM_CONTENT_LENGTH) {
      tagNamesMap.set(id, 'p');
      return tagNamesMap;
    }

    const hasH1 = Array.from(tagNamesMap.values()).includes('h1');

    if (fontSize >= 36 && !hasH1) {
      tagNamesMap.set(id, 'h1');
      return tagNamesMap;
    }

    if (fontSize >= 27) {
      tagNamesMap.set(id, 'h2');
    } else if (fontSize >= 21) {
      tagNamesMap.set(id, 'h3');
    } else {
      tagNamesMap.set(id, 'p');
    }

    return tagNamesMap;
  }, new Map());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTextElementTagNames);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/getUsedAmpExtensions.js":
/*!***********************************************************!*\
  !*** ./packages/output/src/utils/getUsedAmpExtensions.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * AMP Extension
 *
 * @typedef {Extension} Extension
 * @property {string} src The URL to the extension.
 * @property {?string} name The extension's name. Used for the custom-element attribute.
 */

/**
 * Goes through all pages in a story to find the needed AMP extensions for them.
 *
 * Always includes the runtime as well as the amp-story extension.
 *
 * @param {Array} pages List of pages.
 * @return {Array<Extension>} List of used AMP extensions.
 */
const getUsedAmpExtensions = pages => {
  const extensions = [// runtime.
  {
    src: 'https://cdn.ampproject.org/v0.js'
  }, {
    name: 'amp-story',
    src: 'https://cdn.ampproject.org/v0/amp-story-1.0.js'
  }];
  const ampVideo = {
    name: 'amp-video',
    src: 'https://cdn.ampproject.org/v0/amp-video-0.1.js'
  };
  const ampStoryCaptions = {
    name: 'amp-story-captions',
    src: 'https://cdn.ampproject.org/v0/amp-story-captions-0.1.js'
  };
  const ampStoryShopping = {
    name: 'amp-story-shopping',
    src: 'https://cdn.ampproject.org/v0/amp-story-shopping-0.1.js'
  };

  for (const {
    elements,
    backgroundAudio
  } of pages) {
    if (backgroundAudio?.resource?.src && backgroundAudio?.tracks?.length > 0) {
      extensions.push(ampVideo);
      extensions.push(ampStoryCaptions);
    }

    for (const {
      type,
      tracks
    } of elements) {
      switch (type) {
        case 'video':
          extensions.push(ampVideo);

          if (tracks?.length > 0) {
            extensions.push(ampStoryCaptions);
          }

          break;

        case 'gif':
          extensions.push(ampVideo);
          break;

        case 'product':
          extensions.push(ampStoryShopping);
          break;

        default:
          break;
      }
    }
  }

  return [...new Set(extensions)];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUsedAmpExtensions);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/outlink.js":
/*!**********************************************!*\
  !*** ./packages/output/src/utils/outlink.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _googleforcreators_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/i18n */ "./packages/i18n/src/i18n.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/outlink.js";


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */



function Outlink(_ref) {
  let {
    ctaText,
    url,
    icon,
    theme,
    rel = []
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-page-outlink", {
    layout: "nodisplay",
    "cta-image": icon || undefined,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: url,
    rel: rel.join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, ctaText || (0,_googleforcreators_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Learn more', 'web-stories')));
}

_c = Outlink;
Outlink.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['light', 'dark']),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  rel: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),
  ctaText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Outlink);

var _c;

__webpack_require__.$Refresh$.register(_c, "Outlink");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/shoppingAttachment.js":
/*!*********************************************************!*\
  !*** ./packages/output/src/utils/shoppingAttachment.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/shoppingAttachment.js";


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */


function ShoppingAttachment(_ref) {
  let {
    products,
    theme
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("amp-story-shopping-attachment", {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("script", {
    type: "application/json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        items: products
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

_c = ShoppingAttachment;
ShoppingAttachment.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['light', 'dark']),
  products: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingAttachment);

var _c;

__webpack_require__.$Refresh$.register(_c, "ShoppingAttachment");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/output/src/utils/styles.js":
/*!*********************************************!*\
  !*** ./packages/output/src/utils/styles.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _googleforcreators_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/units */ "./packages/units/src/constants.js");
/* harmony import */ var _googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googleforcreators/design-system */ "./packages/design-system/src/theme/index.js");
/* harmony import */ var _googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googleforcreators/patterns */ "./packages/patterns/src/isHexColorString.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _jsxFileName = "/Users/nitinbagoriya/Desktop/nextbigstudio/web-story-creation-tool/packages/output/src/utils/styles.js";


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */




function CustomStyles() {
  const safeToFullRatio = _googleforcreators_units__WEBPACK_IMPORTED_MODULE_2__.PAGE_RATIO / _googleforcreators_units__WEBPACK_IMPORTED_MODULE_2__.FULLBLEED_RATIO;
  const fullToSafeRatio = 1 / safeToFullRatio;
  const safeRatio = _googleforcreators_units__WEBPACK_IMPORTED_MODULE_2__.PAGE_RATIO;
  const fullRatio = _googleforcreators_units__WEBPACK_IMPORTED_MODULE_2__.FULLBLEED_RATIO; // Make the story content aligned with top of viewport between aspect ratios
  // 320:678 and 9:16. This ensures that the story's system UI (progress bar,
  // share button) is either completely overlapping or not overlapping the story
  // content (i.e. never partially overlapping). The icon height is 48px. Based
  // on research, the smallest screen size in active use is 320 pixels wide. In
  // this case, the minimum screen width that this ratio will work for it 320px.

  const gridLayerExpandLowerBound = '320 / 678';
  const gridLayerExpandUpperBound = '9 / 16'; // Match page background color to the workspace background color.
  // Validate since we're using dangerouslySetInnerHTML with imported variable.

  const workspaceColor = _googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_3__.theme.colors.bg.primary;
  const pageBackgroundColor = (0,_googleforcreators_patterns__WEBPACK_IMPORTED_MODULE_4__["default"])(workspaceColor) ? workspaceColor : '#1B1D1C';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", {
    "amp-custom": "",
    dangerouslySetInnerHTML: {
      __html: `
              h1, h2, h3 { font-weight: normal; }

              amp-story-page {
                background-color: ${pageBackgroundColor};
              }

              amp-story-grid-layer {
                overflow: visible;
              }

              @media (max-aspect-ratio: ${gridLayerExpandUpperBound})  {
                @media (min-aspect-ratio: ${gridLayerExpandLowerBound}) {
                  amp-story-grid-layer.grid-layer {
                    margin-top: calc((100% / ${fullRatio} - 100% / ${safeRatio}) / 2);
                  }
                }
              }
          ` +
      /*
        The following rule is for Safari only.
        In Safari, the font size is rounded up, causing overflow, this hack undoes this.
        See https://github.com/googleforcreators/web-stories-wp/issues/6323
       */
      `
              @media not all and (min-resolution:.001dpcm) {
                @media {
                  p.text-wrapper > span {
                    font-size: calc(100% - 0.5px);
                  }
                }
              }

              .page-fullbleed-area,
              .page-background-overlay-area {
                position: absolute;
                overflow: hidden;
                width: 100%;
                left: 0;
                height: calc(${safeToFullRatio} * 100%);
                top: calc((1 - ${safeToFullRatio}) * 100% / 2);
              }

              .element-overlay-area {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              }

              .page-safe-area {
                overflow: visible;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: calc(${fullToSafeRatio} * 100%);
                margin: auto 0;
              }

              .mask {
                position: absolute;
                overflow: hidden;
              }

              .fill {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
              }

              @media (prefers-reduced-motion: no-preference) {
                .animation-wrapper {
                  opacity: var(--initial-opacity);
                  transform: var(--initial-transform);
                }
              }

              amp-story-grid-layer.align-bottom {
                align-content: end;
                padding: 0;
              }

              .captions-area {
                padding: 0 32px 0;
              }

              amp-story-captions {
                margin-bottom: 16px;
                text-align: center;
              }

              amp-story-captions span {
                display: inline-block;
                margin: 0;
                padding: 6px 12px;
                vertical-align: middle;
                border-radius: 15px;
                background: rgba(11, 11, 11, 0.6);
                color: rgba(255, 255, 255, 1);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;;
                font-size: calc(4 * var(--story-page-vw));
                line-height: 1.4;
                word-break: break-word;
                word-wrap: break-word;
                overflow-wrap: break-word;
              }
              `
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  });
}

_c = CustomStyles;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomStyles);

var _c;

__webpack_require__.$Refresh$.register(_c, "CustomStyles");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./packages/patterns/src/isHexColorString.js":
/*!***************************************************!*\
  !*** ./packages/patterns/src/isHexColorString.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isHexColorString(s) {
  return /^#(?:[a-f0-9]{3}){1,2}$/i.test(s);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHexColorString);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=chunk-getStoryMarkup.js.map