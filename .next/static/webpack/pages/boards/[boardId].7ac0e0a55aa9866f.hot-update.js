"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/components/units/board/comments/commentList/BoardCommentList.presenter.js":
/*!***************************************************************************************!*\
  !*** ./src/components/units/board/comments/commentList/BoardCommentList.presenter.js ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentListUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _detail_BoardDetail_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detail/BoardDetail.styles */ \"./src/components/units/board/detail/BoardDetail.styles.js\");\n/* harmony import */ var _BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardCommentList.styles */ \"./src/components/units/board/comments/commentList/BoardCommentList.styles.js\");\n\n\n\nfunction BoardCommentListUI(props) {\n    var _this = this;\n    var ref, ref1;\n    console.log((ref = props.data) === null || ref === void 0 ? void 0 : ref.fetchBoardComments);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        children: (ref1 = props.data) === null || ref1 === void 0 ? void 0 : ref1.fetchBoardComments.map(function(el) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.CommentBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        src: \"/images/comment_profile.png\",\n                        alt: \"profile_img\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.Comment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.WriterWrap, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.CommentWriter, {\n                                        children: el.writer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.CommentRating, {\n                                        children: [\n                                            \"★ ★ ★ ★ ★\",\n                                            el.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.CommentContents, {\n                                children: el.contents\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.CommentCreatedAt, {\n                                children: el.createdAt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.EditIconBox, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.EditIcon, {\n                                src: \"/images/comment_edit.png\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_styles__WEBPACK_IMPORTED_MODULE_2__.DeleteIcon, {\n                                src: \"/images/comment_delete.png\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, el._id, true, {\n                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.presenter.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n_c = BoardCommentListUI;\nvar _c;\n$RefreshReg$(_c, \"BoardCommentListUI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50TGlzdC9Cb2FyZENvbW1lbnRMaXN0LnByZXNlbnRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFDYjtBQUUvQixRQUFRLENBQUNFLGtCQUFrQixDQUFDQyxLQUFLLEVBQUMsQ0FBQzs7UUFDcENBLEdBQVUsRUFJaEJBLElBQVU7SUFKaEJDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDRixHQUFVLEdBQVZBLEtBQUssQ0FBQ0csSUFBSSxjQUFWSCxHQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBOEIsR0FBOUJBLElBQUksQ0FBSkEsQ0FBOEIsR0FBOUJBLEdBQVUsQ0FBRUksa0JBQWtCO0lBQzFDLE1BQU0sNkVBQ0hOLDZEQUFTO21CQUVORSxJQUFVLEdBQVZBLEtBQUssQ0FBQ0csSUFBSSxjQUFWSCxJQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBOEIsR0FBOUJBLElBQUksQ0FBSkEsQ0FBOEIsR0FBOUJBLElBQVUsQ0FBRUksa0JBQWtCLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQUU7MEJBQ3BDLE1BQU0sK0RBQUxULGdFQUFZOztnR0FDVkEsNkRBQVM7d0JBQUNZLEdBQUcsRUFBQyxDQUE2Qjt3QkFBQ0MsR0FBRyxFQUFDLENBQWE7Ozs7OztnR0FDN0RiLDZEQUFTOzt3R0FDUEEsZ0VBQVk7O2dIQUNWQSxtRUFBZTtrREFBRVMsRUFBRSxDQUFDUSxNQUFNOzs7Ozs7Z0hBQzFCakIsbUVBQWU7OzRDQUFDLENBQVM7NENBQUNTLEVBQUUsQ0FBQ1UsTUFBTTs7Ozs7Ozs7Ozs7Ozt3R0FHckNuQixxRUFBaUI7MENBQUVTLEVBQUUsQ0FBQ1ksUUFBUTs7Ozs7O3dHQUM5QnJCLHNFQUFrQjswQ0FBRVMsRUFBRSxDQUFDYyxTQUFTOzs7Ozs7Ozs7Ozs7Z0dBRWxDdkIsaUVBQWE7O3dHQUNYQSw4REFBVTtnQ0FBQ1ksR0FBRyxFQUFDLENBQTBCO2dDQUFDQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7O3dHQUNoRGIsZ0VBQVk7Z0NBQUNZLEdBQUcsRUFBQyxDQUE0QjtnQ0FBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7ZUFidENKLEVBQUUsQ0FBQ2tCLEdBQUc7Ozs7Ozs7Ozs7O0FBc0JuQyxDQUFDO0tBNUJ1QjFCLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50TGlzdC9Cb2FyZENvbW1lbnRMaXN0LnByZXNlbnRlci5qcz8wYTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZWRBdCB9IGZyb20gXCIuLi8uLi9kZXRhaWwvQm9hcmREZXRhaWwuc3R5bGVzXCI7XHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vQm9hcmRDb21tZW50TGlzdC5zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29tbWVudExpc3RVSShwcm9wcyl7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YT8uZmV0Y2hCb2FyZENvbW1lbnRzKVxyXG4gIHJldHVybihcclxuICAgIDxTLldyYXBwZXI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5kYXRhPy5mZXRjaEJvYXJkQ29tbWVudHMubWFwKChlbCk9PihcclxuICAgICAgICAgIDxTLkNvbW1lbnRCb3gga2V5PXtlbC5faWR9PlxyXG4gICAgICAgICAgICA8Uy5Qcm9maWxlIHNyYz1cIi9pbWFnZXMvY29tbWVudF9wcm9maWxlLnBuZ1wiIGFsdD1cInByb2ZpbGVfaW1nXCIgLz5cclxuICAgICAgICAgICAgPFMuQ29tbWVudD5cclxuICAgICAgICAgICAgICA8Uy5Xcml0ZXJXcmFwPlxyXG4gICAgICAgICAgICAgICAgPFMuQ29tbWVudFdyaXRlcj57ZWwud3JpdGVyfTwvUy5Db21tZW50V3JpdGVyPlxyXG4gICAgICAgICAgICAgICAgPFMuQ29tbWVudFJhdGluZz7imIUg4piFIOKYhSDimIUg4piFe2VsLnJhdGluZ308L1MuQ29tbWVudFJhdGluZz5cclxuICAgICAgICAgICAgICA8L1MuV3JpdGVyV3JhcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8Uy5Db21tZW50Q29udGVudHM+e2VsLmNvbnRlbnRzfTwvUy5Db21tZW50Q29udGVudHM+XHJcbiAgICAgICAgICAgICAgPFMuQ29tbWVudENyZWF0ZWRBdD57ZWwuY3JlYXRlZEF0fTwvUy5Db21tZW50Q3JlYXRlZEF0PlxyXG4gICAgICAgICAgICA8L1MuQ29tbWVudD5cclxuICAgICAgICAgICAgPFMuRWRpdEljb25Cb3g+XHJcbiAgICAgICAgICAgICAgPFMuRWRpdEljb24gc3JjPVwiL2ltYWdlcy9jb21tZW50X2VkaXQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8Uy5EZWxldGVJY29uIHNyYz1cIi9pbWFnZXMvY29tbWVudF9kZWxldGUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9TLkVkaXRJY29uQm94PlxyXG4gICAgICAgICAgPC9TLkNvbW1lbnRCb3g+XHJcbiAgICAgICAgKSlcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L1MuV3JhcHBlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiQ3JlYXRlZEF0IiwiUyIsIkJvYXJkQ29tbWVudExpc3RVSSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaEJvYXJkQ29tbWVudHMiLCJXcmFwcGVyIiwibWFwIiwiZWwiLCJDb21tZW50Qm94IiwiUHJvZmlsZSIsInNyYyIsImFsdCIsIkNvbW1lbnQiLCJXcml0ZXJXcmFwIiwiQ29tbWVudFdyaXRlciIsIndyaXRlciIsIkNvbW1lbnRSYXRpbmciLCJyYXRpbmciLCJDb21tZW50Q29udGVudHMiLCJjb250ZW50cyIsIkNvbW1lbnRDcmVhdGVkQXQiLCJjcmVhdGVkQXQiLCJFZGl0SWNvbkJveCIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/commentList/BoardCommentList.presenter.js\n");

/***/ })

});