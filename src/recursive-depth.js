const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  constructor(arr) {
    this.arr = arr;
  }

  count = 0;
  arrtemp = [];
  arrcontr = [];
  rezult = 0;

  calculateDepth(arr) {
    if (arr === undefined) {
      return undefined;
    } else if (arr.length > 0) {
      this.count++;
      arr.forEach((element) => {
        if (Array.isArray(element)) {
          if (element.length == 0) {
            this.arrtemp.push("empty array");
          } else {
            element.forEach((el) => {
              this.arrtemp.push(el);
            });
          }
        }
      });
      this.arrcontr = this.arrtemp;
      this.arrtemp = [];
      this.calculateDepth(this.arrcontr);
    } else {
      this.rezult = this.count;
      this.count = 0;
      return;
    }
    return this.rezult;
  }
}

module.exports = {
  DepthCalculator,
};
