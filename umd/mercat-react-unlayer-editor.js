/*!
 * mercat-react-unlayer-editor v1.4.0 - https://github.com/Mercat-tech/react-email-editor#readme
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmailEditor"] = factory(require("react"));
	else
		root["EmailEditor"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = {"name":"mercat-react-unlayer-editor","version":"1.4.0","description":"Unlayer's Web Editor Component for React.js","main":"lib/index.js","module":"es/index.js","files":["css","es","lib","umd"],"scripts":{"build":"nwb build-react-component","clean":"nwb clean-module && nwb clean-demo","start":"nwb serve-react-demo","test":"nwb test-react","test:coverage":"nwb test-react --coverage","test:watch":"nwb test-react --server","release":"npm run build && npm publish"},"dependencies":{},"peerDependencies":{"react":"15.x || 16.x"},"devDependencies":{"nwb":"^0.22.0","react":"^16.13.1","react-dom":"^16.13.1","react-router-dom":"^5.2.0","styled-components":"^4.2.0"},"author":"","homepage":"https://github.com/Mercat-tech/react-email-editor#readme","license":"MIT","repository":"https://github.com/Mercat-tech/react-email-editor.git","keywords":["react-component"]};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// CONCATENATED MODULE: ./src/loadScript.js
var scriptUrl = '//editor.unlayer.com/embed.js?2';
var callbacks = [];
var loaded = false;

var isScriptInjected = function isScriptInjected() {
  var scripts = document.querySelectorAll('script');
  var injected = false;

  scripts.forEach(function (script) {
    if (script.src.includes(scriptUrl)) {
      injected = true;
    }
  });

  return injected;
};

var addCallback = function addCallback(callback) {
  callbacks.push(callback);
};

var runCallbacks = function runCallbacks() {
  if (loaded) {
    var callback = void 0;

    while (callback = callbacks.shift()) {
      callback();
    }
  }
};

var loadScript = function loadScript(callback) {
  addCallback(callback);

  if (!isScriptInjected()) {
    var embedScript = document.createElement('script');
    embedScript.setAttribute('src', scriptUrl);
    embedScript.onload = function () {
      loaded = true;
      runCallbacks();
    };
    document.head.appendChild(embedScript);
  } else {
    runCallbacks();
  }
};
// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_default; });
var src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var src_lastEditorId = 0;

var src_default = function (_Component) {
  src_inherits(_default, _Component);

  function _default(props) {
    src_classCallCheck(this, _default);

    var _this = src_possibleConstructorReturn(this, _Component.call(this, props));

    _this.loadEditor = function () {
      var options = _this.props.options || {};

      if (_this.props.projectId) {
        options.projectId = _this.props.projectId;
      }

      if (_this.props.tools) {
        options.tools = _this.props.tools;
      }

      if (_this.props.appearance) {
        options.appearance = _this.props.appearance;
      }

      if (_this.props.locale) {
        options.locale = _this.props.locale;
      }

      _this.editor = unlayer.createEditor(src_extends({
        id: _this.editorId,
        displayMode: 'web',
        source: {
          name: package_0.name,
          version: package_0.version
        }
      }, options));

      // All properties starting with on[Name] are registered as event listeners.
      for (var _iterator = Object.entries(_this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref = _ref2;
        var key = _ref[0];
        var value = _ref[1];

        if (/^on/.test(key) && key !== 'onLoad' && key !== 'onReady') {
          _this.addEventListener(key, value);
        }
      }

      var _this$props = _this.props,
          onLoad = _this$props.onLoad,
          onReady = _this$props.onReady;

      // @deprecated

      onLoad && onLoad();

      if (onReady) _this.editor.addEventListener('editor:ready', onReady);
    };

    _this.registerCallback = function (type, callback) {
      _this.editor.registerCallback(type, callback);
    };

    _this.addEventListener = function (type, callback) {
      _this.editor.addEventListener(type, callback);
    };

    _this.loadDesign = function (design) {
      _this.editor.loadDesign(design);
    };

    _this.saveDesign = function (callback) {
      _this.editor.saveDesign(callback);
    };

    _this.exportHtml = function (callback) {
      _this.editor.exportHtml(callback);
    };

    _this.setMergeTags = function (mergeTags) {
      _this.editor.setMergeTags(mergeTags);
    };

    _this.editorId = props.editorId || 'editor-' + ++src_lastEditorId;
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {
    loadScript(this.loadEditor);
  };

  _default.prototype.render = function render() {
    var _props = this.props,
        _props$minHeight = _props.minHeight,
        minHeight = _props$minHeight === undefined ? 500 : _props$minHeight,
        _props$style = _props.style,
        style = _props$style === undefined ? {} : _props$style;


    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'div',
      {
        style: {
          flex: 1,
          display: 'flex',
          minHeight: minHeight
        }
      },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('div', { id: this.editorId, style: src_extends({}, style, { flex: 1 }) })
    );
  };

  return _default;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ])["default"];
});