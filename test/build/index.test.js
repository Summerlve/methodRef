"use strict";

var _assert = require("assert");

var assert = _interopRequireWildcard(_assert);

var _index = require("../../build/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("test methodRef", function () {
    it("test methodRef.staticMethod", function () {
        var arr = [1, 2, 3];
        var double = function double(_) {
            return _ * _;
        };

        var result = arr.map((0, _index.staticMethod)(double));

        assert.strictEqual(result[0], 1);
        assert.strictEqual(result[1], 4);
        assert.strictEqual(result[2], 9);
    });

    it("test methodRef.instanceMethod", function () {
        var map = new Map([["fir", 1], ["sec", 2], ["thr", 3]]);

        var doubler = {
            double: function double(value, key, map) {
                map.set(key, value * value);
            }
        };

        map.forEach((0, _index.instanceMethod)(doubler, doubler.double));
        assert.strictEqual(map.get("fir"), 1);
        assert.strictEqual(map.get("sec"), 4);
        assert.strictEqual(map.get("thr"), 9);
    });

    it("test methodRef.firDotFnRemain", function () {
        function Test(value) {
            this.value = value;
        }

        Test.prototype.equals = function (Obj) {
            return this.value === Obj.value;
        };

        var compare = (0, _index.firDotFnRemain)(Test.prototype.equals);
        assert.strictEqual(compare(new Test(1), new Test(1)), true);
        assert.strictEqual(compare(new Test(1), new Test(2)), false);
    });

    it("test methodRef.constructorMethod", function () {
        var arr = [1, 2, 3];

        var result = arr.map((0, _index.constructorMethod)(Number));

        assert.strictEqual(result[0].valueOf(), 1);
        assert.strictEqual(result[1].valueOf(), 2);
        assert.strictEqual(result[2].valueOf(), 3);
    });
});