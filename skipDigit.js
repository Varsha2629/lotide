//sP =['abc1', 'ab2c']
//tp = ['zz456']

let s = 'ab12c';
let t = '1zz456';
let result = 0;
let sP = [];  
let tP = []; 

for(let i = 0; i < s.length; i++) { 
  if(Number.isInteger(+s[i])) {
    let str = s.split(s[i]).join('');
    for(let j = 0; j < str.length; j++) {
      if(str[j] > t[j]) break;
    }
    result++;
  }
}

for(let i = 0; i < t.length; i++) {
  if(Number.isInteger(+t[i])) {
    let str = t.split(t[i]).join('');
    for(let j = 0; j < str.length; j++) {
      if(str[j] < s[j]) break;
    }
  }
}

// for(let i = 0; i < sP.length; i++) {  
//   sP[i].split('');
//   for(let j = 0; j < sP[i].length; j++) {
//     // console.log(sP[i][j] , t[j])
//     if(!sP[i][j] < t[j]){
//       break;
//     }
//   }

// }

