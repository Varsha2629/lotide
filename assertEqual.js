// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('vish', 'vish');

module.exports = assertEqual;