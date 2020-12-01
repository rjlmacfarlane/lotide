const findKey = function(obj, callback) {
  for (const element in obj) {
    if (callback(obj[element])) {
      return (element);
    }
  } return undefined;
};

module.exports = findKey;