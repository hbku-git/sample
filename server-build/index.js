/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var use_sse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-sse */ \"use-sse\");\n/* harmony import */ var use_sse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(use_sse__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_store_reducers_generalReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/store/reducers/generalReducer */ \"./src/store/reducers/generalReducer.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar enforce = __webpack_require__(/*! express-sslify */ \"express-sslify\"); // app.use(enforce.HTTPS());\n\n\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('./build'));\napp.get('*', async (req, res) => {\n  const {\n    ServerDataContext,\n    resolveData\n  } = Object(use_sse__WEBPACK_IMPORTED_MODULE_8__[\"createServerContext\"])();\n  const css = new Set(); // CSS for all rendered React components\n\n  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__[\"configureStore\"])({\n    reducer: {\n      general: _src_store_reducers_generalReducer__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }\n  });\n  const preloadedState = store.getState();\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ServerDataContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)))));\n  const datar = await resolveData();\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ServerDataContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)))));\n  console.log('app', {\n    app\n  });\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    let data1 = data.replace('<div class=\"wrapper\" id=\"root\"></div>', `<div id=\"root\" class=\"wrapper\">${app}</div>`);\n    const finalState = store.getState();\n    let data2 = data1.replace('<!--#REDUX-->', `<script>\n\n\n      \n          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\\\u003c')}\n        </script>`);\n    let data3 = data2.replace('<title></title>', `<title>${finalState.general.titleSEO ? finalState.general.titleSEO : 'HBKU Innovation Center'}</title>`);\n    console.log('final State', {\n      finalState,\n      data3\n    });\n    return res.send(data3);\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Container */ \"./src/components/Container.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScrollToTop */ \"./src/components/ScrollToTop.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n/* harmony import */ var _pages_ThemePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ThemePage */ \"./src/pages/ThemePage.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.js\");\n/* harmony import */ var _blocks_CTABlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/CTABlock */ \"./src/blocks/CTABlock.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _pages_SearchPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/SearchPage */ \"./src/pages/SearchPage.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst {\n  store,\n  persistor\n} = Object(_store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__[\"PersistGate\"], {\n    loading: null,\n    persistor: persistor\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Routes\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/old-front\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_HomePage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_SearchPage__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/blocks/BiographiesBlock.js":
/*!****************************************!*\
  !*** ./src/blocks/BiographiesBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_selectors_bios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/bios */ \"./src/store/selectors/bios.js\");\n/* harmony import */ var _components_Bio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Bio */ \"./src/components/Bio.js\");\n\n\n\n\n\nconst BiographiesBlock = _ref => {\n  let {\n    onLoadMore\n  } = _ref;\n  const bioSlice = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_selectors_bios__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  if (!bioSlice.list.length) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'p-5 text-center'\n    }, \"No Experts found that match your current selection.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Kindly Try another Focus Area\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"s-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-48\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"selected__subtheme\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"card-block-list\"\n  }, bioSlice.list.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bio__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: item.Nid,\n    bio: item\n  })))), bioSlice.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'p-5 m-y-5'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: 'images/load.gif',\n    className: 'loading-item'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loading\"\n  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pagination-wrapper text-center m-t-3 m-b-3 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    onClick: e => {\n      onLoadMore(bioSlice.page + 1);\n    },\n    id: \"btn-stload\",\n    className: \"big action m-t-0\"\n  }, \"Load More\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BiographiesBlock);\n\n//# sourceURL=webpack:///./src/blocks/BiographiesBlock.js?");

/***/ }),

/***/ "./src/blocks/CTABlock.js":
/*!********************************!*\
  !*** ./src/blocks/CTABlock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst CTABlock = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"call-to-action section-animate-icons\",\n    style: {\n      backgroundColor: \"#120f34\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row align-items-center justify-content-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-lg-5 order-lg-last\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cta-illustrations text-center text-lg-right content-mb-md-50\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/img/cta-illustrations.png\",\n    alt: \"Image\",\n    className: \"animate-float-bob-y\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-lg-7 col-md-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cta-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"title\"\n  }, \"Ready To Get To Know Our Professional And Academic Experts ? \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"subtitle\"\n  }, \"10 Years of Excellence \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"cta-note\"\n  }, \"Get Every Single Updates\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\",\n    className: \"template-btn\"\n  }, \"Let\\u2019s Talk Expertise \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"far fa-long-arrow-right\"\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"animate-icons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/img/shape/dots-circle.png\",\n    alt: \"Icon\",\n    className: \"dots-circle\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cta-shape\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/img/shape/cta-shape.png\",\n    alt: \"Shape\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CTABlock);\n\n//# sourceURL=webpack:///./src/blocks/CTABlock.js?");

/***/ }),

/***/ "./src/blocks/ExpertsBlock.js":
/*!************************************!*\
  !*** ./src/blocks/ExpertsBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_selectors_bios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/bios */ \"./src/store/selectors/bios.js\");\n/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/constants */ \"./src/store/constants.js\");\n\n\n\n\n\nconst ExpertsBlock = _ref => {\n  let {\n    theme,\n    subthemes\n  } = _ref;\n  const bios = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_selectors_bios__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"team-section mt-5 bg-color-primary-5 mb-70 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"section-heading text-center mb-30\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"title\"\n  }, \"Meet Our Experts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"tagline\"\n  }, \"Best Pool of Talent in the MEA region\")), bios.loading && bios.page === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'w-100 text-center'\n  }, \"Loading\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row team-member-items justify-content-center\"\n  }, bios.list.map(item => {\n    const url = _store_constants__WEBPACK_IMPORTED_MODULE_3__[\"BASE_URL\"] + 'node/' + item.nid;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \" col-lg-3 col-md-4 col-sm-6 wow fadeInUp mb-30\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"member-item mt-30 h-100\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"member-photo\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      height: \"250\",\n      style: {\n        objectFit: 'cover'\n      },\n      src: item.Image,\n      alt: item.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"social-icons\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fab fa-facebook-f\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fab fa-twitter\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fab fa-linkedin-in\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fab fa-youtube\"\n    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      className: \"name\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: url,\n      target: \"_blank\"\n    }, item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'title'\n    }, \"Areas of Expertise: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'd-flex overflow-auto flex-wrap justify-content-center'\n    }, item['subtheme-text'].map(it => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          whiteSpace: 'normal'\n        },\n        className: 'm-1 text-break badge badge-pill badge-primary color-white'\n      }, it);\n    }))));\n  }))), bios.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'p-5 w-100 text-center'\n  }, \"Loading\") : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpertsBlock);\n\n//# sourceURL=webpack:///./src/blocks/ExpertsBlock.js?");

/***/ }),

/***/ "./src/blocks/HeroBannerBlock.js":
/*!***************************************!*\
  !*** ./src/blocks/HeroBannerBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HeroBannerBlock = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"inner-banner m-b-0\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"group-header\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mez spotlight spotlight-md\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__slider\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__item\",\n    style: {\n      backgroundImage: \"url('images/banner.jpg')\"\n    }\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"public/images/banner.jpg\",\n    height: \"1024\",\n    width: \"1920\",\n    className: \"img-responsive\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__content\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__title text-white full90\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"text-left\"\n  }, \"A national resource of knowledge \"), /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"text-right\"\n  }, \"serving government, industry and society in Qatar \")))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBannerBlock);\n\n//# sourceURL=webpack:///./src/blocks/HeroBannerBlock.js?");

/***/ }),

/***/ "./src/blocks/HeroBannerV2Block.js":
/*!*****************************************!*\
  !*** ./src/blocks/HeroBannerV2Block.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HeroBannerV2Block = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"inner-banner inner-bannerv2 m-b-0\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"group-header\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mez spotlight spotlight-md\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__slider\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__item\",\n    style: {\n      backgroundImage: \"url('images/expertise-catalog_header.jpg')\"\n    }\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"images/banner.jpg\",\n    height: \"1024\",\n    width: \"1920\",\n    className: \"img-responsive\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__content\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container full-height\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"relative full-height\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"spotlight__title half\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"A National intellectual resource of knowledge serving government, industry and society\"))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBannerV2Block);\n\n//# sourceURL=webpack:///./src/blocks/HeroBannerV2Block.js?");

/***/ }),

/***/ "./src/blocks/IntroBlock.js":
/*!**********************************!*\
  !*** ./src/blocks/IntroBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst IntroBlock = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"m-wrap \"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-48\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"m-b-2\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"big\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    className: \"text-bold\"\n  }, \"The HBKU Expertise Catalog (EC) was designed and developed to provide a seamless, sustainable and diversified collaboration with our industry stakeholders and partners to primarily make our intellectual knowledge and experience accessible to anyone who needs it, in seconds. \"), /*#__PURE__*/React.createElement(\"p\", null, \"The catalog includes eight key areas of expertise. This unique system will allow any visitor to filter their search within these expertise areas by entering the required categories, sub-categories, alphabetically, or just via a basic search bar. \"), /*#__PURE__*/React.createElement(\"p\", null, \"We look forward to collaborating with our global & local partners and stakeholders for an innovation-based, smart and sustainable future.\")))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IntroBlock);\n\n//# sourceURL=webpack:///./src/blocks/IntroBlock.js?");

/***/ }),

/***/ "./src/blocks/MailingListBlock.js":
/*!****************************************!*\
  !*** ./src/blocks/MailingListBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst MailingListBlock = () => {\n  const content = `<div id=\"wufoo-km284b4030beeq\" style=\"height: 150px; overflow: hidden;\"> Fill out my <a href=\"https://hbku.wufoo.com/forms/km284b4030beeq\">online form</a>. </div> <script type=\"text/javascript\"> var km284b4030beeq; (function(d, t) { var s = d.createElement(t), options = { 'userName':'hbku', 'formHash':'km284b4030beeq', 'autoResize':true, 'height':'142', 'async':true, 'host':'wufoo.com', 'header':'hide', 'ssl':true }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { km284b4030beeq = new WufooForm(); km284b4030beeq.initialize(options); km284b4030beeq.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script'); </script>\n\n\t\t\t\t\t\t\t\t<!-- <form class=\"webform-client-form webform-client-form-12923 field-btn-group-block\"\n                                           action=\"/en/content/community-classes-2019\" method=\"post\"\n                                           id=\"webform-client-form-12923\" accept-charset=\"UTF-8\">\n        <div>\n            <div class=\"form__row field-btn-group\">\n                <div\n                    class=\"form-item webform-component webform-component-email webform-component--enter-you-email\">\n                    <label class=\"element-invisible\"\n                           for=\"edit-submitted-enter-you-email\">Subscribe\n                        <span class=\"form-required\"\n                              title=\"This field is required.\">*</span></label>\n                    <input required=\"required\" class=\"email form-text form-email required\"\n                           placeholder=\"Email Address\" type=\"email\"\n                           id=\"edit-submitted-enter-you-email\"\n                           name=\"submitted[enter_you_email]\" size=\"60\">\n                </div>\n                <div class=\"form-actions\"><input class=\"l-btn l-btn--tertiary form-submit\"\n                                                 type=\"submit\" name=\"op\" value=\"Subscribe\"></div>\n            </div>\n            <input type=\"hidden\" name=\"details[sid]\">\n                <input type=\"hidden\" name=\"details[page_num]\" value=\"1\">\n                    <input type=\"hidden\" name=\"details[page_count]\" value=\"1\">\n                        <input type=\"hidden\" name=\"details[finished]\" value=\"0\">\n                            <input type=\"hidden\" name=\"form_build_id\"\n                                   value=\"form-SdYbgMw2tNZL_i0bFkuDggKHT512Ic49j6vAy1HzsDs\">\n                                <input type=\"hidden\" name=\"form_token\"\n                                       value=\"XGhJZRmkWOg0om3ZEV6oVCX9U3BU8_1rIpmuAxMzg9c\">\n                                    <input type=\"hidden\" name=\"form_id\" value=\"webform_client_form_12923\">\n        </div>\n    </form> -->`;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"email-sub border-bottom m-wrap bg-darkblue text-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row row-eq-height\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-24 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email-sub__container \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email-sub__header \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email--title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"text-white \"\n  }, \"Join Our Mailing List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"p-b-0 m-b-0\"\n  }, \"Stay up to date with our latest news and events\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-24 v-center-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email-sub__container v-center \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email-sub__form m-t-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"webform-client-form webform-client-form-12923 field-btn-group-block\",\n    action: \"/en/content/community-classes-2019\",\n    method: \"post\",\n    id: \"webform-client-form-12923\",\n    \"accept-charset\": \"UTF-8\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form__row field-btn-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-item webform-component webform-component-email webform-component--enter-you-email\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"element-invisible\",\n    htmlFor: \"edit-submitted-enter-you-email\"\n  }, \"Subscribe\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"form-required\",\n    title: \"This field is required.\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: \"required\",\n    className: \"email form-text form-email required\",\n    placeholder: \"Email Address\",\n    type: \"email\",\n    id: \"edit-submitted-enter-you-email\",\n    name: \"submitted[enter_you_email]\",\n    size: \"60\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-actions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"l-btn l-btn--tertiary form-submit\",\n    type: \"submit\",\n    name: \"op\",\n    value: \"Subscribe\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"details[sid]\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"details[page_num]\",\n    value: \"1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"details[page_count]\",\n    value: \"1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"details[finished]\",\n    value: \"0\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"form_build_id\",\n    value: \"form-SdYbgMw2tNZL_i0bFkuDggKHT512Ic49j6vAy1HzsDs\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"form_token\",\n    value: \"XGhJZRmkWOg0om3ZEV6oVCX9U3BU8_1rIpmuAxMzg9c\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"form_id\",\n    value: \"webform_client_form_12923\"\n  })))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailingListBlock);\n\n//# sourceURL=webpack:///./src/blocks/MailingListBlock.js?");

/***/ }),

/***/ "./src/blocks/MainBannerBlock.js":
/*!***************************************!*\
  !*** ./src/blocks/MainBannerBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst MainBannerBlock = _ref => {\n  let {\n    title = \"Expertise Platform\"\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"page-title-area\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"page-title\"\n  }, title)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBannerBlock);\n\n//# sourceURL=webpack:///./src/blocks/MainBannerBlock.js?");

/***/ }),

/***/ "./src/blocks/PartnersBlock.js":
/*!*************************************!*\
  !*** ./src/blocks/PartnersBlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_partners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/partners */ \"./src/data/partners.js\");\n/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Partner */ \"./src/components/Partner.js\");\n\n\n\n\n\nconst PartnersBlock = _ref => {\n  let {\n    partners = _data_partners__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  } = _ref;\n  const settings = {\n    dotsClass: \"slider__dots\",\n    infinite: true,\n    autoplay: true,\n    autoplaySpeed: 1800,\n    speed: 900,\n    arrows: true,\n    dots: false,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [{\n      breakpoint: 1921,\n      settings: {\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        arrows: true,\n        dots: false\n      }\n    }, {\n      breakpoint: 1200,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        arrows: true,\n        dots: false\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        arrows: true,\n        dots: false\n      }\n    }, {\n      breakpoint: 567,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: true,\n        dots: false\n      }\n    }]\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"m-wrap \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-48\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"title-md m-b-3 text-darkblue text-center text-bold\"\n  }, \"Our Industry Partners\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cl2019partners2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cl2019partners__list cl2019partners_slide\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/hmc.png\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/olink.png\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/mph.png\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/microsoft.png\"\n  }))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartnersBlock);\n\n//# sourceURL=webpack:///./src/blocks/PartnersBlock.js?");

/***/ }),

/***/ "./src/blocks/ProjectsBlock.js":
/*!*************************************!*\
  !*** ./src/blocks/ProjectsBlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ProjectsBlock = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"l-wrap kp-section\",\n    style: {\n      background: \"url('images/kp-bg.png')\",\n      backgroundPosition: \"top center\",\n      backgroundSize: \"cover\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-48\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"kp-cont__slide\"\n  }, /*#__PURE__*/React.createElement(\"blockquote\", {\n    className: \" text-center text-white\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-40 col-md-offset-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"kp-cont__list\"\n  }, /*#__PURE__*/React.createElement(\"h3\", {\n    className: \"title-xl m-b-3 text-bold\"\n  }, \" Key Projects \"), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"big\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae ex accusamus ad libero voluptatibus commodi distinctio assumenda ab provident eius reiciendis accusantium reprehenderit error, vero officiis culpa? Placeat, tenetur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae ex accusamus ad libero voluptatibus commodi distinctio assumenda ab provident eius reiciendis accusantium reprehenderit error, vero officiis culpa? Placeat, tenetur?\"))))), /*#__PURE__*/React.createElement(\"blockquote\", {\n    className: \" text-center text-white\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-40 col-md-offset-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"kp-cont__list\"\n  }, /*#__PURE__*/React.createElement(\"h3\", {\n    className: \"title-xl m-b-3 text-bold\"\n  }, \" Key Projects \"), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"big\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae ex accusamus ad libero voluptatibus commodi distinctio assumenda ab provident eius reiciendis accusantium reprehenderit error, vero officiis culpa? Placeat, tenetur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae ex accusamus ad libero voluptatibus commodi distinctio assumenda ab provident eius reiciendis accusantium reprehenderit error, vero officiis culpa? Placeat, tenetur?\"))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\n\n//# sourceURL=webpack:///./src/blocks/ProjectsBlock.js?");

/***/ }),

/***/ "./src/blocks/QuoteBlock.js":
/*!**********************************!*\
  !*** ./src/blocks/QuoteBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst QuoteBlock = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"m-wrap p-t-0\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm-48\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cl2019testimonial2\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cl2019testimonial2__slide\"\n  }, /*#__PURE__*/React.createElement(\"blockquote\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row row-eq-height\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm-48\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cl2019quote__innercont\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cl2019quote__person-right\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cl2019testimonial2__content--text\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"His Excellency Jassim Bin Saif Al-Sulaiti, Minister of Transport and Communications (MoTC), announced the adoption of HBKU QCRI\\u2019s blueprint as the national AI strategy during the Qatar Information Technology and Communication Conference and Exhibition 2019 (QITCOM), Qatar\\u2019s largest ICT event\")))))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuoteBlock);\n\n//# sourceURL=webpack:///./src/blocks/QuoteBlock.js?");

/***/ }),

/***/ "./src/blocks/TestimonialsBlock.js":
/*!*****************************************!*\
  !*** ./src/blocks/TestimonialsBlock.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BannerBio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BannerBio */ \"./src/components/BannerBio.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst TestimonialsBlock = () => {\n  const random = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(state => state.random).list;\n  const config = {\n    slidesToShow: 1,\n    dotsClass: \"slider__dots\",\n    dots: true,\n    arrows: false,\n    autoplay: true\n  };\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"s-wrap meet-section\",\n    style: {\n      background: \"url('images/banner.jpg')\",\n      backgroundPosition: \"top center\",\n      backgroundSize: \"cover\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-40 col-md-offset-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial__slide\"\n  }, /*#__PURE__*/React.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, config, random ? random.map(item => /*#__PURE__*/React.createElement(_components_BannerBio__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    bio: item,\n    key: 'slider-bio-' + item.Nid\n  })) : null)))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialsBlock);\n\n//# sourceURL=webpack:///./src/blocks/TestimonialsBlock.js?");

/***/ }),

/***/ "./src/blocks/TestimonialsBlockv2.js":
/*!*******************************************!*\
  !*** ./src/blocks/TestimonialsBlockv2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TestimonialsBlockv2 = () => {\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"s-wrap meet-section\",\n    style: {\n      background: 'url(\"images/banner.jpg\")',\n      backgroundPosition: ' top center',\n      backgroundSize: 'cover'\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-md-40 col-md-offset-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial__slide\"\n  }, /*#__PURE__*/React.createElement(\"blockquote\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__innercont\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person-left\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"images/t-img2.png\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person-right\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial__content--text text-white\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"t-title\"\n  }, \"Meet our experts\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"person-name\"\n  }, \"Saif Al\\u2011Kuwari\"), /*#__PURE__*/React.createElement(\"ul\", {\n    className: \"t-list\"\n  }, /*#__PURE__*/React.createElement(\"li\", null, \"Applied Cryptography\"), /*#__PURE__*/React.createElement(\"li\", null, \"Computational Forensics\"), /*#__PURE__*/React.createElement(\"li\", null, \"AI applications in Cybersecurity\")), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#\",\n    target: \"_blank\",\n    className: \"action-white m-t-2\"\n  }, \"View More\")))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialsBlockv2);\n\n//# sourceURL=webpack:///./src/blocks/TestimonialsBlockv2.js?");

/***/ }),

/***/ "./src/blocks/ThemesBlock.js":
/*!***********************************!*\
  !*** ./src/blocks/ThemesBlock.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_selectors_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/themes */ \"./src/store/selectors/themes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_fetchSubthemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/fetchSubthemes */ \"./src/store/actions/fetchSubthemes.js\");\n/* harmony import */ var _store_selectors_sub_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors/sub-themes */ \"./src/store/selectors/sub-themes.js\");\n/* harmony import */ var _components_SubAreas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SubAreas */ \"./src/components/SubAreas.js\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ \"react-select\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-debounce-input */ \"react-debounce-input\");\n/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst ThemesBlock = () => {\n  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_selectors_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).list;\n  const subthemes = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_selectors_sub_themes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).list;\n  const subthemesLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_selectors_sub_themes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).loading;\n  console.log('themes', {\n    themes,\n    subthemes\n  });\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  const [searchParams] = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useSearchParams\"])();\n  const area = searchParams.get('area');\n  const mode = searchParams.get('mode');\n  const subAreas = searchParams.getAll('sub-areas');\n  const selectedName = searchParams.get('name');\n  console.log({\n    searchParams,\n    area\n  });\n  const [subFilter, setSubfilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(selectedName);\n  const [selectedSubarea, setSelectedSubArea] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [subAreaRemoved, setSubAreaRemoved] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const isActive = tid => {\n    return area === tid;\n  };\n\n  const navigation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useNavigate\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_store_actions_fetchSubthemes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      theme: area\n    }));\n    console.log('law', document.getElementById('sub-areas').offsetTop); //  document.getElementById('sub-areas').offsetTop\n\n    /*window.scrollTo({\n        behavior:'smooth',\n        top:        document.getElementById('sub-areas').offsetTop + 250\n    })*/\n  }, [area]);\n\n  const navigate = tid => {\n    const modeQuery = +mode ? 'mode=' + mode : '';\n    const params = new URLSearchParams({});\n\n    if (mode) {\n      params.append('mode', mode);\n    }\n\n    if (name) {\n      params.append('name', name);\n    }\n\n    if (tid) {\n      params.append('area', tid);\n    }\n\n    navigation('?' + params.toString());\n  };\n\n  const updateSubarea = function (tid) {\n    let isRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    setSelectedSubArea(tid);\n    setSubAreaRemoved(isRemove);\n  };\n\n  const navigateSubtheme = function (tid) {\n    let isRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    let selectedName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n    console.log('on subtheme change', {\n      tid,\n      isRemove,\n      selectedName,\n      name\n    });\n    const params = new URLSearchParams({});\n\n    if (area) {\n      params.append('area', area);\n    }\n\n    if (mode && mode != 'null') {\n      params.append('mode', mode);\n    }\n\n    if (name) {\n      console.log('we have a name:', {\n        name,\n        selectedName\n      });\n      params.append('name', name);\n    }\n\n    if (tid) {\n      params.append('sub-areas', tid);\n    }\n\n    console.log('params', {\n      params: params.toString()\n    });\n    navigation('?' + params.toString());\n  };\n\n  const onFilterChange = e => {\n    setName(e.target.value);\n  };\n\n  const onSubthemeChanged = tid => {\n    setSelectedSubArea(tid);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log('something changed');\n    navigateSubtheme(selectedSubarea, subAreaRemoved, name ? name : selectedName);\n  }, [selectedSubarea, name, subAreaRemoved]);\n  const areasFiltered = subFilter ? [...subthemes].filter(item => item.name.toLowerCase().includes(subFilter.toLowerCase().trim())) : subthemes;\n  console.log({\n    areasFiltered\n  });\n  const activeArea = themes.find(item => {\n    return item.tid === area;\n  });\n  let currMode = \"all areas\";\n\n  if (activeArea) {\n    currMode = \"Selected Expertise Area\";\n  }\n\n  if (selectedSubarea) {\n    currMode = \"Selected Expertise Sub-Area\";\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"inner-banner filterinner-banner\",\n    id: 'filters-header'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"group-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mez spotlight spotlight-md\",\n    style: {\n      backgroundImage: activeArea ? `url('${activeArea.bgImg}')` : \"url('images/smart-city.png')\",\n      transition: 'background 1s',\n      willChange: 'background-image',\n      overflow: \"visible\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spotlight__content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spotlight__title text-white full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"View our specialists from across various \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" areas of expertise  \"), mode === '2' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat__subtheme p-t-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: \"basic-single\",\n    classNamePrefix: \"select\",\n    defaultValue: activeArea ? [{\n      value: activeArea.tid,\n      label: activeArea.name\n    }] : null,\n    isClearable: true,\n    isSearchable: true,\n    name: \"name\",\n    onChange: item => {\n      if (!item) {\n        navigate(null);\n        return;\n      }\n\n      navigate(item.value);\n    },\n    options: themes.map(item => {\n      return {\n        value: item.tid,\n        label: item.name\n      };\n    })\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat__subtheme p-t-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, themes.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: isActive(item.tid) ? 'active' : '',\n    key: item.tid,\n    onClick: e => navigate(item.tid)\n  }, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat__subtheme cat__subtheme__item\",\n    style: !activeArea ? {\n      borderBottom: 'unset'\n    } : null,\n    id: 'sub-areas'\n  }, activeArea ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"searchsubtheme__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: 'm-b-2'\n  }, \"Select Focus Sub-Area of Expertise in \", activeArea.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SubAreas__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isLoading: subthemesLoading,\n    onClickItem: onSubthemeChanged,\n    subAreas: subthemes,\n    filter: subFilter,\n    selected: subAreas ? subAreas : []\n  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat__subtheme cat__subtheme__item\",\n    id: 'names'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: 'm-b-2'\n  }, \"Search by name in \", currMode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat__searchbox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      maxWidth: '100%',\n      marginRight: 0\n    },\n    className: \"searchbox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_debounce_input__WEBPACK_IMPORTED_MODULE_8__[\"DebounceInput\"], {\n    debounceTimeout: 300,\n    className: \"searchbox-input\",\n    type: \"text\",\n    value: name,\n    onChange: onFilterChange,\n    onKeyPress: e => {\n      console.log(e);\n    },\n    placeholder: \"Type a name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"searchbox-submit\",\n    value: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-search\",\n    \"aria-hidden\": \"true\"\n  })))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemesBlock);\n\n//# sourceURL=webpack:///./src/blocks/ThemesBlock.js?");

/***/ }),

/***/ "./src/blocks/ThemesSliderBlock.js":
/*!*****************************************!*\
  !*** ./src/blocks/ThemesSliderBlock.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_selectors_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/themes */ \"./src/store/selectors/themes.js\");\n\n\n\nconst ThemesSliderBlock = () => {\n  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(_store_selectors_themes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).list;\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"m-wrap p-t-0 section-coming-event\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"block-services p-b-3\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnBox m-t-3\",\n    id: \"btnBoxSlide\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnBox-list mez slider\"\n  }, themes.map(item => /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnBox-thumbnail\",\n    title: \"\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/?area=\" + item.tid\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    className: \"btnBox-img full-width\",\n    src: item.bgImg,\n    title: \"\",\n    height: 150,\n    width: 300\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnBox-details\",\n    title: \"\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnBox-header\"\n  }, /*#__PURE__*/React.createElement(\"h5\", null, item.name, \" \")))))))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"text-center p-t-3\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/\",\n    target: \"_blank\",\n    className: \"big action\"\n  }, \"View More\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemesSliderBlock);\n\n//# sourceURL=webpack:///./src/blocks/ThemesSliderBlock.js?");

/***/ }),

/***/ "./src/components/BannerBio.js":
/*!*************************************!*\
  !*** ./src/components/BannerBio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/constants */ \"./src/store/constants.js\");\n\n\nconst BannerBio = _ref => {\n  let {\n    bio\n  } = _ref;\n  return /*#__PURE__*/React.createElement(\"blockquote\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__innercont\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person-left\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person p-1\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    width: 300,\n    height: 300,\n    src: bio.field_image,\n    onError: e => {\n      e.target.src = \"images/default.png\";\n    }\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"epquote__person-right\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ep_testimonial__content--text text-white\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"t-title\"\n  }, \"Meet Some of Our Experts\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"person-name\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: _store_constants__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"] + 'node/' + bio.Nid\n  }, bio.title)), /*#__PURE__*/React.createElement(\"ul\", {\n    className: \"t-list\"\n  }, bio.subAreasNames.slice(0, 3).map(item => /*#__PURE__*/React.createElement(\"li\", null, item)))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BannerBio);\n\n//# sourceURL=webpack:///./src/components/BannerBio.js?");

/***/ }),

/***/ "./src/components/Bio.js":
/*!*******************************!*\
  !*** ./src/components/Bio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/constants */ \"./src/store/constants.js\");\n\n\nconst Bio = _ref => {\n  let {\n    bio\n  } = _ref;\n  const suffix = bio.suffix instanceof Array ? '' : bio.suffix; // eslint-disable-next-line no-undef\n\n  let text = $('<textarea />').html(\n  /*suffix + ' ' +*/\n  bio.title).text();\n\n  if (!text.toLowerCase().startsWith('dr.')) {\n    text = suffix + ' ' + text;\n  }\n\n  return /*#__PURE__*/React.createElement(\"li\", {\n    className: \"card-block-list--item\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"p-card\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"p-card__img\"\n  }, /*#__PURE__*/React.createElement(\"figure\", null, /*#__PURE__*/React.createElement(\"img\", {\n    onError: e => {\n      console.log(e);\n      e.target.src = \"images/default.png\";\n    },\n    style: {\n      width: '100%',\n      height: '350px',\n      objectFit: 'cover',\n      backgroundImage: \"url('images/load.gif')\",\n      backgroundRepeat: 'no-repeat',\n      backgroundSize: 'contain',\n      backgroundPosition: 'center',\n      minHeight: 'unset!important'\n    },\n    width: 300,\n    height: 300,\n    src: bio.field_image,\n    alt: \"\",\n    title: \"\",\n    className: \"d-block img-responsive full-width\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"p-card__info text-white\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"pro__title\"\n  }, /*#__PURE__*/React.createElement(\"h4\", {\n    className: \"pro-name\"\n  }, text), /*#__PURE__*/React.createElement(\"h6\", {\n    className: \"pro-int\"\n  }, bio.field_related_college)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"pro__subtheme\",\n    style: {\n      fontSize: 12\n    }\n  }, /*#__PURE__*/React.createElement(\"span\", null, \"Expert in: \"), /*#__PURE__*/React.createElement(\"br\", null), bio.subAreasNames.slice(0, 4).map(item => {\n    // eslint-disable-next-line no-undef\n    return $('<textarea />').html(item).text();\n  }).join(', ')), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"pro-btn\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"btn-profile\",\n    href: _store_constants__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"] + 'node/' + bio.Nid,\n    target: \"_blank\"\n  }, \"View Profile\"), /*#__PURE__*/React.createElement(\"a\", {\n    className: \"btn-email\",\n    href: 'mailto:' + bio.email\n  }, \" \", /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa fa-envelope\"\n  }))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bio);\n\n//# sourceURL=webpack:///./src/components/Bio.js?");

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_MailingListBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/MailingListBlock */ \"./src/blocks/MailingListBlock.js\");\n/* harmony import */ var _store_reducers_generalReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/generalReducer */ \"./src/store/reducers/generalReducer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _blocks_MainBannerBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/MainBannerBlock */ \"./src/blocks/MainBannerBlock.js\");\n/* harmony import */ var _blocks_ThemesBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/ThemesBlock */ \"./src/blocks/ThemesBlock.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst Container = props => {\n  const fontSize24 = {\n    fontSize: 24\n  };\n  const {\n    title\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(_store_reducers_generalReducer__WEBPACK_IMPORTED_MODULE_5__[\"generalSelector\"]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack:///./src/components/Container.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    dir: \"ltr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"top \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    dir: \"ltr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/images/HBKU-Solid-White.png\",\n    alt: \"HMKU logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Hamad Bin Khalifa University Education City, Doha - Qatar\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://facebook.com/HamadbinKhalifaUniversity\",\n    title: \"facebook\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-facebook-square\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://twitter.com/HBKU\",\n    title: \"twitter\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-twitter-square\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.instagram.com/hbku/\",\n    title: \"instagram\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-instagram\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.linkedin.com/edu/hamad-bin-khalifa-university-189106\",\n    title: \"linkedin\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-linkedin-square\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/about-hbku/hbku-leadership\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"HBKU Leadership\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/careers\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Careers\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/people\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"People\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/about-hbku/departments\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Administrative Departments\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Academics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/academics\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Colleges\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/eec\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Executive Education\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/admissions\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Admissions\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/hbku-library\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"HBKU Library\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Research\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/research/sro \",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Sponsored Research Office\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://research.hbku.edu.qa/research/facilities-services\"\n  }, \"Facilities\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://research.hbku.edu.qa/research/funding\"\n  }, \"Funding\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"http://research.hbku.edu.qa/research/office-vpr\"\n  }, \"OVPR\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Life\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/life-hbku\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Overview\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/life-hbku/housing-education-City\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Housing at Education City\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://next.qf.org.qa/education/student-financial-services\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Financial Aid & Scholarship\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/academic-calendar/2018-2019#/year/11776\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Calendar of Events\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sponsors\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\",\n    title: \"Partner \",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/images/footer-1.png\",\n    alt: \"Partner \"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bottom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bottom_inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\xA9 \", new Date().getFullYear(), \" All rights reserved to Hamad Bin Khalifa University.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/legal-information\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Cookies Policy \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/privacy-policy\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Privacy Policy\")))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    dir: \"ltr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"top-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"top-header__inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\",\n    className: \"logo-link\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"logo\",\n    src: \"images/HBKU-RGB-2021.png\",\n    alt: \"HBKU logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navigation-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navigation-top-application\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn d-inline-block d-md-none ntaToggle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-bars\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-md-none right-sidebar nta-right-sidebar closed\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn-close\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-times\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://mybanner.hbku.edu.qa:9060/PROD9/twbkwbis.P_GenMenu?name=homepage\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"bordred\"\n  }, \"Apply now\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/ar\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"nav-link nav-language\"\n  }, \"\\u0627\\u0644\\u0639\\u0631\\u0628\\u064A\\u0629\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"nav-link nav-language search-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-search text-darkblue\",\n    style: {\n      fontSize: 24\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-none d-md-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://mybanner.hbku.edu.qa:9060/PROD9/twbkwbis.P_GenMenu?name=homepage\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"bordred\"\n  }, \"Apply now\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/ar\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"nav-link nav-language\"\n  }, \"\\u0627\\u0644\\u0639\\u0631\\u0628\\u064A\\u0629\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"nav-link nav-language search-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-search text-darkblue\",\n    tyle: {\n      fontSize: 24\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navigation-top-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn d-inline-block d-md-none ntnToggle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-bars\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-md-none right-sidebar closed\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn-close\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-times\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    \"aria-current\": \"page\",\n    className: \"active\",\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/home.png\",\n    alt: \"home page\",\n    className: \"d-sm-none d-xs-none\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"d-md-none \"\n  }, \"Home \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university\"\n  }, \"About HBKU\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/https://www.hbku.edu.qa/en/academics\"\n  }, \"Academics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://innovation.hbku.edu.qa/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Innovation\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/research\"\n  }, \"Research\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/https://www.hbku.edu.qa/en/admissions\"\n  }, \"Admissions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/https://www.hbku.edu.qa/en/life-hbku\"\n  }, \"University Life\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-none d-md-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"images/home.png\",\n    alt: \"home page\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"About HBKU\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/academics\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Academics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://innovation.hbku.edu.qa/\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Innovation\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/research\"\n  }, \"Research\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/admissions\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"Admissions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.hbku.edu.qa/en/life-hbku\",\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"University Life\"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-hero\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"breadcrumb\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"Expertise Catalog\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"HBKU Expertise Catalog\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-category\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/menu-items */ \"./src/data/menu-items.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\n\n\n\nconst Menu = _ref => {\n  let {\n    items = _data_menu_items__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  } = _ref;\n  items = items ? items : [];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"menu-tab menu-tab_v3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bg-info-light excellence-tabmenu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"menuTab-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"nav nav-tabs\",\n    id: \"menuTab\",\n    role: \"tablist\"\n  }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], item))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"menu-socialMedia\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"mailto:innovation@hbku.edu.qa\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-envelope-o\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"menuPrintIcon\",\n    href: \"javascript:void(0)\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-print\"\n  })))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/MenuItem.js":
/*!************************************!*\
  !*** ./src/components/MenuItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst MenuItem = _ref => {\n  let {\n    title = 'link',\n    link = '#',\n    ...props\n  } = _ref;\n  let resolved = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useResolvedPath\"])(link);\n  let match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useMatch\"])({\n    path: resolved.pathname,\n    end: true\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: `nav-link ${match ? 'active' : ''}`,\n    href: link,\n    \"aria-controls\": \"menu-1\",\n    \"aria-selected\": \"false\"\n  }, title)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\n\n//# sourceURL=webpack:///./src/components/MenuItem.js?");

/***/ }),

/***/ "./src/components/Partner.js":
/*!***********************************!*\
  !*** ./src/components/Partner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Partner = _ref => {\n  let {\n    title,\n    url,\n    image\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: url,\n    target: \"_blank\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: image,\n    alt: title\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Partner);\n\n//# sourceURL=webpack:///./src/components/Partner.js?");

/***/ }),

/***/ "./src/components/ScrollToTop.js":
/*!***************************************!*\
  !*** ./src/components/ScrollToTop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst ScrollToTop = () => {\n  const {\n    pathname\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"useLocation\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.scrollTo(0, 0);\n  }, [pathname]);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollToTop);\n\n//# sourceURL=webpack:///./src/components/ScrollToTop.js?");

/***/ }),

/***/ "./src/components/SubAreas.js":
/*!************************************!*\
  !*** ./src/components/SubAreas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"react-select\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SUBTHEMES_PER_PAGE = 20;\n\nconst SubAreas = function () {\n  let {\n    isLoading,\n    filter,\n    subAreas,\n    selected,\n    onClickItem\n  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    filter: '',\n    subAreas: [],\n    selected: [],\n    isLoading: false\n  };\n  console.log({\n    filter,\n    subAreas\n  });\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const areasFiltered = (filter ? subAreas.filter(item => item.name.toLowerCase().includes(filter.toLowerCase().trim())) : subAreas).sort(item => {\n    if (selected.length) {\n      if (selected.includes(item.tid)) {\n        return -1;\n      }\n    }\n\n    return 1;\n  });\n\n  const isActive = tid => {\n    return selected.includes(tid);\n  };\n\n  const onClick = tid => {\n    onClickItem(tid, isActive(tid));\n  };\n\n  const activeElement = subAreas.find(item => isActive(item.tid));\n  console.log({\n    areasFiltered,\n    selected,\n    activeElement\n  });\n\n  if (isLoading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: 'images/load.gif',\n      className: 'loading-item'\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"loading\"\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"basic-single\",\n    classNamePrefix: \"select\",\n    defaultValue: activeElement ? [{\n      value: activeElement.tid,\n      label: activeElement.name\n    }] : null,\n    isLoading: isLoading,\n    isClearable: true,\n    isSearchable: true,\n    name: \"name\",\n    onChange: item => {\n      onClickItem(item ? item.value : null);\n    },\n    options: subAreas.map(item => {\n      return {\n        value: item.tid,\n        label: item.name\n      };\n    })\n  }));\n  /*return (\n      <ul className=\"subtheme__cat\">\n          {areasFiltered.map(item => (<li onClick={e=>onClick(item.tid)}\n                                          className={\"d-inline-block \" + (isActive(item.tid) ? 'active' : '')}\n                                          key={item.tid}\n          >{item.name}</li>)).slice(0, SUBTHEMES_PER_PAGE\n  * page)\n           }\n          {areasFiltered.length > SUBTHEMES_PER_PAGE\n  && areasFiltered.length > page * SUBTHEMES_PER_PAGE\n  ? <li onClick={() => {\n              if(areasFiltered.length <= page * SUBTHEMES_PER_PAGE\n  ){\n                  return;\n              }\n              setPage(page + 1);\n          }} className=\"subtheme--loadmore\">Show More</li> : null}\n          {page > 1 ? <li onClick={() => {\n              if (page === 1) return;\n              setPage(page - 1);\n          }} className=\"subtheme--loadmore\">Show Less</li> : null}\n      </ul>);*/\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubAreas);\n\n//# sourceURL=webpack:///./src/components/SubAreas.js?");

/***/ }),

/***/ "./src/data/menu-items.js":
/*!********************************!*\
  !*** ./src/data/menu-items.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MenuItems = [{\n  title: 'Search',\n  link: '/'\n}, {\n  title: 'About The expertise platform',\n  link: '/about'\n}, {\n  title: 'Contact Us',\n  link: '/contact-us'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItems);\n\n//# sourceURL=webpack:///./src/data/menu-items.js?");

/***/ }),

/***/ "./src/data/partners.js":
/*!******************************!*\
  !*** ./src/data/partners.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Partners = [{\n  title: 'ASTE',\n  image: '/images/logo/logo-aste.png',\n  url: 'https://www.aste.qa/'\n}, {\n  title: 'Marubeni',\n  image: '/images/logo/logo-marubeni.png',\n  url: 'https://www.marubeni.com/en/'\n}, {\n  title: 'Promega',\n  image: '/images/logo/logo-promega.png',\n  url: 'https://worldwide.promega.com/'\n}, {\n  title: 'Qatar Scientific Company',\n  image: '/images/logo/logo-qatar-scientific.png',\n  url: 'http://www.qsneoscience.com/'\n}, {\n  title: 'Skora',\n  image: '/images/logo/logo-skora.png',\n  url: '#'\n}, {\n  title: 'iLab',\n  image: '/images/logo/logo-tasmu.png',\n  url: 'https://ilab.motc.gov.qa/'\n}, {\n  title: 'QDB',\n  image: '/images/logo/logo-qbd.png',\n  url: 'https://www.qdb.qa/en'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Partners);\n\n//# sourceURL=webpack:///./src/data/partners.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_HeroBannerBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/HeroBannerBlock */ \"./src/blocks/HeroBannerBlock.js\");\n/* harmony import */ var _blocks_IntroBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/IntroBlock */ \"./src/blocks/IntroBlock.js\");\n/* harmony import */ var _blocks_ThemesBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/ThemesBlock */ \"./src/blocks/ThemesBlock.js\");\n/* harmony import */ var _blocks_QuoteBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/QuoteBlock */ \"./src/blocks/QuoteBlock.js\");\n/* harmony import */ var _blocks_TestimonialsBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/TestimonialsBlock */ \"./src/blocks/TestimonialsBlock.js\");\n/* harmony import */ var _blocks_TestimonialsBlockv2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/TestimonialsBlockv2 */ \"./src/blocks/TestimonialsBlockv2.js\");\n/* harmony import */ var _blocks_PartnersBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/PartnersBlock */ \"./src/blocks/PartnersBlock.js\");\n/* harmony import */ var _blocks_ProjectsBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/ProjectsBlock */ \"./src/blocks/ProjectsBlock.js\");\n/* harmony import */ var _blocks_HeroBannerV2Block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/HeroBannerV2Block */ \"./src/blocks/HeroBannerV2Block.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _blocks_ThemesSliderBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/ThemesSliderBlock */ \"./src/blocks/ThemesSliderBlock.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _store_actions_fetchRandomBios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/fetchRandomBios */ \"./src/store/actions/fetchRandomBios.js\");\n/* harmony import */ var _store_actions_fetchThemes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/actions/fetchThemes */ \"./src/store/actions/fetchThemes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst HomePage = () => {\n  const [searchParams] = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"useSearchParams\"])();\n  const mode = searchParams.get('mode');\n  console.log({\n    searchParams,\n    mode\n  });\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_store_actions_fetchRandomBios__WEBPACK_IMPORTED_MODULE_13__[\"default\"])());\n    dispatch(Object(_store_actions_fetchThemes__WEBPACK_IMPORTED_MODULE_14__[\"default\"])());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mode === '2' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_HeroBannerBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_HeroBannerV2Block__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_IntroBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_ThemesSliderBlock__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_QuoteBlock__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_TestimonialsBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_PartnersBlock__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_ProjectsBlock__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/SearchPage.js":
/*!*********************************!*\
  !*** ./src/pages/SearchPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_fetchThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/fetchThemes */ \"./src/store/actions/fetchThemes.js\");\n/* harmony import */ var _blocks_ThemesBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/ThemesBlock */ \"./src/blocks/ThemesBlock.js\");\n/* harmony import */ var _blocks_BiographiesBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BiographiesBlock */ \"./src/blocks/BiographiesBlock.js\");\n/* harmony import */ var _store_actions_fetchBios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/fetchBios */ \"./src/store/actions/fetchBios.js\");\n/* harmony import */ var _store_selectors_bios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/selectors/bios */ \"./src/store/selectors/bios.js\");\n/* harmony import */ var _store_selectors_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/selectors/themes */ \"./src/store/selectors/themes.js\");\n\n\n\n\n\n\n\n\n\n\nconst SearchPage = () => {\n  //\n  const [searchParams] = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"useSearchParams\"])();\n  const mode = searchParams.get('mode');\n  console.log({\n    searchParams,\n    mode\n  });\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    dispatch(Object(_store_actions_fetchThemes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  }, []);\n  const subAreas = searchParams.getAll('sub-areas');\n  const area = searchParams.get('area');\n  const name = searchParams.get('name');\n  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(_store_selectors_themes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    search();\n  }, [subAreas]);\n\n  const search = function () {\n    let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    let colleges = [];\n    console.log('THEEEE', {\n      themes\n    });\n\n    if (area && themes.list) {\n      const t = themes.list.find(item => item.tid === area);\n\n      if (t) {\n        colleges = t.colleges;\n        console.log('find in colleges', {\n          colleges\n        });\n      }\n    }\n\n    dispatch(Object(_store_actions_fetchBios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      subthemes: subAreas,\n      theme: area,\n      page,\n      colleges,\n      name\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blocks_ThemesBlock__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blocks_BiographiesBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onLoadMore: p => search(p)\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\n\n//# sourceURL=webpack:///./src/pages/SearchPage.js?");

/***/ }),

/***/ "./src/pages/ThemePage.js":
/*!********************************!*\
  !*** ./src/pages/ThemePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_MainBannerBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/MainBannerBlock */ \"./src/blocks/MainBannerBlock.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_selectors_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors/themes */ \"./src/store/selectors/themes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blocks_ExpertsBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/ExpertsBlock */ \"./src/blocks/ExpertsBlock.js\");\n/* harmony import */ var _store_actions_fetchBios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/fetchBios */ \"./src/store/actions/fetchBios.js\");\n/* harmony import */ var _store_selectors_bios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/selectors/bios */ \"./src/store/selectors/bios.js\");\n\n\n\n\n\n\n\n\n\nconst ThemePage = () => {\n  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(_store_selectors_themes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  const bios = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(_store_selectors_bios__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  let params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useParams\"])();\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const {\n    id\n  } = params;\n  const theme = themes.list.find(item => item.tid === id.toString());\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_store_actions_fetchBios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      theme: id,\n      colleges: theme.colleges\n    }));\n  }, [id]);\n\n  const load = () => {\n    dispatch(Object(_store_actions_fetchBios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      theme: id,\n      page: bios.page + 1,\n      colleges: theme.colleges\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_MainBannerBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Theme Focus : \" + theme.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_ExpertsBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'container'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'row justify-content-center'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'col-6'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: load,\n    className: \"btn btn-primary w-100 m-5\"\n  }, \"View More\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemePage);\n\n//# sourceURL=webpack:///./src/pages/ThemePage.js?");

/***/ }),

/***/ "./src/store/actions/fetchBios.js":
/*!****************************************!*\
  !*** ./src/store/actions/fetchBios.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.js\");\n/* harmony import */ var _types_bios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/bios */ \"./src/store/types/bios.js\");\n\n\n\nconst fetchBios = _ref => {\n  let {\n    subthemes = [],\n    theme = '',\n    name = '',\n    page = 0,\n    colleges = []\n  } = _ref;\n  return async (dispatch, store) => {\n    debugger;\n\n    try {\n      dispatch({\n        type: _types_bios__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_BIOS_LOADING\"],\n        payload: {\n          page\n        }\n      });\n      const params = new URLSearchParams({\n        page\n      });\n\n      if (name) {\n        params.append('name', name);\n        params.append('title', name);\n      }\n\n      if (subthemes.length) {\n        subthemes.forEach(item => {\n          params.append('field_ic_subthemes_tid[]', item);\n        });\n      } else if (theme) {\n        params.append('field_innovation_theme_tid[]', theme);\n      }\n\n      if (colleges) {\n        colleges.forEach(item => {\n          params.append('colleges[]', item);\n        });\n      }\n\n      const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"API_ENDPOINTS\"][\"bios\"] + '?' + params);\n      const data = await request.json();\n      console.log('received bios', {\n        data\n      });\n\n      if (!(data instanceof Array)) {\n        throw new Error('DATA MISMATCH');\n      }\n\n      dispatch({\n        type: _types_bios__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_BIOS_SUCCESS\"],\n        payload: {\n          data,\n          page\n        }\n      });\n    } catch (e) {\n      dispatch({\n        type: _types_bios__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_BIOS_ERROR\"]\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchBios);\n\n//# sourceURL=webpack:///./src/store/actions/fetchBios.js?");

/***/ }),

/***/ "./src/store/actions/fetchRandomBios.js":
/*!**********************************************!*\
  !*** ./src/store/actions/fetchRandomBios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.js\");\n/* harmony import */ var _types_bios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/bios */ \"./src/store/types/bios.js\");\n/* harmony import */ var _types_random_bios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/random-bios */ \"./src/store/types/random-bios.js\");\n\n\n\n\nconst fetchBios = () => async (dispatch, store) => {\n  try {\n    dispatch({\n      type: _types_random_bios__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_RANDOM_BIOS_LOADING\"]\n    });\n    const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"API_ENDPOINTS\"][\"randomBios\"] + '?' + Date.now());\n    const data = await request.json();\n    console.log('received bios', {\n      data\n    });\n\n    if (!(data instanceof Array)) {\n      throw new Error('DATA MISMATCH');\n    }\n\n    dispatch({\n      type: _types_random_bios__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_RANDOM_BIOS_SUCCESS\"],\n      payload: {\n        data\n      }\n    });\n  } catch (e) {\n    dispatch({\n      type: _types_random_bios__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_RANDOM_BIOS_ERROR\"]\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchBios);\n\n//# sourceURL=webpack:///./src/store/actions/fetchRandomBios.js?");

/***/ }),

/***/ "./src/store/actions/fetchSubthemes.js":
/*!*********************************************!*\
  !*** ./src/store/actions/fetchSubthemes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.js\");\n/* harmony import */ var _types_sub_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/sub-themes */ \"./src/store/types/sub-themes.js\");\n\n\n\nconst fetchSubthemes = _ref => {\n  let {\n    name = '',\n    theme = ''\n  } = _ref;\n  return async (dispatch, store) => {\n    try {\n      dispatch({\n        type: _types_sub_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUBTHEMES_LOADING\"]\n      });\n      const params = new URLSearchParams({\n        \"area[]\": theme\n      }).toString();\n      console.log('params', {\n        params\n      });\n      const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"API_ENDPOINTS\"][\"subthemes\"] + '?' + params);\n      const data = await request.json();\n\n      if (!(data instanceof Array)) {\n        throw new Error('DATA MISMATCH');\n      }\n\n      const updated = data.map(item => {\n        return { ...item,\n          // eslint-disable-next-line no-undef\n          name: $('<textarea />').html(item.name).text() //themes: item.theme.map(it=>it.tid)\n\n        };\n      });\n      console.log('received sub-themes', {\n        data,\n        updated\n      });\n      dispatch({\n        type: _types_sub_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUBTHEMES_SUCCESS\"],\n        payload: {\n          data: updated\n        }\n      });\n    } catch (e) {\n      dispatch({\n        type: _types_sub_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUBTHEMES_ERROR\"]\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchSubthemes);\n\n//# sourceURL=webpack:///./src/store/actions/fetchSubthemes.js?");

/***/ }),

/***/ "./src/store/actions/fetchThemes.js":
/*!******************************************!*\
  !*** ./src/store/actions/fetchThemes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.js\");\n/* harmony import */ var _types_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/themes */ \"./src/store/types/themes.js\");\n\n\n\nconst fetchThemes = function () {\n  let {\n    name\n  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    name: ''\n  };\n  return async (dispatch, store) => {\n    try {\n      dispatch({\n        type: _types_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_THEMES_LOADING\"]\n      });\n      const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"API_ENDPOINTS\"][\"themes\"] + (name ? '?name=' + name : ''));\n      const data = await request.json();\n      console.log('received themes', {\n        data\n      });\n\n      if (!(data instanceof Array)) {\n        throw new Error('DATA MISMATCH');\n      }\n\n      dispatch({\n        type: _types_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_THEMES_SUCCESS\"],\n        payload: {\n          data\n        }\n      });\n    } catch (e) {\n      dispatch({\n        type: _types_themes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_THEMES_ERROR\"]\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchThemes);\n\n//# sourceURL=webpack:///./src/store/actions/fetchThemes.js?");

/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/*! exports provided: API_URL, BASE_URL, API_ENDPOINTS, PAGE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_URL\", function() { return BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_ENDPOINTS\", function() { return API_ENDPOINTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_SIZE\", function() { return PAGE_SIZE; });\nconst API_URL = \"https://www.hbku.edu.qa/en/api/\";\nconst BASE_URL = \"https://www.hbku.edu.qa/\";\nconst API_ENDPOINTS = {\n  subthemes: 'ic-sub-areas.json',\n  themes: 'ic-areas.json',\n  bios: 'ic-bios.json',\n  randomBios: 'ic-random-bios.json'\n};\nconst PAGE_SIZE = 12;\n\n//# sourceURL=webpack:///./src/store/constants.js?");

/***/ }),

/***/ "./src/store/reducers/biosReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/biosReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_bios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/bios */ \"./src/store/types/bios.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.js\");\n\n\nconst initialState = {\n  list: [],\n  loading: false,\n  error: false,\n  page: 0,\n  canLoadMore: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BIOS_LOADING\"]:\n      return { ...state,\n        loading: true,\n        error: false\n      };\n\n    case _types_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BIOS_ERROR\"]:\n      return { ...state,\n        loading: false,\n        error: true\n      };\n\n    case _types_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BIOS_SUCCESS\"]:\n      const {\n        data,\n        page\n      } = action.payload;\n      console.log('success', {\n        data,\n        page\n      });\n      const list = action.payload.page ? [...state.list, ...(data ? data : [])] : data ? data : [];\n      return { ...state,\n        list,\n        loading: false,\n        error: false,\n        page: page ? page : 0,\n        canLoadMore: page === 0 ? true : data.length === _constants__WEBPACK_IMPORTED_MODULE_1__[\"PAGE_SIZE\"]\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/biosReducer.js?");

/***/ }),

/***/ "./src/store/reducers/generalReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducers/generalReducer.js ***!
  \**********************************************/
/*! exports provided: generalSlice, changeTitle, changeTitleSEO, generalSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generalSlice\", function() { return generalSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTitle\", function() { return changeTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTitleSEO\", function() { return changeTitleSEO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generalSelector\", function() { return generalSelector; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generalSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'general',\n  initialState: {\n    title: 'Innovation Center',\n    titleSEO: 'Innovation Center'\n  },\n  reducers: {\n    changeTitle: (state, action) => {\n      state.title = action.payload;\n    },\n    changeTitleSEO: (state, action) => {\n      state.titleSEO = action.payload;\n    }\n  }\n});\nconst {\n  changeTitle,\n  changeTitleSEO\n} = generalSlice.actions;\nconst generalSelector = state => state.general;\n/* harmony default export */ __webpack_exports__[\"default\"] = (generalSlice.reducer);\n\n//# sourceURL=webpack:///./src/store/reducers/generalReducer.js?");

/***/ }),

/***/ "./src/store/reducers/randomBiosReducer.js":
/*!*************************************************!*\
  !*** ./src/store/reducers/randomBiosReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_random_bios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/random-bios */ \"./src/store/types/random-bios.js\");\n\nconst initialState = {\n  list: [],\n  loading: false,\n  error: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_random_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RANDOM_BIOS_LOADING\"]:\n      return { ...state,\n        loading: true,\n        error: false\n      };\n\n    case _types_random_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RANDOM_BIOS_ERROR\"]:\n      return { ...state,\n        loading: false,\n        error: true\n      };\n\n    case _types_random_bios__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RANDOM_BIOS_SUCCESS\"]:\n      const {\n        data\n      } = action.payload;\n      const list = [...data];\n      return { ...state,\n        list,\n        loading: false,\n        error: false\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/randomBiosReducer.js?");

/***/ }),

/***/ "./src/store/reducers/subthemeReducer.js":
/*!***********************************************!*\
  !*** ./src/store/reducers/subthemeReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_sub_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/sub-themes */ \"./src/store/types/sub-themes.js\");\n\nconst initialState = {\n  list: [],\n  loading: false,\n  error: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_sub_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUBTHEMES_LOADING\"]:\n      return { ...state,\n        loading: true,\n        error: false\n      };\n\n    case _types_sub_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUBTHEMES_ERROR\"]:\n      return { ...state,\n        loading: false,\n        error: true\n      };\n\n    case _types_sub_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUBTHEMES_SUCCESS\"]:\n      return { ...state,\n        list: action.payload.data ? action.payload.data : [],\n        loading: false,\n        error: false\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/subthemeReducer.js?");

/***/ }),

/***/ "./src/store/reducers/themeReducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/themeReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/themes */ \"./src/store/types/themes.js\");\n\nconst initialState = {\n  list: [],\n  loading: false,\n  error: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_THEMES_LOADING\"]:\n      return { ...state,\n        loading: true,\n        error: false\n      };\n\n    case _types_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_THEMES_ERROR\"]:\n      return { ...state,\n        loading: false,\n        error: true\n      };\n\n    case _types_themes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_THEMES_SUCCESS\"]:\n      return { ...state,\n        list: action.payload.data ? action.payload.data : [],\n        loading: false,\n        error: false\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/themeReducer.js?");

/***/ }),

/***/ "./src/store/selectors/bios.js":
/*!*************************************!*\
  !*** ./src/store/selectors/bios.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BiosSelector = store => store.bios;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BiosSelector);\n\n//# sourceURL=webpack:///./src/store/selectors/bios.js?");

/***/ }),

/***/ "./src/store/selectors/sub-themes.js":
/*!*******************************************!*\
  !*** ./src/store/selectors/sub-themes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SubthemesSelector = store => store.subthemes;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubthemesSelector);\n\n//# sourceURL=webpack:///./src/store/selectors/sub-themes.js?");

/***/ }),

/***/ "./src/store/selectors/themes.js":
/*!***************************************!*\
  !*** ./src/store/selectors/themes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ThemesSelector = store => store.themes;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemesSelector);\n\n//# sourceURL=webpack:///./src/store/selectors/themes.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_generalReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/generalReducer */ \"./src/store/reducers/generalReducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/themeReducer */ \"./src/store/reducers/themeReducer.js\");\n/* harmony import */ var _reducers_subthemeReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/subthemeReducer */ \"./src/store/reducers/subthemeReducer.js\");\n/* harmony import */ var _reducers_biosReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/biosReducer */ \"./src/store/reducers/biosReducer.js\");\n/* harmony import */ var _reducers_randomBiosReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/randomBiosReducer */ \"./src/store/reducers/randomBiosReducer.js\");\n\n\n\n\n\n\n\n\n\nconst persistConfig = {\n  key: 'hbku-ep',\n  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())\n};\nconsole.log({\n  generalReducer: _reducers_generalReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nconst persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__[\"persistReducer\"])(persistConfig, Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  general: _reducers_generalReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  themes: _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  subthemes: _reducers_subthemeReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  bios: _reducers_biosReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  random: _reducers_randomBiosReducer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}));\n\nconst buildStore = () => {\n  let store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(persistedReducer, Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));\n  let persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__[\"persistStore\"])(store);\n  return {\n    store,\n    persistor\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildStore);\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "./src/store/types/bios.js":
/*!*********************************!*\
  !*** ./src/store/types/bios.js ***!
  \*********************************/
/*! exports provided: FETCH_BIOS_LOADING, FETCH_BIOS_SUCCESS, FETCH_BIOS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BIOS_LOADING\", function() { return FETCH_BIOS_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BIOS_SUCCESS\", function() { return FETCH_BIOS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BIOS_ERROR\", function() { return FETCH_BIOS_ERROR; });\nconst FETCH_BIOS_LOADING = 'FETCH_BIOS_LOADING';\nconst FETCH_BIOS_SUCCESS = 'FETCH_BIOS_SUCCESS';\nconst FETCH_BIOS_ERROR = 'FETCH_BIOS_ERROR';\n\n//# sourceURL=webpack:///./src/store/types/bios.js?");

/***/ }),

/***/ "./src/store/types/random-bios.js":
/*!****************************************!*\
  !*** ./src/store/types/random-bios.js ***!
  \****************************************/
/*! exports provided: FETCH_RANDOM_BIOS_LOADING, FETCH_RANDOM_BIOS_SUCCESS, FETCH_RANDOM_BIOS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RANDOM_BIOS_LOADING\", function() { return FETCH_RANDOM_BIOS_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RANDOM_BIOS_SUCCESS\", function() { return FETCH_RANDOM_BIOS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RANDOM_BIOS_ERROR\", function() { return FETCH_RANDOM_BIOS_ERROR; });\nconst FETCH_RANDOM_BIOS_LOADING = 'FETCH_RANDOM_BIOS_LOADING';\nconst FETCH_RANDOM_BIOS_SUCCESS = 'FETCH_RANDOM_BIOS_SUCCESS';\nconst FETCH_RANDOM_BIOS_ERROR = 'FETCH_RANDOM_BIOS_ERROR';\n\n//# sourceURL=webpack:///./src/store/types/random-bios.js?");

/***/ }),

/***/ "./src/store/types/sub-themes.js":
/*!***************************************!*\
  !*** ./src/store/types/sub-themes.js ***!
  \***************************************/
/*! exports provided: FETCH_SUBTHEMES_LOADING, FETCH_SUBTHEMES_SUCCESS, FETCH_SUBTHEMES_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUBTHEMES_LOADING\", function() { return FETCH_SUBTHEMES_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUBTHEMES_SUCCESS\", function() { return FETCH_SUBTHEMES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUBTHEMES_ERROR\", function() { return FETCH_SUBTHEMES_ERROR; });\nconst FETCH_SUBTHEMES_LOADING = 'FETCH_SUBTHEMES_LOADING';\nconst FETCH_SUBTHEMES_SUCCESS = 'FETCH_SUBTHEMES_SUCCESS';\nconst FETCH_SUBTHEMES_ERROR = 'FETCH_THEMES_ERROR';\n\n//# sourceURL=webpack:///./src/store/types/sub-themes.js?");

/***/ }),

/***/ "./src/store/types/themes.js":
/*!***********************************!*\
  !*** ./src/store/types/themes.js ***!
  \***********************************/
/*! exports provided: FETCH_THEMES_LOADING, FETCH_THEMES_SUCCESS, FETCH_THEMES_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_THEMES_LOADING\", function() { return FETCH_THEMES_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_THEMES_SUCCESS\", function() { return FETCH_THEMES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_THEMES_ERROR\", function() { return FETCH_THEMES_ERROR; });\nconst FETCH_THEMES_LOADING = 'FETCH_THEMES_LOADING';\nconst FETCH_THEMES_SUCCESS = 'FETCH_THEMES_SUCCESS';\nconst FETCH_THEMES_ERROR = 'FETCH_THEMES_ERROR';\n\n//# sourceURL=webpack:///./src/store/types/themes.js?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");\n\n//# sourceURL=webpack:///external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-sslify":
/*!*********************************!*\
  !*** external "express-sslify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-sslify\");\n\n//# sourceURL=webpack:///external_%22express-sslify%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-debounce-input":
/*!***************************************!*\
  !*** external "react-debounce-input" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-debounce-input\");\n\n//# sourceURL=webpack:///external_%22react-debounce-input%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-select\");\n\n//# sourceURL=webpack:///external_%22react-select%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");\n\n//# sourceURL=webpack:///external_%22redux-persist%22?");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/integration/react\");\n\n//# sourceURL=webpack:///external_%22redux-persist/integration/react%22?");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/storage%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "use-sse":
/*!**************************!*\
  !*** external "use-sse" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-sse\");\n\n//# sourceURL=webpack:///external_%22use-sse%22?");

/***/ })

/******/ });