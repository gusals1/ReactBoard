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

/***/ "./src/components/units/board/comments/commentWrite/BoardCommentWrite.presenter.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/units/board/comments/commentWrite/BoardCommentWrite.presenter.js ***!
  \*****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentWriteUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardCommentWrite.styles */ \"./src/components/units/board/comments/commentWrite/BoardCommentWrite.styles.js\");\n\n\nfunction BoardCommentWriteUI(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.UnderLine, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentImg, {\n                        src: \"/images/icon_comment.png\",\n                        alt: \"댓글 아이콘\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentTitle, {\n                        children: \"댓글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.WriterInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.WriterInput, {\n                        type: \"text\",\n                        placeholder: \"작성자\",\n                        onChange: props.onChangeCommentWriter,\n                        value: props.commentWriter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.PasswordInput, {\n                        type: \"password\",\n                        placeholder: \"비밀번호\",\n                        onChange: props.onChangeCommentPassword\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentRating, {\n                        onChange: props.onChangeCommentRating,\n                        children: \"★ ★ ★ ★ ★\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentInput, {\n                        maxLength: 100,\n                        placeholder: \"개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.\",\n                        onChange: props.onChangeCommentContents\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.RegisterWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentLength, {\n                                children: [\n                                    props.commentContents.length,\n                                    \"/100\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentWrite_styles__WEBPACK_IMPORTED_MODULE_1__.CommentButton, {\n                                onClick: props.onClickCommentRegister,\n                                children: \"등록하기\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentWrite\\\\BoardCommentWrite.presenter.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n};\n_c = BoardCommentWriteUI;\nvar _c;\n$RefreshReg$(_c, \"BoardCommentWriteUI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50V3JpdGUvQm9hcmRDb21tZW50V3JpdGUucHJlc2VudGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRWhDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUNDLEtBQUssRUFBQyxDQUFDO0lBRWpELE1BQU0sNkVBQ0hGLDhEQUFTOzt3RkFDUEEsZ0VBQVc7Ozs7O3dGQUNYQSxvRUFBZTs7Z0dBQ2JBLGlFQUFZO3dCQUFDTyxHQUFHLEVBQUMsQ0FBMEI7d0JBQUNDLEdBQUcsRUFBQyxDQUFROzs7Ozs7Z0dBQzlDUixtRUFBSTtrQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7d0ZBRWZBLGlFQUFROztnR0FDVkEsa0VBQWE7d0JBQUNZLElBQUksRUFBQyxDQUFNO3dCQUFDQyxXQUFXLEVBQUMsQ0FBSzt3QkFBT0MsUUFBUSxFQUFFWixLQUFLLENBQUNhLHFCQUFxQjt3QkFBRUMsS0FBSyxFQUFFZCxLQUFLLENBQUNlLGFBQWE7Ozs7OztnR0FDN0dqQixvRUFBUzt3QkFBQ1ksSUFBSSxFQUFDLENBQVU7d0JBQUNDLFdBQVcsRUFBQyxDQUFNQzt3QkFBUUEsUUFBUSxFQUFFWixLQUFLLENBQUNpQix1QkFBdUI7Ozs7OztnR0FDekZuQixvRUFBTzt3QkFBQ2MsUUFBUSxFQUFFWixLQUFLLENBQUNtQixxQkFBcUI7a0NBQUUsQ0FBUzs7Ozs7Ozs7Ozs7O3dGQUd4RHJCLHVFQUFROztnR0FDaEJBLG1FQUFjO3dCQUNid0IsU0FBUyxFQUFFLEdBQUc7d0JBQ2RYLFdBQVcsRUFBQyxDQUF3Rjt3QkFDb0JDLFFBQWhILEVBQUVaLEtBQUssQ0FBQ3VCLHVCQUF1Qjs7Ozs7O2dHQUd4Q3pCLHNFQUFpQjs7d0dBQ2ZBLG9FQUFlOztvQ0FBRUUsS0FBSyxDQUFDMEIsZUFBZSxDQUFDQyxNQUFNO29DQUFDLENBQUk7Ozs7Ozs7d0dBQ2xEN0Isb0VBQWU7Z0NBQUMrQixPQUFPLEVBQUU3QixLQUFLLENBQUM4QixzQkFBc0I7MENBQUUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFLENBQUM7S0E5QnVCL0IsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL2NvbW1lbnRXcml0ZS9Cb2FyZENvbW1lbnRXcml0ZS5wcmVzZW50ZXIuanM/YzkwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gXCIuL0JvYXJkQ29tbWVudFdyaXRlLnN0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRDb21tZW50V3JpdGVVSShwcm9wcyl7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxTLldyYXBwZXI+XHJcbiAgICAgIDxTLlVuZGVyTGluZS8+XHJcbiAgICAgIDxTLkNvbW1lbnRIZWFkZXI+XHJcbiAgICAgICAgPFMuQ29tbWVudEltZyBzcmM9XCIvaW1hZ2VzL2ljb25fY29tbWVudC5wbmdcIiBhbHQ9XCLrjJPquIAg7JWE7J207L2YXCIgLz5cclxuICAgICAgICA8Uy5Db21tZW50VGl0bGU+64yT6riAPC9TLkNvbW1lbnRUaXRsZT5cclxuICAgICAgPC9TLkNvbW1lbnRIZWFkZXI+XHJcbiAgICAgIDxTLldyaXRlckluZm8+XHJcbiAgICAgICAgPFMuV3JpdGVySW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZUNvbW1lbnRXcml0ZXJ9IHZhbHVlPXtwcm9wcy5jb21tZW50V3JpdGVyfT48L1MuV3JpdGVySW5wdXQ+XHJcbiAgICAgICAgPFMuUGFzc3dvcmRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwib25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlQ29tbWVudFBhc3N3b3JkfT48L1MuUGFzc3dvcmRJbnB1dD5cclxuICAgICAgICA8Uy5Db21tZW50UmF0aW5nIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZUNvbW1lbnRSYXRpbmd9PuKYhSDimIUg4piFIOKYhSDimIU8L1MuQ29tbWVudFJhdGluZz5cclxuICAgICAgPC9TLldyaXRlckluZm8+XHJcbiAgICAgIFxyXG4gICAgICA8Uy5Db21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxTLkNvbW1lbnRJbnB1dCBcclxuICAgICAgICAgIG1heExlbmd0aD17MTAwfSBcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6rCc7J247KCV67O066W8IOqzteycoCDrsI8g7JqU7LKt7ZWY6rGw64KYLCDrqoXsmIgg7Zu87IaQLCDrrLTri6gg6rSR6rOgLCDrtojrspUg7KCV67O0IOycoO2PrOyLnCDrqqjri4jthLDrp4Eg7ZuEIOyCreygnOuQoCDsiJgg7J6I7Jy866mwLCDsnbTsl5Ag64yA7ZWcIOuvvO2YleyCrOyDgSDssYXsnoTsnYAg6rKM7Iuc7J6Q7JeQ6rKMIOyeiOyKteuLiOuLpC5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlQ29tbWVudENvbnRlbnRzfVxyXG4gICAgICAgID4gICAgXHJcbiAgICAgICAgPC9TLkNvbW1lbnRJbnB1dD5cclxuICAgICAgICA8Uy5SZWdpc3RlcldyYXBwZXI+XHJcbiAgICAgICAgICA8Uy5Db21tZW50TGVuZ3RoPntwcm9wcy5jb21tZW50Q29udGVudHMubGVuZ3RofS8xMDA8L1MuQ29tbWVudExlbmd0aD5cclxuICAgICAgICAgIDxTLkNvbW1lbnRCdXR0b24gb25DbGljaz17cHJvcHMub25DbGlja0NvbW1lbnRSZWdpc3Rlcn0+65Ox66Gd7ZWY6riwPC9TLkNvbW1lbnRCdXR0b24+XHJcbiAgICAgICAgPC9TLlJlZ2lzdGVyV3JhcHBlcj5cclxuICAgICAgPC9TLkNvbW1lbnRDb250YWluZXI+XHJcbiAgICAgIFxyXG4gICAgPC9TLldyYXBwZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlMiLCJCb2FyZENvbW1lbnRXcml0ZVVJIiwicHJvcHMiLCJXcmFwcGVyIiwiVW5kZXJMaW5lIiwiQ29tbWVudEhlYWRlciIsIkNvbW1lbnRJbWciLCJzcmMiLCJhbHQiLCJDb21tZW50VGl0bGUiLCJXcml0ZXJJbmZvIiwiV3JpdGVySW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQ2hhbmdlQ29tbWVudFdyaXRlciIsInZhbHVlIiwiY29tbWVudFdyaXRlciIsIlBhc3N3b3JkSW5wdXQiLCJvbkNoYW5nZUNvbW1lbnRQYXNzd29yZCIsIkNvbW1lbnRSYXRpbmciLCJvbkNoYW5nZUNvbW1lbnRSYXRpbmciLCJDb21tZW50Q29udGFpbmVyIiwiQ29tbWVudElucHV0IiwibWF4TGVuZ3RoIiwib25DaGFuZ2VDb21tZW50Q29udGVudHMiLCJSZWdpc3RlcldyYXBwZXIiLCJDb21tZW50TGVuZ3RoIiwiY29tbWVudENvbnRlbnRzIiwibGVuZ3RoIiwiQ29tbWVudEJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNsaWNrQ29tbWVudFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/commentWrite/BoardCommentWrite.presenter.js\n");

/***/ })

});