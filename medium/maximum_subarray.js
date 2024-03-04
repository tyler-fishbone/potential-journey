/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let curSum = 0
  let maxSubSum = nums[0]

  // for loop
  for (let n of nums) {
      if (curSum < 0) {
          curSum = 0
      }
      curSum += n
      maxSubSum = Math.max(curSum, maxSubSum)
      console.log({n:n, curSum:curSum, maxSubSum: maxSubSum})
  }

  return maxSubSum
};