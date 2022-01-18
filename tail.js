const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};

const tail = function(arr) {
  let newArray = [...arr];
  newArray.splice(0,1);
  return newArray;
};

let testArray = [1,2,3,4,5];

assertEqual(tail(testArray)[0], 2);
assertEqual(tail(testArray).length, 2);

module.exports = tail;
