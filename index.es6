const pipe = require('fj-pipe').pipe;

export default (...fns) =>
  pipe.apply(null, fns.reverse());
