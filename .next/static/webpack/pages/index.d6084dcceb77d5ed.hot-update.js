"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = /*\n    // Usuário\n    - Usuário digita no campo textarea\n    - Aperta enter para enviar\n    - Tem que adicionar o texto na listagem\n    \n    // Dev\n    - [X] Campo criado\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\n    - [X] Lista de mensagens \n    */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        setListaDeMensagens([\n            mensagem\n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var user = router.query;\n    var username = JSON.parse(user);\n    console.log(username.name);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"PXZPdpmKzg4xIP3+5ktIj5hIDMM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: user\n                }, void 0, false, {\n                    fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n            lineNumber: 124,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                                lineNumber: 179,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                                lineNumber: 189,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                                lineNumber: 190,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                        lineNumber: 174,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n                lineNumber: 162,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/wsasouza/Documentos/Alura/aluracord/pages/chat.js\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSztnQ0FDSnlCLFVBQVUsRUFBRSxDQUFDO29DQUNYcUMsS0FBSyxFQUFFLENBQU07b0NBQ2JuQixNQUFNLEVBQUUsQ0FBTTtvQ0FDZEQsWUFBWSxFQUFFLENBQUs7b0NBQ25CaEIsT0FBTyxFQUFFLENBQWM7b0NBQ3ZCdUMsV0FBVyxFQUFFLENBQUs7Z0NBQ3BCLENBQUM7Z0NBQ0RXLEdBQUcsRUFBRyxDQUFzQzs7Ozs7O3dHQUU3QzlFLHNEQUFJO2dDQUFDMEUsR0FBRyxFQUFDLENBQVE7MENBQUVoRSxRQUFRLENBQUNJLEVBQUU7Ozs7Ozt3R0FDOUJkLHNEQUFJO2dDQUNIMkIsVUFBVSxFQUFFLENBQUM7b0NBQ1hvRCxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQnpDLEtBQUssRUFBRWpDLG9FQUFvQztnQ0FDN0MsQ0FBQztnQ0FDRG9FLEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ08sSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFHakN4RSxRQUFRLENBQUNLLEtBQUs7O2VBdENWTCxRQUFRLENBQUNDLEVBQUU7Ozs7O1FBeUN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BN0RRd0MsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHF1ZXJ5OiB1c2VyIH0gPSByb3V0ZXI7XG4gIGNvbnN0IHVzZXJuYW1lID0gSlNPTi5wYXJzZSh1c2VyKTtcblxuICBjb25zb2xlLmxvZyh1c2VybmFtZS5uYW1lKTtcblxuICAvKlxuICAgIC8vIFVzdcOhcmlvXG4gICAgLSBVc3XDoXJpbyBkaWdpdGEgbm8gY2FtcG8gdGV4dGFyZWFcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxuICAgIC0gVGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbVxuICAgIFxuICAgIC8vIERldlxuICAgIC0gW1hdIENhbXBvIGNyaWFkb1xuICAgIC0gW1hdIFZhbW9zIHVzYXIgbyBvbkNoYW5nZSB1c2EgbyB1c2VTdGF0ZSAodGVyIGlmIHByYSBjYXNvIHNlamEgZW50ZXIgcHJhIGxpbXBhciBhIHZhcmlhdmVsKVxuICAgIC0gW1hdIExpc3RhIGRlIG1lbnNhZ2VucyBcbiAgICAqL1xuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgZGU6ICd2YW5lc3NhbWV0b25pbmknLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICB9O1xuXG4gICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbbWVuc2FnZW0sIC4uLmxpc3RhRGVNZW5zYWdlbnNdKTtcbiAgICBzZXRNZW5zYWdlbSgnJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ10sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2Vuc30gLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj57dXNlcn08L1RleHQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxuICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHRhZz1cInVsXCJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxuICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXG4gICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGFnPVwic3BhblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiaWQiLCJsaXN0YURlTWVuc2FnZW5zIiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInJvdXRlciIsInVzZXIiLCJxdWVyeSIsInVzZXJuYW1lIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});