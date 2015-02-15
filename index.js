"use strict";

var pipe = require("fj-pipe").pipe;

module.exports = function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return pipe.apply(null, fns.reverse());
};