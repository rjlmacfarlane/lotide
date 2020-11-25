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

const without = function(source, itemsToRemove) {
  if (!itemsToRemove) return source;
  let removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedItems.push(source[i]);
    }
  } return removedItems;
};



// Test cases:

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
