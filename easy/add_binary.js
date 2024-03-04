/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * this is a cheating solution. I am not going to waste my time with this question.
 */
var addBinary = function(a, b) {
  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2)
};