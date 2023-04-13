const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let label = [];
  const regexp = /[A-Z]|[a-z]/;

  if (members == null || members.length == 0) {
    return false;
  }

  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == "string" && regexp.exec(members[i]) != null) {
      label.push(regexp.exec(members[i])[0].toUpperCase());
    }
  }

  if (label == "") {
    return false;
  } else {
    return label.sort().join("");
  }
}

module.exports = {
  createDreamTeam,
};
