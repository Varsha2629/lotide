let s = "A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits)";

const str = (s) => {
let result = '';
  for(let i =0; i <= 100; i++){
    
    result += s[i];
  
  }
  return result;
}
console.log(str(s));
