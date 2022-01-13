const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"

};
const findKeyByValue  = function(obj, val){
  let keyArray = Object.keys(obj);
  for(key of keyArray){
    if(obj[key] === val){
        return key
    }

  }  
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);