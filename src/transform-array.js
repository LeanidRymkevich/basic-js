const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const result = [];
  let item;

  for(let i = 0; i < arr.length; i++){

    item = arr[i];
    if(item === '--discard-prev'){
      if(arr[ i - 1 ]){
        result.pop();
      }
    } else if(item === '--double-prev'){
      if(arr[ i - 1 ]){
        result.push(result[result.length - 1]);
      }
    } else if(item === '--discard-next'){
      if(arr[ i + 1 ]){
        if(arr[i + 2] && (typeof arr[i + 2] === 'string') && arr[i + 2].indexOf('prev') > 0){
          i += 2;
        } else {
          i++;
        }
      }
    } else if(item === '--double-next'){
      if(arr[ i + 1 ]){
        result.push(arr[ i + 1 ]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = {
  transform
};
