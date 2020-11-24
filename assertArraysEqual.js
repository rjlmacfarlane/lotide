const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else console.log(`❌ Assertion Failed: ${a} !== ${b}`);
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

assertArraysEqual([1 ,2 ,3], [1, 2, 3]);  // Should pass
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);  // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail