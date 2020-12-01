const assertObjectsEqual = require("../assertObjectsEqual");

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba); // Should fail
assertObjectsEqual({ b: "2"}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: "2"}, { a: "4", b: "2"}); // Should pass
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: ["2"]}); // Should pass