(globalThis["webpackChunkweb_story_creation_tool"] = globalThis["webpackChunkweb_story_creation_tool"] || []).push([["chunk-web-stories-templates"],{

/***/ "./packages/migration/src/index.js":
/*!*****************************************!*\
  !*** ./packages/migration/src/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_VERSION": () => (/* reexport safe */ _migrate__WEBPACK_IMPORTED_MODULE_1__.DATA_VERSION),
/* harmony export */   "migrate": () => (/* reexport safe */ _migrate__WEBPACK_IMPORTED_MODULE_1__.migrate)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _migrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrate */ "./packages/migration/src/migrate.js");
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

/***/ "./packages/migration/src/migrate.js":
/*!*******************************************!*\
  !*** ./packages/migration/src/migrate.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_VERSION": () => (/* binding */ DATA_VERSION),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "migrate": () => (/* binding */ migrate)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _migrations_v0001_storyDataArrayToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrations/v0001_storyDataArrayToObject */ "./packages/migration/src/migrations/v0001_storyDataArrayToObject.js");
/* harmony import */ var _migrations_v0002_dataPixelTo1080__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./migrations/v0002_dataPixelTo1080 */ "./packages/migration/src/migrations/v0002_dataPixelTo1080.js");
/* harmony import */ var _migrations_v0003_fullbleedToFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migrations/v0003_fullbleedToFill */ "./packages/migration/src/migrations/v0003_fullbleedToFill.js");
/* harmony import */ var _migrations_v0004_squareToShape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./migrations/v0004_squareToShape */ "./packages/migration/src/migrations/v0004_squareToShape.js");
/* harmony import */ var _migrations_v0004_mediaElementToResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migrations/v0004_mediaElementToResource */ "./packages/migration/src/migrations/v0004_mediaElementToResource.js");
/* harmony import */ var _migrations_v0005_setOpacity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./migrations/v0005_setOpacity */ "./packages/migration/src/migrations/v0005_setOpacity.js");
/* harmony import */ var _migrations_v0006_colorToPattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./migrations/v0006_colorToPattern */ "./packages/migration/src/migrations/v0006_colorToPattern.js");
/* harmony import */ var _migrations_v0007_setFlip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./migrations/v0007_setFlip */ "./packages/migration/src/migrations/v0007_setFlip.js");
/* harmony import */ var _migrations_v0008_paddingToObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./migrations/v0008_paddingToObject */ "./packages/migration/src/migrations/v0008_paddingToObject.js");
/* harmony import */ var _migrations_v0009_defaultBackground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./migrations/v0009_defaultBackground */ "./packages/migration/src/migrations/v0009_defaultBackground.js");
/* harmony import */ var _migrations_v0010_dataPixelTo440__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./migrations/v0010_dataPixelTo440 */ "./packages/migration/src/migrations/v0010_dataPixelTo440.js");
/* harmony import */ var _migrations_v0011_pageAdvancement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./migrations/v0011_pageAdvancement */ "./packages/migration/src/migrations/v0011_pageAdvancement.js");
/* harmony import */ var _migrations_v0012_setBackgroundTextMode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./migrations/v0012_setBackgroundTextMode */ "./packages/migration/src/migrations/v0012_setBackgroundTextMode.js");
/* harmony import */ var _migrations_v0013_videoIdToId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./migrations/v0013_videoIdToId */ "./packages/migration/src/migrations/v0013_videoIdToId.js");
/* harmony import */ var _migrations_v0014_oneTapLinkDeprecate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./migrations/v0014_oneTapLinkDeprecate */ "./packages/migration/src/migrations/v0014_oneTapLinkDeprecate.js");
/* harmony import */ var _migrations_v0015_fontObjects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./migrations/v0015_fontObjects */ "./packages/migration/src/migrations/v0015_fontObjects.js");
/* harmony import */ var _migrations_v0016_isFullbleedDeprecate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./migrations/v0016_isFullbleedDeprecate */ "./packages/migration/src/migrations/v0016_isFullbleedDeprecate.js");
/* harmony import */ var _migrations_v0017_inlineTextProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./migrations/v0017_inlineTextProperties */ "./packages/migration/src/migrations/v0017_inlineTextProperties.js");
/* harmony import */ var _migrations_v0018_defaultBackgroundElement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./migrations/v0018_defaultBackgroundElement */ "./packages/migration/src/migrations/v0018_defaultBackgroundElement.js");
/* harmony import */ var _migrations_v0019_conicToLinear__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./migrations/v0019_conicToLinear */ "./packages/migration/src/migrations/v0019_conicToLinear.js");
/* harmony import */ var _migrations_v0020_isFillDeprecate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./migrations/v0020_isFillDeprecate */ "./packages/migration/src/migrations/v0020_isFillDeprecate.js");
/* harmony import */ var _migrations_v0021_backgroundColorToPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./migrations/v0021_backgroundColorToPage */ "./packages/migration/src/migrations/v0021_backgroundColorToPage.js");
/* harmony import */ var _migrations_v0022_dataPixelTo412__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./migrations/v0022_dataPixelTo412 */ "./packages/migration/src/migrations/v0022_dataPixelTo412.js");
/* harmony import */ var _migrations_v0023_convertOverlayPattern__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./migrations/v0023_convertOverlayPattern */ "./packages/migration/src/migrations/v0023_convertOverlayPattern.js");
/* harmony import */ var _migrations_v0024_blobsToSingleBlob__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./migrations/v0024_blobsToSingleBlob */ "./packages/migration/src/migrations/v0024_blobsToSingleBlob.js");
/* harmony import */ var _migrations_v0025_singleAnimationTarget__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./migrations/v0025_singleAnimationTarget */ "./packages/migration/src/migrations/v0025_singleAnimationTarget.js");
/* harmony import */ var _migrations_v0026_backgroundOverlayToOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./migrations/v0026_backgroundOverlayToOverlay */ "./packages/migration/src/migrations/v0026_backgroundOverlayToOverlay.js");
/* harmony import */ var _migrations_v0027_videoDuration__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./migrations/v0027_videoDuration */ "./packages/migration/src/migrations/v0027_videoDuration.js");
/* harmony import */ var _migrations_v0028_mark3pVideoAsOptimized__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./migrations/v0028_mark3pVideoAsOptimized */ "./packages/migration/src/migrations/v0028_mark3pVideoAsOptimized.js");
/* harmony import */ var _migrations_v0029_unifyGifResources__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./migrations/v0029_unifyGifResources */ "./packages/migration/src/migrations/v0029_unifyGifResources.js");
/* harmony import */ var _migrations_v0030_mark3pVideoAsMuted__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./migrations/v0030_mark3pVideoAsMuted */ "./packages/migration/src/migrations/v0030_mark3pVideoAsMuted.js");
/* harmony import */ var _migrations_v0031_normalizeResourceSizes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./migrations/v0031_normalizeResourceSizes */ "./packages/migration/src/migrations/v0031_normalizeResourceSizes.js");
/* harmony import */ var _migrations_v0032_pageOutlinkTheme__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./migrations/v0032_pageOutlinkTheme */ "./packages/migration/src/migrations/v0032_pageOutlinkTheme.js");
/* harmony import */ var _migrations_v0033_removeTitleFromResources__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./migrations/v0033_removeTitleFromResources */ "./packages/migration/src/migrations/v0033_removeTitleFromResources.js");
/* harmony import */ var _migrations_v0034_removeUnusedBackgroundProps__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./migrations/v0034_removeUnusedBackgroundProps */ "./packages/migration/src/migrations/v0034_removeUnusedBackgroundProps.js");
/* harmony import */ var _migrations_v0035_markVideoAsExternal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./migrations/v0035_markVideoAsExternal */ "./packages/migration/src/migrations/v0035_markVideoAsExternal.js");
/* harmony import */ var _migrations_v0036_changeBaseColorToHex__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./migrations/v0036_changeBaseColorToHex */ "./packages/migration/src/migrations/v0036_changeBaseColorToHex.js");
/* harmony import */ var _migrations_v0037_removeTransientMediaProperties__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./migrations/v0037_removeTransientMediaProperties */ "./packages/migration/src/migrations/v0037_removeTransientMediaProperties.js");
/* harmony import */ var _migrations_v0038_camelCaseResourceSizes__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./migrations/v0038_camelCaseResourceSizes */ "./packages/migration/src/migrations/v0038_camelCaseResourceSizes.js");
/* harmony import */ var _migrations_v0039_backgroundAudioFormatting__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./migrations/v0039_backgroundAudioFormatting */ "./packages/migration/src/migrations/v0039_backgroundAudioFormatting.js");
/* harmony import */ var _migrations_v0040_andadaFontToAndadaPro_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./migrations/v0040_andadaFontToAndadaPro.js */ "./packages/migration/src/migrations/v0040_andadaFontToAndadaPro.js");
/* harmony import */ var _migrations_v0041_removeFontProperties_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./migrations/v0041_removeFontProperties.js */ "./packages/migration/src/migrations/v0041_removeFontProperties.js");
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
 * Internal dependencies
 */










































const MIGRATIONS = {
  1: [_migrations_v0001_storyDataArrayToObject__WEBPACK_IMPORTED_MODULE_1__["default"]],
  2: [_migrations_v0002_dataPixelTo1080__WEBPACK_IMPORTED_MODULE_2__["default"]],
  3: [_migrations_v0003_fullbleedToFill__WEBPACK_IMPORTED_MODULE_3__["default"]],
  4: [_migrations_v0004_squareToShape__WEBPACK_IMPORTED_MODULE_4__["default"], _migrations_v0004_mediaElementToResource__WEBPACK_IMPORTED_MODULE_5__["default"]],
  5: [_migrations_v0005_setOpacity__WEBPACK_IMPORTED_MODULE_6__["default"]],
  6: [_migrations_v0006_colorToPattern__WEBPACK_IMPORTED_MODULE_7__["default"]],
  7: [_migrations_v0007_setFlip__WEBPACK_IMPORTED_MODULE_8__["default"]],
  8: [_migrations_v0008_paddingToObject__WEBPACK_IMPORTED_MODULE_9__["default"]],
  9: [_migrations_v0009_defaultBackground__WEBPACK_IMPORTED_MODULE_10__["default"]],
  10: [_migrations_v0010_dataPixelTo440__WEBPACK_IMPORTED_MODULE_11__["default"]],
  11: [_migrations_v0011_pageAdvancement__WEBPACK_IMPORTED_MODULE_12__["default"]],
  12: [_migrations_v0012_setBackgroundTextMode__WEBPACK_IMPORTED_MODULE_13__["default"]],
  13: [_migrations_v0013_videoIdToId__WEBPACK_IMPORTED_MODULE_14__["default"]],
  14: [_migrations_v0014_oneTapLinkDeprecate__WEBPACK_IMPORTED_MODULE_15__["default"]],
  15: [_migrations_v0015_fontObjects__WEBPACK_IMPORTED_MODULE_16__["default"]],
  16: [_migrations_v0016_isFullbleedDeprecate__WEBPACK_IMPORTED_MODULE_17__["default"]],
  17: [_migrations_v0017_inlineTextProperties__WEBPACK_IMPORTED_MODULE_18__["default"]],
  18: [_migrations_v0018_defaultBackgroundElement__WEBPACK_IMPORTED_MODULE_19__["default"]],
  19: [_migrations_v0019_conicToLinear__WEBPACK_IMPORTED_MODULE_20__["default"]],
  20: [_migrations_v0020_isFillDeprecate__WEBPACK_IMPORTED_MODULE_21__["default"]],
  21: [_migrations_v0021_backgroundColorToPage__WEBPACK_IMPORTED_MODULE_22__["default"]],
  22: [_migrations_v0022_dataPixelTo412__WEBPACK_IMPORTED_MODULE_23__["default"]],
  23: [_migrations_v0023_convertOverlayPattern__WEBPACK_IMPORTED_MODULE_24__["default"]],
  24: [_migrations_v0024_blobsToSingleBlob__WEBPACK_IMPORTED_MODULE_25__["default"]],
  25: [_migrations_v0025_singleAnimationTarget__WEBPACK_IMPORTED_MODULE_26__["default"]],
  26: [_migrations_v0026_backgroundOverlayToOverlay__WEBPACK_IMPORTED_MODULE_27__["default"]],
  27: [_migrations_v0027_videoDuration__WEBPACK_IMPORTED_MODULE_28__["default"]],
  28: [_migrations_v0028_mark3pVideoAsOptimized__WEBPACK_IMPORTED_MODULE_29__["default"]],
  29: [_migrations_v0029_unifyGifResources__WEBPACK_IMPORTED_MODULE_30__["default"]],
  30: [_migrations_v0030_mark3pVideoAsMuted__WEBPACK_IMPORTED_MODULE_31__["default"]],
  31: [_migrations_v0031_normalizeResourceSizes__WEBPACK_IMPORTED_MODULE_32__["default"]],
  32: [_migrations_v0032_pageOutlinkTheme__WEBPACK_IMPORTED_MODULE_33__["default"]],
  33: [_migrations_v0033_removeTitleFromResources__WEBPACK_IMPORTED_MODULE_34__["default"]],
  34: [_migrations_v0034_removeUnusedBackgroundProps__WEBPACK_IMPORTED_MODULE_35__["default"]],
  35: [_migrations_v0035_markVideoAsExternal__WEBPACK_IMPORTED_MODULE_36__["default"]],
  36: [_migrations_v0036_changeBaseColorToHex__WEBPACK_IMPORTED_MODULE_37__["default"]],
  37: [_migrations_v0037_removeTransientMediaProperties__WEBPACK_IMPORTED_MODULE_38__["default"]],
  38: [_migrations_v0038_camelCaseResourceSizes__WEBPACK_IMPORTED_MODULE_39__["default"]],
  39: [_migrations_v0039_backgroundAudioFormatting__WEBPACK_IMPORTED_MODULE_40__["default"]],
  40: [_migrations_v0040_andadaFontToAndadaPro_js__WEBPACK_IMPORTED_MODULE_41__["default"]],
  41: [_migrations_v0041_removeFontProperties_js__WEBPACK_IMPORTED_MODULE_42__["default"]]
};
const DATA_VERSION = Math.max.apply(null, Object.keys(MIGRATIONS).map(Number));
function migrate(storyData, version) {
  let result = storyData;

  for (let v = version; v < DATA_VERSION; v++) {
    const migrations = MIGRATIONS[v + 1];

    if (!migrations) {
      continue;
    }

    for (const i in migrations) {
      if (Object.prototype.hasOwnProperty.call(migrations, i)) {
        result = migrations[Number(i)](result);
      }
    }
  }

  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (migrate);

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

/***/ "./packages/migration/src/migrations/v0001_storyDataArrayToObject.js":
/*!***************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0001_storyDataArrayToObject.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function storyDataArrayToObject(storyData) {
  return {
    pages: storyData
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storyDataArrayToObject);

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

/***/ "./packages/migration/src/migrations/v0002_dataPixelTo1080.js":
/*!********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0002_dataPixelTo1080.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const NEW_PAGE_WIDTH = 1080;
const NEW_PAGE_HEIGHT = 1920;
const OLD_PAGE_WIDTH = 412;
const OLD_PAGE_HEIGHT = 732;
const SCALE_X = NEW_PAGE_WIDTH / OLD_PAGE_WIDTH;
const SCALE_Y = NEW_PAGE_HEIGHT / OLD_PAGE_HEIGHT;

function dataPixelTo1080(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    x,
    y,
    width,
    height,
    fontSize,
    ...rest
  } = _ref3;
  const element = {
    x: dataPixels(x * SCALE_X),
    y: dataPixels(y * SCALE_Y),
    width: dataPixels(width * SCALE_X),
    height: dataPixels(height * SCALE_Y),
    ...rest
  };

  if (typeof fontSize === 'number') {
    element.fontSize = dataPixels(fontSize * SCALE_Y);
  }

  return element;
}
/**
 * See `units/dimensions.js`.
 *
 * @param {number} v The value to be rounded.
 * @return {number} The value rounded to the "data" space precision.
 */


function dataPixels(v) {
  return Number(v.toFixed(0));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataPixelTo1080);

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

/***/ "./packages/migration/src/migrations/v0003_fullbleedToFill.js":
/*!********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0003_fullbleedToFill.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function fullbleedToFill(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    isFullbleed,
    ...rest
  } = _ref3;
  return {
    isFill: isFullbleed,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullbleedToFill);

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

/***/ "./packages/migration/src/migrations/v0004_mediaElementToResource.js":
/*!***************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0004_mediaElementToResource.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function dataMediaElementToResource(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'image') {
    const {
      src,
      origRatio,
      width,
      height,
      mimeType,
      ...rest
    } = element;
    return {
      resource: {
        type: 'image',
        src,
        width,
        height,
        mimeType
      },
      width,
      height,
      ...rest
    };
  } else if (element.type === 'video') {
    const {
      src,
      origRatio,
      poster,
      posterId,
      videoId,
      mimeType,
      width,
      height,
      ...rest
    } = element;
    return {
      resource: {
        type: 'video',
        src,
        width,
        height,
        poster,
        posterId,
        videoId,
        mimeType
      },
      width,
      height,
      ...rest
    };
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataMediaElementToResource);

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

/***/ "./packages/migration/src/migrations/v0004_squareToShape.js":
/*!******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0004_squareToShape.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function dataSquareToShape(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    type,
    ...rest
  } = _ref3;
  const element = {
    type: type === 'square' ? 'shape' : type,
    ...rest
  };
  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSquareToShape);

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

/***/ "./packages/migration/src/migrations/v0005_setOpacity.js":
/*!***************************************************************!*\
  !*** ./packages/migration/src/migrations/v0005_setOpacity.js ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function setOpacity(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    opacity,
    ...rest
  } = _ref3;
  return {
    opacity: opacity ? opacity : 100,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setOpacity);

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

/***/ "./packages/migration/src/migrations/v0006_colorToPattern.js":
/*!*******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0006_colorToPattern.js ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
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


function colorToPattern(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(updatePage),
    ...rest
  };
}

function updatePage(_ref2) {
  let {
    elements,
    backgroundColor,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    backgroundColor: parse(backgroundColor),
    ...rest
  };
}

function updateElement(props) {
  const newProps = { ...props
  };

  if (Object.prototype.hasOwnProperty.call(props, 'color')) {
    newProps.color = parse(newProps.color);
  }

  if (Object.prototype.hasOwnProperty.call(props, 'backgroundColor')) {
    newProps.backgroundColor = parse(newProps.backgroundColor);
  }

  return newProps;
}

function parse(colorString) {
  if (!colorString || colorString === 'transparent') {
    return null;
  }

  const {
    red: r,
    green: g,
    blue: b,
    alpha: a = 1
  } = (0,polished__WEBPACK_IMPORTED_MODULE_1__.parseToRgb)(colorString);

  if (a === 1) {
    return {
      color: {
        r,
        g,
        b
      }
    };
  }

  return {
    color: {
      r,
      g,
      b,
      a
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colorToPattern);

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

/***/ "./packages/migration/src/migrations/v0007_setFlip.js":
/*!************************************************************!*\
  !*** ./packages/migration/src/migrations/v0007_setFlip.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function setFlip(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    flip,
    ...rest
  } = _ref3;
  return {
    flip: flip ? flip : {
      horizontal: false,
      vertical: false
    },
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setFlip);

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

/***/ "./packages/migration/src/migrations/v0008_paddingToObject.js":
/*!********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0008_paddingToObject.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function paddingToObject(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    padding,
    type,
    ...rest
  } = _ref3;

  if ('text' !== type) {
    return {
      type,
      ...rest
    };
  } // If padding is already set, just return as is.


  if (padding && Object.prototype.hasOwnProperty.call(padding, 'vertical') && Object.prototype.hasOwnProperty.call(padding, 'horizontal')) {
    return {
      type,
      padding,
      ...rest
    };
  }

  const newPadding = padding || 0;
  return {
    padding: {
      horizontal: newPadding,
      vertical: newPadding
    },
    type,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paddingToObject);

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

/***/ "./packages/migration/src/migrations/v0009_defaultBackground.js":
/*!**********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0009_defaultBackground.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
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

const PAGE_WIDTH = 1080;
const DEFAULT_ELEMENT_WIDTH = PAGE_WIDTH / 3;

function defaultBackground(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    backgroundElementId,
    backgroundColor,
    ...rest
  } = _ref2;

  if (!backgroundElementId) {
    const element = {
      type: 'shape',
      x: PAGE_WIDTH / 4 * Math.random(),
      y: PAGE_WIDTH / 4 * Math.random(),
      width: DEFAULT_ELEMENT_WIDTH,
      height: DEFAULT_ELEMENT_WIDTH,
      rotationAngle: 0,
      mask: {
        type: 'rectangle'
      },
      flip: {
        vertical: false,
        horizontal: false
      },
      isBackground: true,
      backgroundColor: backgroundColor || {
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }
      },
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()
    };
    elements.unshift(element);
    backgroundElementId = element.id;
  }

  return {
    backgroundElementId,
    elements,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultBackground);

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

/***/ "./packages/migration/src/migrations/v0010_dataPixelTo440.js":
/*!*******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0010_dataPixelTo440.js ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const NEW_PAGE_WIDTH = 440;
const NEW_PAGE_HEIGHT = 660;
const OLD_PAGE_WIDTH = 1080;
const OLD_PAGE_HEIGHT = 1920; // Aspect ratio is changed, but we don't want to break ratios of existing
// elements at this point. Thus the formula here is "contain".

const SCALE = Math.min(NEW_PAGE_WIDTH / OLD_PAGE_WIDTH, NEW_PAGE_HEIGHT / OLD_PAGE_HEIGHT);

function dataPixelTo440(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    x,
    y,
    width,
    height,
    fontSize,
    padding,
    ...rest
  } = _ref3;
  const element = {
    x: dataPixels(x * SCALE),
    y: dataPixels(y * SCALE),
    width: dataPixels(width * SCALE),
    height: dataPixels(height * SCALE),
    ...rest
  };

  if (typeof fontSize === 'number') {
    element.fontSize = dataPixels(fontSize * SCALE);
  }

  if (padding) {
    const {
      horizontal,
      vertical
    } = padding;
    element.padding = {
      horizontal: dataPixels(horizontal * SCALE),
      vertical: dataPixels(vertical * SCALE)
    };
  }

  return element;
}
/**
 * See `units/dimensions.js`.
 *
 * @param {number} v The value to be rounded.
 * @return {number} The value rounded to the "data" space precision.
 */


function dataPixels(v) {
  return Number(v.toFixed(0));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataPixelTo440);

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

/***/ "./packages/migration/src/migrations/v0011_pageAdvancement.js":
/*!********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0011_pageAdvancement.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function pageAdvancement(_ref) {
  let {
    autoAdvance,
    defaultPageDuration,
    ...rest
  } = _ref;
  return {
    autoAdvance: typeof autoAdvance !== 'undefined' ? autoAdvance : true,
    defaultPageDuration: typeof defaultPageDuration === 'number' ? defaultPageDuration : 7,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageAdvancement);

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

/***/ "./packages/migration/src/migrations/v0012_setBackgroundTextMode.js":
/*!**************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0012_setBackgroundTextMode.js ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function setBackgroundTextMode(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(props) {
  const {
    type
  } = props;

  if (type === 'text') {
    const {
      backgroundColor
    } = props;
    const hasBackgroundColor = backgroundColor && backgroundColor !== 'transparent';
    return {
      backgroundTextMode: hasBackgroundColor ? 'FILL' : 'NONE',
      ...props
    };
  }

  return props;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setBackgroundTextMode);

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

/***/ "./packages/migration/src/migrations/v0013_videoIdToId.js":
/*!****************************************************************!*\
  !*** ./packages/migration/src/migrations/v0013_videoIdToId.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function videoIdToId(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.resource && 'videoId' in element.resource) {
    element.resource.id = element.resource.videoId;
    delete element.resource.videoId;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoIdToId);

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

/***/ "./packages/migration/src/migrations/v0014_oneTapLinkDeprecate.js":
/*!************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0014_oneTapLinkDeprecate.js ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function oneTapLinkDeprecate(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.link?.type) {
    delete element.link.type;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneTapLinkDeprecate);

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

/***/ "./packages/migration/src/migrations/v0015_fontObjects.js":
/*!****************************************************************!*\
  !*** ./packages/migration/src/migrations/v0015_fontObjects.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function fontObjects(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

const SYSTEM_FONTS = ['Arial', 'Arial Black', 'Arial Narrow', 'Baskerville', 'Brush Script MT', 'Copperplate', 'Courier New', 'Century Gothic', 'Garamond', 'Georgia', 'Gill Sans', 'Lucida Bright', 'Lucida Sans Typewriter', 'Palatino', 'Papyrus', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana'];

function updateElement(_ref3) {
  let {
    type,
    fontFamily,
    fontFallback,
    ...rest
  } = _ref3;

  if ('text' !== type) {
    return {
      type,
      ...rest
    };
  }

  const isSystemFont = SYSTEM_FONTS.includes(fontFamily);
  return {
    font: {
      service: isSystemFont ? 'system' : 'fonts.google.com',
      family: fontFamily,
      fallbacks: fontFallback
    },
    type,
    ...rest
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontObjects);

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

/***/ "./packages/migration/src/migrations/v0016_isFullbleedDeprecate.js":
/*!*************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0016_isFullbleedDeprecate.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function isFullbleedDeprecate(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (typeof element.isFullbleedBackground !== 'undefined') {
    delete element.isFullbleedBackground;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFullbleedDeprecate);

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

/***/ "./packages/migration/src/migrations/v0017_inlineTextProperties.js":
/*!*************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0017_inlineTextProperties.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function inlineTextProperties(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'text') {
    return updateTextContent(element);
  }

  return element;
}

function updateTextContent(_ref3) {
  let {
    bold,
    fontWeight,
    fontStyle,
    textDecoration,
    letterSpacing,
    color,
    content,
    ...rest
  } = _ref3;
  // We use an array to chain all the converters more nicely
  const convertedContent = [content].map(c => convertInlineBold(c, bold, fontWeight)).map(c => convertInlineItalic(c, fontStyle)).map(c => convertInlineUnderline(c, textDecoration)).map(c => addInlineColor(c, color)).map(c => addInlineLetterSpacing(c, letterSpacing)).pop();
  return { ...rest,
    content: convertedContent
  };
}

function convertInlineBold(content, isBold, fontWeight) {
  // Do we have a specific global weight to apply for entire text field?
  const globalWeight = typeof fontWeight === 'number' && fontWeight !== 400 ? fontWeight : isBold === true ? 700 : null;

  if (globalWeight) {
    // In that case, strip any inline bold from the text and wrap everything in a span with correct style
    const stripped = stripTag(content, 'strong');
    const fancyBold = `font-weight: ${globalWeight}`;
    return wrapWithSpan(stripped, fancyBold);
  }

  const justBold = 'font-weight: 700';
  return replaceTagWithSpan(content, 'strong', justBold);
}

function convertInlineItalic(content, fontStyle) {
  // Do we have a specific font style to apply for entire text field?
  const globalFontStyle = fontStyle === 'italic' ? fontStyle : null;
  const italicStyle = 'font-style: italic';

  if (globalFontStyle) {
    // In that case, strip any inline em from the text and wrap everything in a span with correct style
    const stripped = stripTag(content, 'em');
    return wrapWithSpan(stripped, italicStyle);
  }

  return replaceTagWithSpan(content, 'em', italicStyle);
}

function convertInlineUnderline(content, textDecoration) {
  // Do we have a specific text decoration to apply for entire text field?
  const globalDecoration = textDecoration === 'underline' ? textDecoration : null;
  const underlineStyle = 'text-decoration: underline';

  if (globalDecoration) {
    // In that case, strip any inline underline from the text and wrap everything in a span with correct style
    const stripped = stripTag(content, 'u');
    return wrapWithSpan(stripped, underlineStyle);
  }

  return replaceTagWithSpan(content, 'u', underlineStyle);
}

function addInlineColor(content, color) {
  // If we don't have a color (should never happen, but if), just return
  if (!color) {
    return content;
  }

  const {
    color: {
      r,
      g,
      b,
      a = 1
    }
  } = color;
  return wrapWithSpan(content, `color: rgba(${r}, ${g}, ${b}, ${a})`);
}

function addInlineLetterSpacing(content, letterSpacing) {
  // If we don't have letterSpacing, just return
  if (!letterSpacing) {
    return content;
  }

  return wrapWithSpan(content, `letter-spacing: ${letterSpacing / 100}em`);
}

function stripTag(html, tag) {
  // This is a very naive strip. Can only remove non-self-closing tags with attributes, which is sufficient here
  return html.replace(new RegExp(`</?${tag}>`, 'gi'), '');
}

function replaceTagWithSpan(html, tag, style) {
  // Again, very naive
  return html.replace(new RegExp(`<${tag}>`, 'gi'), `<span style="${style}">`).replace(new RegExp(`</${tag}>`, 'gi'), '</span>');
}

function wrapWithSpan(html, style) {
  return `<span style="${style}">${html}</span>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inlineTextProperties);

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

/***/ "./packages/migration/src/migrations/v0018_defaultBackgroundElement.js":
/*!*****************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0018_defaultBackgroundElement.js ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
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


function createDefaultBackgroundElement(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    backgroundElementId,
    ...rest
  } = _ref2;
  const backgroundElement = elements[0];
  let extra = {};

  if (backgroundElement.type === 'shape') {
    backgroundElement.isDefaultBackground = true;
  } else {
    extra = {
      defaultBackgroundElement: {
        type: 'shape',
        x: 1,
        y: 1,
        width: 1,
        height: 1,
        rotationAngle: 0,
        mask: {
          type: 'rectangle'
        },
        backgroundColor: {
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          }
        },
        isBackground: true,
        isDefaultBackground: true,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }
    };
  } // Note that we're not including `backgroundElementId` here


  return {
    elements,
    ...rest,
    ...extra
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDefaultBackgroundElement);

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

/***/ "./packages/migration/src/migrations/v0019_conicToLinear.js":
/*!******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0019_conicToLinear.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function conicToLinear(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  const {
    backgroundColor
  } = element;

  if (backgroundColor?.type !== 'conic') {
    return element;
  }

  return { ...element,
    backgroundColor: { ...backgroundColor,
      type: 'linear'
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conicToLinear);

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

/***/ "./packages/migration/src/migrations/v0020_isFillDeprecate.js":
/*!********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0020_isFillDeprecate.js ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const PAGE_WIDTH = 440;
const PAGE_HEIGHT = 660;
const FULLBLEED_RATIO = 9 / 16;
const FULLBLEED_HEIGHT = PAGE_WIDTH / FULLBLEED_RATIO;
const DANGER_ZONE_HEIGHT = (FULLBLEED_HEIGHT - PAGE_HEIGHT) / 2;

function isFillDeprecate(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    isFill,
    ...rest
  } = _ref3;

  if (isFill) {
    return { ...rest,
      x: 0,
      y: -DANGER_ZONE_HEIGHT,
      width: PAGE_WIDTH,
      height: PAGE_WIDTH / FULLBLEED_RATIO,
      rotationAngle: 0
    };
  }

  return rest;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFillDeprecate);

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

/***/ "./packages/migration/src/migrations/v0021_backgroundColorToPage.js":
/*!**************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0021_backgroundColorToPage.js ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function backgroundColorToPage(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(page) {
  const {
    elements,
    defaultBackgroundElement
  } = page;
  const defaultBackground = {
    type: 'solid',
    color: {
      r: 255,
      g: 255,
      b: 255
    }
  };
  const backgroundColor = elements[0]?.isDefaultBackground ? elements[0].backgroundColor : defaultBackgroundElement?.backgroundColor;
  return { ...page,
    backgroundColor: backgroundColor ? backgroundColor : defaultBackground
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundColorToPage);

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

/***/ "./packages/migration/src/migrations/v0022_dataPixelTo412.js":
/*!*******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0022_dataPixelTo412.js ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const NEW_PAGE_WIDTH = 412;
const NEW_PAGE_HEIGHT = 618;
const OLD_PAGE_WIDTH = 440;
const OLD_PAGE_HEIGHT = 660; // Aspect ratio is changed, but we don't want to break ratios of existing
// elements at this point. Thus the formula here is "contain".

const SCALE = Math.min(NEW_PAGE_WIDTH / OLD_PAGE_WIDTH, NEW_PAGE_HEIGHT / OLD_PAGE_HEIGHT);

function dataPixelTo440(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(_ref3) {
  let {
    x,
    y,
    width,
    height,
    fontSize,
    padding,
    ...rest
  } = _ref3;
  const element = {
    x: dataPixels(x * SCALE),
    y: dataPixels(y * SCALE),
    width: dataPixels(width * SCALE),
    height: dataPixels(height * SCALE),
    ...rest
  };

  if (typeof fontSize === 'number') {
    element.fontSize = dataPixels(fontSize * SCALE);
  }

  if (padding) {
    const {
      horizontal,
      vertical
    } = padding;
    element.padding = {
      horizontal: dataPixels(horizontal * SCALE),
      vertical: dataPixels(vertical * SCALE)
    };
  }

  return element;
}
/**
 * See `units/dimensions.js`.
 *
 * @param {number} v The value to be rounded.
 * @return {number} The value rounded to the "data" space precision.
 */


function dataPixels(v) {
  return Number(v.toFixed(0));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataPixelTo440);

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

/***/ "./packages/migration/src/migrations/v0023_convertOverlayPattern.js":
/*!**************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0023_convertOverlayPattern.js ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function convertOverlayPattern(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(convertPage),
    ...rest
  };
}

function convertPage(_ref2) {
  let {
    elements,
    backgroundOverlay,
    ...rest
  } = _ref2;
  const hasNonTrivialOverlay = backgroundOverlay && ['solid', 'linear', 'radial'].includes(backgroundOverlay);
  const backgroundElement = elements[0];
  const isValidBackgroundElement = ['image', 'video'].includes(backgroundElement?.type);

  if (!hasNonTrivialOverlay || !isValidBackgroundElement) {
    return {
      elements,
      ...rest
    };
  }

  return {
    elements: [{ ...backgroundElement,
      backgroundOverlay: getBackgroundOverlay(backgroundOverlay)
    }, ...elements.slice(1)],
    ...rest
  };
}

function getBackgroundOverlay(overlayType) {
  switch (overlayType) {
    case 'solid':
      return {
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.3
        }
      };

    case 'linear':
      return {
        type: 'linear',
        rotation: 0,
        stops: [{
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          position: 0.4
        }, {
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
          },
          position: 1
        }],
        alpha: 0.9
      };

    case 'radial':
      return {
        type: 'radial',
        size: {
          w: 0.8,
          h: 0.5
        },
        stops: [{
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          position: 0.25
        }, {
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
          },
          position: 1
        }],
        alpha: 0.6
      };

    default:
      return null;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertOverlayPattern);

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

/***/ "./packages/migration/src/migrations/v0024_blobsToSingleBlob.js":
/*!**********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0024_blobsToSingleBlob.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function blobsToSingleBlob(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element?.mask?.type && element?.mask?.type.startsWith('blob-')) {
    element.mask.type = 'blob';
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blobsToSingleBlob);

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

/***/ "./packages/migration/src/migrations/v0025_singleAnimationTarget.js":
/*!**************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0025_singleAnimationTarget.js ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
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


function singleAnimationTarget(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    animations,
    ...rest
  } = _ref2;
  return {
    animations: (animations || []).reduce(updateAnimation, []),
    ...rest
  };
}

function updateAnimation(animations, animation) {
  const {
    targets,
    id,
    ...rest
  } = animation;
  targets.map((target, i) => {
    animations.push({
      id: i === 0 ? id : (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      targets: [target],
      ...rest
    });
  });
  return animations;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleAnimationTarget);

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

/***/ "./packages/migration/src/migrations/v0026_backgroundOverlayToOverlay.js":
/*!*******************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0026_backgroundOverlayToOverlay.js ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function backgroundOverlayToOverlay(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (typeof element.backgroundOverlay !== 'undefined') {
    element.overlay = element.backgroundOverlay;
    delete element.backgroundOverlay;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundOverlayToOverlay);

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

/***/ "./packages/migration/src/migrations/v0027_videoDuration.js":
/*!******************************************************************!*\
  !*** ./packages/migration/src/migrations/v0027_videoDuration.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function videoDuration(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'video' && element.resource && element.resource?.lengthFormatted && !element.resource?.length) {
    const times = element.resource.lengthFormatted.split(':');
    const timesNumbers = times.map(Number);

    if (timesNumbers.length === 2) {
      const [minutes, seconds] = timesNumbers;
      const length = 60 * minutes + seconds;
      element.resource.length = length;
    } else if (timesNumbers.length === 3) {
      const [hours, minutes, seconds] = timesNumbers;
      const length = 60 * 60 * hours + 60 * minutes + seconds;
      element.resource.length = length;
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoDuration);

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

/***/ "./packages/migration/src/migrations/v0028_mark3pVideoAsOptimized.js":
/*!***************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0028_mark3pVideoAsOptimized.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function mark3pVideoAsOptimized(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'video' && element.resource?.id) {
    const resourceId = element.resource.id.toString();
    const isCoverrMedia = resourceId.startsWith('media/coverr');

    if (isCoverrMedia) {
      element.resource.isOptimized = true;
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mark3pVideoAsOptimized);

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

/***/ "./packages/migration/src/migrations/v0029_unifyGifResources.js":
/*!**********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0029_unifyGifResources.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function unifyGifResources(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type !== 'gif' || !element.resource) {
    return element;
  }

  element.resource.isOptimized = true;

  if (!element.resource.id) {
    element.resource.id = element.resource.alt;
  }

  if (!element.resource.posterId) {
    element.resource.posterId = element.resource.alt;
  }

  if (element.resource.output?.poster) {
    element.resource.poster = element.resource.output.poster;
    delete element.resource.output.poster;
  }

  if (element.resource.output.sizes) {
    delete element.resource.output?.sizes;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unifyGifResources);

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

/***/ "./packages/migration/src/migrations/v0030_mark3pVideoAsMuted.js":
/*!***********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0030_mark3pVideoAsMuted.js ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function mark3pVideoAsMuted(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'video' && element.resource?.id) {
    const resourceId = element.resource.id.toString();
    const isCoverrMedia = resourceId.startsWith('media/coverr');

    if (isCoverrMedia) {
      element.resource.isMuted = true;
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mark3pVideoAsMuted);

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

/***/ "./packages/migration/src/migrations/v0031_normalizeResourceSizes.js":
/*!***************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0031_normalizeResourceSizes.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function normalizeResourceSizes(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.resource) {
    element.resource.width = Number(element.resource.width);
    element.resource.height = Number(element.resource.height);

    if (element.resource.sizes) {
      for (const size of Object.keys(element.resource.sizes)) {
        // Disable reason: not acting on untrusted user input.
        const data = element.resource.sizes[size];
        element.resource.sizes[size] = { ...data,
          width: Number(data.width),
          height: Number(data.height)
        };
      }
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeResourceSizes);

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

/***/ "./packages/migration/src/migrations/v0032_pageOutlinkTheme.js":
/*!*********************************************************************!*\
  !*** ./packages/migration/src/migrations/v0032_pageOutlinkTheme.js ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function pageOutlinkTheme(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(page) {
  const {
    pageAttachment
  } = page;

  if (!pageAttachment) {
    return page;
  }

  const {
    theme
  } = pageAttachment;
  return { ...page,
    pageAttachment: { ...pageAttachment,
      theme: theme ?? 'light'
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageOutlinkTheme);

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

/***/ "./packages/migration/src/migrations/v0033_removeTitleFromResources.js":
/*!*****************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0033_removeTitleFromResources.js ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function removeTitleFromResources(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.resource?.title) {
    delete element.resource?.title;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTitleFromResources);

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

/***/ "./packages/migration/src/migrations/v0034_removeUnusedBackgroundProps.js":
/*!********************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0034_removeUnusedBackgroundProps.js ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function removeUnusedBackgroundProps(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    overlay,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.isDefaultBackground) {
    delete element.backgroundColor;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeUnusedBackgroundProps);

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

/***/ "./packages/migration/src/migrations/v0035_markVideoAsExternal.js":
/*!************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0035_markVideoAsExternal.js ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function markVideoAsExternal(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element?.resource) {
    if (element.resource?.id) {
      const resourceId = element.resource.id.toString();
      const is3pMedia = resourceId.startsWith('media/');
      element.resource.isExternal = is3pMedia;
    } else {
      element.resource.isExternal = true;
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markVideoAsExternal);

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

/***/ "./packages/migration/src/migrations/v0036_changeBaseColorToHex.js":
/*!*************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0036_changeBaseColorToHex.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function changeBaseColorToHex(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function getHexFromSolidArray(baseColor) {
  const color = baseColor.map(n => n.toString(16)).map(s => s.padStart(2, '0')).join('');
  return `#${color}`;
}

function updateElement(element) {
  if (Array.isArray(element?.resource?.baseColor)) {
    element.resource.baseColor = getHexFromSolidArray(element?.resource?.baseColor);
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBaseColorToHex);

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

/***/ "./packages/migration/src/migrations/v0037_removeTransientMediaProperties.js":
/*!***********************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0037_removeTransientMediaProperties.js ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function removeTransientMediaProperties(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (!element.resource) {
    return element;
  }

  delete element.resource.local;
  delete element.resource.isTrimming;
  delete element.resource.isTranscoding;
  delete element.resource.isMuting;
  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTransientMediaProperties);

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

/***/ "./packages/migration/src/migrations/v0038_camelCaseResourceSizes.js":
/*!***************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0038_camelCaseResourceSizes.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "snakeToCamelCase": () => (/* binding */ snakeToCamelCase)
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
function camelCaseResourceSizes(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function snakeToCamelCase() {
  let string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!string.includes('_') && !string.includes('-')) {
    return string;
  }

  return string.toLowerCase().replace(/([a-z])([_|-][a-z])/g, (_match, group1, group2) => group1 + group2.toUpperCase().replace('_', '').replace('-', ''));
}

function snakeToCamelCaseObjectKeys(obj) {
  return Object.entries(obj).reduce((_obj, _ref3) => {
    let [key, value] = _ref3;
    _obj[snakeToCamelCase(key)] = value;
    return _obj;
  }, {});
}

function updateElement(element) {
  if (element?.resource?.sizes) {
    for (const [key, value] of Object.entries(element.resource.sizes)) {
      element.resource.sizes[key] = snakeToCamelCaseObjectKeys(value);
    }
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camelCaseResourceSizes);

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

/***/ "./packages/migration/src/migrations/v0039_backgroundAudioFormatting.js":
/*!******************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0039_backgroundAudioFormatting.js ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function backgroundAudioFormatting(storyData) {
  const updatedStoryData = updateStory(storyData);
  const {
    pages,
    ...rest
  } = updatedStoryData;
  return {
    pages: pages.map(updatePage),
    ...rest
  };
}

function updateStory(story) {
  if (story?.backgroundAudio) {
    story.backgroundAudio = {
      resource: story?.backgroundAudio
    };
  }

  return story;
}

function updatePage(page) {
  if (page?.backgroundAudio) {
    page.backgroundAudio = {
      resource: page?.backgroundAudio,
      loop: true,
      tracks: []
    };
  }

  return page;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundAudioFormatting);

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

/***/ "./packages/migration/src/migrations/v0040_andadaFontToAndadaPro.js":
/*!**************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0040_andadaFontToAndadaPro.js ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function andadaFontToAndadaPro(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

const andadaPro = {
  family: 'Andada Pro',
  fallbacks: ['serif'],
  weights: [400, 500, 600, 700, 800],
  styles: ['regular', 'italic'],
  variants: [[0, 400], [0, 500], [0, 600], [0, 700], [0, 800], [1, 400], [1, 500], [1, 600], [1, 700], [1, 800]],
  service: 'fonts.google.com',
  metrics: {
    upm: 1000,
    asc: 942,
    des: -235,
    tAsc: 942,
    tDes: -235,
    tLGap: 0,
    wAsc: 1100,
    wDes: 390,
    xH: 494,
    capH: 705,
    yMin: -382,
    yMax: 1068,
    hAsc: 942,
    hDes: -235,
    lGap: 0
  }
};

function updateElement(element) {
  if (element.type === 'text' && element?.font?.family === 'Andada') {
    element.font = { ...element.font,
      ...andadaPro
    };
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (andadaFontToAndadaPro);

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

/***/ "./packages/migration/src/migrations/v0041_removeFontProperties.js":
/*!*************************************************************************!*\
  !*** ./packages/migration/src/migrations/v0041_removeFontProperties.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function removeFontProperties(_ref) {
  let {
    pages,
    ...rest
  } = _ref;
  return {
    pages: pages.map(reducePage),
    ...rest
  };
}

function reducePage(_ref2) {
  let {
    elements,
    ...rest
  } = _ref2;
  return {
    elements: elements.map(updateElement),
    ...rest
  };
}

function updateElement(element) {
  if (element.type === 'text') {
    const {
      id,
      name,
      value,
      ...newFontFormatted
    } = element.font;
    element.font = newFontFormatted;
  }

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeFontProperties);

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

/***/ "./packages/templates/src/constants.js":
/*!*********************************************!*\
  !*** ./packages/templates/src/constants.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEMPLATE_NAMES": () => (/* binding */ TEMPLATE_NAMES)
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
// @todo Enable two quiz templates when the interactivity is added to the web story editor.
// Assets and Stickers for these templates have already been added, to enable these template add them to
// the TEMPLATE_NAMES array.
// Templates need to be added:
//   1. 'beauty-quiz',
//   2. 'sports-quiz',
// See https://github.com/googleforcreators/web-stories-wp/issues/8725 for more details.
const TEMPLATE_NAMES = ['fresh-and-bright', 'food-and-stuff', 'doers-get-more-done', 'weekly-entertainment', 'fashion-on-the-go', 'no-days-off', 'experience-thailand', 'sleep', 'baking-bread-guide', 'sangria-artichoke', 'ways-to-eat-avocado', 'kitchen-stories', 'album-releases', 'almodos-films', 'pizzas-in-nyc', '12-hours-in-barcelona', 'ultimate-comparison', 'fitness-apps-ranked', 'street-style-on-the-go', 'plant-based-dyes', 'indoor-garden-oasis', 'belly-fat-workout', 'tv-show-recap', 'pride-month-watchlist', 'honeymooning-in-italy', 'ace-hotel-kyoto-review', 'how-video-calls-saved-the-day', 'laptop-buying-guide', 'diy-home-office', 'kitchen-makeover', 'self-care-guide', 'rock-music-festival', 'celebrity-q-and-a', 'los-angeles-city-guide', 'hawaii-travel-packing-list', 'google-music-studio-tour', 'how-contact-tracing-works', 'summer-fashion-collection', 'buying-art-on-the-internet', 'house-hunting', 'new-york-party-round-up', 'a-day-in-the-life', 'elegant-travel-itinerary', 'modernist-travel-guide', 'simple-tech-tutorial', 'magazine-article', 'fashion-inspiration', 'skin-care-at-home', 'art-books-gift-guide', 'vintage-chairs-buying-guide', 'celebrity-life-story', 'series-best-of', 'summer-adventure-guide', 'one-day-city-itinerary', 'technology-advice', 'sustainability-tips', 'an-artists-legacy', 'tips-for-throwing-an-outdoor-luau', 'all-about-cars'];

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

/***/ "./packages/templates/src/getMetaData.js":
/*!***********************************************!*\
  !*** ./packages/templates/src/getMetaData.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplateMetaData": () => (/* binding */ getTemplateMetaData)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/templates/src/constants.js");
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
 * Internal dependencies
 */

function getTemplateMetaData() {
  return Promise.all(_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_NAMES.map(title => __webpack_require__("./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/metaData\\.js$")(`./${title}/metaData.js`).then(data => data.default)));
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

/***/ "./packages/templates/src/getTemplates.js":
/*!************************************************!*\
  !*** ./packages/templates/src/getTemplates.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _googleforcreators_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googleforcreators/tracking */ "./packages/tracking/src/index.js");
/* harmony import */ var _googleforcreators_migration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googleforcreators/migration */ "./packages/migration/src/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/templates/src/constants.js");
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
 * Internal dependencies
 */



async function loadTemplate(title, imageBaseUrl) {
  const data = await __webpack_require__("./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/index\\.js$")(`./${title}/index.js`);
  const template = { ...data.default,
    pages: (data.default.pages || []).map(page => ({ ...page,
      elements: page.elements?.map(elem => {
        if (elem?.resource?.sizes) {
          elem.resource.sizes = [];
        }

        if (elem?.resource?.src) {
          // imageBaseUrl (cdnURL) will always have a trailing slash,
          // so make sure to avoid double slashes when replacing.
          elem.resource.src = elem.resource.src.replace('__WEB_STORIES_TEMPLATE_BASE_URL__/', imageBaseUrl);
        }

        if (elem?.resource?.poster) {
          // imageBaseUrl (cdnURL) will always have a trailing slash,
          // so make sure to avoid double slashes when replacing.
          elem.resource.poster = elem.resource.poster.replace('__WEB_STORIES_TEMPLATE_BASE_URL__/', imageBaseUrl);
        }

        return elem;
      })
    })),
    postersByPage: data.default.pages.map((page, i) => {
      const srcPath = `${imageBaseUrl}images/templates/${data.default.slug}/posters/${i + 1}`;
      return {
        webp: `${srcPath}.webp`,
        png: `${srcPath}.png`,
        type: data.default.pages[i].pageTemplateType
      };
    })
  };
  return { ...(0,_googleforcreators_migration__WEBPACK_IMPORTED_MODULE_2__.migrate)(template, template.version),
    version: _googleforcreators_migration__WEBPACK_IMPORTED_MODULE_2__.DATA_VERSION
  };
}

async function getTemplates(imageBaseUrl) {
  const trackTiming = (0,_googleforcreators_tracking__WEBPACK_IMPORTED_MODULE_1__.getTimeTracker)('load_templates');
  const templates = await Promise.all(_constants__WEBPACK_IMPORTED_MODULE_3__.TEMPLATE_NAMES.map(title => {
    return loadTemplate(title, imageBaseUrl);
  }));
  trackTiming();
  return templates;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTemplates);

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

/***/ "./packages/templates/src/index.js":
/*!*****************************************!*\
  !*** ./packages/templates/src/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllTemplates": () => (/* binding */ getAllTemplates),
/* harmony export */   "getTemplateMetaData": () => (/* reexport safe */ _getMetaData__WEBPACK_IMPORTED_MODULE_3__.getTemplateMetaData)
/* harmony export */ });
/* harmony import */ var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/memoize */ "./packages/templates/src/utils/memoize.js");
/* harmony import */ var _getTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTemplates */ "./packages/templates/src/getTemplates.js");
/* harmony import */ var _getMetaData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMetaData */ "./packages/templates/src/getMetaData.js");
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
 * Internal dependencies
 */


const memoizedGetTemplates = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(_getTemplates__WEBPACK_IMPORTED_MODULE_2__["default"]);
async function getAllTemplates(_ref) {
  let {
    cdnURL
  } = _ref;
  const templates = await memoizedGetTemplates(cdnURL);
  const globalConfig = {
    createdBy: 'Google',
    modified: '2020-04-21'
  };
  return templates.map((template, index) => {
    return {
      id: index + 1,
      ...globalConfig,
      ...template
    };
  });
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

/***/ "./packages/templates/src/utils/memoize.js":
/*!*************************************************!*\
  !*** ./packages/templates/src/utils/memoize.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _Users_nitinbagoriya_Desktop_nextbigstudio_web_story_creation_tool_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
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
function memoize(func) {
  let argsHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : args => args.join('-');
  const memoized = new Map();
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const key = argsHash(args);
    /**
     * The map value should only ever be undefined if
     * func has never been called with this arg key.
     *
     * This allows us to memoize functions with
     * `null` or `false` return values.
     */

    if (memoized.get(key) === undefined) {
      const value = func(...args);
      memoized.set(key, value === undefined ? 'IS_VOID' : value);
    }
    /**
     * `IS_VOID` is how we indicate that a function
     * has been called with a given argument key, and the return
     * value of that call was undefined.
     */


    if (memoized.get(key) === 'IS_VOID') {
      return undefined;
    }

    return memoized.get(key);
  };
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

/***/ "./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/index\\.js$":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/templates/src/raw/ lazy ^\.\/.*\/index\.js$ chunkName: chunk-web-stories-template-[index] namespace object ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./12-hours-in-barcelona/index.js": [
		"./packages/templates/src/raw/12-hours-in-barcelona/index.js",
		"chunk-web-stories-template-0"
	],
	"./a-day-in-the-life/index.js": [
		"./packages/templates/src/raw/a-day-in-the-life/index.js",
		"chunk-web-stories-template-1"
	],
	"./ace-hotel-kyoto-review/index.js": [
		"./packages/templates/src/raw/ace-hotel-kyoto-review/index.js",
		"chunk-web-stories-template-2"
	],
	"./album-releases/index.js": [
		"./packages/templates/src/raw/album-releases/index.js",
		"chunk-web-stories-template-3"
	],
	"./all-about-cars/index.js": [
		"./packages/templates/src/raw/all-about-cars/index.js",
		"chunk-web-stories-template-4"
	],
	"./almodos-films/index.js": [
		"./packages/templates/src/raw/almodos-films/index.js",
		"chunk-web-stories-template-5"
	],
	"./an-artists-legacy/index.js": [
		"./packages/templates/src/raw/an-artists-legacy/index.js",
		"chunk-web-stories-template-6"
	],
	"./art-books-gift-guide/index.js": [
		"./packages/templates/src/raw/art-books-gift-guide/index.js",
		"chunk-web-stories-template-7"
	],
	"./baking-bread-guide/index.js": [
		"./packages/templates/src/raw/baking-bread-guide/index.js",
		"chunk-web-stories-template-8"
	],
	"./beauty-quiz/index.js": [
		"./packages/templates/src/raw/beauty-quiz/index.js",
		"chunk-web-stories-template-9"
	],
	"./belly-fat-workout/index.js": [
		"./packages/templates/src/raw/belly-fat-workout/index.js",
		"chunk-web-stories-template-10"
	],
	"./buying-art-on-the-internet/index.js": [
		"./packages/templates/src/raw/buying-art-on-the-internet/index.js",
		"chunk-web-stories-template-11"
	],
	"./celebrity-life-story/index.js": [
		"./packages/templates/src/raw/celebrity-life-story/index.js",
		"chunk-web-stories-template-12"
	],
	"./celebrity-q-and-a/index.js": [
		"./packages/templates/src/raw/celebrity-q-and-a/index.js",
		"chunk-web-stories-template-13"
	],
	"./diy-home-office/index.js": [
		"./packages/templates/src/raw/diy-home-office/index.js",
		"chunk-web-stories-template-14"
	],
	"./doers-get-more-done/index.js": [
		"./packages/templates/src/raw/doers-get-more-done/index.js",
		"chunk-web-stories-template-15"
	],
	"./elegant-travel-itinerary/index.js": [
		"./packages/templates/src/raw/elegant-travel-itinerary/index.js",
		"chunk-web-stories-template-16"
	],
	"./experience-thailand/index.js": [
		"./packages/templates/src/raw/experience-thailand/index.js",
		"chunk-web-stories-template-17"
	],
	"./fashion-inspiration/index.js": [
		"./packages/templates/src/raw/fashion-inspiration/index.js",
		"chunk-web-stories-template-18"
	],
	"./fashion-on-the-go/index.js": [
		"./packages/templates/src/raw/fashion-on-the-go/index.js",
		"chunk-web-stories-template-19"
	],
	"./fitness-apps-ranked/index.js": [
		"./packages/templates/src/raw/fitness-apps-ranked/index.js",
		"chunk-web-stories-template-20"
	],
	"./food-and-stuff/index.js": [
		"./packages/templates/src/raw/food-and-stuff/index.js",
		"chunk-web-stories-template-21"
	],
	"./fresh-and-bright/index.js": [
		"./packages/templates/src/raw/fresh-and-bright/index.js",
		"chunk-web-stories-template-22"
	],
	"./google-music-studio-tour/index.js": [
		"./packages/templates/src/raw/google-music-studio-tour/index.js",
		"chunk-web-stories-template-23"
	],
	"./hawaii-travel-packing-list/index.js": [
		"./packages/templates/src/raw/hawaii-travel-packing-list/index.js",
		"chunk-web-stories-template-24"
	],
	"./honeymooning-in-italy/index.js": [
		"./packages/templates/src/raw/honeymooning-in-italy/index.js",
		"chunk-web-stories-template-25"
	],
	"./house-hunting/index.js": [
		"./packages/templates/src/raw/house-hunting/index.js",
		"chunk-web-stories-template-26"
	],
	"./how-contact-tracing-works/index.js": [
		"./packages/templates/src/raw/how-contact-tracing-works/index.js",
		"chunk-web-stories-template-27"
	],
	"./how-video-calls-saved-the-day/index.js": [
		"./packages/templates/src/raw/how-video-calls-saved-the-day/index.js",
		"chunk-web-stories-template-28"
	],
	"./indoor-garden-oasis/index.js": [
		"./packages/templates/src/raw/indoor-garden-oasis/index.js",
		"chunk-web-stories-template-29"
	],
	"./kitchen-makeover/index.js": [
		"./packages/templates/src/raw/kitchen-makeover/index.js",
		"chunk-web-stories-template-30"
	],
	"./kitchen-stories/index.js": [
		"./packages/templates/src/raw/kitchen-stories/index.js",
		"chunk-web-stories-template-31"
	],
	"./laptop-buying-guide/index.js": [
		"./packages/templates/src/raw/laptop-buying-guide/index.js",
		"chunk-web-stories-template-32"
	],
	"./los-angeles-city-guide/index.js": [
		"./packages/templates/src/raw/los-angeles-city-guide/index.js",
		"chunk-web-stories-template-33"
	],
	"./magazine-article/index.js": [
		"./packages/templates/src/raw/magazine-article/index.js",
		"chunk-web-stories-template-34"
	],
	"./modernist-travel-guide/index.js": [
		"./packages/templates/src/raw/modernist-travel-guide/index.js",
		"chunk-web-stories-template-35"
	],
	"./new-york-party-round-up/index.js": [
		"./packages/templates/src/raw/new-york-party-round-up/index.js",
		"chunk-web-stories-template-36"
	],
	"./no-days-off/index.js": [
		"./packages/templates/src/raw/no-days-off/index.js",
		"chunk-web-stories-template-37"
	],
	"./one-day-city-itinerary/index.js": [
		"./packages/templates/src/raw/one-day-city-itinerary/index.js",
		"chunk-web-stories-template-38"
	],
	"./pizzas-in-nyc/index.js": [
		"./packages/templates/src/raw/pizzas-in-nyc/index.js",
		"chunk-web-stories-template-39"
	],
	"./plant-based-dyes/index.js": [
		"./packages/templates/src/raw/plant-based-dyes/index.js",
		"chunk-web-stories-template-40"
	],
	"./pride-month-watchlist/index.js": [
		"./packages/templates/src/raw/pride-month-watchlist/index.js",
		"chunk-web-stories-template-41"
	],
	"./rock-music-festival/index.js": [
		"./packages/templates/src/raw/rock-music-festival/index.js",
		"chunk-web-stories-template-42"
	],
	"./sangria-artichoke/index.js": [
		"./packages/templates/src/raw/sangria-artichoke/index.js",
		"chunk-web-stories-template-43"
	],
	"./self-care-guide/index.js": [
		"./packages/templates/src/raw/self-care-guide/index.js",
		"chunk-web-stories-template-44"
	],
	"./series-best-of/index.js": [
		"./packages/templates/src/raw/series-best-of/index.js",
		"chunk-web-stories-template-45"
	],
	"./simple-tech-tutorial/index.js": [
		"./packages/templates/src/raw/simple-tech-tutorial/index.js",
		"chunk-web-stories-template-46"
	],
	"./skin-care-at-home/index.js": [
		"./packages/templates/src/raw/skin-care-at-home/index.js",
		"chunk-web-stories-template-47"
	],
	"./sleep/index.js": [
		"./packages/templates/src/raw/sleep/index.js",
		"chunk-web-stories-template-48"
	],
	"./sports-quiz/index.js": [
		"./packages/templates/src/raw/sports-quiz/index.js",
		"chunk-web-stories-template-49"
	],
	"./street-style-on-the-go/index.js": [
		"./packages/templates/src/raw/street-style-on-the-go/index.js",
		"chunk-web-stories-template-50"
	],
	"./summer-adventure-guide/index.js": [
		"./packages/templates/src/raw/summer-adventure-guide/index.js",
		"chunk-web-stories-template-51"
	],
	"./summer-fashion-collection/index.js": [
		"./packages/templates/src/raw/summer-fashion-collection/index.js",
		"chunk-web-stories-template-52"
	],
	"./sustainability-tips/index.js": [
		"./packages/templates/src/raw/sustainability-tips/index.js",
		"chunk-web-stories-template-53"
	],
	"./technology-advice/index.js": [
		"./packages/templates/src/raw/technology-advice/index.js",
		"chunk-web-stories-template-54"
	],
	"./tips-for-throwing-an-outdoor-luau/index.js": [
		"./packages/templates/src/raw/tips-for-throwing-an-outdoor-luau/index.js",
		"chunk-web-stories-template-55"
	],
	"./tv-show-recap/index.js": [
		"./packages/templates/src/raw/tv-show-recap/index.js",
		"chunk-web-stories-template-56"
	],
	"./ultimate-comparison/index.js": [
		"./packages/templates/src/raw/ultimate-comparison/index.js",
		"chunk-web-stories-template-57"
	],
	"./vintage-chairs-buying-guide/index.js": [
		"./packages/templates/src/raw/vintage-chairs-buying-guide/index.js",
		"chunk-web-stories-template-58"
	],
	"./ways-to-eat-avocado/index.js": [
		"./packages/templates/src/raw/ways-to-eat-avocado/index.js",
		"chunk-web-stories-template-59"
	],
	"./weekly-entertainment/index.js": [
		"./packages/templates/src/raw/weekly-entertainment/index.js",
		"chunk-web-stories-template-60"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/index\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/metaData\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/templates/src/raw/ lazy ^\.\/.*\/metaData\.js$ chunkName: chunk-web-stories-template-[index]-metaData namespace object ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./12-hours-in-barcelona/metaData.js": [
		"./packages/templates/src/raw/12-hours-in-barcelona/metaData.js",
		"chunk-web-stories-template-0-metaData"
	],
	"./a-day-in-the-life/metaData.js": [
		"./packages/templates/src/raw/a-day-in-the-life/metaData.js",
		"chunk-web-stories-template-1-metaData"
	],
	"./ace-hotel-kyoto-review/metaData.js": [
		"./packages/templates/src/raw/ace-hotel-kyoto-review/metaData.js",
		"chunk-web-stories-template-2-metaData"
	],
	"./album-releases/metaData.js": [
		"./packages/templates/src/raw/album-releases/metaData.js",
		"chunk-web-stories-template-3-metaData"
	],
	"./all-about-cars/metaData.js": [
		"./packages/templates/src/raw/all-about-cars/metaData.js",
		"chunk-web-stories-template-4-metaData"
	],
	"./almodos-films/metaData.js": [
		"./packages/templates/src/raw/almodos-films/metaData.js",
		"chunk-web-stories-template-5-metaData"
	],
	"./an-artists-legacy/metaData.js": [
		"./packages/templates/src/raw/an-artists-legacy/metaData.js",
		"chunk-web-stories-template-6-metaData"
	],
	"./art-books-gift-guide/metaData.js": [
		"./packages/templates/src/raw/art-books-gift-guide/metaData.js",
		"chunk-web-stories-template-7-metaData"
	],
	"./baking-bread-guide/metaData.js": [
		"./packages/templates/src/raw/baking-bread-guide/metaData.js",
		"chunk-web-stories-template-8-metaData"
	],
	"./beauty-quiz/metaData.js": [
		"./packages/templates/src/raw/beauty-quiz/metaData.js",
		"chunk-web-stories-template-9-metaData"
	],
	"./belly-fat-workout/metaData.js": [
		"./packages/templates/src/raw/belly-fat-workout/metaData.js",
		"chunk-web-stories-template-10-metaData"
	],
	"./buying-art-on-the-internet/metaData.js": [
		"./packages/templates/src/raw/buying-art-on-the-internet/metaData.js",
		"chunk-web-stories-template-11-metaData"
	],
	"./celebrity-life-story/metaData.js": [
		"./packages/templates/src/raw/celebrity-life-story/metaData.js",
		"chunk-web-stories-template-12-metaData"
	],
	"./celebrity-q-and-a/metaData.js": [
		"./packages/templates/src/raw/celebrity-q-and-a/metaData.js",
		"chunk-web-stories-template-13-metaData"
	],
	"./diy-home-office/metaData.js": [
		"./packages/templates/src/raw/diy-home-office/metaData.js",
		"chunk-web-stories-template-14-metaData"
	],
	"./doers-get-more-done/metaData.js": [
		"./packages/templates/src/raw/doers-get-more-done/metaData.js",
		"chunk-web-stories-template-15-metaData"
	],
	"./elegant-travel-itinerary/metaData.js": [
		"./packages/templates/src/raw/elegant-travel-itinerary/metaData.js",
		"chunk-web-stories-template-16-metaData"
	],
	"./experience-thailand/metaData.js": [
		"./packages/templates/src/raw/experience-thailand/metaData.js",
		"chunk-web-stories-template-17-metaData"
	],
	"./fashion-inspiration/metaData.js": [
		"./packages/templates/src/raw/fashion-inspiration/metaData.js",
		"chunk-web-stories-template-18-metaData"
	],
	"./fashion-on-the-go/metaData.js": [
		"./packages/templates/src/raw/fashion-on-the-go/metaData.js",
		"chunk-web-stories-template-19-metaData"
	],
	"./fitness-apps-ranked/metaData.js": [
		"./packages/templates/src/raw/fitness-apps-ranked/metaData.js",
		"chunk-web-stories-template-20-metaData"
	],
	"./food-and-stuff/metaData.js": [
		"./packages/templates/src/raw/food-and-stuff/metaData.js",
		"chunk-web-stories-template-21-metaData"
	],
	"./fresh-and-bright/metaData.js": [
		"./packages/templates/src/raw/fresh-and-bright/metaData.js",
		"chunk-web-stories-template-22-metaData"
	],
	"./google-music-studio-tour/metaData.js": [
		"./packages/templates/src/raw/google-music-studio-tour/metaData.js",
		"chunk-web-stories-template-23-metaData"
	],
	"./hawaii-travel-packing-list/metaData.js": [
		"./packages/templates/src/raw/hawaii-travel-packing-list/metaData.js",
		"chunk-web-stories-template-24-metaData"
	],
	"./honeymooning-in-italy/metaData.js": [
		"./packages/templates/src/raw/honeymooning-in-italy/metaData.js",
		"chunk-web-stories-template-25-metaData"
	],
	"./house-hunting/metaData.js": [
		"./packages/templates/src/raw/house-hunting/metaData.js",
		"chunk-web-stories-template-26-metaData"
	],
	"./how-contact-tracing-works/metaData.js": [
		"./packages/templates/src/raw/how-contact-tracing-works/metaData.js",
		"chunk-web-stories-template-27-metaData"
	],
	"./how-video-calls-saved-the-day/metaData.js": [
		"./packages/templates/src/raw/how-video-calls-saved-the-day/metaData.js",
		"chunk-web-stories-template-28-metaData"
	],
	"./indoor-garden-oasis/metaData.js": [
		"./packages/templates/src/raw/indoor-garden-oasis/metaData.js",
		"chunk-web-stories-template-29-metaData"
	],
	"./kitchen-makeover/metaData.js": [
		"./packages/templates/src/raw/kitchen-makeover/metaData.js",
		"chunk-web-stories-template-30-metaData"
	],
	"./kitchen-stories/metaData.js": [
		"./packages/templates/src/raw/kitchen-stories/metaData.js",
		"chunk-web-stories-template-31-metaData"
	],
	"./laptop-buying-guide/metaData.js": [
		"./packages/templates/src/raw/laptop-buying-guide/metaData.js",
		"chunk-web-stories-template-32-metaData"
	],
	"./los-angeles-city-guide/metaData.js": [
		"./packages/templates/src/raw/los-angeles-city-guide/metaData.js",
		"chunk-web-stories-template-33-metaData"
	],
	"./magazine-article/metaData.js": [
		"./packages/templates/src/raw/magazine-article/metaData.js",
		"chunk-web-stories-template-34-metaData"
	],
	"./modernist-travel-guide/metaData.js": [
		"./packages/templates/src/raw/modernist-travel-guide/metaData.js",
		"chunk-web-stories-template-35-metaData"
	],
	"./new-york-party-round-up/metaData.js": [
		"./packages/templates/src/raw/new-york-party-round-up/metaData.js",
		"chunk-web-stories-template-36-metaData"
	],
	"./no-days-off/metaData.js": [
		"./packages/templates/src/raw/no-days-off/metaData.js",
		"chunk-web-stories-template-37-metaData"
	],
	"./one-day-city-itinerary/metaData.js": [
		"./packages/templates/src/raw/one-day-city-itinerary/metaData.js",
		"chunk-web-stories-template-38-metaData"
	],
	"./pizzas-in-nyc/metaData.js": [
		"./packages/templates/src/raw/pizzas-in-nyc/metaData.js",
		"chunk-web-stories-template-39-metaData"
	],
	"./plant-based-dyes/metaData.js": [
		"./packages/templates/src/raw/plant-based-dyes/metaData.js",
		"chunk-web-stories-template-40-metaData"
	],
	"./pride-month-watchlist/metaData.js": [
		"./packages/templates/src/raw/pride-month-watchlist/metaData.js",
		"chunk-web-stories-template-41-metaData"
	],
	"./rock-music-festival/metaData.js": [
		"./packages/templates/src/raw/rock-music-festival/metaData.js",
		"chunk-web-stories-template-42-metaData"
	],
	"./sangria-artichoke/metaData.js": [
		"./packages/templates/src/raw/sangria-artichoke/metaData.js",
		"chunk-web-stories-template-43-metaData"
	],
	"./self-care-guide/metaData.js": [
		"./packages/templates/src/raw/self-care-guide/metaData.js",
		"chunk-web-stories-template-44-metaData"
	],
	"./series-best-of/metaData.js": [
		"./packages/templates/src/raw/series-best-of/metaData.js",
		"chunk-web-stories-template-45-metaData"
	],
	"./simple-tech-tutorial/metaData.js": [
		"./packages/templates/src/raw/simple-tech-tutorial/metaData.js",
		"chunk-web-stories-template-46-metaData"
	],
	"./skin-care-at-home/metaData.js": [
		"./packages/templates/src/raw/skin-care-at-home/metaData.js",
		"chunk-web-stories-template-47-metaData"
	],
	"./sleep/metaData.js": [
		"./packages/templates/src/raw/sleep/metaData.js",
		"chunk-web-stories-template-48-metaData"
	],
	"./sports-quiz/metaData.js": [
		"./packages/templates/src/raw/sports-quiz/metaData.js",
		"chunk-web-stories-template-49-metaData"
	],
	"./street-style-on-the-go/metaData.js": [
		"./packages/templates/src/raw/street-style-on-the-go/metaData.js",
		"chunk-web-stories-template-50-metaData"
	],
	"./summer-adventure-guide/metaData.js": [
		"./packages/templates/src/raw/summer-adventure-guide/metaData.js",
		"chunk-web-stories-template-51-metaData"
	],
	"./summer-fashion-collection/metaData.js": [
		"./packages/templates/src/raw/summer-fashion-collection/metaData.js",
		"chunk-web-stories-template-52-metaData"
	],
	"./sustainability-tips/metaData.js": [
		"./packages/templates/src/raw/sustainability-tips/metaData.js",
		"chunk-web-stories-template-53-metaData"
	],
	"./technology-advice/metaData.js": [
		"./packages/templates/src/raw/technology-advice/metaData.js",
		"chunk-web-stories-template-54-metaData"
	],
	"./tips-for-throwing-an-outdoor-luau/metaData.js": [
		"./packages/templates/src/raw/tips-for-throwing-an-outdoor-luau/metaData.js",
		"chunk-web-stories-template-55-metaData"
	],
	"./tv-show-recap/metaData.js": [
		"./packages/templates/src/raw/tv-show-recap/metaData.js",
		"chunk-web-stories-template-56-metaData"
	],
	"./ultimate-comparison/metaData.js": [
		"./packages/templates/src/raw/ultimate-comparison/metaData.js",
		"chunk-web-stories-template-57-metaData"
	],
	"./vintage-chairs-buying-guide/metaData.js": [
		"./packages/templates/src/raw/vintage-chairs-buying-guide/metaData.js",
		"chunk-web-stories-template-58-metaData"
	],
	"./ways-to-eat-avocado/metaData.js": [
		"./packages/templates/src/raw/ways-to-eat-avocado/metaData.js",
		"chunk-web-stories-template-59-metaData"
	],
	"./weekly-entertainment/metaData.js": [
		"./packages/templates/src/raw/weekly-entertainment/metaData.js",
		"chunk-web-stories-template-60-metaData"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./packages/templates/src/raw lazy recursive ^\\.\\/.*\\/metaData\\.js$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=chunk-web-stories-templates.js.map