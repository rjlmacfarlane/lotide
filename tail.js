const tail = function(array) {
  if (array === undefined || array.length === 0) {
    return undefined;
  } else {
    let newArray = array.slice(1);
    return newArray;
  }
};

module.exports = tail;