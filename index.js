"use strict";

function methodRef() {}

methodRef.staticMethod = function (fn) {
    return arg => fn(arg);
};

metdhodRef.instanceMethod = function (fn) {
    return function () {
        
    }
}
