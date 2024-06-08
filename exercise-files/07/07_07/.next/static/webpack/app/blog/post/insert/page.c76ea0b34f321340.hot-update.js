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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        content: \"\",\n        date: new Date().toISOString().slice(0, 10)\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        fetch(\"/api/posts?id=\".concat(uuid, \"&title=\").concat(formData.title, \"&author=\").concat(user.name, \"&content=\").concat(formData.content, \"&date=\").concat(formData.date), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...formData,\n                id: uuid\n            })\n        }).then(()=>{\n            // Clear form fields\n            setFormData({\n                id: \"\",\n                title: \"\",\n                content: \"\",\n                date: \"\"\n            });\n            router.push(\"/blog/posts\");\n        }).catch(console.error);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)().then((session)=>{\n            setUser((session === null || session === void 0 ? void 0 : session.user) || null);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-8 rounded shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4 text-purple-700\",\n                children: \"New Blog Post\"\n            }, void 0, false, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block font-medium\",\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                name: \"title\",\n                                value: formData.title,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                className: \"block font-medium\",\n                                children: \"Content:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                name: \"content\",\n                                rows: \"4\",\n                                value: formData.content,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"date\",\n                                className: \"block font-medium\",\n                                children: \"Date:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"date\",\n                                name: \"date\",\n                                value: formData.date,\n                                readOnly: true,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/07/07_07/src/app/blog/post/insert/page.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"jgb3cA1/D2qt+/bvRhWSyXON+xA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmxvZy9wb3N0L2luc2VydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0M7QUFDYTtBQUNOO0FBRUU7QUFFOUIsU0FBU007O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxNQUFNLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEdBQUc7SUFDMUM7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1osWUFBWWEsQ0FBQUEsV0FBYTtnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEIsTUFBTUMsT0FBTzFCLGdEQUFNQTtRQUNuQjJCLE1BQU0saUJBQStCbEIsT0FBZGlCLE1BQUssV0FBa0NuQixPQUF6QkUsU0FBU0csS0FBSyxFQUFDLFlBQStCSCxPQUFyQkYsS0FBS2EsSUFBSSxFQUFDLGFBQW9DWCxPQUF6QkEsU0FBU0ksT0FBTyxFQUFDLFVBQXNCLE9BQWRKLFNBQVNLLElBQUksR0FBSTtZQUMzSGMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUUsR0FBR3ZCLFFBQVE7Z0JBQUVFLElBQUllO1lBQUs7UUFDL0MsR0FBR08sSUFBSSxDQUFDO1lBQ04sb0JBQW9CO1lBQ3BCdkIsWUFBWTtnQkFDVkMsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsTUFBTTtZQUNSO1lBQ0FSLE9BQU80QixJQUFJLENBQUM7UUFDZCxHQUFHQyxLQUFLLENBQUNDLFFBQVFDLEtBQUs7SUFDeEI7SUFFQW5DLGdEQUFTQSxDQUFDO1FBQ1JFLDJEQUFVQSxHQUFHNkIsSUFBSSxDQUFDLENBQUNLO1lBQ2pCOUIsUUFBUThCLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUy9CLElBQUksS0FBSTtRQUMzQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQzs7Ozs7OzBCQUM5Qyw4REFBQ0U7Z0JBQUtDLFVBQVVuQjtnQkFBY2dCLFdBQVU7O2tDQUV0Qyw4REFBQ0Q7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBUUwsV0FBVTswQ0FBb0I7Ozs7OzswQ0FDckQsOERBQUNNO2dDQUFNQyxNQUFLO2dDQUFPcEMsSUFBRztnQ0FBUVMsTUFBSztnQ0FBUUMsT0FBT1osU0FBU0csS0FBSztnQ0FBRW9DLFVBQVU5QjtnQ0FBY3NCLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFdEcsOERBQUNEOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7Z0NBQVVMLFdBQVU7MENBQW9COzs7Ozs7MENBQ3ZELDhEQUFDUztnQ0FBU3RDLElBQUc7Z0NBQVVTLE1BQUs7Z0NBQVU4QixNQUFLO2dDQUFJN0IsT0FBT1osU0FBU0ksT0FBTztnQ0FBRW1DLFVBQVU5QjtnQ0FBY3NCLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFNUcsOERBQUNEOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7Z0NBQU9MLFdBQVU7MENBQW9COzs7Ozs7MENBQ3BELDhEQUFDTTtnQ0FBTUMsTUFBSztnQ0FBT3BDLElBQUc7Z0NBQU9TLE1BQUs7Z0NBQU9DLE9BQU9aLFNBQVNLLElBQUk7Z0NBQUVxQyxRQUFRO2dDQUFDWCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR3BGLDhEQUFDRDtrQ0FDQyw0RUFBQ2E7NEJBQU9MLE1BQUs7NEJBQVNQLFdBQVU7c0NBQWlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszSDtHQXJFd0JuQzs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ibG9nL3Bvc3QvaW5zZXJ0L3BhZ2UudHN4PzZiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9hcHAvbGliL2RlZmluaXRpb25cIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KSlcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgIGZldGNoKGAvYXBpL3Bvc3RzP2lkPSR7dXVpZH0mdGl0bGU9JHtmb3JtRGF0YS50aXRsZX0mYXV0aG9yPSR7dXNlci5uYW1lfSZjb250ZW50PSR7Zm9ybURhdGEuY29udGVudH0mZGF0ZT0ke2Zvcm1EYXRhLmRhdGV9YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmZvcm1EYXRhLCBpZDogdXVpZCB9KVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICBkYXRlOiAnJ1xuICAgICAgfSk7XG4gICAgICByb3V0ZXIucHVzaCgnL2Jsb2cvcG9zdHMnKTtcbiAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRTZXNzaW9uKCkudGhlbigoc2Vzc2lvbikgPT4ge1xuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyIHx8IG51bGwpO1xuICAgIH0pXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCB0ZXh0LXB1cnBsZS03MDBcIj5OZXcgQmxvZyBQb3N0PC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0xMDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6Ym9yZGVyLXB1cnBsZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW1cIj5Db250ZW50OjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29udGVudFwiIG5hbWU9XCJjb250ZW50XCIgcm93cz1cIjRcIiB2YWx1ZT17Zm9ybURhdGEuY29udGVudH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1wdXJwbGUtMTAwIHAtMiByb3VuZGVkLW1kIGZvY3VzOmJvcmRlci1wdXJwbGUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2Zvcm1EYXRhLmRhdGV9IHJlYWRPbmx5IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItcHVycGxlLTEwMCBwLTIgcm91bmRlZC1tZCBmb2N1czpib3JkZXItcHVycGxlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWQgYmctcHVycGxlLTYwMCAgaG92ZXI6YmctcHVycGxlLTcwMFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0U2Vzc2lvbiIsIlBhZ2UiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXVpZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInB1c2giLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJyb3dzIiwicmVhZE9ubHkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/blog/post/insert/page.tsx\n"));

/***/ })

});