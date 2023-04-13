const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  link: [],

  getLength() {
    return this.link.length;
  },

  addLink(value) {
    if (value == null) {
      this.link.push("( " + "null" + " )");
    } else {
      this.link.push("( " + value + " )");
    }
    return this;
  },

  removeLink(position) {
    console.log(this.link, position);
    if (typeof position == "number" && position >= 1 && position <= this.link.length && Number.isInteger(position)) {
      this.link.splice(position - 1, 1);
      console.log(this.link);
      return this;
    } else {
      this.link = [];
      throw Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    if (this.link.length > 1) {
      this.link.reverse();
    }
    return this;
  },

  finishChain() {
    let str;
    str = this.link.join("~~");
    this.link = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
