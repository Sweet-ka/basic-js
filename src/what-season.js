const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (date === undefined) {
      return "Unable to determine the time of year!";
    }
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error("Invalid date!");
    }
    date.toJSON();

    switch (new Date(new Date(date).getTime()).getMonth() + 1) {
      case 1:
      case 2:
      case 12:
        return "winter";
      case 3:
      case 4:
      case 5:
        return "spring";
      case 6:
      case 7:
      case 8:
        return "summer";
      case 9:
      case 10:
      case 11:
        return "autumn";
    }
  } catch (err) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
