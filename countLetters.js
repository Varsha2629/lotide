const assertEqual = function(actual, expected) {
  if(actual !== expected){
      console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }else{
      console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  }

};

const countLetters = function(str){
  let letterObject = {};
  let nullSpaces = str.split(' ').join('');
  for(letter of nullSpaces){
  
    if(letterObject[letter]){
        letterObject[letter] += 1;
 
    } else {
      letterObject[letter] =1;
    }

  } 
 
  return letterObject
}

console.log(countLetters("lighthouse in the house"));
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }