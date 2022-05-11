const compareTheTriplets => (a, b) {
  // Write your code here
  let alice = 0;
  let bob = 0;
  for(let i in a){
      if(a[i] > b[i]){
         alice += 1;  
      } else if(a[i] < b[i]) {
          bob += 1;
      }       
  }
  return [alice, bob];
};

console.log(compareTheTriplets([1,2,3], [3,2,1]));
// output:  1 1 