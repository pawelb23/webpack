/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/css/style.css":
      /*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-szkolenie-2/./src/css/style.css?"
        );

        /***/
      },

    /***/ "./src/js/main.js":
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ "./src/js/sum.js");\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sum__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");\n\n\nconsole.log("Hello World");\nconsole.log((0,_sum__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 3, 5));\n\nlet heading = document.querySelector("#demo"),\n  sumValue = (0,_sum__WEBPACK_IMPORTED_MODULE_0__.sum)(5, 10, 15);\nheading.innerHTML = `5 + 10 + 15 = ${sumValue}`;\n\ndocument.querySelector(\n  "#demo-two .basic-info"\n).innerHTML = `Ćwiczenia z wykorzystaniem Webpack ---\nodczyt na `;\nlet localHostAddress = document.querySelector("#demo-two .local-host");\n\nlocalHostAddress.innerHTML = `"localhost:9000"`;\n\n\n//# sourceURL=webpack://webpack-szkolenie-2/./src/js/main.js?'
        );

        /***/
      },

    /***/ "./src/js/sum.js":
      /*!***********************!*\
  !*** ./src/js/sum.js ***!
  \***********************/
      /***/ (module) => {
        eval(
          "function sum(a, b, c) {\n  return a + b + c;\n}\nmodule.exports = {\n  sum,\n};\n\n\n//# sourceURL=webpack://webpack-szkolenie-2/./src/js/sum.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/js/main.js");
  /******/
  /******/
})();
