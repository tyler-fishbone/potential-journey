/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 case? all lowercase, ok
 */
 var canConstruct = function(ransomNote, magazine) {
  const magMap = {}
  for (let char of magazine) {
      magMap[char] = (magMap[char] || 0) + 1
  }
  for (let char of ransomNote) {
      if (!magMap[char]) {
          return false;
      } else {
          magMap[char] = magMap[char] - 1
      }
  }

  for (let char in magMap) {
      if (magMap[char] < 0) {
          return false;
      }
  }

  return true;
};