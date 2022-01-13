const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let ab1 = Object.keys(object1);
  let ba2 = Object.keys(object2);
  console.log(ab1);

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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual((eqObjects(cd, dc)), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual((eqObjects(cd, cd2)), false)