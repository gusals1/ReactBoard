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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardCommentList_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardCommentList.presenter */ \"./src/components/units/board/comments/commentList/BoardCommentList.presenter.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardCommentList.queries */ \"./src/components/units/board/comments/commentList/BoardCommentList.queries.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction BoardCommentList() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_BoardCommentList_queries__WEBPACK_IMPORTED_MODULE_3__.FETCH_BOARD_COMMENTS, {\n        variables: {\n            boardId: router.query.boardId\n        }\n    }).data;\n    // console.log(router.query.boardId)\n    // console.log(data.fetchBoardComments);\n    data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function(el) {\n        console.log(el.writer);\n        console.log(el.contents);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentList_presenter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pjm97\\\\OneDrive\\\\Desktop\\\\myreact\\\\my-app\\\\src\\\\components\\\\units\\\\board\\\\comments\\\\commentList\\\\BoardCommentList.container.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardCommentList, \"DEGZfJqR9KLjK2ajZLUqNSLjEP8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = BoardCommentList;\nvar _c;\n$RefreshReg$(_c, \"BoardCommentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50TGlzdC9Cb2FyZENvbW1lbnRMaXN0LmNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDc0I7QUFDcEI7QUFDd0I7O0FBRWxELFFBQVEsQ0FBQ0ksZ0JBQWdCLEdBQUUsQ0FBQzs7SUFFekMsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEdBQUssQ0FBR00sSUFBSSxHQUFLSix3REFBUSxDQUFDQywyRUFBb0IsRUFBQyxDQUFDO1FBQzlDSSxTQUFTLEVBQUMsQ0FBQztZQUNUQyxPQUFPLEVBQUdILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDRCxPQUFPO1FBQ2hDLENBQUM7SUFDSCxDQUFDLEVBSk9GLElBQUk7SUFLWixFQUFvQztJQUVwQyxFQUF3QztJQUN4Q0EsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBRUksa0JBQWtCLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQUUsRUFBRyxDQUFDO1FBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDRyxNQUFNO1FBQ3JCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDSSxRQUFRO0lBQ3pCLENBQUM7SUFFRCxNQUFNLDZFQUNIZixtRUFBa0I7Ozs7O0FBRXZCLENBQUM7R0FuQnVCRyxnQkFBZ0I7O1FBRXZCSixrREFBUztRQUNQRSxvREFBUTs7O0tBSEhFLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9jb21tZW50TGlzdC9Cb2FyZENvbW1lbnRMaXN0LmNvbnRhaW5lci5qcz80OTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQm9hcmRDb21tZW50TGlzdFVJIGZyb20gXCIuL0JvYXJkQ29tbWVudExpc3QucHJlc2VudGVyXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEZFVENIX0JPQVJEX0NPTU1FTlRTIH0gZnJvbSBcIi4vQm9hcmRDb21tZW50TGlzdC5xdWVyaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZENvbW1lbnRMaXN0KCl7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkRfQ09NTUVOVFMse1xyXG4gICAgdmFyaWFibGVzOntcclxuICAgICAgYm9hcmRJZCA6IHJvdXRlci5xdWVyeS5ib2FyZElkXHJcbiAgICB9XHJcbiAgfSlcclxuICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuYm9hcmRJZClcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YS5mZXRjaEJvYXJkQ29tbWVudHMpO1xyXG4gIGRhdGE/LmZldGNoQm9hcmRDb21tZW50cy5tYXAoKGVsKT0+e1xyXG4gICAgY29uc29sZS5sb2coZWwud3JpdGVyKVxyXG4gICAgY29uc29sZS5sb2coZWwuY29udGVudHMpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPEJvYXJkQ29tbWVudExpc3RVSS8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJvYXJkQ29tbWVudExpc3RVSSIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRfQ09NTUVOVFMiLCJCb2FyZENvbW1lbnRMaXN0Iiwicm91dGVyIiwiZGF0YSIsInZhcmlhYmxlcyIsImJvYXJkSWQiLCJxdWVyeSIsImZldGNoQm9hcmRDb21tZW50cyIsIm1hcCIsImVsIiwiY29uc29sZSIsImxvZyIsIndyaXRlciIsImNvbnRlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/commentList/BoardCommentList.container.js\n");

/***/ })

});