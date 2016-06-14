"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MethodRef = function () {
    function MethodRef() {
        _classCallCheck(this, MethodRef);
    }

    _createClass(MethodRef, null, [{
        key: "staticMethod",
        value: function staticMethod(fn) {
            return function () {
                return fn.apply(undefined, arguments);
            };
        }
    }, {
        key: "instanceMethod",
        value: function instanceMethod(Obj, fn) {
            return function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return fn.call.apply(fn, [Obj].concat(args));
            };
        }
    }, {
        key: "firDotFnRemain",
        value: function firDotFnRemain(fn) {
            return function (fir) {
                for (var _len2 = arguments.length, remain = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    remain[_key2 - 1] = arguments[_key2];
                }

                return fn.call.apply(fn, [fir].concat(remain));
            };
        }
    }, {
        key: "constructorMethod",
        value: function constructorMethod(fn) {
            return function () {
                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                return new (Function.prototype.bind.apply(fn, [null].concat(args)))();
            };
        }
    }]);

    return MethodRef;
}();

exports.default = MethodRef;