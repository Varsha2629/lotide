const countNumber = (nums) => {
  let i = 1;
  while (i < nums.length) {
    nums[i] += nums[i - 1];
    i++;
  }
  return nums;
};
countNumber([3, 1, 2, 10, 1]);

// Output: [3,4,6,16,17]
// const runningNumber = (nums) => {

//  let i = 1;
//  while(i < nums.length) {

//   nums[i] +=nums[i-1]
//   console.log(nums[i-1])
//   i++;
// }
//  return nums;
// }
// console.log(runningNumber([3,1,2,10,1]))
