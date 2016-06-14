"use strict";

class MethodRef {
    static staticMethod(fn) {
        return (...args) =>
                        fn(...args);
    }

    static instanceMethod(Obj, fn) {
        return (...args) =>
                fn.call(Obj, ...args);
    }

    static firDotFnRemain(fn) {
        return (fir, ...remain) =>
                            fn.call(fir, ...remain);
    }

    static constructorMethod(fn) {
        return (...args) =>
                        new fn(...args);
    }
}

export default MethodRef;
