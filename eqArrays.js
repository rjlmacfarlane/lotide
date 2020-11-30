const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    // console.log(a.length !== b.length, 'Comparing length');
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
    //  console.log(a[i] !== b[i], 'Testing values');
      return false;
    }
  } return true;
};

module.exports = eqArrays;