const takeUntil = function(array, callback) {
  const output = [];
  for (const element of array) {
    if (!callback(element)) {
      output.push(element);
    } else return output;
  }
};

module.exports = takeUntil;