// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`:red_circle:`, `Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`:white_check_mark`, `Assertion Passed: ${actual} === ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('vish', 'vish');