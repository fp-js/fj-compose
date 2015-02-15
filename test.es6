import assert from 'assert';
import compose from './';

const add1 = (x) => x + 1,
  mult2 = (x) => x * 2,
  square = (x) => x * x;

const compose1 = compose(add1),
  compose2 = compose(add1, mult2),
  compose3 = compose(add1, mult2, square);


it('fj-compose', () => {
  assert.equal(compose1(0),1);
  assert.equal(compose2(1),4);
  assert.equal(compose3(1),16);
});
