const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(a, b) {
  if (a.length === b.length) {
    let equal = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        equal = true;
      } else equal = false;
    } return equal;
  } else return false;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false