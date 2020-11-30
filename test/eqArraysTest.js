const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false
console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false