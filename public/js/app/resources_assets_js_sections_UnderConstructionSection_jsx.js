"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_sections_UnderConstructionSection_jsx"],{

/***/ "./resources/assets/js/sections/UnderConstructionSection.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/sections/UnderConstructionSection.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnderConstructionSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyCode */ "./resources/assets/js/components/MyCode.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function UnderConstructionSection() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h3",
      children: "Under Construction"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      paragraph: true,
      children: ["The section ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_MyCode__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "info",
        children: location.pathname
      }), " is not yet complete."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      paragraph: true,
      children: "Please select another item from the left panel."
    })]
  });
}

/***/ })

}]);