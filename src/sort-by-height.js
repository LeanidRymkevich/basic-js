const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(heights) {
  const not_negative = heights.filter(item => item > 0).sort((a, b) => a - b);
  const result = [];
  let counter = 0;
  
  for(let item of heights){
    if(item < 0){
      result.push(item);
    } else {
      result.push(not_negative[counter]);
      counter++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]); // [-1, 150, 160, 170, -1, -1, 180, 190]