const deepEquals = (valOne, valTwo) => {
  if(typeof valOne !== 'object' && typeof valTwo !== 'object') {
    const isValOneNaN = isNaN(valOne) && typeof valOne === 'number';
    const isValTwoNaN = isNaN(valTwo) && typeof valTwo === 'number';
    if(isValOneNaN && isValTwoNaN) return true;
    return valOne === valTwo;

  }

  if(typeof valOne !== typeof valTwo) return false;
  
  if(Array.isArray(valOne) && Array.isArray(valTwo)) {
    if(valOne.length !== valTwo.length) return false;
    for(let i=0; i < valOne.length; i++){
      if(!deepEquals(valOne[i], valTwo[i])) return false;
    }
  }

  return true;
}

// console.log(deepEquals(2,3));
// console.log(deepEquals(NaN,NaN));
// console.log(deepEquals(2,NaN));
// console.log(deepEquals('a',['a','b']));
// console.log(deepEquals(['a','b'],['a','b']));


