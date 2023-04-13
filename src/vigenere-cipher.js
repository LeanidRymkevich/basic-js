const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect){
    this.isDirect = arguments.length === 0 || isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let symbol;
    let row;
    let column;
    let table = this.getVigenereTable();
    let key_pos = 0;

    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length);

    message = message.toUpperCase();
    
    for(let i = 0; i < message.length; i++){
      symbol = message[i]
      if(!this.alphabet.includes(symbol)){
        result += symbol;
      } else {
        row = this.alphabet.indexOf(symbol);
        column = this.alphabet.indexOf(key[key_pos]);
        key_pos++;
        result += table[row][column];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }


  decrypt(string, key) {
    if(!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    
    let result = '';
    let symbol;
    let row;
    let column;
    let table = this.getVigenereTable();
    let key_pos = 0;

    key = key.toUpperCase();
    key = key.repeat(Math.ceil(string.length / key.length)).slice(0, string.length);
    string = string.toUpperCase();
    
    for(let i = 0; i < string.length; i++){
      symbol = string[i]
      if(!this.alphabet.includes(symbol)){
        result += symbol;
      } else {
        row = this.alphabet.indexOf(key[key_pos]);
        column = table[row].indexOf(symbol);
        key_pos++;
        result += this.alphabet[column];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  getVigenereTable(){
    const table = [];
    let letter;

    for(let i = 0; i < this.alphabet.length; i++){
      table.push([]);
    }

    for(let i = 0; i < this.alphabet.length; i++){
      for(let j = i; j < this.alphabet.length + i; j++){
        if(j < this.alphabet.length){
          letter = this.alphabet[j];
          table[i].push(letter);
        } else {
          letter = this.alphabet[j - this.alphabet.length];
          table[i].push(letter);
        }
      }
    }
    return table;
  }
}

module.exports = {
  VigenereCipheringMachine
};
