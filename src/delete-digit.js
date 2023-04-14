const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  let arr = n.toString().split("");
  let arr_deleted = [];
  for (let i = 0; i < arr.length; i++) {
    let item_deleted = Array.from(arr);
    item_deleted.splice(i, 1);
    arr_deleted.push(Number(item_deleted.join("")));
  }
  return Math.max(...arr_deleted);
}

module.exports = {
  deleteDigit,
};
