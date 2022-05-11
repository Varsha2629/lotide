// const isPalindrome = function(x) {
//   for(let i = 0; i < x; i++){
//  //   console.log(x[i]);
//     if(x[i] !== x[i-1]) {
//           return false;
//     }
//     }
//     return ;
// };
// console.log(isPalindrome(1213));

// codesignal palindrome

function solution(inputString) {  
    
  let str = inputString.split('').reverse().join('');
  return str === inputString; 
}
console.log(solution('abac'))
console.log(solution('az'))
console.log(solution('aabaa'))