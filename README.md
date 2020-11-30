# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rjlmacfarlane/lotide`

**Require it:**

`const _ = require('@rjlmacfarlane/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  assertArraysEqual(array1, array2)    ..... Tests the deep equivalence of given arrays 
*  assertEqual(actual, expected)        ..... Tests the equivalence of primitive data types
*  assertObjectsEqual(object1, object2) ..... Tests the deep equivalence of given objects
*  countLetters(string)                 ..... return a count of each letter found in a given string 
*  countOnly(allItems, itemsToCount)    ..... Returns an object containing counts of each item listed in the input object 
*  eqArrays(array1, array2)             ..... Compares a pair of given arrays for their deep equivalance
*  eqObjects(object1, object2)          ..... Compares a pair of given objects for their deep equivalance 
*  findKey(object, callback)            ..... Returns the first key of a given object for which the callback returns a truthy value
*  findKeyByValue(object, value)        ..... Returns the key paired with a given value in an object
*  head(array),                         ..... Returns the head of a given array
*  letterPositions(string)              ..... Identifies the index positions of each letter in a given string (appends letter: pos1, pos2, etc.)
*  tail(array)                          ..... Returns the tail of a given array
*  map(array, callback)                 ..... Returns a new array based on the results of the callback function
*  middle(array),                       ..... Returns the middle character(s) of an array (2 chars if array length is even, 1 char if odd)
*  takeUntil(array, callback)           ..... Returns items from a given array until the callback provided returns a truthy value 
*  without(source, itemsToRemove)       ..... Returns an given array with the specified items removed
};