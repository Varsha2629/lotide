let arr = [1,2,3,4,1,2];

let result = [];
for (let i = 0; i<arr.length; i++) {
    // check compare the values of result and arr[i], if it is not match then 
 	if(!result.includes(arr[i])) {
      result.push(arr[i]);      
}
  console.log(result);
}


let arr1 = [1,2,3,4,1,2,3];

let result1 = [];
for (let i = 0; i<arr1.length; i++) {
  for(let j = i+1; j < arr1.length; j++) {

    // each element excute using for
    // match first element to all element then 2 to all ...
    // add in result
    if(arr1[i] === arr1[j]) {          
        result1.push(arr1[i]);
    } 
  }
  console.log(result1);
}

