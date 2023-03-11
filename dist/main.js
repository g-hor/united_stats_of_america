/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map.js */ \"./src/scripts/map.js\");\n// import Example from \"./scripts/example.js\"; // syntax to import our class file\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log('wassup world');\n  // console.log('u ok buddy');\n\n  // const main = document.getElementById(\"main\"); // grabs HTML element to instantiate new Class instance\n  // new Example(main); \n\n  (0,_scripts_map_js__WEBPACK_IMPORTED_MODULE_0__.renderMap)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM2QztBQUU3Q0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xEO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQUYsMERBQVMsRUFBRTtBQUNiLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRlX3N0YXRzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlLmpzXCI7IC8vIHN5bnRheCB0byBpbXBvcnQgb3VyIGNsYXNzIGZpbGVcbmltcG9ydCB7IHJlbmRlck1hcCB9IGZyb20gXCIuL3NjcmlwdHMvbWFwLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ3dhc3N1cCB3b3JsZCcpO1xuICAvLyBjb25zb2xlLmxvZygndSBvayBidWRkeScpO1xuXG4gIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7IC8vIGdyYWJzIEhUTUwgZWxlbWVudCB0byBpbnN0YW50aWF0ZSBuZXcgQ2xhc3MgaW5zdGFuY2VcbiAgLy8gbmV3IEV4YW1wbGUobWFpbik7IFxuICBcbiAgcmVuZGVyTWFwKCk7XG59KSJdLCJuYW1lcyI6WyJyZW5kZXJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMap\": function() { return /* binding */ renderMap; }\n/* harmony export */ });\nfunction renderMap() {\n  const width = 900;\n  const height = 600;\n  const svg = d3.select('svg').attr('width', width).attr('height', height);\n  const projection = d3.geoAlbersUsa().scale(500).translate([width / 2, height / 1.4]);\n  const path = d3.geoPath(projection);\n  const g = svg.append('g');\n  fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`).then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw new Error(response);\n    }\n  }).then(data => {\n    const states = topojson.feature(data, data.objects.states);\n    g.selectAll('path').data(states.features).enter().append('path').attr('class', 'state').attr('d', path);\n  });\n\n  // d3.json(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)\n  //   .then(data => {\n  //     const states = topojson.feature(data, data.objects.states);\n  //     g.selectAll('path')\n  //       .data(states.features)\n  //       .enter()\n  //       .append('path')\n  //       .attr('class', 'state')\n  //       .attr('d', path);\n  //   });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLFNBQVNBLENBQUEsRUFBRztFQUUxQixNQUFNQyxLQUFLLEdBQUcsR0FBRztFQUNqQixNQUFNQyxNQUFNLEdBQUcsR0FBRztFQUVsQixNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FDWEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNiQyxJQUFJLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FDcEJLLElBQUksQ0FBQyxRQUFRLEVBQUVKLE1BQU0sQ0FBQztFQUV6QixNQUFNSyxVQUFVLEdBQUdILEVBQUUsQ0FDbEJJLFlBQVksRUFBRSxDQUNkQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1ZDLFNBQVMsQ0FBQyxDQUFDVCxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFFdkMsTUFBTVMsSUFBSSxHQUFHUCxFQUFFLENBQUNRLE9BQU8sQ0FBQ0wsVUFBVSxDQUFDO0VBQ25DLE1BQU1NLENBQUMsR0FBR1YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDO0VBRXpCQyxLQUFLLENBQUUseURBQXdELENBQUMsQ0FDN0RDLElBQUksQ0FBQ0MsUUFBUSxJQUFJO0lBQ2hCLElBQUlBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2YsT0FBT0QsUUFBUSxDQUFDRSxJQUFJLEVBQUU7SUFDeEIsQ0FBQyxNQUFNO01BQ0wsTUFBTSxJQUFJQyxLQUFLLENBQUNILFFBQVEsQ0FBQztJQUMzQjtFQUNGLENBQUMsQ0FBQyxDQUNERCxJQUFJLENBQUNLLElBQUksSUFBSTtJQUNaLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxPQUFPLENBQUNILElBQUksRUFBRUEsSUFBSSxDQUFDSSxPQUFPLENBQUNILE1BQU0sQ0FBQztJQUUxRFQsQ0FBQyxDQUFDYSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQ2hCTCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDLENBQ3JCQyxLQUFLLEVBQUUsQ0FDUGQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNkUixJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUN0QkEsSUFBSSxDQUFDLEdBQUcsRUFBRUssSUFBSSxDQUFDO0VBQ3BCLENBQUMsQ0FBQzs7RUFHSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGVfc3RhdHMvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFwKCkge1xuXG4gIGNvbnN0IHdpZHRoID0gOTAwO1xuICBjb25zdCBoZWlnaHQgPSA2MDA7XG5cbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuICBcbiAgY29uc3QgcHJvamVjdGlvbiA9IGQzXG4gICAgLmdlb0FsYmVyc1VzYSgpXG4gICAgLnNjYWxlKDUwMClcbiAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIsIGhlaWdodCAvIDEuNF0pO1xuXG4gIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24pO1xuICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG4gIGZldGNoKGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3VzLWF0bGFzQDMvc3RhdGVzLTEwbS5qc29uYClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLnN0YXRlcyk7XG5cbiAgICAgIGcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEoc3RhdGVzLmZlYXR1cmVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N0YXRlJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbiAgICB9KTtcblxuXG4gIC8vIGQzLmpzb24oYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdXMtYXRsYXNAMy9zdGF0ZXMtMTBtLmpzb25gKVxuICAvLyAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgY29uc3Qgc3RhdGVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuc3RhdGVzKTtcbiAgLy8gICAgIGcuc2VsZWN0QWxsKCdwYXRoJylcbiAgLy8gICAgICAgLmRhdGEoc3RhdGVzLmZlYXR1cmVzKVxuICAvLyAgICAgICAuZW50ZXIoKVxuICAvLyAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgLy8gICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N0YXRlJylcbiAgLy8gICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbiAgLy8gICB9KTtcbn0iXSwibmFtZXMiOlsicmVuZGVyTWFwIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJwcm9qZWN0aW9uIiwiZ2VvQWxiZXJzVXNhIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJwYXRoIiwiZ2VvUGF0aCIsImciLCJhcHBlbmQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIkVycm9yIiwiZGF0YSIsInN0YXRlcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0ZV9zdGF0cy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;