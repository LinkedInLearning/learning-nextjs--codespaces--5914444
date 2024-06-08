"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/post/insert/page",{

/***/ "(app-pages-browser)/./src/app/blog/post/insert/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/blog/post/insert/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        content: \"\",\n        date: new Date().toISOString().slice(0, 10)\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        fetch(\"/api/posts?id=\".concat(uuid, \"&title=\").concat(formData.title, \"&content=\").concat(formData.content, \"&date=\").concat(formData.date), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...formData,\n                id: uuid\n            })\n        }).then(()=>{\n            // Clear form fields\n            setFormData({\n                id: \"\",\n                title: \"\",\n                content: \"\",\n                date: \"\"\n            });\n            router.push(\"/blog/posts\");\n        }).catch(console.error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-8 rounded shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4 text-purple-700\",\n                children: \"New Blog Post\"\n            }, void 0, false, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block font-medium\",\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                name: \"title\",\n                                value: formData.title,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                className: \"block font-medium\",\n                                children: \"Content:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                name: \"content\",\n                                rows: \"4\",\n                                value: formData.content,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"date\",\n                                className: \"block font-medium\",\n                                children: \"Date:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"date\",\n                                name: \"date\",\n                                value: formData.date,\n                                readOnly: true,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"vBjKTOWp4hTCnGhec0PdsAnRwSA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmxvZy9wb3N0L2luc2VydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvQztBQUNRO0FBQ0Q7QUFHNUIsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3ZDUSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxNQUFNLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEdBQUc7SUFDMUM7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1osWUFBWWEsQ0FBQUEsV0FBYTtnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEIsTUFBTUMsT0FBT3hCLGdEQUFNQTtRQUNuQnlCLE1BQU0saUJBQStCbEIsT0FBZGlCLE1BQUssV0FBbUNqQixPQUExQkEsU0FBU0csS0FBSyxFQUFDLGFBQW9DSCxPQUF6QkEsU0FBU0ksT0FBTyxFQUFDLFVBQXNCLE9BQWRKLFNBQVNLLElBQUksR0FBSTtZQUN2R2MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUUsR0FBR3ZCLFFBQVE7Z0JBQUVFLElBQUllO1lBQUs7UUFDL0MsR0FBR08sSUFBSSxDQUFDO1lBQ04sb0JBQW9CO1lBQ3BCdkIsWUFBWTtnQkFDVkMsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsTUFBTTtZQUNSO1lBQ0FSLE9BQU80QixJQUFJLENBQUM7UUFDZCxHQUFHQyxLQUFLLENBQUNDLFFBQVFDLEtBQUs7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQzs7Ozs7OzBCQUM5Qyw4REFBQ0U7Z0JBQUtDLFVBQVVsQjtnQkFBY2UsV0FBVTs7a0NBRXRDLDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFRO2dDQUFRTCxXQUFVOzBDQUFvQjs7Ozs7OzBDQUNyRCw4REFBQ007Z0NBQU1DLE1BQUs7Z0NBQU9uQyxJQUFHO2dDQUFRUyxNQUFLO2dDQUFRQyxPQUFPWixTQUFTRyxLQUFLO2dDQUFFbUMsVUFBVTdCO2dDQUFjcUIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUV0Ryw4REFBQ0Q7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBVUwsV0FBVTswQ0FBb0I7Ozs7OzswQ0FDdkQsOERBQUNTO2dDQUFTckMsSUFBRztnQ0FBVVMsTUFBSztnQ0FBVTZCLE1BQUs7Z0NBQUk1QixPQUFPWixTQUFTSSxPQUFPO2dDQUFFa0MsVUFBVTdCO2dDQUFjcUIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUU1Ryw4REFBQ0Q7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBT0wsV0FBVTswQ0FBb0I7Ozs7OzswQ0FDcEQsOERBQUNNO2dDQUFNQyxNQUFLO2dDQUFPbkMsSUFBRztnQ0FBT1MsTUFBSztnQ0FBT0MsT0FBT1osU0FBU0ssSUFBSTtnQ0FBRW9DLFFBQVE7Z0NBQUNYLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHcEYsOERBQUNEO2tDQUNDLDRFQUFDYTs0QkFBT0wsTUFBSzs0QkFBU1AsV0FBVTtzQ0FBaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNIO0dBL0R3QmxDOztRQUNQRCxzREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jsb2cvcG9zdC9pbnNlcnQvcGFnZS50c3g/NmJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IFVzZXQgfSBmcm9tIFwiQC9hcHAvbGliL2RlZmluaXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGlkOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgY29udGVudDogJycsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YShwcmV2RGF0YSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSkpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcbiAgICBmZXRjaChgL2FwaS9wb3N0cz9pZD0ke3V1aWR9JnRpdGxlPSR7Zm9ybURhdGEudGl0bGV9JmNvbnRlbnQ9JHtmb3JtRGF0YS5jb250ZW50fSZkYXRlPSR7Zm9ybURhdGEuZGF0ZX1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEsIGlkOiB1dWlkIH0pXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGRhdGU6ICcnXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYmxvZy9wb3N0cycpO1xuICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCB0ZXh0LXB1cnBsZS03MDBcIj5OZXcgQmxvZyBQb3N0PC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0xMDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6Ym9yZGVyLXB1cnBsZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW1cIj5Db250ZW50OjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIG5hbWU9XCJjb250ZW50XCIgcm93cz1cIjRcIiB2YWx1ZT17Zm9ybURhdGEuY29udGVudH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1wdXJwbGUtMTAwIHAtMiByb3VuZGVkLW1kIGZvY3VzOmJvcmRlci1wdXJwbGUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2Zvcm1EYXRhLmRhdGV9IHJlYWRPbmx5IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItcHVycGxlLTEwMCBwLTIgcm91bmRlZC1tZCBmb2N1czpib3JkZXItcHVycGxlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWQgYmctcHVycGxlLTYwMCAgaG92ZXI6YmctcHVycGxlLTcwMFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUGFnZSIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1dWlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHVzaCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsInJlYWRPbmx5IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/blog/post/insert/page.tsx\n"));

/***/ })

});