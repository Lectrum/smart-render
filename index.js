(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'breakpoints-json'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('breakpoints-json'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.breakpointsJson);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _breakpointsJson) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _breakpointsJson2 = _interopRequireDefault(_breakpointsJson);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var SmartRender = function (_Component) {
        _inherits(SmartRender, _Component);

        function SmartRender(props, context) {
            _classCallCheck(this, SmartRender);

            var _this = _possibleConstructorReturn(this, (SmartRender.__proto__ || Object.getPrototypeOf(SmartRender)).call(this, props, context));

            _this.state = {
                currentSize: '',
                render: true
            };


            /* eslint-disable no-multi-spaces */
            _this._getActualScreenSizes = _this._getActualScreenSizes.bind(_this);
            _this._onResize = _this._onResize.bind(_this);
            _this._currentSize = _this._currentSize.bind(_this);
            /* eslint-enable no-multi-spaces */ // eslint-disable-line
            return _this;
        }

        _createClass(SmartRender, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this._currentSize();
                var breakpointsArray = this.props.breakpoints.split(' ');
                var wrongBreakpoints = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = breakpointsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var element = _step.value;

                        if (!Object.prototype.hasOwnProperty.call(_breakpointsJson2.default, element)) {
                            wrongBreakpoints.push(element);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (wrongBreakpoints.length) {
                    throw new SyntaxError(wrongBreakpoints + ' is a wrong breakpoints for SmartRender');
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this._currentSize();
                window.onresize = this._onResize;
            }
        }, {
            key: '_getActualScreenSizes',
            value: function _getActualScreenSizes(currentWidth, sizes) {
                return Object.keys(sizes).find(function (size) {
                    var actual = size;

                    if ((typeof size === 'undefined' ? 'undefined' : _typeof(size)) === 'object') {
                        actual = size.name;
                    }

                    return currentWidth >= _breakpointsJson2.default[actual].min && currentWidth <= _breakpointsJson2.default[actual].max;
                });
            }
        }, {
            key: '_currentSize',
            value: function _currentSize() {
                this.setState({
                    currentSize: this._getActualScreenSizes(window.innerWidth, this.props.views),
                    render: this.props.breakpoints.includes(this.state.currentSize)
                });
            }
        }, {
            key: '_onResize',
            value: function _onResize() {
                this._currentSize();
            }
        }, {
            key: 'render',
            value: function render() {
                var style = {
                    display: 'inline-block'
                };

                var smartRender = this.state.render ? _react2.default.createElement(
                    'div',
                    { style: style },
                    this.props.children
                ) : null;

                return smartRender;
            }
        }]);

        return SmartRender;
    }(_react.Component);

    SmartRender.propTypes = {
        children: _react.PropTypes.object.isRequired,
        breakpoints: _react.PropTypes.string,
        views: _react.PropTypes.object
    };
    SmartRender.defaultProps = {
        children: {},
        breakpoints: '',
        views: _breakpointsJson2.default
    };
    exports.default = SmartRender;
});
