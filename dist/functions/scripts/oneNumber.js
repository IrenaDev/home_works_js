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

/***/ "./src/pages/functions/scripts/oneNumber.js":
/*!**************************************************!*\
  !*** ./src/pages/functions/scripts/oneNumber.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   oneNumber: () => (/* binding */ oneNumber)\n/* harmony export */ });\nfunction oneNumber() {\n  // Vars\n  var btn = document.getElementById('sendOneNumber');\n  var modalBodyText = document.getElementById('modal-text');\n  function getNumbers(numb1, numb2, numb3) {\n    modalBodyText.textContent = parseInt(numb1.toString() + numb2.toString() + numb3.toString());\n\n    // For test\n    console.log(parseInt(numb1.toString() + numb2.toString() + numb3.toString()));\n  }\n\n  /*---------------------------------\n    Get numbers from DOM\n  ---------------------------------*/\n  btn.addEventListener('click', function () {\n    var firstNumber = document.getElementById('oneNumberFirst').value;\n    var secondNumber = document.getElementById('oneNumberSecond').value;\n    var thirdNumber = document.getElementById('checkThirdNumber').value;\n    getNumbers(firstNumber, secondNumber, thirdNumber);\n  });\n}\n\n//# sourceURL=webpack://starter-template/./src/pages/functions/scripts/oneNumber.js?");

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
/******/ 	__webpack_modules__["./src/pages/functions/scripts/oneNumber.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;