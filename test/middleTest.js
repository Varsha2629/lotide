const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);