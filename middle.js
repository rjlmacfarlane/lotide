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

const middle = function(array) {
  let output = [];
  if (array.length > 2) {
    let i = Math.ceil((array.length / 2) - 1);
    if (array.length % 2 !== 0) {
      output.push(array[i]);
    } else {
      output.push(array[i]); output.push(array[i + 1]);
    }
  } return output;
};

// Test cases:
console.log(assertArraysEqual(middle([1, 2]), [])); // Prints []
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [ 5, 6 ])); // Prints [ 5, 6 ]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [ 5 ])); // Prints [ 5 ]