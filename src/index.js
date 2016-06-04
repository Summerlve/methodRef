"use strict";

let methodRef = Object.create(null);

methodRef.staticMethod = fn =>
                            arg => fn(arg);

methodRef.instanceMethod = function (Obj, fn) {
    return function () {
        return fn.apply(Obj, Array.prototype.slice.apply(arguments));
    };
};

methodRef.firDotFnRemain = function (fn) {
    return function () {
        let args = Array.prototype.slice.apply(arguments);

        let fir = args[0];
        let remain = args.slice(1);

        return fn.apply(fir, remain);
    };
};

methodRef.constructorMethod = fn =>
                                 _ => new fn(_);

Object.freeze(methodRef);

module.exports = methodRef;
