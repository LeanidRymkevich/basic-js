const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeat_time = +options.repeatTimes || 1;
  const add_repeat_time = +options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const add_separator = options.additionSeparator || '|';
  const string = '' + str;
  const addition = ('addition' in options) ? ('' + options.addition) : '';

  const addition_array = new Array(add_repeat_time).fill(addition);
  const string_array = new Array(repeat_time).fill(string + (addition ? addition_array.join(add_separator) : ''));

  return string_array.join(separator);
}

module.exports = {
  repeater
};

