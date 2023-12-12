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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorial: () => (/* binding */ factorial)\n/* harmony export */ });\nfunction factorial(num) {\n  var result = 0;\n  if (isNaN(num)) {\n    throw new Error(\"Not a number\");\n  }\n  if (num < 0) {\n    throw new Error(\"error\");\n  }\n  var calculation = function calculation(n) {\n    return result = n ? n * calculation(n - 1) : 1;\n  }; //(this) anonymos function\n  calculation(num);\n  // (function calc(n = num) {\n  //   return (result = n ? n * calc(n - 1) : 1);\n  // })();\n  console.log(\"\\u0412\\u0438 \\u0432\\u0435\\u043B\\u0438 \".concat(num, \", \\u0424\\u0410\\u041A\\u0422\\u041E\\u0420\\u0406\\u0410\\u041B \\u0426\\u042C\\u041E\\u0413\\u041E \\u0427\\u0418\\u0421\\u041B\\u0410 \").concat(result));\n}\nfactorial(7);\n\n//# sourceURL=webpack://starter-template/./src/pages/functions/scripts/factorial.js?");

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