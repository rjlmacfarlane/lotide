// Note: Pair-programmed with @Bee (November 23, 2020 Cohort)
const findKeyByValue = function(obj, value) {
  for (const key of Object.keys(obj)) {
    if (value === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;