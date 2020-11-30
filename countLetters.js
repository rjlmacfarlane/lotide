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

module.exports = countLetters;

// // Test cases:
// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("a bb ccc dddd eeeee ffffff ggggggg hhhhhhhh"));
// console.log(countLetters("I am satisfied this function is performing as expected"));