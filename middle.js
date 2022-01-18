const eqArrays = function(arr1, arr2){
  var result = true;
  for(let i = 0; i < arr1; i++){
  
      if(arr1[i] !== arr2[i]){
        result = false;
      }      
  }
  console.log(result ? 'true' : 'false')
   return result
};
const assertArraysEqual = function(arr1, arr2){
  return eqArrays(arr1, arr2);
 
};

// ACTUAL FUNCTION
const middle = function(array) {
 
  if(array.length % 2 !== 0){
    // 2 val return
    return array[Math.floor(array.length / 2)]

  } else {
    const middleLen = Math.floor(array.length / 2)
    return [array[middleLen -1],array[middleLen]];
  }

  // let midValue = Math.floor((array.length) / 2);
    
  // console.log(midValue);
}
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);

module.exports = middle;