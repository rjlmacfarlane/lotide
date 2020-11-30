// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = function(obj, value) {
  for (const key of Object.keys(obj)) {
    if (value === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//  TEST CODE:
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
