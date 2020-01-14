(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./resources/assets/js/components/FirstComp.js");
})({
    "./resources/assets/js/components/FirstComp.js": function(module, exports) {
        eval('(function (modules) {\n  function webpackJsonpCallback(data) {\n    var chunkIds = data[0];\n    var moreModules = data[1];\n    var executeModules = data[2];\n    var moduleId,\n        chunkId,\n        i = 0,\n        resolves = [];\n\n    for (; i < chunkIds.length; i++) {\n      chunkId = chunkIds[i];\n      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);\n      installedChunks[chunkId] = 0;\n    }\n\n    for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];\n\n    if (parentJsonpFunction) parentJsonpFunction(data);\n\n    while (resolves.length) resolves.shift()();\n\n    deferredModules.push.apply(deferredModules, executeModules || []);\n    return checkDeferredModules();\n  }\n\n  function checkDeferredModules() {\n    var result;\n\n    for (var i = 0; i < deferredModules.length; i++) {\n      var deferredModule = deferredModules[i];\n      var fulfilled = true;\n\n      for (var j = 1; j < deferredModule.length; j++) {\n        var depId = deferredModule[j];\n        if (0 !== installedChunks[depId]) fulfilled = false;\n      }\n\n      if (fulfilled) {\n        deferredModules.splice(i--, 1);\n        result = __webpack_require__(__webpack_require__.s = deferredModule[0]);\n      }\n    }\n\n    return result;\n  }\n\n  var installedModules = {};\n  var installedChunks = {\n    FirstComp: 0\n  };\n  var deferredModules = [];\n\n  function __webpack_require__(moduleId) {\n    if (installedModules[moduleId]) return installedModules[moduleId].exports;\n    var module = installedModules[moduleId] = {\n      i: moduleId,\n      l: false,\n      exports: {}\n    };\n    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n    module.l = true;\n    return module.exports;\n  }\n\n  __webpack_require__.m = modules;\n  __webpack_require__.c = installedModules;\n\n  __webpack_require__.d = function (exports, name, getter) {\n    if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {\n      enumerable: true,\n      get: getter\n    });\n  };\n\n  __webpack_require__.r = function (exports) {\n    if (\'undefined\' !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {\n      value: \'Module\'\n    });\n    Object.defineProperty(exports, \'__esModule\', {\n      value: true\n    });\n  };\n\n  __webpack_require__.t = function (value, mode) {\n    if (1 & mode) value = __webpack_require__(value);\n    if (8 & mode) return value;\n    if (4 & mode && \'object\' === typeof value && value && value.__esModule) return value;\n    var ns = Object.create(null);\n\n    __webpack_require__.r(ns);\n\n    Object.defineProperty(ns, \'default\', {\n      enumerable: true,\n      value: value\n    });\n    if (2 & mode && \'string\' != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {\n      return value[key];\n    }.bind(null, key));\n    return ns;\n  };\n\n  __webpack_require__.n = function (module) {\n    var getter = module && module.__esModule ? function () {\n      return module[\'default\'];\n    } : function () {\n      return module;\n    };\n\n    __webpack_require__.d(getter, \'a\', getter);\n\n    return getter;\n  };\n\n  __webpack_require__.o = function (object, property) {\n    return Object.prototype.hasOwnProperty.call(object, property);\n  };\n\n  __webpack_require__.p = \'\';\n  var jsonpArray = window[\'webpackJsonp\'] = window[\'webpackJsonp\'] || [];\n  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\n  jsonpArray.push = webpackJsonpCallback;\n  jsonpArray = jsonpArray.slice();\n\n  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\n\n  var parentJsonpFunction = oldJsonpFunction;\n  deferredModules.push([\'./assets/js/components/FirstComp.js\', \'vendors~FirstComp\']);\n  return checkDeferredModules();\n})({\n  \'./assets/js/components/FirstComp.js\': function assetsJsComponentsFirstCompJs(module, __webpack_exports__, __webpack_require__) {\n    \'use strict\';\n\n    eval(\'__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\\n\\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\\n\\n\\n\\n\\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\\n  constructor() {\\n    super();\\n\\n    this.clickedBtn = () => {};\\n\\n    this.state = {\\n      name: \\\'Joe\\\'\\n    };\\n  }\\n\\n  test() {\\n    return _asyncToGenerator(function* () {})();\\n  }\\n\\n  render() {\\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\\n      className: "home"\\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\\n      className: "Aligner"\\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\\n      className: "Aligner-item"\\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\\n      src: "/img/logo.png",\\n      alt: "codingphase logo"\\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Dev-Starter-Kit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\\n      className: "menu"\\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\\n      href: "http://starterkit.codingphase.com",\\n      target: "new"\\n    }, "Documentation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\\n      href: "http://www.codingphase.com",\\n      target: "new"\\n    }, "CodingPhase.Com")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\\n      className: "version-num"\\n    }, "version 4.0.0"))));\\n  }\\n\\n}\\n\\nconst app = document.getElementById(\\\'app\\\');\\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, null), app);\\n\\n//# sourceURL=webpack:///./assets/js/components/FirstComp.js?\');\n  }\n});\n\n//# sourceURL=webpack:///./resources/assets/js/components/FirstComp.js?');
    }
});