const { assert } = require("chai");
const map = require("../map");

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  it("should return [ 'g', 'c', 't', 'm', 't' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  const words2 = ["give", "cathy", "the", "mutant", "turtle"];
  it("should return [ 'v', 't', 'e', 't', 'r' ] for 'words2, word => word[2]'", () => {
    assert.deepEqual(map(words2, word => word[2]), [ 'v', 't', 'e', 't', 'r' ]);
  });
});