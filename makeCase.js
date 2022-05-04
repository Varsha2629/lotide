const makeCase = (input, casses) => {
  // Put your solution here
  let result = input;
  let stylescase = [];
  
  if(Array.isArray(casses)){
    for(let selectStyle of casses){
      stylescase.push(selectStyle);
      console.log(stylescase) 
      }    
    } else stylescase.push(casses); 

  for(let casse of stylescase){
    switch(casse) {
      case 'camel':
      result = result.split(' ').map((e,i) => i ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join('');     
      break;

    case 'pascal':
      result = result.split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join('');    
      break;

    case 'snake':      
      result = result.split('').map((e) => e === ' ' ? e = '_' + e.slice(1) : e).join('');                
      break;

    case 'kebab':
      result = result.split('').map((e) => e === ' ' ? e = '-' + e.slice(1) : e).join('');             
      break;
    
    case 'title':
      result = result.split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
      break;
      
    case 'vowel':
      result = result.split('').map((e) => isVowel(e) ? e.toUpperCase() : e.toLowerCase()).join('');
      break;
        
    case 'consonant':
      result = result.split('').map((e) => !isVowel(e) ? e.toUpperCase() : e.toLowerCase()).join('');
      break;
          
    case 'upper':
      result = result.toUpperCase();    
      break;
            
    case 'lower':
      result = result.toLowerCase(); 
      break;        
    
    }
  }          
         
      return result; 
}

let isVowel = (e) => {
  (e.toLowerCase() === 'a' || e.toLowerCase() === 'e' || e.toLowerCase() === 'i' || e.toLowerCase() === 'o' || e.toLowerCase() === 'u')
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));