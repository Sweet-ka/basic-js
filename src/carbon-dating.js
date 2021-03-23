const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') {
    return false;
  }else if(isNaN(Number(sampleActivity)) == true || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15){
    return false;
  }else{
    return Number(Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD)));
  }
};
