const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("should return [4, 7] for o in 'hello world'", () => {
    assert.deepEqual(letterPositions("hello world").o, [4, 7]);
  });
});