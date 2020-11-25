// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };

const countLetters = function(string) {
  let output = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  } return output;
};

// Test cases:
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("a bb ccc dddd eeeee ffffff ggggggg hhhhhhhh"));
console.log(countLetters("I am satisfied this function is performing as expected"));