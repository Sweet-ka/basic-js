const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';

  if(options.repeatTimes !== undefined){
      repeatTimes = options.repeatTimes;
  }

  if(options.separator !== undefined){
      separator = options.separator;
  }

  if(options.addition !== undefined){
      addition = options.addition;
  }

  if(options.additionRepeatTimes !== undefined){
      additionRepeatTimes = options.additionRepeatTimes;
  }

  if(options.additionSeparator !== undefined){
      additionSeparator = options.additionSeparator;
  }

  let additionTemp = addition;
  let strTemp ='';

  for (i = 0; i < additionRepeatTimes - 1; i++){
      additionTemp = additionTemp + additionSeparator + addition;
  }

  strTemp = str + additionTemp;
  let strRezult = strTemp;
  for (j = 0; j < repeatTimes - 1; j++){
      strRezult = strRezult + separator + strTemp
  }
  return strRezult;
};
  