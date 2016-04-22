"use strict";
const assert = require("assert");
const methodRef = require("../index.js");
const staticMethod = methodRef.staticMethod;
const instanceMethod = methodRef.instanceMethod;
const firDotFnRemain = methodRef.firDotFnRemain;
const constructorMethod = methodRef.constructorMethod;

describe("test methodRef", () => {
    it("test methodRef.staticMethod", () => {
        let arr = [1, 2, 3];
        let double = _ => _ * _;

        let result = arr.map(staticMethod(double));

        assert.strictEqual(result[0], 1);
        assert.strictEqual(result[1], 4);
        assert.strictEqual(result[2], 9);
    });

    it("test methodRef.instanceMethod", () => {
        let map = new Map([
            ["fir", 1],
            ["sec", 2],
            ["thr", 3]
        ]);

        let doubler = {
            double: function (value, key, map) {
                map.set(key, value * value);
            }
        };

        map.forEach(instanceMethod(doubler, doubler.double));
        assert.strictEqual(map.get("fir"), 1);
        assert.strictEqual(map.get("sec"), 4);
        assert.strictEqual(map.get("thr"), 9);
    });

    it("test methodRef.firDotFnRemain", () => {
        function Test(value) {
            this.value = value;
        }

        Test.prototype.equals = function (Obj) {
            return this.value === Obj.value;
        };

        let compare = firDotFnRemain(Test.prototype.equals);
        assert.strictEqual(compare(new Test(1), new Test(1)), true);
        assert.strictEqual(compare(new Test(1), new Test(2)), false);
    });

    it("test methodRef.constructorMethod", () => {
        let arr = [1, 2, 3];

        let result = arr.map(constructorMethod(Number));

        assert.strictEqual(result[0].valueOf(), 1);
        assert.strictEqual(result[1].valueOf(), 2);
        assert.strictEqual(result[2].valueOf(), 3);
    });
});
