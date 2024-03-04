/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // if 1 value only
 var search = function(nums, target) {
  if (target < nums[0] || target > nums[nums.length-1]) {
      return -1
  }
  
  let [left, right] = [0, nums.length-1]

  while (left <= right) {
      let midway = Math.floor((right + left) / 2)
      if (nums[midway] === target) {
          return midway
      } else if (target < nums[midway]) {
          right = midway - 1
      } else {
          left = midway + 1
      }
  }
  return -1
};
// space O(1)
// time O(logn) (must half the array of n elements logn time)