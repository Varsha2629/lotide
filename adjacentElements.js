function adjacentElements(inputArray) {
  let result = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < inputArray.length -1; i++) {
      // result = Math.max(result, inputArray[i] * inputArray[i+1]);      
      if(inputArray[i] * inputArray[i+1] > result){
        result = inputArray[i] * inputArray[i+1];
      }
  }
  return result;
}
console.log(adjacentElements([-23, 4, -3, 8, -12]))