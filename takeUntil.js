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

const takeUntil = function(array, callback) {
  const output = [];
  for (const element of array) {
    if (!callback(element)) {
      output.push(element);
    } else return output;
  }
};

module.exports = takeUntil;

//  TEST CODE:
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // Should pass
// console.log(assertArraysEqual(results1, [ 2, 7, 5, 2, 1 ])); // Should fail

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // Should pass
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ])); // Should fail