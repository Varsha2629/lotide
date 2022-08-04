// hold the var
// revers the loop
// math the num with original
//number is string is a palindrome
const isPalindrome = function(x) {
  
  if(x < 0) {
    return false;
   }
   if(x < 10) {
     return true;
   }
  var digits = [];
  
  while (x > 0) {
    
      digits.push(x % 10);
      x = Math.trunc(x / 10);
  }
  digits.reverse();
  
  
  let leftPointer = 0;
  let rightPointer = digits.length -1;
  
  while(leftPointer < rightPointer) {
    if(digits[leftPointer] !== digits[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
};
console.log(isPalindrome(121));

// codesignal palindrome

// function solution(inputString) {  
    
//   let str = inputString.split('').reverse().join('');
//   return str === inputString; 
// }
// console.log(solution('abac'))
// console.log(solution('az'))
// console.log(solution('aabaa'))