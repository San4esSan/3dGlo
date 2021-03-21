/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/toForm.js":
/*!*******************************!*\
  !*** ./src/modules/toForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar toForm = function toForm() {\n  var form = document.querySelectorAll('form');\n\n  var toTitleCase = function toTitleCase(str) {\n    return str.toLowerCase().split(' ').map(function (word) {\n      return word.charAt(0).toUpperCase() + word.slice(1);\n    }).join(' ');\n  };\n\n  var toString = function toString(str) {\n    return str.replace(/-+/g, '-').replace(/ +/g, ' ').replace(/^ +/gm, '').replace(/^-/g, '').replace(/-$/g, '');\n  };\n\n  var validateElem = function validateElem(elem) {\n    switch (elem.name) {\n      case 'user_name':\n        elem.value = toTitleCase(elem.value);\n        elem.value = toString(elem.value);\n        break;\n\n      case 'user_email':\n        elem.value = toString(elem.value).toLowerCase();\n        break;\n\n      case 'user_phone':\n        elem.value = toString(elem.value);\n        break;\n\n      case 'user_message':\n        elem.value = elem.value.charAt(0).toUpperCase() + elem.value.toLowerCase().slice(1);\n        elem.value = toString(elem.value);\n        break;\n    }\n  };\n\n  var inputRestriction = function inputRestriction(elem) {\n    if (elem.name === 'user_name') {\n      elem.value = elem.value.replace(/[^а-я\\s-]/ig, '');\n    }\n\n    if (elem.name === 'user_email') {\n      elem.value = elem.value.replace(/[^a-z.@\\-_*'!~]/ig, '');\n    }\n\n    if (elem.name === 'user_phone') {\n      elem.value = elem.value.replace(/[^0-9()-]/ig, '');\n    }\n  };\n\n  var _loop = function _loop(i) {\n    var elementsForm = [];\n    form[i].addEventListener('submit', function (event) {\n      event.preventDefault();\n      elementsForm.forEach(function (elem) {\n        if (!elem.value) {\n          elem.style = 'border: 5px solid red;';\n        } else {\n          elem.style.border = 'none';\n        }\n      });\n    });\n\n    var _iterator = _createForOfIteratorHelper(form[i].elements),\n        _step;\n\n    try {\n      var _loop2 = function _loop2() {\n        var elem = _step.value;\n\n        if (elem.tagName !== 'BUTTON') {\n          elementsForm.push(elem);\n          elem.addEventListener('input', function () {\n            inputRestriction(elem);\n          });\n          elem.addEventListener('blur', function () {\n            validateElem(elem);\n          });\n        }\n      };\n\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop2();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var i = 0; i < form.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/toForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45d8f3fa024c7e294217")
/******/ })();
/******/ 
/******/ }
);