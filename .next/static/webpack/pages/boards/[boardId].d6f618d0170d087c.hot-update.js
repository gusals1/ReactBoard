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

/***/ "./src/components/units/board/comments/commentList/BoardCommentList.container.js":
/*!***************************************************************************************!*\
  !*** ./src/components/units/board/comments/commentList/BoardCommentList.container.js ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardCommentList_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardCommentList.presenter */ \"./src/components/units/board/comments/commentList/BoardCommentList.presenter.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardCommentList.queries */ \"./src/components/units/board/comments/commentList/BoardCommentList.queries.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction BoardCommentList() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_3__.FETCH_BOARD_COMMENTS, {\n        variables: {\n            boardId: router.query.boardId\n        }\n    }).data;\n    var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_3__.DELETE_BOARD_COMMENTS), 1), deleteBoardComment = ref[0];\n    var onClickCommentDelete = function() {\n        console.log(data.fetchBoardComments.writer);\n    // deleteBoardComment({\n    // })\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_presenter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: data,\n        onClickCommentDelete: onClickCommentDelete\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.container.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardCommentList, \"+TQv80S6yl6CK7lAIXy2B4zs8E8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = BoardCommentList;\nvar _c;\n$RefreshReg$(_c, \"BoardCommentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50TGlzdC9Cb2FyZENvbW1lbnRMaXN0LmNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDc0I7QUFDUDtBQUNrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLFFBQVEsQ0FBQ00sZ0JBQWdCLEdBQUUsQ0FBQzs7SUFFekMsR0FBSyxDQUFDQyxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEdBQUssQ0FBR1EsSUFBSSxHQUFLTCx3REFBUSxDQUFDRSwyRUFBb0IsRUFBQyxDQUFDO1FBQzlDSSxTQUFTLEVBQUMsQ0FBQztZQUNUQyxPQUFPLEVBQUdILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDRCxPQUFPO1FBQ2hDLENBQUM7SUFDSCxDQUFDLEVBSk9GLElBQUk7SUFLWixHQUFLLENBQXdCTixHQUFrQyxrQkFBbENBLDJEQUFXLENBQUNFLDRFQUFxQixPQUF2RFEsa0JBQWtCLEdBQUlWLEdBQWtDO0lBRS9ELEdBQUssQ0FBQ1csb0JBQW9CLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUNRLGtCQUFrQixDQUFDQyxNQUFNO0lBQzFDLEVBQXVCO0lBR3ZCLEVBQUs7SUFDUCxDQUFDO0lBRUQsTUFBTSw2RUFDSGhCLG1FQUFrQjtRQUNqQk8sSUFBSSxFQUFJQSxJQUFJO1FBQ1pLLG9CQUFvQixFQUFHQSxvQkFBb0I7Ozs7OztBQUdqRCxDQUFDO0dBeEJ1QlAsZ0JBQWdCOztRQUV2Qk4sa0RBQVM7UUFDUEcsb0RBQVE7UUFLSUQsdURBQVc7OztLQVJsQkksZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL2NvbW1lbnRMaXN0L0JvYXJkQ29tbWVudExpc3QuY29udGFpbmVyLmpzPzQ5MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBCb2FyZENvbW1lbnRMaXN0VUkgZnJvbSBcIi4vQm9hcmRDb21tZW50TGlzdC5wcmVzZW50ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IERFTEVURV9CT0FSRF9DT01NRU5UUywgRkVUQ0hfQk9BUkRfQ09NTUVOVFMgfSBmcm9tIFwiLi9Cb2FyZENvbW1lbnRMaXN0LnF1ZXJpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29tbWVudExpc3QoKXtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRF9DT01NRU5UUyx7XHJcbiAgICB2YXJpYWJsZXM6e1xyXG4gICAgICBib2FyZElkIDogcm91dGVyLnF1ZXJ5LmJvYXJkSWRcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IFtkZWxldGVCb2FyZENvbW1lbnRdID0gdXNlTXV0YXRpb24oREVMRVRFX0JPQVJEX0NPTU1FTlRTKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvbW1lbnREZWxldGUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmZldGNoQm9hcmRDb21tZW50cy53cml0ZXIpXHJcbiAgICAvLyBkZWxldGVCb2FyZENvbW1lbnQoe1xyXG5cclxuXHJcbiAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPEJvYXJkQ29tbWVudExpc3RVSVxyXG4gICAgICBkYXRhID0ge2RhdGF9XHJcbiAgICAgIG9uQ2xpY2tDb21tZW50RGVsZXRlID17b25DbGlja0NvbW1lbnREZWxldGV9XHJcbiAgICAvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCb2FyZENvbW1lbnRMaXN0VUkiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiREVMRVRFX0JPQVJEX0NPTU1FTlRTIiwiRkVUQ0hfQk9BUkRfQ09NTUVOVFMiLCJCb2FyZENvbW1lbnRMaXN0Iiwicm91dGVyIiwiZGF0YSIsInZhcmlhYmxlcyIsImJvYXJkSWQiLCJxdWVyeSIsImRlbGV0ZUJvYXJkQ29tbWVudCIsIm9uQ2xpY2tDb21tZW50RGVsZXRlIiwiY29uc29sZSIsImxvZyIsImZldGNoQm9hcmRDb21tZW50cyIsIndyaXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/commentList/BoardCommentList.container.js\n");

/***/ })

});