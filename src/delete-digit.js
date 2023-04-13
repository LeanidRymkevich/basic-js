const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const length = `${num}`.split('').length;
  let str_arr;
  let array = [];

  for(let i = 0; i < length; i++){
    str_arr = `${num}`.split('');
    str_arr[i] = '';
    array.push(+str_arr.join(''));
  }

  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
