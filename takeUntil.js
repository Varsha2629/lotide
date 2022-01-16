const takeUntil = function (array, callback) {
  let slice = [];

  for (let word of array) {
    if (!callback(word)){
      slice.push(word);
    }
    else {
      break;
    }
  }
  return slice;
}


const assertEqual = function(actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
      
  }else{
    console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
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
   return result;
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);