const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log(assertArraysEqual(middle([1, 2]), [])); // Prints [] => Passes (because there is no middle in the first array).
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [ 5, 6 ])); // Prints [ 5, 6 ] => Passes
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [ 5 ])); // Prints [ 5 ] => Passes
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [ 9 ])); // Prints [ 5 ] => Fails