"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var compose = _interopRequire(require("./"));

var add1 = function (x) {
  return x + 1;
},
    mult2 = function (x) {
  return x * 2;
},
    square = function (x) {
  return x * x;
};

var compose1 = compose(add1),
    compose2 = compose(mult2, add1),
    compose3 = compose(square, mult2, add1);


it("fj-compose", function () {
  assert.equal(compose1(0), 1);
  assert.equal(compose2(1), 4);
  assert.equal(compose3(1), 16);
});