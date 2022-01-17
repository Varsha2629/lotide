const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


console.log(
  assertArraysEqual([1,2,3], [1,2,3], true) // expect true
);
console.log(
  assertArraysEqual([1,2,3], [1,2,3], false) // expect false
);

console.log(
  assertArraysEqual([1,2,3], [1,2,4], false) // expect false
);