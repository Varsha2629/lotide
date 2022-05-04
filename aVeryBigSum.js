function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for(let value of ar){
    sum += value;
  } 
  return sum;
}
// input: 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// output: 5000000015