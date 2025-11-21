/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API: () => (/* binding */ API)\n/* harmony export */ });\nconst API = (function () {\n  const API_KEY = \"646F58SJD4EETAUKPMLB7BGX6\";\n  const getForecast = async function (location) {\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`;\n    const response = await fetch(url);\n    const forecastData = await response.json();\n    return forecastData;\n  };\n\n  return { getForecast };\n})();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsU0FBUyxRQUFRLFFBQVE7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanM/ZDcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUEkgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBBUElfS0VZID0gXCI2NDZGNThTSkQ0RUVUQVVLUE1MQjdCR1g2XCI7XG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259Lz9rZXk9JHtBUElfS0VZfWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xuICB9O1xuXG4gIHJldHVybiB7IGdldEZvcmVjYXN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBBUEkgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\nconst searchBtn = document.getElementById(\"search-button\");\nconst searchBox = document.getElementById(\"search-location\");\nsearchBtn.addEventListener(\"click\", async () => {\n  if (searchBox.value === \"\") return;\n  const weatherData = await _api_js__WEBPACK_IMPORTED_MODULE_0__.API.getForecast(searchBox.value);\n  _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.renderData(weatherData);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQStCO0FBQ0Y7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdDQUFHO0FBQy9CLEVBQUUsc0NBQUU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi9hcGkuanNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWkuanNcIjtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbG9jYXRpb25cIik7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgaWYgKHNlYXJjaEJveC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IEFQSS5nZXRGb3JlY2FzdChzZWFyY2hCb3gudmFsdWUpO1xuICBVSS5yZW5kZXJEYXRhKHdlYXRoZXJEYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\nconst UI = (function () {\n  const elements = {\n    weatherInfo: document.getElementById(\"weather-info\"),\n  };\n\n  const renderData = (weatherData) => {\n    elements.weatherInfo.innerHTML = \"\";\n    const cityName = document.createElement(\"div\");\n    const conditions = document.createElement(\"div\");\n    const feelsLike = document.createElement(\"div\");\n    const humidity = document.createElement(\"div\");\n    const temp = document.createElement(\"div\");\n\n    cityName.textContent = `City: ${weatherData.address}`;\n    conditions.textContent = `Conditions: ${weatherData.currentConditions.conditions}`;\n    feelsLike.textContent = `Feels like: ${weatherData.currentConditions.feelslike}`;\n    humidity.textContent = `Humidity: ${weatherData.currentConditions.humidity}`;\n    temp.textContent = `Temp: ${weatherData.currentConditions.temp}`;\n\n    for (const item of [cityName, conditions, feelsLike, humidity, temp]) {\n      elements.weatherInfo.appendChild(item);\n    }\n  };\n\n  return { renderData };\n})();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxvQkFBb0I7QUFDeEQsNENBQTRDLHlDQUF5QztBQUNyRiwyQ0FBMkMsd0NBQXdDO0FBQ25GLHdDQUF3Qyx1Q0FBdUM7QUFDL0UsZ0NBQWdDLG1DQUFtQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcz83OThlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVJID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZWxlbWVudHMgPSB7XG4gICAgd2VhdGhlckluZm86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvXCIpLFxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRhdGEgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBlbGVtZW50cy53ZWF0aGVySW5mby5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb25kaXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYENpdHk6ICR7d2VhdGhlckRhdGEuYWRkcmVzc31gO1xuICAgIGNvbmRpdGlvbnMudGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uczogJHt3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zfWA7XG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7d2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlfWA7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHl9YDtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYFRlbXA6ICR7d2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcH1gO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIFtjaXR5TmFtZSwgY29uZGl0aW9ucywgZmVlbHNMaWtlLCBodW1pZGl0eSwgdGVtcF0pIHtcbiAgICAgIGVsZW1lbnRzLndlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJEYXRhIH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui.js\n\n}");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;