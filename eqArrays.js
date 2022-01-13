const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};

const eqArrays = function(arr1, arr2){
  
  var result = true;

  if(arr1.length !== arr2.length) return false;
  for(let i=0; i<arr1.length; i++){
  
      if(arr1[i] !== arr2[i]){
        result = false;
      }      
  }
   return result
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);