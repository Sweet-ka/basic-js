const { NotImplementedError } = require("../extensions/index.js");

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
function sortByHeight(arr) {
  let step = 0;
  let index_arr = [];
  arr.forEach((item, i) => {
    if (item === -1) index_arr.push(i);
  });
  index_arr.forEach((item) => {
    arr.splice(item - step, 1);
    step++;
  });
  arr.sort((a, b) => a - b);
  index_arr.forEach((item) => {
    arr.splice(item, 0, -1);
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
