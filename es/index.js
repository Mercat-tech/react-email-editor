var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { loadScript } from './loadScript';
import pkg from '../package.json';

var lastEditorId = 0;

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

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

      _this.editor = unlayer.createEditor(_extends({
        id: _this.editorId,
        displayMode: 'web',
        source: {
          name: pkg.name,
          version: pkg.version
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

    _this.editorId = props.editorId || 'editor-' + ++lastEditorId;
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


    return React.createElement(
      'div',
      {
        style: {
          flex: 1,
          display: 'flex',
          minHeight: minHeight
        }
      },
      React.createElement('div', { id: this.editorId, style: _extends({}, style, { flex: 1 }) })
    );
  };

  return _default;
}(Component);

export { _default as default };