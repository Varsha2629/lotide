const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (inspect(actual) && inspect(expected)) {
    if (actual !== expected) {
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
    }
  }

};

const eqArrays = function (arr1, arr2) {

  var result = true;

  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result
}

const eqObjects = function (object1, object2) {
  let ab1 = Object.keys(object1);
  let ba2 = Object.keys(object2);


  if (ab1.length !== ba2.length) {
    return false;
  }

  for (let key of ab1) {

    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else { return true }
      }

      return false
    }
  }
  return true
};


assertObjectsEqual(eqObjects({ a: '1', b: 3 }, { b: 2, a: '1' }), true);
assertObjectsEqual(eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' }), true);
assertObjectsEqual(eqObjects({ c: '1', b: 2 }, { b: 2, a: '1' }), true);
// console.log(
//   assertObjectsEqual([1,2,3], [1,3], false) // expect true
// );