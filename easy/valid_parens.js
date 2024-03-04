/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  // empty is valid? yes
  // will it have any other kind of characters?
  // how big???
  // loop through, adding opens to an array, when encountering a close,
  // it should have a corresponding open at the end of the array
  // don't need the index
  if (s.length % 2 !== 0) return false // if odd, incorrect
  const stack = []
  const openersMap = { "(":")", "{":"}", "[":"]"}
  for(let elem of s) {
      if (elem in openersMap) {
          stack.push(elem)
      } else {
          if (stack.length === 0) return false
          let stackTop = stack.pop()
          if (openersMap[stackTop] !== elem) {
              return false
          }
      }
  }
  return stack.length === 0
};
// O(n) time
// O(n) space - creating a stack with it will be half as long