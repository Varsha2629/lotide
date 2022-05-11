// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function(nums, target) {

  let result = new Array(2).fill(-1)
   for(let i = 0; i<nums.length; i++){

      if(nums[i] === target){

         result[0] = i
         let j = i
         while(nums[j] === target) 
          j++;
         result[1] = j -1
         break;
      }

   }
  return result;

}
console.log(searchRange([5,7,7,8,8,10], 8))