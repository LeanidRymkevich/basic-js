const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) { 
    value = arguments.length === 0 ? '' : value;
    this.chain.push(this.getLink(value));
    return this;
  },

  removeLink(pos) {
    if(!Number.isInteger(pos) || pos <= 0 || pos > this.chain.length){
      this.chain.length = 0;
      throw Error(`You can't remove incorrect link!`);
    }

    pos--;
    this.chain = this.chain.slice(0, pos).concat(this.chain.slice(pos + 1));
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  },

  getLink(value){
    return `( ${String(value)} )`;
  }
};

module.exports = {
  chainMaker
};