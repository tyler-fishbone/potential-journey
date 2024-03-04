/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // worry about casing?
 //
 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (let char of s) {
      count[char] = (count[char] || 0) + 1
  }

  for (let char of t) {
      if (!count[char]) return false
      count[char] = count[char] - 1
      if (count[char] < 0) return false
  }
  
  for (let char of Object.keys(count)) {
      if (count[char] !== 0) return false
  }

  return true

};