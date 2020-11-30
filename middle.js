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

module.exports = middle;