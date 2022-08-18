const findKey = function (object, callback) {
  let key = Object.keys(object);

  for (ob in object) {
    if (callback(object[ob])) {
      //console.log(ob)
      return ob;
    }
  }

}

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
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
  return result;
}

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)

module.exports = findKey;