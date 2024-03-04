/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let [left, right] = [0, s.length-1]
  while (left < right) {
      if (!isAlphaNumeric(s[left])) {
          left++
      } else if (!isAlphaNumeric(s[right])) {
          right--
      } else if (s[left].toLowerCase() != s[right].toLowerCase()) {
          return false
      } else {
          left ++
          right --
      }
  }
  return true
};
// time = O(n)
// space = O(1)

const isAlphaNumeric = (char) => {
  return /^[a-z0-9]$/i.test(char)
}