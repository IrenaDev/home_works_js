/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/functions/scripts/factorial.js":
/*!**************************************************!*\
  !*** ./src/pages/functions/scripts/factorial.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFactorial: () => (/* binding */ getFactorial)\n/* harmony export */ });\nfunction getFactorial() {\n  var btn = document.getElementById('sendfactorialtNumber');\n  var modalBodyText = document.getElementById('modal-text');\n\n  /*---------------------------------\n    Galculation factorial\n  ---------------------------------*/\n  function factorial(num) {\n    var result = 0;\n    if (isNaN(num)) {\n      throw new Error(\"Not a number\");\n    }\n    if (num < 0) {\n      throw new Error(\"error\");\n    }\n    var calculation = function calculation(n) {\n      return result = n ? n * calculation(n - 1) : 1;\n    };\n    calculation(num);\n    modalBodyText.textContent = \"The factorial number \".concat(num, \" is \").concat(result);\n\n    // For test\n    console.log(\"The factorial number \".concat(num, \" is \").concat(result));\n  }\n\n  /*---------------------------------\n    Get numbers from DOM\n  ---------------------------------*/\n  btn.addEventListener('click', function () {\n    var factorialtNumber = document.getElementById('factorialtNumber').value;\n    factorial(factorialtNumber);\n  });\n}\n\n//# sourceURL=webpack://starter-template/./src/pages/functions/scripts/factorial.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/functions/scripts/factorial.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;