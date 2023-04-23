/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/blurhash/dist/esm/base83.js":
/*!**************************************************!*\
  !*** ./node_modules/blurhash/dist/esm/base83.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode83": () => (/* binding */ decode83),
/* harmony export */   "encode83": () => (/* binding */ encode83)
/* harmony export */ });
const digitCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "#",
    "$",
    "%",
    "*",
    "+",
    ",",
    "-",
    ".",
    ":",
    ";",
    "=",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~"
];
const decode83 = (str) => {
    let value = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        const digit = digitCharacters.indexOf(c);
        value = value * 83 + digit;
    }
    return value;
};
const encode83 = (n, length) => {
    var result = "";
    for (let i = 1; i <= length; i++) {
        let digit = (Math.floor(n) / Math.pow(83, length - i)) % 83;
        result += digitCharacters[Math.floor(digit)];
    }
    return result;
};


/***/ }),

/***/ "./node_modules/blurhash/dist/esm/encode.js":
/*!**************************************************!*\
  !*** ./node_modules/blurhash/dist/esm/encode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base83__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base83 */ "./node_modules/blurhash/dist/esm/base83.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/blurhash/dist/esm/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/blurhash/dist/esm/error.js");



const bytesPerPixel = 4;
const multiplyBasisFunction = (pixels, width, height, basisFunction) => {
    let r = 0;
    let g = 0;
    let b = 0;
    const bytesPerRow = width * bytesPerPixel;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const basis = basisFunction(x, y);
            r +=
                basis * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sRGBToLinear)(pixels[bytesPerPixel * x + 0 + y * bytesPerRow]);
            g +=
                basis * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sRGBToLinear)(pixels[bytesPerPixel * x + 1 + y * bytesPerRow]);
            b +=
                basis * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sRGBToLinear)(pixels[bytesPerPixel * x + 2 + y * bytesPerRow]);
        }
    }
    let scale = 1 / (width * height);
    return [r * scale, g * scale, b * scale];
};
const encodeDC = (value) => {
    const roundedR = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.linearTosRGB)(value[0]);
    const roundedG = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.linearTosRGB)(value[1]);
    const roundedB = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.linearTosRGB)(value[2]);
    return (roundedR << 16) + (roundedG << 8) + roundedB;
};
const encodeAC = (value, maximumValue) => {
    let quantR = Math.floor(Math.max(0, Math.min(18, Math.floor((0,_utils__WEBPACK_IMPORTED_MODULE_0__.signPow)(value[0] / maximumValue, 0.5) * 9 + 9.5))));
    let quantG = Math.floor(Math.max(0, Math.min(18, Math.floor((0,_utils__WEBPACK_IMPORTED_MODULE_0__.signPow)(value[1] / maximumValue, 0.5) * 9 + 9.5))));
    let quantB = Math.floor(Math.max(0, Math.min(18, Math.floor((0,_utils__WEBPACK_IMPORTED_MODULE_0__.signPow)(value[2] / maximumValue, 0.5) * 9 + 9.5))));
    return quantR * 19 * 19 + quantG * 19 + quantB;
};
const encode = (pixels, width, height, componentX, componentY) => {
    if (componentX < 1 || componentX > 9 || componentY < 1 || componentY > 9) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__.ValidationError("BlurHash must have between 1 and 9 components");
    }
    if (width * height * 4 !== pixels.length) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__.ValidationError("Width and height must match the pixels array");
    }
    let factors = [];
    for (let y = 0; y < componentY; y++) {
        for (let x = 0; x < componentX; x++) {
            const normalisation = x == 0 && y == 0 ? 1 : 2;
            const factor = multiplyBasisFunction(pixels, width, height, (i, j) => normalisation *
                Math.cos((Math.PI * x * i) / width) *
                Math.cos((Math.PI * y * j) / height));
            factors.push(factor);
        }
    }
    const dc = factors[0];
    const ac = factors.slice(1);
    let hash = "";
    let sizeFlag = componentX - 1 + (componentY - 1) * 9;
    hash += (0,_base83__WEBPACK_IMPORTED_MODULE_2__.encode83)(sizeFlag, 1);
    let maximumValue;
    if (ac.length > 0) {
        let actualMaximumValue = Math.max(...ac.map(val => Math.max(...val)));
        let quantisedMaximumValue = Math.floor(Math.max(0, Math.min(82, Math.floor(actualMaximumValue * 166 - 0.5))));
        maximumValue = (quantisedMaximumValue + 1) / 166;
        hash += (0,_base83__WEBPACK_IMPORTED_MODULE_2__.encode83)(quantisedMaximumValue, 1);
    }
    else {
        maximumValue = 1;
        hash += (0,_base83__WEBPACK_IMPORTED_MODULE_2__.encode83)(0, 1);
    }
    hash += (0,_base83__WEBPACK_IMPORTED_MODULE_2__.encode83)(encodeDC(dc), 4);
    ac.forEach(factor => {
        hash += (0,_base83__WEBPACK_IMPORTED_MODULE_2__.encode83)(encodeAC(factor, maximumValue), 2);
    });
    return hash;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (encode);


/***/ }),

/***/ "./node_modules/blurhash/dist/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/blurhash/dist/esm/error.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationError": () => (/* binding */ ValidationError)
/* harmony export */ });
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.message = message;
    }
}


/***/ }),

/***/ "./node_modules/blurhash/dist/esm/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/blurhash/dist/esm/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linearTosRGB": () => (/* binding */ linearTosRGB),
/* harmony export */   "sRGBToLinear": () => (/* binding */ sRGBToLinear),
/* harmony export */   "sign": () => (/* binding */ sign),
/* harmony export */   "signPow": () => (/* binding */ signPow)
/* harmony export */ });
const sRGBToLinear = (value) => {
    let v = value / 255;
    if (v <= 0.04045) {
        return v / 12.92;
    }
    else {
        return Math.pow((v + 0.055) / 1.055, 2.4);
    }
};
const linearTosRGB = (value) => {
    let v = Math.max(0, Math.min(1, value));
    if (v <= 0.0031308) {
        return Math.round(v * 12.92 * 255 + 0.5);
    }
    else {
        return Math.round((1.055 * Math.pow(v, 1 / 2.4) - 0.055) * 255 + 0.5);
    }
};
const sign = (n) => (n < 0 ? -1 : 1);
const signPow = (val, exp) => sign(val) * Math.pow(Math.abs(val), exp);


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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[2].use[0]!./node_modules/source-map-loader/dist/cjs.js!./packages/story-editor/src/utils/generateBlurhash.worker.js ***!
  \**************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blurhash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blurhash */ "./node_modules/blurhash/dist/esm/encode.js");
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


const callback = function (event) {
  const {
    image,
    width,
    height,
    componentX,
    componentY
  } = event.data;

  try {
    const blurHash = (0,blurhash__WEBPACK_IMPORTED_MODULE_0__["default"])(image, width, height, componentX, componentY);
    postMessage({
      type: 'success',
      blurHash
    });
  } catch (error) {
    postMessage({
      type: 'error',
      error
    });
  }
};

self.onmessage = callback; // Only needed for Rollup, not webpack v4.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  callback
});
})();

/******/ })()
;
//# sourceMappingURL=generateBlurhash.worker.worker.js.map