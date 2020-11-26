const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else return true;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || a.length !== b.length) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};

assertObjectsEqual(ab, ba); // Should fail
assertObjectsEqual({ b: "2"}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: "2"}, { a: "4", b: "2"}); // Should pass
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: ["2"]}); // Should pass
// assertObjectsEqual({ a: {c: ["2", "4"]}, b: ["2"]}, { a: {c: ["2", "4"]}, b: ["2"]}); // Should pass (I might be getting ahead of myself with this one... will revisit later)