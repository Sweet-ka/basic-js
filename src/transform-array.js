const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const discardPrev = (array, k) => {
    array.splice(k - 1, 2);
  };

  const doubleNext = (array, k) => {
    array.splice(k, 1, array[k + 1]);
  };

  const doublePrev = (arr, k, del) => {
    arr.splice(k, 1, arr[k - 1]);
  };

  const arrTransform = arr.slice();
  let del = false;

  for (i = 0; i < arrTransform.length; i++) {
    if (arrTransform[i] == undefined) {
      arrTransform.splice(i, 1);
      del = true;
      i--;
    } else if (arrTransform[i] == "--discard-next") {
      if (i + 1 < arrTransform.length) {
        arrTransform.splice(i, 2);
        del = true;
        i--;
      } else {
        arrTransform.splice(i, 1);
      }
    } else if (arrTransform[i] == "--double-next") {
      if (i + 1 < arrTransform.length && arrTransform[i + 1] === undefined) {
        arrTransform.splice(i, 2);
        del = true;
        i--;
      } else if (i + 1 < arrTransform.length) {
        doubleNext(arrTransform, i);
        del = false;
      } else {
        arrTransform.splice(i, 1);
      }
    } else if (arrTransform[i] == "--discard-prev") {
      if (i - 1 < 0 || del == true) {
        arrTransform.splice(i, 1);
        i--;
      } else {
        discardPrev(arrTransform, i);
        i = i - 2;
      }
      del = false;
    } else if (arrTransform[i] == "--double-prev") {
      if (i - 1 < 0 || del == true) {
        arrTransform.splice(i, 1);
        i--;
      } else {
        doublePrev(arrTransform, i, del);
      }
      del = false;
    } else {
      del = false;
    }
  }
  return arrTransform;
}

module.exports = {
  transform,
};
