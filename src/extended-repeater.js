const { NotImplementedError } = require("../extensions/index.js");

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = 0;
  let separator = "+";
  let addition = "";
  let additionRepeatTimes = 0;
  let additionSeparator = "|";

  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }

  if (options.separator !== undefined) {
    separator = options.separator;
  }

  if (options.addition !== undefined) {
    addition = options.addition;
  }

  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.additionSeparator !== undefined) {
    additionSeparator = options.additionSeparator;
  }

  let additionTemp = addition;
  let strTemp = "";

  for (i = 0; i < additionRepeatTimes - 1; i++) {
    additionTemp = additionTemp + additionSeparator + addition;
  }

  strTemp = str + additionTemp;
  let strRezult = strTemp;
  for (j = 0; j < repeatTimes - 1; j++) {
    strRezult = strRezult + separator + strTemp;
  }
  return strRezult;
}

module.exports = {
  repeater,
};
