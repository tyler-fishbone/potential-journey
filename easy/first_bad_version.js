/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let [left, right] = [0, n]
      while (left <= right) {
          let mid = Math.round((left + right) / 2)
          if (!isBadVersion(mid)) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
      return left
  };
};