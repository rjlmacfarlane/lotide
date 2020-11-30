const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("Returns an empty array when array length is <= 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Returns the middle two numbers of an even-length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [ 5, 6 ]);
  });
  it("Returns the middle number of an odd-length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [ 5 ]);
  });
});
