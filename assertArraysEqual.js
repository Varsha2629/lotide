const eqArrays = function(arr1, arr2){

   let newArr = arr1.length !== arr2.length ? false : true;

  for(i of arr1){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    console.log(newArr);
    return newArr
  }  
};

const assertArraysEqual = function(arr1, arr2, TF){
  let result = eqArrays(arr1, arr2);
  console.log(result);
  return result === TF ? true : false;
}

console.log(
  assertArraysEqual([1,2,3], [1,2,3], true) // expect true
);
console.log(
  assertArraysEqual([1,2,3], [1,2,3], false) // expect false
);

console.log(
  assertArraysEqual([1,2,3], [1,2,4], false) // expect false
);