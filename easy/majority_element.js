/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let currentMajority = ''
  let currentMajorityCount = 0
  let countMap = new Map()

  for (let num of nums) {
      countMap[num] = (countMap[num] || 0) + 1
      if (countMap[num] > currentMajorityCount) {
          currentMajority = num
          currentMajorityCount = countMap[num]
      }
  }

  return currentMajority;
};