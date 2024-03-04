/**
 * @param {number[]} prices
 * @return {number}
 */
 // if no days, return 0, if 1 day return 0
 var maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  let maxReturn = 0
  let [left, right] = [0, 1]
  while (right < prices.length) {
      if (prices[right] < prices[left]) {
          left = right
      } else {
          maxReturn = Math.max(prices[right] - prices[left], maxReturn)
      }
      right++
  }
  return maxReturn
};
// time - O(n)
// space - 0(1)