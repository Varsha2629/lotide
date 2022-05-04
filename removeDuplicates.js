// remove duplication and return length
const removeDuplicates = function(nums) {
 let result = 0;
  for(let i = 0; i<nums.length; i++){   

    if(nums[i] !== nums[i+1]) {
        result++;        
    } 
  }
    return result;
 }
 removeDuplicates([0, 11, 12, 13, 13, 14, 14, 16])
