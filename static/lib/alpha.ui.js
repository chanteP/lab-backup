/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	alpha.ui = {};
	alpha.ui.base = {};
	alpha.ui.actionSheet = __webpack_require__(19);
	alpha.ui.alert = __webpack_require__(24);
	alpha.ui.base.control = __webpack_require__(22);
	alpha.ui.base.dialog = __webpack_require__(25);
	alpha.ui.base.list = __webpack_require__(21);
	alpha.ui.base.modalView = __webpack_require__(26);
	alpha.ui.base.picker = __webpack_require__(27);
	alpha.ui.base.toggle = __webpack_require__(23);
	alpha.ui.calendar = __webpack_require__(28);
	alpha.ui.confirm = __webpack_require__(29);
	alpha.ui.mask = __webpack_require__(30);
	alpha.ui.nav = __webpack_require__(31);
	alpha.ui.prompt = __webpack_require__(32);
	alpha.ui.selectSheet = __webpack_require__(33);
	alpha.ui.toast = __webpack_require__(34);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseList = __webpack_require__(21);

	var _baseList2 = _interopRequireDefault(_baseList);

	var ActionSheet = (function (_List) {
	    _inherits(ActionSheet, _List);

	    function ActionSheet() {
	        _classCallCheck(this, ActionSheet);

	        _get(Object.getPrototypeOf(ActionSheet.prototype), 'constructor', this).call(this, 'bottom', true, { multiple: false });
	        this.node.classList.add('actionsheet');
	    }

	    _createClass(ActionSheet, [{
	        key: 'show',
	        value: function show(options, currentIndex) {
	            var _this = this;

	            this.setOptions(options);
	            this.setCurrentIndex(currentIndex);
	            this.config();
	            _get(Object.getPrototypeOf(ActionSheet.prototype), 'show', this).call(this);

	            return new Promise(function (res) {
	                _this.res = res;
	            });
	        }
	    }, {
	        key: 'select',
	        value: function select(index) {
	            this.setCurrentIndex(index);
	            this.res({
	                index: index,
	                item: this.options[index]
	            });
	            this.hide();
	        }
	    }, {
	        key: 'config',
	        value: function config(cfg) {
	            _get(Object.getPrototypeOf(ActionSheet.prototype), 'config', this).call(this, cfg);
	            _core.React.render(_core.React.createElement(CompActionSheet, _extends({}, this.configData, { comp: this })), this.node);
	        }
	    }]);

	    return ActionSheet;
	})(_baseList2['default']);

	exports['default'] = ActionSheet;

	var CompActionSheet = (function (_React$Component) {
	    _inherits(CompActionSheet, _React$Component);

	    function CompActionSheet() {
	        _classCallCheck(this, CompActionSheet);

	        _get(Object.getPrototypeOf(CompActionSheet.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(CompActionSheet, [{
	        key: 'render',
	        value: function render() {
	            var list = this.props.comp;
	            return _core.React.createElement(
	                'div',
	                null,
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    (list.options || []).map(function (option, i) {
	                        return _core.React.createElement(
	                            'li',
	                            { className: option && (option.style === 'message' ? 'actionsheet-message' : option.style), onClick: list.select.bind(list, i) },
	                            list.getOptionText(i)
	                        );
	                    })
	                ),
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    _core.React.createElement(
	                        'li',
	                        { onClick: list.hide.bind(list) },
	                        '取消'
	                    )
	                )
	            );
	        }
	    }]);

	    return CompActionSheet;
	})(_core.React.Component);

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    $: window.alpha,
	    React: window.React
	};
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    options : [
	        {..., value}
	        或者
	        value
	    ]
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _control = __webpack_require__(22);

	var _control2 = _interopRequireDefault(_control);

	var List = (function (_Control) {
	    _inherits(List, _Control);

	    function List(type, touchable, config) {
	        _classCallCheck(this, List);

	        _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, type, touchable);

	        this._multiple = false;
	        this.configOptions(config);
	        this.setOptions();
	        this.setCurrentIndex();
	    }

	    /*
	        取值相关
	    */

	    _createClass(List, [{
	        key: 'find',
	        value: function find(value) {
	            var _this = this;

	            var index = undefined;
	            this.options.some(function (option, i) {
	                if (_this.getOptionValue(i) === value) {
	                    index = i;
	                    return true;
	                }
	            });
	            return index;
	        }
	    }, {
	        key: 'getOptionValue',
	        value: function getOptionValue(i) {
	            var option = this.options[i];
	            if (option && typeof option === 'object') {
	                return option[this._valueKey];
	            } else {
	                return option;
	            }
	        }
	    }, {
	        key: 'getOptionText',
	        value: function getOptionText(i) {
	            var option = this.options[i];
	            if (option && typeof option === 'object') {
	                return option[this._textKey];
	            } else {
	                return option;
	            }
	        }

	        /*
	            配置相关
	        */
	    }, {
	        key: 'configOptions',
	        value: function configOptions() {
	            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var _ref$valueKey = _ref.valueKey;
	            var valueKey = _ref$valueKey === undefined ? 'value' : _ref$valueKey;
	            var _ref$textkey = _ref.textkey;
	            var textkey = _ref$textkey === undefined ? 'text' : _ref$textkey;
	            var _ref$multiple = _ref.multiple;
	            var multiple = _ref$multiple === undefined ? false : _ref$multiple;

	            this._valueKey = valueKey;
	            this._textKey = textkey;
	            this.multiple = multiple;
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            this.options = Array.isArray(options) ? options : [];
	        }

	        /*
	            设置当前值
	        */
	    }, {
	        key: 'clearCurrent',
	        value: function clearCurrent() {
	            this.setCurrentIndex();
	        }
	    }, {
	        key: 'setCurrent',
	        value: function setCurrent(currentValue) {
	            this.setCurrentIndex(this.find(currentValue));
	        }
	    }, {
	        key: 'getCurrent',
	        value: function getCurrent() {
	            var _this2 = this;

	            return this.multiple ? this.currentIndex.map(function (index) {
	                return _this2.options[index];
	            }) : this.options[this.currentIndex];
	        }
	    }, {
	        key: 'getCurrentIndex',
	        value: function getCurrentIndex() {
	            return this.currentIndex;
	        }
	    }, {
	        key: 'setCurrentIndex',
	        value: function setCurrentIndex(currentIndex) {
	            var _this3 = this;

	            if (!this.multiple) {
	                if (typeof currentIndex !== 'number' || currentIndex < 0 || currentIndex >= this.options.length) {
	                    currentIndex = undefined;
	                }
	                var protoCurrent = this.current;
	                this.currentIndex = currentIndex;
	                this.current = this.getCurrent();

	                if (protoCurrent !== this.current) {
	                    _core.$.trigger(this, 'change');
	                }
	            } else {
	                if (!Array.isArray(currentIndex)) {
	                    currentIndex = currentIndex ? [currentIndex] : [];
	                }
	                currentIndex.filter(function (index) {
	                    return !(typeof index !== 'number' || index < 0 || index >= _this3.options.length);
	                });
	                this.currentIndex = currentIndex;
	                this.current = this.getCurrent();
	                _core.$.trigger(this, 'change');
	            }
	        }

	        // 多选用
	    }, {
	        key: 'hasCurrentIndex',
	        value: function hasCurrentIndex(currentIndex) {
	            if (!this.multiple) {
	                return this.currentIndex === currentIndex;
	            } else {
	                return ~this.currentIndex.indexOf(currentIndex);
	            }
	        }
	    }, {
	        key: 'addCurrentIndex',
	        value: function addCurrentIndex(currentIndex) {
	            var _this4 = this;

	            if (!this.multiple) {
	                this.setCurrentIndex(currentIndex);
	            } else {
	                if (!Array.isArray(currentIndex)) {
	                    currentIndex = [currentIndex];
	                }
	                var newIndex = currentIndex.filter(function (index) {
	                    return ! ~_this4.currentIndex.indexOf(index);
	                });
	                this.setCurrentIndex(this.currentIndex.concat(newIndex));
	            }
	        }
	    }, {
	        key: 'removeCurrentIndex',
	        value: function removeCurrentIndex(currentIndex) {
	            if (!this.multiple) {
	                this.setCurrentIndex();
	            } else {
	                if (!Array.isArray(currentIndex)) {
	                    currentIndex = [currentIndex];
	                }
	                var rsIndex = this.currentIndex.filter(function (index) {
	                    return ! ~currentIndex.indexOf(index);
	                });
	                this.setCurrentIndex(rsIndex);
	            }
	        }
	    }, {
	        key: 'multiple',
	        get: function get() {
	            return this._multiple;
	        },
	        set: function set(value) {
	            if (!!value !== !!this._multiple) {
	                this.clearCurrent();
	            }
	            this._multiple = !!value;
	            return value;
	        }
	    }]);

	    return List;
	})(_control2['default']);

	exports['default'] = List;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    configData
	    zIndex
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _toggle = __webpack_require__(23);

	var _toggle2 = _interopRequireDefault(_toggle);

	var Control = (function (_Toggle) {
	    _inherits(Control, _Toggle);

	    function Control(type) {
	        var _this = this;

	        var touchable = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        _classCallCheck(this, Control);

	        _get(Object.getPrototypeOf(Control.prototype), 'constructor', this).call(this, ['fadeIn', 'fadeOut']);

	        this.outer = _core.$.create('<div class="mask" data-show="0"></div>');

	        this._controlType = type;

	        if (this._controlType === 'middle') {
	            var wrap = _core.$.create('<div class="component-middle"><div class="component-middlecont"></div></div>');
	            this.node = wrap.firstChild;
	            this.outer.appendChild(wrap);
	        } else if (this._controlType === 'bottom') {
	            this.node = _core.$.create('<div class="component-bottom"></div>');
	            this.outer.appendChild(this.node);
	        } else {
	            this.node = _core.$.create('<div></div>');
	            this.outer.appendChild(this.node);
	        }

	        this.outer.addEventListener('click', function (e) {
	            _this.touchable && e.target === _this.outer && _this.hide();
	        });

	        this.touchable = touchable;
	        checkAppend(this.outer);
	    }

	    _createClass(Control, [{
	        key: 'setZindex',
	        value: function setZindex() {
	            var zIndex = arguments.length <= 0 || arguments[0] === undefined ? 120 : arguments[0];

	            this.outer.style.zIndex = zIndex;
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            checkAppend(this.outer);
	            this.outer.style.display = '';
	            clearTimeout(this.timer);
	            _get(Object.getPrototypeOf(Control.prototype), 'show', this).call(this);

	            if (this._controlType === 'middle') {
	                this.animate(this.node, 'zoomIn');
	            } else if (this._controlType === 'bottom') {
	                this.animate(this.node, 'slideInUp');
	            }
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            var _this2 = this;

	            _get(Object.getPrototypeOf(Control.prototype), 'hide', this).call(this);

	            if (this._controlType === 'middle') {
	                this.animate(this.node, 'zoomOut');
	            } else if (this._controlType === 'bottom') {
	                this.animate(this.node, 'slideOutDown');
	            }

	            //噩梦
	            clearTimeout(this.timer);
	            this.timer = setTimeout(function () {
	                _this2.outer.style.display = 'none';
	                _this2.timer = setTimeout(function () {
	                    _this2.outer.style.display = '';
	                }, 0);
	            }, 800);
	        }
	    }], [{
	        key: 'checkComponent',
	        value: function checkComponent() {
	            if (this._uniqueComponent) {
	                this._uniqueComponent.configData = {};
	                this._uniqueComponent.config();
	                return this._uniqueComponent;
	            } else {
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                return this._uniqueComponent = new (_bind.apply(this, [null].concat(args)))();
	            }
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            var _checkComponent;

	            return (_checkComponent = this.checkComponent()).show.apply(_checkComponent, arguments);
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            var _checkComponent2;

	            return (_checkComponent2 = this.checkComponent()).hide.apply(_checkComponent2, arguments);
	        }
	    }]);

	    return Control;
	})(_toggle2['default']);

	exports['default'] = Control;

	function checkAppend(node) {
	    if (!document.body) {
	        return;
	    }
	    if (!_core.$.contains(document.body, node)) {
	        document.body.appendChild(node);
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _core = __webpack_require__(20);

	var Toggle = (function () {
	    function Toggle() {
	        var aniTypes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	        _classCallCheck(this, Toggle);

	        this._isShown = false;
	        this._aniTypes = aniTypes;
	        this.configData = {};
	    }

	    _createClass(Toggle, [{
	        key: 'config',
	        value: function config(cfg, defaultCfg) {
	            var _this = this;

	            _core.$.merge(this.configData, cfg, true);
	            Object.keys(defaultCfg || {}).map(function (key) {
	                if (typeof _this.configData[key] === 'undefined') {
	                    _this.configData[key] = defaultCfg[key];
	                }
	            });
	        }
	    }, {
	        key: 'show',
	        value: function show(check) {
	            this.isShown = true;
	            _core.$.trigger(this, 'show');
	            return this;
	        }
	    }, {
	        key: 'hide',
	        value: function hide(check) {
	            this.isShown = false;
	            _core.$.trigger(this, 'hide');
	            return this;
	        }
	    }, {
	        key: 'destory',
	        value: function destory() {
	            if (this.outer && this.outer.parentNode) {
	                this.outer.parentNode.removeChild(this.outer);
	            }
	        }
	    }, {
	        key: 'isShown',
	        get: function get() {
	            return this._isShown;
	        },
	        set: function set(value) {
	            if (!!this._isShown === !!value) {
	                return this._isShown;
	            }
	            var node = this.outer || this.node;
	            if (node) {
	                if (value) {
	                    // setTimeout(() => {
	                    node.dataset.show = 1;
	                    typeof this._aniTypes[0] === 'string' ? this.animate(node, this._aniTypes[0]) : node.style.display = 'block';
	                    // }, 0);
	                } else {
	                        // setTimeout(() => {
	                        node.dataset.show = 0;
	                        typeof this._aniTypes[1] === 'string' ? this.animate(node, this._aniTypes[1]) : node.style.display = 'none';
	                        // }, 0);
	                    }
	            }
	            return this._isShown = !!value;
	        }
	    }]);

	    return Toggle;
	})();

	exports['default'] = Toggle;

	Toggle.prototype.componentsApi = _core.$.components || { push: emptyFunc, remove: emptyFunc, pop: emptyFunc };
	Toggle.prototype.animate = _core.$.animate || function (node, type, cb) {
	    setTimeout(cb, 0);
	};

	initAniStyle();

	function emptyFunc() {}

	function initAniStyle() {
	    var styleTag = document.createElement('style');
	    styleTag.innerHTML = '\n[data-show="1"]{\n    pointer-events: auto;\n    visibility: visible;\n}\n[data-show="0"]{\n    pointer-events: none;\n    visibility: hidden;\n}\n.animated{\n    -webkit-animation-duration: 0.3s;\n}\n';
	    document.head.appendChild(styleTag);
	}
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    唯一
	    btn状态： '' || disabled || active
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseDialog = __webpack_require__(25);

	var _baseDialog2 = _interopRequireDefault(_baseDialog);

	var defaultButtons = [{
	    text: '确定',
	    style: 'active',
	    callback: function callback(e) {
	        this.hide();
	        this.res(true);
	    }
	}];

	var Alert = (function (_Dialog) {
	    _inherits(Alert, _Dialog);

	    /*
	        cfg : {
	            title : ''
	            content : ''
	            button : []
	        }
	    */

	    function Alert(cfg) {
	        _classCallCheck(this, Alert);

	        _get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, cfg);
	        this.defaultButtons = defaultButtons;
	    }

	    return Alert;
	})(_baseDialog2['default']);

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    唯一
	    btn状态： '' || disabled || active
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _control = __webpack_require__(22);

	var _control2 = _interopRequireDefault(_control);

	var Dialog = (function (_Control) {
	    _inherits(Dialog, _Control);

	    /*
	        cfg : {
	            title : ''
	            content : ''
	            button : []
	        }
	    */

	    function Dialog(cfg) {
	        _classCallCheck(this, Dialog);

	        _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).call(this, 'middle', false);

	        this.node.classList.add('alert');

	        this.defaultButtons = [];
	        cfg && this.config(cfg);
	    }

	    _createClass(Dialog, [{
	        key: 'setContent',
	        value: function setContent(content) {
	            this.config({
	                content: content
	            });
	        }
	    }, {
	        key: 'show',
	        value: function show(cfg) {
	            var _this = this;

	            _get(Object.getPrototypeOf(Dialog.prototype), 'show', this).call(this);
	            this.config(cfg);
	            return new Promise(function (res) {
	                _this.res = res;
	            });
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            _get(Object.getPrototypeOf(Dialog.prototype), 'hide', this).call(this);
	            this.res && this.res();
	        }
	    }, {
	        key: 'config',
	        value: function config(cfg) {
	            _get(Object.getPrototypeOf(Dialog.prototype), 'config', this).call(this, cfg, {
	                title: '',
	                content: '',
	                buttons: this.defaultButtons,
	                width: '',
	                noWrap: false
	            });
	            this.node.style.width = this.configData.width || '';
	            this.touchable = (cfg || {}).touchable || false;

	            _core.React.render(_core.React.createElement(CompDialog, _extends({}, this.configData, { comp: this })), this.node);
	        }
	    }], [{
	        key: 'setContent',
	        value: function setContent() {
	            var _checkComponent;

	            return (_checkComponent = this.checkComponent()).setContent.apply(_checkComponent, arguments);
	        }
	    }]);

	    return Dialog;
	})(_control2['default']);

	exports['default'] = Dialog;

	var CompDialog = (function (_React$Component) {
	    _inherits(CompDialog, _React$Component);

	    function CompDialog() {
	        _classCallCheck(this, CompDialog);

	        _get(Object.getPrototypeOf(CompDialog.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(CompDialog, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var configData = this.props;
	            return _core.React.createElement(
	                'div',
	                null,
	                _core.React.createElement(
	                    'div',
	                    { className: 'alert-head' },
	                    !configData.title && configData.noWrap ? undefined : _core.React.createElement(
	                        'h1',
	                        null,
	                        _core.React.createElement(
	                            'div',
	                            null,
	                            configData.title || ''
	                        )
	                    )
	                ),
	                _core.React.createElement(
	                    'div',
	                    { className: 'alert-content' },
	                    !configData.noWrap ? _core.React.createElement(
	                        'div',
	                        { className: 'alert-contwrap' },
	                        configData.content || ''
	                    ) : configData.content || ''
	                ),
	                _core.React.createElement(
	                    'div',
	                    { className: 'alert-btnbox' },
	                    configData.buttons.map(function (btn) {
	                        return _core.React.createElement(
	                            'div',
	                            { className: "alert-btn " + (btn.style || ''), onClick: btn.callback && btn.callback.bind(_this2.props.comp) },
	                            _core.React.createElement(
	                                'a',
	                                null,
	                                btn.text || ''
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return CompDialog;
	})(_core.React.Component);

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _control = __webpack_require__(22);

	var _control2 = _interopRequireDefault(_control);

	var defaultConfig = {
	    title: '',
	    text: '确定',
	    callback: function callback() {
	        this.hide();
	    },
	    textL: '取消',
	    callbackL: function callbackL() {
	        this.hide();
	    }
	};

	var ModalView = (function (_Control) {
	    _inherits(ModalView, _Control);

	    function ModalView(cfg) {
	        var touchable = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	        _classCallCheck(this, ModalView);

	        _get(Object.getPrototypeOf(ModalView.prototype), 'constructor', this).call(this, 'bottom', touchable);
	        this.node.classList.add('m-modalview');
	        this.head = _core.$.create('<div class="m-modalview-head"></div>');
	        this.content = _core.$.create('<div class="m-modalview-cont"></div>');
	        this.node.appendChild(this.head);
	        this.node.appendChild(this.content);

	        this.cfg = {};
	        this.config(_core.$.merge(defaultConfig, cfg));
	    }

	    _createClass(ModalView, [{
	        key: 'config',
	        value: function config(cfg) {
	            _core.$.merge(this.cfg, cfg, true);
	            this.title = this.cfg.title;
	            renderHead(this.head, this);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { 'class': 'component-bottom modalview' },
	                React.createElement(
	                    'div',
	                    { 'class': 'modalview-head' },
	                    React.createElement(
	                        'h1',
	                        null,
	                        'title'
	                    ),
	                    React.createElement(
	                        'div',
	                        { 'class': 'modalview-head-cancel' },
	                        '取消'
	                    ),
	                    React.createElement(
	                        'div',
	                        { 'class': 'modalview-head-check' },
	                        '选择'
	                    )
	                ),
	                React.createElement('div', { 'class': 'modalview-cont' })
	            );
	        }
	    }]);

	    return ModalView;
	})(_control2['default']);

	exports['default'] = ModalView;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _list = __webpack_require__(21);

	var _list2 = _interopRequireDefault(_list);

	var Picker = (function (_List) {
	    _inherits(Picker, _List);

	    function Picker(options, currentIndex) {
	        _classCallCheck(this, Picker);

	        _get(Object.getPrototypeOf(Picker.prototype), 'constructor', this).call(this, options, currentIndex);
	        this.outer = this.node = _core.$.create('<div class="picker"></div>');
	        this.ins = _core.React.render(_core.React.createElement(PickerUI, { component: this }), this.outer);
	    }

	    _createClass(Picker, [{
	        key: 'configOptions',
	        value: function configOptions() {
	            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var _ref$valueKey = _ref.valueKey;
	            var valueKey = _ref$valueKey === undefined ? 'value' : _ref$valueKey;
	            var _ref$textKey = _ref.textKey;
	            var textKey = _ref$textKey === undefined ? 'text' : _ref$textKey;

	            _get(Object.getPrototypeOf(Picker.prototype), 'configOptions', this).call(this, { valueKey: valueKey, textKey: textKey });
	            this._textKey = textKey;
	        }
	    }, {
	        key: 'setCurrentIndex',
	        value: function setCurrentIndex(currentIndex) {
	            _get(Object.getPrototypeOf(Picker.prototype), 'setCurrentIndex', this).call(this, currentIndex);
	            this.ins.setCurrentIndex(this.currentIndex);
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            _get(Object.getPrototypeOf(Picker.prototype), 'setOptions', this).call(this, options);
	            this.ins.forceUpdate();
	        }
	    }]);

	    return Picker;
	})(_list2['default']);

	exports['default'] = Picker;

	var PickerUI = (function (_React$Component) {
	    _inherits(PickerUI, _React$Component);

	    function PickerUI(props, context) {
	        _classCallCheck(this, PickerUI);

	        _get(Object.getPrototypeOf(PickerUI.prototype), 'constructor', this).call(this, props, context);
	    }

	    _createClass(PickerUI, [{
	        key: 'calcSelected',
	        value: function calcSelected(offsetTop) {
	            var _this2 = this;

	            var slider = this.refs.slider.getDOMNode(),
	                sliderCont = this.refs.sliderCont.getDOMNode(),
	                lis = slider.children;

	            var midLine = sliderCont.clientHeight / 2,
	                checkLine = midLine + offsetTop;

	            [].some.call(lis, function (li, index) {
	                var offset = li.offsetTop + li.scrollHeight - checkLine;
	                if (offset >= 0) {
	                    _this2.setCurrent(index);
	                    return true;
	                }
	            }) || this.setCurrent(this.props.component.options.length - 1);
	        }
	    }, {
	        key: 'onScroll',
	        value: function onScroll(e) {
	            var _this3 = this;

	            var sliderCont = this.refs.sliderCont.getDOMNode();
	            this.lastOffset = sliderCont.scrollTop;
	            // console.log('all', this.lastOffset);
	            clearTimeout(this.scrollTimer);
	            this.scrollTimer = setTimeout(function () {
	                // console.log('end', !$.isTouched && slider.scrollTop === this.lastOffset);
	                !_core.$.isTouched && sliderCont.scrollTop === _this3.lastOffset && _this3.calcSelected(sliderCont.scrollTop);
	            }, 300);
	        }
	    }, {
	        key: 'onScroll',
	        value: function onScroll(e) {
	            var _this4 = this;

	            var sliderCont = this.refs.sliderCont.getDOMNode();
	            this.lastOffset = sliderCont.scrollTop;
	            // console.log('all', this.lastOffset);
	            clearTimeout(this.scrollTimer);
	            this.scrollTimer = setTimeout(function () {
	                // console.log('end', !$.isTouched && slider.scrollTop === this.lastOffset);
	                !_core.$.isTouched && sliderCont.scrollTop === _this4.lastOffset && _this4.calcSelected(sliderCont.scrollTop);
	            }, 300);
	        }
	    }, {
	        key: 'setCurrent',
	        value: function setCurrent(index, force) {
	            force && this.forceUpdate();
	            var slider = this.refs.slider.getDOMNode(),
	                sliderCont = this.refs.sliderCont.getDOMNode();
	            var target = _core.$.find('[data-index="' + index + '"]', slider) || _core.$.find('[data-index="0"]', slider);
	            if (!target) {
	                return;
	            }
	            this.props.component.current = index;
	            if (window.IScroll && !this.iscrollIns) {
	                this.state.current = index;
	                return;
	            }

	            var rs = target.offsetTop + target.clientHeight / 2 - sliderCont.clientHeight / 2;
	            if (this.iscrollIns) {
	                this.iscrollIns.scrollTo(0, -rs, 300);
	            } else {
	                if (this.scrollAni) {
	                    this.scrollAni.stop();
	                }
	                this.scrollAni = _core.$.scrollTo(rs, sliderCont);
	                // $.trigger(this.props.component, 'change', [index]);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this5 = this;

	            var sliderCont = this.refs.sliderCont.getDOMNode();
	            if (window.IScroll) {
	                setTimeout(function () {
	                    var _this = _this5;
	                    _this5.iscrollIns = new IScroll(sliderCont, {
	                        mouseWheel: true,
	                        scrollbars: false
	                    });
	                    _this5.iscrollIns.on('scrollEnd', function () {
	                        _this5.calcSelected(-_this5.iscrollIns.y);
	                    });
	                    _this5.setCurrent(_this5.state.current);
	                }, 500);
	            } else {
	                sliderCont.addEventListener('scroll', this.onScroll);
	                sliderCont.addEventListener('touchend', this.onScroll);
	                this.setCurrent(this.state.current);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this.state.current = props.current;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var component = this.props.component;
	            var options = component.options;
	            return _core.React.createElement(
	                'div',
	                { className: 'picker-slider', ref: 'sliderCont' },
	                _core.React.createElement(
	                    'ul',
	                    { ref: 'slider' },
	                    options.map(function (option, i) {
	                        var type = option && typeof option === 'object';
	                        var text = type ? option.text : option;
	                        var style = type ? option.style : '';
	                        return _core.React.createElement(
	                            'li',
	                            { key: i, 'data-index': i, 'data-text': text, className: style },
	                            text
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return PickerUI;
	})(_core.React.Component);

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _baseDialog = __webpack_require__(25);

	var _baseDialog2 = _interopRequireDefault(_baseDialog);

	var defaultButtons = [{
	    text: '取消',
	    callback: function callback(e) {
	        this.resolve(false);
	        this.hide();
	    }
	}, {
	    text: '确定',
	    style: 'active',
	    callback: function callback(e) {
	        this.resolve(true);
	        this.hide();
	    }
	}];

	var Confirm = (function (_Dialog) {
	    _inherits(Confirm, _Dialog);

	    function Confirm(cfg) {
	        _classCallCheck(this, Confirm);

	        _get(Object.getPrototypeOf(Confirm.prototype), 'constructor', this).call(this, cfg);
	        this.defaultButtons = defaultButtons;
	    }

	    _createClass(Confirm, [{
	        key: 'show',
	        value: function show(cfg) {
	            var _this = this;

	            _get(Object.getPrototypeOf(Confirm.prototype), 'show', this).call(this, cfg);
	            return new Promise(function (res) {
	                _this.resolve = res;
	            });
	        }
	    }]);

	    return Confirm;
	})(_baseDialog2['default']);

	exports['default'] = Confirm;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _baseControl = __webpack_require__(22);

	var _baseControl2 = _interopRequireDefault(_baseControl);

	var Mask = (function (_Control) {
	    _inherits(Mask, _Control);

	    function Mask() {
	        var touchable = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	        _classCallCheck(this, Mask);

	        _get(Object.getPrototypeOf(Mask.prototype), 'constructor', this).call(this, null, touchable);
	    }

	    return Mask;
	})(_baseControl2['default']);

	exports['default'] = Mask;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseToggle = __webpack_require__(23);

	var _baseToggle2 = _interopRequireDefault(_baseToggle);

	var Nav = (function (_Toggle) {
	    _inherits(Nav, _Toggle);

	    function Nav() {
	        _classCallCheck(this, Nav);

	        _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, ['slideInDown', 'slideOutUp']);
	        this.outer = this.node = _core.$.create('<div class="nav"></div>');
	    }

	    _createClass(Nav, [{
	        key: 'show',
	        value: function show(_ref) {
	            var _ref$title = _ref.title;
	            var title = _ref$title === undefined ? '' : _ref$title;
	            var left = _ref.left;
	            var _ref$right = _ref.right;
	            var right = _ref$right === undefined ? '' : _ref$right;

	            checkInsert(this.outer);
	            _get(Object.getPrototypeOf(Nav.prototype), 'show', this).call(this);
	            left = left || _core.React.createElement('a', { className: 'fa fa-angle-left', onClick: goBack });
	            _core.React.render(_core.React.createElement(
	                'div',
	                { className: 'nav' },
	                _core.React.createElement(
	                    'h1',
	                    null,
	                    title
	                ),
	                _core.React.createElement(
	                    'div',
	                    { className: 'nav-left' },
	                    left
	                ),
	                _core.React.createElement(
	                    'div',
	                    { className: 'nav-right' },
	                    right
	                )
	            ), this.outer);
	        }
	    }], [{
	        key: 'checkComponent',
	        value: function checkComponent() {
	            if (this._uniqueComponent) {
	                return this._uniqueComponent;
	            } else {
	                return this._uniqueComponent = new this();
	            }
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            var _checkComponent;

	            return (_checkComponent = this.checkComponent()).show.apply(_checkComponent, arguments);
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            var _checkComponent2;

	            return (_checkComponent2 = this.checkComponent()).hide.apply(_checkComponent2, arguments);
	        }
	    }]);

	    return Nav;
	})(_baseToggle2['default']);

	exports['default'] = Nav;

	function goBack() {
	    window.history.go(-1);
	}
	function checkInsert(node) {
	    if (document.body && !document.body.contains(node)) {
	        document.body.firstChild ? document.body.insertBefore(node, document.body.firstChild) : document.body.appendChild(node);
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseDialog = __webpack_require__(25);

	var _baseDialog2 = _interopRequireDefault(_baseDialog);

	var defaultButtons = [{
	    text: '取消',
	    callback: function callback(e) {
	        this.hide();
	    }
	}, {
	    text: '确定',
	    style: 'active',
	    callback: function callback(e) {
	        this.resolve(this.value);
	        this.hide();
	    }
	}];

	var Confirm = (function (_Dialog) {
	    _inherits(Confirm, _Dialog);

	    function Confirm(cfg) {
	        _classCallCheck(this, Confirm);

	        _get(Object.getPrototypeOf(Confirm.prototype), 'constructor', this).call(this, cfg);
	        this.defaultButtons = defaultButtons;
	    }

	    _createClass(Confirm, [{
	        key: 'setValue',
	        value: function setValue(e) {
	            this.value = e.currentTarget.value;
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue(e) {
	            return this.value;
	        }
	    }, {
	        key: 'show',
	        value: function show(cfg) {
	            var _this = this;

	            cfg = _core.$.merge(this.configData, {
	                defaultValue: '',
	                placeholder: '',
	                title: '',
	                multiple: false
	            }, cfg);

	            cfg.content = cfg.content || (cfg.multiple ? React.createElement(
	                'textarea',
	                { className: 'ui-input', rows: 3, onInput: this.setValue.bind(this), placeholder: cfg.placeholder },
	                cfg.defaultValue
	            ) : React.createElement('input', { type: 'text', className: 'ui-input', onInput: this.setValue.bind(this), defaultValue: cfg.defaultValue, placeholder: cfg.placeholder }));

	            this.value = cfg.defaultValue || '';

	            _get(Object.getPrototypeOf(Confirm.prototype), 'show', this).call(this, cfg);
	            return new Promise(function (res) {
	                _this.resolve = res;
	            });
	        }
	    }]);

	    return Confirm;
	})(_baseDialog2['default']);

	exports['default'] = Confirm;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseList = __webpack_require__(21);

	var _baseList2 = _interopRequireDefault(_baseList);

	var SelectSheet = (function (_List) {
	    _inherits(SelectSheet, _List);

	    function SelectSheet() {
	        _classCallCheck(this, SelectSheet);

	        _get(Object.getPrototypeOf(SelectSheet.prototype), 'constructor', this).call(this, 'bottom', true);
	        this.node.classList.add('selectsheet');
	    }

	    _createClass(SelectSheet, [{
	        key: 'show',
	        value: function show(options, currentIndex) {
	            var _this = this;

	            this.multiple = Array.isArray(currentIndex);

	            this.setOptions(options);
	            this.setCurrentIndex(currentIndex);
	            this.config();
	            _get(Object.getPrototypeOf(SelectSheet.prototype), 'show', this).call(this);

	            return new Promise(function (res) {
	                _this.res = res;
	            });
	        }
	    }, {
	        key: 'select',
	        value: function select(index, e) {
	            if (!this.multiple) {
	                this.setCurrentIndex(index);
	                this.res({
	                    index: this.getCurrentIndex(),
	                    item: this.getCurrent()
	                });
	                this.hide();
	            } else {
	                e.currentTarget.checked ? this.addCurrentIndex(index) : this.removeCurrentIndex(index);
	            }
	        }
	    }, {
	        key: 'check',
	        value: function check() {
	            this.res({
	                index: this.getCurrentIndex(),
	                item: this.getCurrent()
	            });
	            this.hide();
	        }
	    }, {
	        key: 'config',
	        value: function config(cfg) {
	            _get(Object.getPrototypeOf(SelectSheet.prototype), 'config', this).call(this, cfg);
	            this.multiple ? _core.React.render(_core.React.createElement(CompMultipleSelectSheet, _extends({}, this.configData, { comp: this })), this.node) : _core.React.render(_core.React.createElement(CompSingleSelectSheet, _extends({}, this.configData, { comp: this })), this.node);
	        }
	    }]);

	    return SelectSheet;
	})(_baseList2['default']);

	exports['default'] = SelectSheet;

	var CompSingleSelectSheet = (function (_React$Component) {
	    _inherits(CompSingleSelectSheet, _React$Component);

	    function CompSingleSelectSheet() {
	        _classCallCheck(this, CompSingleSelectSheet);

	        _get(Object.getPrototypeOf(CompSingleSelectSheet.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(CompSingleSelectSheet, [{
	        key: 'render',
	        value: function render() {
	            var list = this.props.comp;
	            return _core.React.createElement(
	                'div',
	                null,
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    (list.options || []).map(function (option, i) {
	                        return _core.React.createElement(
	                            'li',
	                            { className: 'table-cell ' + (list.currentIndex === i ? 'checked' : ''), onClick: list.select.bind(list, i) },
	                            list.getOptionText(i)
	                        );
	                    })
	                ),
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    _core.React.createElement(
	                        'li',
	                        { className: 'table-cell', onClick: list.hide.bind(list) },
	                        '取消'
	                    )
	                )
	            );
	        }
	    }]);

	    return CompSingleSelectSheet;
	})(_core.React.Component);

	var CompMultipleSelectSheet = (function (_React$Component2) {
	    _inherits(CompMultipleSelectSheet, _React$Component2);

	    function CompMultipleSelectSheet() {
	        _classCallCheck(this, CompMultipleSelectSheet);

	        _get(Object.getPrototypeOf(CompMultipleSelectSheet.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(CompMultipleSelectSheet, [{
	        key: 'render',
	        value: function render() {
	            var list = this.props.comp;
	            return _core.React.createElement(
	                'div',
	                null,
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    (list.options || []).map(function (option, i) {
	                        return _core.React.createElement(
	                            'li',
	                            { className: 'table-cell' },
	                            _core.React.createElement(
	                                'label',
	                                null,
	                                _core.React.createElement('input', { type: 'checkbox', className: 'ui-checkbox hidden', defaultChecked: list.hasCurrentIndex(i), onChange: list.select.bind(list, i) }),
	                                _core.React.createElement('span', null),
	                                _core.React.createElement(
	                                    'b',
	                                    null,
	                                    list.getOptionText(i)
	                                )
	                            )
	                        );
	                    })
	                ),
	                _core.React.createElement(
	                    'ul',
	                    null,
	                    _core.React.createElement(
	                        'li',
	                        { className: 'table-cell', onClick: list.check.bind(list) },
	                        '确定'
	                    )
	                )
	            );
	        }
	    }]);

	    return CompMultipleSelectSheet;
	})(_core.React.Component);

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _core = __webpack_require__(20);

	var _baseControl = __webpack_require__(22);

	var _baseControl2 = _interopRequireDefault(_baseControl);

	var Toast = (function (_Control) {
	    _inherits(Toast, _Control);

	    function Toast(cfg) {
	        _classCallCheck(this, Toast);

	        _get(Object.getPrototypeOf(Toast.prototype), 'constructor', this).call(this, '', false);

	        this.outer.className = 'toast';
	    }

	    _createClass(Toast, [{
	        key: 'show',
	        value: function show(text, _ref) {
	            var touchable = _ref.touchable;
	            var delay = _ref.delay;
	            var type = _ref.type;

	            clearTimeout(this.timer);
	            _get(Object.getPrototypeOf(Toast.prototype), 'show', this).call(this);
	            this.config({ text: text, touchable: touchable, delay: delay, type: type });
	            return this;
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            clearTimeout(this.timer);
	            _get(Object.getPrototypeOf(Toast.prototype), 'hide', this).call(this);
	            return this;
	        }
	    }, {
	        key: 'config',
	        value: function config(_ref2) {
	            var _this = this;

	            var text = _ref2.text;
	            var touchable = _ref2.touchable;
	            var delay = _ref2.delay;
	            var type = _ref2.type;

	            this.touchable = touchable;
	            _get(Object.getPrototypeOf(Toast.prototype), 'config', this).call(this, { text: text, touchable: touchable, delay: delay, type: type }, {
	                text: '',
	                touchable: true,
	                delay: 0,
	                type: ''
	            });
	            if (type) {
	                this.outer.classList.add(type);
	            } else {
	                this.outer.className = 'toast';
	            }
	            if (this.configData.delay) {
	                this.timer = setTimeout(function () {
	                    _this.hide();
	                }, this.configData.delay);
	            }
	            _core.React.render(_core.React.createElement(
	                'span',
	                { onClick: this.touchable && this.hide.bind(this) },
	                this.configData.text
	            ), this.outer);
	        }
	    }]);

	    return Toast;
	})(_baseControl2['default']);

	exports['default'] = Toast;
	module.exports = exports['default'];

/***/ }
/******/ ]);