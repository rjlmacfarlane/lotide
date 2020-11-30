const assertArraysEqual    = require('./assertArraysEqual');
const assertEqual          = require('./assertEqual');
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters         = require('./countLetters.js');
const countOnly            = require('./countOnly');
const eqArrays             = require('./eqArrays');
const eqObjects            = require('./eqObjects');
const findKey              = require('./findKey');
const findKeyByValue       = require('./findKeyByValue');
const head                 = require('./head');
const letterPositions      = require('./letterPositions');
const map                  = require('./map');
const middle               = require('./middle');
const tail                 = require('./tail');
const takeUntil            = require('./takeUntil');
const without              = require('./without');

module.exports = {
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters:       countLetters,
  countOnly:          countOnly,
  eqArrays:           eqArrays,
  eqObjects:          eqObjects,
  findKey:            findKey,
  findKeyByValue:     findKeyByValue,
  head:               head,
  letterPositions:    letterPositions,
  tail:               tail,
  map:                map,
  middle:             middle,
  takeUntil:          takeUntil,
  without:            without
};