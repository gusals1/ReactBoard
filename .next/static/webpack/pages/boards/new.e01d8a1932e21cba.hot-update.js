"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/new",{

/***/ "./src/components/units/board/write/BoardWrite.style.ts":
/*!**************************************************************!*\
  !*** ./src/components/units/board/write/BoardWrite.style.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"BoardTitle\": function() { return /* binding */ BoardTitle; },\n/* harmony export */   \"FormSection\": function() { return /* binding */ FormSection; },\n/* harmony export */   \"WriterSection\": function() { return /* binding */ WriterSection; },\n/* harmony export */   \"FormSectionHalf\": function() { return /* binding */ FormSectionHalf; },\n/* harmony export */   \"BoardLabel\": function() { return /* binding */ BoardLabel; },\n/* harmony export */   \"BoardInput\": function() { return /* binding */ BoardInput; },\n/* harmony export */   \"BoardContents\": function() { return /* binding */ BoardContents; },\n/* harmony export */   \"ZipCodeWrapper\": function() { return /* binding */ ZipCodeWrapper; },\n/* harmony export */   \"ZipCodeInput\": function() { return /* binding */ ZipCodeInput; },\n/* harmony export */   \"ZipCodeButton\": function() { return /* binding */ ZipCodeButton; },\n/* harmony export */   \"Address\": function() { return /* binding */ Address; },\n/* harmony export */   \"UploadButton\": function() { return /* binding */ UploadButton; },\n/* harmony export */   \"RadioButton\": function() { return /* binding */ RadioButton; },\n/* harmony export */   \"RadioLabel\": function() { return /* binding */ RadioLabel; },\n/* harmony export */   \"RegistButton\": function() { return /* binding */ RegistButton; },\n/* harmony export */   \"Error\": function() { return /* binding */ Error; }\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 1200px;\\n  margin: 100px auto;\\n  overflow: hidden;\\n  box-shadow: 0px 0px 10px gray;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  padding: 80px 102px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 36px;\\n  font-weight: 700;\\n  text-align: center;\\n  margin-bottom: 60px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom: 40px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 47%;\\n  display: inline-block;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: block;\\n  font-size: 16px;\\n  font-weight: 500;\\n  margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  height: 52px;\\n  padding-left: 16px;\\n  outline: none;\\n  border: 1px solid #BDBDBD;\\n  ::placeholder{\\n    font-weight: 400;\\n    font-size: 16px;\\n    color: #BDBDBD;\\n  };\\n  :focus{\\n    border: 2px solid lightblue;\\n  };\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  height: 480px;\\n  resize: none;\\n  padding:16px;\\n  outline: none;\\n  border: 1px solid #BDBDBD;\\n  ::placeholder{\\n    font-weight: 400;\\n    font-size: 16px;\\n    color: #BDBDBD;\\n  }\\n  :focus{\\n    border: 2px solid lightblue;\\n  }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-align: center;\\n  display: inline-block;\\n  width: 77px;\\n  height: 52px;\\n  border: 1px solid #BDBDBD;\\n  margin-right: 16px;\\n  ::placeholder{\\n    text-align: center;\\n  }\\n\"\n    ]);\n    _templateObject10 = function _templateObject10() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 124px;\\n  height: 52px;\\n  padding: 16px;\\n  background: #000;\\n  color: #fff;\\n  border: none;\\n  font-weight: 500;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject11 = function _templateObject11() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  margin-top: 14px;\\n  display: block;\\n  border: 1px solid #BDBDBD;\\n  height: 52px;\\n\"\n    ]);\n    _templateObject12 = function _templateObject12() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 78px;\\n  height: 78px;\\n  background: #BDBDBD;\\n  border: none;\\n  margin-right: 24px;\\n  font-size: 24px;\\n  color: #4F4F4F;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject13 = function _templateObject13() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  cursor: pointer;\\n\\n\"\n    ]);\n    _templateObject14 = function _templateObject14() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject15() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-left: 8px;\\n  margin-right: 20px;\\n  font-weight: 500;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject15 = function _templateObject15() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject16() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: block;\\n  width: 180px;\\n  height: 52px;\\n  border: none;\\n  margin: 0 auto;\\n  font-size: 16px;\\n  font-weight: bold;\\n  margin-bottom: 100px;\\n  cursor: \",\n        \";\\n  background-color : \",\n        \";\\n\"\n    ]);\n    _templateObject16 = function _templateObject16() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject17() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding-top: 10px;\\n  font-size: 14px;\\n  color: red;\\n\"\n    ]);\n    _templateObject17 = function _templateObject17() {\n        return data;\n    };\n    return data;\n}\nvar Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Main = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main(_templateObject1());\nvar BoardTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject2());\nvar FormSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar WriterSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar FormSectionHalf = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\nvar BoardLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label(_templateObject6());\nvar BoardInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject7());\nvar BoardContents = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea(_templateObject8());\nvar ZipCodeWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject9());\nvar ZipCodeInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject10());\nvar ZipCodeButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject11());\nvar Address = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject12());\nvar UploadButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject13());\nvar RadioButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject14());\nvar RadioLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label(_templateObject15());\nvar RegistButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject16(), function(props) {\n    return props.isActive || props.isEdit ? \"pointer\" : \"\";\n}, function(props) {\n    return props.isActive || props.isEdit ? \"#FFD600\" : \"#ccc\";\n});\nvar Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject17());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC93cml0ZS9Cb2FyZFdyaXRlLnN0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7Ozs7Ozs7Ozs7Ozs7UUFFRixDQUtsQzs7Ozs7Ozs7O1FBRWdDLENBR2hDOzs7Ozs7Ozs7UUFFb0MsQ0FLcEM7Ozs7Ozs7OztRQUVzQyxDQUd0Qzs7Ozs7Ozs7O1FBQ3dDLENBTXhDOzs7Ozs7Ozs7UUFFMEMsQ0FHMUM7Ozs7Ozs7OztRQUV1QyxDQUt2Qzs7Ozs7Ozs7O1FBQ3VDLENBY3ZDOzs7Ozs7Ozs7UUFDNkMsQ0FlN0M7Ozs7Ozs7OztRQUV5QyxDQUd6Qzs7Ozs7Ozs7O1FBQ3lDLENBVXpDOzs7Ozs7Ozs7UUFDMkMsQ0FTM0M7Ozs7Ozs7OztRQUNvQyxDQU1wQzs7Ozs7Ozs7O1FBRTBDLENBUzFDOzs7Ozs7Ozs7UUFFd0MsQ0FHeEM7Ozs7Ozs7OztRQUV1QyxDQUt2Qzs7Ozs7Ozs7O1FBRTBDLENBU2hDO1FBQWlGLENBQ3RFO1FBQWdFLENBQ3JGOzs7Ozs7Ozs7UUFFZ0MsQ0FJaEM7Ozs7Ozs7QUFuSk8sR0FBSyxDQUFDQyxPQUFPLEdBQUdELDJEQUFVO0FBTzFCLEdBQUssQ0FBQ0csSUFBSSxHQUFHSCw0REFBVztBQUt4QixHQUFLLENBQUNLLFVBQVUsR0FBR0wsMERBQVM7QUFPNUIsR0FBSyxDQUFDTyxXQUFXLEdBQUdQLDJEQUFVO0FBSTlCLEdBQUssQ0FBQ1EsYUFBYSxHQUFHUiwyREFBVTtBQVFoQyxHQUFLLENBQUNTLGVBQWUsR0FBR1QsMkRBQVU7QUFLbEMsR0FBSyxDQUFDVSxVQUFVLEdBQUdWLDZEQUFZO0FBTS9CLEdBQUssQ0FBQ1ksVUFBVSxHQUFHWiw2REFBWTtBQWUvQixHQUFLLENBQUNjLGFBQWEsR0FBR2QsZ0VBQWU7QUFpQnJDLEdBQUssQ0FBQ2dCLGNBQWMsR0FBR2hCLDJEQUFVO0FBSWpDLEdBQUssQ0FBQ2lCLFlBQVksR0FBR2pCLDZEQUFZO0FBV2pDLEdBQUssQ0FBQ2tCLGFBQWEsR0FBR2xCLDhEQUFhO0FBVW5DLEdBQUssQ0FBQ29CLE9BQU8sR0FBR3BCLDZEQUFZO0FBUTVCLEdBQUssQ0FBQ3FCLFlBQVksR0FBR3JCLDhEQUFhO0FBV2xDLEdBQUssQ0FBQ3NCLFdBQVcsR0FBR3RCLDZEQUFZO0FBS2hDLEdBQUssQ0FBQ3VCLFVBQVUsR0FBR3ZCLDZEQUFZO0FBTy9CLEdBQUssQ0FBQ3dCLFlBQVksR0FBR3hCLDhEQUFhLHNCQVM3QixRQUFRLENBQVB5QixLQUEwQjtJQUFLLE1BQU0sQ0FBTEEsS0FBSyxDQUFDQyxRQUFRLElBQUlELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQVMsV0FBQyxDQUFFO0dBQ25FLFFBQVEsQ0FBUEYsS0FBSztJQUFLLE1BQU0sQ0FBTEEsS0FBSyxDQUFDQyxRQUFRLElBQUlELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQVMsV0FBQyxDQUFNOztBQUc3RSxHQUFLLENBQUNDLEtBQUssR0FBRzVCLDJEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL3dyaXRlL0JvYXJkV3JpdGUuc3R5bGUudHM/OTVjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDgwcHggMTAycHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb2FyZFRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFdyaXRlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1TZWN0aW9uSGFsZiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQ3JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb2FyZExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJvYXJkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgOjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICB9O1xyXG4gIDpmb2N1c3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICB9O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2FyZENvbnRlbnRzID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmc6MTZweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgOjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICB9XHJcbiAgOmZvY3Vze1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRibHVlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFppcENvZGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFppcENvZGVJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3N3B4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQkRCREJEO1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICA6OnBsYWNlaG9sZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgWmlwQ29kZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDEyNHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JEQkRCRDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBVcGxvYWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA3OHB4O1xyXG4gIGhlaWdodDogNzhweDtcclxuICBiYWNrZ3JvdW5kOiAjQkRCREJEO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJhZGlvQnV0dG9uID0gc3R5bGVkLmlucHV0YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmFkaW9MYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpc3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBjdXJzb3I6ICR7KHByb3BzOklSZWdpc3RlckJ1dHRvblByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgfHwgcHJvcHMuaXNFZGl0KT8gXCJwb2ludGVyXCI6XCJcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvciA6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgfHwgcHJvcHMuaXNFZGl0KT8gXCIjRkZENjAwXCI6XCIjY2NjXCJ9O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmVkO1xyXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXcmFwcGVyIiwiZGl2IiwiTWFpbiIsIm1haW4iLCJCb2FyZFRpdGxlIiwiaDIiLCJGb3JtU2VjdGlvbiIsIldyaXRlclNlY3Rpb24iLCJGb3JtU2VjdGlvbkhhbGYiLCJCb2FyZExhYmVsIiwibGFiZWwiLCJCb2FyZElucHV0IiwiaW5wdXQiLCJCb2FyZENvbnRlbnRzIiwidGV4dGFyZWEiLCJaaXBDb2RlV3JhcHBlciIsIlppcENvZGVJbnB1dCIsIlppcENvZGVCdXR0b24iLCJidXR0b24iLCJBZGRyZXNzIiwiVXBsb2FkQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJSYWRpb0xhYmVsIiwiUmVnaXN0QnV0dG9uIiwicHJvcHMiLCJpc0FjdGl2ZSIsImlzRWRpdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.style.ts\n");

/***/ })

});