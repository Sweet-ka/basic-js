const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type){
    this.type = type;
  }

  alphabetical = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  encrypt(message, key) {
    if(message == undefined || key == undefined){
      throw Error;
    }
    let text = message.toUpperCase();
    
    key = key.toUpperCase();
    let rezult = '';
    let i = 0;
    let j = 0;
    let count = 0;

    for (i = 0; i < text.length; i++){
      if(text[i] == text[i].match(/[A-Z]/)){
        if(j - count == key.length){
          j = 0;
          count = 0;
        }
        rezult = rezult + this.encryption(text[i], key[j - count]);
      }else{
        rezult = rezult + text[i];
        count++;
      }
        j++;
    }
     i = 0;
     j = 0;
     count = 0;
     if(this.type == false){
      return rezult = rezult.split('').reverse().join('');
      }else{
      return rezult;
    }

      
  }    

  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined){
      throw Error;
    }
    key = key.toUpperCase();
    let derezult = '';
    let n = 0;
    let count1 = 0;
    let i = 0;
    for (i = 0; i < encryptedMessage.length; i++){

      if(encryptedMessage[i] == encryptedMessage[i].match(/[A-Z]/)){
        if(n - count1 == key.length){
          n = 0;
          count1 = 0;
        }
        derezult = derezult + this.decryption(encryptedMessage[i], key[n - count1]);
      }else{
        derezult = derezult + encryptedMessage[i];
        count1++;
      }
        n++;
    }
     n = 0;
     count1 = 0;
     i = 0;
     if(this.type == false){
      return derezult = derezult.split('').reverse().join('');
      }else{
      return derezult;
    }
  }

  encryption (t, k) {
    let cipher = 0;
    if(this.alphabetical.indexOf(t, 0) + this.alphabetical.indexOf(k, 0) >= this.alphabetical.length){
      cipher = this.alphabetical.indexOf(t, 0) + this.alphabetical.indexOf(k, 0) - this.alphabetical.length;
    }else{
      cipher = this.alphabetical.indexOf(t, 0) + this.alphabetical.indexOf(k, 0);
    }
    return this.alphabetical[cipher];
  }
  
   decryption (c, k) {
    let decipher = 0;
    if(this.alphabetical.indexOf(c, 0) - this.alphabetical.indexOf(k, 0) < 0){
      decipher = this.alphabetical.indexOf(c, 0) - this.alphabetical.indexOf(k, 0) + this.alphabetical.length;
    }else{
      decipher = this.alphabetical.indexOf(c, 0) - this.alphabetical.indexOf(k, 0)
    }
    return this.alphabetical[decipher];
  }
}

module.exports = VigenereCipheringMachine;
