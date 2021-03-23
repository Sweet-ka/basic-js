const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let label = [];
  const regexp = /[A-Z]|[a-z]/;

  if (members == null || members.length == 0){
    return false;
  }

  for (i = 0; i < members.length; i++){
    if (typeof(members[i]) == 'string' && regexp.exec(members[i]) != null){
      label.push(regexp.exec(members[i])[0].toUpperCase());
    }
  }

  if (label == ''){
    return false;
  }else{
    return label.sort().join('');
  }
};
