const squareCode = function(message) {
  // Put your solution here
    let str = message.split(' ').join('');
    // console.log(str);
    let sq = Math.ceil(Math.sqrt(str.length));
   
    let newStr = [];
   

    for(let i = 0; i < str.length; i+=sq) {
      newStr.push(str.substring(i, i+sq))    
      console.log(newStr)

    }
    for(let k = 0; k < sq; k++) {     
        newStr = newStr.map((e) => console.log(e));     
        console.log(newStr);
        
        if(newStr[k]) {
          newStr += newStr[k]; 
        }
        newStr += ' ';
      }

  

  return newStr;

    // for(let i = 0; i < str.length; i+=sq){
    //     newStr.push(str.substring(i, i+sq))        
      
    // }
    // for(let k = 0; k < sq; k++){
      
    //   for(let j = 0; j < newStr.length; j++){
    //     if(newStr[j][k]){
    //       result += newStr[j][k]; 
    //     }

    //   }
    //   result += ' ';
    // }
    // return result;

};
console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
