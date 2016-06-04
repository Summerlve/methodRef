"use strict";

var methodRef = Object.create(null);

methodRef.staticMethod = function (fn) {
    return function (arg) {
        return fn(arg);
    };
};

methodRef.instanceMethod = function (Obj, fn) {
    return function () {
        return fn.apply(Obj, Array.prototype.slice.apply(arguments));
    };
};

methodRef.firDotFnRemain = function (fn) {
    return function () {
        var args = Array.prototype.slice.apply(arguments);

        var fir = args[0];
        var remain = args.slice(1);

        return fn.apply(fir, remain);
    };
};

methodRef.constructorMethod = function (fn) {
    return function (_) {
        return new fn(_);
    };
};

Object.freeze(methodRef);

module.exports = methodRef;