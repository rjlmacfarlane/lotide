// const assertArraysEqual = function(a, b) {
//   if (eqArrays(a, b)) {
//     console.log(`✅ Assertion Passed: ${a} === ${b}`);
//   } else console.log(`❌ Assertion Failed: ${a} !== ${b}`);
// };

// const eqArrays = function(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i] || a.length !== b.length) {
//       return false;
//     }
//   } return true;
// };

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  } return results;
};

module.exports = letterPositions;

//  TEST CODE:
// console.log(letterPositions("hello"));
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));