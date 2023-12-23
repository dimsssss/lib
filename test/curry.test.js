const assert = require('assert');
const curry = require('../src/curry');

describe('curry', function () {
  it('param length correct', function () {
    const c = curry((a, b, c) => {
      return a + b + c;
    });

    const c1 = c(1);
    const c2 = c1(2);
    const c3 = c2(3);

    assert.strictEqual(c3, 6);
  });

  it('param length long', function () {
    const c = curry((a, b, c) => {
      return a + b + c;
    });

    const c1 = c(1);
    const c2 = c1(2);
    const c3 = c2(3, 5);

    assert.strictEqual(c3, 6);
  });

  it('param length short', function () {
    const c = curry((a, b, c) => {
      return a + b + c;
    });

    const c1 = c(1);
    const c2 = c1(2);

    assert.strictEqual(typeof c2, 'function');
  });
});
