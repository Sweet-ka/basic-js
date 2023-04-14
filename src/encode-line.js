const { NotImplementedError } = require("../extensions/index.js");

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
  if (!str) return str;
  let arr = [[str[0]]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === arr[arr.length - 1][0]) {
      arr[arr.length - 1].push(str[i]);
    } else {
      arr.push([str[i]]);
    }
  }
  let str_code = "";
  arr.forEach((item) => {
    item.length === 1 ? (str_code += item[0]) : (str_code += item.length + item[0]);
  });
  return str_code;
}

module.exports = {
  encodeLine,
};
