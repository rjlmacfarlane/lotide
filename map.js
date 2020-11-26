const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else console.log(`❌ Assertion Failed: ${a} !== ${b}`);
};

const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || a.length !== b.length) {
      return false;
    }
  } return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test data:
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["give", "cathy", "the", "mutant", "turtle"];
const results = map(words, word => word[0]);   // [g, c, t, m, t]
const results1 = map(words1, word => word[0]); // [g, c, t, m, t]

// Test code:
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results); // Should pass
assertArraysEqual([ 'g', 'C', 't', 'M', 't' ], results); // Should fail
assertArraysEqual(results, results1); // Should pass