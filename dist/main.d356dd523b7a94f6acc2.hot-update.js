/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/countTimmer.js":
/*!************************************!*\
  !*** ./src/modules/countTimmer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60),\n        day = Math.floor(timeRemaining / 60 / 60 / 24);\n\n    if (dateStop >= dateNow) {\n      return {\n        timeRemaining: timeRemaining,\n        hours: hours,\n        minutes: minutes,\n        seconds: seconds\n      };\n    } else {\n      return {\n        seconds: '0',\n        minutes: '0',\n        hours: '0',\n        day: '0'\n      };\n    }\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.hours < 10) {\n      timerHours.textContent = '0' + timer.hours;\n    } else {\n      timerHours.textContent = timer.hours;\n    }\n\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = '0' + timer.minutes;\n    } else {\n      timerMinutes.textContent = timer.minutes;\n    }\n\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = '0' + timer.seconds;\n    } else {\n      timerSeconds.textContent = timer.seconds;\n    }\n  }\n\n  setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dGlo/./src/modules/countTimmer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6309caaae1509d58f650")
/******/ })();
/******/ 
/******/ }
);