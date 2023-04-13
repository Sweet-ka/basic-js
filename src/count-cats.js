const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError("Not implemented");
  let count = 0;
  if (matrix == undefined || matrix.length == 0) {
    count = 0;
  }
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == "^^") {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
