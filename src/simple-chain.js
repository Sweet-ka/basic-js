const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],
 
  getLength () {
      return this.link.length;
  },

  addLink (value) {
    if(value == null){
      this.link.push('( '+ 'null' + ' )');
    }else{
      this.link.push('( ' + value + ' )');
    }
    return this;
  },

  removeLink (position) {
    if(typeof(position) == 'number' && position >= 1 && position < (this.link.length) && Number.isInteger(position)){
      this.link.splice((position - 1), 1);
    return this;
    }else{
      this.link = [];
      throw Error;
    }
  },

  reverseChain  () {
    if(this.link.length > 1){
      this.link.reverse();
    }
    return this;
  },

  finishChain () {
    let str;
    str = this.link.join('~~');
    this.link = [];
    return str;
  },
};

module.exports = chainMaker;
