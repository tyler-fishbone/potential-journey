/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * javascript map methods, get, set, has, delete
 * if need access to index, need a for i loop
 */
const twoSum = function(nums, target) {
  const numsMap = new Map()
  for(let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]
      if (numsMap.has(complement)) {
          return [numsMap.get(complement), i]
      }
      numsMap.set(nums[i], i)
  }
  throw new Error('no Two Sum solution')
};
// O(n) time
// O(n) space
