/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // make a map
  // keep tally of letters, sum up even ones and highest odd
  let ans = 0
  let map = {}

  for (let char of s) {
      map[char] = (map[char] || 0) + 1
      if (map[char] % 2 === 0) {ans += 2}
  }

  return s.length > ans ? ans + 1 : ans
};
// time O(n)
// space O(n)