const without = function(source , itemsToRemove){
  let newList = [];
    for(let i = 0; i< source.length; i++){

        let remove = false;
        for(let j =0; j < itemsToRemove.length; j++){
          if(source[i] === itemsToRemove[j]){
              remove = true;
          }
        }
        if(remove === false){
          newList.push(source[i]);
        }
    }
  console.log('remove:', newList)  
  return newList;
}
without([2, 4, 3], [2]); // => [4, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// function added

const assertArraysEqual = function(arr1, arr2, TF){
  let result = eqArrays(arr1, arr2);
  console.log(result);
  return result === TF ? true : false;
}

const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};


const eqArrays = function(arr1, arr2){
  var result = true;
  for(let i=0; i<arr1.length; i++){
  
      if(arr1[i] !== arr2[i]){
        result = false;
      }      
  }
   return result
}