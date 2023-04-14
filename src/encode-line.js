const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let counter = 1;

  for(let i = 0; i < str.length; i++){
    console.log(str[i])
    for(let j = i + 1; j < str.length; j++){
      if(str[i] === str[j]){
        if(str[i] === str[j + 1]){
          counter++;
          str = str.slice(0, j) + (str.slice(j + 1) || '');
          j--;
        } else {
          counter++;
          str = str.slice(0, j) + (str.slice(j + 1) || '');
          j--;
          break;
        }
      } else {
        break;
      }
    }
    result += counter === 1 ? str[i] : (counter + str[i]);
    counter = 1;
  }

  return result;
}

module.exports = {
  encodeLine
};