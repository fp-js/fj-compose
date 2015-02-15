let compose = (...fns) =>
  fns.reduce((f,g) => (...args) =>
  f(g.apply(null,args)));

export default compose;
